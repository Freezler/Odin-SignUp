// get form data

function getFormData() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    return data;
}

// submit form