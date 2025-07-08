export const validateUsername = (username) => {
  return username.length >= 3;
};

export const validatePassword = (password) => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasLetter && hasNumber && password.length >= 6;
};
