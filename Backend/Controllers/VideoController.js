const multer = require("multer")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
const {S3Client , PutObjectCommand , GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3")
const crypto = require("crypto")

const Video = require("../Models/VideoModel")
const User = require("../Models/UserModel");
const asyncHandler = require("../Utils/asyncHandler")
const { addOne } = require("./FactoryController")
const errorHandler = require("../Utils/errorHandler")

const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKeyS3 = process.env.ACCESS_KEY_S3
const secretAccessKeyS3 = process.env.SECRET_ACCESS_KEY_S3

const generateRandomVideoName = (bytes = 32) => crypto.randomBytes(bytes).toString("hex")

const s3 = new S3Client({
    credentials : {
        accessKeyId : accessKeyS3,
        secretAccessKey : secretAccessKeyS3,
    },
    region : bucketRegion
})

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// upload.single('video') => in form for video label should match the name

exports.uploadingVideo = [upload.single('video') , asyncHandler (async (req, res , next) => {
    const {buffer , mimetype} = req.file;
    const videoName = generateRandomVideoName()

    const params = {
        Bucket : bucketName,
        Key : videoName,
        Body : buffer,
        ContentType : mimetype,
    }

    const command = new PutObjectCommand(params)
    await s3.send(command)

    const videoDataOptions = {
        originalVideo : videoName,
        userID : req.user._id
    }
    const videoData = await Video.create(videoDataOptions);
    await User.findByIdAndUpdate(req.user._id , {$push: { videos: videoData._id }}, {
        new : true,
        runValidation : true,
    })
    
    res.status(201).json({
        status : "success",
        data: videoData,
    })
})];

// this should return the dupped video from AI but now we will use normal video (you should change everything to  get dupped video)
exports.getDuppedVideo = asyncHandler( async (req , res , next) => {
    
})

exports.deleteVideo = asyncHandler( async (req , res, next) => {
    const user = await User.findById(req.user._id);
    if(!user) return next(new errorHandler("error while replacing your previous dupped video" , 400));

    // console.log(user.videos[0])
    const video = await Video.findById(user.videos[0]);
    if(!video) return next(new errorHandler("error while replacing your previous dupped video" , 400));

    // console.log(video)
    const params = {
        Bucket : bucketName,
        Key : video.originalVideo,
    }
    
    const command = new DeleteObjectCommand(params);
    await s3.send(command)
    await Video.findByIdAndDelete(video._id)
    user.videos = [];
    await user.save({ validateModifiedOnly: true });

    res.status(204).json({
        status : "success",
        data : null,
    })
})
// graduation-project-arabtutor
// US East (N. Virginia) us-east-1

// graduation-project-arabtutor-s3-bucket-access

// graduation-project-arabtutor-web-app