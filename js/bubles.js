function createTimes() {
    var times = document.createElement("div");
    times.id = "times";
    //назначаем исходную позицию пузырька
    var position = 100 + random(1200);
    times.style.left = position + "px";
    //всплывание пузырька каждые 10милисекунд на 1пиксель
    setInterval(function() {
        times.style.display = "block";
        times.style.top = times.offsetTop - 1 + "px";
        //при достижении края игрового поля удаляем
        if (times.offsetTop == 0) {
            times.remove();
        }
    }, 10);
    // когда наводим на пузырек появляется подлодка
    times.onmouseover = function() {
        times.remove();
        createEnd();
    };
    //если игра не завершена добавляем пузырек
    if (status != "over") {
        full.appendChild(times);
    }
}