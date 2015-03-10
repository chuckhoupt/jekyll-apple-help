document.onreadystatechange = function () {
	switch (document.readyState) {
		case 'interactive':
			var groups = document.querySelectorAll('.group');
			for (var i= 0; i < groups.length; i++) {
				var anchor = groups[i];
				var list = anchor.nextSibling;
				list.dataset.height = list.clientHeight + 'px';
				list.style.maxHeight = list.querySelector('.active') ? list.dataset.height : '0px';
				anchor.addEventListener('click', function() {
					var list = this.nextSibling;
					list.style.maxHeight = (list.style.maxHeight == '0px') ? list.dataset.height : '0px';
				});
			}
			break;
		case 'complete':
			document.querySelector('header').classList.toggle('animate', true);
			break;
	}
};
