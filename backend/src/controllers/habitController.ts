// src/controllers/habitController.ts
import { Request, Response, NextFunction } from 'express'
import { HabitService } from '../services/habitService'

const habitService = new HabitService()

/**
 * @swagger
 * tags:
 *   name: Habits
 *   description: Habit management endpoints
 */

/**
 * @swagger
 * /habits:
 *   get:
 *     summary: Get all habits for the authenticated user
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of habits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habit'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
export const getHabits = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.user) {
            return res.status(400).json({ error: 'User not authenticated' })
        }
        const habits = await habitService.getHabits(req.user.id)
        res.status(200).json(habits)
    } catch (error) {
        next(error)
    }
}

/**
 * @swagger
 * /habits:
 *   post:
 *     summary: Create a new habit for the authenticated user
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Data for the new habit
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the habit
 *               description:
 *                 type: string
 *                 description: Description of the habit (optional)
 *     responses:
 *       201:
 *         description: Habit created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habit'
 *       400:
 *         description: User not authenticated or invalid input
 *       500:
 *         description: Internal server error
 */
export const createHabit = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.user) {
            return res.status(400).json({ error: 'User not authenticated' })
        }
        const habit = await habitService.createHabit(req.user.id, req.body)
        res.status(201).json(habit)
    } catch (error) {
        next(error)
    }
}

/**
 * @swagger
 * /habits/{id}:
 *   put:
 *     summary: Update an existing habit for the authenticated user
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the habit to update
 *     requestBody:
 *       description: Data to update the habit
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: New title of the habit (optional)
 *               description:
 *                 type: string
 *                 description: New description of the habit (optional)
 *     responses:
 *       200:
 *         description: Habit updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habit'
 *       400:
 *         description: User not authenticated or invalid input
 *       404:
 *         description: Habit not found
 *       500:
 *         description: Internal server error
 */
export const updateHabit = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.user) {
            return res.status(400).json({ error: 'User not authenticated' })
        }
        const habit = await habitService.updateHabit(
            req.user.id,
            parseInt(req.params.id),
            req.body
        )
        res.status(200).json(habit)
    } catch (error) {
        next(error)
    }
}

/**
 * @swagger
 * /habits/{id}:
 *   delete:
 *     summary: Delete a habit for the authenticated user
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the habit to delete
 *     responses:
 *       204:
 *         description: Habit deleted successfully
 *       400:
 *         description: User not authenticated
 *       404:
 *         description: Habit not found
 *       500:
 *         description: Internal server error
 */
export const deleteHabit = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.user) {
            return res.status(400).json({ error: 'User not authenticated' })
        }
        await habitService.deleteHabit(req.user.id, parseInt(req.params.id))
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}
