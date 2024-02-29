function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    var result = document.getElementById('result').value;
    var operators = ['+', '-', '*', '/'];
    var expression = [];
    var num = '';
    
    // Parse the input expression
    for (var i = 0; i < result.length; i++) {
        var char = result[i];
        if (operators.includes(char)) {
            expression.push(parseFloat(num));
            expression.push(char);
            num = '';
        } else {
            num += char;
        }
    }
    expression.push(parseFloat(num));
    
    // Evaluate the expression
    var total = expression[0];
    for (var i = 1; i < expression.length; i += 2) {
        var operator = expression[i];
        var operand = expression[i + 1];
        switch (operator) {
             case '+':
                total += operand;
                break;
            case '-':
                total -= operand;
                break;
            case '*':
                total *= operand;
                break;
            case '/':
                if(operand == 0){
                    total = "Error!";
                }
                else{
                total /= operand;
                }
                break;
        }
    }
    
    document.getElementById('result').value = total;
}
