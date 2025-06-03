<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Guess the Number Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: #f0f0f0;
      padding-top: 50px;
    }

    .game-container {
      background: #fff;
      max-width: 400px;
      margin: auto;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

    input[type="number"] {
      padding: 10px;
      width: 60%;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      margin-top: 10px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #218838;
    }

    .message {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
    }

    .reset-btn {
      background-color: #007bff;
    }

    .reset-btn:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <div class="game-container">
    <h1>Guess the Number</h1>
    <p>I'm thinking of a number between 1 and 100</p>
    <input type="number" id="guess" placeholder="Enter your guess" min="1" max="100">
    <br>
    <button onclick="checkGuess()">Guess</button>
    <button class="reset-btn" onclick="resetGame()">Reset</button>
    <div class="message" id="message"></div>
  </div>

  <script>
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const guessInput = document.getElementById('guess');
      const message = document.getElementById('message');
      const guess = Number(guessInput.value);
      attempts++;

      if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
      }

      if (guess === secretNumber) {
        message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
        message.style.color = 'green';
      } else if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = 'orange';
      } else {
        message.textContent = "Too high! Try again.";
        message.style.color = 'orange';
      }
    }

    function resetGame() {
      secretNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      document.getElementById('guess').value = '';
      document.getElementById('message').textContent = '';
    }
  </script>

</body>
</html>
