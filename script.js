// First JavaScript feature
console.log("Carter website JavaScript is working!");
const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.addEventListener("click", function () {
    welcomeMessage.textContent = "Welcome to the future!";
});