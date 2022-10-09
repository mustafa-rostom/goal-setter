const mongoose = require('mongoose');

const goalSchema = mongoose.schema({
    test: {
        type: String,
        required: [truem, 'Please add a text value'],
    }
},
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Goal', goalSchema);




