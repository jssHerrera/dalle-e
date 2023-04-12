import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { Images } from '../utils/Render'
import { FormField, Loader } from '../components'
import { UseForm } from '../hook/UseForm'
import { postGenerateImages } from '../services/dalle.api'
import { getConfig } from '../config/clienteUrl'

const CreatePost = () => {
  const navigate = useNavigate()
  const { form, setForm, handleChange } = UseForm({
    name: '',
    prompt: '',
    photo: ''
  })

  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)
  const [menssage, setMenssage] = useState({})

  const apiConfig = getConfig(form.prompt)

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({ ...form, prompt: randomPrompt })
  }

  const generateImage = () => {
    if (form.prompt) {
      postGenerateImages(apiConfig)
        .then(elem => {
          setForm({ ...form, photo: `data:image/jpeg;base64,${elem.photo}` })
        })
        .catch(error => setMenssage({
          msg: error.message,
          error: true
        }))
        .finally(() => {
          setGeneratingImg(false)
        })
    } else {
      alert('please enter a promt')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.prompt && form.photo) {
      setLoading(true)
      try {
        postGenerateImages(apiConfig)
          .then(elem => {
            console.log(elem)
            navigate('/')
          })
          .catch(error => setMenssage({
            msg: error.message,
            error: true
          }))
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    } else {
      alert('please enter a promt')
    }
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px]'>Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>
      <form className='mt-16' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-5 w-full'>
            <FormField
              labelName='Your Name'
              type='text'
              name='name'
              placeholder='Ex., john doe'
              value={form.name}
              handleChange={handleChange}
            />

            <FormField
              labelName='Prompt'
              type='text'
              name='prompt'
              placeholder='An Impressionist oil painting of sunflowers in a purple vase…'
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />

          </div>

          <div className='relative z-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center justify-self-center align-self-center'>
            <Images
              form
              preview={preview}
            />

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader />
              </div>
            )}

          </div>
          {menssage.error && (
            <p className='text-red-600'>{menssage.msg}</p>
          )}
        </div>

        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            onClick={generateImage}
            className=' text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className='mt-10'>
          {form.prompt && form.photo
            ? <p className='mt-2 text-[#666e75] text-[14px]'>** Once you have created the image you want, you can share it with others in the community **</p>
            : <p className='mt-2 text-[#666e75] text-[14px]'>** You can't share images, first generate one **</p>}

          <button
            type='submit'
            className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            style={{ pointerEvents: form.photo ? 'auto' : 'none' }}
            disabled={!form.photo}
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>
    </section>
  )
}
export default CreatePost
