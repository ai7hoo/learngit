window.onload = function (){
	
};

var t = null;
function startMove(box,moveLen,speed){
	box = document.getElementById(box);
	clearInterval(t);
	t = setInterval(function(){
		if(box.offsetLeft <= 500){
			box.style.left = box.offsetLeft + speed + 'px';
		}
		else {
			box.style.left = 500 + 'px';
			clearInterval(t);
		}
	},30);
}