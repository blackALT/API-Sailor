const express = require("express")
const router = express.Router()
require('dotenv-safe').config();
const controller = require("../controller/urlsController")

// Rotas não autenticadas
router.get("/", controller.getAnalyzed); // Apenas analisadas
router.get("/malicious", controller.getMalicious); // Alvo analisado e malicioso
router.post("/", controller.postUrl);

// Rotas autenticadas
router.get("/submissions", controller.getSubmissions); // Apenas não analisadas
router.get("/backlog", controller.getBacklog); // retorna todas
router.put("/submissions/:id", controller.putUrl);
router.delete("/submissions/:id", controller.deleteByID);
router.delete("/submissions", controller.deleteByUrl);
router.patch("/submissions/:id", controller.patchUrl);

module.exports = router