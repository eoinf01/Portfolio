const express = require("express")
const router = express.Router()
const controller = require("../controller/controller")

router.route('/api/').get(controller.getProjects)

module.exports = router;