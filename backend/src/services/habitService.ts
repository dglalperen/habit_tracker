// src/services/habitService.ts
import { HabitRepository } from '../repositories/habitRepository'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface CreateHabitInput {
    title: string
    description?: string
}

interface UpdateHabitInput {
    title?: string
    description?: string
}

export class HabitService {
    private habitRepository: HabitRepository

    constructor() {
        this.habitRepository = new HabitRepository(prisma)
    }

    async getHabits(userId: number) {
        return this.habitRepository.findByUser(userId)
    }

    async createHabit(userId: number, input: CreateHabitInput) {
        return this.habitRepository.create({
            ...input,
            userId,
        })
    }

    async updateHabit(
        userId: number,
        habitId: number,
        input: UpdateHabitInput
    ) {
        const habit = await this.habitRepository.findById(habitId)
        if (!habit || habit.userId !== userId) {
            throw new Error('Habit not found')
        }
        return this.habitRepository.update(habitId, input)
    }

    async deleteHabit(userId: number, habitId: number) {
        const habit = await this.habitRepository.findById(habitId)
        if (!habit || habit.userId !== userId) {
            throw new Error('Habit not found')
        }
        return this.habitRepository.delete(habitId)
    }
}
