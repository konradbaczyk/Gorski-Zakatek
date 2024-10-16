
const inputsRequired = document.querySelectorAll(".input-form[required]");

export const checkRequiredInputs = () => {
	inputsRequired.forEach((input) => {
		if (input.value === "") {
			input.previousElementSibling.classList.add("form__error--active");
		} else {
			input.previousElementSibling.classList.remove("form__error--active");
		}
	});
};
