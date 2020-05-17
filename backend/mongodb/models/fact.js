const FactSchema = require('../schemas/factSchema')
const CommentSchema = require('../schemas/commentSchema')
const mongoose = require('mongoose');
const moment = require('moment')

module.exports = {

    addMany: function (req, res) {
        let momentDate = moment().format('YYYY-MM-DD');    
        console.log(momentDate) 
        let data = req.body
        const date = new Date()
        const dateNow = date.getDate()
        data = data.map((d, index) => {
            date.setDate(dateNow + index)
            return {
                "fact": d.fact,
                "meta": {
                    "date": moment().add(index, 'days').format('YYYY-MM-DD')
                }
            }
        })
        FactSchema.insertMany(data, (err, fact) => {
            if (err) return res.status(400).json(err)
            return res.status(200).json(fact)
        })
    },
    getFactToday(req, res) {
        const f = String(moment().format('YYYY-MM-DD'))
        console.log()
        FactSchema.find({
                'meta.date': String(moment().format('YYYY-MM-DD'))
                
            },(err, fact) => {
                console.log(fact)
                if (err) return res.status(400).json(err)
                return res.status(200).json(fact)
            })


    },

    addComment: function (req, res) {
        const commentText = req.body
        console.log(commentText)
        const factId = req.params.factId
        commentText.fact = factId
        CommentSchema.create(commentText, (err, comment) => {
            if (err) return res.status(400).json(err)
            const commentId = comment._id
            FactSchema.findOne({
                _id: factId
            }, (err, fact) => {
                if (err) return res.status(400).json(err)
                fact.comments.push(commentId)
                fact.save(function (err) {
                    if (err) return res.status(200).json(err)
                    return res.status(200).json(fact)
                })

            })

        })
    },
    getFact: function (req, res) {
        const factId = req.params.factId
        FactSchema.findOne({
                _id: factId
            }).populate('comments')
            .exec((err, fact) => {
                if (err) res.status(400).json(err)
                return res.status(200).json(fact)
            })
    },
    sortByVotesUp(req, res) {
        FactSchema.find({
                hidden: false
            })
            .sort({
                'meta.votesUp': -1
            })
            .exec((err, facts) => {
                if (err) return res.status(400).json(err)
                return res.staus(200).json(facts)
            })

    },
    sortByVotesDown(req, res) {
        FactSchema.find({
                hidden: false
            })
            .sort({
                'meta.votesDown': -1
            })
            .exec((err, facts) => {
                if (err) return res.status(400).json(err)
                return res.staus(200).json(facts)
            })

    },
    updateVotesUp: function (req, res) {
        const factId = req.params.factId
        FactSchema.findByIdAndUpdate({
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
    updateVotesDown: function (req, res) {
        const factId = req.params.factId
        FactSchema.findByIdAndUpdate({
                _id: factId
            }, {
                $inc: {
                    'meta.votesDown': -1
                }
            })
            .exec((err, fact) => {
                if (err) return res.status(400).json(err)
                return res.status(200).json(fact)
            })
    }

}