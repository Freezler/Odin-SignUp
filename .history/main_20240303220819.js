<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
+/**
+ * Creates an object from the form data of the specified form element.
+ *
+ * @return {Object} The form data converted to an object.
+ */
<<<<<  bot-a93087f3-a9ae-428a-8112-1d04fe8f9d1a  >>>>>
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
