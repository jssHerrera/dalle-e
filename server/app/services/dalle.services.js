import { Configuration, OpenAIApi } from 'openai'
import { config } from 'dotenv'

config()
// import { OPENAI_API } from '../../config/config.js'

/**
 * Crea una nueva instancia de la clase OpenAIApi con la configuración proporcionada.
 * @param {Object} configuration - Objeto con la configuración de la API de OpenAI.
 * @param {string} configuration.apiKey - Clave de API de OpenAI.
 */
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)
/**
 * Devuelve un saludo desde Dall-e.
 * @returns {string} Saludo desde Dall-e.
 */
export const getDalleServices = async () => {
  return 'Hello from Dall-e'
}

// ================================================================================
/**
 * Crea una imagen con la API de OpenAI Dall-e.
 * @param {Object} req - Objeto de solicitud HTTP con el cuerpo de la solicitud.
 * @param {string} req.body.prompt - Texto de la descripción de la imagen a crear.
 * @returns {Object} Respuesta de la API de OpenAI con la imagen creada.
 */
export const postDalleServices = async (req) => {
  const { prompt } = req.body
  const aiResponse = await openai.createImage({
    prompt,
    n: 1,
    size: '1024x1024'
  })
  const image = aiResponse.data.data[0].b64_json
  return image
}
