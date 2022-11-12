// const navbarToggler = document.querySelector(".navbar-toggler");
// const navbarMenu = document.querySelector(".side-navbar ul");

// navbarToggler.addEventListener("click", navbarTogglerClick);

// function navbarTogglerClick() {
//   navbarToggler.classList.toggle("open-navbar-toggler");
//   navbarMenu.classList.toggle("open");
// }

// navbarLinks.forEach((elem) => elem.addEventListener("click", navbarLinkCLick));

// function navbarLinkCLick() {
//   if (navbarMenu.clickList.contains("open")) {
//     navbarToggler.click();
//   }
// }

// SECOND SECTION - CLICKING NAV

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("btn_about").click();
});
// let btn_about = document.getElementById("btn_about");
// btn_about.checked = true;

var btn_about = document.getElementById("btn_about");
var btn_skills = document.getElementById("btn_skills");
var btn_educ = document.getElementById("btn_educ");
var btn_hobbies = document.getElementById("btn_hobbies");

var content_about = document.getElementById("content_about");
var content_skills = document.getElementById("content_skills");
var content_educ = document.getElementById("content_educ");
var content_hobbies = document.getElementById("content_hobbies");

btn_about.addEventListener("click", () => {
  content_about.style.display = "block";
  content_skills.style.display = "none";
  content_educ.style.display = "none";
  content_hobbies.style.display = "none";
});
btn_skills.addEventListener("click", () => {
  content_about.style.display = "none";
  content_skills.style.display = "block";
  content_educ.style.display = "none";
  content_hobbies.style.display = "none";
});
btn_educ.addEventListener("click", () => {
  content_about.style.display = "none";
  content_skills.style.display = "none";
  content_educ.style.display = "block";
  content_hobbies.style.display = "none";
});
btn_hobbies.addEventListener("click", () => {
  content_about.style.display = "none";
  content_skills.style.display = "none";
  content_educ.style.display = "none";
  content_hobbies.style.display = "block";
});

// CONTACT

function SendMail() {
  var params = {
    subject_id: document.getElementById("subject_id").value,
    message_id: document.getElementById("message_id").value,
    name_id: document.getElementById("name_id").value,
    email_id: document.getElementById("email_id").value,
  };
  emailjs
    .send("service_xyvk7um", "template_1gkv9zf", params)
    .then(function (res) {
      alert("Success!" + res.status);
    });
}
