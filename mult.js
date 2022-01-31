const m_op1 = document.getElementById("m_op1");
const m_op2 = document.getElementById('m_op2');
const m_op3 = document.getElementById('m_op3');
var ans = 0;
  

function generate_equation(){
	var m_n1 = Math.floor(Math.random() * 13);
	var m_n2 = Math.floor(Math.random() * 13);

	var modelAns1 = Math.floor(Math.random() * 10);
	var modelAns2 = Math.floor(Math.random() * 10);
	var allAns = [];
	var switchAns = [];

  ans = eval(m_n1 * m_n2)

	document.getElementById('m_n1').innerHTML = m_n1;
	document.getElementById('m_n2').innerHTML = m_n2;

	allAns = [ans, modelAns2, modelAns1];

	for (i = allAns.length; i--;){
    	switchAns.push(allAns.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  	}; 

  	m_op1.innerHTML = switchAns[0];
  	m_op2.innerHTML = switchAns[1];
  	m_op3.innerHTML = switchAns[2];
}

m_op1.addEventListener("click", function(){
    if(m_op1.innerHTML == ans){
      generate_equation();
    }
    else{
      alert("Try again!");
    }
});

m_op2.addEventListener("click", function(){
    if(m_op2.innerHTML == ans){
      generate_equation();
    }
    else{
      alert("Try again!");
    }
});

m_op3.addEventListener("click", function(){
    if(m_op3.innerHTML == ans){
      generate_equation();
    }
    else{
      alert("Try again!");
    }
});

generate_equation()
