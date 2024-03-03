const getFormData = () =>
  Object.fromEntries(
    new FormData(
      document.getElementById("myForm")
    ).entries()
  );
  const formReset = () => {
    document.getElementById("myForm").reset();
  };

const submitForm = () => {
  const data = getFormData();
  console.table(data);
  formReset();
   
};

document.addEventListener("DOMContentLoaded", (event) => {
  const btnSubmit = document.getElementById("submitBtn");
  btnSubmit.addEventListener("click", submitForm);
});
