const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment')


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
        type: String,
        default: String(moment().format('YYYY-MM-DD'))
    },
    hidden: {
        type: Boolean,
        default: false
    }
}



const factSchema = new Schema({
    fact: {
        type: String,
        required: false
    },
    meta: metaSchema,
    hidden: {
        type: Boolean,
        default: false
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Fact', factSchema, 'facts')