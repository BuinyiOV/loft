//Navigation-----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
	const btnAbout = document.querySelector('.btn-about');
	const btnContactMap = document.querySelector('.btn-contact-map');
	const btnMenu = document.querySelector('.btn-menu');


	btnAbout.addEventListener('click', function () {
		const aboutSection = document.getElementById('about');
		aboutSection.scrollIntoView({ behavior: 'smooth' });
	});

	btnMenu.addEventListener('click', function () {
		const menuSection = document.getElementById('menu');
		menuSection.scrollIntoView({ behavior: 'smooth' });
	});

	btnContactMap.addEventListener('click', function () {
		const contactSection = document.getElementById('contact');
		contactSection.scrollIntoView({ behavior: 'smooth' });
	});
});

//Tabs---------------------------------------------------------------------------------------

function openTab(event, tabName) {
	var i, tabPane, tabLinks;

	// Hide all tab panes
	tabPane = document.getElementsByClassName("tab-pane");
	for (i = 0; i < tabPane.length; i++) {
		tabPane[i].style.display = "none";
	}

	// Remove the active class from all tab links
	tabLinks = document.getElementsByClassName("tab-link");
	for (i = 0; i < tabLinks.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an active class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
}

// By default, open the first tab
document.addEventListener("DOMContentLoaded", function () {
	document.getElementsByClassName("tab-link")[0].click();
});


//Burger menu---------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
	const burgerButton = document.querySelector('.burger-button');
	const buttons = document.querySelector('.buttons');

	// Функція для закриття меню з затримкою
	function closeMenu() {
		buttons.classList.add('animation-menu'); // Додає клас анімації
		burgerButton.classList.remove('active');
		setTimeout(function () {
			buttons.classList.remove('active');
			buttons.classList.remove('animation-menu');
		}, 500); // Затримка
	}

	// Відкриття та закриття меню
	burgerButton.addEventListener('click', function (event) {
		if (buttons.classList.contains('active')) {
			closeMenu();
		} else {
			buttons.classList.add('active');
			burgerButton.classList.add('active');
		}
		event.stopPropagation();
	});

	// Закриття меню при кліку поза межами меню
	document.addEventListener('click', function (event) {
		const isClickInside = buttons.contains(event.target) || burgerButton.contains(event.target);
		if (!isClickInside) {
			closeMenu();
		}
	});

	// Закриття меню при кліку на елементи меню
	buttons.addEventListener('click', function (event) {
		if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A') {
			closeMenu();
		}
	});
});
