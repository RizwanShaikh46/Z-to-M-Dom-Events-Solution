var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li")
var del = document.getElementsByClassName('delete')


function toggleDone(event) {

var targetElem = event.target
targetElem.classList.toggle('done')
}

function deleteItem(event) {
	var delTarget = event.target
	var removeElm = delTarget.previousElementSibling
	removeElm.parentNode.removeChild(removeElm)
	delTarget.parentNode.removeChild(delTarget)
}


for(var x = 0; x < del.length; x++) {
	del[x].addEventListener('click', deleteItem)
}

for (var i = 0; i < li.length; i++) {
     li[i].addEventListener('click', toggleDone)
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', toggleDone)
    ul.appendChild(li);
    var btn = document.createElement('button')
    btn.innerHTML = 'Delete'
    btn.addEventListener('click', deleteItem)
    ul.appendChild(btn)
    input.value = "";

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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);