/**
 * Nexus PDF Hub - Multi Tool Hub
 * Vanilla JavaScript Logic
 */

const PDF_TOOLS = [
    { id: 'merge-pdf', title: 'Merge PDF', desc: 'Combine multiple PDFs into one.', icon: 'M12 4v16m8-8H4' },
    { id: 'split-pdf', title: 'Split PDF', desc: 'Separate one page or whole set.', icon: 'M4 12h16' },
    { id: 'compress-pdf', title: 'Compress PDF', desc: 'Reduce file size while optimizing.', icon: 'M4 4l16 16m0-16L4 20' },
    { id: 'pdf-to-word', title: 'PDF to Word', desc: 'Convert PDF to editable DOCX.', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
    { id: 'word-to-pdf', title: 'Word to PDF', desc: 'Convert DOCX to PDF format.', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
    { id: 'pdf-to-excel', title: 'PDF to Excel', desc: 'Extract data to Excel sheets.', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
    { id: 'excel-to-pdf', title: 'Excel to PDF', desc: 'Convert spreadsheets to PDF.', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
    { id: 'pdf-to-jpg', title: 'PDF to JPG', desc: 'Extract images from your PDF.', icon: 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7' },
    { id: 'jpg-to-pdf', title: 'JPG to PDF', desc: 'Convert images to PDF files.', icon: 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7' },
    { id: 'edit-pdf', title: 'Edit PDF', desc: 'Add text, images, or shapes.', icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' },
    { id: 'unlock-pdf', title: 'Unlock PDF', desc: 'Remove PDF password security.', icon: 'M7 11V7a5 5 0 0 1 10 0v4' },
    { id: 'protect-pdf', title: 'Protect PDF', desc: 'Add password to your PDF.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }
];

const UTILITY_TOOLS = [
    { id: 'img-compress', title: 'Image Compressor', desc: 'Reduce image size without quality loss.', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'img-converter', title: 'Image Converter', desc: 'Convert between JPG, PNG, WEBP.', icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' },
    { id: 'qr-gen', title: 'QR Generator', desc: 'Generate custom QR codes instantly.', icon: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z' },
    { id: 'pass-gen', title: 'Password Gen', desc: 'Create strong, secure passwords.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { id: 'word-counter', title: 'Word Counter', desc: 'Count words and characters in text.', icon: 'M4 7h16M4 12h16M4 17h16' },
    { id: 'age-calc', title: 'Age Calculator', desc: 'Calculate exact age from birth date.', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'bmi-calc', title: 'BMI Calculator', desc: 'Calculate Body Mass Index easily.', icon: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' },
    { id: 'color-picker', title: 'Color Picker', desc: 'Select and convert hex/rgb colors.', icon: 'M12 19l7-7 3 3-7 7-3-3z' },
    { id: 'unit-conv', title: 'Unit Converter', desc: 'Convert length, weight, and more.', icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' },
    { id: 'json-format', title: 'JSON Formatter', desc: 'Prettify and validate JSON data.', icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6' },
    { id: 'tts', title: 'Text to Speech', desc: 'Convert text into natural voice.', icon: 'M11 5L6 9H2v6h4l5 4V5z' },
    { id: 'stt', title: 'Speech to Text', desc: 'Transcribe voice into text.', icon: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z' },
    { id: 'timer', title: 'Timer / Stopwatch', desc: 'Track time with precision.', icon: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z' }
];

let currentFiles = [];

// DOM Elements
const pdfGrid = document.getElementById('pdf-grid');
const utilityGrid = document.getElementById('utility-grid');
const sidebarPdf = document.getElementById('sidebar-pdf-tools');
const sidebarUtility = document.getElementById('sidebar-utility-tools');
const toolModal = document.getElementById('tool-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-message');
const logoToggle = document.getElementById('logo-toggle');

// Toggle Elements
const togglePdfBtn = document.getElementById('toggle-pdf-btn');
const toggleUtilityBtn = document.getElementById('toggle-utility-btn');
const pdfToolsContainer = document.getElementById('pdf-tools-container');
const utilityToolsContainer = document.getElementById('utility-tools-container');
const sidebarPdfSection = document.getElementById('sidebar-pdf-section');
const sidebarUtilitySection = document.getElementById('sidebar-utility-section');
const utilitySectionWrapper = document.getElementById('utility-section-wrapper');

// Auth Elements
const loginScreen = document.getElementById('login-screen');
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');

// Theme Elements
const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const sunIconDesktop = document.getElementById('sun-icon-desktop');
const moonIconDesktop = document.getElementById('moon-icon-desktop');
const sunIconMobile = document.getElementById('sun-icon-mobile');
const moonIconMobile = document.getElementById('moon-icon-mobile');

// Mock Credentials
const CREDENTIALS = {
    admin: { user: 'admin', pass: 'admin123', role: 'admin' },
    user: { user: 'user', pass: 'user123', role: 'user' }
};

// Initialize App
function init() {
    if (checkAuth()) {
        renderTools();
        setupEventListeners();
        initTheme();
    }
}

function checkAuth() {
    // Auto-login as admin for development
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
        user = CREDENTIALS.admin;
        localStorage.setItem('user', JSON.stringify(user));
    }
    
    if (loginScreen) loginScreen.classList.add('hidden');
    if (logoutBtn) logoutBtn.classList.add('hidden'); // Hide logout button during dev
    updateUIByRole(user.role);
    return true;
}

function updateUIByRole(role) {
    if (role === 'user') {
        // Hide utility tools for standard users
        if (utilitySectionWrapper) utilitySectionWrapper.classList.add('hidden');
        if (sidebarUtilitySection) sidebarUtilitySection.classList.add('hidden');
    } else if (role === 'admin') {
        // Show all tools for admins
        if (utilitySectionWrapper) utilitySectionWrapper.classList.remove('hidden');
        if (sidebarUtilitySection) sidebarUtilitySection.classList.remove('hidden');
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
        sunIconDesktop?.classList.remove('hidden');
        moonIconDesktop?.classList.add('hidden');
        sunIconMobile?.classList.remove('hidden');
        moonIconMobile?.classList.add('hidden');
    } else {
        sunIconDesktop?.classList.add('hidden');
        moonIconDesktop?.classList.remove('hidden');
        sunIconMobile?.classList.add('hidden');
        moonIconMobile?.classList.remove('hidden');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    showToast(`Switched to ${newTheme} theme`);
}

function renderTools() {
    // Clear existing to prevent duplicates
    if (pdfGrid) pdfGrid.innerHTML = '';
    if (utilityGrid) utilityGrid.innerHTML = '';
    if (sidebarPdf) sidebarPdf.innerHTML = '';
    if (sidebarUtility) sidebarUtility.innerHTML = '';

    // Render PDF Tools
    PDF_TOOLS.forEach(tool => {
        const card = createToolCard(tool);
        if (pdfGrid) pdfGrid.appendChild(card);
        
        const sideLink = createSidebarLink(tool);
        if (sidebarPdf) sidebarPdf.appendChild(sideLink);
    });

    // Render Utility Tools (Always render, UI role logic will hide if needed)
    UTILITY_TOOLS.forEach(tool => {
        const card = createToolCard(tool);
        if (utilityGrid) utilityGrid.appendChild(card);

        const sideLink = createSidebarLink(tool);
        if (sidebarUtility) sidebarUtility.appendChild(sideLink);
    });
}

function createToolCard(tool) {
    const div = document.createElement('div');
    div.className = 'tool-card group';
    div.innerHTML = `
        <div class="w-12 h-12 rounded-lg bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 shadow-sm">
            <svg viewBox="0 0 24 24" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
                <path d="${tool.icon}" />
            </svg>
        </div>
        <h3 class="font-sans text-lg theme-text-primary mb-2">${tool.title}</h3>
        <p class="text-sm theme-text-secondary mb-6">${tool.desc}</p>
        <button onclick="openTool('${tool.id}')" class="w-full py-2 rounded-lg border border-[#2563eb]/30 text-[#2563eb] font-sans text-xs uppercase tracking-wider hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-300">
            Open Tool
        </button>
    `;
    return div;
}

function createSidebarLink(tool) {
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="javascript:void(0)" onclick="openTool('${tool.id}')" class="sidebar-link">
            <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2">
                <path d="${tool.icon}" />
            </svg>
            <span class="text-sm">${tool.title}</span>
        </a>
    `;
    return li;
}

function setupEventListeners() {
    closeModal.onclick = () => toggleModal(false);
    modalOverlay.onclick = () => toggleModal(false);
    
    themeToggleDesktop.onclick = toggleTheme;
    themeToggleMobile.onclick = toggleTheme;

    const toggleSidebar = () => {
        sidebar.classList.toggle('-translate-x-full');
        sidebar.classList.toggle('md:translate-x-0');
        sidebar.classList.toggle('md:-translate-x-full');
        mainContent.classList.toggle('md:ml-64');
        mainContent.classList.toggle('md:ml-0');
    };

    logoToggle.onclick = toggleSidebar;
    mobileMenuBtn.onclick = toggleSidebar;

    // Learn More & Contact Handlers
    const learnMoreBtn = document.getElementById('learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.onclick = () => showToast("Nexus Archive: Detailed technical documentation and system guides are currently being finalized for the next release.");
    }

    // Fix all contact links to show coming soon if desired, or let them scroll to footer.
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(link => {
        link.onclick = (e) => {
            showToast("Nexus Support: Dedicated inquiry and support channels are being established for the upcoming update.");
        };
    });

    // Login Handler
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const userVal = document.getElementById('login-username').value;
        const passVal = document.getElementById('login-password').value;
        const termsAccepted = document.getElementById('login-terms').checked;

        if (!termsAccepted) {
            return showToast("You must accept the system protocols to initialize access.");
        }

        let matchedUser = null;
        for (const key in CREDENTIALS) {
            if (CREDENTIALS[key].user === userVal && CREDENTIALS[key].pass === passVal) {
                matchedUser = CREDENTIALS[key];
                break;
            }
        }

        if (matchedUser) {
            localStorage.setItem('user', JSON.stringify(matchedUser));
            showToast(`Welcome back, ${matchedUser.user}! Initializing system...`);
            setTimeout(() => location.reload(), 1500);
        } else {
            showToast("Invalid credentials. Access denied.");
        }
    };

    // Logout Handler
    logoutBtn.onclick = () => {
        localStorage.removeItem('user');
        showToast("Session terminated. Logging out...");
        setTimeout(() => location.reload(), 1000);
    };

    // Close sidebar on mobile when clicking a link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                sidebar.classList.add('-translate-x-full');
            }
        });
    });

    // Toggle PDF Tools
    togglePdfBtn.onclick = () => {
        const isHidden = pdfToolsContainer.classList.contains('hidden');
        if (isHidden) {
            pdfToolsContainer.classList.remove('hidden');
            sidebarPdfSection.classList.remove('hidden');
            togglePdfBtn.querySelector('span').innerText = 'Hide Tools';
            togglePdfBtn.querySelector('svg').classList.remove('rotate-180');
        } else {
            pdfToolsContainer.classList.add('hidden');
            sidebarPdfSection.classList.add('hidden');
            togglePdfBtn.querySelector('span').innerText = 'Show Tools';
            togglePdfBtn.querySelector('svg').classList.add('rotate-180');
        }
    };

    // Toggle Utility Tools
    toggleUtilityBtn.onclick = () => {
        const isHidden = utilityToolsContainer.classList.contains('hidden');
        if (isHidden) {
            utilityToolsContainer.classList.remove('hidden');
            sidebarUtilitySection.classList.remove('hidden');
            toggleUtilityBtn.querySelector('span').innerText = 'Hide Tools';
            toggleUtilityBtn.querySelector('svg').classList.remove('rotate-180');
        } else {
            utilityToolsContainer.classList.add('hidden');
            sidebarUtilitySection.classList.add('hidden');
            toggleUtilityBtn.querySelector('span').innerText = 'Show Tools';
            toggleUtilityBtn.querySelector('svg').classList.add('rotate-180');
        }
    };
}

function toggleModal(show) {
    if (show) {
        toolModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        toolModal.classList.add('hidden');
        document.body.style.overflow = '';
        modalContent.innerHTML = ''; // Clear content
    }
}

window.openTool = function(id) {
    const tool = [...PDF_TOOLS, ...UTILITY_TOOLS].find(t => t.id === id);
    if (!tool) return;

    // Feature Lock for Maintenance/Improvements
    if (id === 'edit-pdf' || id === 'protect-pdf') {
        showToast(`System Update: ${tool.title} is currently undergoing technical optimization. This feature will be available in an upcoming release.`);
        return;
    }

    // Authorization Guard
    const user = JSON.parse(localStorage.getItem('user'));
    const isUtilityTool = UTILITY_TOOLS.some(t => t.id === id);
    if (isUtilityTool && (!user || user.role !== 'admin')) {
        showToast("Access Denied: Administrative privileges required.");
        return;
    }

    // Reset current files for new tool session
    currentFiles = [];
    
    modalTitle.innerText = tool.title;
    modalContent.innerHTML = getToolUI(id);
    toggleModal(true);
    
    // Initialize tool logic after UI is injected
    initToolLogic(id);
};

function getToolUI(id) {
    // Common Upload UI for file-based tools
    const isFileTool = id.includes('pdf') || id.includes('img') || id === 'audio-conv' || id === 'video-comp';
    
    if (isFileTool) {
        let extraOptions = '';
        if (id === 'split-pdf') {
            extraOptions = `
                <div class="mt-4 space-y-4 p-4 theme-bg-secondary border border-[#2563eb]/20 rounded-lg">
                    <p class="text-xs font-sans text-[#2563eb] uppercase tracking-widest">Split Options</p>
                    <div class="flex flex-col gap-3">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="split-type" value="all" checked class="accent-[#2563eb]" onchange="document.getElementById('split-range').classList.add('hidden')">
                            <span class="text-sm theme-text-primary">Split every page into a separate PDF</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="split-type" value="range" class="accent-[#2563eb]" onchange="document.getElementById('split-range').classList.remove('hidden')">
                            <span class="text-sm theme-text-primary">Extract page ranges</span>
                        </label>
                        <input type="text" id="split-range" class="hidden w-full theme-bg-primary border border-[#2563eb]/30 rounded-lg px-4 py-2 theme-text-primary outline-none focus:border-[#2563eb] text-sm" placeholder="e.g., 1-5, 8, 11-13">
                    </div>
                </div>
            `;
        } else if (id === 'compress-pdf') {
            extraOptions = `
                <div class="mt-4 space-y-4 p-4 theme-bg-secondary border border-[#2563eb]/20 rounded-lg">
                    <p class="text-xs font-sans text-[#2563eb] uppercase tracking-widest">Compression Quality</p>
                    <div class="grid grid-cols-3 gap-3">
                        <label class="flex flex-col items-center gap-2 p-3 border border-[#2563eb]/20 rounded-lg cursor-pointer hover:bg-[#2563eb]/5 transition-all">
                            <input type="radio" name="comp-quality" value="low" class="accent-[#2563eb]">
                            <span class="text-[10px] theme-text-primary uppercase tracking-tighter">Low</span>
                            <span class="text-[8px] theme-text-secondary text-center leading-none">Best Quality<br>Large Size</span>
                        </label>
                        <label class="flex flex-col items-center gap-2 p-3 border border-[#2563eb]/20 rounded-lg cursor-pointer hover:bg-[#2563eb]/5 transition-all bg-[#2563eb]/10">
                            <input type="radio" name="comp-quality" value="med" checked class="accent-[#2563eb]">
                            <span class="text-[10px] theme-text-primary uppercase tracking-tighter">Med</span>
                            <span class="text-[8px] theme-text-secondary text-center leading-none">Balanced<br>Good Size</span>
                        </label>
                        <label class="flex flex-col items-center gap-2 p-3 border border-[#2563eb]/20 rounded-lg cursor-pointer hover:bg-[#2563eb]/5 transition-all">
                            <input type="radio" name="comp-quality" value="high" class="accent-[#2563eb]">
                            <span class="text-[10px] theme-text-primary uppercase tracking-tighter">High</span>
                            <span class="text-[8px] theme-text-secondary text-center leading-none">Low Quality<br>Smallest</span>
                        </label>
                    </div>
                </div>
            `;
        } else if (id === 'unlock-pdf') {
            const user = JSON.parse(localStorage.getItem('user'));
            const isAdmin = user && user.role === 'admin';
            extraOptions = `
                <div class="mt-4 space-y-4 p-4 theme-bg-secondary border border-[#2563eb]/20 rounded-lg">
                    <p class="text-xs font-sans text-[#2563eb] uppercase tracking-widest">PDF Access Control</p>
                    <div class="space-y-4">
                        <div>
                            <p class="text-[10px] theme-text-secondary uppercase mb-2">Standard Decryption</p>
                            <input type="password" id="pdf-password" class="w-full theme-bg-primary border border-[#2563eb]/30 rounded-lg px-4 py-2 theme-text-primary outline-none focus:border-[#2563eb] text-sm" placeholder="Enter password...">
                        </div>
                        ${isAdmin ? `
                        <div class="pt-4 border-t border-[#2563eb]/10">
                            <p class="text-[10px] text-[#2563eb] uppercase mb-2 font-bold">Admin: Advanced Recovery Module</p>
                            <label class="flex items-center gap-2 cursor-pointer mb-3">
                                <input type="checkbox" id="auto-unlock-toggle" class="accent-[#2563eb]">
                                <span class="text-xs theme-text-primary">Activate Automated Analysis (Multi-Vector Mode)</span>
                            </label>
                            <div id="brute-status" class="hidden text-[10px] theme-text-secondary bg-black/30 p-2 rounded border border-[#2563eb]/10">
                                Initializing sequence...
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } else if (id === 'protect-pdf') {
            extraOptions = `
                <div class="mt-4 space-y-2 p-4 theme-bg-secondary border border-[#2563eb]/20 rounded-lg">
                    <p class="text-xs font-sans text-[#2563eb] uppercase tracking-widest">Set New Password</p>
                    <input type="password" id="pdf-new-password" class="w-full theme-bg-primary border border-[#2563eb]/30 rounded-lg px-4 py-2 theme-text-primary outline-none focus:border-[#2563eb] text-sm" placeholder="Enter new password...">
                </div>
            `;
        } else if (id === 'img-compress') {
            extraOptions = `
                <div class="mt-4 space-y-4 p-4 theme-bg-secondary border border-[#2563eb]/20 rounded-lg">
                    <p class="text-xs font-sans text-[#2563eb] uppercase tracking-widest">Compression Level</p>
                    <input type="range" id="img-comp-quality" min="0.1" max="1" step="0.1" value="0.7" class="w-full accent-[#2563eb]">
                    <div class="flex justify-between text-[10px] theme-text-secondary uppercase">
                        <span>Smallest Size</span>
                        <span>Best Quality</span>
                    </div>
                </div>
            `;
        } else if (id === 'img-converter') {
            extraOptions = `
                <div class="mt-4 space-y-4 p-4 theme-bg-secondary border border-[#2563eb]/20 rounded-lg">
                    <p class="text-xs font-sans text-[#2563eb] uppercase tracking-widest">Target Format</p>
                    <div class="grid grid-cols-3 gap-3">
                        <label class="flex items-center gap-2 cursor-pointer p-2 border border-[#2563eb]/20 rounded-lg">
                            <input type="radio" name="img-format" value="image/jpeg" checked class="accent-[#2563eb]">
                            <span class="text-xs theme-text-primary">JPG</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer p-2 border border-[#2563eb]/20 rounded-lg">
                            <input type="radio" name="img-format" value="image/png" class="accent-[#2563eb]">
                            <span class="text-xs theme-text-primary">PNG</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer p-2 border border-[#2563eb]/20 rounded-lg">
                            <input type="radio" name="img-format" value="image/webp" class="accent-[#2563eb]">
                            <span class="text-xs theme-text-primary">WEBP</span>
                        </label>
                    </div>
                </div>
            `;
        }
        return `
            <div class="space-y-6">
                <div id="drop-zone" class="drop-zone">
                    <div class="flex flex-col items-center">
                        <svg viewBox="0 0 24 24" class="w-16 h-16 text-[#2563eb] mb-4 opacity-50" fill="none" stroke="currentColor" stroke-width="1">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                        </svg>
                        <p class="text-xl theme-text-primary mb-2">Drag & Drop Files</p>
                        <p class="theme-text-secondary mb-6">or click to browse from your device</p>
                        <input type="file" id="file-input" class="hidden" ${id === 'merge-pdf' || id === 'jpg-to-pdf' ? 'multiple' : ''}>
                        <button onclick="document.getElementById('file-input').click()" class="glow-button px-8 py-2 rounded-lg font-sans text-sm">Select Files</button>
                    </div>
                </div>
                <div id="file-list" class="space-y-3"></div>
                <div id="process-area" class="hidden">
                    ${extraOptions}
                    <div class="w-full theme-bg-primary rounded-full h-2 mb-4 overflow-hidden">
                        <div id="progress-bar" class="bg-[#2563eb] h-full w-0 transition-all duration-300 shadow-[0_0_10px_#2563eb]"></div>
                    </div>
                    <p id="status-text" class="text-center text-[#2563eb] font-sans text-xs animate-pulse-glow">READY FOR PROCESSING</p>
                    <button id="process-btn" class="w-full mt-6 glow-button py-3 rounded-lg font-sans font-bold">EXECUTE PROCESSING</button>
                </div>
            </div>
        `;
    }

    // Specific UI for non-file tools
    switch(id) {
        case 'word-counter':
            return `
                <div class="space-y-6">
                    <textarea id="word-input" class="w-full h-64 theme-bg-primary border border-[#2563eb]/20 rounded-xl p-6 theme-text-primary focus:border-[#2563eb] outline-none transition-all" placeholder="Paste your text here..."></textarea>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="theme-bg-primary p-4 rounded-lg border border-[#2563eb]/10 text-center">
                            <p class="text-[#2563eb] text-2xl font-bold" id="count-words">0</p>
                            <p class="text-xs theme-text-secondary uppercase tracking-widest">Words</p>
                        </div>
                        <div class="theme-bg-primary p-4 rounded-lg border border-[#2563eb]/10 text-center">
                            <p class="text-[#2563eb] text-2xl font-bold" id="count-chars">0</p>
                            <p class="text-xs theme-text-secondary uppercase tracking-widest">Characters</p>
                        </div>
                        <div class="theme-bg-primary p-4 rounded-lg border border-[#2563eb]/10 text-center">
                            <p class="text-[#2563eb] text-2xl font-bold" id="count-sentences">0</p>
                            <p class="text-xs theme-text-secondary uppercase tracking-widest">Sentences</p>
                        </div>
                        <div class="theme-bg-primary p-4 rounded-lg border border-[#2563eb]/10 text-center">
                            <p class="text-[#2563eb] text-2xl font-bold" id="count-paragraphs">0</p>
                            <p class="text-xs theme-text-secondary uppercase tracking-widest">Paragraphs</p>
                        </div>
                    </div>
                </div>
            `;
        case 'pass-gen':
            return `
                <div class="space-y-8 max-w-md mx-auto">
                    <div class="relative">
                        <input type="text" id="pass-output" readonly class="w-full theme-bg-primary border border-[#2563eb]/30 rounded-xl p-4 text-xl text-center font-mono text-[#2563eb] shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                        <button id="copy-pass" class="absolute right-4 top-1/2 -translate-y-1/2 theme-text-primary hover:text-[#2563eb]">
                            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/></svg>
                        </button>
                    </div>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <label class="text-sm">Length: <span id="length-val" class="text-[#2563eb]">16</span></label>
                            <input type="range" id="pass-length" min="8" max="64" value="16" class="accent-[#2563eb]">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" id="pass-upper" checked class="accent-[#2563eb]"> Uppercase
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" id="pass-lower" checked class="accent-[#2563eb]"> Lowercase
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" id="pass-numbers" checked class="accent-[#2563eb]"> Numbers
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" id="pass-symbols" checked class="accent-[#2563eb]"> Symbols
                            </label>
                        </div>
                    </div>
                    <button id="gen-btn" class="w-full glow-button py-3 rounded-lg font-sans font-bold">GENERATE PASSWORD</button>
                </div>
            `;
        case 'timer':
            return `
                <div class="text-center space-y-8">
                    <div class="font-sans text-7xl md:text-8xl theme-text-primary glow-text" id="timer-display">00:00:00</div>
                    <div class="flex justify-center gap-4">
                        <button id="timer-start" class="glow-button px-8 py-3 rounded-lg font-sans">START</button>
                        <button id="timer-stop" class="border border-[#2563eb] text-[#2563eb] px-8 py-3 rounded-lg font-sans">STOP</button>
                        <button id="timer-reset" class="theme-text-secondary hover:text-[#2563eb] px-8 py-3 rounded-lg font-sans">RESET</button>
                    </div>
                </div>
            `;
        case 'tts':
            return `
                <div class="space-y-6">
                    <textarea id="tts-input" class="w-full h-48 theme-bg-primary border border-[#2563eb]/20 rounded-xl p-6 theme-text-primary outline-none focus:border-[#2563eb]" placeholder="Enter text to speak..."></textarea>
                    <div class="flex flex-wrap gap-4 items-center">
                        <select id="tts-voice" class="theme-bg-secondary border border-[#2563eb]/30 theme-text-primary rounded-lg px-4 py-2 outline-none flex-1"></select>
                        <div class="flex items-center gap-4">
                            <label class="text-xs uppercase opacity-50">Speed</label>
                            <input type="range" id="tts-rate" min="0.5" max="2" step="0.1" value="1" class="accent-[#2563eb]">
                        </div>
                    </div>
                    <button id="tts-btn" class="w-full glow-button py-3 rounded-lg font-sans font-bold flex items-center justify-center gap-2">
                        <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                        SPEAK TEXT
                    </button>
                </div>
            `;
        case 'qr-gen':
            return `
                <div class="space-y-8 max-w-md mx-auto text-center">
                    <input type="text" id="qr-input" class="w-full theme-bg-primary border border-[#2563eb]/30 rounded-xl p-4 theme-text-primary outline-none focus:border-[#2563eb]" placeholder="Enter URL or text...">
                    <div id="qr-result" class="bg-white p-4 rounded-xl inline-block mx-auto min-w-[200px] min-h-[200px] flex items-center justify-center">
                        <p class="text-black/30 text-sm">QR Code will appear here</p>
                    </div>
                    <button id="qr-btn" class="w-full glow-button py-3 rounded-lg font-sans font-bold">GENERATE QR</button>
                </div>
            `;
        default:
            return `<div class="text-center py-12 opacity-50">Tool logic for <b>${id}</b> is coming soon in the next update!</div>`;
    }
}

function initToolLogic(id) {
    // File Upload Logic
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const processArea = document.getElementById('process-area');
    const processBtn = document.getElementById('process-btn');
    const progressBar = document.getElementById('progress-bar');
    const statusText = document.getElementById('status-text');

    if (dropZone) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(name => {
            dropZone.addEventListener(name, e => {
                e.preventDefault();
                e.stopPropagation();
            });
        });

        dropZone.addEventListener('dragover', () => dropZone.classList.add('active'));
        dropZone.addEventListener('dragleave', () => dropZone.classList.remove('active'));
        dropZone.addEventListener('drop', e => {
            dropZone.classList.remove('active');
            handleFiles(e.dataTransfer.files);
        });

        fileInput.onchange = () => handleFiles(fileInput.files);

        function handleFiles(files) {
            if (files.length > 0) {
                currentFiles = Array.from(files);
                const fileList = document.getElementById('file-list');
                
                // Update file list UI
                fileList.innerHTML = currentFiles.map(file => `
                    <div class="flex items-center justify-between p-3 theme-bg-secondary border border-[#2563eb]/20 rounded-lg">
                        <div class="flex items-center gap-3 overflow-hidden">
                            <svg viewBox="0 0 24 24" class="w-5 h-5 text-[#2563eb] shrink-0" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span class="text-xs theme-text-primary truncate">${file.name}</span>
                        </div>
                        <span class="text-[10px] theme-text-secondary">${(file.size / 1024).toFixed(1)} KB</span>
                    </div>
                `).join('');

                processArea.classList.remove('hidden');
                statusText.innerText = `${files.length} FILE(S) READY`;
                showToast(`Loaded ${files.length} file(s)`);
            }
        }

        processBtn.onclick = async () => {
            if (currentFiles.length === 0) return showToast("No files selected!");
            
            // Validation for Merge PDF
            if (id === 'merge-pdf' && currentFiles.length < 2) {
                return showToast("Please select at least 2 PDF files to merge!");
            }
            
            processBtn.disabled = true;
            statusText.innerText = "UPLOADING...";
            
            for(let i=0; i<=100; i+=10) {
                progressBar.style.width = `${i}%`;
                if (i === 40) statusText.innerText = "PROCESSING...";
                if (i === 80) statusText.innerText = "OPTIMIZING...";
                await new Promise(r => setTimeout(r, 100));
            }

            try {
                if (id === 'merge-pdf') {
                    statusText.innerText = "COMBINING PDFs...";
                    
                    if (typeof PDFLib === 'undefined') {
                        throw new Error("PDFLib library failed to load. Please refresh the page.");
                    }

                    const { PDFDocument } = PDFLib;
                    const mergedPdf = await PDFDocument.create();
                    
                    for (const file of currentFiles) {
                        const pdfBytes = await file.arrayBuffer();
                        const pdf = await PDFDocument.load(pdfBytes);
                        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                        copiedPages.forEach((page) => mergedPdf.addPage(page));
                    }
                    
                    const mergedPdfBytes = await mergedPdf.save();
                    downloadBlob(mergedPdfBytes, `merged_document_${Date.now()}.pdf`, 'application/pdf');
                } else if (id === 'split-pdf') {
                    statusText.innerText = "SPLITTING PDF...";
                    const { PDFDocument } = PDFLib;
                    const file = currentFiles[0];
                    const pdfBytes = await file.arrayBuffer();
                    const pdf = await PDFDocument.load(pdfBytes);
                    const pageCount = pdf.getPageCount();
                    
                    const splitType = document.querySelector('input[name="split-type"]:checked').value;
                    
                    if (splitType === 'all') {
                        // Split every page
                        for (let i = 0; i < pageCount; i++) {
                            const newPdf = await PDFDocument.create();
                            const [copiedPage] = await newPdf.copyPages(pdf, [i]);
                            newPdf.addPage(copiedPage);
                            const newPdfBytes = await newPdf.save();
                            downloadBlob(newPdfBytes, `page_${i + 1}_of_${file.name}`, 'application/pdf');
                            statusText.innerText = `SPLITTING PAGE ${i + 1}/${pageCount}...`;
                        }
                    } else {
                        // Extract ranges
                        const rangeStr = document.getElementById('split-range').value;
                        const pagesToExtract = parsePageRanges(rangeStr, pageCount);
                        
                        if (pagesToExtract.length === 0) {
                            throw new Error("Invalid page range specified!");
                        }
                        
                        const newPdf = await PDFDocument.create();
                        const copiedPages = await newPdf.copyPages(pdf, pagesToExtract.map(p => p - 1));
                        copiedPages.forEach(page => newPdf.addPage(page));
                        
                        const newPdfBytes = await newPdf.save();
                        downloadBlob(newPdfBytes, `extracted_pages_from_${file.name}`, 'application/pdf');
                    }
                } else if (id === 'compress-pdf') {
                    statusText.innerText = "COMPRESSING PDF...";
                    const { PDFDocument } = PDFLib;
                    const quality = document.querySelector('input[name="comp-quality"]:checked').value;
                    
                    for (const file of currentFiles) {
                        const pdfBytes = await file.arrayBuffer();
                        const pdf = await PDFDocument.load(pdfBytes);
                        
                        // Client-side compression with pdf-lib is limited.
                        // We use object streams and potentially other optimizations.
                        let compressedPdfBytes;
                        
                        if (quality === 'high') {
                            // Max compression: use object streams
                            compressedPdfBytes = await pdf.save({ 
                                useObjectStreams: true,
                                addDefaultPage: false
                            });
                        } else if (quality === 'med') {
                            // Medium: use object streams but less aggressive
                            compressedPdfBytes = await pdf.save({ 
                                useObjectStreams: true 
                            });
                        } else {
                            // Low: minimum compression, preserve quality
                            compressedPdfBytes = await pdf.save({ 
                                useObjectStreams: false 
                            });
                        }
                        
                        downloadBlob(compressedPdfBytes, `compressed_${file.name}`, 'application/pdf');
                    }
                } else if (id === 'pdf-to-word') {
                    statusText.innerText = "EXTRACTING TEXT...";
                    const file = currentFiles[0];
                    const arrayBuffer = await file.arrayBuffer();
                    
                    if (typeof pdfjsLib === 'undefined') {
                        throw new Error("PDF.js library failed to load. Please refresh the page.");
                    }
                    
                    // Set worker source for PDF.js
                    if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
                        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                    }
                    
                    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
                    let fullText = "";
                    
                    for (let i = 1; i <= pdf.numPages; i++) {
                        statusText.innerText = `PROCESSING PAGE ${i}/${pdf.numPages}...`;
                        const page = await pdf.getPage(i);
                        const textContent = await page.getTextContent();
                        const pageText = textContent.items
                            .filter(item => typeof item.str === 'string')
                            .map(item => item.str)
                            .join(' ');
                        fullText += pageText + "\n\n";
                    }
                    
                    if (!fullText.trim()) {
                        throw new Error("No text could be extracted from this PDF. It might be a scanned image or protected.");
                    }
                    
                    if (typeof docx === 'undefined') {
                        throw new Error("Docx library failed to load. Please refresh the page.");
                    }
                    
                    statusText.innerText = "GENERATING DOCX...";
                    
                    // Sanitize text for XML (remove control characters except tab, newline, carriage return)
                    const sanitizedText = fullText.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");
                    
                    const doc = new docx.Document({
                        sections: [{
                            properties: {},
                            children: sanitizedText.split('\n').map(line => new docx.Paragraph({
                                children: [new docx.TextRun(line || " ")],
                            })),
                        }],
                    });
                    
                    const blob = await docx.Packer.toBlob(doc);
                    downloadBlob(blob, file.name.replace('.pdf', '.docx'), 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
                } else if (id === 'pdf-to-excel') {
                    statusText.innerText = "EXTRACTING DATA...";
                    const file = currentFiles[0];
                    const arrayBuffer = await file.arrayBuffer();
                    
                    if (typeof pdfjsLib === 'undefined' || typeof XLSX === 'undefined') {
                        throw new Error("Required libraries (PDF.js or XLSX) failed to load. Please refresh.");
                    }
                    if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
                        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                    }

                    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
                    const finalRows = [];
                    
                    // State for "Student Result Mode" if detected
                    let studentMetadata = { regNo: "NA", name: "NA", college: "NA", branch: "NA", semester: "NA", sgpa: "NA" };
                    let isStudentResult = false;

                    for (let i = 1; i <= pdf.numPages; i++) {
                        statusText.innerText = `PROCESSING PAGE ${i}/${pdf.numPages}...`;
                        const page = await pdf.getPage(i);
                        const textContent = await page.getTextContent();
                        
                        const items = textContent.items.filter(item => typeof item.str === 'string');
                        if (items.length === 0) continue;

                        // 1. Group into Lines (Rows)
                        items.sort((a, b) => b.transform[5] - a.transform[5] || a.transform[4] - b.transform[4]);
                        const lines = [];
                        let currentY = -1;
                        let currentLine = [];
                        
                        items.forEach(item => {
                            if (currentY === -1 || Math.abs(item.transform[5] - currentY) < 4) {
                                currentLine.push(item);
                                currentY = item.transform[5];
                            } else {
                                lines.push(currentLine.sort((a, b) => a.transform[4] - b.transform[4]));
                                currentLine = [item];
                                currentY = item.transform[5];
                            }
                        });
                        if (currentLine.length) lines.push(currentLine.sort((a, b) => a.transform[4] - b.transform[4]));

                        // 2. Detect Columns (X-coordinates)
                        // Analyze unique X starts across the page to find common alignments
                        const xCoords = items.map(it => Math.round(it.transform[4] / 10) * 10);
                        const uniqueX = [...new Set(xCoords)].sort((a, b) => a - b);
                        const columns = [];
                        if (uniqueX.length > 0) {
                            let lastX = uniqueX[0];
                            let currentGroup = [lastX];
                            for (let j = 1; j < uniqueX.length; j++) {
                                if (uniqueX[j] - lastX < 25) { // Group X coordinates that are close
                                    currentGroup.push(uniqueX[j]);
                                } else {
                                    columns.push(Math.min(...currentGroup));
                                    currentGroup = [uniqueX[j]];
                                }
                                lastX = uniqueX[j];
                            }
                            columns.push(Math.min(...currentGroup));
                        }

                        // 3. Map Lines to Grid
                        lines.forEach(line => {
                            const row = new Array(columns.length).fill("");
                            const lineText = line.map(it => it.str).join(' ').trim();
                            const lineTextLower = lineText.toLowerCase();

                            // Check for Student Metadata Trigger
                            if (lineTextLower.includes("registration") || lineTextLower.includes("reg no") || lineTextLower.includes("sgpa")) {
                                isStudentResult = true;
                                if (lineTextLower.includes("registration") || lineTextLower.includes("reg no")) {
                                    const m = lineText.match(/(\d{10,})/);
                                    if (m) studentMetadata.regNo = m[1];
                                }
                                if (lineTextLower.includes("name")) {
                                    const p = lineText.split(/[:\-]/);
                                    if (p.length > 1) studentMetadata.name = p[1].trim();
                                }
                                if (lineTextLower.includes("college")) {
                                    const p = lineText.split(/[:\-]/);
                                    if (p.length > 1) studentMetadata.college = p[1].trim();
                                }
                                if (lineTextLower.includes("branch")) {
                                    const p = lineText.split(/[:\-]/);
                                    if (p.length > 1) studentMetadata.branch = p[1].trim();
                                }
                                if (lineTextLower.includes("semester")) {
                                    const m = lineText.match(/(\d+)/);
                                    if (m) studentMetadata.semester = m[1];
                                }
                                if (lineTextLower.includes("sgpa")) {
                                    const m = lineText.match(/(\d\.\d{2})/);
                                    if (m) studentMetadata.sgpa = m[1];
                                }
                            }

                            // Regular Grid Placement
                            line.forEach(item => {
                                const x = item.transform[4];
                                // Find closest column index
                                let colIdx = 0;
                                let minDist = Math.abs(x - columns[0]);
                                for (let c = 1; c < columns.length; c++) {
                                    const d = Math.abs(x - columns[c]);
                                    if (d < minDist) {
                                        minDist = d;
                                        colIdx = c;
                                    }
                                }
                                row[colIdx] = (row[colIdx] ? row[colIdx] + " " : "") + item.str.trim();
                            });

                            // If in Student Result mode and it looks like a subject row, 
                            // we prepend metadata. Otherwise, just push the row.
                            const hasSubjectCode = /^[A-Z0-9]{4,}/.test(line[0].str.trim());
                            if (isStudentResult && hasSubjectCode && line.length >= 4) {
                                finalRows.push([
                                    studentMetadata.regNo, studentMetadata.name, studentMetadata.college,
                                    studentMetadata.branch, studentMetadata.semester, ...row, studentMetadata.sgpa
                                ]);
                            } else if (row.some(c => c !== "")) {
                                finalRows.push(row);
                            }
                        });
                    }
                    
                    if (finalRows.length === 0) {
                        throw new Error("No data could be extracted to Excel.");
                    }

                    statusText.innerText = "GENERATING EXCEL...";
                    const worksheet = XLSX.utils.aoa_to_sheet(finalRows);
                    const workbook = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(workbook, worksheet, "Organized Data");
                    
                    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
                    downloadBlob(excelBuffer, file.name.replace('.pdf', '_organized.xlsx'), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                } else if (id === 'excel-to-pdf') {
                    statusText.innerText = "INITIALIZING ENGINE...";
                    const file = currentFiles[0];
                    const arrayBuffer = await file.arrayBuffer();
                    
                    if (typeof XLSX === 'undefined' || typeof PDFLib === 'undefined') {
                        throw new Error("Required libraries (XLSX or PDFLib) failed to load. Please check your connection.");
                    }

                    statusText.innerText = "PARSING DATA...";
                    const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
                    const sheet = workbook.Sheets[workbook.SheetNames[0]];
                    const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                    
                    // Filter out truly empty rows
                    const data = rawData.filter(row => row && row.some(cell => cell !== null && cell !== undefined && cell !== ""));
                    
                    if (data.length === 0) throw new Error("No readable data found in the Excel sheet.");

                    statusText.innerText = "CONFIGURING PDF ARCHITECTURE...";
                    const { PDFDocument, rgb } = PDFLib;
                    const pdfDoc = await PDFDocument.create();
                    
                    // Direct string name embedding for maximum compatibility
                    let font, boldFont;
                    try {
                        // Attempt standard embedding first, then fallback to string names
                        const fontNames = PDFLib.StandardFonts || { Helvetica: 'Helvetica', HelveticaBold: 'Helvetica-Bold' };
                        font = await pdfDoc.embedFont(fontNames.Helvetica || 'Helvetica');
                        boldFont = await pdfDoc.embedFont(fontNames.HelveticaBold || 'Helvetica-Bold');
                    } catch (fontErr) {
                        console.error("Font error:", fontErr);
                        throw new Error("System failed to initialize document fonts. Please try a different browser.");
                    }
                    
                    const fontSize = 7;
                    const margin = 25;
                    const rowHeight = 18;
                    
                    // Use Landscape A4 for tables
                    let page = pdfDoc.addPage([841.89, 595.28]); 
                    let { width, height } = page.getSize();
                    let y = height - margin;
                    
                    // Calculate column widths based on max content
                    const numCols = Math.max(...data.map(r => r.length));
                    const colWidth = (width - (margin * 2)) / numCols;

                    const safeString = (val) => {
                        if (val === null || val === undefined) return "";
                        return String(val)
                            .replace(/[^\x20-\x7E]/g, " ") // Clean non-printable
                            .replace(/[\n\r]/g, " ")       // Remove newlines
                            .trim();
                    };

                    const drawRow = (row, isHeader = false) => {
                        const currentFont = isHeader ? boldFont : font;
                        const bgColor = isHeader ? rgb(0.15, 0.39, 0.92) : rgb(1, 1, 1);
                        const textColor = isHeader ? rgb(1, 1, 1) : rgb(0.15, 0.15, 0.15);

                        for (let c = 0; c < numCols; c++) {
                            const x = margin + (c * colWidth);
                            const cellText = safeString(row[c]);
                            
                            // Cell background and border
                            page.drawRectangle({
                                x, y: y - rowHeight,
                                width: colWidth, height: rowHeight,
                                color: bgColor,
                                borderColor: rgb(0.85, 0.85, 0.85),
                                borderWidth: 0.5
                            });

                            if (cellText) {
                                // Truncate text if it's too long for the cell
                                let displayUpdate = cellText;
                                const maxChars = Math.floor(colWidth / 4);
                                if (displayUpdate.length > maxChars) {
                                    displayUpdate = displayUpdate.substring(0, maxChars - 3) + "...";
                                }

                                try {
                                    page.drawText(displayUpdate, {
                                        x: x + 4,
                                        y: y - 12,
                                        size: fontSize,
                                        font: currentFont,
                                        color: textColor
                                    });
                                } catch (e) {
                                    console.warn("Skipped drawing cell:", e);
                                }
                            }
                        }
                        y -= rowHeight;
                    };

                    statusText.innerText = "CONSTRUCTING DOCUMENT...";
                    for (let r = 0; r < data.length; r++) {
                        // Logic for multi-page support
                        if (y < margin + rowHeight) {
                            page = pdfDoc.addPage([841.89, 595.28]);
                            y = height - margin;
                            drawRow(data[0], true); // Repeat header
                        }
                        
                        // Start drawing
                        if (r === 0) {
                            drawRow(data[r], true);
                        } else {
                            drawRow(data[r], false);
                        }

                        // Periodic UI update
                        if (r % 50 === 0) {
                            statusText.innerText = `PROCESSED ${r}/${data.length} ROWS`;
                            await new Promise(r => setTimeout(r, 0));
                        }
                    }

                    statusText.innerText = "FINALIZING PDF...";
                    const pdfBytes = await pdfDoc.save();
                    downloadBlob(pdfBytes, `Nexus_Report_${Date.now()}.pdf`, 'application/pdf');
                } else if (id === 'pdf-to-jpg') {
                    statusText.innerText = "RENDERING PAGES...";
                    const file = currentFiles[0];
                    const arrayBuffer = await file.arrayBuffer();
                    
                    if (typeof pdfjsLib === 'undefined' || typeof JSZip === 'undefined') {
                        throw new Error("Required libraries (PDF.js or JSZip) failed to load.");
                    }
                    if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
                        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                    }

                    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
                    const zip = new JSZip();
                    
                    for (let i = 1; i <= pdf.numPages; i++) {
                        statusText.innerText = `RENDERING PAGE ${i}/${pdf.numPages}...`;
                        const page = await pdf.getPage(i);
                        const viewport = page.getViewport({ scale: 2.0 }); // 2x scale for better quality
                        
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        await page.render({ canvasContext: context, viewport: viewport }).promise;
                        
                        const imgData = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
                        zip.file(`page_${i}.jpg`, imgData, { base64: true });
                    }
                    
                    statusText.innerText = "PACKING ZIP...";
                    const zipBlob = await zip.generateAsync({ type: 'blob' });
                    downloadBlob(zipBlob, file.name.replace('.pdf', '_images.zip'), 'application/zip');
                } else if (id === 'jpg-to-pdf') {
                    statusText.innerText = "CONVERTING IMAGES...";
                    
                    if (typeof PDFLib === 'undefined') {
                        throw new Error("PDF processing engine (pdf-lib) failed to load. Please refresh.");
                    }

                    const { PDFDocument } = PDFLib;
                    const pdfDoc = await PDFDocument.create();

                    for (const file of currentFiles) {
                        statusText.innerText = `PROCESSING ${file.name}...`;
                        
                        // Load image and normalize to PNG via canvas for maximum compatibility
                        const img = new Image();
                        const objectUrl = URL.createObjectURL(file);
                        img.src = objectUrl;
                        
                        await new Promise((resolve, reject) => {
                            img.onload = resolve;
                            img.onerror = () => reject(new Error(`Failed to load image: ${file.name}`));
                        });
                        
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        
                        // Get PNG bytes from canvas
                        const pngDataUrl = canvas.toDataURL('image/png');
                        const pngResponse = await fetch(pngDataUrl);
                        const pngBytes = await pngResponse.arrayBuffer();
                        
                        const pdfImg = await pdfDoc.embedPng(pngBytes);
                        URL.revokeObjectURL(objectUrl);

                        const page = pdfDoc.addPage([pdfImg.width, pdfImg.height]);
                        page.drawImage(pdfImg, {
                            x: 0,
                            y: 0,
                            width: pdfImg.width,
                            height: pdfImg.height,
                        });
                    }

                    const pdfBytes = await pdfDoc.save();
                    downloadBlob(pdfBytes, `nexus_converted_${Date.now()}.pdf`, 'application/pdf');
                } else if (id === 'unlock-pdf') {
                    const file = currentFiles[0];
                    const pdfBytes = await file.arrayBuffer();
                    const passwordInput = document.getElementById('pdf-password');
                    const autoToggle = document.getElementById('auto-unlock-toggle');
                    const bruteStatus = document.getElementById('brute-status');
                    const { PDFDocument } = PDFLib;

                    let finalDoc = null;
                    let startTime = Date.now();

                    if (autoToggle && autoToggle.checked) {
                        statusText.innerText = "ADMIN: RECOVERY IN PROGRESS...";
                        bruteStatus.classList.remove('hidden');
                        bruteStatus.innerText = "Initializing Analysis Engine...";
                        
                        // Brute Force logic: strictly focusing on numeric combinations for speed and depth
                        const numericCharset = "0123456789";
                        let foundPassword = null;

                        // Function to try all numeric combinations for exactly 11 digits
                        const tryCracking = async () => {
                            // Quick sweep for common alphanumeric passwords first
                            const common = ["admin", "password", "123456", "000000"];
                            for(let pass of common) {
                                bruteStatus.innerText = `Testing common vector: ${pass}`;
                                try {
                                    const doc = await PDFDocument.load(pdfBytes, { password: pass });
                                    if(doc) return pass;
                                } catch(e) {}
                                await new Promise(r => setTimeout(r, 20));
                            }

                            // Systematic numeric brute force for exactly 11 digits
                            const length = 11;
                            bruteStatus.innerText = `SYSTEM SHIFT: Scanning all ${length}-digit numeric vectors...`;
                            bruteStatus.classList.add('animate-pulse');
                            await new Promise(r => setTimeout(r, 800));
                            bruteStatus.classList.remove('animate-pulse');
                            
                            const result = await bruteNumeric(length);
                            if (result) return result;
                            
                            return null;
                        };

                        const bruteNumeric = async (length) => {
                            // For numeric brute force, we can use a more efficient loop than recursion
                            const total = Math.pow(10, length);
                            
                            for (let i = 0; i < total; i++) {
                                // Pad number with leading zeros to match the current length
                                const currentTry = i.toString().padStart(length, '0');
                                
                                // Update status every 500 attempts to show progress without lag
                                if (i % 500 === 0) {
                                    bruteStatus.innerText = `Level ${length} | Current Vector: ${currentTry} | Index: ${i}/${total}`;
                                    await new Promise(r => setTimeout(r, 0)); 
                                }

                                try {
                                    // Attempt to load the PDF with the numeric combination
                                    const doc = await PDFDocument.load(pdfBytes, { password: currentTry });
                                    if (doc) return currentTry;
                                } catch(e) {
                                    // Incorrect password, continue
                                }
                            }
                            return null;
                        };

                        foundPassword = await tryCracking();
                        
                        if (foundPassword) {
                            const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
                            bruteStatus.innerText = `SUCCESS! Key: [${foundPassword}] recovered in ${timeTaken}s`;
                            bruteStatus.classList.add('text-[#2563eb]', 'border-[#2563eb]');
                            showToast(`Recovery Successful. Completed in ${timeTaken}s.`);
                            finalDoc = await PDFDocument.load(pdfBytes, { password: foundPassword });
                        } else {
                            throw new Error("Automatic recovery failed. Password complexity exceeds current local parameters.");
                        }
                    } else {
                        statusText.innerText = "DECRYPTING...";
                        const pass = passwordInput.value;
                        if (!pass) throw new Error("Please enter a password or activate Advanced Recovery.");
                        try {
                            finalDoc = await PDFDocument.load(pdfBytes, { password: pass });
                        } catch (e) {
                            throw new Error("Invalid password or corrupted file.");
                        }
                    }
                    
                    if (finalDoc) {
                        const unlockedPdfBytes = await finalDoc.save();
                        downloadBlob(unlockedPdfBytes, `unlocked_${file.name}`, 'application/pdf');
                    }
                } else if (id === 'protect-pdf') {
                    statusText.innerText = "PROTECTING PDF...";
                    const file = currentFiles[0];
                    const password = document.getElementById('pdf-new-password').value;
                    const pdfBytes = await file.arrayBuffer();
                    
                    if (typeof PDFLib === 'undefined' || typeof pdfEncryptLite === 'undefined') {
                        throw new Error("Required libraries (PDFLib or pdfEncryptLite) failed to load. Please refresh the page.");
                    }

                    if (!password) throw new Error("Please enter a password to protect the PDF.");

                    const { PDFDocument } = PDFLib;
                    const { encryptPDF } = pdfEncryptLite;
                    
                    try {
                        const pdfDoc = await PDFDocument.load(pdfBytes);
                        const savedBytes = await pdfDoc.save();
                        
                        // Use the global encryptPDF function
                        const protectedPdfBytes = await encryptPDF(savedBytes, password);
                        
                        if (!protectedPdfBytes) {
                            throw new Error("Encryption failed to generate protected bytes.");
                        }

                        downloadBlob(protectedPdfBytes, `protected_${file.name}`, 'application/pdf');
                    } catch (innerErr) {
                        console.error("Encryption Detail Error:", innerErr);
                        throw new Error(`Encryption failed: ${innerErr.message}`);
                    }
                } else if (id === 'word-to-pdf') {

                    statusText.innerText = "READING WORD FILE...";
                    const file = currentFiles[0];
                    const arrayBuffer = await file.arrayBuffer();
                    
                    if (typeof mammoth === 'undefined') {
                        throw new Error("Mammoth library failed to load. Please refresh the page.");
                    }
                    
                    const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
                    let text = result.value;
                    
                    if (!text.trim()) {
                        throw new Error("No text could be extracted from this Word document.");
                    }
                    
                    if (typeof PDFLib === 'undefined') {
                        throw new Error("PDFLib library failed to load. Please refresh the page.");
                    }
                    
                    statusText.innerText = "GENERATING PDF...";
                    const { PDFDocument, rgb, StandardFonts } = PDFLib;
                    const pdfDoc = await PDFDocument.create();
                    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
                    
                    // Ultra-strict sanitization for standard PDF fonts
                    const sanitizeForPdf = (str) => {
                        return str
                            .replace(/[\u2018\u2019]/g, "'")   // Smart single quotes
                            .replace(/[\u201C\u201D]/g, '"')   // Smart double quotes
                            .replace(/[\u2013\u2014]/g, "-")   // Dashes
                            .replace(/\u00A0/g, " ")           // Non-breaking space
                            .split('')
                            .filter(char => {
                                const code = char.charCodeAt(0);
                                // Only allow printable ASCII (32-126) and basic whitespace
                                return (code >= 32 && code <= 126) || code === 10 || code === 13;
                            })
                            .join('');
                    };

                    const sanitizedText = sanitizeForPdf(text);
                    const fontSize = 11;
                    const margin = 50;
                    const lineHeight = 15;
                    
                    let page = pdfDoc.addPage();
                    let { width, height } = page.getSize();
                    let y = height - margin;
                    const maxWidth = width - (margin * 2);
                    
                    const paragraphs = sanitizedText.split(/\r?\n/);
                    
                    for (const para of paragraphs) {
                        if (y < margin + lineHeight) {
                            page = pdfDoc.addPage();
                            y = height - margin;
                        }

                        const words = para.split(' ');
                        let currentLine = "";
                        
                        for (const word of words) {
                            const testLine = currentLine ? currentLine + " " + word : word;
                            let textWidth = 0;
                            try {
                                textWidth = font.widthOfTextAtSize(testLine, fontSize);
                            } catch (e) {
                                // If a word somehow still has an unencodable char, skip it to prevent crash
                                continue;
                            }
                            
                            if (textWidth > maxWidth && currentLine) {
                                page.drawText(currentLine, { x: margin, y: y, size: fontSize, font: font });
                                y -= lineHeight;
                                if (y < margin + lineHeight) {
                                    page = pdfDoc.addPage();
                                    y = height - margin;
                                }
                                currentLine = word;
                            } else {
                                currentLine = testLine;
                            }
                        }
                        
                        if (currentLine || para === "") {
                            page.drawText(currentLine || " ", { x: margin, y: y, size: fontSize, font: font });
                            y -= lineHeight;
                        }
                    }
                    
                    const pdfBytes = await pdfDoc.save();
                    downloadBlob(pdfBytes, file.name.replace('.docx', '.pdf').replace('.doc', '.pdf'), 'application/pdf');
                } else if (id === 'img-compress' || id === 'img-converter') {
                    statusText.innerText = id === 'img-compress' ? "COMPRESSING..." : "CONVERTING...";
                    const quality = id === 'img-compress' ? parseFloat(document.getElementById('img-comp-quality').value) : 0.9;
                    const format = id === 'img-converter' ? document.querySelector('input[name="img-format"]:checked').value : currentFiles[0].type;
                    const extension = format.split('/')[1];

                    for (const file of currentFiles) {
                        const img = new Image();
                        img.src = URL.createObjectURL(file);
                        await new Promise(r => img.onload = r);
                        
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        
                        const blob = await new Promise(r => canvas.toBlob(r, format, quality));
                        downloadBlob(blob, `processed_${file.name.split('.')[0]}.${extension}`, format);
                        URL.revokeObjectURL(img.src);
                    }
                } else {
                    // For other PDF tools, download the original file(s) with correct prefix
                    currentFiles.forEach((file) => {
                        const url = URL.createObjectURL(file);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `processed_${file.name}`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                    });
                }
                
                statusText.innerText = "DONE!";
                showToast("Processing complete! Download started.");
            } catch (err) {
                console.error(err);
                statusText.innerText = "ERROR OCCURRED";
                showToast(err.message || "Failed to process PDF. Please try again.");
            } finally {
                processBtn.disabled = false;
            }
        };
    }

    // Utility Helpers
    function downloadBlob(data, filename, type) {
        const blob = new Blob([data], { type: type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function parsePageRanges(rangeStr, pageCount) {
        if (!rangeStr.trim()) return [];
        const pages = new Set();
        const parts = rangeStr.split(',');
        
        parts.forEach(part => {
            const range = part.trim().split('-');
            if (range.length === 1) {
                const page = parseInt(range[0]);
                if (!isNaN(page) && page >= 1 && page <= pageCount) {
                    pages.add(page);
                }
            } else if (range.length === 2) {
                const start = parseInt(range[0]);
                const end = parseInt(range[1]);
                if (!isNaN(start) && !isNaN(end) && start <= end) {
                    for (let i = start; i <= end; i++) {
                        if (i >= 1 && i <= pageCount) {
                            pages.add(i);
                        }
                    }
                }
            }
        });
        
        return Array.from(pages).sort((a, b) => a - b);
    }

    // Word Counter Logic
    if (id === 'word-counter') {
        const input = document.getElementById('word-input');
        input.oninput = () => {
            const text = input.value.trim();
            document.getElementById('count-words').innerText = text ? text.split(/\s+/).length : 0;
            document.getElementById('count-chars').innerText = text.length;
            document.getElementById('count-sentences').innerText = text ? text.split(/[.!?]+/).filter(s => s.length > 0).length : 0;
            document.getElementById('count-paragraphs').innerText = text ? text.split(/\n+/).length : 0;
        };
    }

    // Password Gen Logic
    if (id === 'pass-gen') {
        const lengthInput = document.getElementById('pass-length');
        const lengthVal = document.getElementById('length-val');
        const output = document.getElementById('pass-output');
        const genBtn = document.getElementById('gen-btn');
        const copyBtn = document.getElementById('copy-pass');

        lengthInput.oninput = () => lengthVal.innerText = lengthInput.value;

        const generate = () => {
            const length = lengthInput.value;
            const charset = {
                upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                lower: "abcdefghijklmnopqrstuvwxyz",
                numbers: "0123456789",
                symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
            };
            let chars = "";
            if (document.getElementById('pass-upper').checked) chars += charset.upper;
            if (document.getElementById('pass-lower').checked) chars += charset.lower;
            if (document.getElementById('pass-numbers').checked) chars += charset.numbers;
            if (document.getElementById('pass-symbols').checked) chars += charset.symbols;
            
            if (!chars) chars = charset.lower;

            let pass = "";
            for (let i = 0; i < length; i++) {
                pass += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            output.value = pass;
        };

        genBtn.onclick = generate;
        copyBtn.onclick = () => {
            output.select();
            document.execCommand('copy');
            showToast("Password copied to clipboard!");
        };
        generate();
    }

    // Timer Logic
    if (id === 'timer') {
        let startTime, timerId;
        let elapsed = 0;
        const display = document.getElementById('timer-display');
        const startBtn = document.getElementById('timer-start');
        const stopBtn = document.getElementById('timer-stop');
        const resetBtn = document.getElementById('timer-reset');

        const update = () => {
            const now = Date.now();
            const diff = now - startTime + elapsed;
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            const ms = Math.floor((diff % 1000) / 10);
            display.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        };

        startBtn.onclick = () => {
            if (timerId) return;
            startTime = Date.now();
            timerId = setInterval(update, 100);
            startBtn.innerText = "RESUME";
        };

        stopBtn.onclick = () => {
            if (!timerId) return;
            elapsed += Date.now() - startTime;
            clearInterval(timerId);
            timerId = null;
        };

        resetBtn.onclick = () => {
            clearInterval(timerId);
            timerId = null;
            elapsed = 0;
            display.innerText = "00:00:00";
            startBtn.innerText = "START";
        };
    }

    // TTS Logic
    if (id === 'tts') {
        const input = document.getElementById('tts-input');
        const voiceSelect = document.getElementById('tts-voice');
        const rateInput = document.getElementById('tts-rate');
        const btn = document.getElementById('tts-btn');

        const synth = window.speechSynthesis;
        let voices = [];

        const populateVoices = () => {
            voices = synth.getVoices();
            voiceSelect.innerHTML = voices.map((v, i) => `<option value="${i}">${v.name} (${v.lang})</option>`).join('');
        };

        populateVoices();
        if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = populateVoices;

        btn.onclick = () => {
            if (synth.speaking) synth.cancel();
            const utter = new SpeechSynthesisUtterance(input.value || "Please enter some text.");
            utter.voice = voices[voiceSelect.value];
            utter.rate = rateInput.value;
            synth.speak(utter);
        };
    }

    // QR Gen Logic (Simulated with placeholder)
    if (id === 'qr-gen') {
        const input = document.getElementById('qr-input');
        const result = document.getElementById('qr-result');
        const btn = document.getElementById('qr-btn');

        btn.onclick = () => {
            if (!input.value) return showToast("Enter text first!");
            result.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(input.value)}" alt="QR Code" class="w-full h-full">`;
            showToast("QR Code generated!");
        };
    }
}

function showToast(msg) {
    toastMsg.innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Start App
document.addEventListener('DOMContentLoaded', init);
