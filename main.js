noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
video.position(200,150);

    poseNet = ml5.poseNet(video,moddelLoaded);
    poseNet.on("pose",gotPoses);
    canvas = createCanvas(500,500);
    canvas.position(1100,150);
}
function moddelLoaded(){
    console.log("PoseNet is initialized");
}
function draw(){
    background("gray");
    fill("orange");
    stroke("orange");
    square(noseX,noseY,difference);
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(noseX);
    console.log(noseY);
    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    console.log(leftwristX);
    console.log(rightwristX);
    difference = floor(leftwristX - rightwristX);
    console.log(difference);
}
}

