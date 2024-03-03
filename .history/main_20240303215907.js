const getFormData = () => Object.fromEntries(new FormData(document.getElementById("myForm")).entries());

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
+const submitForm = () => {
+  return getFormData();
-const submitForm = () => { const data = getFormData();
-  console.table(data);
};
<<<<<<<  426c29b5-08fa-48d6-92f2-41a69a941263  >>>>>>>


document.addEventListener("DOMContentLoaded", (event) => {
  const btnSubmit = document.getElementById("submitBtn");
  btnSubmit.addEventListener("click", submitForm);
});
