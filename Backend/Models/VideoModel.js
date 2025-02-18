const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
    userID: {
        type : mongoose.Schema.ObjectId,
        ref : "User",
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    },
    originalVideo: {
        type : String,
        required : true,
    },
    dubbedVideo: {
        type:String,
    },
=======
=======
>>>>>>> a43efcc82a81e657e93089fdf0ba24a4b9825071
>>>>>>> e466617 (again)
        required : true,
    },
    videoURL: {
        type : String,
        required : true,
    },
    dubbedVideoURL: {
        type:String,
    },
    videoStatus : {
        type: String,
        enum: ['pending', 'processing', 'completed', 'failed'],
        default: 'pending'
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a43efcc82a81e657e93089fdf0ba24a4b9825071
=======
>>>>>>> a43efcc82a81e657e93089fdf0ba24a4b9825071
>>>>>>> e466617 (again)
    createdAt: {
        type: Date,
        default: Date.now(),
      },
})

const Video = mongoose.model("Video" , videoSchema)
module.exports = Video;