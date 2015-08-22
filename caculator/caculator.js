var num = document.querySelectorAll(".num"),
input = document.querySelector("#input"),
output = document.querySelector("#output"),
equal = document.querySelector("#equal"),
caculate = document.querySelector("#caculate"),
clear = document.querySelector("#clear"),
total = 0, 
t = false;

function enternumber(num){   
    if (t) {            
      input.innerHTML = num; 
      t = false; 
    } 
    else { 
      if (input.innerHTML == "0") 
      input.innerHTML = num; 
      else 
      input.innerHTML += num; 
    }
}
//失败了
// for(i = 0; i<num.length; i++){
// 	num[i].addEventListener("click",function(){
// 		enternumber(parseInt(this.children[0]));
// 	})
// }

clear.addEventListener("click", function() {
	total=0;
    input.innerHTML = 0;
    output.innerHTML = 0;
});
equal.addEventListener("click", function() {
	var num = input.innerHTML,
	reg1 = /\d+/,
	reg2 = /\d+$/,
	reg3 = /\D/,
	way = num.match(reg3),
	num1 = num.match(reg1),
	num2 = num.match(reg2);
	if(way == "+"){//加法
		result = [];
		num1 = num1.toString().split('');
		num2 = num2.toString().split('');
		len = num1.length > num2.length ? num1.length : num2.length;
		if(num1.length > num2.length){
			for(i = num2.length; i < len; i++){
				num2.unshift("0");
			}
		}else if(num2.length > num1.length){
			for(i = num1.length; i < len; i++){
				num1.unshift("0");
			}
		}
		for (i = len - 1;i > -1;i--){
			if(parseInt(result[i+1])>9){
				result[i] = parseInt(num1[i]) + parseInt(num2[i]) +1;
				result[i+1] = result[i+1] - 10;
			}else{
				result[i] = parseInt(num1[i]) + parseInt(num2[i]);
			}
		}
		for(i = 0; i <len; i++){
			output.innerHTML += result[i];
		}
	}
	if(way == "-"){
		result = parseInt(num1) - parseInt(num2);
		output.innerHTML = result;
	}
	if(way == "*"){
		result = parseInt(num1) * parseInt(num2);
		output.innerHTML = result;
	}
	if(way == "/"){
		result = parseInt(num1) / parseInt(num2);
		output.innerHTML = result;
	}
	// switch(way){
	// 	case ""+"":
	// 	result = parseInt("num1")+parseInt("num2");
	// 	alert(num1);
	// 	alert(num2);
	// 	alert(way);
	// 	output.innerHTML = result;
	// }
	
	
});
