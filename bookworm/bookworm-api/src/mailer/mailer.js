import nodemailer from 'nodemailer';

const from = '"Bookworm" <info@bookworm.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

export default function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Welcome to Bookworm',
    text: `
      Welcome to Bookworm!
      Please confirm your email to unlock the awesomeness!
      ${user.generateConfirmationUrl()}
    `,
  };

  transport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Bookworm: Reset password request',
    text: `
      To reset your password, please click/copy-paste the following link into the browser

      ${user.generateResetPasswordLink()}
    `,
  };

  transport.sendMail(email);
}
