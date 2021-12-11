// Gallery thingies
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

// Hard-coded background colour because I'm very lazy and finding a proper
// solution would require me to re-write the image gallery, send help
// Here we go, oh boy. Lord of efficient code please spare my soul.

function changeBackgroundColour() {
    switch (slideIndex) {
        case 1:
            document.body.style.background = "#465A84";
            break;
        case 2:
            document.body.style.background = "#853E33";
            break;
        case 3:
            document.body.style.background = "#151515";
            break;
        case 4:
            document.body.style.background = "#251A6B";
            break;
        default:
            document.body.style.background = "grey";
    }
}
