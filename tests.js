test("Example", function(assert) {
  // Test Case 01
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-01");

// Test Case 02
  assert.propEqual(convertIntegerToRoman(4), {value: "IV", message: '', result: true}, "TC-02");

// Test Case 03
  assert.propEqual(convertIntegerToRoman(9), {value: "IX", message: '', result: true}, "TC-03");

// Test Case 04
  assert.propEqual(convertIntegerToRoman(58), {value: "LVIII", message: '', result: true}, "TC-04");

// Test Case 05
  assert.propEqual(convertIntegerToRoman(1994), {value: "MCMXCIV", message: '', result: true}, "TC-05");

// Test Case 06
  assert.propEqual(convertRomanToInteger("III"), {value: 3, message: '', result: true}, "TC-06");

// Test Case 07
  assert.propEqual(convertRomanToInteger("LVIII"), {value: 58, message: '', result: true}, "TC-07");

// Test Case 08
  assert.propEqual(convertRomanToInteger("MCMXCIV"), {value: 1994, message: '', result: true}, "TC-08");

// Test Case 09
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-09");

// Test Case 10
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-10");

// Test Case 11
  assert.propEqual(convertIntegerToRoman(150), {value: "CL", message: '', result: true}, "TC-11");

// Test Case 12
  assert.propEqual(convertIntegerToRoman(999), {value: "CMXCIX", message: '', result: true}, "TC-12");

// Test Case 13
  assert.propEqual(convertIntegerToRoman(444), {value: "CDXLIV", message: '', result: true}, "TC-13");

// Test Case 14
  assert.propEqual(convertRomanToInteger("CCCLXIX"), {value: 369, message: '', result: true}, "TC-14");

// Test Case 15
  assert.propEqual(convertRomanToInteger("MMCMXCIX"), {value: 2999, message: '', result: true}, "TC-15");

// Test Case 16
  assert.propEqual(convertRomanToInteger("IX"), {value: 9, message: '', result: true}, "TC-16");

// Test Case 17
  assert.propEqual(convertIntegerToRoman(5000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-17");

// Test Case 18
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-18");

// Test Case 19
  assert.propEqual(convertIntegerToRoman("123"), {value: 'CXXIII', message: '', result: true}, "TC-19");

// Test Case 20 - In this case it gives an error, because it is not passed in quotes, and it is trying to do a toUperCase to a number
  assert.propEqual(convertRomanToInteger(1987), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-20");






















});