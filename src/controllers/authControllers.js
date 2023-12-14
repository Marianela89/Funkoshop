const path = require('path');

const authControllers = {
    loginGET: (req, res) => res.render(path.resolve(__dirname, '../views/auth/login.ejs')),
    loginPOST:  (req, res) => res.send('Ruta que devuelve el logeo del usuario'),
    registerGET: (req, res) => res.render(path.resolve(__dirname, '../views/auth/register.ejs')),
    registerPOST: (req, res) => res.send('Ruta que devuelve el registro del usuario'),
    logout: (req, res) => res.send('Ruta del cierre de sesión del usuario')
}

module.exports = authControllers;