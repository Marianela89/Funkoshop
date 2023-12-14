const path = require('path');

const adminControllers = {
    admin: (req, res) => res.render(path.resolve(__dirname, '../views/admin/admin.ejs')),
    createGET:  (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs')),
    createPOST: (req, res) => res.send('Ruta que devuelve al agregar el usuario'),
    editGET:  (req, res) => res.render(path.resolve(__dirname, '../views/admin/edit.ejs')),
    editPUT: (req, res) => res.send('Ruta que devuelve al agregar un usuario'),
    delete: (req, res) => res.send('Ruta que borra el usuario')
}

module.exports = adminControllers;