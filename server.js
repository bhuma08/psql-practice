const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const { index } = require('./db/queries');
const db = require ('./db/config')

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, TV SHOWS!'))

server.get('/show', (req, res)=> {
db.run(index)
.then(resp => {
    const shows = resp.rows
    res.json({shows})
})
.catch(err => res.status(500).end())
})

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))