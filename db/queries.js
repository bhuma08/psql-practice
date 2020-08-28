const index = `SELECT * FROM comedians`;
const show = `SELECT * FROM comedians WHERE id = $1`;
const create = `INSERT INTO comedians (name, age, status) VALUES ($1, $2, $3) RETURNING *`;

module.exports = { index, show, create }