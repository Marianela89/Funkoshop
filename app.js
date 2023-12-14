const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const port = 4000;

/*RUTAS*/
const mainRoutes = require ('./src/routes/mainRoutes');
const shopRoutes = require ('./src/routes/shopRoutes');
const adminRoutes = require ('./src/routes/adminRoutes');
const authRoutes = require ('./src/routes/authRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views')); /* uno app.js con la ruta de views*/

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method')); /* me habilita los métodos put y delete */ 

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/', adminRoutes);
app.use('/', authRoutes);

//app.get('/ping', (req, res) => res.send('pong'));

app.listen(port, ()=>console.log(`servidor corriendo en http://localhost:${port}`));