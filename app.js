/* ==========================================
   DEALMATE AI - WEB CORE AND PRICING ENGINE
   ========================================== */

// 1. Reference Product Catalog (50+ items)
const productCatalog = [
    // Laptops
    { name: "HP Victus 15", category: "Laptop", launchPrice: 65000, currentPrice: 55000, defaultIssues: ["battery_drain"] },
    { name: "MacBook Air M1", category: "Laptop", launchPrice: 92900, currentPrice: 70000, defaultIssues: [] },
    { name: "MacBook Air M2", category: "Laptop", launchPrice: 114900, currentPrice: 99000, defaultIssues: [] },
    { name: "MacBook Pro M3", category: "Laptop", launchPrice: 169900, currentPrice: 155000, defaultIssues: [] },
    { name: "Lenovo ThinkPad X1 Carbon", category: "Laptop", launchPrice: 150000, currentPrice: 135000, defaultIssues: [] },
    { name: "Dell XPS 13", category: "Laptop", launchPrice: 120000, currentPrice: 105000, defaultIssues: ["charger_replaced"] },
    { name: "Asus ROG Zephyrus G14", category: "Laptop", launchPrice: 145000, currentPrice: 120000, defaultIssues: ["battery_drain"] },
    { name: "Acer Predator Helios 300", category: "Laptop", launchPrice: 95000, currentPrice: 80000, defaultIssues: ["hinge_loose"] },
    { name: "HP Pavilion 15", category: "Laptop", launchPrice: 58000, currentPrice: 48000, defaultIssues: ["battery_drain"] },

    // Mobiles
    { name: "iPhone 13", category: "Mobile", launchPrice: 79900, currentPrice: 52000, defaultIssues: ["battery_health"] },
    { name: "iPhone 14 Pro", category: "Mobile", launchPrice: 129900, currentPrice: 100000, defaultIssues: [] },
    { name: "iPhone 15", category: "Mobile", launchPrice: 79900, currentPrice: 71000, defaultIssues: [] },
    { name: "Samsung Galaxy S23 Ultra", category: "Mobile", launchPrice: 124999, currentPrice: 95000, defaultIssues: [] },
    { name: "Samsung Galaxy S24", category: "Mobile", launchPrice: 79999, currentPrice: 74000, defaultIssues: [] },
    { name: "OnePlus 11", category: "Mobile", launchPrice: 56999, currentPrice: 48000, defaultIssues: ["back_scratches"] },
    { name: "Google Pixel 8 Pro", category: "Mobile", launchPrice: 106999, currentPrice: 89000, defaultIssues: [] },
    { name: "OnePlus Nord CE 3", category: "Mobile", launchPrice: 26999, currentPrice: 22000, defaultIssues: [] },
    { name: "Redmi Note 13 Pro", category: "Mobile", launchPrice: 25999, currentPrice: 23000, defaultIssues: [] },
    { name: "Samsung Galaxy A54", category: "Mobile", launchPrice: 38999, currentPrice: 32000, defaultIssues: [] },

    // Bikes
    { name: "Royal Enfield Classic 350", category: "Bike", launchPrice: 193000, currentPrice: 220000, defaultIssues: ["tyre_worn"] },
    { name: "Honda Activa 6G", category: "Bike", launchPrice: 74500, currentPrice: 82000, defaultIssues: ["scratches_dents"] },
    { name: "Yamaha YZF R15 V4", category: "Bike", launchPrice: 180000, currentPrice: 195000, defaultIssues: [] },
    { name: "KTM Duke 390", category: "Bike", launchPrice: 295000, currentPrice: 310000, defaultIssues: ["tyre_worn", "engine_noise"] },
    { name: "Suzuki Access 125", category: "Bike", launchPrice: 78000, currentPrice: 85000, defaultIssues: [] },
    { name: "Bajaj Pulsar NS200", category: "Bike", launchPrice: 140000, currentPrice: 149000, defaultIssues: ["chain_sprocket"] },
    { name: "TVS Apache RTR 160", category: "Bike", launchPrice: 118000, currentPrice: 125000, defaultIssues: ["insurance_exp"] },

    // Cameras
    { name: "Sony A7 III", category: "Camera", launchPrice: 165000, currentPrice: 140000, defaultIssues: ["grip_peeling"] },
    { name: "Canon EOS R6", category: "Camera", launchPrice: 215000, currentPrice: 185000, defaultIssues: [] },
    { name: "Fujifilm X-T5", category: "Camera", launchPrice: 169999, currentPrice: 169999, defaultIssues: [] },
    { name: "Nikon Z6 II", category: "Camera", launchPrice: 139999, currentPrice: 125000, defaultIssues: ["sensor_dust"] },
    { name: "GoPro Hero 12 Black", category: "Camera", launchPrice: 45000, currentPrice: 38000, defaultIssues: [] },
    { name: "DJI Pocket 3", category: "Camera", launchPrice: 45000, currentPrice: 49000, defaultIssues: [] },
    { name: "Sony Alpha 6400", category: "Camera", launchPrice: 75000, currentPrice: 68000, defaultIssues: ["lens_scratches"] },

    // Furniture
    { name: "Wooden Queen Bed", category: "Furniture", launchPrice: 25000, currentPrice: 22000, defaultIssues: ["wood_scratches"] },
    { name: "Leather 3-Seater Sofa", category: "Furniture", launchPrice: 45000, currentPrice: 38000, defaultIssues: ["fabric_stains"] },
    { name: "Ergonomic Office Chair", category: "Furniture", launchPrice: 12000, currentPrice: 9500, defaultIssues: [] },
    { name: "Solid Wood Dining Table", category: "Furniture", launchPrice: 35000, currentPrice: 30000, defaultIssues: ["loose_joints"] },
    { name: "Study Desk with Drawers", category: "Furniture", launchPrice: 10000, currentPrice: 8500, defaultIssues: [] }
];

// 2. Predefined Category Issues & Repair Deductions
const categoryIssues = {
    Laptop: {
        battery_drain: { desc: "Battery drains fast / backup low", cost: 4000 },
        screen_scratches: { desc: "Minor screen scratches / spots", cost: 1500 },
        keyboard_faulty: { desc: "Faulty keys / keyboard issue", cost: 2500 },
        charger_replaced: { desc: "Charger replaced (non-original)", cost: 1000 },
        hinge_loose: { desc: "Loose screen hinges", cost: 1500 }
    },
    Mobile: {
        battery_health: { desc: "Low battery health (< 80%)", cost: 3000 },
        screen_crack: { desc: "Cracked screen glass", cost: 6000 },
        back_scratches: { desc: "Scratches on back / sides", cost: 1000 },
        camera_dust: { desc: "Camera lens scratch/dust", cost: 2000 },
        no_face_id: { desc: "Face ID / Fingerprint faulty", cost: 4000 }
    },
    Bike: {
        tyre_worn: { desc: "Tyres worn out (need replacing)", cost: 4000 },
        scratches_dents: { desc: "Scratches/Dents on tank or body", cost: 2000 },
        engine_noise: { desc: "Engine noise / servicing needed", cost: 5000 },
        insurance_exp: { desc: "Insurance expired / expired soon", cost: 2000 },
        chain_sprocket: { desc: "Chain sprocket set worn out", cost: 2500 }
    },
    Car: {
        engine_head: { desc: "Engine service / oil leaks detected", cost: 10000 },
        gearbox_slip: { desc: "Gearbox lag / clutch slipping", cost: 15000 },
        tyre_set: { desc: "All 4 tyres worn out (needs replacement)", cost: 12000 },
        suspension_noise: { desc: "Suspension rattling / leak struts", cost: 8000 },
        scratches_dents: { desc: "Major panel scratches or dents", cost: 8000 }
    },
    TV: {
        burn_in: { desc: "Screen burn-in / dead pixel lines", cost: 12000 },
        ports_broken: { desc: "Faulty HDMI or USB ports", cost: 2500 },
        sound_distort: { desc: "Crackling sound / speaker rattle", cost: 3000 },
        remote_missing: { desc: "Original remote control missing", cost: 1000 },
        laggy_os: { desc: "Smart TV OS extremely laggy", cost: 1500 }
    },
    HomeAppliance: {
        compressor_fault: { desc: "Compressor / motor faulty", cost: 6000 },
        cabinet_rust: { desc: "Cabinet rust / body dents", cost: 2500 },
        leakage: { desc: "Water leakage / gas leak", cost: 2000 },
        noisy_fan: { desc: "Loud operational noise", cost: 1500 }
    },
    FruitsVegetables: {
        bruised: { desc: "Bruised / overripe / soft spots", cost: 40 },
        spoiled: { desc: "Partially spoiled / rotten parts", cost: 80 },
        size_small: { desc: "Underdeveloped / very small size", cost: 20 },
        stale: { desc: "Stale / dry / stored for long", cost: 30 }
    },
    Camera: {
        sensor_dust: { desc: "Dust on sensor (cleaning required)", cost: 2000 },
        lens_scratches: { desc: "Scratches on front/rear element", cost: 4000 },
        autofocus_slow: { desc: "Autofocus lagging/noisy", cost: 3000 },
        grip_peeling: { desc: "Rubber body grip peeling off", cost: 1000 }
    },
    Furniture: {
        sagging_cushion: { desc: "Sagging cushion / broken spring", cost: 2000 },
        wood_scratches: { desc: "Surface scratches / paint peel", cost: 1000 },
        loose_joints: { desc: "Wobbling legs / loose joints", cost: 1500 },
        fabric_stains: { desc: "Fabric stains / small tears", cost: 1500 }
    },
    Other: {
        minor_wear: { desc: "Minor cosmetic scratches", cost: 500 },
        major_scratches: { desc: "Major scratches or dents", cost: 1500 },
        malfunction: { desc: "Functional issue / lagging response", cost: 3000 }
    }
};

