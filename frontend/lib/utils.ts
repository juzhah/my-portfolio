import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const {
  STRAPI_API_KEY: strapi_api_key = "development",
  STRAPI_URL: strapi_url = "http://localhost:1337",
} = process.env;

export const EnvConfig = () => ({
  strapi_api_key,
  strapi_url,
});
