
//Функция создания стартового блока игры
function creatureStartBlock() {
    //создаем блок новый div - startBlock
    let startBlock = document.createElement("div");
    //Присваевем ему id 
    startBlock.id = "start-block";
    //Размещаем его на поле
    full.appendChild(startBlock);
    //создаем кнопку START
    let startButton = document.createElement("button");
    //добавляем ей id
    startButton.id = "start-button";
    //размещаем ее в блоке startBlock
    startBlock.appendChild(startButton);
    //Событие при клике на кнопку StartGame 
    startButton.addEventListener('click',function(){
        //удаляем стартовый блок
        startBlock.remove();
        //показываем очки жизни на поле
        lifes.style.display = 'block';
        //показываем таймер на поле
        time.style.display ='block';
        //показывае на поле набраные очки
        stars.style.display ='block';
    });
}
creatureStartBlock();

