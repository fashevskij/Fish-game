//функция пожирания рыбок
function eat(fishEat) {
        //создаем интервал с 0.1 сек проверяем условие при сближении координат рыб
        setInterval(function () {
            if ((fishHero.offsetLeft + 70) >= (fishEat.offsetLeft) && (fishHero.offsetTop + 70) >= (fishEat.offsetTop) &&
                (fishHero.offsetLeft) <= (fishEat.offsetLeft + 60) && (fishHero.offsetTop) <= (fishEat.offsetTop + 60)) {
                if (fishEat.className != "Remove") {
                    //если fish bomb отнимаем жизнь
                    if (fishEat.className == "fish bomb") {
                        //отнимаем одну жизнь
                        quantityLifes--;
                        count_fish--;
                        deleteLifes();
                        //если жизни = 0 заканчиваем игру
                        if (quantityLifes == 0) {
                            count_fish--;
                            over();
                        }
                        //показываем текущее кол-во жизней
                        creatureLifes();

                    } else if (fishEat.className == "fish star") {
                        // если  fish star добавляем жизнь
                        if (quantityLifes < 10) {
                            quantityLifes++;
                            count_fish--;
                        }
                        //для точного обновления кол-ва жизней сначала удаляем блок с экрана потом добалвяем уже обновленный
                        deleteLifes();
                        creatureLifes();
                    } else if (fishEat.className == "fish minus") {
                        // если fish minus отнимаем 5 очков   
                        point = point - 5;
                        quantityLifes--;
                        count_fish--;
                        deleteLifes();
                        creatureLifes();
                    } else if (fishEat.className == "fish plus") {
                        //если fish plus добавляем 10 очков   
                        point = point + 10;
                        count_fish--;
                    } else if (fishEat.className == "fish shark") {
                        //если заканчиваем игру 
                        over();
                        count_fish--;
                    } else {
                        point = point + 1;
                        count_fish--;
                    }
                    // отображается увеличенное количество очков 
                    points.innerText = point;
                    setInterval(function () {
                            creatureFish();
                            //когда достигаем 10секунд создаем пузырек каждую секунду
                            if (sec > 10 && sec < 20 || sec > 30 && sec <40 || sec > 50 && sec < 55) {
                                createBubles();
                                
                            }                                              
                    }, 6000);
                    //для удаления рыбок из поля
                    fishEat.className = "Remove";
                }
            }  
    }, 100);   
}
