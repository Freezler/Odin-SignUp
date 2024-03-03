<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
+const getFormData = () =>
+  Object.fromEntries(new FormData(document.getElementById("myForm")).entries());
-function getFormData() {
-  const form = document.getElementById("myForm");
-
-  const formData = new FormData(form);
-  const data = Object.fromEntries(formData.entries());
-
-  return data;
-}
+
<<<<<<<  18b114cf-71f0-4f2e-bbe3-3013f3b2f79c  >>>>>>>
const submitForm = () => {
  const data = getFormData();
  const displayData = (data) => console.log(data);
  displayData(data);
};

document.addEventListener("DOMContentLoaded", (event) => {
  const btnSubmit = document.getElementById("submitBtn");
  btnSubmit.addEventListener("click", submitForm);
});
