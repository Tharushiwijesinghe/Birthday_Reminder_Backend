import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import birthdaysRoutes from './routes/BirthdaysRoute.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/birthdays', birthdaysRoutes);

// Corrected version
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server is running on port ${process.env.PORT || 5000}`);
  });
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
});
