// src/services/authService.ts
import { UserRepository } from '../repositories/userRepository'
import {
    hashPassword,
    comparePasswords,
    generateToken,
} from '../utils/authUtils'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface RegisterInput {
    email: string
    password: string
}

interface LoginInput {
    email: string
    password: string
}

export class AuthService {
    private userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository(prisma)
    }

    async register(input: RegisterInput) {
        const existingUser = await this.userRepository.findByEmail(input.email)
        if (existingUser) {
            throw new Error('User already exists')
        }

        const hashedPassword = await hashPassword(input.password)
        const user = await this.userRepository.create({
            email: input.email,
            password: hashedPassword,
        })

        return { id: user.id, email: user.email, createdAt: user.createdAt }
    }

    async login(input: LoginInput) {
        const user = await this.userRepository.findByEmail(input.email)
        if (!user) {
            throw new Error('Invalid credentials')
        }

        const isValid = await comparePasswords(input.password, user.password)
        if (!isValid) {
            throw new Error('Invalid credentials')
        }

        const token = generateToken({ id: user.id, email: user.email })
        return token
    }
}
