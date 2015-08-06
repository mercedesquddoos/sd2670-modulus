function solveMod(){
	var numOne = document.getElementById("numberOne");
	var numTwo = document.getElementById("numberTwo");
	var output = document.getElementById("output");
	
	output.innerHTML = "";
	
	for (var i = 0; i <= numOne.value; i++) {
		if(i % numTwo.value == 0){
        output.innerHTML += "<div>" + i + "</div>";
		}
    }         
}
	