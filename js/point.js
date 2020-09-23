function creaturePoints() {
    var stars = document.createElement("div");
    full.appendChild(stars);
    stars.id = "stars";
    // создаем блок div
    points = document.createElement("span");
    stars.appendChild(points);
    points.innerText = point;
    var starsFish = document.createElement("span");
    starsFish.id = "starsFish";
    stars.appendChild(starsFish);
}