
//Функция создания подлодки
function createEnd() {
    //создаем эелемент подлодку
    let end = document.createElement("div");
    //даем ей id
    end.id = "end";
    //определение исходной позиции подлодки
    let position = 50 + random(1200);
    end.style.left = position + "px";
     //добавляем подлодку на поле
    full.appendChild(end);
    //функция наведения на подлодку завершение игры (происходит столккновение главной рыбки с подлодкой)
    setInterval(function(){
    if((fishHero.offsetLeft + 70) >= (end.offsetLeft) && (fishHero.offsetTop +70) >= (end.offsetTop) &&
            (fishHero.offsetLeft) <= (end.offsetLeft + 180) && (fishHero.offsetTop) <= (end.offsetTop + 150)){
            quantityLifes = 0;//жизни = 0
            end.remove();//убераем подлодку
            over();//вызываем функцию окончания игры
            }          
        },100);//проверяем это условие через каждые 0.01 сек   
    
        //создаем таймер - каждые 10 милисекунд опускается на 1 рх вниз
        setInterval(function() {
            end.style.display = "block";
            end.style.top = end.offsetTop + 3 + "px";
            //если подлодка достигла низа экрана убрать ее
            if (end.offsetTop > 800) {
                end.remove();
            }
        }, 10);
    
    
}
