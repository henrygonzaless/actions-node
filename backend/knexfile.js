const path = require('path');
require('dotenv').config()

const BASE_PATH = path.join(__dirname, 'src', 'db');
module.exports = {
  test: {
    client: 'pg',
    connection: process.env.DB_URI,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      tableName: 'cars',
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: process.env.DB_URI,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};