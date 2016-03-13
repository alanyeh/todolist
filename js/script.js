window.handleClick();

function handleClick() {
	var submit = document.getElementById('submit');
	submit.addEventListener('click', handleItem);

	var input = document.getElementById('input'); 	//input area
	input.onkeypress = handleKeyPress; // any button pressed

	//clicked on listItem 	
	var ul = document.getElementById('list');
	
	//Create Strike through on click
	ul.onclick = function(event) {
		var target = getEventTarget(event);
		target.style.textDecoration='line-through';
	};
}

function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

function handleKeyPress(e) {
	if(e.keyCode === 13) {
		submit.click(); // retrieve submit variable and intiates handleItem
		return false;
	}
}

function handleItem(e) {
	//remove default action
	e.preventDefault;

	var input = document.getElementById('input'); 	//input area
	var ul = document.getElementById('list');	//list area
	var li = document.createElement('li'); 	//create li
	var item = input.value; //retrieve textnode value

	if (item == "") {
		return false;
	}

	else {
		var textnode = document.createTextNode(item); // Create a text node
		li.appendChild(textnode); //append textnode to li
		ul.insertBefore(li, ul.childNodes[0]); //submit code to top
		input.value = ""; //Erase input after submit
	}
}


  