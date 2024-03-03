const getFormData = () =>
  Object.fromEntries(
    new FormData(
      document.getElementById("myForm")
    ).entries()
  );

const formReset = () => {
  document.getElementById("myForm").reset();
};

/**
 * Submits the form by getting the form data, displaying it in a table, and then resetting the form.
 *
 * @param {void}
 * @return {void}
 */
const submitForm = () => {
  const data = getFormData();
  console.table(data);
  formReset();
};

const btnSubmit = document.getElementById("submitBtn");
btnSubmit.addEventListener("click", submitForm);
