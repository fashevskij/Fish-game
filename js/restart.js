
//Функция повторного запуска игры
function restart(){
    //создаем кнопку 
    let again = document.createElement("button");
    //даем ей текст
    again.innerText = "PLAY AGAIN";
    //даем ей id для стилизации
    again.id = "again";
    //помещаем ее на поле
    full.appendChild(again);
    //делаем ее видимой
    again.style.display = 'block';
    //делаем событие при ее нажатии
        again.addEventListener('click', function(){
            //перезагружаем страницу
            window.location.reload();
    });
}



