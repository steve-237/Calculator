function compute() {
	var a = document.querySelector('.inner-screen').innerHTML;
	try{
		var c = eval(a);
	}catch(e){
		/*alert(e);
*/		c = "Error...!";
	}
	document.querySelector('.inner-screen').innerHTML = c;
}

function print(value){
	document.querySelector('.inner-screen').innerHTML += value;
	console.log(value);
}

function erase(){
	document.querySelector('.inner-screen').innerHTML = "";
}