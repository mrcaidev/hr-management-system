import { Client } from "pg";

export const gauss = new Client({
  user: "caiyuwang",
  database: "human_resource",
  password: "siaoca@m708401",
  host: "47.102.108.205",
  port: 15432,
});
gauss.connect();
