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
        case 5:
            document.body.style.background = "#6E855F";
            break;
        case 6:
            document.body.style.background = "#0E1015";
            break;
        case 7:
            document.body.style.background = "#999999";
            break;
        case 8:
            document.body.style.background = "#203BB6";
            break;
        case 9:
            document.body.style.background = "#3B5984";
            break;
        case 10:
            document.body.style.background = "#303131";
            break;
        case 11:
            document.body.style.background = "#393328";
            break;
        case 12:
            document.body.style.background = "#0065CE";
            break;
        case 13:
            document.body.style.background = "#C3C3C3";
            break;
        default:
            document.body.style.background = "grey";
    }
}
