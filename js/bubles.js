function createBubles() {
    var bubles = document.createElement("div");
    bubles.id = "bubles";
    //назначаем исходную позицию пузырька
    var position = 100 + random(1200);
    bubles.style.left = position + "px";
    //всплывание пузырька каждые 10милисекунд на 1пиксель
    setInterval(function() {
        bubles.style.display = "block";
        bubles.style.top = bubles.offsetTop - 1 + "px";
        //при достижении края игрового поля удаляем
        if (bubles.offsetTop == 0) {
            bubles.remove();
        }
    }, 10);
    // когда наводим на пузырек появляется подлодка
    bubles.onmouseover = function() {
        bubles.remove();
        createEnd();
    };
    //если игра не завершена добавляем пузырек
    if (status != "over") {
        full.appendChild(bubles);
    }
}