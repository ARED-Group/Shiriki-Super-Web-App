import React, { useState } from "react";
import { Button, Modal, Box, TextField } from "@mui/material";
import { Image } from "primereact/image";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const Queue = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Email and password validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    let valid = true;

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (valid) {
      navigate("/queue-details"); // Only navigate if inputs are valid
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "500px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  };

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row min-h items-center lg:space-x-4">
        <div className="flex-1 p-4">
          <section className="p-8 text-center">
            <div className="flex items-center justify-center">
              <div className="flex-1 p-4">
                <h1 className="text-4xl text-white mb-4">
                  You are Welcome! to our Queue
                </h1>
                <Button onClick={handleOpen} variant="contained">
                  Login
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Box component="form" sx={{ mt: 4, textAlign: "center" }}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!emailError}
                        helperText={emailError}
                      />
                      <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!passwordError}
                        helperText={passwordError}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={handleLogin}
                      >
                        Login
                      </Button>
                    </Box>
                  </Box>
                </Modal>
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-center flex-1 p-10 text-white text-center">
          <div className="w-full h-96 mt-10 lg:mt-20">
            <Image
              src="https://lirp.cdn-website.com/9bcffaf9/dms3rep/multi/opt/iMakan+virtual+queue-1920w.jpeg"
              alt="Image"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Queue;