// 3. Pre-Payment Physical Checklists
const categoryChecklists = {
    Laptop: [
        { title: "Display Quality", desc: "Check for dead pixels, lines, or spots at max brightness." },
        { title: "Keyboard & Trackpad", desc: "Open a text file and test every key. Check click sensitivity." },
        { title: "Battery & Charger", desc: "Plug in charger, check charging speed and battery wear level in OS." },
        { title: "All Ports & Wi-Fi", desc: "Insert a pendrive in all USB ports. Test Wi-Fi and Bluetooth connectivity." },
        { title: "Physical Hinge", desc: "Open and close the lid to feel if hinges are smooth and stable." }
    ],
    Mobile: [
        { title: "Screen Touch", desc: "Drag an icon across the entire screen grid to check for touch dead zones." },
        { title: "Speaker & Mic", desc: "Record a quick voice note and play it back. Test calling." },
        { title: "Cameras & Flash", desc: "Take photos with front/rear cameras. Check autofocus and flash." },
        { title: "Battery Charging", desc: "Plug into a power bank for 5 mins to ensure charging doesn't drop." },
        { title: "SIM & IMEI Lock", desc: "Insert your SIM card. Make a call. Verify IMEI is clean." }
    ],
    Bike: [
        { title: "Documents check", desc: "Match RC Book serial numbers, check insurance validity and pollution certificate." },
        { title: "Engine Sound", desc: "Cold start engine, listen for abnormal rattling noises or exhaust smoke." },
        { title: "Braking & Suspensions", desc: "Test front/rear brakes. Push front forks down to check fluid leaks." },
        { title: "Tyres & Rims", desc: "Check tread depth and check alloy/spoke wheels for bends." },
        { title: "Electric Controls", desc: "Test headlamp, pass light, indicators, horn, and digital dashboard." }
    ],
    Car: [
        { title: "Engine & Exhaust", desc: "Check underhood for oil leaks. Start engine, verify no white/blue smoke from exhaust." },
        { title: "Transmission & Clutch", desc: "Test drive. Verify gear shifts are smooth without slipping or grinding." },
        { title: "Suspension & Steering", desc: "Drive over speedbumps to check for clunking noises. Verify car doesn't pull to one side." },
        { title: "Chassis & Accident History", desc: "Check panel gaps. Verify no welds or major repaint on frame columns." },
        { title: "Electricals & AC", desc: "Check infotainment system, power windows, and verify AC cooling is fast." }
    ],
    TV: [
        { title: "Screen Uniformity", desc: "Display a solid white screen. Check for vertical lines, dark spots, or color distortion." },
        { title: "HDMI & Ports", desc: "Plug a device into all HDMI ports to ensure signals are detected properly." },
        { title: "Speaker Rattle", desc: "Turn volume to 80% with bass-heavy music. Check for housing vibration or rattling sound." },
        { title: "Smart OS Check", desc: "Navigate menus, launch YouTube/Netflix to check responsiveness and connection." }
    ],
    HomeAppliance: [
        { title: "Motor / Compressor", desc: "Verify item cools/heats/spins correctly. Listen for loud hums or vibration." },
        { title: "Body Rust & Integrity", desc: "Inspect lower panels and metal joints for rust or corrosion spots." },
        { title: "Seal & Gaskets", desc: "Verify rubber door seals lock tightly. Check for gaps or cracks." },
        { title: "Plumbing & Leaks", desc: "Check water hoses and outlets for any drip marks or pressure issues." }
    ],
    FruitsVegetables: [
        { title: "Flesh Firmness", desc: "Press gently. It should be firm, not mushy (overripe) or rock-hard (underripe)." },
        { title: "Skin Integrity", desc: "Inspect for dark spots, insect holes, wrinkles, or fungal molds." },
        { title: "Aroma check", desc: "Fresh produce has a mild, sweet, or earthy smell. Avoid sour or fermented smells." },
        { title: "Size & Weight", desc: "Pick items that feel heavy for their size, indicating high water/juice content." }
    ],
    Camera: [
        { title: "Sensor Check", desc: "Remove lens, shine phone light inside to look for scratches or dust." },
        { title: "Focus Rings", desc: "Mount lens, verify manual zoom and focus rings rotate smoothly." },
        { title: "Shutter Count", desc: "Take a photo, upload to check shutter wear vs rated lifespan." },
        { title: "SD Card Slot", desc: "Insert card, shoot a short video to verify fast read/write speeds." },
        { title: "Hot Shoe & Buttons", desc: "Check flash connector and test all function dials." }
    ],
    Furniture: [
        { title: "Wobble Test", desc: "Sit/lean heavily to ensure there is no creaking or structural instability." },
        { title: "Termites & Rotting", desc: "Inspect underside and corners for fine dust indicating wood termites." },
        { title: "Drawers & Slides", desc: "Pull out drawers fully to verify slides/runners function smoothly." },
        { title: "Upholstery & Foam", desc: "Press cushions to see if they bounce back or remain depressed." }
    ],
    Other: [
        { title: "Power Supply", desc: "Keep device switched on for 10 minutes to test overheating issues." },
        { title: "Port Connections", desc: "Inspect ports for rust, corrosion, or physical damage." },
        { title: "Verify Authenticity", desc: "Search the brand serial number online to check the model year." }
    ]
};

// 4. State Management
let customIssues = [];
let analyzedDealsHistory = JSON.parse(localStorage.getItem("dealmate_history") || "[]");
let currentAnalysis = null;
let currentSimStep = 0;
let selectedTone = "friendly";
let lastFetchedAIData = null;

