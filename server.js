const express = require('express');
const postsRouters = require('./routers/postsRouters');
const app = express();
const port = 3000;

// per gestire gli oggetti JSON nel body
app.use(express.json());

// colleghiamo le rotte
app.use('/posts', postsRouters);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost: ${port}`);
});