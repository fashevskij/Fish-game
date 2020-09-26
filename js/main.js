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
    
    status = "start";
    //пояление рыбки вместо курсора
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
    status = "over";
    deleteLifes();
    deletePoints();
    deleteInfoBlock();
    deleteIFull();
    full.style.cursor = "auto";
    gameOver();
    restart();
    creatureTimer.remove();
}



