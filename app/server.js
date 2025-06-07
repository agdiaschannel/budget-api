const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const categorias = require('./routes/categorias');



const app = express();

const port = process.env.PORT;
connectDB();
app.use(express.json());

app.use('/api/v1/categorias', categorias)
app.use(errorHandler);
app.listen(port, () => console.log(`Server listening on port ${port}`));


