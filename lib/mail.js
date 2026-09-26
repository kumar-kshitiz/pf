import nodemailer from 'nodemailer'
import { PROFILE } from './data'

export async function sendContactEmail({ name, email, subject, message }) {
  const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD } = process.env
  const port = Number(process.env.SMTP_PORT || 465)
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !Number.isInteger(port) || port < 1 || port > 65535) {
    const error = new Error('SMTP configuration is missing or invalid')
    error.code = 'SMTP_NOT_CONFIGURED'
    throw error
  }
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  })
  const result = await transporter.sendMail({
    from: { name: 'Portfolio Contact', address: SMTP_USER },
    to: process.env.CONTACT_EMAIL || PROFILE.email,
    replyTo: { name, address: email },
    subject: `[Portfolio] ${subject || `Message from ${name}`}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '(not provided)'}\n\n${message}`,
    disableFileAccess: true,
    disableUrlAccess: true,
  })
  if (!result.accepted?.length) {
    throw new Error('SMTP server did not accept the message')
  }
}
