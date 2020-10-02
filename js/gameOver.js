//блок конца игры
function gameOver() {
    //статус условно для завеше
    status = "over";
    var div = document.createElement("div");
    div.id = "game-over";
    full.appendChild(div);

    var h2 = document.createElement("h2");
    h2.innerText = "GAME OVER";
    div.appendChild(h2);

    var h3 = document.createElement("h3");
    h3.innerText = "Вы набрали: " + point + " очков" + "\r\n" + "За " + timer.innerText;
    div.appendChild(h3);
}
//очистка всех таймеров в игре
function clearAll() {
    //перебор всех таймеров
    for (var i = setTimeout(function() {}, 0); i > 0; i--) {
        window.clearInterval(i);
    if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
    }
}

/**********************************************
Удаление функций
**********************************************/
// удаление стартового блока
function deleteStartBlock() {
    startBlock.remove();
}
// удаление жизней
function deleteLifes() {
    lifes.remove();
}
// удаление очков
function deletePoints() {
    points.remove();
}
// удаление очков
function deleteInfoBlock() {
    timer.remove();
}
// удаление элементов с игрового поля
function deleteIFull() {
    full.innerText = "";
}

