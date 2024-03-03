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
  document.getElementById("myForm").reset();
};

const btnSubmit = document.getElementById("submitBtn");
btnSubmit.addEventListener("click", submitForm);

const passwordInput = document.querySelector(
  "#password"
);
const confirmPasswordinput = document.querySelector(
  "#confirm"
);
const passwordMatchMessage = document.querySelector(
  "#passwordMatch"
);

