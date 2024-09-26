// src/controllers/authController.ts

import { Request, Response, NextFunction } from 'express'
import { AuthService } from '../services/authService'

const authService = new AuthService()

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       description: User registration data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Internal server error
 */
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

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in a user and return a JWT token
 *     tags: [Auth]
 *     requestBody:
 *       description: User login credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
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
