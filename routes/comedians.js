const express = require('express');
const db = require ('../db/config');
const { index, show, create } = require('../db/queries');

const router = express.Router();

//index : /comedians/ gives the list of all comedians in the database
router.get('/', (req, res)=> {
    db.run(index)
    .then(resp => {
        const comedians = resp.rows
        res.json({comedians})
    })
    .catch(err => res.status(500).end())
    })

//show : /comedians/1 gives Trevor Noah details
router.get('/:id', (req, res) => {
    db.run(show, [req.params.id])
        .then(resp => {
            const comedians = resp.rows
            res.json({comedians})
        })
        .catch(err => res.status(500).end())
})

//create : new details are posted on '/' route
router.post('/', (req, res) => {
    db.run(create, [req.body.name, req.body.age, req.body.status])
        .then(resp => {
            const comedians = resp.rows[0]
            res.status(201).json(comedians)
        })
        .catch(err => res.status(500).end())
})

module.exports = router;