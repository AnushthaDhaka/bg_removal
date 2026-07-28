import express from 'express'
import { clerkWebhooks } from '../controllers/userController.js'
const userRouter = express.Router()

userRouter.post('/Webhooks',clerkWebhooks)

export default userRouter