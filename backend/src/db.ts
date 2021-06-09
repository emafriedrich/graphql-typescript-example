import mysql from 'mysql';
import util from 'util';

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : 'ethernal_promises'
});

connection.connect((err, args) => {
  if (err) {
    console.log('Error connecting database');
  } else {
    console.log('Database is connected!');
  }
});

const queryPromise = util.promisify(connection.query.bind(connection));

export async function getCategories() {
  const results = await queryPromise('SELECT * FROM categories');
  return results;
}

export async function mainCategories() {
  const results = await queryPromise('SELECT * FROM categories ORDER BY views DESC LIMIT 6');
  return results;
}

export default connection;