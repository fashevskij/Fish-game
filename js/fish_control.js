    //создаем блок div ( будет главный герой)
    var fishHero = document.createElement('div');
    //даем этому блоку id для стилизации
    fishHero.id = "fish_hero";
    //помещаем его на поле
    full.appendChild(fishHero);
//функция управления рыбкой на поле с помощью клавиш (стрелок)
function checkClick(event) { 	
    //получаем стили главного героя
    let css = getComputedStyle(fishHero);
    //получаем в виде числа позицию с лева
    let left = parseInt(css.left);
    //получаем в виде числа позицию сверху
    let top = parseInt(css.top);
    //создаем цикл 
    switch(event.keyCode){ 					
        case 37: //при нажатии на стрелку в лево
            if (left > 50)//при условии что мы не можем зайти за края ээкрана				
            fishHero.style.left = left - 25  + "px";//двигаемся  с скороситью 50 px на нажатие 
            break; 					
        case 38: 
            if (top > 50)						
            fishHero.style.top = top - 25 + "px"; 					
            break; 					
        case 39:
            if (left < 1830)	
            fishHero.style.left = left + 25 + "px";
        break;
        case 40:
            if (top < 820)	
            fishHero.style.top = top + 25 + "px";
        break;
    }

}
