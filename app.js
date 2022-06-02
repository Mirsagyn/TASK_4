// 1. Напишите функцию, которая в цикле выводит числа от 0 до 50 - 10 баллов

let myNumber = function (howManyTimes) {

	for (let i = 0; i < howManyTimes; i++) {
	console.log(i)
	}
}
myNumber(50)
	
// Вариант без функции
/*
let myNumber = 50;

while (myNumber > 0) {
	console.log(myNumber);
    myNumber--;
}
*/




// 2. Напишите функцию, которая в цикле выводит числа от 50 до 0 - 10 баллов

let myNum = function (howManyTimes) {

	for (let i = 50; i > howManyTimes; i--) {
	console.log(i)
	}
}
myNum(0)

// Вариант без функции
/*
let myNum = 0;

while (myNum < 50) {
	myNum++;
	console.log(myNum);
}
*/

// Дан массив с элементами 2, 5, 9, 15, 0, 4 . С помощью цикла for  и оператора if
//  выведите на консоль столбец тех элементов массива, которые больше 2-х , но меньше 5

let myArray = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < myArray.length; i++ ) {

	if(myArray[i] > 2 && myArray[i] < 5) console.log(myArray[i]);
}
