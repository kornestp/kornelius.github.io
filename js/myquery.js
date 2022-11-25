var dropdowncontent = document.getElementById("dropdown-content");
var dropdownbtn = document.getElementById("dropdown-btn");
var dropdowntoggle = document.getElementsByClassName("menu-toggle-click");

// function for dropdown menu:
function dropdownmenu(){
	if (dropdowncontent.style.visibility == "visible"){
		dropdowncontent.style.visibility = "hidden";
		dropdowncontent.style.opacity = "0";
	} else {
		dropdowncontent.style.visibility = "visible";
		dropdowncontent.style.opacity = "1";
		for (var i = 0; i <= dropdowntoggle.length; i++){
			dropdowntoggle[i].dataset.menu = i;
		}
	}
}
dropdownbtn.addEventListener("click", dropdownmenu);

var menutoggle = document.getElementsByClassName("menu-toggle-click");
var dropdownlicontent = document.getElementsByClassName("dropdownli-content");
var closebtn = document.getElementsByClassName("close-btn");

// function for close modal menu:
function menumodalClose(){
	for (var a = 0; a <= dropdownlicontent.length; a++){
		dropdownlicontent[a].style.visibility = 'hidden';
		dropdownlicontent[a].style.opacity = '0';
	}
}
function clickclose(){
	for (var b = 0; b <= 4; b++){
		closebtn[b].addEventListener("click", menumodalClose);
	}
}

// function for show modal menu:
function Menumodal(e){
	dropdownlicontent[e.target.dataset.menu].style.visibility = 'visible';
	dropdownlicontent[e.target.dataset.menu].style.opacity = '1';
}

for (var j = 0; j <= menutoggle.length; j++){
		menutoggle[j].addEventListener("click", Menumodal);
	}
