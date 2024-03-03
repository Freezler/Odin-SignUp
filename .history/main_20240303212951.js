// get form data

function getFormData() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    console.log(data);
    return data;
}

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
btnSumbit
