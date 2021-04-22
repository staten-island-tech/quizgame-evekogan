console.log("connected");

const submitButton = document.querySelector("#submit-button");

function submitAnswers() {
  const total = 10; //max number of questions
  let score = 0; //start score at 0
  //save results from the form as variables
  const q1 = document.forms["stardewQuiz"]["q1"].value;
  const q2 = document.forms["stardewQuiz"]["q2"].value;
  const q3 = document.forms["stardewQuiz"]["q3"].value;
  const q4 = document.forms["stardewQuiz"]["q4"].value;
  const q5 = document.forms["stardewQuiz"]["q5"].value;
  const q6 = document.forms["stardewQuiz"]["q6"].value;
  const q7 = document.forms["stardewQuiz"]["q7"].value;
  const q8 = document.forms["stardewQuiz"]["q8"].value;
  const q9 = document.forms["stardewQuiz"]["q9"].value;
  const q10 = document.forms["stardewQuiz"]["q10"].value;
  //check to see if user forgot any questions
  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You missed question " + i);
    }
  }

  //set correct answers
  const answers = ["b", "b", "c", "c", "a", "d", "d", "a", "b", "a"];

  //check answers with for loop
  for (let i = 1; i <= total; i++) {
    if (eval("q" + i) == answers[i - 1]) {
      score++; //add score for every question right
    }
  }
  console.log("You scored " + score + " out of " + total); //temporary console log
  //display results
  const results = document.getElementById("results");
  const reaction = document.getElementById("reaction");
  results.innerText = `You scored ${score} out of 10.`;

  switch (true) {
    case score === 10:
      reaction.innerText =
        "Congratulations! You got a perfect score! Are you sure you aren't ConcernedApe?";
      break;
    case score >= 7 && score < 10:
      reaction.innerText = "Nice job! You know a lot about the game";
      break;
    case score >= 4 && score < 7:
      reaction.innerText =
        "Could be better. You should brush up on your Stardew knowledge!";
      break;
    case score >= 1 && score < 4:
      reaction.innerText =
        "Do you even play the game? I'll answer that for you. Clearly not.";
      break;
    case score === 0:
      reaction.innerText =
        "I'm disapointed. Genuinely. Not even JojaMart deserves you.";
      break;
  }

  /* if (score === 10) {
    reaction.innerText =
      "Congratulations! You got a perfect score! Are you sure you aren't ConcernedApe?";
  }
  if (score >= 7 && score < 10) {
    reaction.innerText = "Nice job! You know a lot about the game";
  }
  if (score >= 4 && score < 7) {
    reaction.innerText =
      "Could be better. You should brush up on your Stardew knowledge!";
  }
  if (score >= 1 && score < 4) {
    reaction.innerText =
      "Do you even play the game? I'll answer that for you. Clearly not.";
  }
  if (score === 0) {
    reaction.innerText =
      "I'm disapointed. Genuinely. Not even JojaMart deserves you.";
  } */
}

submitButton.addEventListener("click", function (e) {
  submitAnswers();
  e.preventDefault();
});
