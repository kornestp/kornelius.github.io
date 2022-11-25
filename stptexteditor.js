var Mytexteditor = document.getElementById("Mytexteditor");
var bold = document.getElementById("bold");
Mytexteditor.contentEditable = "true";
Mytexteditor.focus();


	window.addEventListener('click', function(e){   
	  if (Mytexteditor.contains(e.target)){
		Mytexteditor.focus();
	  } else{
		Mytexteditor.focus();
	  }
	});

function iFrameOn(){
	richTextField.document.designMode = 'On';
}
window.onload = iFrameOn();
function ibold(){
	Mytexteditor.document.execCommand("bold");
}
bold.addEventListener("click", ibold);