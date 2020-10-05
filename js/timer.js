
//функция создание таймера игры
let creatureTimer = function() {
    //создаем заголовок h2
    let time = document.createElement("h2");
    //даем заголовку id
    time.id = "time";
    //помещаем его на поле
    full.appendChild(time);
    
    //создаем счетчик
    timer = document.createElement("span");
    //задаем ему отображение времени в начале это по 0
    timer.innerText = min + " мин " + sec + " сек";
    //добавляем в заголовок счетчик 
    time.appendChild(timer);
    //функция для работы таймера
    setInterval(function() {   
            //добавляем 1 секунлду    
             sec++;
             //если секунд 60 
            if (sec == 60) {
                //деаем скунды = 0
                sec = 0;
                //добавляем 1 мин
                min++;
            }
            // отображение времени на табло
            timer.innerText =  min + " мин " + sec + " сек";
            
    }, 1000);//это мы повторяем в интервале в 1 сек
    //для картинки часов
    //создаем еще один спан
    clock = document.createElement("span");
    //даем ему id 
    clock.id = "clock";
    //добавляем в заголовок этот блок спан
    time.appendChild(clock);
};

    
