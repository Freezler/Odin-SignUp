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

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
const btnSubmit = () =>
+  document.getElementById("submitBtn").addEventListener("click", submitForm);
-  document.addEventListener("click", submitForm);
<<<<<<<  60d7eeb7-0f82-4fee-b680-59c4985fdc6c  >>>>>>>
