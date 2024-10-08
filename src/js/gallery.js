import { handleMenu } from "./navigation/navigation.js";
import { checkImgSrc } from "./gallery/check-imgs.js";
import { handlePopup } from "./gallery/handle-popup.js";
import { galleryImages } from "./gallery/check-imgs.js";

galleryImages.forEach((image) => image.addEventListener("click", handlePopup));
checkImgSrc();
handleMenu;
