import { Client } from "pg";

export const gauss = new Client({
  host: process.env.DB_HOST ?? "localhost",
  port: +(process.env.DB_PORT ?? "5432"),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
gauss.connect();
