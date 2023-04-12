import FileSaver from 'file-saver'
import { surpriseMePrompts } from '../constant'

/**
 * Returns a random prompt from the `surpriseMePrompts` array.
 * If the `prompt` argument is provided, ensures that the returned prompt is not the same as the provided prompt.
 * @param {string} prompt - Optional prompt string to avoid repeating.
 * @returns {string} - A random prompt from the `surpriseMePrompts` array.
 */
export const getRandomPrompt = prompt => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  if (randomPrompt === prompt) return getRandomPrompt(prompt)

  return randomPrompt
}

// ===============================================================================
/**
 * Downloads a given photo using the FileSaver library.
 * @param {string} _id - Unique identifier for the photo.
 * @param {File} photo - The photo to download.
 * @returns {Promise} - A promise that resolves when the download is complete.
 */
export async function downloadImage (_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}

// ===============================================================================
