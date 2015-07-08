/*
		BRAHMA by cav_dan<daniel@shinka.com.br>
		Element creation made easy for Chrome43+
	*/
var brahma = {
	// ex: create({el: "div", class: ["page", "layout"], id: "100", textContent: "conteudo"})
	create: function(elementObj)
	{
		var element;
		if (elementObj.el)
		{
			element = document.createElement(elementObj.el);
			if (elementObj.class)
			{
				if ( Array.isArray(elementObj.class) )
				{
					elementObj.class.forEach(function(_this){
						element.classList.add(_this);
					});
				} else {
					element.className = elementObj.class;
				}
			}

			if (elementObj.id)
			{
				element.id = elementObj.id;
			}

			if (elementObj.textContent)
			{
				var txt = document.createTextNode(elementObj.textContent);
				element.appendChild(txt);
			}

			return element;

		} else {
			throw "Brahma says: No attribute 'el' defined, could not create element.";
			return false;
		}
	}
}