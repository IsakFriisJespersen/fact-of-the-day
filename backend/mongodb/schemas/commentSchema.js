const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metaSchema = {
    votesUp: {
        type: Number,
        default: 0
    },
    votesDown: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    hidden: {
        type: Boolean,
        default: false
    }
}


const commentSchema = new Schema({
    body: String,
    date: {
        type: Date,
        default: Date.now
    },
    meta: metaSchema,
    hidden: {
        type: Boolean,
        default: true
    },
    fact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fact'
    }
});



module.exports = mongoose.model('Comment', commentSchema, 'comments')