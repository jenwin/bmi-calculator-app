const calcBMI = document.getElementById('bmiButton');
calcBMI.addEventListener('click', () => {
//height and weight
const heightFeet = document.getElementById('height-feet').value;
const heightInches = document.getElementById('height-inches').value;
const weight = document.getElementById('weight-lbs').value;
const numHeightFeet = Number(heightFeet);
const numHeightInches = Number(heightInches);
const numWeight = Number(weight);
//total height in inches
const addAllHeight = ((numHeightFeet * 12) + numHeightInches);
//total height in meters
const totalHeight = Math.pow((addAllHeight * 0.0254), 2);
//total weight in kg
const totalWeight = (numWeight * 0.45);
//total bmi
const totalBMI = (totalWeight/totalHeight).toFixed(1);
//display total value
let bmiResults = document.getElementById('bmiresults');

if (totalBMI.length === 3) {
  bmiResults.disabled = true;
} else {
  bmiResults.value = totalBMI;
}

//display text results
const bmiResultsInfo = document.querySelector('.bmi-results-info');
switch (true) {
  case (totalBMI < 18.5):
    bmiResultsInfo.innerHTML = 'You are underweight.';
    break;
  case (totalBMI >= 18.5 && totalBMI <= 24.9):
    bmiResultsInfo.innerHTML = 'You are healthy!';
    break;
  case (totalBMI >= 25 && totalBMI <= 29.9):
    bmiResultsInfo.innerHTML = 'You are overweight.';
    break;
  case (totalBMI >= 30):
    bmiResultsInfo.innerHTML = 'You are obese.';
    break;
  default:
    bmiResultsInfo.innerHTML = 'Please Enter Your Info';
}
});