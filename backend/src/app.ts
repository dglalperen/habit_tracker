// src/app.ts
import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import { errorHandler } from './middlewares/errorHandler'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerOptions from './config/swagger'
import expressBasicAuth from 'express-basic-auth'

dotenv.config()

const app = express()

// Middleware
app.use(express.json())

// Swagger Setup
const specs = swaggerJsdoc(swaggerOptions)

app.use(
    '/api-docs',
    expressBasicAuth({
        users: { admin: 'password' },
        challenge: true,
    }),
    swaggerUi.serve,
    swaggerUi.setup(specs)
)

// Routes
app.use('/api', routes)

// Error Handling Middleware
app.use(errorHandler)

export default app
