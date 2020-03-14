let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');


//read bd
router.get('/users', dashboardController.readAll);

//borrar de database

//BORRAR dado el parametro
router.post('/delete', dashboardController.delete);

router.get('/dashboard', dashboardController.index);

module.exports = router;
