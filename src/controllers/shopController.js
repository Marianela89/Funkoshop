const path = require('path');

const shopControllers = {
    shop: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), { /*como no puedo acceder a shop.ejs, le paso el directorio*/
            titulo: "Shop"
        }); 
    },

    itemGET: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'));
    },

    itemPOST: (req, res) => res.send('Ruta que devuelve al agregar el producto'),

    cartGET: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/carrito.ejs'));
    },
    
    cartPOST: (req, res) => res.send('Ruta que devuelve al agregar un producto al carrito')
}

module.exports = shopControllers;