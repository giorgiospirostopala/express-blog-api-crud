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

    let filteredPosts = posts;

    if (req.query.tag) {
        filteredPosts = posts.filter(post => post.tags.includes(req.query.tag));
    }

    res.json(filteredPosts);

    // res.send(`Lista dei post`);

});


// SHOW
router.get('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);
        return res.json({ error: "Not Found", message: "Post non trovato" });
    }

    res.json(post);

    // res.send(`Dettaglio del post: ${req.params.id}`);

});


// DESTROY
router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);
        return res.json({status: 404, error: "Not Found", message: "Post non trovato" });
    }

    posts.splice(posts.indexOf(post), 1);

    console.log(posts); // per vedere il nuovo array

    res.sendStatus(204);

    // res.send(`Eliminazione del post: ${req.params.id}`);

});


///_____________________________


// esportiamo
module.exports = router;