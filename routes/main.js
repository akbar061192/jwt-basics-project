const express = require("express");
const { dashboard, login } = require("../controllers/main");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.get("/dashboard", authMiddleware, dashboard);
router.post("/login", login);

module.exports = router;
