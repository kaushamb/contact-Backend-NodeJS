const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    username:{
        type: String,
        required:[true,"Please add the user name"]
    },
    email:{
        type: String,
        required:[true,"Please add the email name"],
        unique: [true, 'Email address already taken']
    },
    password:{
        type: String,
        required:[true,"Please add the password name"]
    }
},
{
    timestamps:true
})

module.exports= mongoose.model('User',userSchema);