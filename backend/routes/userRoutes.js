const express= require("express");
const router = express.Router();
const { regesterUser,loginUser,getMe }=require('../contrrollers/userController');


router.post('/', regesterUser)
router.post('/login',loginUser)
router.get('/me',getMe)

module.exports =router;