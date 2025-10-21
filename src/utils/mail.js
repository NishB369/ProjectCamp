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

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
