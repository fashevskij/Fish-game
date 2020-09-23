function creatureStartBlock() {
    
    //присваиваем id стартовому блоку для стилизации
    startBlock.id = "start-block";
    //Размещаем стартовый блок на игровом поле
    full.appendChild(startBlock);
    //присваиваем id стартовой кнопки для стилизации
    startButton.id = "start-button";
    //Размещаем стартовую кнопку в стартовом блоке
    startBlock.appendChild(startButton);
}
