// src/routes/habitRoutes.ts

import { Router } from 'express'
import * as habitController from '../controllers/habitController'
import { authenticate } from '../middlewares/authenticate'

const router = Router()

router.use(authenticate)

router.get('/', habitController.getHabits)
router.post('/', habitController.createHabit)
router.put('/:id', habitController.updateHabit)
router.delete('/:id', habitController.deleteHabit)

export default router
