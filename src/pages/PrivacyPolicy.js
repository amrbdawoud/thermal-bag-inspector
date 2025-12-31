import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

function PrivacyPolicy() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Last updated: December 31, 2025
        </Typography>

        <Typography paragraph>
          Thermal Bag Inspector ("we", "our", or "us") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, and safeguard your information when you use our thermal bag
          inspection service.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Information We Collect
        </Typography>
        <Typography paragraph>
          When you use our service, we may collect the following types of
          information:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            <Typography paragraph>
              <strong>Images:</strong> Photos of thermal bags that you upload
              for analysis. These images are processed by our AI service and are
              not permanently stored on our servers.
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              <strong>Usage Data:</strong> Information about how you interact
              with our website, including your IP address, browser type, device
              information, and pages visited.
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              <strong>Cookies and Tracking:</strong> We use cookies and similar
              tracking technologies to enhance your browsing experience and
              analyze site traffic.
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
          Google AdSense and Third-Party Advertising
        </Typography>
        <Typography paragraph>
          We use Google AdSense to display advertisements on our website. Google
          AdSense uses cookies and web beacons to serve ads based on your prior
          visits to our website or other websites on the Internet. Google's use
          of advertising cookies enables it and its partners to serve ads to you
          based on your visit to our site and/or other sites on the Internet.
        </Typography>
        <Typography paragraph>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{" "}
          or{" "}
          <a
            href="http://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aboutads.info
          </a>
          .
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          How We Use Your Information
        </Typography>
        <Typography paragraph>
          We use the collected information for the following purposes:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            <Typography paragraph>
              To provide and maintain our thermal bag inspection service
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              To analyze and improve the performance of our AI models
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              To understand how users interact with our website
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              To detect, prevent, and address technical issues
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              To display relevant advertisements through Google AdSense
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
          Data Security
        </Typography>
        <Typography paragraph>
          We implement appropriate technical and organizational security
          measures to protect your information. However, please note that no
          method of transmission over the Internet or electronic storage is 100%
          secure. While we strive to protect your personal information, we
          cannot guarantee its absolute security.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Image Processing and Storage
        </Typography>
        <Typography paragraph>
          Images uploaded to our service are processed through Google's Gemini
          AI API for analysis. These images are transmitted securely and are not
          permanently stored on our servers. We do not share your images with
          third parties except as necessary to provide the analysis service
          (i.e., Google's AI processing).
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Your Rights
        </Typography>
        <Typography paragraph>
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            <Typography paragraph>
              The right to access and receive a copy of your data
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              The right to request correction of inaccurate data
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              The right to request deletion of your data
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              The right to object to or restrict certain processing activities
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
          Cookies Policy
        </Typography>
        <Typography paragraph>
          Our website uses cookies to improve user experience and enable
          advertising features. Cookies are small text files stored on your
          device. You can control cookie preferences through your browser
          settings, but disabling cookies may affect the functionality of our
          service.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Children's Privacy
        </Typography>
        <Typography paragraph>
          Our service is not intended for children under the age of 13. We do
          not knowingly collect personal information from children under 13. If
          you believe we have collected information from a child under 13,
          please contact us immediately.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Changes to This Privacy Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the "Last updated" date.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about this Privacy Policy, please contact us
          through our Contact page.
        </Typography>
      </Paper>
    </Container>
  );
}

export default PrivacyPolicy;