// 5. DOM Elements
const doc = document;
const els = {
    themeToggle: doc.getElementById("theme-toggle"),
    btnHistory: doc.getElementById("btn-history"),
    historyModal: doc.getElementById("history-modal"),
    closeHistoryModal: doc.getElementById("close-history-modal"),
    btnClearHistory: doc.getElementById("btn-clear-history"),
    historyContainer: doc.getElementById("history-listings-container"),
    historyEmptyState: doc.getElementById("history-empty-state"),
    
    catalogSearch: doc.getElementById("catalog-search"),
    catalogDropdown: doc.getElementById("catalog-dropdown"),
    clearSearch: doc.getElementById("clear-search"),
    
    dealForm: doc.getElementById("deal-form"),
    productName: doc.getElementById("product-name"),
    productCategory: doc.getElementById("product-category"),
    sellerPrice: doc.getElementById("seller-price"),
    launchPrice: doc.getElementById("launch-price"),
    newPrice: doc.getElementById("new-price"),
    usedAgeVal: doc.getElementById("used-age-val"),
    usedAgeUnit: doc.getElementById("used-age-unit"),
    customIssueName: doc.getElementById("custom-issue-name"),
    customIssueCost: doc.getElementById("custom-issue-cost"),
    btnAddCustomIssue: doc.getElementById("btn-add-custom-issue"),
    customIssuesChipsList: doc.getElementById("custom-issues-chips-list"),
    categoryIssuesList: doc.getElementById("category-issues-list"),
    location: doc.getElementById("location"),
    urgency: doc.getElementById("urgency"),
    btnAnalyze: doc.getElementById("btn-analyze"),
    
    // Results
    resultPlaceholder: doc.getElementById("result-placeholder"),
    resultDashboard: doc.getElementById("result-dashboard"),
    
    scoreNumber: doc.getElementById("score-number"),
    gaugeFillCircle: doc.getElementById("gauge-fill-circle"),
    scoreVerdictPill: doc.getElementById("score-verdict-pill"),
    scoreVerdictTitle: doc.getElementById("score-verdict-title"),
    scoreVerdictDesc: doc.getElementById("score-verdict-desc"),
    
    // Markers
    markerOffer: doc.getElementById("marker-offer"),
    markerMax: doc.getElementById("marker-max"),
    markerSeller: doc.getElementById("marker-seller"),
    valMarkerOffer: doc.getElementById("val-marker-offer"),
    valMarkerMax: doc.getElementById("val-marker-max"),
    valMarkerSeller: doc.getElementById("val-marker-seller"),
    labelLaunchPrice: doc.getElementById("label-launch-price"),
    labelNewPrice: doc.getElementById("label-new-price"),
    
    // Details
    valStartingOffer: doc.getElementById("val-starting-offer"),
    valFairRange: doc.getElementById("val-fair-range"),
    valHardStop: doc.getElementById("val-hard-stop"),
    valTotalDeducted: doc.getElementById("val-total-deducted"),
    deductionsListItems: doc.getElementById("deductions-list-items"),
    aiVerdictQuote: doc.getElementById("ai-verdict-quote"),
    
    // Search panel
    searchLinksGrid: doc.getElementById("search-links-grid"),
    optimizedQueryText: doc.getElementById("optimized-query-text"),
    btnCopyQuery: doc.getElementById("btn-copy-query"),
    
    // Negotiation script
    negotiationMessage: doc.getElementById("negotiation-message"),
    btnCopyMessage: doc.getElementById("btn-copy-message"),
    toneChips: doc.querySelectorAll(".tone-chip"),
    
    // Simulator
    chatMessagesBox: doc.getElementById("chat-messages-box"),
    chatChoicesList: doc.getElementById("chat-choices-list"),
    btnResetChat: doc.getElementById("btn-reset-chat"),
    
    // Checklist
    checklistItemsBox: doc.getElementById("checklist-items-box"),

    // API settings & loader
    btnApiSettings: doc.getElementById("btn-api-settings"),
    closeApiModal: doc.getElementById("close-api-modal"),
    apiModal: doc.getElementById("api-modal"),
    btnSaveApiKey: doc.getElementById("btn-save-api-key"),
    apiKeyInput: doc.getElementById("api-key-input"),
    btnFetchAi: doc.getElementById("btn-fetch-ai"),
    loadingOverlay: doc.getElementById("loading-overlay")
};

// 6. Theme Initialization & Control
const initTheme = () => {
    const savedTheme = localStorage.getItem("dealmate_theme") || "dark";
    doc.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
};

const updateThemeIcon = (theme) => {
    const icon = els.themeToggle.querySelector("i");
    if (theme === "dark") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
};

els.themeToggle.addEventListener("click", () => {
    const currentTheme = doc.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    doc.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("dealmate_theme", newTheme);
    updateThemeIcon(newTheme);
});

// 7. Product Catalog Autocomplete Autocomplete
els.catalogSearch.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length === 0) {
        els.catalogDropdown.style.display = "none";
        els.clearSearch.style.display = "none";
        return;
    }
    
    els.clearSearch.style.display = "block";
    const filtered = productCatalog.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );
    
    if (filtered.length === 0) {
        els.catalogDropdown.innerHTML = `<li class="catalog-item text-muted">No items match. Just fill out the form directly on the left!</li>`;
    } else {
        els.catalogDropdown.innerHTML = filtered.map(item => `
            <li class="catalog-item" data-name="${item.name}">
                <div class="catalog-item-name">${item.name}</div>
                <div class="catalog-item-meta">
                    <span><i class="fa-solid fa-tags"></i> ${item.category}</span>
                    <span>Launch: ₹${item.launchPrice.toLocaleString('en-IN')}</span>
                    <span>New: ₹${item.currentPrice.toLocaleString('en-IN')}</span>
                </div>
            </li>
        `).join("");
    }
    els.catalogDropdown.style.display = "block";
});

els.clearSearch.addEventListener("click", () => {
    els.catalogSearch.value = "";
    els.catalogDropdown.style.display = "none";
    els.clearSearch.style.display = "none";
});

// Close dropdown on click outside
doc.addEventListener("click", (e) => {
    if (!els.catalogSearch.contains(e.target) && !els.catalogDropdown.contains(e.target)) {
        els.catalogDropdown.style.display = "none";
    }
});

// Select catalog item
els.catalogDropdown.addEventListener("click", (e) => {
    const itemEl = e.target.closest(".catalog-item");
    if (!itemEl || itemEl.classList.contains("text-muted")) return;
    
    const name = itemEl.getAttribute("data-name");
    const item = productCatalog.find(p => p.name === name);
    if (!item) return;
    
    // Auto fill form
    els.productName.value = item.name;
    els.productCategory.value = item.category;
    els.launchPrice.value = item.launchPrice;
    els.newPrice.value = item.currentPrice;
    
    // Clear old custom issues and reload predefined list
    customIssues = [];
    renderCustomChips();
    updatePredefinedIssues(item.category, item.defaultIssues);
    
    els.catalogDropdown.style.display = "none";
    els.catalogSearch.value = "";
    els.clearSearch.style.display = "none";
    
    // Scroll to form
    els.productName.focus();
});

// 8. Predefined and Custom Issues Setup
const updatePredefinedIssues = (category, preSelectedKeys = []) => {
    const issues = categoryIssues[category] || categoryIssues.Other;
    els.categoryIssuesList.innerHTML = Object.entries(issues).map(([key, info]) => `
        <label class="issue-item">
            <input type="checkbox" name="predef-issue" value="${key}" ${preSelectedKeys.includes(key) ? "checked" : ""}>
            <span>${info.desc}</span>
            <span class="issue-cost-badge">-₹${info.cost.toLocaleString('en-IN')}</span>
        </label>
    `).join("");
};

const updateAccessoriesLabels = (category) => {
    const lblCharger = doc.getElementById("lbl-acc-charger");
    const lblBox = doc.getElementById("lbl-acc-box");
    const lblBill = doc.getElementById("lbl-acc-bill");
    const lblWarranty = doc.getElementById("lbl-acc-warranty");
    const accContainer = doc.querySelector(".accessories-grid").closest(".form-group");
    
    if (category === "FruitsVegetables") {
        accContainer.style.display = "none";
        return;
    }
    accContainer.style.display = "block";
    
    if (category === "Car") {
        lblCharger.innerHTML = `<i class="fa-solid fa-key"></i> Spare Key`;
        lblBox.innerHTML = `<i class="fa-solid fa-toolbox"></i> Spare/Toolkit`;
        lblBill.innerHTML = `<i class="fa-solid fa-file-invoice"></i> RC Book / Papers`;
        lblWarranty.innerHTML = `<i class="fa-solid fa-building-columns"></i> Active Insurance`;
    } else if (category === "Bike") {
        lblCharger.innerHTML = `<i class="fa-solid fa-key"></i> Spare Key`;
        lblBox.innerHTML = `<i class="fa-solid fa-screwdriver"></i> Toolkit`;
        lblBill.innerHTML = `<i class="fa-solid fa-file-invoice"></i> RC Book / Papers`;
        lblWarranty.innerHTML = `<i class="fa-solid fa-building-columns"></i> Active Insurance`;
    } else {
        lblCharger.innerHTML = `<i class="fa-solid fa-plug"></i> Charger`;
        lblBox.innerHTML = `<i class="fa-solid fa-box"></i> Original Box`;
        lblBill.innerHTML = `<i class="fa-solid fa-file-invoice-dollar"></i> Bill / Invoice`;
        lblWarranty.innerHTML = `<i class="fa-solid fa-shield-halved"></i> Active Warranty`;
    }
};

els.productCategory.addEventListener("change", (e) => {
    const cat = e.target.value;
    updatePredefinedIssues(cat);
    updateAccessoriesLabels(cat);
});

// Custom issues management
els.btnAddCustomIssue.addEventListener("click", () => {
    const name = els.customIssueName.value.trim();
    const cost = parseInt(els.customIssueCost.value);
    
    if (!name || isNaN(cost) || cost <= 0) return;
    
    customIssues.push({ name, cost });
    renderCustomChips();
    
    els.customIssueName.value = "";
    els.customIssueCost.value = "";
});

const renderCustomChips = () => {
    els.customIssuesChipsList.innerHTML = customIssues.map((issue, idx) => `
        <span class="custom-chip">
            <span>${issue.name}</span>
            <span class="chip-cost">-₹${issue.cost.toLocaleString('en-IN')}</span>
            <button type="button" class="remove-chip-btn" onclick="removeCustomIssue(${idx})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </span>
    `).join("");
};

