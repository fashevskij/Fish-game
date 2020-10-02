
function fishMove(moveFish) {
    setInterval(function () {
            moveFish.style.display = "block";
            moveFish.style.left = moveFish.offsetLeft - 1 + "px";
            if (moveFish.offsetLeft < 0) {
                moveFish.remove();
                creatureFish();
            }
    }, 10);
}