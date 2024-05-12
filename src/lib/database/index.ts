import { createClient } from '@libsql/client/web/sssvn';
import { drizzle } from 'drizzle-orm/libsql';
import { DB_URL, DB_AUTH_TOKEN } from '$env/static/private';

export const client = createClient({
	url: DB_URL,
	authToken: DB_AUTH_TOKEN
});

export const db = drizzle(client);