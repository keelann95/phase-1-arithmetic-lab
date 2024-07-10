// Function to multiply two numbers and return the result
function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Function to generate a random integer greater than 0
  function generateRandomInteger() {
    return Math.floor(Math.random() * 100) + 1; // Generates random integer between 1 and 100
  }
  
  // Function to calculate remainder
  function mod(num3, num4) {
    return num3 % num4;
  }
  
  // Array of numbers
  const numbers = [10, 5, 20, 15];
  
  // Finding the maximum number
  const max = Math.max(...numbers);
  
  module.exports = {
    multiply,
    generateRandomInteger,
    mod,
    max
  };
  