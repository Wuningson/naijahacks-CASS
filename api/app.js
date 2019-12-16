//Node modules
const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//App modules
const db = require('./config/database');
const studentsRoutes = require('./routes/students.routes');
const updatesRoutes = require('./routes/updates.routes');
const docsRoutes = require('./routes/docs.routes');

//Set up app
const app = express();

//parse incoming requests
app.use(express.json());
app.use(cookieParser());

//include routes
app.use('/', studentsRoutes);
app.use('/', updatesRoutes);
app.use('/api/v1', docsRoutes);

db();
const port = 3000 || process.env.PORT;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));