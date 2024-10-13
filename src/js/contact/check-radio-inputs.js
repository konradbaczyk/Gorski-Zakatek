const radioAnswers = document.querySelectorAll(".form__input-radio");
const fieldsetDate = document.getElementById("fieldset-date");

const inputDateFrom = document.getElementById("input-date-from");
const inputDateTo = document.getElementById("input-date-to");

const errorFieldsetReservation = document.getElementById("fieldset-reservation-error");
const errorDates = document.getElementById("dates-error");

const inputsDates = document.querySelectorAll(".form__input-date");

const isRadioChecked = () => {
	if (!radioAnswers[0].checked && !radioAnswers[1].checked) {
		errorFieldsetReservation.classList.add("form__error--active");
	} else {
		errorFieldsetReservation.classList.remove("form__error--active");
		errorDates.classList.remove("form__error--active");
	}
};

export const checkReservationAnswer = () => {
	isRadioChecked();

	if (radioAnswers[0].checked) {
		fieldsetDate.classList.add("form__fieldset-date--active");
		inputsDates.forEach((input) => input.setAttribute("required", "true"));
		// checkReservationDates();
	} else {
		fieldsetDate.classList.remove("form__fieldset-date--active");
		inputsDates.forEach((input) => input.removeAttribute("required"));
		errorDates.classList.remove("form__error--active");
	}
};

export const checkReservationDates = () => {
	if (radioAnswers[0].checked && (inputDateFrom.value === "" || inputDateTo.value === "")) {
		errorDates.classList.add("form__error--active");
	} else {
		errorDates.classList.remove("form__error--active");
	}
};

radioAnswers.forEach((answer) => answer.addEventListener("click", checkReservationAnswer));
