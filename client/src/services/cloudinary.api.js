import { clienteUrl } from '../config/clienteUrl'

export const getCloudinaryImages = async () => {
  const response = await fetch(`${clienteUrl}/post`)
  const data = await response.json()
  if (response.ok) {
    return data
  } else {
    throw new Error(data.message)
  }
}
