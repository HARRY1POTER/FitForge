// export const getImageUrl = (relativePath) => {
//   if (!relativePath) return ""; // fallback for missing image
//   return `http://localhost:5000/${relativePath.replace(/\\/g, "/")}`;
// };

export const getImageUrl = (relativePath) => {
  if (!relativePath) return "";
  const baseUrl = process.env.REACT_APP_API_BAS_URL;
  return `${baseUrl}/${relativePath.replace(/\\/g, "/")}`;
};
