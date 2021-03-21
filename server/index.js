require('dotenv').config();
const express = require('express');
const massive = require('massive');
const products_controller = require('./controllers/products_controller');
const app = express(); 

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
  })
.then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => console.log(`Database mounted and server listening on port ${SERVER_PORT}.`));
  })
.catch((err)=> console.log(err));

app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.post('/api/products', products_controller.create);
app.delete('/api/products/:id', products_controller.delete);


