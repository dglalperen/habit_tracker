// src/middlewares/authenticate.ts

import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

interface JwtPayload {
    id: number
    email: string
    iat: number
    exp: number
}

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ message: 'Access token missing' })
    }

    try {
        const secret = process.env.JWT_SECRET as string
        const payload = jwt.verify(token, secret) as JwtPayload
        req.user = { id: payload.id, email: payload.email }
        next()
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' })
    }
}
