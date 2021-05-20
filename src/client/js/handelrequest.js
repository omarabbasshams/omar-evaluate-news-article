import { check } from "./checkurl";
//select all table tabs
const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");
const score_tag = document.getElementById("score_tag");
//function to handel api request
export var handelrequest = async (string) => {
  if (client.check(string)) {
    const data = { url: string };

    const response = await fetch("analsysarticl", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((readydata) => {
        updateUI(readydata);
      });
  } else {
    alert("Seems like an invalid URL, please try with a valid URL.");
  }
};

const updateUI = (obj) => {
  agreement.innerHTML = obj.agreement;
  subjectivity.innerHTML = obj.subjectivity;
  confidence.innerHTML = obj.confidence;
  irony.innerHTML = obj.irony;
  score_tag.innerHTML = obj.score_tag;
};

module.exports = handelrequest;
