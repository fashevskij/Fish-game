function creaturePoints() {
    let stars = document.createElement("div");
    full.appendChild(stars);
    stars.id = "stars";
    // создаем блок div
    let points = document.createElement("span");
    stars.appendChild(points);
    points.innerText = point;
    let starsFish = document.createElement("span");
    starsFish.id = "starsFish";
    stars.appendChild(starsFish);
}
creaturePoints();