
//создание таймера игры
 var creatureTimer = function() {
    //создаем заголовок h2
    var time = document.createElement("h2");
    time.id = "time";
    full.appendChild(time);
    //создаем счетчик времени и задаем начальное время
    timer = document.createElement("span");
    timer.innerText = min + " мин " + sec + " сек";
    //добавляем в заголовок счетчик 
    time.appendChild(timer);
    clock = document.createElement("span");
    clock.id = "clock";
    //добавляем в заголовок счетчик 
    time.appendChild(clock);
    setInterval(function() {       
             sec++;
            if (sec == 60) {
                sec = 0;
                min++;
            }
            // отображение времени на табло
            timer.innerText =  min + " мин " + sec + " сек";
            // если жизни закончились завершаем игру
            if (quantityLifes == 0) {         
                over();
            }
    }, 1000);

};

    
