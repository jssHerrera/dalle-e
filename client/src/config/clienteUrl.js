export const clienteUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1`

export const getConfig = (form) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: form })
  }
}

export const getPost = (form) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  }
}
