//@desc Register new user
//@route POST /api/users
//@access public
const regesterUser =(req,res)=>{
    res.json({message:'Regester user'})
}
//@desc Authenticate a user
 //@route POST /api/users/login
//@access public
const loginUser = (req, res) => {
    res.json({ message: 'Regester user' })
}
//@desc Get new user
//@route GET /api/users/me
//@access public
const getMe = (req, res) => {
    res.json({ message: 'Regester user' })
}


module.exports = {
    regesterUser,
    loginUser,
    getMe
}