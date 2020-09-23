
//Функция создания подлодки
function createEnd() {
    //создаем эелемент подлодку
    var end = document.createElement("div");
    end.id = "end";
    //определение исходной позиции подлодки
    var position = 50 + random(1200);
    end.style.left = position + "px";
    //функция наведения на подлодку завершение игры
    end.onmousemove = function() {
        end.remove();
        over();
    };
    //создаем таймер - каждые 10 милисекунд опускается на 1 рх вниз
    setTimeout(function() {
        var timeEnd = setInterval(function() {
            end.style.display = "block";
            end.style.top = end.offsetTop + 1 + "px";
            //если подлодка достигла низа экрана убрать ее
            if (end.offsetTop > 800) {
                end.remove();
            }

        }, 10);
    }, 10);
    //если игра не завершена добавляем подлодку на поле
    if (status != "over") {
        full.appendChild(end);
    }
}
