var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
        speak()
        console.log("Taking selfie ---")
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data3 = "Starting taking selfies be ready";
        var utterThis1 = new SpeechSynthesisUtterance(speak_data3);
        synth.speak(utterThis1);

    setTimeout(function(){
        img_id = "selfie1"
        speak_data = "Photo 1 shot! Nice!";
        var utterThis2 = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis2);
        take_snapshot();
    },10000);
    
    setTimeout(function(){
        img_id = "selfie2"
        speak_data1 = "Photo 2 shot! Beautiful!";
        var utterThis3 = new SpeechSynthesisUtterance(speak_data1);
        synth.speak(utterThis3);
        take_snapshot();
    },15000);

    setTimeout(function(){
        img_id = "selfie3"
        speak_data2 = "Photo 3 shot! Thanks for visiting the website! Byeee!";
        var utterThis4 = new SpeechSynthesisUtterance(speak_data2);
        synth.speak(utterThis4);
        take_snapshot();
    },20000);
}
function take_snapshot(){
    console.log(img_id);
    
    Webcam.snap(function(data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }

        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    })
}