//@desc set goals
//@route GET /api/goals
//@access private
const getGoals = (req,res) => {
    console.log(req.body);
    res.status(200).json({ message: "Get goals" });
}

//@desc create goals
//@route  post/api/goals
//@access private
const createGoals=(req,res) => {  
    res.status(200).json({ message: "Create goals" });
}

//@desc update goal
//@route PUT /api/goals:id
//@access private
const updateGoals=(req,res) => { 
    res.status(200).json({ message: `Update goal ${req.params.id}` });
}

//@desc delete goal
//@route DELETE /api/goals:id
//@access private
const deleteGoals=(req,res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
}

module.exports={
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
}