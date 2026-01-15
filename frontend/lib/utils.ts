import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const { STRAPI_API_KEY: strapi_api_key = "development" } = process.env;

export const EnvConfig = () => ({
  strapi_api_key,
});
