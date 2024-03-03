

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
function getFormData() {
    const form = document.getElementById('myForm');
+    const data = Object.fromEntries(new FormData(form).entries());
-    const formData = new FormData(form);
-    const data = {};
-    formData.forEach((value, key) => data[key] = value);
    console.log(data);
    return data;
}
<<<<<<<  d7299357-00c7-411b-9f1e-686abfee7f6a  >>>>>>>

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
