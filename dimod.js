const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam-1-20.glitch.me/`);
}, 280000);

///////

const dimod1 = new Discord.Client();


dimod1.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `MrD1MOD IS HERE`,

  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    dimod1.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});


dimod1.login("");
