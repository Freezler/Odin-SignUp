const getFormData = () => Object.fromEntries(new FormData(document.getElementById("myForm")).entries());

const submitForm = () => { const data = getFormData();
    console.table(data);
    return data;
};


document.addEventListener("DOMContentLoaded", (event) => {
  const btnSubmit = document.getElementById("submitBtn");
    btnSubmit.addEventListener("click", submitForm);
    document.getElementById("myForm").reset();
});