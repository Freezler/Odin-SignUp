const getFormData = () =>
  Object.fromEntries(new FormData(document.getElementById("myForm")).entries());

const submitForm = () => {
  const data = getFormData();
  const displayData = (data) => console.log(data);
  displayData(data);
};

document.addEventListener("DOMContentLoaded", (event) => {
  const btnSubmit = document.getElementById("submitBtn");
  btnSubmit.addEventListener("click", submitForm);
});
