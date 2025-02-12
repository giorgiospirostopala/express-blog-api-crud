///_____________________________


// non dimentichiamoci di importare Express nel file delle rotte
const express = require('express');

// importiamo anche il controller
const postsController = require('../controllers/postsController');

// importiamo i dati
const posts = require("../data/postsData");

// e definiamo router con l'istanza express.Router()
const router = express.Router();

// recuperiamo i post in formato json (serve davvero?)
router.get('/', (req, res) => {
    res.json(posts);
});


///_____________________________

// rotte CRUD seguendo REST


// INDEX
router.get('/', (req, res) => {
    
    

});


// SHOW
router.get('/:id', (req, res) => {

    

});


// DESTROY
router.delete('/:id', (req, res) => {

    

});


///_____________________________


// esportiamo
module.exports = router;