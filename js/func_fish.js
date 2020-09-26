

/**********************************************
Создание функции для создания элементов игры
***********************************************/

/*   <div id="start-block">
<button id="start-button">START</button>
</div>  */

//<h2>Time: <span d ="time">30</span></h2>

//<div id="lifes">
//<span></span>
//</div>

/*<div id="points"></div> - 
создаем и добавляем очки на игровое поле <div id="full"><div> */


// создаем и определяем функционал рыбкам
function creatureFish() {
    //создаем рыбку
    var fish = document.createElement("div");
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
    
    let cssFish = getComputedStyle(fish);
    let leftFish = parseInt(cssFish.Left);
    let topFish = parseInt(cssFish.top);

    let cssHero = getComputedStyle(fishHero);
    let leftHero = parseInt(cssHero.left);
    
    let topHero = parseInt(cssHero.top);

    setInterval(function(){
        if(fishHero.offsetLeft + 35 >=  fish.offsetLeft && fishHero.offsetTop - 35 <= fish.offsetTop
            || fishHero.offsetLeft - 35 >=  fish.offsetLeft && fishHero.offsetTop + 35 >= fish.offsetTop){
            console.log('aaa');
        }
        
            
        

    }, 1);
    // функция наведения на рыбку
    fish.onmousemove = function() {
        if (fish.className != "Remove") {
            //если fish bomb отнимаем жизнь
            if (fish.className == "fish bomb") {
                quantityLifes = quantityLifes - 1;
                deleteLifes();
                if (quantityLifes == 0) {
                    over();
                }
                creatureLifes();
            } else if (fish.className == "fish star") {
                // если  fish star добавляем жизнь
                if (quantityLifes < 10) {
                    quantityLifes = quantityLifes + 1;
                }
                deleteLifes();
                creatureLifes();
            } else if (fish.className == "fish minus") {
                // если fish minus отнимаем 5 очков   
                point = point - 5;
            } else if (fish.className == "fish plus") {
                //если fish plus добавляем 10 очков   
                point = point + 10;
            } else if (fish.className == "fish shark") {
                //если заканчиваем игру 
                over();
            } else {
                point = point + 1;
            }
            // отображается увеличенное количество очков 
            points.innerText = point;

            //удаляем и создаем рыбку заново через 0,1 с
            setTimeout(function() {

                var beFish = document.querySelector(".fish");
                if (beFish == null) {
                    //когда достигаем 3секунд создаем дополнительную рыбку каждую секунду
                    if (sec > 3) {
                        setInterval(function() {
                            creatureFish();
                            //когда достигаем 10секунд создаем пузырек каждую секунду
                            if (sec > 0) {
                                createBubles();
                            }
                        }, 1000);
                    }
                    creatureFish();
                }
            }, 100);
            fish.className = "Remove";
        }
    };

    //назначаем исходное положение рыбки 
    setTimeout(function() {
        var position = 100 + random(700);
        fish.style.top = position + "px";
    }, 100);

    // запуск движения и удаления рыбки, если ушла за пределы игрового поля и удаляем жизнь
    setTimeout(function() {
        //создаем таймер - каждые 10 милисекунд опускается на 1 рх вниз
        var timeFish = setInterval(function() {
            fish.style.display = "block";
            fish.style.left = fish.offsetLeft - 1 + "px";
            if (fish.offsetLeft < 0) {
                if (fish.className == "fish first" || fish.className == "fish plus") {
                    //deleteFish();
                    fish.remove();
                    creatureFish();
                    quantityLifes = quantityLifes - 1;
                    deleteLifes();
                    //если жизни закончились завершаем игру
                    if (quantityLifes == 0) {
                        over();
                    }
                    creatureLifes();
                    clearInterval(timeFish);
                } else {
                    //deleteFish();
                    fish.remove();
                    creatureFish();
                }
            }
        }, 10);
    }, 1000);
    //если игра не завершена добавляем рыбку
    if (status != "over") {
        full.appendChild(fish);
    }


    

}


