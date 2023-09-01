export function getForgotPasswordEmail(otp: number, otpExpirationTime: number, imagePath?: string) {
  const imgTag = imagePath
    ? `<img src="cid:logo" alt="Logo" style="width: 50%; height: auto;"/>`
    : '';

  return `
<!DOCTYPE html>
<html>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

        <div style=
        "max-width: 100%; margin: 2% 2% 2% 2%; padding: 20px; text-align: center; 
        background-color: #ffffff; border-radius: 5px; 
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">

        ${imgTag}

        <p style="font-size: 18px; margin-bottom: 20px;">
        You have requested to reset your password. Here is your OTP:
        </p>

        <p style="font-size: 24px; color: #007bff; margin-bottom: 20px;"><b>${otp}</b></p>

        <p style="font-size: 14px; color: #888888;">
        This OTP is valid for ${otpExpirationTime} minutes. 
        If you didn't request this, please ignore this message.
        </p>
        </div>

    </body>

</html>`;
}
