const express = require("express");
const router = express.Router();
const controller = require('../controller/userController');

router.post('/', controller.createUser);
router.get('/', controller.getUsers);
router.put('/', controller.updateUser);
router.delete('/', controller.deleteUser);
router.post('/login', controller.userLogin);

module.exports = router;