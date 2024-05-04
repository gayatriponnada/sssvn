import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
	schema: "./src/lib/database/schema.ts",
	out: "./drizzle",
	driver: 'pg',
	dbCredentials: {
		url: process.env.DB_URL || '',
		authToken: process.env.DB_AUTH_TOKEN || ''
	}
} satisfies Config;
