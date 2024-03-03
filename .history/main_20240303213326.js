

function getFormData() {
    const form = document.getElementById('myForm');

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Form data:', data);

    return data;
}


// display data in console 

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
+const displayData = data => console.log(data);
-function displayData(data) {
-    console.log(data);
-}
<<<<<<<  8c58adfc-2ab3-4dbe-afc1-3ace58f371ec  >>>>>>>

// submit form
function submitForm() {
    const data = getFormData();
    displayData(data);
}

const btnSumbit = document.getElementById('submitBtn');
// event listener
btnSumbit.addEventListener('click', submitForm);
