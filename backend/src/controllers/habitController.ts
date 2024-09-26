// src/controllers/habitController.ts
import { Request, Response, NextFunction } from 'express'
import { HabitService } from '../services/habitService'

const habitService = new HabitService()

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
