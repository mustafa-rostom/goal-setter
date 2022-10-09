const asyncHandler = require('express-async-handler');
const Goal=require('../models/goalModel');
//@desc set goals
//@route GET /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(404)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Get goals" });
})

//@desc create goals
//@route  post/api/goals
//@access private
const createGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Create goals" });
})

//@desc update goal
//@route PUT /api/goals:id
//@access private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
})

//@desc delete goal
//@route DELETE /api/goals:id
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
})

module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
}