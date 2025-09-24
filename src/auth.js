// export function isLoggedIn() {
//   return localStorage.getItem("loggedIn") === "true";
// }

// export function login() {
//   localStorage.setItem("loggedIn", "true");
// }

// export function logout() {
//   localStorage.removeItem("loggedIn");
// }

// Check if the user is logged in by checking localStorage
export function isLoggedIn() {
  // Returns true if the user is logged in, false otherwise
  return localStorage.getItem("loggedIn") === "true";
}

// Log the user in by setting loggedIn to true in localStorage
export function login() {
  localStorage.setItem("loggedIn", "true");
  // Optionally, you can store a JWT token here if your backend uses JWT
  // localStorage.setItem("token", "your-jwt-token");
}

// Log the user out by removing the loggedIn flag from localStorage
export function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("token");
  localStorage.removeItem("_Id");
  localStorage.removeItem("fullName");
  // Optionally, remove the JWT token if it's being used
  // localStorage.removeItem("token");
}

// Get the JWT token if it exists (if you are using JWT)
export function getToken() {
  return localStorage.getItem("token");
}

// Set the JWT token in localStorage (if using JWT-based auth)
export function setToken(token) {
  localStorage.setItem("token", token);
}
