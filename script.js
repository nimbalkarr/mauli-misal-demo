
/* ==============================
   1. AUTOMATIC COPYRIGHT YEAR
============================== */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* ==============================
   2. MOBILE NAVIGATION MENU
============================== */

const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".links");

if (nav && navLinks) {
  // Create a menu button
  const menuButton = document.createElement("button");

  menuButton.className = "menu-toggle";
  menuButton.type = "button";
  menuButton.textContent = "☰";
  menuButton.setAttribute("aria-label", "Open navigation menu");
  menuButton.setAttribute("aria-expanded", "false");

  // Add the button to the navigation
  nav.insertBefore(menuButton, navLinks);

  // Toggle the menu when clicked
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close the menu after selecting a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    });
  });
}
