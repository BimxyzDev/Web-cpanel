// api/account.js
export const accounts = [
  { username: "user1", password: "pw1" },
  
];

export function validateLogin(username, password) {
  return accounts.some(acc => acc.username === username && acc.password === password);
}
