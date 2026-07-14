
const name = document.getElementById("name").value;
const animal = document.getElementById("animal").value;
const number = document.getElementById("number").value;
const adjective = document.getElementById("adjective").value;
const theme = document.getElementById("theme").value;
const story = document.getElementById("story");

const storyText =
  `Once upon a time, ${name} discovered a mysterious ${theme} adventure. ` +
  `While exploring, ${name} encountered ${number} ${animal}${number > 1 ? "s" : ""}. ` +
  `Although feeling very ${adjective}, ${name} decided to keep going. ` +
  `In the end, the adventure became an unforgettable story with a happy ending.`;

story.innerHTML = 
