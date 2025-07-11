const asyncHandler = require("../Utils/asyncHandler");
const errorHandler = require("../Utils/errorHandler");

exports.getAll = Model => asyncHandler(async (req, res, next) => {
    let docs;
    if(Model.modelName === "User") docs = await Model.find().select("-__v").populate("videos");
    else docs = await Model.find().select("-__v");
    
    res.status(200).json({
        status: 'success',
        results : docs.length,
        data : {
             docs
        }
    })
})

exports.addOne = Model => asyncHandler(async (req, res, next) => {
    const doc = await Model.create(req.body);
    
    res.status(201).json({
        status: 'success',
        data : {
            doc
        }
    })
})

exports.deleteOne = Model => asyncHandler(async (req, res, next) => {
    await Model.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status: 'success',
        data : null
    })
})

exports.getOne = Model => asyncHandler(async (req, res, next) => {
    let doc;
    if(Model.modelName === "User") doc = await Model.findById(req.params.id).populate("videos");
    else doc = await Model.findById(req.params.id)

    res.status(200).json({
        status: 'success',
        data : {
            doc
        }
    })
})

exports.updateOne = Model => asyncHandler(async (req, res, next) => {
    if(req.body.password || req.body.passwordConfirmation) return next(new errorHandler("you cant update your password here!!" , 401));

    const newDoc = await Model.findByIdAndUpdate(req.params.id , req.body , {
        new : true,
        runValidation : true,
    });
    
    if(!newDoc) return next(new errorHandler("there is NO document with this id to update." ,400))

    res.status(201).json({
        status : 'success',
        data : {
            data:newDoc
        }
    }) 
})