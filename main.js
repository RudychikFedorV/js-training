



const myArray = [1, 2, 3];
console.log(myArray);
// const newArray = myArray.map((el) => {
//   return el * 3;
// });
const newArray = myArray.map(function(el) {
  return el * 3;
});
console.log(newArray);
console.log(myArray);

// const myArray = [1, 2, 3];
// console.log(myArray);
// const newArray = myArray.map((el) => el * 3);
// console.log(newArray);
// console.log(myArray);

// const myArray = [1, 2, 3];
// console.log(myArray);
// const res =  myArray.forEach((el) => console.log(el * 2));
// console.log(res);
// console.log(myArray);

// const myArray = [1, true, "RFV"];
// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray.length);

// const fnWithError = () => {
//   throw new Error("Some error");
// };
// try {
//   fnWithError();
// } catch (error) {
//   console.error(error);
//   console.log(error.message);
// }
// console.log("Continue...");

// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// });
// const firstPost = {
//   id: 1,
//   author: "RFV",
// };
// console.table(newPost(firstPost));
// {id: 1, author: 'RFV', addedAt: 'Sat Dec 23 2023 21:41:17 GMT+0200 (Восточная Европа, стандартное время)'}

// const myFn = (a, b) => {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// };
// console.log(myFn(5, 3));

// const multByFactor = function (a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// };
// console.log(multByFactor(5, 2));

// function multByFactor(value, multiplier = 1) {
//   return value * multiplier;
// }
// ;
// console.log(multByFactor(5));
// console.log(multByFactor(10, 2));

// const myName = "Fedir";
// const myCity = "Zmiev";
// const myFn = `My name is ${myName}. I live in the city ${myCity}.`;
// console.log(myFn);

// function myFn(a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }
// console.dir(myFn);

// const myCity = {
//   city: "New York",
//   cityGreeting() {
//     console.log('Greetings!!!')
//   }
// }
// myCity.cityGreeting()

// const myCity = {
//   city: "New York",
// };
// myCity.city = 'Las Vegas'
// console.log(myCity)

// const myCity = {
//     city: 'New York'
// }
// myCity.popular = true
// myCity.country = 'USA'
// console.log(myCity)

// let a = 10
// console.log(a)
// a = true
// console.log(a)
// a = 'Fedor'
// console.log(a)
// a = undefined
// console.log(a)

// const objectA = {
//     a: 10,
//     b: true
// }
// const copyOfA = objectA
// copyOfA.c = 'abc'
// console.log(objectA)
