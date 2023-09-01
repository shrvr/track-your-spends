import crypto from 'crypto';

import ResetCode from 'src/models/ResetCode';

export function generateOneTimeCode(): number {
  const min = 1000;
  const max = 9999;

  const randomBytes = crypto.randomBytes(2);
  const randomValue = randomBytes.readUInt16BE(0);

  const scaledValue = min + (randomValue % (max - min + 1));

  return scaledValue;
}

export async function storeOneTimeCode(email: string, otp: number, otpExpirationTime: number) {
  try {
    otpExpirationTime = otpExpirationTime * 60 * 1000;
    const otpExpiration = new Date(Date.now() + otpExpirationTime);

    let resetCode = await ResetCode.findOne({ email });

    if (!resetCode) {
      resetCode = new ResetCode({
        email,
        otp,
        otpExpiration,
      });
    } else {
      // If user already exists, update OTP
      resetCode.otp = otp;
      resetCode.otpExpiration = otpExpiration;
    }

    await resetCode.save();
  } catch (error) {
    console.log('Error creating/updating OTP:', error);
  }
}
