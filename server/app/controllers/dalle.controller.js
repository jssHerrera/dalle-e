import { getDalleServices, postDalleServices } from '../services/dalle.services.js'

/**
 * Controller function that returns a greeting message from Dall-e.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<Object>} A promise that resolves to the HTTP response object.
 */
export const getDalleController = async (req, res) => {
  try {
    const result = await getDalleServices()
    res.json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// ================================================================================
/**
 * Controller function that creates an image using OpenAI's Dall-e API.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<Object>} A promise that resolves to the HTTP response object.
 */
export const postDalleController = async (req, res) => {
  try {
    const result = await postDalleServices(req)
    res.status(200).json({ message: 'sucess', result })
  } catch (error) {
    return res.status(500).json({ message: 'Error al procesar la imagen debido a un problema con la API de OpenAI. Por favor, inténtalo de nuevo más tarde.' })
  }
}
