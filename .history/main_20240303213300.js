

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
function getFormData() {
    const form = document.getElementById('myForm');
+
+    const formData = new FormData(form);
+    const data = Object.fromEntries(formData.entries());
+
+    console.log('Form data:', data);
+
-    const data = Object.fromEntries(new FormData(form).entries());
-    console.log(data);
    return data;
}
+
<<<<<<<  47cef6dd-c50a-4168-848a-a36b394c4f5e  >>>>>>>

// display data in console 

function displayData(data) {
    console.log(data);
}

// submit form
function submitForm() {
    const data = getFormData();
    displayData(data);
}

const btnSumbit = document.getElementById('submitBtn');
// event listener
btnSumbit.addEventListener('click', submitForm);
