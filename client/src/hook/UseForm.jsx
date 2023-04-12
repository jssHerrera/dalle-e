import { useState } from 'react'

export const UseForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value
    })
  }

  return {
    handleChange,
    form,
    setForm
  }
}
