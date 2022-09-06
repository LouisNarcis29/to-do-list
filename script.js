var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//Strike through list elements
function doneElements (event) {
	if(event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
//Create List Item
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

//Create Delete Button
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete Item"));
	li.appendChild(button);
}

function buttonDelete (event) {
	if(event.target.tagName === "BUTTON") {
		event.target.parentElement.remove();
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function handleClick (e) {
	doneElements(e);
	buttonDelete(e);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", handleClick);