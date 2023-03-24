const express = require("express");

const {
  login,
  register,
  logout,
  checkSession,
  deleteUser,
  getUser
} = require("../controllers/users.controllers");

const { isAuth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", [isAuth], logout);
router.post("/checksession", [isAuth], checkSession);
router.delete("/:id", deleteUser);
router.get("/", getUser);

module.exports = router;
