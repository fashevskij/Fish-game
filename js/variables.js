//ложим в переменную игровое поле
let full = document.querySelector("#full");


/*********************************************/
//Создание эелементов на игровом поле
/*********************************************/
// помещаем в переменную стартовый блок
let startBlock = document.createElement("div");
// помещаем в переменную стартовый кнопку
let startButton = document.createElement("button");

//рыбки
let fish;
let count = 1;
let count_fish = 0;
let menu = document.getElementsByClassName('menu__item');

/*********************************************/
//переменные для игры
/*********************************************/
//lifes - очки жизни на игровом опле
let lifes = null;
// points - очки на игровом поле
let points = null;

//i - очки игры
let point = 0;
//подлодки
let end = 0;


//пузырьки
let bubles;
//статус для вызова окончания игры
var status = "open";
//делаем видимыми все элементы игры и скрываем стартовый блок
let time = null;

/***************************
исходные данные для игры
***************************/
// количество жизней
let quantityLifes = 5;
// исходный таймер
let sec = 0;
let min = 0;

