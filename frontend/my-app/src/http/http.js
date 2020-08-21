const fetch = require('node-fetch');
// const https = require('https');

// const httpsAgent = new https.Agent({
//       rejectUnauthorized: false,
//     });


module.exports = {
    getTodaysFact: async function () {
      return await fetch('http://localhost:8080/fact/get-todays-fact-populate-comment')
      .then(body => body.json())
      .catch(err => {
            console.log(err)
            return "There is no fact today :("
      })
    },
    putComment: async function (factId, userComment) {
      const body = {
        "body": userComment
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
      return await fetch('http://localhost:8080/fact/create-comment/' + factId, options)
      .then(body => body.json())
      .catch(err => {
            console.log(err)
            return err
      })
    },
    getComments: async function(factId){
      return await fetch('http://localhost:8080/comment/find-comment-by-factid/' + factId)
      .then(body => body.json())
      .catch(err => {
            console.log(err)
            return "There is no fact today :("
      })
    },
    getSocket: async function(){

      return await fetch('http://localhost:8080/sockets/')
      .then(body => body.json())
      .catch(err => {
            console.log(err)
            return "There is no fact today :("
      })
    },
  }
