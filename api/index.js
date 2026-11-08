import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas (Set this in Vercel Environment Variables later)
mongoose.connect(process.env.MONGO_URI || "your_mongodb_atlas_connection_string_here");

// Define basic Schema dynamically for the serverless function
const Hadith = mongoose.models.Hadith || mongoose.model('Hadith', new mongoose.Schema({
  text: String,
  reference: String,
  dayIndex: Number
}));

// Route 1: Daily Hadith
app.get('/api/daily-hadith', async (req, res) => {
  try {
    const epoch = new Date('2024-01-01').getTime();
    const today = new Date().getTime();
    const daysSinceEpoch = Math.floor((today - epoch) / (1000 * 60 * 60 * 24));
    
    const totalHadiths = await Hadith.countDocuments();
    if (totalHadiths === 0) return res.status(404).json({ error: "No Hadiths found" });

    const targetIndex = daysSinceEpoch % totalHadiths;
    const dailyHadith = await Hadith.findOne({ dayIndex: targetIndex });
    
    res.json(dailyHadith);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route 2: Test Route
app.get('/api/status', (req, res) => {
  res.json({ status: "Backend is running dynamically on Vercel" });
});

// CRITICAL FOR VERCEL: Export the app instead of app.listen()
export default app;
