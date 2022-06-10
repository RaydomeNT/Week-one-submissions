//Activity 5 Day 2
console.log("Activity 5 Day 2");
let num = 15;
if (num % 3 == 0 && num % 5 == 0) {
  console.log("fizz buzz");
} else if (num % 3 == 0) {
  console.log("fizz");
} else if (num % 5 == 0) {
  console.log("buzz");
} else {
  console.log(num);
}
//Activity 5 Day 3
console.log("Activity 5 Day 3");
for (let i = 0; i < 6; i++) {
  let ranNum = Math.round(Math.random() * 30 + 1);
  if (ranNum % 7 == 0) {
    console.log(`Correct, ${ranNum} can be divised by 7.`);
  } else {
    console.log(`${ranNum} cannot be divided by 7`);
  }
}
//Activity 2 Day 3
console.log("Activity 2 Day 3");
for (let i = 0; i < 6; i++) {
  console.log(Math.round(Math.random() * 50) + 1);
}
//Activity 3 Day 3
console.log("Activity 3 Day 3");
for (let i = 9; i >= 0; i--) {
  console.log(i);
}
//Activity 2 Day 4
console.log("Activity 2 Day 4")
const pet = {
    name: "Otis",
    typeOfPet: "French bulldog",
    age: 2,
    colour: "white and black",
    eat() {
      return console.log(`${this.name} is eating his biscuits`);
    },
    drink() {
      return console.log(`${this.name} is drinking water`);
    },
  };
  pet.eat();
  pet.drink();
//Activity 3 Day 2
console.group("Activity 2 Day 2")
let password = "aidan1234"

if (password.length < 8)
{
console.log("Your password is too short")
}
else if (password.length >= 8)
{
console.log(password)
}
// Activity 4 Day 2
console.log("Activity 4 Day 2");
let num1 = 180;
if (num1 % 3 == 0 || num1 % 5 == 0)
{
console.log(`Correct, ${num1} can be divised by 3 or 5.`)
}
else
{
console.log(`${num1} cannot be divided this way`)
}