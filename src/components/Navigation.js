import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Link,
} from "@mui/material";

function Navigation() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Header Navigation */}
      <AppBar
        position="static"
        elevation={2}
        sx={{ bgcolor: "white", color: "text.primary" }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "primary.main",
                display: "flex",
                alignItems: "center",
              }}
            >
              💼 Thermal Bag Inspector
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    textDecoration: "none",
                    color:
                      location.pathname === link.path
                        ? "primary.main"
                        : "text.primary",
                    fontWeight:
                      location.pathname === link.path ? "bold" : "medium",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Footer Navigation */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid #ddd",
          py: 3,
          mt: 6,
          bgcolor: "grey.50",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
              mb: 2,
            }}
          >
            <Link
              component={RouterLink}
              to="/privacy-policy"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/terms"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Terms of Service
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              About Us
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Contact
            </Link>
          </Box>
          <Typography
            variant="caption"
            display="block"
            textAlign="center"
            color="text.secondary"
          >
            © 2025 Thermal Bag Inspector. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Navigation;
