"use strict";
let result = true;
while (result) {
  let choice = +prompt(
    "Convert From:\n 1. Celsius to Kelvin,\n 2. Kelvin to Celcius,\n 3. Fahrenheit to Celsius,\n 4. Celsius to Fahrenheit,\n 5. Fahrenheit to Kelvin,\n 6. Kelvin to Fahrenheit,\n 7. Exit program"
  );
  let temp;
  switch (choice) {
    case 1:
      let C = +prompt("Enter temperature in celcius");
      temp = alert(C + 273.15);
      break;
    case 2:
      let K = +prompt("Enter temperature in kelvin");
      temp = alert(K - 273.15);
      break;
    case 3:
      let F = +prompt("Enter temperature in Fahrenheit");
      temp = alert(((F - 32) * 5) / 9);
      break;
    case 4:
      let celcius = +prompt("Enter temperature in Celcius");
      temp = alert(celcius * (9 / 5) + 32);
      break;
    case 5:
      let fahrenheit = +prompt("Enter temperature in Fahrenheit");
      temp = alert(((fahrenheit - 32) * 5) / 9 + 273.15);
      break;
    case 6:
      let kelvin = +prompt("Enter temperature in Kelvin");
      temp = alert(((kelvin - 273.15) * 9) / 5 + 32);
      break;
    case 7:
      result = false;
      break;
    default:
      alert("Invalid Input");
  }
}

