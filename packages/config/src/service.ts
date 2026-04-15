// packages/config/src/service.ts
import dotenv from "dotenv";
dotenv.config();

export const ConfigService = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL!,
};
