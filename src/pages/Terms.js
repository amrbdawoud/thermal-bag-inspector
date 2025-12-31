import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

function Terms() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Terms of Service
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Last updated: December 31, 2025
        </Typography>

        <Typography paragraph>
          Welcome to Thermal Bag Inspector. By accessing or using our service,
          you agree to be bound by these Terms of Service ("Terms"). Please read
          them carefully before using our website.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Acceptance of Terms
        </Typography>
        <Typography paragraph>
          By accessing and using Thermal Bag Inspector, you accept and agree to
          be bound by these Terms and our Privacy Policy. If you do not agree to
          these Terms, please do not use our service.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Description of Service
        </Typography>
        <Typography paragraph>
          Thermal Bag Inspector provides an AI-powered image analysis tool
          designed to assess the condition of thermal delivery bags. Our service
          analyzes uploaded images to determine whether bags meet acceptable
          standards for food delivery use. The service is provided "as is" and
          is intended for informational purposes only.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Use of Service
        </Typography>
        <Typography paragraph>
          You agree to use our service only for lawful purposes and in
          accordance with these Terms. Specifically, you agree not to:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            <Typography paragraph>
              Use the service in any way that violates applicable laws or
              regulations
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Upload images containing inappropriate, offensive, or illegal
              content
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Attempt to interfere with or disrupt the service or servers
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Use automated systems to access the service without our permission
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Reproduce, duplicate, copy, or resell any part of our service
              without authorization
            </Typography>
          </li>
        </Box>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          AI Analysis Disclaimer
        </Typography>
        <Typography paragraph>
          The AI analysis provided by our service is for informational and
          guidance purposes only. It should not be considered as a definitive or
          professional inspection. While we strive for accuracy, the AI may not
          detect all defects or may occasionally provide false results. Users
          should exercise their own judgment and conduct proper manual
          inspections when making decisions about thermal bag safety and
          suitability.
        </Typography>
        <Typography paragraph>
          We are not responsible for any consequences arising from reliance on
          the AI analysis results, including but not limited to food safety
          incidents, health issues, or regulatory violations.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Uploaded Content
        </Typography>
        <Typography paragraph>
          By uploading images to our service, you represent and warrant that:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            <Typography paragraph>
              You own the rights to the images or have permission to use them
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              The images do not contain personal information of others without
              consent
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              The images do not violate any third-party rights, including
              intellectual property rights
            </Typography>
          </li>
        </Box>
        <Typography paragraph>
          You grant us a limited, non-exclusive license to process your uploaded
          images solely for the purpose of providing the analysis service. We do
          not claim ownership of your images.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Limitation of Liability
        </Typography>
        <Typography paragraph>
          To the maximum extent permitted by law, Thermal Bag Inspector and its
          operators shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, or any loss of
          data, use, goodwill, or other intangible losses resulting from:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            <Typography paragraph>
              Your use or inability to use the service
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Any errors or inaccuracies in the AI analysis
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Unauthorized access to or alteration of your data
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Any other matter relating to the service
            </Typography>
          </li>
        </Box>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          No Professional Advice
        </Typography>
        <Typography paragraph>
          The information and analysis provided through our service do not
          constitute professional advice. You should not rely solely on our AI
          analysis for compliance with health and safety regulations. Consult
          qualified professionals for advice specific to your situation.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Third-Party Services
        </Typography>
        <Typography paragraph>
          Our service uses third-party APIs and services, including Google's
          Gemini AI for image analysis and Google AdSense for advertising. Your
          use of our service is also subject to the terms and policies of these
          third-party providers.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Modifications to Service
        </Typography>
        <Typography paragraph>
          We reserve the right to modify, suspend, or discontinue the service
          (or any part thereof) at any time, with or without notice. We shall
          not be liable to you or any third party for any modification,
          suspension, or discontinuation of the service.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Changes to Terms
        </Typography>
        <Typography paragraph>
          We may update these Terms from time to time. We will notify you of any
          changes by posting the new Terms on this page and updating the "Last
          updated" date. Your continued use of the service after changes become
          effective constitutes your acceptance of the revised Terms.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Governing Law
        </Typography>
        <Typography paragraph>
          These Terms shall be governed by and construed in accordance with the
          laws of the jurisdiction in which we operate, without regard to its
          conflict of law provisions.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Contact Information
        </Typography>
        <Typography paragraph>
          If you have any questions about these Terms, please contact us through
          our Contact page.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Terms;
