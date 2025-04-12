
let sideone = document.getElementById("numone");
let sidetwo = document.getElementById("numtwo");
let sidethree = document.getElementById("numthree");


let pageone = document.getElementById("cone");
let pagetwo = document.getElementById("ctwo");


function move(data) {
    switch (data) {
        case "one":
             sideone.style = "transform: translateX(0px);"
             sidetwo.style = "transform: translateX(0px);"
            break;
        case "two":
            sideone.style = "transform: translateX(-100%);"
            sidetwo.style = "transform: translateX(-100%);"
            break;
    }

}


function change(data) {
    switch (data) {
        case "one":
            pageone.style = "transform: translateX(0px);"
            pagetwo.style = "transform: translateX(0px);"
            break;
        case "two":
            pageone.style = "transform: translateX(-100%);"
            pagetwo.style = "transform: translateX(-100%);"
            break;
    }

}