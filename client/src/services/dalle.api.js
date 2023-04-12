import { clienteUrl } from '../config/clienteUrl'

export const postGenerateImages = async (datos = {}) => {
  const response = await fetch(`${clienteUrl}/dalle`, datos)
  const data = await response.json()
  if (response.ok) {
    return data
  } else {
    throw new Error(data.message)
  }
}
