function calc_toggle()
{
	var toggle = document.getElementById("calc")
	if (toggle.style.display == "block")
		toggle.style.display = "none";
	else
		toggle.style.display = "block";
	var popup = document.getElementById("popup")
	popup.style.display = "none";
	var confirm = document.getElementById("confirm")
	confirm.style.display = "none";
}

function popup_toggle()
{
	var toggle = document.getElementById("popup")
	if (toggle.style.display == "block")
		toggle.style.display = "none";
	else
		toggle.style.display = "block";
	var calc = document.getElementById("calc")
	calc.style.display = "none";
	var confirm = document.getElementById("confirm")
	confirm.style.display = "none";
}

function confirm_toggle()
{
	var toggle = document.getElementById("confirm")
	if (toggle.style.display == "block")
		toggle.style.display = "none";
	else
		toggle.style.display = "block";
	var calc = document.getElementById("calc")
	calc.style.display = "none";
	var popup = document.getElementById("popup")
	popup.style.display = "none";
}

function popmsg()
{
	alert("This is a popup message.");
}

function confirmmsg()
{
	confirm("This is a confirmation message.")
}

function add()
{
	a = Number(document.calc.num1.value)
	b = Number(document.calc.num2.value)
	c = a + b
	document.calc.result.value = c.toFixed(2);
}

function sub()
{
	a = Number(document.calc.num1.value)
	b = Number(document.calc.num2.value)
	c = a - b
	document.calc.result.value = c.toFixed(2);
}

function mult()
{
	a = Number(document.calc.num1.value)
	b = Number(document.calc.num2.value)
	c = a * b
	document.calc.result.value = c.toFixed(2);
}

function divide()
{
	a = Number(document.calc.num1.value)
	b = Number(document.calc.num2.value)
	c = a / b
	document.calc.result.value = c.toFixed(2);
}

function formReset()
{
	document.getElementById("calc").reset();
}

function increase1()
{
	a = Number(document.calc.num1.value)
	b = a + 1
	document.calc.num1.value = b;
}

function decrease1()
{
	a = Number(document.calc.num1.value)
	b = a - 1
	document.calc.num1.value = b;
}

function increase2()
{
	a = Number(document.calc.num2.value)
	b = a + 1
	document.calc.num2.value = b;
}
function decrease2()
{
	a = Number(document.calc.num2.value)
	b = a - 1
	document.calc.num2.value = b;
}