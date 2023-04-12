import { getPingServices } from '../services/ping.services.js'

export const getPingController = async (req, res) => {
  try {
    const result = await getPingServices()
    res.json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
