import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';

// eslint-disable-next-line no-restricted-imports
import config from '../config';

export async function sendEmail(emailOptions: Mail.Options) {
  const email_transporter = nodemailer.createTransport({
    service: config.EMAIL_SERVICE,
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASSWORD,
    },
  });

  try {
    email_transporter.sendMail(emailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email: ', error);
  }
}
