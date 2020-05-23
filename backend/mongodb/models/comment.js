const Fact = require('../schemas/factSchema')
const Comment = require('../schemas/commentSchema')
const mongoose = require('mongoose');



module.exports = {

    deleteComment: function (req, res) {
        const commentId = req.params.commentId
        Comment.findByIdAndUpdate({
                _id: commentId
            }, {
                hidden: true
            },
            (err, result) => {
                if (err || !result) return res.status(400).json(err)
                return res.status(200).json(result)
            })
    },
    getCommentByFactId: function (req, res) {
        const factId = req.params.factId
        console.log(factId)
        Comment.find(
            {
                fact: factId
            },
        (err, result) => {
            if (err) return res.status(400).json(err)
            return res.status(200).json(result)
        })
 
    },


    updateCommentVotesUp: function (req, res) {
        const factId = req.params.factId
        Fact.findByIdAndUpdate({
                _id: factId
            }, {
                $inc: {
                    'meta.votesUp': 1
                }
            })
            .exec((err, fact) => {
                if (err) return res.status(400).json(err)
                return res.status(200).json(fact)
            })
    },
    updateCommentVotesDown: function (req, res) {
        const factId = req.params.factId
        Fact.findByIdAndUpdate({
                _id: factId
            }, {
                $: {
                    'meta.votesUp': -1
                }
            })
            .exec((err, fact) => {
                if (err) return res.status(400).json(err)
                return res.status(200).json(fact)
            })
    }



}