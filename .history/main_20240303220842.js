/**
 * Creates an object from the form data of the specified form element.
 *
 * @return {Object} The form data converted to an object.
 */
const getFormData = () =>
  Object.fromEntries(
    new FormData(
      document.getElementById("myForm")
    ).entries()
  );
<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
+/**
+ * Resets the form with the id "myForm".
+ *
+ * @return {void} 
+ */
<<<<<  bot-be31e5bc-a36a-478c-867d-52bfef571b5a  >>>>>
<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
+/**
+ * Resets the form with the id "myForm".
+ *
+ */
<<<<<  bot-1425448a-0f57-49a9-9a8c-8ba1a02e9783  >>>>>
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
