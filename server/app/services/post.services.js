import { v2 as cloudinary } from 'cloudinary'
import { CLOUD_NAME, CLOUD_KEY, CLOUD_SECRET } from '../../config/config.js'
import postShema from '../models/post.model.js'

export const getPostServices = async () => {
  const posts = await postShema.find({})
  return posts
}

// ========================================================

export const postServices = async (req) => {
  const { name, prompt, photo } = req.body

  // Configuration
  cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_KEY,
    api_secret: CLOUD_SECRET
  })

  const photoUrl = await cloudinary.uploader.upload(photo)

  const newPost = await postShema.create({
    name,
    prompt,
    photo: photoUrl.url
  })

  return newPost
}
