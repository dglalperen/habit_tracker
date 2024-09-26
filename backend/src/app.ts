// src/app.ts
import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import { errorHandler } from './middlewares/errorHandler'

dotenv.config()

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/api', routes)

// Error Handling Middleware
app.use(errorHandler)

export default app
