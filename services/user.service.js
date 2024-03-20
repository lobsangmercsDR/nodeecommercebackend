const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
const e = require('cors');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    })
  }

  async create(data) {
    const client = await this.pool.connect();
    try {
      const response = await client.query(
        'INSERT INTO usersstorenodes (nombre, email, user_password, user_role) VALUES ($1, $2, $3, $4) RETURNING *',
        [data.nombre, data.email, data.user_password, data.user_role]
      );

      return response.rows[0];
    } finally {
      client.release();
    }
  }

  async find() {
    const client = await this.pool.connect();
    try {
      const response = await client.query('SELECT * FROM usersstorenodes');

      return response.rows;
    } finally {
      client.release();
    }
  }

  async findOne(id) {
    const client = await this.pool.connect();
    try {
      const response = await client.query('SELECT * FROM usersstorenodes WHERE id = $1', [id]);
      if (response.rows.length === 0) {
        throw boom.notFound('User not found');
      } else {
        return response.rows[0];
      }
    } finally {
      client.release();
    }
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
