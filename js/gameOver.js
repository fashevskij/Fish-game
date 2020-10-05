//блок конца игры
function gameOver() {
    //статус условно для завешения игры
    status = "over";
    
    var div = document.createElement("div");//создаем div
    div.id = "game-over";//даем ему id
    full.appendChild(div);//помещаем на игровое поле

    var h2 = document.createElement("h2");//создаем заголовок h2
    h2.innerText = "GAME OVER";//даем ему текст 
    div.appendChild(h2);//помещаем его в созданый выше div

    var h3 = document.createElement("h3");//создаем заголовок h3
    //задаем заголовку отобразить время и очки набраные в игре
    h3.innerText = "Вы набрали: " + point + " очков" + "\r\n" + "За " + timer.innerText;
    div.appendChild(h3);//помещаем заголовок в блок div тот что создали выше
}
//очистка всех таймеров в игре
function clearAll() {
    //перебор всех таймеров.создаем переменную с функцией таймера которая при запуске пройдеться по всем интервалам
    for (let i = setTimeout(function() {}, 0); i > 0; i--) {
        window.clearInterval(i);//очищаем i-тый интервал
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

