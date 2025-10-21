import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Project Camp",
      link: "https://projectcamp.vercel.app",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailGenContent);
  const emailHTML = mailGenerator.generate(options.mailGenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "nishbcodes@gmail.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHTML,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error("Error:", error);
  }
};

const emailVerificationMailgenContent = (username, verifactionUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! We are excited to have you onboarded.",
      action: {
        instructions: "To verify the email please click the button below.",
        button: {
          color: "#ffa500",
          text: "Verify your Email",
          link: verifactionUrl,
        },
      },
      outro:
        "Need help or have questions, just reply to this email, we would love to help!",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro:
        "We got a request to reset the password associated to your account",
      action: {
        instructions: "To change the password please click the button below.",
        button: {
          color: "#00a1adff",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help or have questions, just reply to this email, we would love to help!",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
