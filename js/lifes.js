function creatureLifes() {
    //создаем блок div c жизнями
    let lifes = document.createElement("div");
    //даем новому блоку id
    lifes.id = "lifes";
    //размещаем его на игровом поле
    full.appendChild(lifes);

    let currentQuantityLifes = 0;
    let quantityLifes = 5;
    //создаем жизни и добавляем на поле lifes
    while (currentQuantityLifes < quantityLifes) {
        let span = document.createElement("span");
        lifes.appendChild(span);
        currentQuantityLifes = currentQuantityLifes + 1;
    }
}
creatureLifes();