const express = require("express");

const { protectRoutes } = require("../Controllers/AuthController");
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const { uploadingVideo, deleteVideo } = require("../Controllers/VideoController");
// import { uploadingVideo } from "../Controllers/VideoController"
=======
>>>>>>> a43efcc82a81e657e93089fdf0ba24a4b9825071
=======
>>>>>>> a43efcc82a81e657e93089fdf0ba24a4b9825071
>>>>>>> e466617 (again)

const VideoRoutes = express.Router();

VideoRoutes.use(protectRoutes)

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
VideoRoutes.route("/uploadVideo").post(uploadingVideo)
VideoRoutes.route("/deleteVideo").delete(deleteVideo)

=======
>>>>>>> a43efcc82a81e657e93089fdf0ba24a4b9825071
=======
>>>>>>> a43efcc82a81e657e93089fdf0ba24a4b9825071
>>>>>>> e466617 (again)


module.exports = VideoRoutes;