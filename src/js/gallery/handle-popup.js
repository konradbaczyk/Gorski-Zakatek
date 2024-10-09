import { galleryImages } from "./check-imgs.js";

const popup = document.querySelector(".gallery-section__popup");
const popupImg = document.querySelector(".popup__img");
const btnClosePopup = document.getElementById("btn-close-popup");
const btnPreviousImg = document.getElementById("btn-arrow-previous");
const btnNextImg = document.getElementById("btn-arrow-next");

const images = [...galleryImages];
let indexOfImg;
let newImgSrc;

export const showPopup = (e) => {
	indexOfImg = images.indexOf(e.target);
	popupImg.setAttribute("src", e.target.src);
	popup.classList.add("gallery-section__popup--active");
	document.body.classList.add("no-scroll");
};

const hidePopup = () => {
	popup.classList.remove("gallery-section__popup--active");
	document.body.classList.remove("no-scroll");
};

const popupPreviousImg = () => {
	if (indexOfImg > 0) {
		indexOfImg--;
		newImgSrc = images[indexOfImg].src;
		popupImg.setAttribute("src", newImgSrc);
	}
};

const popupNextImg = () => {
	if (indexOfImg < images.length - 1) {
		indexOfImg++;
		newImgSrc = images[indexOfImg].src;
		popupImg.setAttribute("src", newImgSrc);
	}
};

images.forEach((image) => image.addEventListener("click", showPopup));
btnClosePopup.addEventListener("click", hidePopup);
btnPreviousImg.addEventListener("click", popupPreviousImg);
btnNextImg.addEventListener("click", popupNextImg);
