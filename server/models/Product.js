const { query } = require('../config/db');

class Product {
  static async findAll() {
    const { rows } = await query('SELECT * FROM products');
    return rows;
  }

  static async create({ name, price }) {
    const { rows } = await query(
      'INSERT INTO products(name, price) VALUES($1, $2) RETURNING *',
      [name, price]
    );
    return rows[0];
  }
}

module.exports = Product;
