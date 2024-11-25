import React, { useState, useEffect } from "react";
import { Box, TextField, Button, MenuItem } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Queue = () => {
  const [ticket, setTicket] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
  });

  // Track the last ticket number and queue position globally
  const [lastTicketNumber, setLastTicketNumber] = useState(0);
  const [lastQueuePosition, setLastQueuePosition] = useState(0);

  // Simulate queue status changes
  useEffect(() => {
    if (ticket) {
      const statusTimers = [];
      const updateStatus = (newStatus, delay) => {
        statusTimers.push(
          setTimeout(() => {
            setTicket((prevTicket) => ({ ...prevTicket, status: newStatus }));
          }, delay)
        );
      };

      // Waiting -> Near Service in 1 to 3 minutes
      updateStatus(
        "Near Service",
        Math.floor(Math.random() * 2 + 1) * 60 * 1000
      );

      // Near Service -> Being Served in 2 to 4 minutes after previous status
      updateStatus(
        "Being Served",
        Math.floor(Math.random() * 2 + 2) * 60 * 1000
      );

      return () => {
        // Clear all timers on component unmount or ticket change
        statusTimers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [ticket]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerateTicket = () => {
    const newTicketNumber = lastTicketNumber + 1; // Increment ticket number
    const newQueuePosition = lastQueuePosition + 1; // Increment queue position

    const status = "Waiting"; // Default status
    const checkInTime = new Date().toLocaleTimeString();

    setTicket({
      ticketNumber: newTicketNumber,
      status,
      checkInTime,
      queuePosition: newQueuePosition,
    });

    // Update global counters
    setLastTicketNumber(newTicketNumber);
    setLastQueuePosition(newQueuePosition);
  };

  // This function will get the status color for both the circle and the status text
  const getStatusColor = (status) => {
    switch (status) {
      case "Waiting":
        return "red"; // Red for Waiting status
      case "Near Service":
        return "orange"; // Orange for Near Service
      case "Being Served":
        return "green"; // Green for Being Served
      default:
        return "gray"; // Default gray
    }
  };

  // State for tracking button opacity after click
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Header />
      <div className="bg-white min-h-min">
        <Box
          sx={{
            display: "flex",
            p: 4,
            gap: 4,
            alignItems: "flex-start",
            marginBottom: "50px",
            width: "100%", // Ensure full width for the container
          }}
        >
          {/* Ticket Generation Form */}
          <Box
            sx={{ flex: "0 0 50%", p: 3, boxShadow: 3, borderRadius: "8px" }}
          >
            <h1 className="text-blue-800 text-3xl font-bold">
              Ticket Generation
            </h1>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%", // Ensuring full width
              }}
            >
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                select
                label="Service Type"
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                <MenuItem value="Technical Support">Technical Support</MenuItem>
                <MenuItem value="Billing">Billing</MenuItem>
              </TextField>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleGenerateTicket();
                  setIsClicked(true); // Set clicked state to true
                }}
                fullWidth
                sx={{
                  opacity: isClicked ? 0.5 : 1, // Change opacity when clicked
                  transition: "opacity 0.3s ease", // Smooth transition for opacity change
                }}
              >
                Generate Ticket
              </Button>
            </Box>
          </Box>

          {/* Ticket Info Modal */}
          {ticket && (
            <Box
              sx={{
                flex: "0 0 45%",
                p: 3,
                boxShadow: 3,
                borderRadius: "8px",
                position: "relative",
                backgroundColor: "#2f3949", // Card background color
                color: "white", // Ensure text is readable
                height: "45vh",
              }}
            >
              {/* Status Indicator Circle */}
              <Box
                sx={{
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: getStatusColor(ticket.status), // Status color for circle
                  boxShadow: "0 0 8px rgba(0,0,0,0.2)",
                }}
              />
              <h2 className="text-3xl font-bold">Ticket Info</h2>
              <p className="text-lg mb-3">
                Ticket Number:{" "}
                <strong className="text-yellow-400">
                  {ticket.ticketNumber}
                </strong>
              </p>
              <p className="text-lg mb-3">
                Status:{" "}
                <strong style={{ color: getStatusColor(ticket.status) }}>
                  {ticket.status}
                </strong>{" "}
                {/* Status text color */}
              </p>
              <p className="text-lg mb-3">
                Check-In Time:{" "}
                <strong className="text-yellow-400">
                  {ticket.checkInTime}
                </strong>
              </p>
              <p className="text-lg">
                You are number{" "}
                <strong className="text-yellow-400">
                  {ticket.queuePosition}
                </strong>{" "}
                in the queue. Please wait while we prepare for your service.
              </p>
            </Box>
          )}
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Queue;
