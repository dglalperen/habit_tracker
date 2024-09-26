// src/repositories/userRepository.ts
import { PrismaClient, User } from '@prisma/client'

export class UserRepository {
    private prisma: PrismaClient

    constructor(prisma: PrismaClient) {
        this.prisma = prisma
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email } })
    }

    async create(data: { email: string; password: string }): Promise<User> {
        return this.prisma.user.create({ data })
    }
}
