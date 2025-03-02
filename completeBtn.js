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
function completeTask(buttonId, issueId) {
    document.getElementById(buttonId).addEventListener("click", function (event) {
        event.preventDefault();
        alert("✅ Task Completed Successfully!");

        let navTaskCount = document.getElementById("nav-task-count");
        let assignedTaskCount = document.getElementById("task-assigned-count");
        let currentNavCount = parseInt(navTaskCount.innerText);
        let currentAssignedCount = parseInt(assignedTaskCount.innerText);
        
        navTaskCount.innerText = currentNavCount + 1;
        assignedTaskCount.innerText = currentAssignedCount - 1;

        let button = document.getElementById(buttonId);
        button.classList.add("opacity-50", "cursor-not-allowed");
        button.disabled = true;
        document.getElementById(issueId).style.display = "block";
    })
}
completeTask("completeMobileIssue", "mobileIssue");
completeTask("darkIssueButton", "darkIssue");
completeTask("optimizeIssueButton", "optimizeIssue");
completeTask("emojiIssueBtn", "emojiIssue");
completeTask("integrateIssueBtn", "integrateIssue");
completeTask("jobIssueBtn", "jobIssue");
