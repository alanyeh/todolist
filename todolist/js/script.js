window.handleClick();

function handleClick() {
	var submit = document.getElementById('submit');
	submit.addEventListener('click', handleItem);
}

function handleItem(e) {
	//remove default action
	e.preventDefault;

	var listItem = document.getElementById('todolist');
	var list = document.getElementById('list');



	// console.log(listItem.value);

	list.innerHTML = list.innerHTML + '<li>' + listItem.value + '<li>';


	// if (listItemValue == '' || listItemValue == null){
	// 	alert('Please Enter a value');
	// 	return false;
	// }
	// else {
	// 	for (var i = 0; i < itemlist.length; i++){
	// 		list.innerHTML = '<li>' + itemlist[i] + '<li>';

	// 	}
	// }
}


  