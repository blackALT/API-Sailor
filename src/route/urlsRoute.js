const express = require("express")
const router = express.Router()
const controller = require("../controller/urlsController")

router.get("/", controller.getUrls);
router.get("/:target", controller.getTarget)
router.get("/submissions", controller.getSubmissions);
router.post("/submissions", controller.postUrl);
router.put("/:id", controller.putUrl);
router.put("/:id", controller.deleteUrl);
router.put("/:id", controller.patchUrl);

module.exports = router