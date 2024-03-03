

function getFormData() {
    const form = document.getElementById('myForm');
    const data = Object.fromEntries(new FormData(form).entries());
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
btnSumbit.addEventListener('click', submitForm);
