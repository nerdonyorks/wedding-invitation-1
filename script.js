/* ================================
   Wedding Invitation – script.js
   ================================ */

/* Initialize Lucide Icons (safe even if no icons present) */
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});

/* ================================
   Guestbook (Wishes) – Frontend only
   ================================ */

const guestbookForm = document.querySelector("#guestbook form");
const guestbookTextarea = document.querySelector("#guestbook textarea");

if (guestbookForm && guestbookTextarea) {
  guestbookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = guestbookTextarea.value.trim();
    if (!message) return;

    // Create wish card
    const wish = document.createElement("div");
    wish.className =
      "bg-white p-4 rounded-xl shadow text-gray-700 text-left";

    wish.innerHTML = `
      <p>${message}</p>
      <p class="text-sm text-gray-400 mt-2">— With love ❤️</p>
    `;

    // Insert after form
    guestbookForm.insertAdjacentElement("afterend", wish);

    // Clear textarea
    guestbookTextarea.value = "";
  });
}

/* ================================
   Smooth Scroll for internal links
   ================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ================================
   Optional: Scroll Shadow on Navbar
   ================================ */

const navbar = document.querySelector("nav");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("shadow-lg");
    } else {
      navbar.classList.remove("shadow-lg");
    }
  });
}
/* ==============================
   Guestbook → WhatsApp Message
   ============================== */

const whatsappBtn = document.getElementById("whatsapp-btn");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const name = document.getElementById("guest-name").value.trim();
    const message = document.getElementById("guest-message").value.trim();

    if (!name || !message) {
      alert("Please enter your name and message.");
      return;
    }

    // 🔴 REPLACE with your WhatsApp number (country code + number, no +)
    const phoneNumber = "919539381853";

    const text = `
Wedding Wishes 

From: ${name}

Message:
${message}
    `.trim();

    const encodedText = encodeURIComponent(text);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappURL, "_blank");
  });
}

