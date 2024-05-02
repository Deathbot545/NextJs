// app/database.ts

import postgres from 'postgres';

export async function getData() {
  // Retrieve environment variables with fallback values
  const DATABASE_URL = process.env.DATABASE_URL || 'default_database_url'; // Adjust the default value as needed

  // Establish a connection to the database using the DATABASE_URL
  const sql = postgres(DATABASE_URL, { ssl: 'require' });
  
  // Execute a SQL query
  const response = await sql`SELECT version()`;
  
  // Log the response
  console.log(response);

  // Return the response
  return response;
}