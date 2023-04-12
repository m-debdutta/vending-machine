const style = function(text, code) {
  return "\033[" + code + "m" + text + "\033[0m";
};

const greenfg = function(text) {
  return style(text, "32");
};

const redfg = function(text) {
  return style(text, "31");
};

const yellowfg = function(text) {
  return style(text, "1;33");
};

const isArrayEqual = function(array1, array2) {

  if (array1.length !== array2.length) return false;

  for (let index = 0; index < array2.length; index++) {
    if (array1[index] !== array2[index]) return false;

  };
  return true;
}

const isPatternEqual = function(array1, array2) {

  if (array1.length !== array2.length) return false;

  for (let index = 0; index < array2.length; index++) {
    if (toString(array1[index]) !== toString(array2[index])) return false;

  };
  return true;
};

let totalTests = 0;
let passedTests = 0;
const log = [];

const addLog = function(icon, result, expected, actual, message) {
  log.push({
    stat : icon,
    expectedOutput : expected,
    actualOutput : actual,
    remarks : message
  });
};


const createSummary = function() {
  return "\n\tSummary   :    " + passedTests + "/" + totalTests + "passed";
}

const displayHeadline = function(text) {
  const headline = text;
  const underline = "-".repeat(text.length);
  console.log(yellowfg(headline + "\n" + underline));
};

const expectationMismatchMessage = function(expected, actual) {
  let line2 = "";
  line2 += greenfg("\tExpected Output  : \n" + expected);
  line2 += "\n"
  line2 += redfg("\tActual Output    : \n" + actual);
  return line2;
};

const generateMessage = function(result, expected, actual, message) {
  const icon = result ? "✅" : "❌" ;
  const line1 = icon + message;
  const line2 = expectationMismatchMessage(expected, actual);
  addLog(icon, result, expected, actual, message);

  return result ? line1 : line1 + "\n" + line2;
};

const isEqual = function(expected, actual) {
  return (expected === actual);
};

const assertArrayEqual = function(expected, actual, message) {
  //const result = isEqual(expected, actual);
  const result = isArrayEqual(expected, actual);
  passedTests += result ? 1 : 0;
  totalTests = totalTests + 1;
  const finalMessage = generateMessage(result, expected, actual, message)
  console.log(finalMessage);
};

const assertEqual = function(expected, actual, message) {
  const result = isEqual(expected, actual);
  passedTests += result ? 1 : 0;
  totalTests = totalTests + 1;
  const finalMessage = generateMessage(result, expected, actual, message)
  console.log(finalMessage);
};

exports.assertEqual = assertEqual;
exports.assertArrayEqual = assertArrayEqual;
exports.displayHeadline = displayHeadline;

