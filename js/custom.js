// navigation  menu js
function openNav() {
  document.getElementById("myNav").classList.toggle("menu_width");
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

// display current year on footer
function getCurrentYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
var liOne = $(".slider_section .carousel-indicators li.li_one");
var litwo = $(".slider_section .carousel-indicators li.li_two");
var ulAfter = $(".slider_section .carousel-indicators .ol_design");

$("#carouselExampleIndicators").on("slid.bs.carousel", function (event) {
  if (liOne.hasClass("active")) {
    // ulAfter.css("left", "calc(100% + ' + 35+ 'px)")
    ulAfter.css({
      left: "calc(0% + " + 35 + "px)",
    });
  } else if (litwo.hasClass("active")) {
    // ulAfter.css("left", "calc(100% - ' + 35+ 'px)")
    ulAfter.css({
      left: "calc(100% - " + 45 + "px)",
    });
  }
});

// var templateParams = {
//   name: 'James',
//   notes: 'Check this out!'
// };

// emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
//   .then(function(response) {
//      console.log('SUCCESS!', response.status, response.text);
//   }, function(error) {
//      console.log('FAILED...', error);
//   });

// function sendMail() {

//   var templateParams = {
//     name: 'James',
//     notes: 'Check this out!'
// };

// emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });

//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     phone: document.getElementById("phone").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs
//     .send("service_1izy9nq", "template_6j3h1f2", params)
//     .then(function (res) {
//       alert("Sucess! " + res.status);
//     });
// }
