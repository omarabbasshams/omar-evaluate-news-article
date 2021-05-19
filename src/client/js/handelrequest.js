//select all table tabs
const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");
const score_tag = document.getElementById("score_tag");
//function to handel api request
export var handelrequest = async (string) => {
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
      agreement.innerHTML = readydata.agreement;
      subjectivity.innerHTML = readydata.subjectivity;
      confidence.innerHTML = readydata.confidence;
      irony.innerHTML = readydata.irony;
      score_tag.innerHTML = readydata.score_tag;
    });
};
