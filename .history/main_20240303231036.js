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
  "#user_password"
);
const confirmPasswordinput = document.querySelector(
  "#user_confirmpassword"
);
const passwordMatchMessage = document.querySelector(
  "#passwordMatch"
);
