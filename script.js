const keyDown = e => {
    const key = String(e.keyCode);
    console.log(key);
    document.getElementById(key).style.color = "red";
};

const keyUp = e => {
    const key = String(e.keyCode);
    console.log(key);
    document.getElementById(key).style.color = "white";
};

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);