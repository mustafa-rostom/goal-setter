const asyncHandler = require('express-async-handler');
const Goal=require('../models/goalModel');
//@desc set goals
//@route GET /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
    const goals=await Goal.find()
    res.status(200).json(goals);
})

//@desc create goals
//@route  post/api/goals
//@access private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(404)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    
    res.status(200).json(goal);
})

//@desc update goal
//@route PUT /api/goals:id
//@access private
const updateGoals = asyncHandler(async (req, res) => {
    const goal= await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).json(updatedGoal);
})

//@desc delete goal
//@route DELETE /api/goals:id
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
    const goal=await Goal.findById(req.params.id);
    
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove();
    res.status(200).json({ id: require.params.id});
})

module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoals
}