function preload(){}
tintColor = "";
function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(300, 250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 400);
    tint(tintColor);
}

function applyFilter(){
    tintColor = document.getElementById("color").value;
}

function take_snapshot(){
    save("Image.png");
}
