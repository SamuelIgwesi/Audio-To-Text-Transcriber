const express = require("express");
const multer = require("multer");
const { OpenAI } = require("openai");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Ensure the uploads directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Transcription endpoint
app.post("/transcribe", upload.single("audio"), async (req, res) => {
  // Initialize OpenAI client

  const audioPath = req.file.path;

  try {
    // Transcribe the audio file
    const transcription = await openai.audio.transcriptions.create(
      {
        file: fs.createReadStream(audioPath),
        model: "whisper-1",
        language: "en",
        response_format: "text",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    // Send the transcribed text as the response
    res.json({ text: transcription });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to transcribe audio" });
  } finally {
    // Cleanup: Delete the uploaded file
    if (fs.existsSync(audioPath)) {
      fs.unlinkSync(audioPath);
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
