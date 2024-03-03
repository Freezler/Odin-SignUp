const getFormData = () =>
  Object.fromEntries(
    new FormData(
      document.getElementById("myForm")
    ).entries()
  );

const submitForm = () => {
  const data = getFormData();
  console.table(data);
  formReset();
};
const formReset = () => {
    document.getElementById("myForm").classList.add("noBorder");
    document.getElementById("myForm").reset();
};

const btnSubmit = document.getElementById("submitBtn");
btnSubmit.addEventListener("click", submitForm);

/**
 * Attaches a focus event listener to all input elements. If an input element is invalid when focused, 
 * it adds the "error" class to that input element.
 */






