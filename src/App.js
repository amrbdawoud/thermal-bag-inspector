// src/App.js

import React, { useState } from 'react';
import {
    Container,
    Typography,
    Button,
    Box,
    Paper,
    CircularProgress,
    Alert,
    CardMedia
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



// REMOVED: We no longer get the model object separately.
// const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });


function App() {
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // This helper function remains the same
    const fileToGenerativePart = async (file) => {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });
        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setResult(null);
        setError('');

        if (file) {
            if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
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
            setError('');
            return;
        }
        if (!imageFile) {
            setError("Please upload an image first.");
            return;
        }

        setLoading(true);
        setResult(null);
        setError('');

        try {
            const imagePart = await fileToGenerativePart(imageFile);

            const response = await fetch('/.netlify/functions/analyzeImage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send the image data in the request body
                body: JSON.stringify({ imagePart: imagePart }),
            });

            if (!response.ok) {
                const errorBody = await response.json().catch(() => ({ error: "An unknown error occurred." }));
                throw new Error(errorBody.error || `Server error: ${response.status}`);
            }

            const responseText = await response.text();


            // --- Parsing the response remains the same ---
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
        <Container component="main" maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 4, width: '100%' }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
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
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>Image Preview:</Typography>
                        <CardMedia
                            component="img"
                            image={imageUrl}
                            alt="Thermal bag preview"
                            sx={{ width: '100%', borderRadius: 2, border: '1px solid #ddd' }}
                        />
                    </Box>
                ) : (
                    <Button
                        component="label"
                        variant="outlined"
                        fullWidth
                        sx={{
                            height: 200,
                            borderStyle: 'dashed',
                            flexDirection: 'column',
                            textTransform: 'none',
                            color: 'text.secondary',
                            my: 2,
                            '&:hover': {
                                backgroundColor: 'action.hover'
                            }
                        }}
                    >
                        <CloudUploadIcon sx={{ fontSize: 40, mb: 1 }} />
                        <Typography fontWeight="medium">
                            <span style={{color: '#1976d2'}}>Click to upload</span> or drag and drop
                        </Typography>
                        <Typography variant="caption">PNG, JPG, or WEBP</Typography>
                        <input
                            type="file"
                            hidden
                            accept="image/png, image/jpeg, image/webp"
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
                    sx={{ py: 1.5, textTransform: 'none', fontSize: '1rem', mb: 2 }}
                >
                    {loading ? <CircularProgress size={26} color="inherit" /> :
                        result ? "Analyze Another Image" : "Analyze Image" }
                </Button>

                {/* Error Message */}
                {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

                {/* Result Display */}
                {result && (
                    <Box sx={{ mt: 3 }}>
                        <Typography
                            variant="h6"
                            component="h2"
                            textAlign="center"
                            fontWeight="medium"
                            color={result.status === 'APPROVED' ? 'success.main' : 'error.main'}
                        >
                            {result.status === 'APPROVED' ? '✅ Status: Approved' : '❌ Status: Rejected'}
                        </Typography>
                        <Paper variant="outlined" sx={{ p: 2, mt: 2, bgcolor: 'grey.50' }}>
                            <Typography variant="subtitle2" fontWeight="bold">AI Analysis:</Typography>
                            <Typography variant="body2" color="text.secondary">{result.analysis}</Typography>
                        </Paper>
                    </Box>
                )}
            </Paper>
        </Container>
    );
}

export default App;