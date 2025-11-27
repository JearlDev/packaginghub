//TODO: comment current code and re-add commented code when backend is ready
// import { useRuntimeConfig } from "#app";

// export const useImageUrl = () => {
//   const config = useRuntimeConfig();
//   const backendUrl = config.public.BACKEND_URL;

//   const getImageUrl = (path) => {
//     return path ? backendUrl + path : "";
//   };

//   return {
//     getImageUrl,
//   };
// };

export const useImageUrl = () => {
  const getImageUrl = (path) => {
    return path ? path : "";
  };

  return {
    getImageUrl,
  };
};
