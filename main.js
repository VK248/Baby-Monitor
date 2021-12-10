status="";
objects=[];
video="";
function preload(){
    
}

function draw(){
image(video,0,0,480,380);
if (status != ""){
objectDetector.detect(video,gotResult)
for(i=0; i < objects.length; i++)
{
document.getElementById("status").innerHTML="Status:Person Detected";
document.getElementById("baby_detection").innerHTML="Baby Found";
fill("#800000");
noFill();
stroke("#800000");
percent=floor(objects[i].confidence*100);
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
text(objects[i].label+" "+percent+"%", objects[i].x + 15 , objects[i].y+15);
if(objects.length < 1)
{
document.getElementById("status").innerHTML="Status:Person Not Detected";
document.getElementById("baby_detection").innerHTML="Baby Not Found";
song.play();
}
}
}
}

function setup(){
canvas=createCanvas(480,380);
canvas.center();
video=createCapture('')
video.hide();
}

function modeloaded(){
video.loop();
video.volume(0);
video.speed(1);
console.log('When You Read This Message, You Will Smile :)')
}

function start(){
objectDetector=ml5.objectDetector("cocossd", modeloaded)
document.getElementById("start").style.backgroundColor="yellow";
song=loadSound('suga_boom_boom.mp3')
}

function gotResult(){
if(error){
console.log(error);
}
console.log(results)
objects=results;    
}