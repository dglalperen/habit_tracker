// src/routes/index.ts
import { Router } from 'express'
import authRoutes from './authRoutes'
import habitRoutes from './habitRoutes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/habits', habitRoutes)

export default router
