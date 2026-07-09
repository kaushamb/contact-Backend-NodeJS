const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt')
const User = require("../models/userModel");

//@desc register user
//@route route  /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("all field are mandatory.");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400)
    throw new Error('User is already registered!')
  }
  const hashedPassword= await bcrypt.hash(password,10);
  const user= await User.create({
    username,
    email,
    password: hashedPassword
  })
  if(user){
    res.status(201).json({_id:user.id,email:user.email});
  }else{
    res.status(400);
    throw new Error('User data is not valid')
  }
});

//@desc login user
//@route route  /api/contacts
//@access public

const loginUser = asyncHandler(async (req, res) => {
//   const contacts = await Contact.findOne({_id:req.params.id});
  res.status(200).json({message:"register"});
});

//@desc current user
//@route route  /api/contacts/:id
//@access private

const currentUser = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all field are mandatory.");
  }
//   const contact = await Contact.create({
//     name,
//     email,
//     phone,
//   });
  res.status(201).json({message:"register"});
});


module.exports = {
  registerUser,
  loginUser,
  currentUser
};
