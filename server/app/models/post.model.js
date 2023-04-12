import mongoose from 'mongoose'
const { Schema } = mongoose

const post = new Schema({
  name: { type: String, require: true },
  promt: { type: String, require: true },
  photo: { type: String, require: true }
})

const postShema = mongoose.model('post', post)

export default postShema
