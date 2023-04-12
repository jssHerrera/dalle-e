import { Router } from 'express'
import { getDalleController, postDalleController } from '../controllers/dalle.controller.js'

const router = Router()

// http://localhost:3000/api/v1/dalle
router
  .get('/dalle', getDalleController)
  .post('/dalle', postDalleController)

export default router
