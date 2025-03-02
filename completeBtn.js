const mobileIssue = document.getElementById("mobileIssue");
const darkIssue = document.getElementById("darkIssue");
const optimizeIssue = document.getElementById("optimizeIssue");
const emojiIssue = document.getElementById("emojiIssue");
const integrateIssue = document.getElementById("integrateIssue");
const jobIssue = document.getElementById("jobIssue");

// Hide all activity history
mobileIssue.style.display = "none";
darkIssue.style.display = "none";
optimizeIssue.style.display = "none";
emojiIssue.style.display = "none";
integrateIssue.style.display = "none";
jobIssue.style.display = "none";

// Clear history button functionable
document.getElementById("clearHistory").addEventListener("click", function () {
    mobileIssue.style.display = "none";
    darkIssue.style.display = "none";
    optimizeIssue.style.display = "none";
    emojiIssue.style.display = "none";
    integrateIssue.style.display = "none";
    jobIssue.style.display = "none";
})

// complete button functionable
const navTaskCount = document.getElementById("nav-task-count");
const assignedTaskCount = document.getElementById("task-assigned-count");
const completeButton = document.getElementById("nav-task-count");

const convertedNavTaskCount = parseInt(navTaskCount.innerText);
const convertedAssignedTaskCount = parseInt(assignedTaskCount.innerText);

// 1st button clickable function
document.getElementById("completeMobileIssue").addEventListener("click", function (event) {
    event.preventDefault();
    alert("✅ Task Completed Successfully!");

    navTaskCount.innerText = convertedNavTaskCount + 1;
    assignedTaskCount.innerText = convertedAssignedTaskCount - 1;

    let button = document.getElementById("completeMobileIssue");
    button.classList.add("opacity-50", "cursor-not-allowed");
    button.disabled = true;
    mobileIssue.style.display = "block";
});
// 2nd button clickable function
document.getElementById("darkIssueButton").addEventListener("click", function (event) {
    event.preventDefault();
    alert("✅ Task Completed Successfully!");

    navTaskCount.innerText = convertedNavTaskCount + 1;
    assignedTaskCount.innerText = convertedAssignedTaskCount - 1;

    let button = document.getElementById("darkIssueButton");
    button.classList.add("opacity-50", "cursor-not-allowed");
    button.disabled = true;
    darkIssue.style.display = "block";
});
// 3rd button clickable function
document.getElementById("optimizeIssueButton").addEventListener("click", function (event) {
    event.preventDefault();
    alert("✅ Task Completed Successfully!");

    navTaskCount.innerText = convertedNavTaskCount + 1;
    assignedTaskCount.innerText = convertedAssignedTaskCount - 1;

    let button = document.getElementById("optimizeIssueButton");
    button.classList.add("opacity-50", "cursor-not-allowed");
    button.disabled = true;
    optimizeIssue.style.display = "block";
});
// 4th button clickable function
document.getElementById("emojiIssueBtn").addEventListener("click", function (event) {
    event.preventDefault();
    alert("✅ Task Completed Successfully!");

    navTaskCount.innerText = convertedNavTaskCount + 1;
    assignedTaskCount.innerText = convertedAssignedTaskCount - 1;

    let button = document.getElementById("emojiIssueBtn");
    button.classList.add("opacity-50", "cursor-not-allowed");
    button.disabled = true;
    emojiIssue.style.display = "block";
});
// 5th button clickable function
document.getElementById("integrateIssueBtn").addEventListener("click", function (event) {
    event.preventDefault();
    alert("✅ Task Completed Successfully!");

    navTaskCount.innerText = convertedNavTaskCount + 1;
    assignedTaskCount.innerText = convertedAssignedTaskCount - 1;

    let button = document.getElementById("integrateIssueBtn");
    button.classList.add("opacity-50", "cursor-not-allowed");
    button.disabled = true;
    integrateIssue.style.display = "block";
});
// 6th button clickable function
document.getElementById("jobIssueBtn").addEventListener("click", function (event) {
    event.preventDefault();
    alert("✅ Task Completed Successfully!");

    navTaskCount.innerText = convertedNavTaskCount + 1;
    assignedTaskCount.innerText = convertedAssignedTaskCount - 1;

    let button = document.getElementById("jobIssueBtn");
    button.classList.add("opacity-50", "cursor-not-allowed");
    button.disabled = true;
    jobIssue.style.display = "block";
});
