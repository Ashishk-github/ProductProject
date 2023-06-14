/**
 * app configuration
 */
import dotenv from 'dotenv';

dotenv.load();

export default function () {
  process.variables = {
    app: {
      db_url:process.env.DB_URL
    },
  }
}
