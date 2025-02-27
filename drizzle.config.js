// import 'dotenv/config';
import dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config({path: '.env.local'})

export default {
    // out: './drizzle',
    schema: './configs/schema.jsx',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
    },
};