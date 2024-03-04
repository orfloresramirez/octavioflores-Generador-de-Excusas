/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let indexwho = 0;
  indexwho += Math.floor(Math.random() * who.length);
  let indexact = 0;
  indexact += Math.floor(Math.random() * action.length);
  let indexwhat = 0;
  indexwhat += Math.floor(Math.random() * what.length);
  let indexwhen = 0;
  indexwhen += Math.floor(Math.random() * when.length);
  let excusa =
    who[indexwho] +
    " " +
    action[indexact] +
    " " +
    what[indexwhat] +
    " " +
    when[indexwhen];

  document.getElementById("excuse").innerHTML = excusa;
};
