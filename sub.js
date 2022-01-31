const s_op1 = document.getElementById("s_op1");
const s_op2 = document.getElementById('s_op2');
const s_op3 = document.getElementById('s_op3');
var ans = 0;
  

function generate_equation(){
	var s_n1 = Math.floor(Math.random() * 13);
	var s_n2 = Math.floor(Math.random() * 13);

	var modelAns1 = Math.floor(Math.random() * 10);
	var modelAns2 = Math.floor(Math.random() * 10);
	var allAns = [];
	var switchAns = [];

  if(s_n1 > s_n2){
    ans = eval(s_n1 - s_n2);
    document.getElementById("s_n1").innerHTML = s_n1; 
    document.getElementById("s_n2").innerHTML = s_n2;
  }
  else{
    ans = eval(s_n2 - s_n1);
    document.getElementById("s_n1").innerHTML = s_n2; 
    document.getElementById("s_n2").innerHTML = s_n1;
  }

	document.getElementById('s_n1').innerHTML = s_n1;
	document.getElementById('s_n2').innerHTML = s_n2;

	allAns = [ans, modelAns2, modelAns1];

	for (i = allAns.length; i--;){
    	switchAns.push(allAns.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  	}; 

  	s_op1.innerHTML = switchAns[0];
  	s_op2.innerHTML = switchAns[1];
  	s_op3.innerHTML = switchAns[2];
}

s_op1.addEventListener("click", function(){
    if(s_op1.innerHTML == ans){
      generate_equation();
    }
    else{
      alert("Try again!");
    }
});

s_op2.addEventListener("click", function(){
    if(s_op2.innerHTML == ans){
      generate_equation();
    }
    else{
      alert("Try again!");
    }
});

s_op3.addEventListener("click", function(){
    if(s_op3.innerHTML == ans){
      generate_equation();
    }
    else{
      alert("Try again!");
    }
});

generate_equation()
