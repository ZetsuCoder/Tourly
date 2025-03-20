'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


/**
 * Contact Form Handling
 */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      
      // Show alert in Turkish
      alert('Mesajınız başarıyla gönderildi!');
      
      // Clear all form fields
      contactForm.reset();
    });
  }
});


//! privacy police
document.addEventListener("DOMContentLoaded", function () {
  const consentCheckbox = document.getElementById("consent-checkbox");
  const acceptButton = document.getElementById("accept-button");

  consentCheckbox.addEventListener("change", function () {
    acceptButton.disabled = !this.checked;
  });

  acceptButton.addEventListener("click", function () {
    if (consentCheckbox.checked) {
      alert("Gizlilik Politikası kabul edildi. Teşekkürler!");
    }
  });
});

//! cookies
function acceptCookies() {
  document.getElementById("cookie-banner").style.display = "none";
  document.getElementById("cookie-overlay").style.display = "none";
  localStorage.setItem("cookiesAccepted", "true");
}

function rejectCookies() {
  document.getElementById("cookie-banner").classList.add("hidden");
  localStorage.setItem("cookiesAccepted", "false");
}

function openSettings() {
  alert("Çerez ayarları paneli eklenebilir.");
}