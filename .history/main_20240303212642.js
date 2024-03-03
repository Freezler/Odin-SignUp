// get form data

function getFormData() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    con
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

// event listener
document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    submitForm();
});