import { config } from 'dotenv'

config()

export const OPENAI_API = process.env.OPENAI_API_KEY

export const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
export const CLOUD_KEY = process.env.CLOUDINARY_API_KEY
export const CLOUD_SECRET = process.env.CLOUDINARY_API_SECRET

export const PORT = process.env.PORT
// export const URL = process.env.MONGODB_URI
