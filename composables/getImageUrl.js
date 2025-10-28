import { useRuntimeConfig } from "#app";

export const useImageUrl = () => {
  const config = useRuntimeConfig();
  const backendUrl = config.public.BACKEND_URL;

  const getImageUrl = (path) => {
    return path ? backendUrl + path : "";
  };

  return {
    getImageUrl,
  };
};
