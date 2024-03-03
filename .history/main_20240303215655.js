const getFormData = () => Object.fromEntries(new FormData(document.getElementById("myForm")).entries());

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
const submitForm = () => {
  const data = getFormData();
+  console.table(data);
-  const displayData = (data) => console.log(data);
-  displayData(data);
};
+
<<<<<<<  bfab38b6-850a-4644-8248-5bb03c73080f  >>>>>>>

document.addEventListener("DOMContentLoaded", (event) => {
  const btnSubmit = document.getElementById("submitBtn");
  btnSubmit.addEventListener("click", submitForm);
});
