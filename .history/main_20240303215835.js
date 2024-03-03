const getFormData = () => Object.fromEntries(new FormData(document.getElementById("myForm")).entries());

const submitForm = () => {return getFormData(da);};


document.addEventListener("DOMContentLoaded", (event) => {
  const btnSubmit = document.getElementById("submitBtn");
  btnSubmit.addEventListener("click", submitForm);
});
