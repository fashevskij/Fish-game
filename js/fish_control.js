    
    var fishHero = document.createElement('div');

    fishHero.id = "fish_hero";

    full.appendChild(fishHero);
//функция управления рыбкой на поле с помощью клавиш (стрелок)
function checkClick(event) { 	
    
    let css = getComputedStyle(fishHero);

    let left = parseInt(css.left);

    let top = parseInt(css.top);

    switch(event.keyCode){ 					
        case 37: 
        if (left > 1 && left < 1900)				
        fishHero.style.left = left - 50 + "px"; 
        break; 					
        case 38: 
        if (top > 1 && top < 1900)						
        fishHero.style.top = top - 50 + "px"; 					
        break; 					
        case 39:
            if (top > 1 && top < 1900)	
            fishHero.style.left = left + 50 + "px";
        break;
        case 40:
            if (top > 1 && top < 1900)	
            fishHero.style.top = top + 50 + "px";
        break;
    }

}
