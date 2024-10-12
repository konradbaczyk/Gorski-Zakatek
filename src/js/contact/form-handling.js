import { checkRequiredInputs } from "./check-text-inputs.js";
import { checkReservationAnswer } from "./check-radio-inputs.js";
import { checkReservationDates } from "./check-radio-inputs.js";

const btnFormSubmit = document.getElementById("btn-submit-form");

export const submitForm = () => {
	checkRequiredInputs();
	checkReservationAnswer();
	checkReservationDates();
};

btnFormSubmit.addEventListener("click", submitForm);
