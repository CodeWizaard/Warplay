var Current_background_picture = 1;
var bg_images = [
    'bg1.jpg',
    'bg2.jpg',
    'bg3.jpg',
    'bg4.jpg',
]

function changeImage(element) {
    console.log("Функция замены изображений");
    if(Current_background_picture>3){Current_background_picture =0};
    element.style.opacity = 0;
    element.style.backgroundImage = "url('./Images/Background/" + bg_images[Current_background_picture]+ "')";
    element.style.opacity = 1;
    Current_background_picture+=1;
}

async function Activating_image_replacement() { 
    var element = document.getElementById('initial_background_image');
    await delay(2000);
    setInterval(function() {
        changeImage(element);
    }, 2000);
    }

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


 


Activating_image_replacement(); 
