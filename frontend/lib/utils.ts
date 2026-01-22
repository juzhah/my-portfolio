import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const {
  STRAPI_API_KEY: strapi_api_key = "development",
  NEXT_PUBLIC_STRAPI_URL: strapi_url = "http://localhost:1337",
  NODE_ENV: node_env = "development",
} = process.env;

export const EnvConfig = () => ({
  strapi_api_key,
  strapi_url,
  node_env,
});
