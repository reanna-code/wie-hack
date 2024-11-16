'use client';
import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="fixed" sx={{ background: "linear-gradient(to left, #7a60ff, #cd9ffa)" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" passHref>
            <img
              src="images/logo.png"
              alt="logo"
              style={{ width: "200px", height: "auto" }}
            />
          </Link>
        </Box>

        {isMobile ? (
          // Hamburger Menu for Mobile
          <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        ) : (
          // Navbar Links for Desktop
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button component={Link} href="/dashboard" sx={{ color: "white", textTransform: "uppercase", fontWeight: 600, fontSize: "13px", margin: "0 5px" }}>
              Dashboard
            </Button>
            <Button component={Link} href="/diary" sx={{ color: "white", textTransform: "uppercase", fontWeight: 600, fontSize: "13px", margin: "0 5px" }}>
              Diary
            </Button>
            <Button component={Link} href="/quiz" sx={{ color: "white", textTransform: "uppercase", fontWeight: 600, fontSize: "13px", margin: "0 5px" }}>
              Quiz
            </Button>
            <Button component={Link} href="/wellness" sx={{ color: "white", textTransform: "uppercase", fontWeight: 600, fontSize: "13px", margin: "0 5px" }}>
              Wellness
            </Button>
            <Button component={Link} href="/login" sx={{ color: "white", textTransform: "uppercase", fontWeight: 600, fontSize: "13px", margin: "0 5px" }}>
              Sign Out
            </Button>
          </Box>
        )}

        {/* Drawer for Mobile Menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250, padding: 2 }}>
            <Button
              onClick={toggleDrawer}
              sx={{ padding: "10px", color: "black", width: "100%" }}
              component={Link}
              href="/dashboard"
            >
              Dashboard
            </Button>
            <Button
              onClick={toggleDrawer}
              sx={{ padding: "10px", color: "black", width: "100%" }}
              component={Link}
              href="/diary"
            >
              Diary
            </Button>
            <Button
              onClick={toggleDrawer}
              sx={{ padding: "10px", color: "black", width: "100%" }}
              component={Link}
              href="/quiz"
            >
              Quiz
            </Button>
            <Button
              onClick={toggleDrawer}
              sx={{ padding: "10px", color: "black", width: "100%" }}
              component={Link}
              href="/wellness"
            >
              Wellness
            </Button>
            <Button
              onClick={toggleDrawer}
              sx={{ padding: "10px", color: "black", width: "100%" }}
              component={Link}
              href="/login"
            >
              Sign Out
            </Button>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
