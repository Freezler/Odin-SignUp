const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    return { data: data, form: form }; // return the form and data;
});

console.log(${ JSON.stringify(data) })