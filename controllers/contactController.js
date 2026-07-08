const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc get contacts
//@route route  /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc get contact
//@route route  /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  console.log(req?.body, req.params.id);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all field are mandatory.");
  }
  res.status(201).json({
    message: "from contact router get from controller",
    res: req?.body,
  });
});

//@desc post contact
//@route route  /api/contacts/:id
//@access public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all field are mandatory.");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc update contact
//@route route  /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  const contact= await Contact.findById(req.params.id)

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found.");
  }
  const updatedContact= await Contact.findByIdAndUpdate(req.params.id,req.body,{new: true})

  res.status(200).json(updatedContact);
});

//@desc delete contact
//@route route  /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
   const contact= await Contact.findOneAndDelete(req.params.id)

//   if (!contact) {
//     res.status(404);
//     throw new Error("Contact not found.");
//   }
//   await Contact.deleteOne(); 

  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
