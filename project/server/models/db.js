const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ,(err)=>{
    if(!err){
        console.log('mongo connected');
            }
    else{
        console.log('error in connection : ' +JSON.stringify(err,undefined,2));
    }
});
require('./user.model')