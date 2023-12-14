const path = require('path');

const mainControllers = {
    home: (req, res) => {
      res.render('index', {
        titulo: "Inicio"
        });
    },
    
    contact: (req, res) => {
      res.render('contacto');
    },


    about: (req, res) => res.send('Ruta de la pagina sobre nosotros'),
    faqs: (req, res) => res.send('Ruta de la pagina de politicas de privacidad')
}

module.exports = mainControllers;