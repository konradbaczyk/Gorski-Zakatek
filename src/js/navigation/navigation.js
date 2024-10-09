const btnToggle = document.getElementById("btn-toggle-menu");

export const handleMenu = () => {
	const navMenu = document.getElementById("menu");

	if (navMenu.classList.contains("navigation__menu--active")) {
		btnToggle.style.backgroundImage = "url(./src/images/icons/menu-3-line.svg)";
		document.body.classList.remove("no-scroll");
	} else {
		btnToggle.style.backgroundImage = "url(./src/images/icons/icon-close.svg)";
		document.body.classList.add("no-scroll");
	}

	navMenu.classList.toggle("navigation__menu--active");
};

btnToggle.addEventListener("click", handleMenu);
