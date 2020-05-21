const fetch = require('node-fetch');
// const https = require('https');

// const httpsAgent = new https.Agent({
//       rejectUnauthorized: false,
//     });


module.exports = {
    getTodaysFact: async function () {

      const resp = await fetch('http://192.168.0.195:8080/fact/get-todays-fact-populate-comment')
      .then(body => body.json())
      .catch(err => {
            console.log(err)
            return "There is no fact today :("
      })
      return await resp
    


    }

}