/// MEGLIO "nome-al-singolareController.js" per convenzione!

// per prima cosa importiamo i dati, quindi posts[]
const posts = require("../data/postsData");

function index(req, res) {

    let filteredPosts = posts;

    if (req.query.tag) {
        filteredPosts = posts.filter(post => post.tags.includes(req.query.tag));
    }

    res.json(filteredPosts);

    // res.send(`Lista dei post`);

}


function show(req, res) {

    // const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === parseInt(req.params.id));

    // in teoria questo fa già quanto richiesto dal bonus (?)
    if (!post) {
        res.status(404);
        return res.json({ status: 404, error: "Not Found", message: "Id non associato a nessun post" });
    }

    res.json(post);

    // res.send(`Dettaglio del post: ${req.params.id}`);

}


function store(req, res) {
    res.send(`Creazione nuovo post`);
}


function update(req, res) {
    res.send(`Modifica (totale) del post: ${req.params.id}`); // "modify" invece la fa parziale
}


function destroy(req, res) {

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    // in teoria questo fa già quanto richiesto dal bonus (?)
    if (!post) {
        res.status(404);
        return res.json({ status: 404, error: "Not Found", message: "Id non associato a nessun post" });
    }

    posts.splice(posts.indexOf(post), 1);

    console.log(posts); // per vedere il nuovo array

    res.sendStatus(204);

    // res.send(`Eliminazione del post: ${req.params.id}`);

}


// esportiamo tutto
module.exports = { index, show, store, update, destroy }

