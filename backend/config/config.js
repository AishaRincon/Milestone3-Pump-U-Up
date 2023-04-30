require('dotenv').config();

module.exports = {
  
  development: {
    username: "postgres",
    password: "Mile-st0n3!3",
    database: "postgres",
    host: "db.dxtjwathjqzsmeahyxrw.supabase.co",
    logging: true,
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "Mile-st0n3!3",
    database: "postgres",
    host: "db.dxtjwathjqzsmeahyxrw.supabase.co",
    dialect: "postgres"
  },
  production: {
    username: "postgres",
    password: "Mile-st0n3!3",
    database: "postgres",
    host: "db.dxtjwathjqzsmeahyxrw.supabase.co",
    dialect: "postgres"
  }
}

// username: process.env.DB_USERNAME,
// password: process.env.DB_PASSWORD,
// database: process.env.DB_NAME,
// host: process.env.DB_HOST,
// dialect: "postgres"
