const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc get contacts
//@route route  /api/contacts
//@access private

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc get contact
//@route route  /api/contacts
//@access private

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findOne({ _id: req.params.id });
  res.status(200).json(contacts);
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
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

//@desc update contact
//@route route  /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found.");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User dont have permission to update the other user contact.",
    );
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );

  res.status(200).json(updatedContact);
});

//@desc delete contact
//@route route  /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found.");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User dont have permission to update the other user contact.",
    );
  }
  await Contact.deleteOne({_id:req.params.id});
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
