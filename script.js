let keyPressed = false;

const keyDown = e => {
    const key = String(e.keyCode);
    if (!keyPressed) {
        console.log(`Tecla de unicode ${key} pressionada!`);
    }
    document.getElementById(key).style.color = "red";
    keyPressed = true;
};

const keyUp = e => {
    const key = String(e.keyCode);
    console.log(`Tecla de unicode ${key} solta!`);
    document.getElementById(key).style.color = "white";
    keyPressed = false;
};

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);