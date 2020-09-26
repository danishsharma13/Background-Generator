var h2 = document.querySelector("h2");
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gen");
var button = document.getElementsByClassName("orig")[0];

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}

var color1rgb = hexToRgbA(color1.value);
var color2rgb = hexToRgbA(color2.value);

body.style.background = "linear-gradient(to right, " + color1rgb + ", " + color2rgb + ")";

h3.textContent = body.style.background;

var origDiv = document.createElement("h3");

var origColorText = document.createTextNode(h3.textContent);

origDiv.appendChild(origColorText);

button.after(origDiv);

function origColor(){
	body.style.background = "linear-gradient(to right, " + color1rgb + ", " + color2rgb + ")";
}

function changingColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background + ";";
}


color1.addEventListener("input", changingColor);

color2.addEventListener("input", changingColor);

button.addEventListener("click", origColor);
