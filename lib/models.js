import mongoose from 'mongoose'

// Contact Message
const contactSchema = new mongoose.Schema({
  name:       { type: String, required: true, maxlength: 120 },
  email:      { type: String, required: true, maxlength: 200 },
  subject:    { type: String, default: '', maxlength: 200 },
  message:    { type: String, required: true, maxlength: 4000 },
  created_at: { type: Date, default: () => new Date() },
})

// Status Check
const statusSchema = new mongoose.Schema({
  client_name: { type: String, required: true },
  timestamp:   { type: Date, default: () => new Date() },
})

export const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model('ContactMessage', contactSchema)

export const StatusCheck =
  mongoose.models.StatusCheck ||
  mongoose.model('StatusCheck', statusSchema)