window.removeCustomIssue = (index) => {
    customIssues.splice(index, 1);
    renderCustomChips();
};

// 9. Pricing Engine and Calculations Logic
const calculateDepreciationFactor = (ageYears, category) => {
    const curves = {
        Laptop: [0.25, 0.40, 0.52, 0.62, 0.70],
        Mobile: [0.35, 0.50, 0.65, 0.75, 0.85],
        Bike: [0.15, 0.25, 0.35, 0.45, 0.55],
        Car: [0.15, 0.25, 0.35, 0.42, 0.50],
        TV: [0.25, 0.40, 0.55, 0.65, 0.75],
        HomeAppliance: [0.20, 0.35, 0.48, 0.58, 0.68],
        FruitsVegetables: [0.10, 0.30, 0.50, 0.75, 0.90], // Day 1 to Day 5 decay
        Camera: [0.20, 0.32, 0.42, 0.52, 0.62],
        Furniture: [0.30, 0.45, 0.55, 0.65, 0.75],
        Other: [0.20, 0.35, 0.48, 0.58, 0.68]
    };
    
    const curve = curves[category] || curves.Other;
    const wholeYears = Math.floor(ageYears);
    const fraction = ageYears - wholeYears;
    
    if (wholeYears >= curve.length) {
        return curve[curve.length - 1]; // cap depreciation at maximum age curve
    }
    
    const startVal = wholeYears === 0 ? 0 : curve[wholeYears - 1];
    const endVal = curve[wholeYears];
    
    // Linear interpolation between the two years
    return startVal + fraction * (endVal - startVal);
};

const runDealAnalysis = () => {
    const name = els.productName.value.trim();
    const category = els.productCategory.value;
    const sellerPrice = parseInt(els.sellerPrice.value);
    const launchPrice = parseInt(els.launchPrice.value) || 0;
    const newPrice = parseInt(els.newPrice.value);
    const ageVal = parseFloat(els.usedAgeVal.value);
    const ageUnit = els.usedAgeUnit.value;
    const condition = doc.querySelector('input[name="condition"]:checked').value;
    const urgency = els.urgency.value;
    const locationVal = els.location.value.trim() || "Hyderabad";
    
    if (!name || !category || isNaN(sellerPrice) || isNaN(newPrice) || isNaN(ageVal)) {
        alert("Please fill out all required fields marked with an asterisk (*).");
        return;
    }
    
    // Age calculations
    const ageYears = ageUnit === "months" ? ageVal / 12 : (ageUnit === "days" ? ageVal / 365 : ageVal);
    
    let ageForDepreciation = ageYears;
    if (category === "FruitsVegetables") {
        if (ageUnit === "years") ageForDepreciation = ageVal * 365;
        else if (ageUnit === "months") ageForDepreciation = ageVal * 30;
        else ageForDepreciation = ageVal; // days
    }
    
    // Step 1: Base Depreciation by Age
    const depFactor = calculateDepreciationFactor(ageForDepreciation, category);
    const ageDepreciationCost = Math.round(newPrice * depFactor);
    let currentVal = newPrice - ageDepreciationCost;
    
    // Step 2: Condition Modifier
    const conditionMultipliers = {
        Excellent: 1.0,
        Good: 0.90, // 10% reduction
        Average: 0.75, // 25% reduction
        Poor: 0.55 // 45% reduction
    };
    const condMultiplier = conditionMultipliers[condition];
    const conditionDepreciationCost = Math.round(currentVal * (1 - condMultiplier));
    currentVal = Math.round(currentVal * condMultiplier);
    
    // Step 3: Predefined issue deductions
    let issueDeductionsCost = 0;
    const selectedPredefCheckboxes = doc.querySelectorAll('input[name="predef-issue"]:checked');
    const issuesData = categoryIssues[category] || categoryIssues.Other;
    const issuesApplied = [];
    
    selectedPredefCheckboxes.forEach(cb => {
        const key = cb.value;
        const issue = issuesData[key];
        if (issue) {
            issueDeductionsCost += issue.cost;
            issuesApplied.push({ name: issue.desc, cost: issue.cost });
        }
    });
    
    // Step 4: Custom issue deductions
    customIssues.forEach(issue => {
        issueDeductionsCost += issue.cost;
        issuesApplied.push({ name: issue.name, cost: issue.cost });
    });
    
    // Step 5: Accessories Penalties
    let accessoriesDeductionsCost = 0;
    const accApplied = [];
    
    const accessoriesWeight = {
        charger: { penalty: 1500, label: "No Charger" },
        box: { penalty: 500, label: "No Box / Packaging" },
        bill: { penalty: 1000, label: "No Original Bill" },
        warranty: { penalty: 2000, label: "No Active Warranty" }
    };
    
    // Modify labels and penalties based on category
    if (category === "FruitsVegetables") {
        accessoriesWeight.charger.penalty = 0;
        accessoriesWeight.box.penalty = 0;
        accessoriesWeight.bill.penalty = 0;
        accessoriesWeight.warranty.penalty = 0;
    } else if (category === "Car") {
        accessoriesWeight.charger.penalty = 5000;
        accessoriesWeight.charger.label = "No Spare Key";
        accessoriesWeight.box.penalty = 3000;
        accessoriesWeight.box.label = "No Spare Tyre / Toolkit";
        accessoriesWeight.bill.penalty = 20000;
        accessoriesWeight.bill.label = "No Registration Book (RC)";
        accessoriesWeight.warranty.penalty = 5000;
        accessoriesWeight.warranty.label = "No Active Insurance";
    } else if (category === "Bike") {
        accessoriesWeight.charger.penalty = 2000;
        accessoriesWeight.charger.label = "No Spare Key";
        accessoriesWeight.box.penalty = 1000;
        accessoriesWeight.box.label = "No Toolkit";
        accessoriesWeight.bill.penalty = 5000;
        accessoriesWeight.bill.label = "No Registration Papers (RC)";
        accessoriesWeight.warranty.penalty = 2000;
        accessoriesWeight.warranty.label = "No Active Insurance";
    } else if (category === "Furniture") {
        accessoriesWeight.charger.penalty = 0;
        accessoriesWeight.box.penalty = 0;
        accessoriesWeight.bill.penalty = 1000;
        accessoriesWeight.warranty.penalty = 0;
    }
    
    // Run checks manually due to dynamic property name dashes
    if (doc.getElementById("acc-charger") && !doc.getElementById("acc-charger").checked) {
        accessoriesDeductionsCost += accessoriesWeight.charger.penalty;
        accApplied.push({ name: accessoriesWeight.charger.label, cost: accessoriesWeight.charger.penalty });
    }
    if (doc.getElementById("acc-box") && !doc.getElementById("acc-box").checked) {
        accessoriesDeductionsCost += accessoriesWeight.box.penalty;
        accApplied.push({ name: accessoriesWeight.box.label, cost: accessoriesWeight.box.penalty });
    }
    if (doc.getElementById("acc-bill") && !doc.getElementById("acc-bill").checked) {
        accessoriesDeductionsCost += accessoriesWeight.bill.penalty;
        accApplied.push({ name: accessoriesWeight.bill.label, cost: accessoriesWeight.bill.penalty });
    }
    if (doc.getElementById("acc-warranty") && !doc.getElementById("acc-warranty").checked) {
        accessoriesDeductionsCost += accessoriesWeight.warranty.penalty;
        accApplied.push({ name: accessoriesWeight.warranty.label, cost: accessoriesWeight.warranty.penalty });
    }

    // Step 6: Compute Final Fair Price
    const totalDeductions = issueDeductionsCost + accessoriesDeductionsCost;
    let fairPrice = currentVal - totalDeductions;
    
    // Security Floor & Ceiling caps
    const absoluteFloor = Math.round(newPrice * 0.12);
    const absoluteCeiling = Math.round(newPrice * 0.95);
    
    if (fairPrice < absoluteFloor) fairPrice = absoluteFloor;
    if (fairPrice > absoluteCeiling) fairPrice = absoluteCeiling;
    
    // Urgency Modifier adjustments
    let startingOfferMultiplier = 0.82; // Normal
    let hardStopMultiplier = 1.05; // Normal
    
    if (urgency === "BestDeal") {
        startingOfferMultiplier = 0.77; // aggressive start
        hardStopMultiplier = 0.96; // strict stop
    } else if (urgency === "Quick") {
        startingOfferMultiplier = 0.88; // friendly start
        hardStopMultiplier = 1.13; // flexible stop
    }
    
    let startingOffer = Math.round(fairPrice * startingOfferMultiplier);
    let maxSafePrice = fairPrice;
    let hardStopPrice = Math.round(fairPrice * hardStopMultiplier);
    
    // Capping logic check
    if (startingOffer > sellerPrice) {
        startingOffer = Math.round(sellerPrice * 0.90);
    }
    if (hardStopPrice > newPrice) {
        hardStopPrice = Math.round(newPrice * 0.95);
    }
    
    const fairPriceRangeMin = Math.round(fairPrice * 0.92);
    const fairPriceRangeMax = Math.round(fairPrice * 1.04);
    
    // Step 7: Deal Score Rating Engine
    const priceRatio = fairPrice / sellerPrice;
    let score = 0;
    
    if (priceRatio >= 1.25) {
        score = 85 + Math.round((priceRatio - 1.25) * 40); // Bargain
    } else if (priceRatio >= 1.0) {
        score = 70 + Math.round((priceRatio - 1.0) * 60); // Good offer
    } else if (priceRatio >= 0.80) {
        score = 50 + Math.round((priceRatio - 0.80) * 100); // Fair but requires negotiation
    } else {
        score = Math.max(10, Math.round(priceRatio * 60)); // Rip off
    }
    
    if (score > 100) score = 100;
    
    // Determine Score Verdicts
    let verdictKey = "";
    let verdictTitle = "";
    let verdictDesc = "";
    
    if (score >= 80) {
        verdictKey = "good";
        verdictTitle = "Good Deal";
        verdictDesc = `Excellent value! The asking price (₹${sellerPrice.toLocaleString('en-IN')}) is below or extremely close to the calculated fair price. Highly recommended to buy.`;
    } else if (score >= 60) {
        verdictKey = "negotiate";
        verdictTitle = "Negotiate";
        verdictDesc = `A reasonable option, but overvalued. Negotiate down towards ₹${startingOffer.toLocaleString('en-IN')} or ₹${maxSafePrice.toLocaleString('en-IN')} to ensure you don't overpay.`;
    } else if (score >= 40) {
        verdictKey = "risky";
        verdictTitle = "Risky Deal";
        verdictDesc = `Overpriced. The product is used for ${ageVal} ${ageUnit} and has issues or missing items. Do not pay above ₹${maxSafePrice.toLocaleString('en-IN')}.`;
    } else {
        verdictKey = "dontbuy";
        verdictTitle = "Don't Buy";
        verdictDesc = `Extremely overpriced. The seller asking price is near or exceeds the value of a brand new unit after depreciation and wear. Stay away.`;
    }
    
    // Prepare results package
    currentAnalysis = {
        name,
        category,
        sellerPrice,
        launchPrice,
        newPrice,
        ageVal,
        ageUnit,
        condition,
        urgency,
        location: locationVal,
        ageYears,
        ageDepreciationCost,
        conditionDepreciationCost,
        issueDeductionsCost,
        accessoriesDeductionsCost,
        issuesApplied,
        accApplied,
        totalDeductions,
        fairPrice,
        fairPriceRangeMin,
        fairPriceRangeMax,
        startingOffer,
        maxSafePrice,
        hardStopPrice,
        score,
        verdictKey,
        verdictTitle,
        verdictDesc,
        lowestPricePlatform: (lastFetchedAIData && lastFetchedAIData.productName.toLowerCase() === name.toLowerCase()) ? lastFetchedAIData.lowestPricePlatform : null,
        lowestPriceValue: (lastFetchedAIData && lastFetchedAIData.productName.toLowerCase() === name.toLowerCase()) ? lastFetchedAIData.lowestPriceValue : null,
        lowestPriceUrl: (lastFetchedAIData && lastFetchedAIData.productName.toLowerCase() === name.toLowerCase()) ? lastFetchedAIData.lowestPriceUrl : null,
        otherPlatforms: (lastFetchedAIData && lastFetchedAIData.productName.toLowerCase() === name.toLowerCase()) ? lastFetchedAIData.otherPlatforms : null,
        timestamp: new Date().toLocaleDateString('en-IN', { hour: '2-digit', minute: '2-digit' })
    };
    
    // Save to LocalStorage History
    saveAnalysisToHistory(currentAnalysis);
    
    // Update dashboard UI
    updateDashboardUI();
};

