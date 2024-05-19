import { createConnection } from 'mysql';

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "moviehub",
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
// const connectionMySQL = createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "moviehub",
//   port: 3306,
// });
const connectionMySQL = createConnection({
  host: 'localhost',
  user: 'rootuser',
  password: 'sitar123',
  database: 'moviehub',
  port: 3306,
});

export default connectionMySQL;
