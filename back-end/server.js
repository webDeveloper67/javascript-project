import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import challengeRoutes from './routes/challenges.js'

dotenv.config()

connectDB()

const app = express()

// Reading the data in the body
app.use(express.json());

// Mounting Routes
app.use('/api/challenges', challengeRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `);
})