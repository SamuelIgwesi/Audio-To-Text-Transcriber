# 🎤 Audio-To-Text Transcriber

A simple **audio transcription tool** built with **Node.js** and **OpenAI Whisper API**. This project allows users to upload audio files and get accurate text transcriptions.

## 🚀 Features
✅ Upload audio files (MP3, WAV, etc.)
✅ Transcribe speech to text using OpenAI Whisper
✅ Display transcribed text in the frontend
✅ Error handling for file uploads and API requests

## 📌 Tech Stack
- **Backend:** Node.js, Express, Multer
- **API:** OpenAI Whisper API
- **Frontend:** HTML, CSS, JavaScript (Axios for requests)

## 🔧 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/SamuelIgwesi/Audio-To-Text-Transcriber.git
cd Audio-To-Text-Transcriber
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root folder and add:
```
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

### 4️⃣ Start the server
```bash
node index.js
```

## 🎯 Usage
1. Open the frontend in a browser.
2. Upload an audio file.
3. Click the **Transcribe** button.
4. View the transcribed text on the page.

## ❗ Troubleshooting
- Ensure your OpenAI API key is **valid** and has **credits**.
- Check that your backend server is **running** on the correct port.
- Review the logs for **error messages**.

## 📌 Future Improvements
🚀 Improve UI/UX for better experience  
🔗 Support multiple languages  
📁 Add cloud storage for uploaded files  

## 📜 License
This project is open-source and available under the **MIT License**.

---

🔗 **GitHub Repo:** [Audio-To-Text-Transcriber](https://github.com/SamuelIgwesi/Audio-To-Text-Transcriber)
