import { getPostServices, postServices } from '../services/post.services.js'

export const getPostController = async (req, res) => {
  try {
    const result = await getPostServices()
    res.json({ success: true, data: result })
  } catch (error) {
    return res.status(201).json({ success: false, message: error })
  }
}

export const postController = async (req, res) => {
  try {
    const result = await postServices(req)
    res.json({ success: true, data: result })
  } catch (error) {
    return res.status(201).json({ success: false, message: 'error al guardar en la base de datos' })
  }
}
