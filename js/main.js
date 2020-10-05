/****************************
запуск игры
****************************/
function start() {
    //вызов стартового блока    
    creatureStartBlock();
    //при клике на "старт" запускается функция startGame
    startButton.onclick = startGame;
}

start();

function startGame() {
    document.querySelector('.menu__box').style.display = "none";
    document.querySelector('.hamburger-menu').style.display = "none";
    //событие на клавиатуре для управления рыбкой
    addEventListener('keydown',checkClick);
    //удаление стартового блока 
    deleteStartBlock();
    //создание поля с очками
    creaturePoints();
    //создаем таймер
    creatureTimer();
    //создаем поле жизней
    creatureLifes();
    //создаем шарик
    creatureFish();
    // начинаем отсчет времени до окончания игры 
    

}
//удаление всех элементов и вызо функции конца игры
function over() {
    deleteLifes();
    deletePoints();
    deleteInfoBlock();
    deleteIFull();
    gameOver();
    restart();
    clearAll();
}



