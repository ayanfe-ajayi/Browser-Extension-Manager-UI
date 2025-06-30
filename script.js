const allBtn = document.getElementById('all-btn');
const activeBtn = document.getElementById('active-btn');
const inactiveBtn = document.getElementById('inactive-btn');
const extensionsContainer = document.getElementById('extensions-container');
const stored = JSON.parse(localStorage.getItem("extensions"));

const extensions = stored || [
    {
        id: 1, name: "Devlens",
        icon: "images/logo-devlens.svg",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        active: false,
    },
    {
        id: 2, name: "StyleSpy",
        icon: "images/logo-style-spy.svg",
        description: "Instantly analyze and copy CSS from any webpage element.",
        active: false,
    },
    {
        id: 3, name: "SpeedBoost",
        icon: "images/logo-speed-boost.svg",
        description: "Optimizes browser resource usage to accelerate page loading.",
        active: false,
    },
    {
        id: 4, name: "JSONWizard",
        icon: "images/logo-json-wizard.svg",
        description: "Formats, validates, and prettifies JSON responses in-browser.",
        active: false,
    },
    {
        id: 5, name: "TabMaster Pro",
        icon: "images/logo-tab-master-pro.svg",
        description: "Organizes browser tabs into groups and sessions.",
        active: false,
    },
    {
        id: 6, name: "viewportBuddy",
        icon: "images/logo-viewport-buddy.svg",
        description: "Simulates various screen resolutions directly within the browser.",
        active: false,
    },
    {
        id: 7, name: "Markup Notes",
        icon: "images/logo-markup-notes.svg",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        active: false,
    },
    {
        id: 8, name: "GridGuides",
        icon: "images/logo-grid-guides.svg",
        description: "Overlay customizable grids and alignment guides on any webpage.",
        active: false,
    },
    {
        id: 9, name: "Palette Picker",
        icon: "images/logo-palette-picker.svg",
        description: "Instantly extracts color palettes from any webpage.",
        active: false,
    },
    {
        id: 10, name: "LinkChecker",
        icon: "images/logo-link-checker.svg",
        description: "Scans and highlights broken links on any page.",
        active: false,
    },
    {
        id: 11, name: "DOM Snapshot",
        icon: "images/logo-dom-snapshot.svg",
        description: "Capture and export DOM structures quickly.",
        active: false,
    },
    {
        id: 12, name: "ConsolePlus",
        icon: "images/logo-console-plus.svg",
        description: "Enhanced developer console with advanced filtering and logging.",
        active: false,
    },

];

const renderExtenstions = (filter = "all") => {
    extensionsContainer.innerHTML = "";
    const filteredExtension = extensions.filter(ext => {
        if (filter === "active") {
            return ext.active;
        }
        if (filter === "inactive") {
            return !ext.active;
        }
    return extensions;
    })

    filteredExtension.forEach((ext) => {
    const card = document.createElement("div");
    card.className = "extension-wrapper";
    card.innerHTML = `
    <div class="name-and-logo-container">
            <img src="${ext.icon}" alt="${ext.name}" />
            <p>
              ${ext.name}
              <span>${ext.description}</span>
            </p>
          </div>
          <div class="button-container">
            <button class="btn" onclick = "removeExtension(${ext.id})">Remove</button>
            <label class="switch">
              <input class="checkbox" type="checkbox" ${ext.active? "checked" : ""} onchange = "toggleExtension(${ext.id}, this.checked)" />
              <span class="slider"></span>
            </label>
          </div>
    `;
    extensionsContainer.appendChild(card);
    })
}

const toggleExtension = (id, isActive) => {
   const ext = extensions.find(ext => ext.id === id);
   if(ext) {
    ext.active = isActive;
   }
}

const removeExtension = (id) => {
    const extensionIndex = extensions.findIndex(ext => ext.id === id);
    extensions.splice(extensionIndex, 1);
    renderExtenstions(currentFilter);
}

let currentFilter = "all";

allBtn.addEventListener("click", () => {
    renderExtenstions("all");
    currentFilter = "all";
    localStorage.setItem("extensions", JSON.stringify(extensions));
});

activeBtn.addEventListener("click", () => {
    renderExtenstions("active");
    currentFilter = "active";
    localStorage.setItem("extensions", JSON.stringify(extensions));
})

inactiveBtn.addEventListener("click", () => {
    renderExtenstions("inactive");
    currentFilter = "inactive";
    localStorage.setItem("extensions", JSON.stringify(extensions));
});

window.onload = () => renderExtenstions();

