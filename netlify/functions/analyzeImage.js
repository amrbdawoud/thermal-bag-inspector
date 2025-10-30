// This file goes in the `netlify/functions` directory
// It's a serverless function that will run on Netlify's backend.

// Use require for Node.js environment
const { GoogleGenAI } = require("@google/genai");

// Get the API key from Netlify's environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable is not set.");
}

// Initialize the AI client
const genAI = new GoogleGenAI({apiKey: GEMINI_API_KEY});

exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        // Parse the image data from the request body
        const { imagePart } = JSON.parse(event.body);

        if (!imagePart) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing image data' }) };
        }

        // --- This is the same logic from your original App.js ---
        const prompt = `You are a strict quality assurance inspector for a food delivery company. 
      Your job is to determine if a courier's thermal bag is in acceptable condition.
      
      - **ACCEPTABLE (APPROVED):** The bag must be structurally intact, and not have any visible rips, tears, or major damage.
      - **UNACCEPTABLE (REJECTED):** The bag must be rejected if it has significant damage like rips or tears. Ignore things like minor scuffs and an open zipper.
      
      Your response MUST be in two parts:
      1. A 1-2 sentence analysis of the bag's condition.
      2. On a new line, conclude with 'STATUS: APPROVED' or 'STATUS: REJECTED'.`;

        const apiResult = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [prompt, imagePart],
        });

        const responseText = apiResult.text;
        // -----------------------------------------------------

        // Send the raw text response back to the React app
        return {
            statusCode: 200,
            body: responseText,
        };

    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to analyze the image on the server.' }),
        };
    }
};
