const op1 = document.getElementById("op1");
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
var ans = 0;
  

function generate_equation(){
	var n1 = Math.floor(Math.random() * 13);
	var n2 = Math.floor(Math.random() * 13);

	var modelAns1 = Math.floor(Math.random() * 10);
	var modelAns2 = Math.floor(Math.random() * 10);
	var allAns = [];
	var switchAns = [];

	ans = eval(n1+n2);

	document.getElementById('n1').innerHTML = n1;
	document.getElementById('n2').innerHTML = n2;

	allAns = [ans, modelAns2, modelAns1];

	for (i = allAns.length; i--;){
    	switchAns.push(allAns.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  	}; 

  	op1.innerHTML = switchAns[0];
  	op2.innerHTML = switchAns[1];
  	op3.innerHTML = switchAns[2];
}

op1.addEventListener("click", function(){
    if(op1.innerHTML == ans){
      generate_equation();
    }
    else{
      alert("Try again!");
    }
});

op2.addEventListener("click", function(){
    if(op2.innerHTML == ans){
      generate_equation();
    }
    else{
      alert("Try again!");
    }
});

op3.addEventListener("click", function(){
    if(op3.innerHTML == ans){
      generate_equation();
    }
    else{
      alert("Try again!");
    }
});

generate_equation()
