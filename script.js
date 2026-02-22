// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar shadow
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  }
});

// Booking System
document.addEventListener("DOMContentLoaded", function () {
  const bookingDate = document.getElementById("bookingDate");
  if (bookingDate) {
    bookingDate.min = new Date().toISOString().split("T")[0];
  }
});

function confirmBooking() {

  const date = document.getElementById("bookingDate").value;
  const time = document.getElementById("bookingTime").value;
  const messageBox = document.getElementById("bookingMessage");

  if (date === "" || time === "") {
    alert("Please select a date and time.");
    return;
  }

  const bookingText =
    "New Booking Request:\n\n" +
    "Date: " + date + "\n" +
    "Time: " + time + "\n\n" +
    "Customer will be contacted shortly.";

  // Save locally
  localStorage.setItem("greenproBooking", JSON.stringify({ date, time }));

  // Email
  window.location.href =
    "mailto:Greenprolandscaping@outlook.com?subject=New Landscaping Booking&body=" +
    encodeURIComponent(bookingText);

  // WhatsApp (opens after slight delay)
  setTimeout(function () {
    window.open(
      "https://wa.me/18764905041?text=" + encodeURIComponent(bookingText),
      "_blank"
    );
  }, 1000);

  messageBox.innerText =
    "✅ Booking Submitted! We will contact you shortly.";

}
