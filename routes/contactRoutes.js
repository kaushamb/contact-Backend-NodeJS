const express= require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
 res.status(200).json({message:'from contact router get'})
})
router.route("/:id").get((req,res)=>{
 res.status(200).json({message:`from contact router get ${req.params.id}`})
})
router.route("/").post((req,res)=>{
 res.status(200).json({message:`from contact router post ${req.params.id}`})
})
router.route("/:id").put((req,res)=>{
 res.status(200).json({message:`from contact router put ${req.params.id}`})
})
router.route("/:id").delete((req,res)=>{
 res.status(200).json({message:`from contact router delete ${req.params.id}`})
})

module.exports = router;