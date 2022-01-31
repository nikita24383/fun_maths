const op1 = document.getElementById("op1");
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
var ans = 0;

const s_op1 = document.getElementById("s_op1");
const s_op2 = document.getElementById('s_op2');
const s_op3 = document.getElementById('s_op3');
var s_ans = 0;

const m_op1 = document.getElementById("m_op1");
const m_op2 = document.getElementById('m_op2');
const m_op3 = document.getElementById('m_op3');
var m_ans = 0;


// function for addition
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

generate_equation();



//  function for subtraction
function generate_sub_equation(){
	var s_n1 = Math.floor(Math.random() * 13);
	var s_n2 = Math.floor(Math.random() * 13);

	var modelAns1 = Math.floor(Math.random() * 10);
	var modelAns2 = Math.floor(Math.random() * 10);
	var allAns = [];
	var switchAns = [];

  if(s_n1 > s_n2){
    s_ans = eval(s_n1 - s_n2);
    document.getElementById("s_n1").innerHTML = s_n1; 
    document.getElementById("s_n2").innerHTML = s_n2;
  }
  else{
    s_ans = eval(s_n2 - s_n1);
    document.getElementById("s_n1").innerHTML = s_n2; 
    document.getElementById("s_n2").innerHTML = s_n1;
  }

	document.getElementById('s_n1').innerHTML = s_n1;
	document.getElementById('s_n2').innerHTML = s_n2;

	allAns = [s_ans, modelAns2, modelAns1];

	for (i = allAns.length; i--;){
    	switchAns.push(allAns.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  	}; 

  	s_op1.innerHTML = switchAns[0];
  	s_op2.innerHTML = switchAns[1];
  	s_op3.innerHTML = switchAns[2];
}

s_op1.addEventListener("click", function(){
    if(s_op1.innerHTML == s_ans){
      generate_sub_equation();
    }
    else{
      alert("Try again!");
    }
});

s_op2.addEventListener("click", function(){
    if(s_op2.innerHTML == s_ans){
      generate_sub_equation();
    }
    else{
      alert("Try again!");
    }
});

s_op3.addEventListener("click", function(){
    if(s_op3.innerHTML == s_ans){
      generate_sub_equation();
    }
    else{
      alert("Try again!");
    }
});

generate_sub_equation()



//  function for multiplication
function generate_mult_equation(){
	var m_n1 = Math.floor(Math.random() * 13);
	var m_n2 = Math.floor(Math.random() * 13);

	var modelAns1 = Math.floor(Math.random() * 10);
	var modelAns2 = Math.floor(Math.random() * 10);
	var allAns = [];
	var switchAns = [];

  m_ans = eval(m_n1 * m_n2)

	document.getElementById('m_n1').innerHTML = m_n1;
	document.getElementById('m_n2').innerHTML = m_n2;

	allAns = [m_ans, modelAns2, modelAns1];

	for (i = allAns.length; i--;){
    	switchAns.push(allAns.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  	}; 

  	m_op1.innerHTML = switchAns[0];
  	m_op2.innerHTML = switchAns[1];
  	m_op3.innerHTML = switchAns[2];
}

m_op1.addEventListener("click", function(){
    if(m_op1.innerHTML == m_ans){
      generate_mult_equation();
    }
    else{
      alert("Try again!");
    }
});

m_op2.addEventListener("click", function(){
    if(m_op2.innerHTML == m_ans){
      generate_mult_equation();
    }
    else{
      alert("Try again!");
    }
});

m_op3.addEventListener("click", function(){
    if(m_op3.innerHTML == m_ans){
      generate_mult_equation();
    }
    else{
      alert("Try again!");
    }
});

generate_mult_equation()