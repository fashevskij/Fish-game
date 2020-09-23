function creatureTimer() {
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
}
