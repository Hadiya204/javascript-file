// class activity
// question:01
// let age = 20; 

// if (age >= 18) {
//     console.log('You are eligible to vote.');
// }
// else {
//     console.log('You are not eligible to vote yet.');
// }
// // question:02
// let temperature = 28; 

// if (temperature > 25) {
//     console.log("It's a hot day!");
// }
// else {
//     console.log("It's a normal day.");
// }
// // question:03
// let student_grade = +prompt("enter your score");

// if (student_grade >= 60) {
//     console.log('You passed the test!');
// }
// else {
//     console.log('You failed the test.');
// }
// // question:04
// let is_raining = true;

// if (is_raining) {
//     console.log('Remember to bring an umbrella.');
// } else {
//     console.log('Enjoy the sunny weather!');
// }
// //question:05
// let student__age = +prompt("enter your age")
// if (student__age>18) {
//     console.log("You are an adult");    
// }
// else if(student__age<18){
//     console.log("You are a minor");
// }
// //question:06
// let number = +prompt("enter the number")
// if (number > 0) {
//     console.log("The number is positive");
//     }
//  else if(number == 0){
//     console.log( "The number is negative");
// }
// else if (number < 0) {
//     console.log("The number is negative");
// }
// else{
//     console.log("all number are integers");
// }
// // class work
// // logical operation
// let score = +prompt("enter your score")
// if(score >= 80 || score >= 60){
//     console.log("you passed");
// }else{
// console.log("you failed");
// }
// let issunny = true;
// let iswarm = false;
// if (issunny && iswarm) {
//     console.log("perfect weather for outdoor activities!");
// }else{
//     console.log("may be another day.");
// }
// let israining = false;
// if(israining){
//     console.log("it's not raining. enjoy the day!");
// }else{
//     console.log("don't forget your umbrella");
// }
// let weight = +prompt("enter weight")
// let time = +prompt("enter time")
// if(weight > 300 && time <6){//weight =244 && time= 4
//     alert("come to our tryout");
// }else{
//     alert("come to our cookout"); 
// }
// let weight = +prompt("enter weight")
// let time = +prompt("enter time")
// let age = +prompt("enter age")
// let gender = +prompt("enter gender")
// if (weight > 300 || time < 6 || age > 17 || gender === "male") {
//     // 78 > 300 || 5 < 6 || 16 > 17 || male === "male"
//     alert("come to our tryout");
// }
// else{
//     alert("come to our cookout");
// }
let weight = +prompt("enter weight")
let time = +prompt("enter time")
if (!(weight > 300 || time < 6 )){
    alert("come to our tryout");
}
else{
    alert("come to our cookout");
}
let x = 10;
let y = 5;

if (x > 5) {
    if (y > 2) {
        console.log("Both x and y are greater than their respective thresholds.");
    } else {
        console.log("x is greater than 5, but y is not greater than 2.");
    }
} else {
    console.log("x is not greater than 5, so the inner condition is not checked.");
}
let temperature = 15;
let isSunny = true;

if(temperature > 25){
  console.log("It's hot outside!");

  if(isSunny){
      console.log("Don't forget to wear sunscreen.");
  }
  else{
    console.log("You might still want to wear sunscreen.");
  }
}
else if(temperature >= 15 && temperature <= 25){
    console.log("It's a pleasant day.");
  if(isSunny){
    console.log("Enjoy the sunshine!");
  }
  else{
    console.log("Even if it's cloudy, it's still nice outside.");
}
}
else{
    console.log("It's a bit chilly.");
    if (isSunny) {
        console.log("Don't be fooled by the sun, it's still cool.");
    } else {
        console.log("It might be cloudy, so bring a jacket just in case.");
    }
}
    

