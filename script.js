var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button= document.getElementById("button");


function myScript(){
	color1.value="#FF0000";
	color2.value="#FFFF00";
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value +")" ;
	css.textContent=body.style.background;
}

window.onload=myScript();




function pickRandom(){
	var x='#'+Math.floor(Math.random()*16777215).toString(16);
	var y='#'+Math.floor(Math.random()*16777215).toString(16);
	color1.value=x;
	color2.value=y;
	setGradient();

	
}

button.onclick=pickRandom;




function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);