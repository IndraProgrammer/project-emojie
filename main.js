
var prediction_1="";
var prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
}) ;
camera=document.getElementById("camera");
Webcam.attach("camera"); 
function take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    }) ;
    speak();
}
console.log("ml5version",ml5.version);
classify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XfmT6YDQW/model.json",modelLoaded);
function modelLoaded(){
    console.log(modelLoaded);
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="first prediction is "+prediction_1;
    speakdata2="second prediction is "+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}
