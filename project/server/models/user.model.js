const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:'full name cant be empty'
    },
    email: {
        type: String,
        required:'Email cant be empty',
        unique:true

    },
    password: {
        type: String,
        required:'password cant be empty',
        minlength:[4,'password must be atleast  4 characters along']
    },
    saltSecret: String

});

userSchema.path('email').validate((val)=>{
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);

},'Invalid email');

userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt, (err,hash)=>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
})


mongoose.model('User', userSchema);