const { Pool } = require('pg');

const DbConfig = {
    user: 'neondb_owner',
    host: 'ep-purple-resonance-b6ltg9zl-pooler.c-2.sa-east-1.aws.neon.tech',
    database: 'neondb',
    password: 'npg_PfJSIR37drVk',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }

}

export async function executeSQL(sqlScript) {
    try {
        const pool = new Pool(DbConfig);
        const client = await pool.connect();
        const result = await client.query(sqlScript);
        console.log(result.rows);
    } catch (error) {
        console.error('Error executing SQL script:', error);
    }


}