const multer = require("multer")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
const {S3Client , PutObjectCommand , GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3")
const crypto = require("crypto")
const axios = require("axios")

const Video = require("../Models/VideoModel")
const User = require("../Models/UserModel");
const asyncHandler = require("../Utils/asyncHandler")

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

const storage = multer.memoryStorage();
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
        
        const videoDataResponse = await axios.post(process.env.AI_API, {Key : videoName} , {headers : {"Content-Type": "application/json"} })
        
        const {dubbed_key , summary} = videoDataResponse.data;
        
        const videoDataOptions = {
            originalVideo : videoName,
            userID : req.user._id,
            videoSummarization : summary,
            dubbedVideoURL : dubbed_key,
        }

        const videoData = await Video.create(videoDataOptions);

        await User.findByIdAndUpdate(req.user._id , {$push: {videos: videoData._id} }, {
            new : true,
            runValidation : true,
        })
        
        const secondParams = {
            Bucket : bucketName,
            Key : videoName,
        }
    
        const secondCommand = new DeleteObjectCommand(secondParams);
        await s3.send(secondCommand)
        
        res.status(201).json({
            status : "success",
            data: videoData,
        })
        
})];

exports.getDuppedVideo = asyncHandler( async (req , res , next) => {

    const {dubbedVideoUrl} = req.body;

    const getObjectParams = {
        Bucket : bucketName,
        Key : dubbedVideoUrl,
    } 

    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    console.log(url)

    res.status(200).json({
        status : "success",
        data : url
    })
})