const popup = document.querySelector(".gallery-section__popup");
const popupImg = document.querySelector(".popup__img");

export const handlePopup = (e) => {
	popupImg.setAttribute("src", e.target.src);
	popup.classList.add("gallery-section__popup--active");
};
