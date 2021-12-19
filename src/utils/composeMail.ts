import { ContactFormData } from '@typeDefs/mail';
import * as nodemailer from "nodemailer";
import escapeHtml from './escapeHtml';

const composeMail = (formData: ContactFormData): nodemailer.SendMailOptions => {
  const {
    name,
    email,
    topic,
    message,
  } = formData;

  const escapedMessage = escapeHtml(message);

  return {
    to: 'contact@sociometrics.xyz',
    from: 'contact@sociometrics.xyz',
    replyTo: email,
    subject: `Nowa wiadomość | ${topic}`,
    text: `
      Imię: ${name}
      Email: ${name}
      
      ${escapedMessage}
    `,
    html: `
      <p>
        <b>Imię:</b> ${name}
      </p>
      <p>
        <b>Email:</b> ${name}
      </p>
      <p>
        ${escapedMessage} 
      </p>
    `
  };
};

export default composeMail;