const saveAnalysisToHistory = (analysis) => {
    // Prevent duplicate entries of exact same name/price/date
    analyzedDealsHistory = analyzedDealsHistory.filter(item => 
        !(item.name === analysis.name && item.sellerPrice === analysis.sellerPrice)
    );
    
    analyzedDealsHistory.unshift(analysis);
    if (analyzedDealsHistory.length > 20) analyzedDealsHistory.pop(); // keep history clean
    localStorage.setItem("dealmate_history", JSON.stringify(analyzedDealsHistory));
};

// 10. Dashboard UI Rendering and Animations
const updateDashboardUI = () => {
    if (!currentAnalysis) return;
    
    const data = currentAnalysis;
    
    // Hide Placeholder, Show Result Pane
    els.resultPlaceholder.style.display = "none";
    els.resultDashboard.style.display = "block";
    
    // Render Deal Score
    els.scoreNumber.textContent = data.score;
    
    // Radial gauge offset calculations: radius 40 has circumference = 2 * PI * 40 = 251.2
    const circumference = 251.2;
    const offset = circumference - (data.score / 100) * circumference;
    els.gaugeFillCircle.style.strokeDashoffset = offset;
    
    // Adjust colors of radial gauge path
    let strokeColor = "var(--danger)";
    if (data.score >= 80) strokeColor = "var(--success)";
    else if (data.score >= 60) strokeColor = "var(--secondary)";
    else if (data.score >= 40) strokeColor = "var(--warning)";
    els.gaugeFillCircle.style.stroke = strokeColor;
    
    // Update Verdict Title details
    els.scoreVerdictPill.textContent = data.verdictTitle.toUpperCase();
    els.scoreVerdictPill.className = `verdict-pill ${data.verdictKey}`;
    els.scoreVerdictTitle.textContent = data.verdictTitle === "Negotiate" ? "Negotiation Recommended" : data.verdictTitle;
    els.scoreVerdictDesc.textContent = data.verdictDesc;
    
    // Render Spectrum Markers
    // We map a relative percentage scale where Starting Offer = 20%, Max Safe = 50%, Hard Stop = 70%.
    // We then place the Seller's Asking Price relative to these zones.
    let offerPct = 20;
    let maxSafePct = 48;
    let hardStopPct = 65;
    let sellerPct = 85;
    
    // Let's compute a mathematically consistent percentage marker set
    // Safe Range is [StartingOffer, MaxSafePrice]
    const rangeSpan = data.newPrice - (data.startingOffer * 0.7);
    const normalize = (price) => {
        const offsetVal = price - (data.startingOffer * 0.7);
        const pct = (offsetVal / rangeSpan) * 100;
        return Math.max(5, Math.min(95, Math.round(pct)));
    };
    
    offerPct = normalize(data.startingOffer);
    maxSafePct = normalize(data.maxSafePrice);
    
    // Update labels and marker positions
    els.markerOffer.style.left = `${offerPct}%`;
    els.valMarkerOffer.textContent = `₹${Math.round(data.startingOffer / 100) / 10}k`;
    
    els.markerMax.style.left = `${maxSafePct}%`;
    els.valMarkerMax.textContent = `₹${Math.round(data.maxSafePrice / 100) / 10}k`;
    
    const sellerNormalizePct = normalize(data.sellerPrice);
    els.markerSeller.style.left = `${sellerNormalizePct}%`;
    els.valMarkerSeller.textContent = `₹${Math.round(data.sellerPrice / 100) / 10}k`;
    
    // Set custom background indicator based on seller position
    if (data.launchPrice > 0) {
        els.labelLaunchPrice.textContent = `Launch: ₹${Math.round(data.launchPrice / 1000)}k`;
        els.labelLaunchPrice.style.display = "block";
    } else {
        els.labelLaunchPrice.style.display = "none";
    }
    els.labelNewPrice.textContent = `Current New: ₹${Math.round(data.newPrice / 1000)}k`;
    
    // Details Tiles
    els.valStartingOffer.textContent = `₹${data.startingOffer.toLocaleString('en-IN')}`;
    els.valFairRange.textContent = `₹${data.fairPriceRangeMin.toLocaleString('en-IN')} – ₹${data.fairPriceRangeMax.toLocaleString('en-IN')}`;
    els.valHardStop.textContent = `₹${data.hardStopPrice.toLocaleString('en-IN')}`;
    
    // Price Depreciation Deductions Render
    let listHTML = "";
    
    // Age depreciation row
    listHTML += `
        <div class="deduction-row">
            <span class="deduction-label text-muted"><i class="fa-solid fa-clock"></i> Usage Age (${data.ageVal} ${data.ageUnit})</span>
            <span class="deduction-val">-₹${data.ageDepreciationCost.toLocaleString('en-IN')}</span>
        </div>
    `;
    
    // Condition depreciation row
    if (data.conditionDepreciationCost > 0) {
        listHTML += `
            <div class="deduction-row">
                <span class="deduction-label text-muted"><i class="fa-solid fa-shield-heart"></i> Condition (${data.condition})</span>
                <span class="deduction-val">-₹${data.conditionDepreciationCost.toLocaleString('en-IN')}</span>
            </div>
        `;
    }
    
    // Issues applied rows
    data.issuesApplied.forEach(issue => {
        listHTML += `
            <div class="deduction-row">
                <span class="deduction-label text-muted"><i class="fa-solid fa-screwdriver-wrench text-danger"></i> ${issue.name}</span>
                <span class="deduction-val">-₹${issue.cost.toLocaleString('en-IN')}</span>
            </div>
        `;
    });
    
    // Accessories applied rows
    data.accApplied.forEach(acc => {
        listHTML += `
            <div class="deduction-row">
                <span class="deduction-label text-muted"><i class="fa-solid fa-circle-minus text-warning"></i> Missing: ${acc.name}</span>
                <span class="deduction-val">-₹${acc.cost.toLocaleString('en-IN')}</span>
            </div>
        `;
    });
    
    els.deductionsListItems.innerHTML = listHTML;
    
    const totalDeductedAll = data.ageDepreciationCost + data.conditionDepreciationCost + data.totalDeductions;
    els.valTotalDeducted.textContent = `-₹${totalDeductedAll.toLocaleString('en-IN')}`;
    
    // AI Verdict Script Bubble
    let issueSummary = "";
    if (data.issuesApplied.length > 0) {
        issueSummary = " and has " + data.issuesApplied.slice(0,2).map(i => i.name.toLowerCase()).join(" & ") + " issues";
    } else {
        issueSummary = " but is in reasonable condition";
    }
    
    const customVerdict = `Start negotiation from ₹${data.startingOffer.toLocaleString('en-IN')}. If the seller agrees to sell between ₹${data.fairPriceRangeMin.toLocaleString('en-IN')} and ₹${data.fairPriceRangeMax.toLocaleString('en-IN')}, it is a fair transaction. Do not buy above ₹${data.hardStopPrice.toLocaleString('en-IN')} because the product is used for ${data.ageVal} ${data.ageUnit}${issueSummary}.`;
    els.aiVerdictQuote.textContent = `"${customVerdict}"`;
    
    // Render Live Lowest Price Finder Card
    const elLowestPriceCard = doc.getElementById("lowest-price-card");
    const elLowestPriceVal = doc.getElementById("lowest-price-val");
    const elLowestPricePlatform = doc.getElementById("lowest-price-platform");
    const elLowestPriceLink = doc.getElementById("lowest-price-link");
    const elComparisonTableBody = doc.getElementById("comparison-table-body");
    
    if (data.lowestPriceValue) {
        elLowestPriceCard.style.display = "block";
        elLowestPriceVal.textContent = `₹${data.lowestPriceValue.toLocaleString('en-IN')}`;
        elLowestPricePlatform.textContent = `on ${data.lowestPricePlatform}`;
        if (data.lowestPriceUrl) {
            elLowestPriceLink.href = data.lowestPriceUrl;
            elLowestPriceLink.style.display = "inline-flex";
        } else {
            elLowestPriceLink.style.display = "none";
        }
        
        let tableRows = `
            <tr style="background-color: rgba(16, 185, 129, 0.08); font-weight: bold;">
                <td>${data.lowestPricePlatform} (Lowest)</td>
                <td class="text-success">₹${data.lowestPriceValue.toLocaleString('en-IN')}</td>
                <td><a href="${data.lowestPriceUrl || '#'}" target="_blank" class="platform-link-icon"><i class="fa-solid fa-up-right-from-square"></i></a></td>
            </tr>
        `;
        
        if (data.otherPlatforms && Array.isArray(data.otherPlatforms)) {
            data.otherPlatforms.forEach(p => {
                if (p.platform.toLowerCase() !== data.lowestPricePlatform.toLowerCase()) {
                    tableRows += `
                        <tr>
                            <td>${p.platform}</td>
                            <td>₹${p.price.toLocaleString('en-IN')}</td>
                            <td><a href="${p.url || '#'}" target="_blank" class="platform-link-icon"><i class="fa-solid fa-up-right-from-square"></i></a></td>
                        </tr>
                    `;
                }
            });
        }
        elComparisonTableBody.innerHTML = tableRows;
    } else {
        elLowestPriceCard.style.display = "none";
    }
    
    // Multi-Resource Search Grid generator
    renderSearchPanel();
    
    // Script assistant script generator
    renderNegotiationScripts();
    
    // Initialize negotiation simulator
    initSimulator();
    
    // Load checklist inspection items
    renderInspectionChecklist();
    
    // Scroll results panel into view on mobile
    if (window.innerWidth < 960) {
        els.resultDashboard.scrollIntoView({ behavior: 'smooth' });
    }
};

