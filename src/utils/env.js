
import dotenv from "dotenv";
dotenv.config();

export const env = (key, defaultValue) => {
  const value = process.env[key];
  return value !== undefined ? value : defaultValue;
};
