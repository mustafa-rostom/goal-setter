const express = require("express");
const router = express.Router();
const { getGoals, createGoals, updateGoals, deleteGoals } = require('../contrrollers/goalController')

router.route('/').get(getGoals).post(createGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

module.exports = router;
