import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Link, Typography } from "@mui/material";

function Footer() {
  return (
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
  );
}

export default Footer;
