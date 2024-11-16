'use client'; 
import React, { useState } from "react";
import { Button, TextField, Typography, Box, Container } from "@mui/material";
import { signIn, signUp, logOut, monitorAuthState } from "@/db/auth";
import { useRouter } from "next/navigation"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    console.log("Sign Up:", email, password);
    try {
      await signUp(email, password); // Assuming this returns a promise
      router.push("/dashboard"); // Redirect to /dashboard on success
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleSignIn = async () => {
    console.log("Sign In:", email, password);
    try {
      await signIn(email, password); // Assuming this returns a promise
      router.push("/dashboard"); // Redirect to /dashboard on success
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleSignOut = async () => {
    console.log("Sign Out");
    try {
      await logOut();
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" component="h1" sx={{color:"black"}} gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Box sx={{ mt: 3, width: "100%", textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            fullWidth
            sx={{ mb: 1 }}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSignIn}
            fullWidth
            sx={{ mb: 1 }}
          >
            Sign In
          </Button>
          <Button variant="outlined" color="error" onClick={handleSignOut} fullWidth>
            Sign Out
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
