import app from './config/app.js'
import { PORT } from './config/config.js'
import { connectDB } from './config/connectDB.js'

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`El servidor está corriendo en http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Error de conexión a la base de datos:', err)
  })
