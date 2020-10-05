//функция рандома
function random(max) {
    let rand = 1 + Math.random() * (max);
    //округляем до целого числа
    rand = Math.floor(rand);
    //возвращаем rand
    return rand;
}