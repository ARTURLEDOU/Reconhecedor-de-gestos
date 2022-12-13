prediction = "";
prediction2 = "";

Webcam.set({
    width:350,
    height:350,
    imageFormat : "png",
    pngQuality:90
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "capitured_image" src = "' + data_uri +'"/>';
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1QtF9N2wA/model.json',modelLoaded)

function modelLoaded(){
    console.log('Model Loaded!')
}



function speak(){
    var synth = window.speechSynthesis;
    speakData1 = "A primeira previsão é" + prediction;
    speakData2 = "A segunda previsão é" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2)
    synth.speak(utterThis)
}   
