var info = 1;
var subject = document.getElementById('subject');
var text = document.getElementById('text');
var chest = document.getElementById('chest');


function change(){
	if(info==1){
		text.src = "text02.png";
		subject.src = "subject01.png";
		info = 2;
	}
	else{
		text.src = "text01.png";
		subject.src = "subject02.png";
		info = 1;
	}	
}

function goUp(){
	subject.style.transition = "marginTop 0.5s ease-in-out 0s";
	subject.style.marginTop = '-60px';
}

function goDown(){
	subject.style.transition = "marginTop 0.5s ease-in-out 0s";
	subject.style.marginTop = '-45px';
}


function upChest(){
	chest.src = "chest02.gif";
}

function downChest(){
	chest.src = "chest01.gif";
}