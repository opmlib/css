  const toggle = document.getElementById("input");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", toggle.checked);
  });
  
const breakers = [
  { side: "left", slotStart: 42, slotEnd: 36, label: "Unused", category: "Unused / Blank", disabled: true },
  { side: "left", slotStart: 34, slotEnd: 34, label: "Portal", category: "Exterior / Entry", room: "Portal", amps: "20A", voltage: "120V" },
  { side: "left", slotStart: 32, slotEnd: 32, label: "Storage", category: "General Areas", room: "Storage", amps: "20A", voltage: "120V" },
  { side: "left", slotStart: 30, slotEnd: 30, label: "Air Conditioner", category: "A/C Units", room: "Unknown", amps: "20A", voltage: "240V" },
  { side: "left", slotStart: 28, slotEnd: 28, label: "Air Conditioner", category: "A/C Units", room: "Unknown", amps: "15A", voltage: "240V" },
  { side: "left", slotStart: 26, slotEnd: 24, label: "Air Conditioner", category: "A/C Units", room: "Unknown", amps: "15A", voltage: "240V" },
  { side: "left", slotStart: 22, slotEnd: 22, label: "Air Conditioner", category: "A/C Units", room: "Unknown", amps: "15A", voltage: "240V" },
  { side: "left", slotStart: 20, slotEnd: 20, label: "Air Conditioner", category: "A/C Units", room: "Unknown", amps: "15A", voltage: "240V" },
  { side: "left", slotStart: 18, slotEnd: 18, label: "Air Conditioner", category: "A/C Units", room: "Unknown", amps: "15A", voltage: "240V" },
  { side: "left", slotStart: 16, slotEnd: 16, label: "Camera", category: "Special Systems", room: "Security", amps: "20A", voltage: "120V" },
  { side: "left", slotStart: 14, slotEnd: 14, label: "Counter Outlets", category: "Kitchen", room: "Kitchen", amps: "15A", voltage: "120V" },
  { side: "left", slotStart: 12, slotEnd: 12, label: "Fridge Outlet", category: "Kitchen", room: "Kitchen", amps: "15A", voltage: "120V" },
  { side: "left", slotStart: 10, slotEnd: 10, label: "Living Room Outlets", category: "Living / Dining", room: "Living Room", amps: "20A", voltage: "120V" },
  { side: "left", slotStart: 8, slotEnd: 8, label: "Dishwasher", category: "Appliances", room: "Kitchen", amps: "20A", voltage: "120V" },
  { side: "left", slotStart: 6, slotEnd: 6, label: "Washer", category: "Appliances", room: "Laundry", amps: "20A", voltage: "120V" },
  { side: "left", slotStart: 4, slotEnd: 4, label: "Dryer Panel", category: "Appliances", room: "Laundry", amps: "50A", voltage: "240V" },
  { side: "left", slotStart: 2, slotEnd: 2, label: "Main Panel", category: "Special Systems", room: "Main Panel", amps: "50A", voltage: "240V" },

  { side: "right", slotStart: 41, slotEnd: 33, label: "Unused", category: "Unused / Blank", disabled: true },
  { side: "right", slotStart: 29, slotEnd: 27, label: "Air Conditioner", category: "A/C Units", room: "Unknown", amps: "20A", voltage: "240V" },
  { side: "right", slotStart: 25, slotEnd: 23, label: "Generator", category: "Special Systems", room: "Backup System", amps: "20A", voltage: "240V" },
  { side: "right", slotStart: 21, slotEnd: 21, label: "Counter Outlets", category: "Kitchen", room: "Kitchen", amps: "20A", voltage: "120V" },
  { side: "right", slotStart: 19, slotEnd: 19, label: "Counter Outlets", category: "Kitchen", room: "Kitchen", amps: "20A", voltage: "120V" },
  { side: "right", slotStart: 17, slotEnd: 17, label: "Outdoor Outlets", category: "Exterior / Entry", room: "Exterior", amps: "20A", voltage: "120V", gfci: true },
  { side: "right", slotStart: 15, slotEnd: 15, label: "Dining Outlets", category: "Living / Dining", room: "Dining Room", amps: "20A", voltage: "120V" },
  { side: "right", slotStart: 13, slotEnd: 13, label: "Microwave", category: "Kitchen", room: "Kitchen", amps: "20A", voltage: "120V" },
  { side: "right", slotStart: 11, slotEnd: 11, label: "Kitchen Spot Lights", category: "Kitchen", room: "Kitchen", amps: "20A", voltage: "120V" },
  { side: "right", slotStart: 9, slotEnd: 9, label: "Patio Outlet", category: "Exterior / Entry", room: "Patio", amps: "20A", voltage: "120V", gfci: true },
  { side: "right", slotStart: 7, slotEnd: 7, label: "Bedroom Outlets", category: "Bedrooms / Bathrooms", room: "Bedroom", amps: "20A", voltage: "120V" },
  { side: "right", slotStart: 5, slotEnd: 5, label: "Bedroom Outlets", category: "Bedrooms / Bathrooms", room: "Bedroom", amps: "20A", voltage: "120V" },
  { side: "right", slotStart: 3, slotEnd: 1, label: "Bathroom", category: "Bedrooms / Bathrooms", room: "Bathroom", amps: "20A", voltage: "120V", gfci: true }
];

