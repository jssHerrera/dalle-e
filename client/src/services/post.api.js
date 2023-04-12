import { clienteUrl } from '../config/clienteUrl'

export const postGenerateDB = async (datos = {}) => {
  const response = await fetch(`${clienteUrl}/post`, datos)
  const data = await response.json()
  if (response.ok) {
    return data
  } else {
    throw new Error(data.message)
  }
}