// 11. Multi-Resource Deep Linking generator
const renderSearchPanel = () => {
    const data = currentAnalysis;
    const name = data.name;
    const location = data.location;
    
    // Detect global/regional markets based on currency/location defaults (simplified)
    const isIndia = location.toLowerCase().includes("india") || 
                    location.toLowerCase().includes("hyderabad") || 
                    location.toLowerCase().includes("bangalore") ||
                    location.toLowerCase().includes("delhi") ||
                    location.toLowerCase().includes("mumbai") ||
                    location.toLowerCase().includes("chennai") ||
                    location.toLowerCase().includes("pune");
    
    let searchConfigs = [];
    
    if (isIndia) {
        searchConfigs = [
            { site: "OLX India", class: "olx", icon: "fa-solid fa-tags", url: `https://www.olx.in/items/q-${encodeURIComponent(name)}` },
            { site: "FB Marketplace", class: "facebook", icon: "fa-brands fa-facebook-f", url: `https://www.facebook.com/marketplace/search/?query=${encodeURIComponent(name)}` },
            { site: "Amazon Renewed", class: "amazon", icon: "fa-brands fa-amazon", url: `https://www.amazon.in/s?k=refurbished+${encodeURIComponent(name)}` },
            { site: "Google Shopping", class: "shopping", icon: "fa-solid fa-cart-shopping", url: `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(name)}` },
            { site: "eBay Global", class: "ebay", icon: "fa-brands fa-ebay", url: `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(name)}` }
        ];
    } else {
        // Western links
        searchConfigs = [
            { site: "eBay US", class: "ebay", icon: "fa-brands fa-ebay", url: `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(name)}` },
            { site: "FB Marketplace", class: "facebook", icon: "fa-brands fa-facebook-f", url: `https://www.facebook.com/marketplace/search/?query=${encodeURIComponent(name)}` },
            { site: "Amazon Used", class: "amazon", icon: "fa-brands fa-amazon", url: `https://www.amazon.com/s?k=used+${encodeURIComponent(name)}` },
            { site: "Google Shopping", class: "shopping", icon: "fa-solid fa-cart-shopping", url: `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(name)}` },
            { site: "Craigslist", class: "olx", icon: "fa-solid fa-location-arrow", url: `https://www.craigslist.org/search/sss?query=${encodeURIComponent(name)}` }
        ];
    }
    
    els.searchLinksGrid.innerHTML = searchConfigs.map(cfg => `
        <a href="${cfg.url}" target="_blank" class="btn-search-site ${cfg.class}">
            <i class="${cfg.icon}"></i>
            <span>${cfg.site}</span>
        </a>
    `).join("");
    
    // Predefined query text generator
    const query = `used ${name} ${location} price`;
    els.optimizedQueryText.textContent = query;
};

// Copy optimized search query
els.btnCopyQuery.addEventListener("click", () => {
    const text = els.optimizedQueryText.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = els.btnCopyQuery;
        const oldHTML = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => { btn.innerHTML = oldHTML; }, 2000);
    });
});

