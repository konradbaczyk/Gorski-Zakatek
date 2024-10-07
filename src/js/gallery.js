const cottageInteriorGalleryImg = document.getElementById(
	"cottage-interior-gallery-img"
);

const checkImgSrc = () => {
	if (window.innerWidth >= 992) {
		cottageInteriorGalleryImg.setAttribute(
			"src",
			"./src/images/cottage/interior/interior_2_big.jpg"
		);
	} else {
		cottageInteriorGalleryImg.setAttribute(
			"src",
			"./src/images/cottage/interior/interior_2_small.jpg"
		);
	}
};

window.addEventListener("resize", () => {
	checkImgSrc();
});
checkImgSrc();
