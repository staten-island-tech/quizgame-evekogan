console.log("connected");

function submitAnswers() {
  const total = 10; //max number of questions
  let score = 0; //start score at 0
  //save results from the form as variables
  const q1 = document.forms["quizForm"]["q1"].value;
  const q2 = document.forms["quizForm"]["q2"].value;
  const q3 = document.forms["quizForm"]["q3"].value;
  const q4 = document.forms["quizForm"]["q4"].value;
  const q5 = document.forms["quizForm"]["q5"].value;
  const q6 = document.forms["quizForm"]["q6"].value;
  const q7 = document.forms["quizForm"]["q7"].value;
  const q8 = document.forms["quizForm"]["q8"].value;
  const q9 = document.forms["quizForm"]["q9"].value;
  const q10 = document.forms["quizForm"]["q10"].value;
  //check to see if user forgot any questions
  for (const i = 1; i <= total; i++) {
    if (eval("q" + i) == null || eval("q" + i) == "") {
      alert("You missed question " + i);
      return false; //prevents page refresh
    }
  }

  //set correct answers
  const answers = ["b", "b", "c", "c", "a", "d", "d", "a", "b", "a"];

  //check answers with for loop
  for (const i = 1; i <= total; i++) {
    if (eval("q" + i) == answers[i - 1]) {
      score++; //add score for every question right
    }
  }
  console.log("You scored " + score + " out of " + total); //temporary console log

  //display results
  const results = document.getElementById("results");
  results.innerText = `You scored ${score} out of ${max}.`;
  return false;
}
