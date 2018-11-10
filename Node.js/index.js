const express = require('express');
const app = express();
const port = 3000;

// Routes
const todoRoutes = require('./routes/todo');

app.use('/todo', todoRoutes);

app.listen(port, () => console.log('CRUD Project is listening on port ' + port));
