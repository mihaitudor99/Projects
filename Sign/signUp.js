const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { response } = require("express");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://18API_SERVER.api.mailchimp.com/3.0/lists/faa98e7e11";
  const options = {
    method: "post",
    auth: "mihai:dedd0b0b818f2b7a61decb25a5476519-us18",
  };
  const request = https.request(url, options, function () {
    response.on("data", function (response) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

app.listen(3000, function () {
  console.log("server is on 3000");
});

// dedd0b0b818f2b7a61decb25a5476519-us18
// faa98e7e11
// #!/bin/bash
// set -euo pipefail

// event_name="Bash Developers Meetup"

// footer_contact_info='{
//   "company": "Mailchimp",
//   "address1": "675 Ponce de Leon Ave NE",
//   "address2": "Suite 5000",
//   "city": "Atlanta",
//   "state": "GA",
//   "zip": "30308",
//   "country": "US"
// }'

// campaign_defaults='{
//   "from_name": "Gettin'\'' Together",
//   "from_email": "gettintogether@example.com",
//   "subject": "Bash Developers Meetup",
//   "language": "EN_US"
// }'

// curl -sS --request POST \
//   --url "https://$API_SERVER.api.mailchimp.com/3.0/lists" \
//   --user "key:$API_KEY" \
//   --header 'content-type: application/json' \
//   --data @- \
// <<EOF | jq '.id'
// {
//   "name": "$event_name",
//   "contact": $footer_contact_info,
//   "permission_reminder": "permission_reminder",
//   "email_type_option": true,
//   "campaign_defaults": $campaign_defaults
// }
// EOF
