const express = require("express");

const { getAllUsers, getOneUser, deleteMe, updateUser, updateMe, deleteUser, getMe } = require("../Controllers/UserController");
const { signup, login, protectRoutes, restrictedTo, updatePassword, logout, forgetPassword, resetPassword } = require("../Controllers/AuthController");

const userRoutes = express.Router();


userRoutes.route("/signup").post(signup);
userRoutes.route("/login").post(login);
userRoutes.route("/forgetPassword").post(forgetPassword);
userRoutes.route("/resetPassword/:resetToken").patch(resetPassword);

userRoutes.use(protectRoutes);

userRoutes.route("/logout").get(logout);
userRoutes.route("/deleteMe").patch(deleteMe)
userRoutes.route("/updateMe").patch(updateMe);
userRoutes.route("/updatePassword").patch(updatePassword)
userRoutes.route("/getMe").get(getMe)

userRoutes.use(restrictedTo(["admin"]))

userRoutes.route("/").get(getAllUsers)
userRoutes.route("/:id").get(getOneUser).patch(updateUser).delete(deleteUser)

module.exports = userRoutes;