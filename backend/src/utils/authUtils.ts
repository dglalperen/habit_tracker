// src/utils/authUtils.ts
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const SALT_ROUNDS = 10
const JWT_SECRET = process.env.JWT_SECRET as string
const JWT_EXPIRES_IN = '1h'

export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, SALT_ROUNDS)
}

export const comparePasswords = async (
    password: string,
    hash: string
): Promise<boolean> => {
    return bcrypt.compare(password, hash)
}

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}
