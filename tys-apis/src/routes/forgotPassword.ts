import path from 'path';

import type Mail from 'nodemailer/lib/mailer';

import { sendEmail } from './emailService';
import { getForgotPasswordEmail } from './forgotPasswordEmail';

export async function sendOneTimePasswordEmail(
  otp: number,
  send_to: string,
  sent_from: string,
  otpExpirationTime: number,
  imagePath?: string,
) {
  try {
    const message = getForgotPasswordEmail(otp, otpExpirationTime, imagePath);
    const subject = 'Your Password Reset Code 🛡️';

    const emailOptions: Mail.Options = {
      from: sent_from,
      to: send_to,
      subject: subject,
      html: message,
    };

    if (imagePath) {
      const imageName = path.basename(imagePath);
      const imageCid = 'logo';

      emailOptions.attachments = [
        {
          filename: imageName,
          path: imagePath,
          cid: imageCid,
        },
      ];
    }

    await sendEmail(emailOptions);
  } catch (error) {
    console.error('Error sending password reset OTP: ', error);
  }
}
