require('dotenv').config();

const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = process.env;

const Token = require('./token.model');
const { default: mongoose } = require('mongoose');

const UserSchema = new Mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type:String, required: true},
    type: {type:String}
});

UserSchema.pre('save', function(next){
    if(this.isModified('password') || this.isNew){
        const document = this;

        bcrypt.hash(document.password, 10, function(err, hash) {
            if(err){
                next(err);
            }else{
                document.password = hash;
                next();
            }
        });
    }else{
        next();
    }
});

UserSchema.methods.usernameExists = async function(username){ //valida si un nombre de usuario ya existe
    try {
        let result = await Mongoose.model('User').find({username: username});

        return result.length > 0;

    } catch (ex) {
        return false;
    }
};

UserSchema.methods.isCorrectPassword = async function(password, hash){
    try {
        const same = await bcrypt.compare(password, hash);

        return same;
    } catch (ex) {
        return false;
    }
}

UserSchema.methods.createAccessToken = function() {
    const {id, username} = this;

    const accessToken = jwt.sign(
        {user: {id, username}},
        ACCESS_TOKEN_SECRET,
        {expiresIn: '1d'}
    );

    return accessToken;
}

UserSchema.methods.createRefreshToken = async function(){
    const {id, username} = this;
    const refreshToken = jwt.sign(
        {user: {id, username}},
        REFRESH_TOKEN_SECRET,
        {expiresIn: '20d'}
    );

    try {
        await new Token({token: refreshToken}).save();
        
        return refreshToken;
    } catch (ex) {
        next(new Error('Error creating refresh Token'));
    }
}

module.exports = Mongoose.model('User',UserSchema);