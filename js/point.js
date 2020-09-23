//Функция создания очков
function creaturePoints() {
    //создаем блок очков
    var stars = document.createElement("div");
    //размещаем на поле
    full.appendChild(stars);
    //добавляем id для стилизации блока
    stars.id = "stars";
    // создаем спан для отображения очков
    points = document.createElement("span");
    //размещаем его внутри старс
    stars.appendChild(points);
    //присваеваем начальные очки в виде переменной point по умолчанию = 0
    points.innerText = point;
    //создаем блок размещаем его внутри старс (будет картинка рыбки)
    var starsFish = document.createElement("span");
    starsFish.id = "starsFish";
    stars.appendChild(starsFish);
}