// non dimentichiamoci di importare Express nel file delle rotte
const express = require('express');

// importiamo anche il controller
const postsController = require('../controllers/entityController');

// e definiamo router con l'istanza express.Router()
const router = express.Router();

// rotte CRUD seguendo REST
router.get('/', (req, res) => {
    res.send('');
}); // index

router.get('/:id', (req, res) => {
    res.send('');
}); // show

router.post('/', (req, res) => {
    res.send('');
}); // store

router.put('/:id', (req, res) => {
    res.send('');
}); // update

router.delete('/:id', (req, res) => {
    res.send('');
}); // destroy

// esportiamo
module.exports = router;