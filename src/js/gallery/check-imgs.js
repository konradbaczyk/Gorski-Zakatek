const cottageInteriorGalleryImg = document.getElementById("cottage-interior-gallery-img");

export const galleryImages = document.querySelectorAll(".gallery__thumbnail");

export const checkImgSrc = () => {
	if (window.innerWidth >= 992) {
		cottageInteriorGalleryImg.setAttribute("src", "./src/images/cottage/interior/interior_2_big.jpg");
		galleryImages[0].setAttribute("src", "./src/images/cottage/interior/interior_1_big.jpg");
		galleryImages[1].setAttribute("src", "./src/images/cottage/interior/interior_2_big.jpg");
		galleryImages[2].setAttribute("src", "./src/images/cottage/interior/interior_4_big.jpg");
		galleryImages[3].setAttribute("src", "./src/images/cottage/interior/interior_5_big.jpg");
		galleryImages[4].setAttribute("src", "./src/images/cottage/interior/interior_7_big.jpg");
		galleryImages[5].setAttribute("src", "./src/images/cottage/interior/interior_8_big.jpg");
		galleryImages[6].setAttribute("src", "./src/images/cottage/interior/interior_9_big.jpg");
		galleryImages[7].setAttribute("src", "./src/images/cottage/interior/interior_10_big.jpg");
		galleryImages[8].setAttribute("src", "./src/images/cottage/interior/interior_11_big.jpg");
		galleryImages[9].setAttribute("src", "./src/images/cottage/interior/interior_12_big.jpg");
		galleryImages[10].setAttribute("src", "./src/images/cottage/interior/interior_13_big.jpg");
		galleryImages[11].setAttribute("src", "./src/images/cottage/outside/outside_1_big.jpg");
		galleryImages[12].setAttribute("src", "./src/images/cottage/outside/outside_2_big.jpg");
	} else {
		cottageInteriorGalleryImg.setAttribute("src", "./src/images/cottage/interior/interior_2_small.jpg");
		galleryImages[0].setAttribute("src", "./src/images/cottage/interior/interior_1_small.jpg");
		galleryImages[1].setAttribute("src", "./src/images/cottage/interior/interior_2_small.jpg");
		galleryImages[2].setAttribute("src", "./src/images/cottage/interior/interior_4_small.jpg");
		galleryImages[3].setAttribute("src", "./src/images/cottage/interior/interior_5_small.jpg");
		galleryImages[4].setAttribute("src", "./src/images/cottage/interior/interior_7_small.jpg");
		galleryImages[5].setAttribute("src", "./src/images/cottage/interior/interior_8_small.jpg");
		galleryImages[6].setAttribute("src", "./src/images/cottage/interior/interior_9_small.jpg");
		galleryImages[7].setAttribute("src", "./src/images/cottage/interior/interior_10_small.jpg");
		galleryImages[8].setAttribute("src", "./src/images/cottage/interior/interior_11_small.jpg");
		galleryImages[9].setAttribute("src", "./src/images/cottage/interior/interior_12_small.jpg");
		galleryImages[10].setAttribute("src", "./src/images/cottage/interior/interior_13_small.jpg");
		galleryImages[11].setAttribute("src", "./src/images/cottage/outside/outside_1_small.jpg");
		galleryImages[12].setAttribute("src", "./src/images/cottage/outside/outside_2_small.jpg");
	}
};

window.addEventListener("resize", () => {
	checkImgSrc();
});
