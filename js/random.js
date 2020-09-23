//функция рандома
function random(max) {
    var rand = 1 + Math.random() * (max);
    //округляем до целого числа
    rand = Math.floor(rand);
    return rand;
}