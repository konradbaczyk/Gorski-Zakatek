import { checkRequiredInputs } from "./check-text-inputs.js";
import { checkReservationAnswer } from "./check-radio-inputs.js";
import { checkReservationDates } from "./check-radio-inputs.js";

const btnFormSubmit = document.getElementById("btn-submit-form");
const modalSuccess = document.getElementById("modal");
const btnCloseModal = document.getElementById("btn-close-modal");

const checkVisibleErrors = () => {
	const errors = document.querySelectorAll(".form__error--active");

	if (errors.length === 0) {
		modalSuccess.showModal();
	}
};

export const submitForm = () => {
	checkRequiredInputs();
	checkReservationAnswer();
	checkReservationDates();

	checkVisibleErrors();
};

btnFormSubmit.addEventListener("click", submitForm);
btnCloseModal.addEventListener("click", () => modalSuccess.close());
