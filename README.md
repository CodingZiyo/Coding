<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Calculator</title>
</head>
<body>
<h1>CodingZiyo | Calculator</h1>

<div class="calculator">
  <input type="text" id="display" readonly>
  <div class="buttons">
    <button onclick="clearDisplay()">C</button>
    <button onclick="appendToDisplay('/')">/</button>
    <button onclick="appendToDisplay('*')">x</button>
    <button onclick="appendToDisplay('-')">-</button>
    <button onclick="appendToDisplay('7')">7</button>
    <button onclick="appendToDisplay('8')">8</button>
    <button onclick="appendToDisplay('9')">9</button>
    <button onclick="appendToDisplay('+')">+</button>
    <button onclick="appendToDisplay('4')">4</button>
    <button onclick="appendToDisplay('5')">5</button>
    <button onclick="appendToDisplay('6')">6</button>
    <button onclick="calculateResult()">=</button>
    <button onclick="appendToDisplay('1')">1</button>
    <button onclick="appendToDisplay('2')">2</button>
    <button onclick="appendToDisplay('3')">3</button>
    <button onclick="appendToDisplay('.')">.</button>
  </div>
  <button onclick="appendToDisplay('0')" class="zero">0</button>
</div>

<script src="main.js"></script>
</body>
</html>
ing index.html…]()
