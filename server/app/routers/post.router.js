import { Router } from 'express'
import { getPostController, postController } from '../controllers/post.controller.js'

const router = Router()

// http://localhost:3000/api/v1/post
router
  .get('/post', getPostController)
  .post('/post', postController)

export default router
