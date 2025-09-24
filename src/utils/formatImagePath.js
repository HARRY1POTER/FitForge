// export const getImageUrl = (relativePath) => {
//   if (!relativePath) return ""; // fallback for missing image
//   return `http://localhost:5000/${relativePath.replace(/\\/g, "/")}`;
// };

// export const getImageUrl = (relativePath) => {
//   if (!relativePath) return "";
//   const baseUrl = process.env.REACT_APP_API_BAS_URL;
//   return `${baseUrl}/${relativePath.replace(/\\/g, "/")}`;
// };
export const getImageUrl = (relativePath) => {
  const baseUrl = process.env.REACT_APP_API_BAS_URL;

  if (!relativePath) return "";

  // If it's an array, return array of full URLs
  if (Array.isArray(relativePath)) {
    return relativePath.map((path) => `${baseUrl}/${path.replace(/\\/g, "/")}`);
  }

  // Otherwise, return single URL
  return `${baseUrl}/${relativePath.replace(/\\/g, "/")}`;
};
