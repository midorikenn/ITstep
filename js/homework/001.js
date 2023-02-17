
function firstExer(d){
    console.log("Ввод:", d);
    console.log("Вывод: %d, %d, %d", d, Math.pow(d, 2), Math.pow(d, 3));
}

function secondExer(h){
    console.log("Ввод:", h);
    console.log("Вывод: h = %d, h в квадрате = %d", h, Math.pow(h, 2));
}

function thirdExer(a, b){
    console.log("Ввод: %d, %d", a, b);
    console.log("Вывод: a * b = %d, a + b = %d", a * b, a + b);
}

let len = (arr) => arr.length;

let volume = (a, b, c) => a * b * c;

let d = 7;
let h = 5;
let a = 3;
let b = 5;

firstExer(d);
console.log("---------")
secondExer(h);
console.log("---------")
thirdExer(a, b)
console.log("---------")
console.log("Длина массива: ", len([1, 5, 5, 9, 10]))
console.log("---------")
console.log("Объем параллелепипеда: ", volume(12, 10, 1))

