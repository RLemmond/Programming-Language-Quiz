window.onload = function () {
  document.getElementById("survey-form").addEventListener('submit', function (event) {
    event.preventDefault();

    const answer1 = document.getElementById('question1').value.toLowerCase();
    const answer2 = document.getElementById('question2').value.toLowerCase();
    const answer3 = document.getElementById('question3').value.toLowerCase();
    const answer4 = document.getElementById('question4').value.toLowerCase();
    const answer5 = document.getElementById('question5').value.toLowerCase();

    let result;
    if (answer1.includes("web")) {
      result = "JavaScript";
    } else if (answer1.includes('data')) {
      result = "Python";
    } else if (answer1.includes('mobile')) {
      result = "Swift";
    } else {
      result = "Python";
    }
    document.getElementById('result').innerText = "We suggest you to learn about " + result + "!";
    document.getElementById("result").style.display = 'block';
  });

  document.getElementById('survey-form').addEventListener('reset', function () {
    document.getElementById('result').style.display = 'none';
  });
}