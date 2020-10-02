
// создаем и определяем функционал рыбкам
var creatureFish = function () {
    fish = document.createElement("div");
    fish.id = "fish";
    // назначение className с помощью рандомного выбора
    if (sec < 5) {
        var act = 1;
    } else {
        act = random(5);
    }
    if (sec > 25 || min > 1) {
        act = random(6);
    }
    //исходя из рандомного числа вызываеться нужный класс рыбы на игровое поле
    if (act == 1) {
        fish.className = "fish first";
    } else if (act == 2) {
        fish.className = "fish star";
    } else if (act == 3) {
        fish.className = "fish plus";
    } else if (act == 4) {
        fish.className = "fish minus";
    } else if (act == 5) {
        fish.className = "fish bomb";
    } else {
        fish.className = "fish shark";
    }

    //назначаем исходное положение рыбки 

    var position = 100 + random(700);
    fish.style.top = position + "px";

    full.appendChild(fish);

    if (status != "over") {
        eat(fish);
        fishMove(fish);
    }
};