//функция для движения всех рыб с получаемым праметром
function fishMove(moveFish) {
    //задаем интервал в 0.01 сек
    setInterval(function () {
            //появляеться рыбка
            moveFish.style.display = "block";
            //двигаем ее в лево на 1 пиесель
            moveFish.style.left = moveFish.offsetLeft - count + "px";
            //если дошла до левого края экрана 
            if (moveFish.offsetLeft < 0) {
                count_fish--;
                moveFish.remove();//удаляем ее
                creatureFish();//запускаем создание рыбок
            }
    }, 10);
}