(function () {
	var groups = document.querySelectorAll('.group');
	for (var i=0; i < groups.length; i++) {
		var anchor = groups[i];
		var list = anchor.nextSibling;
		if (! list.querySelector('.active')) list.classList.toggle('collapsed');
		anchor.addEventListener('click', function() {
			this.nextSibling.classList.toggle('collapsed');
		});
	}
})();
