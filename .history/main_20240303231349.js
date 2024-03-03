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

function checkPasswordMatch(){
    if(passwordInput.value !== confirmPasswordinput.value){
        passwordMatchMessage.textContent='The passwords do not match*';
        passwordMatchMessage.style.color='red'
    } else {
        passwordMatchMessage.textContent='The passwords match!';
        passwordMatchMessage.style.color='green';
