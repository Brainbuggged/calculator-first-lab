var numbers = document.querySelectorAll('#calc span');
var functions = ['+', '-', '*', '/'];

for(var i = 0; i < numbers.length; i++) {
	numbers[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
        switch(btnVal)
        {
            case 'Сброс':
                input.innerHTML = '';
                break;
            case '=':
                var equation = inputVal;
                var lastChar = equation[equation.length - 1];
                
                equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
                
                if(functions.indexOf(lastChar) > -1 || lastChar == '.')
                    equation = equation.replace(/.$/, '');
                
                if(equation)
                    input.innerHTML = eval(equation);
                    
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                var lastChar = inputVal[inputVal.length - 1];
        
                if(inputVal != '' && functions.indexOf(lastChar) == -1) 
                    input.innerHTML += btnVal;
                
                else if(inputVal == '' && btnVal == '-') 
                    input.innerHTML += btnVal;
                
                if(functions.indexOf(lastChar) > -1 && inputVal.length > 1) {
                    input.innerHTML = inputVal.replace(/.$/, btnVal);
                }
                break;
            default:
			    input.innerHTML += btnVal;
                break;
        }
		e.preventDefault();
	} 
}