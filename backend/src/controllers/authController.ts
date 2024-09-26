// src/controllers/authController.ts
import { Request, Response, NextFunction } from 'express'
import { AuthService } from '../services/authService'

const authService = new AuthService()

export const register = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await authService.register(req.body)
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = await authService.login(req.body)
        res.status(200).json({ token })
    } catch (error) {
        next(error)
    }
}
