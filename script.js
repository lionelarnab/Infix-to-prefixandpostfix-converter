/*var st=[];
var top=-1;
const infixtopost = () =>{
//   console.log("Arnab");
 inputexp = document.getElementById('exp').value;
 console.log(inputexp);
  // typeof(inputexp);
  const push =(a)=>{
    st[top++] = a;
  }
  const pop=()=>{
    let p = st[top--];
    return p;
  }
  const priority = (c)=>{
    if(c=='(')
    return 0;
    else if(c=='+' || c=='-')
    return 1;
    else if(c=='*' || c=='/' || c=='%')
    return 2;
    else if(c=='^' || c=='$')
    return 3;
  }
  var post = [];
  var inc = 0;
  var regEx = /^[0-9a-zA-Z]+$/;
  var x;
  for(var i =0 ;i<inputexp.length;i++)
    {
      var e = inputexp[i];
      if(e.value.match(regEx))
      {
        post[inc++] = e;
      }
      else if(e=='(')
        push(e);
      else if(e==')')
      {
        while((x = pop())!= '(')
          post[inc++] = x;
        
      }
      else
      {
        while(priority(st[top])>=priority(e))
          {
            post[inc++] = pop();
          }
        push(e);
      }
      
    }
  while(top!= 0)
    {
      post[inc++] = pop();
    }
  var st = "";
  for(var j = 0;j<post.length;j++)
    {
      st+=post[j];
    }
//   console.log(st);
  document.getElementById("result").innerHTML = st;
}
*/

// JavaScript program to convert
// infix to prefix.

// Function to check if
// given character is
// an operator or not.
function isOperator(c)
{
	return (!(c >= 'a' && c <= 'z') &&
			!(c >= '0' && c <= '9') &&
			!(c >= 'A' && c <= 'Z'));
}

// Function to find priority
// of given operator.
function getPriority(C)
{
	if (C == '-' || C == '+')
		return 1;
	else if (C == '*' || C == '/')
		return 2;
	else if (C == '^')
		return 3;
	return 0;
}

// Function that converts infix
// expression to prefix expression.
function infixToPrefix(infix)
{
	// stack for operators.
	let operators = [];

	// stack for operands.
	let operands = [];

	for (let i = 0; i < infix.length; i++)
	{

		// If current character is an
		// opening bracket, then
		// push into the operators stack.
		if (infix[i] == '(')
		{
			operators.push(infix[i]);
		}

		// If current character is a
		// closing bracket, then pop from
		// both stacks and push result
		// in operands stack until
		// matching opening bracket is
		// not found.
		else if (infix[i] == ')')
		{
			while (operators.length!=0 &&
				operators[operators.length-1] != '(')
				{

				// operand 1
				let op1 = operands.pop();
				

				// operand 2
				let op2 = operands.pop();
				

				// operator
				let op = operators.pop();
				

				// Add operands and operator
				// in form operator +
				// operand1 + operand2.
				let tmp = op + op2 + op1;
				operands.push(tmp);
			}

			// Pop opening bracket
			// from stack.
			operators.pop();
		}

		// If current character is an
		// operand then push it into
		// operands stack.
		else if (!isOperator(infix[i]))
		{
			operands.push(infix[i] + "");
		}

		// If current character is an
		// operator, then push it into
		// operators stack after popping
		// high priority operators from
		// operators stack and pushing
		// result in operands stack.
		else
		{
			while (operators.length &&
				getPriority(infix[i]) <=
					getPriority(operators[operators.length-1]))
				{

				let op1 = operands.pop();
				

				let op2 = operands.pop();
				

				let op = operators.pop();
				

				let tmp = op + op2 + op1;
				operands.push(tmp);
			}

			operators.push(infix[i]);
		}
	}

	// Pop operators from operators
	// stack until it is empty and
	// operation in add result of
	// each pop operands stack.
	while (operators.length!=0)
	{
		let op1 = operands.pop();
		

		let op2 = operands.pop();
		

		let op = operators.pop();
		

		let tmp = op + op2 + op1;
		operands.push(tmp);
	}

	// Final prefix expression is
	// present in operands stack.
	// return operands[operands.length-1];
	let st1="";
	for(let i = 0;i<operands.length;i++)
	{
		st1+= operands[i];
	}
	document.getElementById("result1").innerHTML = "Prefix Expression is :" +" "+st1;

}

// Driver code
// let s = "(A-B/C)*(A/K-L)";
// document.write( infixToPrefix(s));


// This code is contributed by avanitrachhadiya2155


// Created an empty array
var stackarr = [];

// Variable topp initialized with -1
var topp = -1;

// Push function for pushing
// elements inside stack
function push(e) {
	topp++;
	stackarr[topp] = e;
}

// Pop function for returning top element
function pop() {
	if (topp == -1)
		return 0;
	else {
		var popped_ele = stackarr[topp];
		topp--;
		return popped_ele;
	}
}

// Function to check whether the passed
// character is operator or not
function operator(op) {
	if (op == '+' || op == '-' ||
		op == '^' || op == '*' ||
		op == '/' || op == '(' ||
		op == ')') {
		return true;
	}
	else
		return false;
}

// Function to return the precedency of operator
function precedency(pre) {
	if (pre == '@' || pre == '(' || pre == ')') {
		return 1;
	}
	else if (pre == '+' || pre == '-') {
		return 2;
	}
	else if (pre == '/' || pre == '*') {
		return 3;
	}
	else if (pre == '^') {
		return 4;
	}
	else
		return 0;
}

// Function to convert Infix to Postfix
function infixtopost() {

	// Postfix array created
	var postfix = [];
	var temp = 0;
	push('@');
	infixval = document.getElementById("exp").value;

	// Iterate on infix string
	for (var i = 0; i < infixval.length; i++) {
		var el = infixval[i];

		// Checking whether operator or not
		if (operator(el)) {
			if (el == ')') {
				while (stackarr[topp] != "(") {
					postfix[temp++] = pop();
				}
				pop();
			}

			// Checking whether el is ( or not
			else if (el == '(') {
				push(el);
			}

			// Comparing precedency of el and
			// stackarr[topp]
			else if (precedency(el) > precedency(stackarr[topp])) {
				push(el);
			}
			else {
				while (precedency(el) <=
					precedency(stackarr[topp]) && topp > -1) {
					postfix[temp++] = pop();
				}
				push(el);
			}
		}
		else {
			postfix[temp++] = el;
		}
	}

	// Adding character until stackarr[topp] is @
	while (stackarr[topp] != '@') {
		postfix[temp++] = pop();
	}

	// String to store postfix expression
	var st = "";
	for (var i = 0; i < postfix.length; i++)
		st += postfix[i];

	// To print postfix expression in HTML
	document.getElementById("result").innerHTML = "Postfix Expression is :" +" "+st;
	infixToPrefix(infixval);
}

