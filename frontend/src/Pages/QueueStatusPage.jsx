import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Snackbar,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  TextField,
} from "@mui/material";
import { Image } from "primereact/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const QueueStatusPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, queueInfo } = location.state;

  const maxWaitingTime = Math.min(queueInfo.waitingTime, 20); // Cap waiting time to 20 minutes
  const [remainingTime, setRemainingTime] = useState(maxWaitingTime); // Track the countdown in whole minutes
  const [progress, setProgress] = useState(0);
  const [notificationOpen, setNotificationOpen] = useState(false);

  // Feedback modal state
  const [openFeedback, setOpenFeedback] = useState(false);
  const [rating, setRating] = useState(null); // Rating state
  const [comment, setComment] = useState(""); // Comment state
  const [formError, setFormError] = useState(false); // Error state for validation

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const totalDuration = maxWaitingTime * 60 * 1000;
    const minuteInterval = 60 * 1000;
    const progressInterval = totalDuration / 100;

    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressTimer);
          setNotificationOpen(true);
          setOpenFeedback(true); // Open the feedback modal when time is up
          return 100;
        }
        return oldProgress + 1;
      });
    }, progressInterval);

    const countdownTimer = setInterval(() => {
      setRemainingTime((oldTime) => {
        if (oldTime <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return oldTime - 1;
      });
    }, minuteInterval);

    return () => {
      clearInterval(progressTimer);
      clearInterval(countdownTimer);
    };
  }, [maxWaitingTime]);

  const handleFeedbackSubmit = () => {
    if (rating === null) {
      setFormError(true);
      return; // Do not submit if no rating is selected
    }
    setFormError(false);
    // Handle feedback submission logic (e.g., send to API)
    console.log("Feedback submitted:", { rating, comment });
    setOpenFeedback(false); // Close the feedback modal
  };

  return (
    <>
      <Header />
      <div className="bg-white pb-5">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="https://cdn.prod.website-files.com/62861fb0faf45bf95f09d5c2/62d8fbe73924162cd32a62a8_intro-balador.svg"
            className="rounded-lg shadow-lg"
            style={{ width: "300px", height: "auto" }}
          />
        </Box>

        <Card
          sx={{ maxWidth: 600, mx: "auto", mt: 4, padding: 2, boxShadow: 3 }}
        >
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "1.85rem", // Equivalent to Tailwind's text-4xl
                color: "#1976d2", // Custom color
                fontWeight: "bold", // Bold for emphasis
              }}
            >
              {service?.name} Queue Status
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem", // Slightly larger font
                color: "#333333", // Darker text color
                marginBottom: 2,
              }}
            >
              People in front of you: {queueInfo.peopleInFront}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem", // Slightly larger font
                color: "#ff9800", // Orange color for visibility
                marginBottom: 2,
                fontWeight: "medium", // Medium weight text
              }}
            >
              Estimated waiting time: {remainingTime} minutes
            </Typography>

            {/* Progress Bar */}
            <Box sx={{ width: "100%", mt: 2 }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>

            <Button
              variant="contained"
              onClick={goBack}
              sx={{
                mt: 3,
                backgroundColor: "#d32f2f",
                "&:hover": { backgroundColor: "#b71c1c" },
              }}
            >
              Leave Queue
            </Button>
          </CardContent>
        </Card>

        {/* Notification Snackbar */}
        <Snackbar
          open={notificationOpen}
          onClose={() => setNotificationOpen(false)}
          message="You are now free to get service! Your estimated wait time has finished."
          autoHideDuration={null} // Keeps notification until user manually closes
          action={
            <Button
              color="secondary"
              size="small"
              onClick={() => setNotificationOpen(false)}
            >
              Dismiss
            </Button>
          }
        />

        {/* Feedback Modal */}
        <Dialog open={openFeedback} onClose={() => setOpenFeedback(false)}>
          <DialogTitle>Feedback</DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom>
              We would love to hear your feedback!
            </Typography>

            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Rate your experience:
              </Typography>
              <Rating
                value={rating}
                onChange={(_, newValue) => setRating(newValue)}
                size="large"
                sx={{ mb: 2 }}
              />
              {formError && (
                <Typography color="error" variant="body2">
                  Please select a rating before submitting.
                </Typography>
              )}
            </Box>

            <TextField
              label="Additional Comments"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenFeedback(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleFeedbackSubmit} color="primary">
              Submit Feedback
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Footer />
    </>
  );
};

export default QueueStatusPage;
