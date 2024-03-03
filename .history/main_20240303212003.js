const form = document.getElementById("myForm");
console.table(form.d);
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submit action

  const formData = new FormData(this);

  fetch("YourEndpointURL", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
