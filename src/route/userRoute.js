const express = require("express");
const router = express.Router();
const controller = require('../controller/userController');

// Rota autenticada
router.get('/', controller.getUsers);

// Rota não autenticada
router.post('/', controller.createUser);
router.post('/login', controller.userLogin);

module.exports = router;