// src/controllers/healthController.ts

import { Request, Response } from 'express'

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns the status of the API
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'OK'
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-10-05T14:48:00.000Z'
 */
export const healthCheck = (req: Request, res: Response) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
    })
}
