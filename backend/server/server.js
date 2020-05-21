const fact = require('../mongodb/models/fact')
const comment = require('../mongodb/models/comment')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

app.use(express.static('public'))
var url = "mongodb://localhost:27017/";

const dbName = "db_funfact"


mongoose.connect(url + dbName, {
    useNewUrlParser: true
});
mongoose.set('useFindAndModify', false);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Database " + dbName + "is connected!!")
});

// RESTful Endpoints fact
app.post('/fact/insert-many/', fact.addMany);
app.post('/fact/create-comment/:factId', fact.addComment);
app.put('/fact/update-up-votes/:factId', fact.updateVotesUp)
app.put('/fact/update-down-votes/:factId', fact.updateVotesDown)
app.get('/fact/sort-by-votesUp/', fact.sortByVotesUp)
app.get('/fact/sort-by-votesDown/', fact.sortByVotesUp)
app.get('/fact/get-todays-fact', fact.getFactToday);
app.get('/fact/get-todays-fact-populate-comment', fact.getFactTodayPopulateComment);


// RESTful Endpoint comment
app.put('/fact/delete-comment/:commentId', comment.deleteComment);
app.get('/comment/find-comment-by-factid/:factId', comment.getCommentByFactId);
app.put('/comment/update-up-votes/:commentId', comment.updateCommentVotesUp)
app.put('/comment/update-down-votes/:commentId', comment.updateCommentVotesDown)





app.listen(port, () => console.log(`Example app listening on port ${port}!`))