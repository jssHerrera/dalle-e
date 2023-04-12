import mongoose from 'mongoose'
import { URL } from './config.js'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    throw err.message
  }
}
