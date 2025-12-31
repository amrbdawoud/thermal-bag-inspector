import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Contact Us
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
          We welcome your questions, feedback, and suggestions. Whether you're
          experiencing technical issues, have ideas for improvement, or just
          want to share how Thermal Bag Inspector has helped your business, we'd
          love to hear from you.
        </Typography>

        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            fontWeight="bold"
          >
            Get in Touch
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 3,
              p: 3,
              bgcolor: "grey.50",
              borderRadius: 2,
            }}
          >
            <EmailIcon sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Email Address
              </Typography>
              <Typography
                variant="h6"
                component="a"
                href="mailto:contact@thermalbaginspector.com"
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                contact@thermalbaginspector.com
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          What We Can Help With
        </Typography>
        <Box component="ul" sx={{ pl: 3, "& li": { mb: 1.5 } }}>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              <strong>Technical Support:</strong> Issues with image uploads,
              analysis errors, or browser compatibility
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              <strong>Feature Requests:</strong> Suggestions for new features or
              improvements to existing functionality
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              <strong>Business Inquiries:</strong> Partnership opportunities,
              bulk licensing, or API access
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              <strong>General Questions:</strong> How to use the tool,
              understanding results, or food safety best practices
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              <strong>Privacy Concerns:</strong> Questions about data handling,
              storage, or privacy policies
            </Typography>
          </li>
        </Box>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          Response Time
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          We strive to respond to all inquiries within 24-48 business hours. For
          urgent technical issues affecting active users, we aim to provide an
          initial response within a few hours during business hours.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          Before You Contact Us
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          To help us assist you more quickly, please consider the following:
        </Typography>
        <Box component="ul" sx={{ pl: 3, "& li": { mb: 1 } }}>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Check our informational content on the home page for usage
              guidance
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Review our Privacy Policy and Terms of Service for policy-related
              questions
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              When reporting technical issues, include your browser type,
              device, and error message if applicable
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              For analysis questions, describe the bag condition and what result
              you received
            </Typography>
          </li>
        </Box>

        <Box
          sx={{
            mt: 5,
            p: 3,
            bgcolor: "primary.main",
            color: "white",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Thank You for Using Thermal Bag Inspector
          </Typography>
          <Typography>
            Your commitment to food safety and quality makes a real difference.
            We're here to support you in maintaining the highest standards of
            thermal bag condition and food delivery excellence.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;
