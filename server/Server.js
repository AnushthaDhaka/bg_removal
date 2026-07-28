import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import connectDB from './configs/Mongodb.js'
import userRouter from './routes/userRouter.js'
// App Config
const PORT = process.env.PORT || 4000
const app = express()
await  connectDB()
// Middleware
app.use(express.json())
app.use(cors())

// // Connect to MongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI)
//     console.log("Database Connected")
//   } catch (error) {
//     console.log(error.message)
//   }
// }
// connectDB()

// API routes
app.get('/', (req, res) => res.send("API Working"))
app.use('/api/user',userRouter)
 app.listen(PORT, () => console.log("Server running on port " + PORT))