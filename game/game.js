var secretNumber;
    
    function startGame() {
      secretNumber = Math.floor(Math.random() * 10) + 1;
      document.getElementById('result').textContent = '';
      document.getElementById('guessInput').value = '';
    }
    
    function checkGuess() {
      var guess = parseInt(document.getElementById('guessInput').value);
      
      if (guess === secretNumber) {
        document.getElementById('result').textContent = '恭喜你，猜對了！';
      } else {
        document.getElementById('result').textContent = '很抱歉，猜錯了。正確答案是 ' + secretNumber;
      }
    }