var head = document.getElementById('cabeza');
var jaw = document.getElementById('mandibula');
var fade = document.getElementById('fade');
var first = true;
var open = '0';
var g01 = document.getElementById('g01');
var g02 = document.getElementById('g02');
var g03 = document.getElementById('g03');
var g04 = document.getElementById('g04');
var r01 = document.getElementById('r01');
var r02 = document.getElementById('r02');
var s01 = document.getElementById('s01');
var s02 = document.getElementById('s02');
var gre = document.getElementById('grelleno');
var cartel = document.getElementById('cartel02');

function hola(intro){
	open = intro;
	if(!first){
	jaw.style.transition = "top 1.0s ease-in-out 0s";
	jaw.style.top = '70%';	
	head.style.transition = "top 1.0s ease-in-out 0s";
	head.style.top = '0%';
	}
	g01.style.transition = "top 1.0s ease-in-out 0s";
	g01.style.top = '-500px';
	g02.style.transition = "top 1.0s ease-in-out 0s";
	g02.style.top = '-500px';
	g03.style.transition = "top 1.0s ease-in-out 0s";
	g03.style.top = '-500px';
	g04.style.transition = "top 1.0s ease-in-out 0s";
	g04.style.top = '-500px';
	gre.style.transition = "top 1.0s ease-in-out 0s";
	gre.style.top = '-500px';
	r01.style.transition = "top 1.0s ease-in-out 0s";
	r01.style.top = '-500px';
	r02.style.transition = "top 1.0s ease-in-out 0s";
	r02.style.top = '-500px';
	s01.style.transition = "top 1.0s ease-in-out 0s";
	s01.style.top = '-500px';
	s02.style.transition = "top 1.0s ease-in-out 0s";
	s02.style.top = '-500px';
	if(first){
		g01.addEventListener('webkitTransitionEnd', wololo);
		g01.addEventListener('transitionend', wololo);}
	else{
		jaw.addEventListener('webkitTransitionEnd', wololo);
		jaw.addEventListener('transitionend', wololo)
	}
}

function wololo(event){
	if(first){
		g01.removeEventListener('webkitTransitionEnd', wololo);
		g01.removeEventListener('transitionend', wololo);
		first = false;
		}
	else{
		jaw.removeEventListener('webkitTransitionEnd', wololo);
		jaw.removeEventListener('transitionend', wololo);
	}
	head.style.transition = "top 1.0s ease-in-out 0s";
	head.style.top = '-50%';	
	jaw.style.transition = "top 1.0s ease-in-out 0s";
	jaw.style.top = '90%';
	if(open=='0'){
		g01.style.transition = "top 1.0s ease-in-out 0s";
		g01.style.top = '0px';
		g02.style.transition = "top 1.0s ease-in-out 0s";
		g02.style.top = '230px';
		g03.style.transition = "top 1.0s ease-in-out 0s";
		g03.style.top = '460px';
		g04.style.transition = "top 1.0s ease-in-out 0s";
		g04.style.top = '690px';
		gre.style.transition = "top 1.0s ease-in-out 0s";
		gre.style.top = '950px';
	}
	else if(open=='1') {
		r01.style.transition = "top 1.0s ease-in-out 0s";
		r01.style.top = '0px';
		r02.style.transition = "top 1.0s ease-in-out 0s";
		r02.style.top = '230px';
		gre.style.transition = "top 1.0s ease-in-out 0s";
		gre.style.top = '460px';
	}
	else if(open=='2'){
		s01.style.transition = "top 1.0s ease-in-out 0s";
		s01.style.top = '0px';
		s02.style.transition = "top 1.0s ease-in-out 0s";
		s02.style.top = '230px';
		gre.style.transition = "top 1.0s ease-in-out 0s";
		gre.style.top = '460px';
	}
}

function goUp(){
	cartel.style.transition = "marginTop 0.5s ease-in-out 0s";
	cartel.style.marginTop = '-152px';
}

function goDown(){
	cartel.style.transition = "marginTop 0.5s ease-in-out 0s";
	cartel.style.marginTop = '-125px';
}
