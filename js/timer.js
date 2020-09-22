 let creatureTimer = function() {
    let min = 0;
    let sec = 0;
    //создаем заголовок h2
    let time = document.createElement("h2");
    //добавляем ему id
    time.id = "time";
    //Размещаем его на поле
    full.appendChild(time);
    //создаем счетчик времени
    let timer = document.createElement("span");
    //добавляем в заголовок счетчик 
    // отображение времени на табло
    timer.innerText =  min + " мин " + sec + " сек";
    time.appendChild(timer);
    let clock = document.createElement("span");
    clock.id = "clock";
    //добавляем в заголовок счетчик 
    time.appendChild(clock);
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

    startButton.addEventListener('click',function(){
    timerGame()});
    

};

creatureTimer();

