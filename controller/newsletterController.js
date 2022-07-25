const request = require('request')

function NewsController(req,res){

    var email=req.params.email;
  request.post({
    url: 'https://us10.api.mailchimp.com/3.0/lists/905c3ce828/members',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic 789b85eab01e48f34f151605d5d0f390-us10'
    },
    form: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        EMAIL: req.body.email
      }
    })
  }, function(err, httpResponse, body) {
    res.send(body);
  });
}

module.exports= {NewsController}