function creatureStartBlock() {
    //создаем блок div - startBlock
    let startBlock = document.createElement("div");
    startBlock.id = "start-block";
    full.appendChild(startBlock);
    //создаем кнопку START и добавляем ее в startBlock
    let startButton = document.createElement("button");
    startButton.id = "start-button";
    startBlock.appendChild(startButton);
}
creatureStartBlock();