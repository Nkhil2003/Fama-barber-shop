// 📁 File: script.js

// 1. Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆️ Top";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #facc15;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;
document.body.appendChild(scrollBtn);

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 2. Inquiry Form Validation


// 3. Simple Review Carousel (auto-scroll)
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".review-carousel");
  if (!carousel) return;

  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 300;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }
    carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }, 3000);
});

// Inquiry Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || phone === "" || email === "") {
    alert("Please fill all the fields.");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("Enter a valid 10-digit phone number.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Enter a valid email address.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

// Auto-scroll for Review Carousel (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const reviewCarousel = document.querySelector(".review-carousel");
  if (reviewCarousel) {
    let scrollAmount = 0;
    setInterval(() => {
      scrollAmount += 1;
      reviewCarousel.scrollLeft = scrollAmount;
      if (scrollAmount >= reviewCarousel.scrollWidth - reviewCarousel.clientWidth) {
        scrollAmount = 0;
      }
    }, 30); // speed of scroll
  }
});

// Gallery image preview on click (bonus interactive touch)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-img")) {
    const imgSrc = e.target.getAttribute("src");
    const preview = document.createElement("div");
    preview.style.position = "fixed";
    preview.style.top = "0";
    preview.style.left = "0";
    preview.style.width = "100%";
    preview.style.height = "100%";
    preview.style.backgroundColor = "rgba(0,0,0,0.8)";
    preview.style.display = "flex";
    preview.style.justifyContent = "center";
    preview.style.alignItems = "center";
    preview.style.zIndex = "9999";
    preview.innerHTML = `<img src="${imgSrc}" style="max-width:90%; max-height:90%; border-radius:12px;"><span style="position:absolute; top:20px; right:40px; font-size:30px; color:white; cursor:pointer;" id="close-preview">&times;</span>`;
    document.body.appendChild(preview);

    document.getElementById("close-preview").onclick = () => {
      preview.remove();
    };
  }
});
