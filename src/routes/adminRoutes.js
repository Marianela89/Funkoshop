const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/admin', adminControllers.admin);
router.get('/create', adminControllers.createGET);
router.post('/admin/create', adminControllers.createPOST);
router.get('/admin/edit/:id', adminControllers.editGET);
router.put('/admin/edit/:id', adminControllers.editPUT);
router.delete('/admin/delete/:id', adminControllers.delete);


module.exports = router;