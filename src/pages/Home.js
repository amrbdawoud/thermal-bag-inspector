import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  CircularProgress,
  Alert,
  CardMedia,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Home() {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fileToGenerativePart = async (file) => {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setResult(null);
    setError("");

    if (file) {
      if (
        !["image/png", "image/jpeg", "image/webp", "application/pdf"].includes(
          file.type
        )
      ) {
        setError("Invalid file type. Please upload a PNG, JPG, WEBP or PDF.");
        return;
      }
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleAnalyzeClick = async () => {
    if (result) {
      setImageFile(null);
      setImageUrl(null);
      setResult(null);
      setError("");
      return;
    }
    if (!imageFile) {
      setError("Please upload an image first.");
      return;
    }

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const imagePart = await fileToGenerativePart(imageFile);

      const response = await fetch("/.netlify/functions/analyzeImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imagePart: imagePart }),
      });

      if (!response.ok) {
        const errorBody = await response
          .json()
          .catch(() => ({ error: "An unknown error occurred." }));
        throw new Error(errorBody.error || `Server error: ${response.status}`);
      }

      const responseText = await response.text();

      let analysis = "No reasoning provided.";
      let status = "REJECTED";

      if (responseText.includes("STATUS: APPROVED")) {
        status = "APPROVED";
      } else if (responseText.includes("STATUS: REJECTED")) {
        status = "REJECTED";
      }

      const statusIndex = responseText.indexOf("STATUS:");
      if (statusIndex > 0) {
        analysis = responseText.substring(0, statusIndex).trim();
      } else {
        analysis = responseText.trim();
      }

      setResult({ status, analysis });
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to analyze the image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ py: 4 }}>
      {/* === SECTION 1: THE TOOL === */}
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4, mb: 6 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Thermal Bag Inspector 💼
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Upload a photo of a courier's thermal bag to check its quality.
          </Typography>
        </Box>

        {/* Image Preview or Upload Area */}
        {imageUrl ? (
          <Box sx={{ mt: 2, mb: 3 }}>
            <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
              Image Preview:
            </Typography>
            <CardMedia
              component="img"
              image={imageUrl}
              alt="Thermal bag preview"
              sx={{ width: "100%", borderRadius: 2, border: "1px solid #ddd" }}
            />
          </Box>
        ) : (
          <Button
            component="label"
            variant="outlined"
            fullWidth
            sx={{
              height: 200,
              borderStyle: "dashed",
              flexDirection: "column",
              textTransform: "none",
              color: "text.secondary",
              my: 2,
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography fontWeight="medium">
              <span style={{ color: "#1976d2" }}>Click to upload</span> or drag
              and drop
            </Typography>
            <Typography variant="caption">PNG, JPG, WEBP, or PDF</Typography>
            <input
              type="file"
              hidden
              accept="image/png, image/jpeg, image/webp, application/pdf"
              onChange={handleImageChange}
            />
          </Button>
        )}

        {/* Analyze Button */}
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handleAnalyzeClick}
          disabled={!imageFile || loading}
          sx={{ py: 1.5, textTransform: "none", fontSize: "1rem", mb: 2 }}
        >
          {loading ? (
            <CircularProgress size={26} color="inherit" />
          ) : result ? (
            "Analyze Another Image"
          ) : (
            "Analyze Image"
          )}
        </Button>

        {/* Error Message */}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {/* Result Display */}
        {result && (
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              textAlign="center"
              fontWeight="medium"
              color={
                result.status === "APPROVED" ? "success.main" : "error.main"
              }
            >
              {result.status === "APPROVED"
                ? "✅ Status: Approved"
                : "❌ Status: Rejected"}
            </Typography>
            <Paper variant="outlined" sx={{ p: 2, mt: 2, bgcolor: "grey.50" }}>
              <Typography variant="subtitle2" fontWeight="bold">
                AI Analysis:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {result.analysis}
              </Typography>
            </Paper>
          </Box>
        )}
      </Paper>

      {/* === SECTION 2: PUBLISHER CONTENT (REQUIRED FOR ADSENSE) === */}
      <Box component="article" sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          Why Thermal Bag Inspection is Critical for Food Delivery Safety
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          In the rapidly growing food delivery industry, maintaining the
          integrity of thermal bags is not just about keeping food warm—it is a
          fundamental matter of food safety and customer health. According to
          food safety guidelines from health organizations worldwide, bacteria
          grow rapidly in the "danger zone" between 40°F (4°C) and 140°F (60°C).
          A compromised thermal bag with rips, tears, broken zippers, or
          degraded insulation cannot effectively maintain proper temperature
          control, putting consumers at serious risk of foodborne illness.
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          Professional couriers and delivery drivers are the last line of
          defense in the food safety chain. While restaurants and food
          preparation facilities follow strict hygiene protocols, all those
          efforts can be compromised if the delivery bag is in poor condition.
          Studies have shown that food temperature can drop by as much as 10-15
          degrees within just 20 minutes if insulation is compromised. This is
          particularly concerning for high-risk foods like dairy products, meat,
          seafood, and prepared meals containing eggs.
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          Beyond temperature control, the cleanliness and structural integrity
          of thermal bags directly impact hygiene standards. Bags with interior
          stains, mold growth, or persistent odors can cross-contaminate food
          even if it's properly packaged. Torn linings can harbor bacteria in
          hard-to-clean crevices, while broken zippers allow external
          contaminants like dust, insects, or rainwater to enter. Regular
          inspection and replacement of damaged bags is not just a best
          practice—it's an essential requirement for any professional delivery
          operation.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          How Our AI-Powered Thermal Bag Inspector Works
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          Our Thermal Bag Inspector utilizes advanced artificial intelligence
          and computer vision technology to analyze the condition of delivery
          bags quickly and accurately. When you upload a photo, the AI model
          examines multiple aspects of the bag including surface texture,
          structural integrity, visible damage, cleanliness, and signs of wear
          and tear. The system has been trained on thousands of images to
          recognize the specific markers that indicate a bag is no longer
          suitable for food delivery.
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          The inspection process takes just seconds. Our AI looks for critical
          defects such as torn fabric or lining, broken or malfunctioning
          zippers, significant surface scratches that may have penetrated the
          insulation layer, visible stains or discoloration indicating poor
          hygiene, mold or organic residue buildup, and structural deformities
          that prevent proper closure. Each of these factors is evaluated and
          weighted based on severity to determine whether the bag meets
          acceptable standards for food delivery use.
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          The technology behind this tool leverages machine learning models
          specifically designed for quality control and defect detection. By
          analyzing patterns in the image data, the AI can identify issues that
          might be missed during quick visual inspections by human eyes. This
          makes it an invaluable tool for delivery companies conducting
          fleet-wide bag audits, individual couriers checking their equipment
          before shifts, and quality assurance managers maintaining compliance
          with food safety regulations.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          Common Reasons for Thermal Bag Rejection
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          Understanding why bags fail inspection helps couriers maintain their
          equipment and avoid costly replacements. Here are the most common
          issues identified by our inspection system:
        </Typography>
        <Box component="ul" sx={{ pl: 3, "& li": { mb: 1.5 } }}>
          <li>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              <strong>Deep scratches or tears in the outer fabric:</strong> Even
              small tears can expand quickly under regular use and compromise
              the insulation layers beneath. Surface damage also allows moisture
              penetration, which degrades insulation effectiveness.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              <strong>Broken or stuck zippers:</strong> A zipper that doesn't
              close completely creates gaps that allow heat to escape and
              contaminants to enter. This is one of the most critical failure
              points in thermal bag design.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              <strong>Visible mold, stains, or organic residue:</strong> These
              indicate inadequate cleaning and pose serious health risks. Mold
              spores can contaminate food packaging, and old food residue
              attracts pests.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              <strong>Compressed or damaged insulation:</strong> Bags that have
              lost their shape or show visible flattening of insulation panels
              can no longer maintain proper temperature barriers.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              <strong>Frayed edges and seam separation:</strong> When seams
              begin to come apart, the bag's structural integrity is
              compromised, and complete failure is imminent.
            </Typography>
          </li>
        </Box>

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          fontWeight="bold"
          sx={{ mt: 4 }}
        >
          Best Practices for Thermal Bag Maintenance
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          To extend the life of your thermal bags and ensure they pass regular
          inspections, follow these professional maintenance guidelines: Clean
          your bag after every shift using food-safe disinfectant, allow bags to
          dry completely before storage to prevent mold growth, inspect zippers
          weekly and lubricate them with zipper lubricant if needed, store bags
          in a cool, dry place away from direct sunlight, and replace bags
          immediately if you notice any tears, persistent odors, or zipper
          failures. Regular self-inspection using tools like ours can help you
          catch problems early before they lead to health code violations or
          customer complaints.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
