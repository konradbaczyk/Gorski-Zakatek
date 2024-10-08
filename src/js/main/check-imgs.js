const enterImg = document.getElementById("enter-area-img");
const roadImg = document.getElementById("road-img");
const areaImg = document.getElementById("area-lake-img");
const cottageInteriorImg = document.getElementById("cottage-interior-img");

export const checkImgSrc = () => {
	if (window.innerWidth >= 992) {
		enterImg.setAttribute("src", "./src/images/area/enter_big.jpg");
		roadImg.setAttribute("src", "./src/images/area/road_big.jpg");
		areaImg.setAttribute("src", "./src/images/area/area_big.jpg");
		cottageInteriorImg.setAttribute("src", "./src/images/cottage/interior/interior_3_big.jpg");
	} else {
		enterImg.setAttribute("src", "./src/images/area/enter_small.jpg");
		roadImg.setAttribute("src", "./src/images/area/road_small.jpg");
		areaImg.setAttribute("src", "./src/images/area/area_small.jpg");
		cottageInteriorImg.setAttribute("src", "./src/images/cottage/interior/interior_3_small.jpg");
	}
};

window.addEventListener("resize", () => {
	checkImgSrc();
});
