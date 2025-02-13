const express = require('express');
const postsRouters = require('./routers/postsRouters');
const app = express();
const port = 3000;

//  per gestire gli oggetti JSON nel body
/// "Body-parser"
app.use(express.json());

// per eventuali file statici
app.use(express.static('public'));

//  colleghiamo le rotte 
/// MEGLIO "/api/posts" per convenzione!
app.use('/posts', postsRouters);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost: ${port}`);
});