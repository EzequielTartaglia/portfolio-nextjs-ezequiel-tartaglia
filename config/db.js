import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "portfolio-nextjs-ezequiel-tartaglia_db",
});

export { pool };
