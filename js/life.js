function creatureLifes() {
    //создаем блок div
    lifes = document.createElement("div");
    lifes.id = "lifes";
    full.appendChild(lifes);

    var currentQuantityLifes = 0;
    //создаем жизни и добавляем на поле lifes
    while (currentQuantityLifes < quantityLifes) {
        span = document.createElement("span");
        lifes.appendChild(span);
        currentQuantityLifes = currentQuantityLifes + 1;
    }
}
