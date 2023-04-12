import Card from '../components/Card'

/**
 * Renders an array of `post` data as a list of `Card` components.
 * If the array is empty, returns a heading with the `title` prop.
 * @param {Array} data - An array of `post` data to render as cards.
 * @param {string} title - The title to display if there is no data to render.
 * @returns {JSX.Element} - A list of `Card` components or a heading element.
 */
export const RenderCards = ({ data, title }) => {
  // implementation code here
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />)
  }
  return (
    <h2 className='mt-5 font-bold text-[#6469ff] text-xl capitalize'>{title}</h2>
  )
}

// ==========================================================================
export const Images = ({ form, preview }) => {
  const imgSrc = form.photo ? form.photo : preview
  const imgClass = 'w-full h-full object-contain' + (form.photo ? '' : ' opacity-40')

  return (
    <img
      src={imgSrc}
      alt={form.prompt || 'preview'}
      className={imgClass}
    />
  )
}
