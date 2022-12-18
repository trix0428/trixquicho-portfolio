const hamburger = document.querySelector(".hamburger");
const navitems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navitems.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navitems.classList.remove("active");
  })
);

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

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// SECOND SECTION - CLICKING NAV

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("btn_about").click();
});
// let btn_about = document.getElementById("btn_about");
// btn_about.checked = true;

var btn_about = document.getElementById("btn_about");
var btn_skills = document.getElementById("btn_skills");
var btn_exp = document.getElementById("btn_exp");
var btn_educ = document.getElementById("btn_educ");
var btn_hobbies = document.getElementById("btn_hobbies");

var content_about = document.getElementById("content_about");
var content_skills = document.getElementById("content_skills");
var content_exp = document.getElementById("content_exp");
var content_educ = document.getElementById("content_educ");
var content_hobbies = document.getElementById("content_hobbies");

btn_about.addEventListener("click", () => {
  content_about.style.display = "block";
  content_skills.style.display = "none";
  content_exp.style.display = "none";
  content_educ.style.display = "none";
  content_hobbies.style.display = "none";
});
btn_skills.addEventListener("click", () => {
  content_about.style.display = "none";
  content_skills.style.display = "block";
  content_exp.style.display = "none";
  content_educ.style.display = "none";
  content_hobbies.style.display = "none";
});
btn_educ.addEventListener("click", () => {
  content_about.style.display = "none";
  content_skills.style.display = "none";
  content_exp.style.display = "none";
  content_educ.style.display = "block";
  content_hobbies.style.display = "none";
});
btn_educ.addEventListener("click", () => {
  content_about.style.display = "none";
  content_skills.style.display = "none";
  content_exp.style.display = "none";
  content_educ.style.display = "block";
  content_hobbies.style.display = "none";
});
btn_exp.addEventListener("click", () => {
  content_about.style.display = "none";
  content_skills.style.display = "none";
  content_exp.style.display = "block";
  content_educ.style.display = "none";
  content_hobbies.style.display = "none";
});
btn_hobbies.addEventListener("click", () => {
  content_about.style.display = "none";
  content_skills.style.display = "none";
  content_exp.style.display = "none";
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
  // emailjs
  //   .send("service_xyvk7um", "template_1gkv9zf", params)
  //   .then(function (res) {
  //     alert("Success!" + res.status);
  //   });
}
