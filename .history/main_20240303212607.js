// get form data

function getFormData() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    return data;
}

// display data in console 

function displayData(data) {
    console.log(data);
}



// submit form