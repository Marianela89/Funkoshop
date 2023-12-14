const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get('/auth/login', authControllers.loginGET);
router.post('/auth/login', authControllers.loginPOST);
router.get('/auth/register', authControllers.registerGET);
router.post('/auth/register', authControllers.registerPOST);
router.get('/auth/logout', authControllers.logout);


module.exports = router;