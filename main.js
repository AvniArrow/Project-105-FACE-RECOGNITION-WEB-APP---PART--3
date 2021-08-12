
Webcam.set
({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_spapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/T7xHQjREX/model.json",modelLoaded);

function modelLoaded ()
{
    console.log("model is Loaded");
}

function check()
{
    img = document.getElementById('captured_image')
    classifier.classify(img,gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
        console.error(error);
    }else {
        console.log(result);
        document.getElementById("object_name").innerHTML= result[0].label;
        document.getElementById("accuracy_name").innerHTML= result[0].confidence.toFixed(3);
    }
}