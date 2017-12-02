function onSubmintFunc(){
	var win = window.open("", "Hi", "width=200,height=200");
	win.document.write(document.getElementById("firstname").value + "<br>");
	win.document.write(document.getElementById("secondname").value + "<br>");
	win.document.write(document.getElementById("phonenum").value + "<br>");
	win.document.write(document.getElementById("email").value + "<br>");
}

function onClickFunc(){
	console.log(document.getElementById("firstname").value);
	console.log(document.getElementById("secondname").value);
	console.log(document.getElementById("phonenum").value);
	console.log(document.getElementById("email").value);

}