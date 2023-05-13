function init() {
  document.querySelector("input[type='checkbox']").addEventListener("change", (e) => {
    document.querySelector("h1").innerHTML = e.target.checked ? "Integer To Roman" : "Roman To Integer";
  });

  document.querySelector(".convert-button").addEventListener("click", () => {
    document.querySelector("input[type='checkbox']").checked ? convertIntegerToRoman() : convertRomanToInteger();
  });

  const romanNumerals = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

  const convertRomanToInteger = () => {
    // Get the roman numeral from the input
    const romanNumeralRegex = new RegExp(
        /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
    );

    roman = document.querySelector("input[type='text']").value;
    roman = roman.toUpperCase();
    const regexResult = romanNumeralRegex.test(roman);

    if (!regexResult) {
      alert("Please enter a valid roman numeral");
      return false;
    }

    // Create a mapping of roman numerals to decimal numbers
    let decimalNumber = 0;

    for (let i = 0; i < roman.length; i++) {
      const currentNumeral = romanNumerals[roman[i]];
      const nextNumeral = romanNumerals[roman[i + 1]];

      // If the current numeral is less than the next numeral, subtract it the other possibilities are to add it only
      if (nextNumeral && currentNumeral < nextNumeral) {
        decimalNumber -= currentNumeral;
      } else {
        decimalNumber += currentNumeral;
      }
    }

    document.querySelector(".convert-output").innerHTML = decimalNumber;
  };
}
  const convertIntegerToRoman = () => {
    // Get the decimal number from the input
    const numberRegex = new RegExp(/^\d+$/);

    let decimalNumber = document.querySelector("input[type='text']").value;
    const regexResult = numberRegex.test(decimalNumber);

    if (!regexResult) {
      alert("Please enter a valid integer");
      return false;
    }

    // It is not necessary to check if the number is greater than 3999 but I am doing it anyway
    if (Number(decimalNumber) > 3999) {
      alert("Out of range. Please enter a integer less than 4000.");
      return false;
    }

    const romanNumerals = { I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000 };
    let romanNumeral = '';

    for (let i = Object.keys(romanNumerals).length - 1; i >= 0; i--) {
      const currentNumeral = Object.keys(romanNumerals)[i];
      const currentDecimal = romanNumerals[currentNumeral];

      while (decimalNumber >= currentDecimal) {
        romanNumeral += currentNumeral;
        decimalNumber -= currentDecimal;
      }
    }

    document.querySelector(".convert-output").innerHTML = romanNumeral;
  };