// Menu data, taken from the in-store menu boards.
// Prices are not listed here; the live menu at menu.pakliyarirestaurant.com has them.
const MENU = [
  {
    id: "breakfast",
    label: "Breakfast",
    note: "Served from the morning. Pairs well with a cup of doodh patti.",
    items: [
      { name: "Halwa Puri", desc: "Fried puri with semolina halwa and chana", tag: "Popular" },
      { name: "Nihari", desc: "Overnight slow-cooked beef shank stew", tag: "Signature" },
      { name: "Paya", desc: "Slow-simmered trotters in a rich, spiced broth" },
      { name: "Brain Masala", desc: "Brain cooked in onion-tomato masala" },
      { name: "Qeema Paratha", desc: "Flaky paratha stuffed with spiced mince" },
      { name: "Aloo Paratha", desc: "Paratha stuffed with spiced potato" },
      { name: "Paratha", desc: "Layered, buttery flatbread from the tawa" },
      { name: "Qeema", desc: "Minced meat cooked with peas and spices" },
      { name: "White Chana", desc: "Chickpeas in a light, tangy masala" },
      { name: "Maash Dal", desc: "Creamy white lentils, tempered with garlic" },
      { name: "Egg Omelette", desc: "Desi-style with onion, tomato and chilli" },
      { name: "Halwa", desc: "Sweet semolina halwa with ghee and nuts" },
    ],
  },
  {
    id: "biryani",
    label: "Biryani & Rice",
    note: "Our most-loved section, and the reason most guests first walk in.",
    items: [
      { name: "Mutton Biryani", desc: "Karachi-style, with bone-in mutton and potato", tag: "#1 Favourite" },
      { name: "Chicken Biryani", desc: "Fragrant basmati layered with spiced chicken", tag: "Popular" },
      { name: "Beef Pulao", desc: "Aromatic yakhni rice with tender beef", tag: "Friday" },
    ],
  },
  {
    id: "chicken",
    label: "Chicken",
    note: "Cooked fresh, best with hot roti or naan.",
    items: [
      { name: "Chicken Karahi", desc: "Wok-cooked with tomato, ginger and green chilli", tag: "Popular" },
      { name: "Chicken Peshawari", desc: "Lightly spiced, Peshawar-style karahi" },
      { name: "Chicken Green Masala", desc: "Chicken in a herby green chilli and coriander masala" },
      { name: "Chicken Qorma", desc: "Rich, onion-based curry with warm spices" },
      { name: "Chicken Palak", desc: "Chicken simmered with spinach" },
      { name: "Chicken Qeema", desc: "Minced chicken with onion and spices" },
      { name: "Chicken Chana", desc: "Chicken and chickpeas in masala gravy" },
    ],
  },
  {
    id: "mutton-beef",
    label: "Mutton & Beef",
    note: "Hearty, slow-cooked and full of flavour.",
    items: [
      { name: "Mutton Karahi", desc: "Tender mutton cooked to order in the karahi", tag: "Signature" },
      { name: "Nihari", desc: "Beef shank stew, garnished with ginger and lemon", tag: "Signature" },
      { name: "Beef Qeema", desc: "Spiced beef mince, home-style" },
      { name: "Brain Masala", desc: "Brain in a spicy masala" },
      { name: "Beef Haleem", desc: "Wheat, lentils and beef, slow-stirred for hours", tag: "Friday" },
    ],
  },
  {
    id: "bbq",
    label: "Barbecue",
    note: "Chargrilled over coals every evening.",
    items: [
      { name: "Seekh Kebab", desc: "Spiced mince skewers off the grill", tag: "Popular" },
      { name: "Chicken Boneless Tikka", desc: "Marinated boneless chicken, chargrilled" },
      { name: "Mutton Chop", desc: "Marinated mutton chops, grilled to order" },
      { name: "Mutton Boti", desc: "Tender mutton cubes on the skewer" },
      { name: "Beef Boti", desc: "Spiced beef cubes, smoky and juicy" },
    ],
  },
  {
    id: "veg",
    label: "Vegetables & Dal",
    note: "Comforting vegetarian classics.",
    items: [
      { name: "Dal Fry", desc: "Yellow lentils with a garlic-cumin tadka" },
      { name: "Channa Masala", desc: "Chickpeas in a tangy onion-tomato gravy" },
      { name: "Channa Dal", desc: "Split chickpea lentils, home-style" },
      { name: "Moong Dal", desc: "Light, comforting yellow moong lentils" },
      { name: "Anda Channa", desc: "Boiled eggs with spiced chickpeas" },
      { name: "Aloo Palak", desc: "Potato and spinach, gently spiced" },
      { name: "Bhindi", desc: "Okra stir-fried with onion and spices" },
      { name: "Mix Vegetables", desc: "Seasonal vegetables in a dry masala" },
    ],
  },
  {
    id: "sides",
    label: "Breads & Dessert",
    note: "The essentials.",
    items: [
      { name: "Roti", desc: "Fresh from the tandoor" },
      { name: "Paratha", desc: "Flaky, layered flatbread" },
      { name: "Kheer", desc: "Cardamom rice pudding with nuts", tag: "Guest favourite" },
    ],
  },
];

const tabsEl = document.querySelector(".tabs");
const panelEl = document.getElementById("menuPanel");

function renderPanel(cat) {
  panelEl.innerHTML = `
    <p class="menu-note">${cat.note}</p>
    <ul class="menu-list">
      ${cat.items
        .map(
          (it) => `
        <li class="menu-item">
          <div class="menu-item__top">
            <h3>${it.name}</h3>
            <span class="menu-item__line" aria-hidden="true"></span>
            ${it.tag ? `<span class="pill">${it.tag}</span>` : ""}
          </div>
          <p>${it.desc}</p>
        </li>`
        )
        .join("")}
    </ul>`;
  panelEl.setAttribute("aria-labelledby", `tab-${cat.id}`);
}

MENU.forEach((cat, i) => {
  const btn = document.createElement("button");
  btn.className = "tab";
  btn.id = `tab-${cat.id}`;
  btn.type = "button";
  btn.role = "tab";
  btn.textContent = cat.label;
  btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
  btn.setAttribute("aria-controls", "menuPanel");
  btn.tabIndex = i === 0 ? 0 : -1;
  btn.addEventListener("click", () => selectTab(i));
  tabsEl.appendChild(btn);
});

function selectTab(i, focus = false) {
  const tabs = tabsEl.querySelectorAll(".tab");
  tabs.forEach((t, j) => {
    t.setAttribute("aria-selected", j === i ? "true" : "false");
    t.tabIndex = j === i ? 0 : -1;
  });
  if (focus) tabs[i].focus();
  tabs[i].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  renderPanel(MENU[i]);
}

tabsEl.addEventListener("keydown", (e) => {
  const tabs = [...tabsEl.querySelectorAll(".tab")];
  const cur = tabs.indexOf(document.activeElement);
  if (cur < 0) return;
  if (e.key === "ArrowRight") selectTab((cur + 1) % tabs.length, true);
  if (e.key === "ArrowLeft") selectTab((cur - 1 + tabs.length) % tabs.length, true);
});

renderPanel(MENU[0]);

// Mobile navigation
const toggle = document.querySelector(".nav__toggle");
const mobileNav = document.getElementById("mobileNav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  mobileNav.hidden = open;
});
mobileNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  })
);

// Header shadow on scroll
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("nav--scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Reveal on scroll
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();