// 12. Negotiation Script Tone Toggles
const renderNegotiationScripts = () => {
    if (!currentAnalysis) return;
    
    const data = currentAnalysis;
    const name = data.name;
    const price = data.sellerPrice;
    const offer = data.startingOffer;
    const age = `${data.ageVal} ${data.ageUnit}`;
    
    let issueStr = "";
    if (data.issuesApplied.length > 0) {
        issueStr = ` and has some issues like ${data.issuesApplied.slice(0, 2).map(i => i.name.toLowerCase()).join(" & ")}`;
    }
    
    const scripts = {
        friendly: `Hi, I’m interested in your ${name} listed for ₹${price.toLocaleString('en-IN')}. Considering that it has been used for ${age}${issueStr}, ₹${offer.toLocaleString('en-IN')} seems like a fair and balanced price. If everything is working properly during a quick check, I can close the deal today. Let me know if that works for you!`,
        
        firm: `Hello, regarding the ${name} you listed for ₹${price.toLocaleString('en-IN')}. Given the current market rate for a used unit of this age (${age})${issueStr}, my firm offer is ₹${offer.toLocaleString('en-IN')}. I am ready to pick it up and pay in cash/UPI today if you accept. Let me know.`,
        
        budget: `Hi there! I am very interested in the ${name}. However, since I have to account for the age (${age}) and repair needs${issueStr}, my absolute budget limit is ₹${offer.toLocaleString('en-IN')}. If you are open to selling at this price, I can complete the transaction immediately today. Thank you!`
    };
    
    els.negotiationMessage.value = scripts[selectedTone];
};

els.toneChips.forEach(chip => {
    chip.addEventListener("click", (e) => {
        els.toneChips.forEach(c => c.classList.remove("active"));
        const btn = e.target.closest(".tone-chip");
        btn.classList.add("active");
        selectedTone = btn.getAttribute("data-tone");
        renderNegotiationScripts();
    });
});

// Copy negotiation script
els.btnCopyMessage.addEventListener("click", () => {
    const text = els.negotiationMessage.value;
    navigator.clipboard.writeText(text).then(() => {
        const btn = els.btnCopyMessage;
        const oldHTML = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => { btn.innerHTML = oldHTML; }, 2000);
    });
});

// 13. Negotiation Practice Simulator Engine
const initSimulator = () => {
    currentSimStep = 0;
    els.chatMessagesBox.innerHTML = "";
    els.chatChoicesList.innerHTML = "";
    
    if (!currentAnalysis) return;
    
    // Initial message from seller
    const name = currentAnalysis.name;
    const price = currentAnalysis.sellerPrice;
    
    appendChatMessage("seller", `Hi! Thanks for your interest in the ${name}. The listing price is ₹${price.toLocaleString('en-IN')}. It's a great product and in good condition. When are you planning to visit?`);
    
    renderSimulatorChoices();
};

const appendChatMessage = (sender, message) => {
    const bubble = doc.createElement("div");
    bubble.className = `chat-msg ${sender}`;
    bubble.innerHTML = message;
    els.chatMessagesBox.appendChild(bubble);
    els.chatMessagesBox.scrollTop = els.chatMessagesBox.scrollHeight;
};

const renderSimulatorChoices = () => {
    els.chatChoicesList.innerHTML = "";
    const data = currentAnalysis;
    const offer = data.startingOffer;
    const maxSafe = data.maxSafePrice;
    
    let issueSummary = "";
    if (data.issuesApplied.length > 0) {
        issueSummary = ` and the ${data.issuesApplied[0].name.toLowerCase()} issue`;
    }
    
    if (currentSimStep === 0) {
        // Step 0 Choices
        const choices = [
            { text: `Offer starting bid: "Hi, but it's used for ${data.ageVal} ${data.ageUnit}${issueSummary}. Would you accept ₹${offer.toLocaleString('en-IN')}?"`, path: "offer_low" },
            { text: `Polite approach: "Hi, I'm very interested. Could you do a slightly lower price, say ₹${Math.round((data.sellerPrice + data.fairPrice)/2).toLocaleString('en-IN')}?"`, path: "offer_mid" },
            { text: `Direct final warning: "Given the market value, my best price is ₹${maxSafe.toLocaleString('en-IN')}. Can I inspect it today?"`, path: "offer_safe" }
        ];
        
        choices.forEach(ch => {
            const btn = doc.createElement("button");
            btn.className = "chat-choice-btn";
            btn.innerHTML = ch.text;
            btn.addEventListener("click", () => handleSimulatorResponse(ch.path, ch.text));
            els.chatChoicesList.appendChild(btn);
        });
    } else if (currentSimStep === 1) {
        // Step 1 Choices
        const choices = [
            { text: `Push for absolute limit: "I understand, but considering repair costs, ₹${maxSafe.toLocaleString('en-IN')} is my absolute limit. Can we close the deal?"`, path: "limit" },
            { text: `Meet in the middle: "How about we meet in the middle at ₹${Math.round((data.startingOffer + data.maxSafePrice)/2).toLocaleString('en-IN')}?"`, path: "middle" },
            { text: `Polite walkaway: "That's a bit out of my budget. If you change your mind and can do ₹${maxSafe.toLocaleString('en-IN')}, let me know."`, path: "walk" }
        ];
        
        choices.forEach(ch => {
            const btn = doc.createElement("button");
            btn.className = "chat-choice-btn";
            btn.innerHTML = ch.text;
            btn.addEventListener("click", () => handleSimulatorResponse(ch.path, ch.text));
            els.chatChoicesList.appendChild(btn);
        });
    } else {
        els.chatChoicesList.innerHTML = `<div class="text-muted font-bold text-center" style="font-size: 11px;">Simulation Finished. Reset below to practice again!</div>`;
    }
};

const handleSimulatorResponse = (path, userText) => {
    // Append Buyer Choice
    appendChatMessage("buyer", userText);
    
    // Delay Seller response for realism
    els.chatChoicesList.innerHTML = `<div class="text-muted" style="font-size: 11px; font-style: italic;"><i class="fa-solid fa-ellipsis fa-beat"></i> Seller is typing...</div>`;
    
    setTimeout(() => {
        const data = currentAnalysis;
        const price = data.sellerPrice;
        const offer = data.startingOffer;
        const maxSafe = data.maxSafePrice;
        
        if (currentSimStep === 0) {
            currentSimStep = 1;
            
            if (path === "offer_low") {
                const counterPrice = Math.round((price + maxSafe) / 2);
                appendChatMessage("seller", `₹${offer.toLocaleString('en-IN')} is too low! I bought it for ₹${data.launchPrice > 0 ? data.launchPrice.toLocaleString('en-IN') : 'much higher'}. But I can lower it slightly to ₹${counterPrice.toLocaleString('en-IN')} if you can pick it up today.`);
            } else if (path === "offer_mid") {
                const counterPrice = Math.round(price * 0.95);
                appendChatMessage("seller", `I can drop it a little bit, but ₹${counterPrice.toLocaleString('en-IN')} is the lowest I had in mind. Let me know if that works.`);
            } else if (path === "offer_safe") {
                appendChatMessage("seller", `₹${maxSafe.toLocaleString('en-IN')} is a bit tight for me. I have another person asking to see it tomorrow. If you can make it ₹${Math.round(maxSafe * 1.05).toLocaleString('en-IN')}, I will reserve it for you.`);
            }
            
            renderSimulatorChoices();
        } else if (currentSimStep === 1) {
            currentSimStep = 2; // finish
            
            if (path === "limit") {
                appendChatMessage("seller", `Okay, since you can close the deal today, I'll agree to ₹${maxSafe.toLocaleString('en-IN')}. Please verify the device thoroughly during inspection. See you!`);
            } else if (path === "middle") {
                const dealPrice = Math.round((offer + maxSafe)/2);
                appendChatMessage("seller", `Sounds fair enough. Let's lock it at ₹${dealPrice.toLocaleString('en-IN')}. Let me know when you are arriving.`);
            } else if (path === "walk") {
                appendChatMessage("seller", `Okay, no problem! I'll wait for other offers. If it doesn't sell in a couple of days, I might message you back. Thank you!`);
            }
            
            renderSimulatorChoices();
        }
    }, 1000);
};

els.btnResetChat.addEventListener("click", initSimulator);

// 14. Category Inspection Checklists
const renderInspectionChecklist = () => {
    const data = currentAnalysis;
    const checklist = categoryChecklists[data.category] || categoryChecklists.Other;
    
    els.checklistItemsBox.innerHTML = checklist.map((item, idx) => `
        <label class="check-item" id="check-item-${idx}">
            <input type="checkbox" onchange="toggleChecklistItem(${idx}, this)">
            <div class="check-details">
                <span class="check-item-title">${item.title}</span>
                <span class="check-item-desc">${item.desc}</span>
            </div>
        </label>
    `).join("");
};

