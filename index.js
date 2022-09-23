const formInfo = document.getElementById("formInfo");

let hasJob = false;
if (hasJob) {
  // I have a job
  showMessage("Welcome! Please be advised that I am currently employed.");
} else {
  // I need a job
  showMessage("Please look around, I'm currently looking for a position.");
} 

let today = new Date("09/17/2022");
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
  showMessage("Please be advised as it is the weekend, my response may be delayed. I will provide a response ASAP.");
}

function showMessage(message) {
  formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage() {
  formInfo.innerHTML = "";
}

const first = "first";

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  showMessage("Your message is being sent - please wait...");
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
  const item = experiences[x];
  item.addEventListener("mouseenter", function (event) {
    event.target.style = "background-color: #999999;";
  });
  item.addEventListener("mouseleave", function (event) {
    event.target.style = "";
  });
}

