document.querySelector(".menu-toggle").onclick = function () {
  document.getElementById("nav-menu").classList.toggle("active");
};

// Add to Cart feedback
document.querySelectorAll(".padd, .add-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const orig = this.textContent;
    this.textContent = "✓ Added!";
    this.style.background = "var(--green-light)";
    setTimeout(() => {
      this.textContent = orig;
      this.style.background = "";
    }, 1500);
  });
});

// Newsletter
document
  .querySelector(".nl-form button")
  .addEventListener("click", function () {
    const input = document.querySelector(".nl-form input");
    if (input.value.includes("@")) {
      this.textContent = "✓ Subscribed!";
      this.style.background = "var(--green-light)";
      input.value = "";
    }
  });

// Filter functionality
function filterCards(btn, cat) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  document.querySelectorAll(".card").forEach((card) => {
    const show = cat === "all" || card.dataset.cat === cat;
    card.style.display = show ? "flex" : "none";
  });

  // Show/hide section headers
  const sections = [
    { id: "grid-juice", cat: "juice", headerIdx: 0 },
    { id: "grid-pickle", cat: "pickle", headerIdx: 1 },
    { id: "grid-herbal", cat: "herbal", headerIdx: 2 },
  ];
  const headers = document.querySelectorAll(".section-header");
  const banners = document.querySelectorAll(".banner-strip");

  sections.forEach(({ id, cat: c, headerIdx }) => {
    const show = cat === "all" || cat === c;
    document.getElementById(id).style.display = show ? "grid" : "none";
    headers[headerIdx].style.display = show ? "flex" : "none";
  });
  banners.forEach((b) => (b.style.display = cat === "all" ? "flex" : "none"));
}

// Wishlist toggle
document.querySelectorAll(".wishlist-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "♡" ? "♥" : "♡";
    btn.style.color = btn.textContent === "♥" ? "#e05a5a" : "";
  });
});

// Add to Cart feedback
document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const orig = this.textContent;
    this.textContent = "✓ Added!";
    this.style.background = "var(--green-light)";
    setTimeout(() => {
      this.textContent = orig;
      this.style.background = "";
    }, 1500);
  });
});

document.querySelectorAll(".f-btn").forEach((b) => {
  b.addEventListener("click", function () {
    document
      .querySelectorAll(".f-btn")
      .forEach((x) => x.classList.remove("active"));
    this.classList.add("active");
  });
});
document
  .querySelector(".nl-form button")
  .addEventListener("click", function () {
    const inp = document.querySelector(".nl-form input");
    if (inp.value.includes("@")) {
      this.textContent = "✓ Done!";
      inp.value = "";
    }
  });

function submitForm() {
  const f = document.getElementById("fname").value;
  const e = document.getElementById("email").value;
  const m = document.getElementById("message").value;
  const s = document.getElementById("subject").value;
  if (!f || !e || !m || !s) {
    alert("Please fill in all required fields (*).");
    return;
  }
  if (!e.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }
  const btn = document.querySelector(".submit-btn");
  btn.textContent = "Sending…";
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById("successMsg").style.display = "block";
    btn.textContent = "✓ Message Sent!";
    btn.style.background = "var(--gl)";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    document.getElementById("subject").value = "";
  }, 1200);
}

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});
document.querySelectorAll(".padd").forEach((btn) => {
  btn.addEventListener("click", function () {
    const o = this.textContent;
    this.textContent = "✓ Added!";
    this.style.background = "var(--green-light)";
    setTimeout(() => {
      this.textContent = o;
      this.style.background = "";
    }, 1500);
  });
});
document.getElementById("nlbtn").addEventListener("click", function () {
  const inp = document.querySelector(".nl-form input");
  if (inp.value.includes("@")) {
    this.textContent = "✓ Subscribed!";
    this.style.background = "var(--green-light)";
    inp.value = "";
  }
});

function filterCards(btn, cat) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".card").forEach((card) => {
    card.style.display =
      cat === "all" || card.dataset.cat === cat ? "flex" : "none";
  });
  [
    ["grid-juice", "sh-juice", "juice"],
    ["grid-pickle", "sh-pickle", "pickle"],
    ["grid-herbal", "sh-herbal", "herbal"],
  ].forEach(([gid, hid, c]) => {
    const show = cat === "all" || cat === c;
    document.getElementById(gid).style.display = show ? "grid" : "none";
    document.getElementById(hid).style.display = show ? "flex" : "none";
  });
  document.querySelectorAll(".banner-strip,.photo-divider").forEach((el) => {
    el.style.display =
      cat === "all"
        ? el.classList.contains("banner-strip")
          ? "flex"
          : "grid"
        : "none";
  });
}
document.querySelectorAll(".wishlist-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "♡" ? "♥" : "♡";
    btn.style.color = btn.textContent === "♥" ? "#e05a5a" : "";
  });
});
document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const o = this.textContent;
    this.textContent = "✓ Added!";
    this.style.background = "var(--green-light)";
    setTimeout(() => {
      this.textContent = o;
      this.style.background = "";
    }, 1500);
  });
});
