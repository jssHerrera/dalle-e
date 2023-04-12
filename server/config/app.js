import express from 'express'
import cors from 'cors'
import pingRouter from '../app/routers/ping.router.js'
import postRouter from '../app/routers/post.router.js'
import dalleRouter from '../app/routers/dalle.router.js'

const app = express()

app.use(express.json())

app.use(cors())
// Router
app.use('/api/v1', pingRouter)
app.use('/api/v1', postRouter)
app.use('/api/v1', dalleRouter)

// Routing
app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express. Cursos 💻.')
})

export default app
