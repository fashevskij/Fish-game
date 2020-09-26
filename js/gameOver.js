/*********************************************
Блок конца игры
        <h2>GAME OVER</h2>
        <h3>Вы набрали: 100 очков</h3>
*********************************************/



function gameOver() {
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

