var puerta = 1; 
var puerta_imagen = 1;
var door = document.getElementById('puerta01');
var leftButton = document.getElementById('izq');
var rightButton = document.getElementById('der');
var base = document.getElementById('base');
var CFizq = document.getElementById('CFizq');
var CFder = document.getElementById('CFder');
var Cizq = document.getElementById('Cizq');
var Cder = document.getElementById('Cder');

function leftClick(){
	if(puerta ==  4) puerta = 1;
	else puerta = puerta+1;
	if(puerta==puerta_imagen){
		if(puerta==1){
			Cizq.src = "boton04.png";
			Cder.src = "boton0".concat((puerta+1).toString(),'.png');
		}
		else if(puerta==4){
			Cizq.src = "boton0".concat((puerta-1).toString(),'.png');
			Cder.src = "boton01.png";
		}
		else{
			Cder.src = "boton0".concat((puerta+1).toString(),'.png');
			Cizq.src = "boton0".concat((puerta-1).toString(),'.png');
		}
		door.removeEventListener('webkitTransitionEnd', goLeft);
		door.removeEventListener('webkitTransitionEnd', goRight);
		door.removeEventListener('transitionend', goRight);
		door.removeEventListener('transitionend', goLeft);
		door.style.transition = "left 1.0s linear 0s";
		door.style.left = '50%';
		base.style.transition = "top 1.0s linear 0s";
		base.style.top = '50%';
	}
	else{
		if(puerta==1){
			Cizq.src = "boton04.png";
			Cder.src = "boton0".concat((puerta+1).toString(),'.png');
		}
		else if(puerta==4){
			Cizq.src = "boton0".concat((puerta-1).toString(),'.png');
			Cder.src = "boton01.png";
		}
		else{
			Cder.src = "boton0".concat((puerta+1).toString(),'.png');
			Cizq.src = "boton0".concat((puerta-1).toString(),'.png');
		}
		disableButtons();
		door.style.transition = "left 2.0s linear 0s";
		door.style.left = '-150px';
		base.style.transition = "top 1.0s linear 0s";
		base.style.top = '30%';
		door.addEventListener('webkitTransitionEnd', goRight);
		door.addEventListener('transitionend', goRight);
	}	
}

function rightClick(){
	if(puerta ==  1) puerta = 4;
	else puerta = puerta-1; 
	if(puerta==puerta_imagen){
		if(puerta==1){
			Cizq.src = "boton04.png";
			Cder.src = "boton0".concat((puerta+1).toString(),'.png');
		}
		else if(puerta==4){
			Cizq.src = "boton0".concat((puerta-1).toString(),'.png');
			Cder.src = "boton01.png";
		}
		else{
			Cder.src = "boton0".concat((puerta+1).toString(),'.png');
			Cizq.src = "boton0".concat((puerta-1).toString(),'.png');
		}
		door.removeEventListener('webkitTransitionEnd', goRight);
		door.removeEventListener('webkitTransitionEnd', goLeft);
		door.removeEventListener('transitionend', goRight);
		door.removeEventListener('transitionend', goLeft);
		door.style.transition = "left 2.0s linear 0s";
		door.style.left = '50%';
		base.style.transition = "top 1.0s linear 0s";
		base.style.top = '50%';
	}
	else{
		if(puerta==1){
			Cizq.src = "boton04.png";
			Cder.src = "boton0".concat((puerta+1).toString(),'.png');
		}
		else if(puerta==4){
			Cizq.src = "boton0".concat((puerta-1).toString(),'.png');
			Cder.src = "boton01.png";
		}
		else{
			Cder.src = "boton0".concat((puerta+1).toString(),'.png');
			Cizq.src = "boton0".concat((puerta-1).toString(),'.png');
		}
		disableButtons();
		door.style.transition = "left 2.0s linear 0s";
		var width = window.innerWidth;
		var Nwidth = 75+parseInt(width);
		var str = Nwidth.toString().concat("px");
		door.style.left = str;
		base.style.transition = "top 1.0s linear 0s";
		base.style.top = '30%';
		door.addEventListener('webkitTransitionEnd', goLeft);
		door.addEventListener('transitionend', goLeft);
	}
}

function goRight(event){
	door.style.transition = "";
	door.style.marginLeft = '0px';
	var width = window.innerWidth;
	var Nwidth = 75+parseInt(width);
	var str = Nwidth.toString().concat("px");
	door.style.left = str;
	var back = "url(\"puerta0".concat(puerta.toString(),'.png\")');
	puerta_imagen = puerta;
	door.style.backgroundImage = back;
	door.style.opacity = '0.5';
	setTimeout(function() { enterRight(); }, 500);
}

function enterRight(){ 
	door.removeEventListener('webkitTransitionEnd',goRight);
	door.removeEventListener('transitionend', goRight);
	door.style.opacity = '1';
	door.style.marginLeft = '-75px';
	door.style.transition = "left 2.0s linear 0s";
	door.style.left = '50%';
	base.src = "base0".concat(puerta.toString(),'.png');
	base.style.transition = "top 1.0s linear 0s";
	base.style.top = '65%';	
	door.addEventListener('webkitTransitionEnd', enableButtons);
	door.addEventListener('transitionend', enableButtons);
}

function goLeft(event){
	door.style.transition = "";
	door.style.left = '-150px';
	var back = "url(\"puerta0".concat(puerta.toString(),'.png\")');
	puerta_imagen = puerta;
	door.style.backgroundImage = back;
	door.style.opacity = '0.5';
	setTimeout(function() { enterLeft(); }, 500);
}

function enterLeft(){ 
	door.removeEventListener('webkitTransitionEnd',goLeft);
	door.removeEventListener('transitionend', goLeft);
	door.style.opacity = '1';
	door.style.transition = "left 2.0s linear 0s";
	door.style.left = '50%';	
	base.src = "base0".concat(puerta.toString(),'.png');
	base.style.transition = "top 1.0s linear 0s";
	base.style.top = '65%';
	door.addEventListener('webkitTransitionEnd', enableButtons);
	door.addEventListener('transitionend', enableButtons);
}

function enableButtons(){
	leftButton.style.onclick = 'leftClick()';
	rightButton.style.onclick = 'rightClick()';
	door.removeEventListener('webkitTransitionEnd',enableButtons);
	door.removeEventListener('transitionend', enableButtons);
}

function disableButtons(){
	leftButton.style.onclick = '';
	rightButton.style.onclick = '';
}

function hopLeft(){
	CFizq.style.transition = "marginLeft 1.0s linear 0s";
	CFizq.style.marginLeft = '-20px';
}

function dehopLeft(){
	CFizq.style.transition = "marginLeft 1.0s linear 0s";
	CFizq.style.marginLeft = '0px';
}

function hopRight(){
	CFder.style.transition = "marginLeft 1.0s linear 0s";
	CFder.style.marginLeft = '-40px';
}

function dehopRight(){
	CFder.style.transition = "marginLeft 1.0s linear 0s";
	CFder.style.marginLeft = '-60px';
}

function iluminati(){
	if(puerta==4){
		base.src="base0".concat(puerta.toString(),'1.png');
	}
	else{
		base.src="base05.png";
	}
}

function noiluminati(){
	base.src="base0".concat(puerta.toString(),'.png');
}

function changePage(){
	if(puerta==4){
		location.replace("game/game.html");
	}
}


//img.style.animation = "slideleft 5s ease-in-out 1"; -> Para meter animación con keyframes por javascript