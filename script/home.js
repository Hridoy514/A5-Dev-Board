document
  .getElementById("back-desk-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Clicked");
    window.location.href = "../index.html";
  });
