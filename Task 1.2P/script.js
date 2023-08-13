// String methods
const originalString = "Hello, World!";
const uppercaseString = originalString.toUpperCase();
const lowercaseString = originalString.toLowerCase();
const trimmedString = originalString.trim();
const substring = originalString.substring(0, 5);
const replacedString = originalString.replace("Hello", "Hi");

// Number methods
const num = 42;
const parsedInt = parseInt("123");
const fixedToTwoDecimal = num.toFixed(2);
const exponentialNotation = num.toExponential(4);
const binaryString = num.toString(2);

// Array methods
const numbersArray = [1, 2, 3, 4, 5];
const doubledArray = numbersArray.map(num => num * 2);
const filteredArray = numbersArray.filter(num => num > 2);
const reducedValue = numbersArray.reduce((acc, num) => acc + num, 0);

// Date methods
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

// Function methods
function greet(name) {
    return `Hello, ${name}!`;
}
const greetMessage = greet("Alice");

// Displaying the results
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <p><strong>String Methods:</strong></p>
    <p>Original String: ${originalString}</p>
    <p>Uppercase: ${uppercaseString}</p>
    <p>Lowercase: ${lowercaseString}</p>
    <p>Trimmed: ${trimmedString}</p>
    <p>Substring: ${substring}</p>
    <p>Replaced: ${replacedString}</p>

    <p><strong>Number Methods:</strong></p>
    <p>Parsed Int: ${parsedInt}</p>
    <p>Fixed to Two Decimal: ${fixedToTwoDecimal}</p>
    <p>Exponential Notation: ${exponentialNotation}</p>
    <p>Binary String: ${binaryString}</p>

    <p><strong>Array Methods:</strong></p>
    <p>Doubled Array: ${doubledArray}</p>
    <p>Filtered Array: ${filteredArray}</p>
    <p>Reduced Value: ${reducedValue}</p>

    <p><strong>Date Methods:</strong></p>
    <p>Year: ${year}</p>
    <p>Month: ${month}</p>
    <p>Day: ${day}</p>
    <p>Hours: ${hours}</p>
    <p>Minutes: ${minutes}</p>

    <p><strong>Function Methods:</strong></p>
    <p>${greetMessage}</p>
`;
