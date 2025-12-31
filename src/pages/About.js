import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

function About() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          About Thermal Bag Inspector
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
          Thermal Bag Inspector is a specialized web-based tool designed to help
          delivery couriers, restaurant managers, and food delivery platforms
          maintain the highest standards of food safety and hygiene through
          automated thermal bag quality assessment.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          Our Mission
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          Food safety in the delivery industry is critical. Every day, millions
          of meals are transported in thermal bags, and the condition of these
          bags directly impacts food temperature, freshness, and safety. Our
          mission is to democratize access to quality control tools that were
          previously only available to large corporations, making
          professional-grade bag inspection accessible to individual couriers
          and small delivery businesses.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          The Technology
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          We leverage Google's advanced Gemini AI technology to analyze thermal
          bag images. Our system has been specifically prompted and optimized to
          identify common issues that compromise bag effectiveness, including:
        </Typography>
        <Box component="ul" sx={{ pl: 3, "& li": { mb: 1 } }}>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Tears and structural damage to exterior fabric
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Broken or malfunctioning zippers
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Stains and hygiene concerns
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Degraded insulation and thermal performance
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Mold, mildew, and organic residue
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
          Who We Serve
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          Our tool is designed for multiple stakeholders in the food delivery
          ecosystem:
        </Typography>
        <Box component="ul" sx={{ pl: 3, "& li": { mb: 1.5 } }}>
          <li>
            <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
              <strong>Independent Couriers:</strong> Self-employed delivery
              drivers who want to ensure their equipment meets professional
              standards and avoid customer complaints or deactivation from
              delivery platforms.
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
              <strong>Delivery Fleet Managers:</strong> Supervisors who need to
              conduct regular bag audits across large teams of drivers to
              maintain consistent quality standards.
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
              <strong>Restaurant Owners:</strong> Establishments that operate
              their own delivery services and need to verify their drivers'
              equipment meets health department requirements.
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
              <strong>Quality Assurance Teams:</strong> Platform operators and
              delivery companies conducting compliance checks and onboarding
              inspections.
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
          Why We Built This
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          The food delivery industry has grown exponentially, but quality
          control processes haven't kept pace. Manual bag inspections are
          time-consuming, subjective, and often inconsistent. We recognized the
          need for a fast, objective, and accessible solution that could provide
          instant feedback on bag condition without requiring specialized
          training or equipment.
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          By combining artificial intelligence with practical knowledge of food
          safety standards, we've created a tool that empowers everyone in the
          delivery chain to take ownership of quality and safety. Whether you're
          a solo courier checking your bag before a shift or a manager auditing
          a hundred bags, our tool provides consistent, reliable assessments in
          seconds.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          Our Commitment
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          We are committed to:
        </Typography>
        <Box component="ul" sx={{ pl: 3, "& li": { mb: 1 } }}>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Protecting user privacy - we don't store uploaded images
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Continuous improvement of our AI analysis accuracy
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Making food safety tools accessible to all
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Transparency in how our technology works
            </Typography>
          </li>
          <li>
            <Typography sx={{ fontSize: "1.05rem" }}>
              Supporting the professional growth of delivery workers
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
          Looking Forward
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          As we continue to develop Thermal Bag Inspector, we're exploring
          additional features such as batch processing for fleet inspections,
          detailed defect reports with recommendations, integration with
          delivery platform APIs, and historical tracking to monitor bag
          degradation over time. Our goal is to become the industry standard for
          thermal bag quality assessment.
        </Typography>

        <Box sx={{ mt: 5, p: 3, bgcolor: "grey.100", borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Have Questions or Feedback?
          </Typography>
          <Typography>
            We'd love to hear from you! Whether you have suggestions for
            improvement, questions about our technology, or stories about how
            our tool has helped your business, please reach out through our
            Contact page.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default About;
