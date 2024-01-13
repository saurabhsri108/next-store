import { createClient } from "@libsql/client";

const client = createClient({
	url: process.env.TURSO_NEXTSTORE_AUTHTOKEN!,
	authToken: process.env.TURSO_NEXTSTORE_URL!,
});

export default client;
