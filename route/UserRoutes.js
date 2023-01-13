const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.post("/", UserController.postUser);
router.delete("/:id", UserController.deleteUser);
router.patch("/:id", UserController.updateUser);

module.exports = router;
