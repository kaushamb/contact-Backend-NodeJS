const asyncHandler= require("express-async-handler")
//@desc get contacts
//@route route  /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "from contacts router get from controller" });
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
  res
    .status(201)
    .json({
      message: "from contact router get from controller",
      res: req?.body,
    });
});

//@desc post contact
//@route route  /api/contacts/:id
//@access public

const createContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "from contact router post from controller" });
});

//@desc update contact
//@route route  /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "from contact router put from controller" });
});

//@desc delete contact
//@route route  /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: "from contact router delete from controller" });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
