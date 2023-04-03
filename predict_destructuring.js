// 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)
// // Tesla
// // Mercedes 


// 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // console.log(name);
// console.log(otherName);
// // console.log(name) does not work because 'name' is changed to 'otherName'
// // console.log(otherName) outputs Elon


// 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);
// // password does not change it stays 12345
// // console.log(hashedPassword) is undefined


// 4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// []
// // console.log(numbers);
// console.log(first == second);
// // (2 == 5)
// console.log(first == third);
// // (2 == 2)
// // first console.log is false because 2 does not equal 5
// // second console.log is true because 2 equals 2


// 5
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// // key = value 
// console.log(secondKey);
// // secondKey = [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]);
// // secondKey(0) = 1
// console.log(willThisWork);
// // willThisWork = 5

