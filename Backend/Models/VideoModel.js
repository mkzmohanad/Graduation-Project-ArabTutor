const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
    userID: {
        type : mongoose.Schema.ObjectId,
        ref : "User",
    },
    originalVideo: {
        type : String,
        required : true,
    },
    videoURL: {
        type : String,
    },
    dubbedVideoURL: {
        type:String,
    },
    videoSummarization : {
        type : String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const Video = mongoose.model("Video" , videoSchema)
module.exports = Video;