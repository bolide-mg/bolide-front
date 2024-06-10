"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (content: string, emailSender: string = 'onboarding@resend.dev', emailToSend: string | undefined = process.env.EMAIL_ADMIN) => {
  if (!emailToSend) {
    throw new Error('Email is null, so set env EMAIL_ADMIN');
  }
  return resend.emails.send({
    from: emailSender,
    to: emailToSend || '',
    subject: "Appointment created",
    html: `<p>The appointment ${content}</p>`,
  })
}
