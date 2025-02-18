const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs");
const crypto = require("crypto")

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required: [true , "Please you need to provide a username."],
        unique : true,
    },
    email : {
        type : String,
        required: [true , "An email need to be provided."],
        unique: true,
        lowercase : true,
        validate : [validator.isEmail , "please provide a valid email"]
    },
    password : {
        type : String,
        required: [true , "password is required and must be provided."],
        minLength: [8 , "your password must be at least 8 characters long."],
        select : false,
    },
    passwordConfirmation : {
        type : String,
        required: [true , "passwordConfirmation is required and must be provided and matches the password."],
        validate: {
            validator : function(value) {
                return value === this.password;
            } 
        }
    },
    favoriteVideos : {
        type : [String]
    },
    history : {
        type : [String]
    },
    isActive : {
        type : Boolean,
        default: true,
        select : false,
    },
    role : {
        type : String,
        enum : ["admin" , "user"],
        default : "user",
    },
    createdAt :  {
        type : Date,
        default : Date.now(),
    },
    passwordChangedAt : Date,
    passwordResetToken : String,
    passwordResetTokenExpiration : Date,
    videos: [
    {
        type : mongoose.Schema.ObjectId,
        ref : "Video"
    }
    ],

})

userSchema.pre("save" , async function(next) {
    if(!this.isModified("password")) return next();
    if(this.isModified("password") && !this.isNew) this.passwordChangedAt = Date.now();

    this.password = await bcrypt.hash(this.password , 12);
    this.passwordConfirmation = undefined;
    next();
});

userSchema.pre(/^find/ , function(next) {
    this.find({isActive : {$ne : false}})
    next()
})

userSchema.methods.checkForPassword = async function (normalPassword , encryptedPassword)  {
    return await bcrypt.compare(normalPassword, encryptedPassword);
}

userSchema.methods.isChangedPassword = async function (tokenCreatedTime) {
    if(this.passwordChangedAt) {   
        passwordChangedAtTamp = this.passwordChangedAt.getTime() / 1000;
        return passwordChangedAtTamp > tokenCreatedTime;
    }
    return false;
}

userSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    console.log(this.passwordResetToken)

    this.passwordResetTokenExpiration = Date.now() + 10 * 60 * 1000;

    return resetToken;
}

const User = mongoose.model('User' , userSchema);
module.exports = User;