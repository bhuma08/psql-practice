const index = `SELECT * FROM comedians`;
const show = `SELECT * FROM comedians WHERE id = $1`;
const create = `INSERT INTO comedians (name, age, status) VALUES ($1, $2, $3) RETURNING *`;
const update = `UPDATE comedians SET age = age + 1 WHERE id = $1 RETURNING *`;
const destroy = `DELETE FROM comedians WHERE id = $1`;

module.exports = { index, show, create, update, destroy }