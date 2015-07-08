Brahma
======

Brahma is a tiny element creator, it uses only basic DOM element creation compatible with Chrome43+. It's to be used in the creation of applications specifically targeted at Chrome, Chrome Apps & Extensions and Chrome Mobile.

##Example usage##

	//Element creation
	brahma.create({
		el: "div",
		class: ["some", "classes"], //could also be a single string "class1 class2 class3"
		id: "someId",
		textContent: "Desired text content"
	});