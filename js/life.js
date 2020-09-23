function creatureLifes() {
    //создаем блок div с жизнями
    lifes = document.createElement("div");
    //даем ему id
    lifes.id = "lifes";
    //Помещшаем его на поле игровое
    full.appendChild(lifes);
    //нулевая позиция жизней
    let currentQuantityLifes = 0;
    //создаем жизни и добавляем на поле lifes
    while (currentQuantityLifes < quantityLifes) {
        span = document.createElement("span");
        lifes.appendChild(span);
        currentQuantityLifes = currentQuantityLifes + 1;
    }
}
