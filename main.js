function setup(){
    canvas= createCanvas(420, 420)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(550,500)
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("model is loaded")
}

noseX= 0
noseY= 0
difference= 0
rightWristX= 0
leftWristX= 0

function gotPoses(results){
    if (results.length > 0) {
        console.log(results)
        noseX= results[0].pose.nose.x
        noseY= results[0].pose.nose.y
        leftWristX= results[0].pose.leftWrist.x
        rightWristX= results[0].pose.rightWrist.x
        difference= rightWristX- leftWristX
    }
}

function draw(){
    background('#ffe882')
    fill("#ceffba")
    textSize(rightWristX,leftWristX)
    text("PETER", noseX, noseY)
}