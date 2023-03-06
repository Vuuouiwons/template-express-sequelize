const express = require("express");
const router = express.Router();

const {
	postData,
	getData,
	updateData,
	deleteData,
} = require("../controllers/test");

const middlewares = [express.json()];

router.use(middlewares);

router.post("/", postData);
router.get("/", getData);
router.put("/", updateData);
router.delete("/", deleteData);

module.exports = router;
