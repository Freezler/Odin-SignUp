function getFormData() {
  const form = document.getElementById("myForm");

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  return data;
}

// display data in console
const displayData = (data) => console.log(data);

// submit form
const submitForm = () => {
  const data = getFormData();
  displayData(data);
};

document.addEventListener("DOMContentLoaded", (event) => {
  const btnSubmit = document.getElementById("submitBtn");
  btnSubmit.addEventListener("click", submitForm);
});
