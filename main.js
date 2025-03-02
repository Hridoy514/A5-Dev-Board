// random background color set
function changeBackgroundColor() {
    let colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "cyan", "lime", "teal", "tomato"];
    document.body.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
}

// set time and date in the web pages
function showDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    document.getElementById("time").innerText = date + " " + time;
}
setInterval(showDateTime, 1000);

// activity history time set
function showActivityTime() {
  let activities = document.querySelectorAll(".activity-time");
  let currentTime = new Date().toLocaleTimeString();

  for (let activity of activities) {
    activity.innerText = currentTime;
  }
}
showActivityTime();

