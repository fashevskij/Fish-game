function eat(fishEat) {
        setInterval(function () {
            if ((fishHero.offsetLeft + 70) >= (fishEat.offsetLeft) && (fishHero.offsetTop + 70) >= (fishEat.offsetTop) &&
                (fishHero.offsetLeft) <= (fishEat.offsetLeft + 60) && (fishHero.offsetTop) <= (fishEat.offsetTop + 60)) {
                if (fishEat.className != "Remove") {
                    //если fish bomb отнимаем жизнь
                    if (fishEat.className == "fish bomb") {
                        //отнимаем одну жизнь
                        quantityLifes--;
                        deleteLifes();
                        //если жизни = 0 заканчиваем игру
                        if (quantityLifes == 0) {
                            over();
                        }
                        //показываем текущее кол-во жизней
                        creatureLifes();

                    } else if (fishEat.className == "fish star") {
                        // если  fish star добавляем жизнь
                        if (quantityLifes < 10) {
                            quantityLifes++;
                        }
                        deleteLifes();
                        creatureLifes();
                    } else if (fishEat.className == "fish minus") {
                        // если fish minus отнимаем 5 очков   
                        point = point - 5;
                    } else if (fishEat.className == "fish plus") {
                        //если fish plus добавляем 10 очков   
                        point = point + 10;
                    } else if (fishEat.className == "fish shark") {
                        //если заканчиваем игру 
                        over();
                    } else {
                        point = point + 1;
                    }
                    // отображается увеличенное количество очков 
                    points.innerText = point;

                    setInterval(function () {
                            creatureFish();
                            //когда достигаем 10секунд создаем пузырек каждую секунду
                            if (sec > 10) {
                                createBubles();
                            }                                              
                    }, 3000);
                    //для удаления ребок из поля
                    fishEat.className = "Remove";
                }
            }  
    }, 100);   
}
