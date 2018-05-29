let age = 43;
let gender = 'm';
let height = 180;
let weight = 78;
let exerciseLevel = 3;

let heightInCM = height / 100;
let bodyWeightSquared = Math.pow(heightInCM, 2);
let bmi = weight / bodyWeightSquared;

console.log(`Current BMI = ${bmi}`)

let idealBMI = 22.5
let idealWeight = idealBMI * bodyWeightSquared

console.log(`Idealweight by 19th century standards ${Math.round(idealWeight)} kg`)

let bmr = 10.0 * weight + 6.25 * height - 5.0 * age;
if (gender === 'm') {
  bmr += 5;
}
if (gender === 'f') {
  bmr -= 161;
}

let caloriesPerDay

switch (exerciseLevel) {
case '1':
  caloriesPerDay = bmr * 1.2
  break
case '2':
  caloriesPerDay = bmr * 1.375
  break
case '3':
  caloriesPerDay = bmr * 1.55
  break
case '4':
  caloriesPerDay = bmr * 1.725
  break
case '5':
  caloriesPerDay = bmr * 1.9
  break
default:
  caloriesPerDay = bmr * 1.2
  break
}

console.log(`Current calories per day expended ${caloriesPerDay}`)

if (weight > idealWeight) {
  dietCaloriesPerDay = caloriesPerDay - 500
  dietWeeks = (weight - idealWeight) / 0.5
} else {
  dietCaloriesPerDay = caloriesPerDay + 500
  dietWeeks = (idealWeight - weight) / 0.5
}

console.log('19th century diet:')
console.log(`Eat ${Math.round(dietCaloriesPerDay)} calories per day for ${Math.round(dietWeeks)} weeks`)
console.log(`While maintaining your current exercise level: ${exerciseLevel}`)