window.toggleChecklistItem = (idx, cb) => {
    const itemLabel = doc.getElementById(`check-item-${idx}`);
    if (cb.checked) {
        itemLabel.classList.add("checked");
    } else {
        itemLabel.classList.remove("checked");
    }
};

// 15. History Modal Controls
const toggleHistoryModal = (show) => {
    if (show) {
        renderHistoryList();
        els.historyModal.classList.add("open");
    } else {
        els.historyModal.classList.remove("open");
    }
};

els.btnHistory.addEventListener("click", () => toggleHistoryModal(true));
els.closeHistoryModal.addEventListener("click", () => toggleHistoryModal(false));

els.historyModal.addEventListener("click", (e) => {
    if (e.target === els.historyModal) toggleHistoryModal(false);
});

const renderHistoryList = () => {
    if (analyzedDealsHistory.length === 0) {
        els.historyEmptyState.style.display = "block";
        els.historyContainer.innerHTML = "";
    } else {
        els.historyEmptyState.style.display = "none";
        els.historyContainer.innerHTML = analyzedDealsHistory.map((item, idx) => `
            <div class="history-card" onclick="loadHistoryItem(${idx})">
                <div class="history-card-info">
                    <span class="history-card-title">${item.name}</span>
                    <div class="history-card-meta">
                        <span><i class="fa-solid fa-tags"></i> ${item.category}</span>
                        <span>Price: ₹${item.sellerPrice.toLocaleString('en-IN')}</span>
                        <span>Date: ${item.timestamp}</span>
                    </div>
                </div>
                <div class="history-card-score">
                    <span class="history-score-val text-${item.verdictKey}">${item.score}</span>
                    <span class="history-score-label">Score</span>
                </div>
            </div>
        `).join("");
    }
};

window.loadHistoryItem = (index) => {
    currentAnalysis = analyzedDealsHistory[index];
    
    // Pre-populate input fields
    els.productName.value = currentAnalysis.name;
    els.productCategory.value = currentAnalysis.category;
    els.sellerPrice.value = currentAnalysis.sellerPrice;
    els.launchPrice.value = currentAnalysis.launchPrice || "";
    els.newPrice.value = currentAnalysis.newPrice;
    els.usedAgeVal.value = currentAnalysis.usedAgeVal;
    els.usedAgeUnit.value = currentAnalysis.usedAgeUnit;
    els.location.value = currentAnalysis.location;
    els.urgency.value = currentAnalysis.urgency;
    
    // Set radio condition
    const radio = doc.getElementById(`cond-${currentAnalysis.condition.toLowerCase()}`);
    if (radio) radio.checked = true;
    
    // Update predefined list & custom lists
    customIssues = [];
    renderCustomChips();
    updatePredefinedIssues(currentAnalysis.category);
    
    // Close modal & update dashboard
    toggleHistoryModal(false);
    updateDashboardUI();
};

els.btnClearHistory.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all saved analyses history?")) {
        analyzedDealsHistory = [];
        localStorage.removeItem("dealmate_history");
        renderHistoryList();
    }
});

// Form submission handler
els.dealForm.addEventListener("submit", (e) => {
    e.preventDefault();
    runDealAnalysis();
});

// 16. Gemini API Settings & Live Background Search
let geminiApiKey = localStorage.getItem("dealmate_gemini_api_key") || "AIzaSyAvvlEZ6wh6MrFHI5KSk-Ub6Dfx9nlW8D0";

const toggleApiModal = (show) => {
    if (show) {
        els.apiKeyInput.value = geminiApiKey;
        els.apiModal.classList.add("open");
    } else {
        els.apiModal.classList.remove("open");
    }
};

els.btnApiSettings.addEventListener("click", () => toggleApiModal(true));
els.closeApiModal.addEventListener("click", () => toggleApiModal(false));
els.apiModal.addEventListener("click", (e) => {
    if (e.target === els.apiModal) toggleApiModal(false);
});

els.btnSaveApiKey.addEventListener("click", () => {
    geminiApiKey = els.apiKeyInput.value.trim();
    localStorage.setItem("dealmate_gemini_api_key", geminiApiKey);
    toggleApiModal(false);
    alert("API Key saved successfully!");
});

els.btnFetchAi.addEventListener("click", async () => {
    const productName = els.productName.value.trim();
    const location = els.location.value.trim() || "Hyderabad";
    
    if (!productName) {
        alert("Please enter a Product Name first to search!");
        els.productName.focus();
        return;
    }
    
    if (!geminiApiKey) {
        alert("Gemini API Key is required to fetch details in the background. Please save your API key in AI Settings first.");
        toggleApiModal(true);
        return;
    }
    
    // Show spinner
    els.loadingOverlay.style.display = "flex";
    
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`;
        
        // Query to perform live web search for lowest price all over India
        const prompt = `Perform a live web search to check and find the lowest price for the product: "${productName}" all over India (or in region: "${location}"). 
Search across multiple online and offline platforms (e.g. Amazon.in, Flipkart, OLX India, Facebook Marketplace India, local mandis for fresh items, CarDekho/Spinny for cars, etc.).

Respond ONLY with a valid raw JSON object matching this schema (ensure all prices are in INR/₹ unless location is non-Indian, and write integers. Do not wrap in markdown code blocks):
{
  "productName": "string (canonical name of the product)",
  "category": "Laptop" | "Mobile" | "Bike" | "Car" | "TV" | "HomeAppliance" | "FruitsVegetables" | "Other",
  "launchPrice": integer (original launch price or baseline retail price),
  "currentPrice": integer (current average retail price for a new/fresh item today),
  "lowestPricePlatform": "string (name of the platform/website with the lowest price, e.g. OLX, Amazon, Flipkart, Local Mandi, Blinkit)",
  "lowestPriceValue": integer (the actual price value found on that platform),
  "lowestPriceUrl": "string (direct link or search query URL to that platform for the product)",
  "otherPlatforms": [
    {"platform": "string (platform name)", "price": integer, "url": "string (url)"}
  ],
  "launchYearOrAgeDays": integer (the release year for electronics/vehicles, OR shelf age in days for fruits/vegetables),
  "commonIssues": [
    {"name": "string (issue description, e.g., transmission lag, overripe, screen burn-in)", "cost": integer (deduction/repair cost)}
  ]
}
Ensure all keys are matched exactly and values are integers. Do not add any conversational text, notes, or comments. Just the raw JSON.`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: prompt }
                        ]
                    }
                ],
                tools: [
                    {
                        googleSearch: {}
                    }
                ],
                generationConfig: {
                    responseMimeType: "application/json"
                }
            })
        });
        
        if (!response.ok) {
            throw new Error(`API returned status ${response.status}`);
        }
        
        const resultJson = await response.json();
        const textResponse = resultJson.candidates[0].content.parts[0].text;
        const data = JSON.parse(textResponse);
        
        // Cache this search dataset globally for runDealAnalysis()
        lastFetchedAIData = data;
        
        // Auto fill form values
        if (data.productName) els.productName.value = data.productName;
        if (data.category) {
            els.productCategory.value = data.category;
            // Update labels and issue checklists dynamically
            updatePredefinedIssues(data.category);
            updateAccessoriesLabels(data.category);
        }
        if (data.launchPrice) els.launchPrice.value = data.launchPrice;
        if (data.currentPrice) els.newPrice.value = data.currentPrice;
        
        // Age calculations based on category type
        if (data.launchYearOrAgeDays) {
            if (data.category === "FruitsVegetables") {
                els.usedAgeVal.value = data.launchYearOrAgeDays;
                els.usedAgeUnit.value = "days";
            } else {
                const currentYear = new Date().getFullYear();
                let age = currentYear - data.launchYearOrAgeDays;
                if (age < 0) age = 0;
                
                els.usedAgeVal.value = age === 0 ? 6 : age;
                els.usedAgeUnit.value = age === 0 ? "months" : "years";
            }
        }
        
        // Clear old issues
        customIssues = [];
        
        // Populate custom issues list from live search results
        if (data.commonIssues && Array.isArray(data.commonIssues)) {
            customIssues = data.commonIssues.map(issue => ({
                name: issue.name,
                cost: issue.cost || 1000
            }));
            renderCustomChips();
        }
        
        // Trigger calculation automatically
        runDealAnalysis();
        
    } catch (err) {
        console.error("AI Fetch Error:", err);
        alert("Failed to search live price details from Gemini API. Please check your API key or connection and try again.");
    } finally {
        els.loadingOverlay.style.display = "none";
    }
});

// Initialize app
initTheme();
updatePredefinedIssues("Laptop"); // default state
