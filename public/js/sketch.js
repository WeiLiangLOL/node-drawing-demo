let socket = io.connect();

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);

    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    noStroke();
    fill(255);
    ellipse(data.x, data.y, 5, 5);
}

function mouseDragged() {
    socket.emit('mouse', { x: mouseX, y: mouseY });
}