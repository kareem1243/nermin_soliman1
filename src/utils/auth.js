export function validateUsername(username) {
  return username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username);
}

export function validatePassword(password) {
  return password.length >= 6 && /[0-9]/.test(password) && /[a-zA-Z]/.test(password);
}