const categoryOrder = [
  "A/C Units",
  "Kitchen",
  "Appliances",
  "Bedrooms / Bathrooms",
  "Living / Dining",
  "Exterior / Entry",
  "Special Systems",
  "General Areas",
  "Unused / Blank"
];

function slotLabel(item) {
  return item.slotStart === item.slotEnd
    ? item.slotStart
    : `${item.slotStart}–${item.slotEnd}`;
}

function specBadges(item) {
  if (item.disabled) return "";

  return `
    <div class="breaker-specs">
      <span class="breaker-spec">${item.amps || "N/A"}</span>
      <span class="breaker-spec">${item.voltage || "N/A"}</span>
      ${item.gfci ? `<span class="breaker-spec breaker-spec--gfci">GFCI</span>` : ""}
    </div>
  `;
}

function renderBreaker(item) {
  return `
    <div class="breaker ${item.disabled ? "breaker--unused" : ""}" title="${item.label} | Slots ${slotLabel(item)}">
      <div class="breaker__slot">${slotLabel(item)}</div>
      <div class="breaker__info">
        <div class="breaker__label">
          ${item.label}
          <small>${item.room || ""}</small>
        </div>
        ${specBadges(item)}
      </div>
    </div>
  `;
}

function renderPanelView() {
  const left = document.getElementById("leftBreakers");
  const right = document.getElementById("rightBreakers");

  left.innerHTML = breakers
    .filter(item => item.side === "left")
    .sort((a, b) => b.slotStart - a.slotStart)
    .map(renderBreaker)
    .join("");

  right.innerHTML = breakers
    .filter(item => item.side === "right")
    .sort((a, b) => b.slotStart - a.slotStart)
    .map(renderBreaker)
    .join("");
}

function renderCategoryView() {
  const container = document.getElementById("breakerCategories");
  container.innerHTML = "";

  categoryOrder.forEach(category => {
    const items = breakers
      .filter(item => item.category === category)
      .sort((a, b) => a.slotStart - b.slotStart);

    if (!items.length) return;

    const fieldset = document.createElement("fieldset");
    fieldset.className = "breaker-category";

    fieldset.innerHTML = `
      <legend>${category}</legend>
      <div class="breaker-category-grid">
        ${items.map(renderBreaker).join("")}
      </div>
    `;

    container.appendChild(fieldset);
  });
}

function setBreakerView(view) {
  document.getElementById("panelView").classList.toggle("is-active", view === "panel");
  document.getElementById("categoryView").classList.toggle("is-active", view === "category");
}

renderPanelView();
renderCategoryView();
