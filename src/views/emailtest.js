import React from "react";
var email = require("emailjs/email");

function emailtest() {
  var server = email.server.connect({
    user: "danebrwn47@gmail.com",
    password: "T3ss@ra!",
    host: "smtp.gmail.com",
    ssl: true
  });
  const handleSend = () => {
    console.log("sending");
    server.send(
      {
        text: "Hey howdy",
        from: "NodeJS",
        to: "Dane <danebrwn47@gmail.com>",
        cc: "",
        subject: "Greetings"
      },
      function(err, message) {
        console.log(err || message);
      }
    );
  };
  return (
    <>
      <h1>Click to send email</h1>
      <button onClick={handleSend}>Send</button>
    </>
  );
}

export default emailtest;
