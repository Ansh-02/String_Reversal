function reverseString() {
  var inputElement = document.getElementById("inputString");
  var inputValue = inputElement.value;

  var reversedString = inputValue.split("").reverse().join("");

  var outputElement = document.getElementById("output");
  outputElement.innerHTML = "Reversed String: " + reversedString;
}
