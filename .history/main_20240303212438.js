const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    return {data;
});

console.log(data)