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
    full.style.cursor = "../img/url(88.png), auto";
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
    timerGame();
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
}


function timerGame() {
    var clock = setInterval(function() {
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
        // отображение времени на табло
        timer.innerText =  min + " мин " + sec + " сек";
        // если жизни закончились завершаем игру
        if (quantityLifes == 0) {
            clearInterval(clock);
            over();
        }
    }, 1000);
}