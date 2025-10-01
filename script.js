// -- SCROLL TO TOP BUTTON --
// Show button on small screens after scrolling down 200px
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.opacity = "1";
    scrollBtn.style.pointerEvents = "auto";
  } else {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.pointerEvents = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// -- MOBILE MENU  --
// Close offcanvas when a nav link is clicked
document.querySelectorAll('.offcanvas .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvasEl = document.getElementById("offcanvasNavbar");
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        offcanvas.hide();
    });
});


// -- ABOUT --
// Tab functionality
const tabLinks = document.querySelectorAll(".tab-links");
const tabContent = document.querySelectorAll(".tab-content");

tabLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        // Remove active classes
        tabLinks.forEach(l => l.classList.remove("active-link"));
        tabContent.forEach(c => c.classList.remove("active-tab"));

        // Add active classes to clicked link and corresponding tab content
        link.classList.add("active-link");
        tabContent[index].classList.add("active-tab");
    });
});


// -- TOOLTIP / BADGE --
// Functionality to show tooltip on non-touch devices and badge on touch devices
document.addEventListener("DOMContentLoaded", () => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => {
        const text = el.getAttribute("title");

        if (isTouchDevice) {
            // For touch devices, show badge instead of tooltip
            const badge = document.createElement("span");
            badge.className = "tooltip-badge d-block text-center";
            badge.textContent = text;
            
            const parent = el.parentElement;
            parent.style.display = "flex";
            parent.style.flexDirection = "column";
            parent.style.alignItems = "center";

            parent.appendChild(badge);
        } else {
            // Initialize Bootstrap tooltip for non-touch devices
            new bootstrap.Tooltip(el);
        }
    });
});