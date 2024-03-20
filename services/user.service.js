const boom = require('@hapi/boom');

const getConection = require('../libs/postgress');

class UserService {
  constructor() {}

  async create(data) {
    const client = await getConection();
    const response = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [data.nombre, data.edad, data.email]
    );

    return response.rows[0];
  }

  async find() {
    const client = await getConection();
    const response = await client.query('SELECT * FROM users');

    return response.rows;
  }

  async findOne(id) {
    return { id };
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
