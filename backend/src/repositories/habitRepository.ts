// src/repositories/habitRepository.ts
import { PrismaClient, Habit } from '@prisma/client'

export class HabitRepository {
    private prisma: PrismaClient

    constructor(prisma: PrismaClient) {
        this.prisma = prisma
    }

    async findByUser(userId: number): Promise<Habit[]> {
        return this.prisma.habit.findMany({
            where: { userId },
            include: { completions: true },
        })
    }

    async create(data: {
        title: string
        description?: string
        userId: number
    }): Promise<Habit> {
        return this.prisma.habit.create({ data })
    }

    async findById(id: number): Promise<Habit | null> {
        return this.prisma.habit.findUnique({ where: { id } })
    }

    async update(
        id: number,
        data: { title?: string; description?: string }
    ): Promise<Habit> {
        return this.prisma.habit.update({ where: { id }, data })
    }

    async delete(id: number): Promise<Habit> {
        return this.prisma.habit.delete({ where: { id } })
    }
}
