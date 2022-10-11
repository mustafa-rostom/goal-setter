const express= require("express");
const router = express.Router();
const { regesterUser,loginUser,getMe }=require('../contrrollers/userController');
const { protect } = require('../middleware/authMiddleware')

router.post('/', regesterUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)

module.exports =router;