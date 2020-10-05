function createBubles() {
    var bubles = document.createElement("div");
    bubles.id = "bubles";
    //назначаем исходную позицию пузырька
    var position = 100 + random(1800);
    bubles.style.left = position + "px";
    //всплывание пузырька каждые 10милисекунд на 2пиксель
    setInterval(function() {
        bubles.style.display = "block";
        bubles.style.top = bubles.offsetTop - 1 + "px";
        //при достижении края игрового поля удаляем
        if (bubles.offsetTop == 0) {
            bubles.remove();
        }
    }, 10);
    // когда попадаем на пузырек появляется подлодка
    setInterval(function(){
        if((fishHero.offsetLeft + 70) >= (bubles.offsetLeft) && (fishHero.offsetTop +70) >= (bubles.offsetTop) &&
            (fishHero.offsetLeft) <= (bubles.offsetLeft + 50) && (fishHero.offsetTop) <= (bubles.offsetTop + 50)){
                bubles.remove();
                point++;
                createEnd();
            }
        },100);
    
    //если игра не завершена добавляем пузырек
    if (status != "over") {
        full.appendChild(bubles);
    }
}