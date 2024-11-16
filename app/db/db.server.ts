import pkg from "pg"


const {Pool} = pkg


const pool = new Pool({
    host: process.env.DB_HOST,           
    port: Number(process.env.DB_PORT),   
    user: process.env.DB_USER,           
    password: process.env.DB_PASSWORD,   
    database: process.env.DB_NAME,       
    ssl: { rejectUnauthorized: false }, 
});

export const db = {
    query: (text: string, params?: any[]) => pool.query(text, params),
};