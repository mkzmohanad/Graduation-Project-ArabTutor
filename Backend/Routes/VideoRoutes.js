const express = require("express");

const { protectRoutes } = require("../Controllers/AuthController");
const { uploadingVideo, deleteVideo, getDuppedVideo } = require("../Controllers/VideoController");
// import { uploadingVideo } from "../Controllers/VideoController"

const VideoRoutes = express.Router();

VideoRoutes.use(protectRoutes)

VideoRoutes.route("/uploadVideo").post(uploadingVideo)
VideoRoutes.route("/getDubbedVideo").post(getDuppedVideo)

module.exports = VideoRoutes;