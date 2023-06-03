window.onload = function () {
  document.getElementById("survey-form").addEventListener('submit', function (event) {
    event.preventDefault();

    const answer1 = document.getElementById('question1').value.toLowerCase();
    const answer2 = document.getElementById('question2').value.toLowerCase();
    const answer3 = document.getElementById('question3').value.toLowerCase();
    const answer4 = document.getElementById('question4').value.toLowerCase();
    const answer5 = document.getElementById('question5').value.toLowerCase();

    const trackFrequencies = {
      A: 0,
      B: 0,
      C: 0
    };

    const answers = [answer1, answer2, answer3, answer4, answer5];
    answers.forEach(function (answer) {
      if (answer === 'web') {
        trackFrequencies.A++;
      } else if (answer === 'data') {
        trackFrequencies.B++;
      } else if (answer === 'mobile') {
        trackFrequencies.C++;
      }
    });

    const mostFrequentTrack = Object.keys(trackFrequencies).reduce((a, b) => trackFrequencies[a] > trackFrequencies[b] ? a : b
    );

    let result;
    if (mostFrequentTrack === 'A') {
      result = 'JavaScript';
    } else if (mostFrequentTrack === 'B') {
      result = 'Python';
    } else if (mostFrequentTrack === 'C') {
      result = 'Swift';
    }

    document.getElementById('survey-form').reset();

    document.getElementById('result').innerText = "We suggest you to learn about " + result + "!";
    document.getElementById("result").style.display = 'block';
    setTimeout(() => this.reset(), 10000);
  });

  document.getElementById('survey-form').addEventListener('reset', function () {
    document.getElementById('survey-form').reset();
    document.getElementById('result').style.display = 'none';
  });
};