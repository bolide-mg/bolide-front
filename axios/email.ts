"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (content: string) => {
  return resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.EMAIL_ADMIN || '',
    subject: "Appointment created",
    html: `<p>The appointment ${content}</p>`,
  })
}
