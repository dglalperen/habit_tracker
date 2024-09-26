// src/routes/index.ts
import { Router } from 'express'
import authRoutes from './authRoutes'
import habitRoutes from './habitRoutes'
import healthRoutes from './healthRoutes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/habits', habitRoutes)
router.use('/health', healthRoutes)

export default router
