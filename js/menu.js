function checkButton(){
    for(let i = 0; i < 5; i++){//переберем все кнопки
        menu[i].addEventListener('click',function(){//нажатой кнопке даем событие
            
            count = menu[i].value;//присваеваем count значение value нажатой кнопки
            //скрываем элементы блока с выбором сложности
            document.querySelector('.menu__box').style.display = "none";
            document.querySelector('.hamburger-menu').style.display = "none";
            
        });
    }
}

checkButton();