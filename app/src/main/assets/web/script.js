/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * MCDEVELOPERHUB - MAIN APPLICATION ENGINE & PRICING REGISTRY
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⚡ DISCORD PRICING CONFIGURATION (EASILY EDITABLE)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const DISCORD_BOT_PRICE = "₹1000";
const DISCORD_STANDARD_PRICE = "₹500";
const DISCORD_PREMIUM_PRICE = "₹1000";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 💰 SERVICE PRICES (EDIT YOUR SERVICES & PRICING HERE)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SERVICE_CONFIG = {
  currencySymbol: "₹",
  discordInviteUrl: "https://discord.gg/qsdzKXdFDk",
  supportEmail: "McDevloperHub@gmail.com",

  // 1. WEBSITE SERVICES
  websiteServices: [
    {
      id: "hosting-website",
      name: "Hosting Website",
      category: "Website",
      icon: "fa-solid fa-server",
      price: "₹1599",
      priceNumeric: 1599,
      description: "Complete modern hosting and billing platform website with game server ordering integration, customer portal, and fast responsive UI.",
      badge: "POPULAR",
      features: ["Modern Responsive UI", "Client Portal Ready", "Speed Optimized", "SEO & Meta Tag Setup"]
    },
    {
      id: "mc-server-website",
      name: "Minecraft Server Website",
      category: "Website",
      icon: "fa-solid fa-cube",
      price: "₹999",
      priceNumeric: 999,
      description: "High-impact Minecraft community portal with live server player count, Tebex/CraftingStore shop integration, rules, and staff list.",
      badge: "BESTSELLER",
      features: ["Live Player Counter", "Store Integration", "Custom Domain Ready", "Mobile Optimized"]
    },
    {
      id: "custom-website",
      name: "Others / Custom Website",
      category: "Website",
      icon: "fa-solid fa-code",
      price: "CUSTOM",
      priceNumeric: null,
      description: "Fully bespoke web application built from scratch to match your community or brand's exact specifications and database needs.",
      badge: "ENTERPRISE",
      features: ["Custom Architecture", "Database & API Integration", "Tailored Animations", "Full Source Code"]
    }
  ],

  // 2. MINECRAFT SERVICES
  minecraftServices: [
    {
      id: "proxy",
      name: "Proxy Setup",
      category: "Minecraft",
      icon: "fa-solid fa-network-wired",
      singlePrice: "₹100",
      description: "BungeeCord / Velocity high-performance proxy configuration, firewall rules, and backend server routing.",
      badge: "ESSENTIAL",
      features: ["Velocity / BungeeCord", "Anti-Bot Configuration", "Multi-Lobby Balancing"]
    },
    {
      id: "lobby",
      name: "Lobby Setup",
      category: "Minecraft",
      icon: "fa-solid fa-door-open",
      singlePrice: "₹200",
      description: "Feature-packed hub server with server selectors, parkour, cosmetic menus, spawn protections, and visual scoreboards.",
      badge: "FEATURED",
      features: ["Custom Server Selector", "Cosmetics & Gadgets", "Protected Spawn Region"]
    },
    {
      id: "survival",
      name: "Survival Server",
      category: "Minecraft",
      icon: "fa-solid fa-shield-cat",
      options: [
        { label: "Premade", price: "₹99", highlight: false },
        { label: "Custom / Not Premade", price: "₹999", highlight: true }
      ],
      description: "Classic or modern economy survival with land claims, custom shops, ranks, quests, auction house, and RTP.",
      badge: "POPULAR",
      features: ["Land Claiming System", "Economy & Auction House", "Ranks & Permissions", "Custom Quests"]
    },
    {
      id: "lifesteal",
      name: "Lifesteal Server",
      category: "Minecraft",
      icon: "fa-solid fa-heart-pulse",
      options: [
        { label: "Premade", price: "₹159", highlight: false },
        { label: "Custom / Not Premade", price: "₹1299", highlight: true }
      ],
      description: "Intense PvP Lifesteal experience with custom heart recipes, combat logging, player revive beacons, and coin shops.",
      badge: "TRENDING",
      features: ["Heart Stealing Logic", "Custom Crafting Recipes", "Combat Tagging Anti-Cheat", "PvP Arena"]
    },
    {
      id: "network",
      name: "Network Setup",
      category: "Minecraft",
      icon: "fa-solid fa-sitemap",
      options: [
        { label: "Premade", price: "₹699", highlight: false },
        { label: "Custom / Not Premade", price: "₹5000", highlight: true }
      ],
      description: "Complete full-scale Minecraft multi-server network architecture connecting Proxy, Hub, and multiple gamemodes seamlessly.",
      badge: "FULL SUITE",
      features: ["Cross-Server Sync", "Global Permissions & Ranks", "Redis & MySQL Setup", "Staff Chat Sync"]
    }
  ],

  // 3. DISCORD SERVICES
  discordServices: [
    {
      id: "discord-bot",
      name: "Discord Bot Development",
      category: "Discord",
      icon: "fa-solid fa-robot",
      singlePrice: DISCORD_BOT_PRICE,
      description: "Custom Discord bot development for automation, moderation, community management and gaming communities with slash commands and database storage.",
      badge: "POPULAR",
      features: ["Slash Commands & Buttons", "Ticket & Verify System", "Custom Automation Logic", "24/7 Hosting Guidance"]
    },
    {
      id: "discord-server",
      name: "Discord Server Setup",
      category: "Discord",
      icon: "fa-brands fa-discord",
      options: [
        { label: "Standard", price: DISCORD_STANDARD_PRICE, highlight: false },
        { label: "Premium", price: DISCORD_PREMIUM_PRICE, highlight: true }
      ],
      description: "Professional Discord server setup with organized channels, roles, permissions and community structure tailored for gaming.",
      badge: "COMMUNITY",
      features: ["Complete Role Hierarchy", "Permissions Audit & Security", "Welcome & Log Systems", "Aesthetic Channels & Emojis"]
    }
  ]
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INITIALIZATION & DOM ATTACHMENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener("DOMContentLoaded", () => {
  initLoadingScreen();
  renderAllServices();
  init3DLogoInteraction();
  initParticleCanvas();
  initNavbarAndScroll();
  initRevealAnimations();
  initBackToTop();
  initBackgroundMusic();
  initAuthSystem();
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. LOADING SCREEN ENGINE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function initLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  const loaderBar = document.getElementById("loader-bar");
  const loaderPercent = document.getElementById("loader-percent");
  
  if (!loadingScreen) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 8;
    if (progress > 100) progress = 100;

    if (loaderBar) loaderBar.style.width = `${progress}%`;
    if (loaderPercent) loaderPercent.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
      }, 350);
    }
  }, 45);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. DYNAMIC SERVICE CARD RENDERER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderAllServices() {
  renderWebsiteServices();
  renderMinecraftServices();
  renderDiscordServices();
}

function createOrderUrl(serviceName) {
  return `${SERVICE_CONFIG.discordInviteUrl}`;
}

function renderWebsiteServices() {
  const container = document.getElementById("website-services-container");
  if (!container) return;

  container.innerHTML = SERVICE_CONFIG.websiteServices.map(service => `
    <div class="service-card reveal-up" data-service-id="${service.id}">
      <div class="service-card-top">
        <div class="service-icon-box">
          <i class="${service.icon}"></i>
        </div>
        ${service.badge ? `<span class="service-badge-popular">${service.badge}</span>` : ""}
      </div>
      
      <h3 class="service-name">${service.name}</h3>
      <p class="service-desc">${service.description}</p>
      
      <div class="single-price-box">
        <span class="price-currency">${service.priceNumeric ? '₹' : ''}</span>
        <span class="price-val">${service.priceNumeric ? service.priceNumeric : service.price}</span>
        <span class="price-sub">${service.priceNumeric ? 'Starting Price' : 'Custom Quote'}</span>
      </div>

      <div class="service-card-footer">
        <a href="${createOrderUrl(service.name)}" target="_blank" rel="noopener noreferrer" class="btn-order">
          <i class="fa-brands fa-discord"></i>
          <span>Order Now</span>
        </a>
      </div>
    </div>
  `).join("");
}

function renderMinecraftServices() {
  const container = document.getElementById("minecraft-services-container");
  if (!container) return;

  container.innerHTML = SERVICE_CONFIG.minecraftServices.map(service => {
    let pricingHtml = "";

    if (service.options && service.options.length > 0) {
      pricingHtml = `
        <div class="service-pricing-options">
          ${service.options.map(opt => `
            <div class="price-option-row ${opt.highlight ? 'highlight' : ''}">
              <span class="option-type"><i class="fa-solid fa-check-circle text-red"></i> ${opt.label}</span>
              <span class="option-amount">${opt.price}</span>
            </div>
          `).join("")}
        </div>
      `;
    } else if (service.singlePrice) {
      pricingHtml = `
        <div class="single-price-box">
          <span class="price-currency">₹</span>
          <span class="price-val">${service.singlePrice.replace('₹', '')}</span>
          <span class="price-sub">Fixed Package</span>
        </div>
      `;
    }

    return `
      <div class="service-card reveal-up" data-service-id="${service.id}">
        <div class="service-card-top">
          <div class="service-icon-box">
            <i class="${service.icon}"></i>
          </div>
          ${service.badge ? `<span class="service-badge-popular">${service.badge}</span>` : ""}
        </div>
        
        <h3 class="service-name">${service.name}</h3>
        <p class="service-desc">${service.description}</p>
        
        ${pricingHtml}

        <div class="service-card-footer">
          <a href="${createOrderUrl(service.name)}" target="_blank" rel="noopener noreferrer" class="btn-order">
            <i class="fa-brands fa-discord"></i>
            <span>Order Now</span>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function renderDiscordServices() {
  const container = document.getElementById("discord-services-container");
  if (!container) return;

  container.innerHTML = SERVICE_CONFIG.discordServices.map(service => {
    let pricingHtml = "";

    if (service.options && service.options.length > 0) {
      pricingHtml = `
        <div class="service-pricing-options">
          ${service.options.map(opt => `
            <div class="price-option-row ${opt.highlight ? 'highlight' : ''}">
              <span class="option-type"><i class="fa-brands fa-discord text-red"></i> ${opt.label}</span>
              <span class="option-amount">${opt.price}</span>
            </div>
          `).join("")}
        </div>
      `;
    } else if (service.singlePrice) {
      pricingHtml = `
        <div class="single-price-box">
          <span class="price-currency">₹</span>
          <span class="price-val">${service.singlePrice.replace('₹', '')}</span>
          <span class="price-sub">Fixed Rate</span>
        </div>
      `;
    }

    return `
      <div class="service-card reveal-up" data-service-id="${service.id}">
        <div class="service-card-top">
          <div class="service-icon-box">
            <i class="${service.icon}"></i>
          </div>
          ${service.badge ? `<span class="service-badge-popular">${service.badge}</span>` : ""}
        </div>
        
        <h3 class="service-name">${service.name}</h3>
        <p class="service-desc">${service.description}</p>
        
        ${pricingHtml}

        <div class="service-card-footer">
          <a href="${createOrderUrl(service.name)}" target="_blank" rel="noopener noreferrer" class="btn-order">
            <i class="fa-brands fa-discord"></i>
            <span>Order Now</span>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. 3D FLOATING & INTERACTIVE TILTING LOGO
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function init3DLogoInteraction() {
  const scene = document.getElementById("logo-scene");
  const logoCard = document.getElementById("floating-logo");

  if (!scene || !logoCard) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let bounds = scene.getBoundingClientRect();
  
  function updateBounds() {
    bounds = scene.getBoundingClientRect();
  }
  window.addEventListener("resize", updateBounds);
  window.addEventListener("scroll", updateBounds);

  let mouseX = 0;
  let mouseY = 0;
  let currentTiltX = 0;
  let currentTiltY = 0;
  let isHovered = false;

  scene.addEventListener("mouseenter", () => {
    isHovered = true;
    logoCard.style.animation = "none";
  });

  scene.addEventListener("mouseleave", () => {
    isHovered = false;
    logoCard.style.animation = "floatLogo 5s ease-in-out infinite";
    mouseX = 0;
    mouseY = 0;
  });

  scene.addEventListener("mousemove", (e) => {
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    
    // Normalize coordinates between -1 and 1
    mouseX = (x / bounds.width - 0.5) * 2;
    mouseY = (y / bounds.height - 0.5) * 2;
  });

  // Touch support for mobile devices
  scene.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const x = touch.clientX - bounds.left;
      const y = touch.clientY - bounds.top;
      mouseX = (x / bounds.width - 0.5) * 2;
      mouseY = (y / bounds.height - 0.5) * 2;
    }
  }, { passive: true });

  // Animation Loop with smooth dampening
  function renderTilt() {
    if (isHovered) {
      const targetTiltX = -mouseY * 22; // Invert for natural pitch
      const targetTiltY = mouseX * 22;

      currentTiltX += (targetTiltX - currentTiltX) * 0.1;
      currentTiltY += (targetTiltY - currentTiltY) * 0.1;

      logoCard.style.transform = `perspective(1000px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg) scale3d(1.05, 1.05, 1.05)`;
    }
    requestAnimationFrame(renderTilt);
  }
  renderTilt();
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. BACKGROUND CYBER PARTICLES CANVAS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 25 : 55;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 34, 71, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ff2247";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting cyber lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 34, 71, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. NAVBAR, SCROLL & MOBILE MENU
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function initNavbarAndScroll() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect on Navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Hamburger Menu Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active Link Highlighting with IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. SCROLL REVEAL ANIMATIONS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal-fade, .reveal-up, .reveal-scale");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. BACK TO TOP BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. FUTURISTIC BACKGROUND MUSIC ENGINE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const MUSIC_CONFIG = {
  audioPath: "audio/background-music.mp3",
  defaultVolume: 0.15, // 15% Default Volume
  fadeInDuration: 800,
  fadeOutDuration: 600,
  storageKeyEnabled: "mcdevhub_music_enabled",
  storageKeyVolume: "mcdevhub_music_volume"
};

function initBackgroundMusic() {
  const widget = document.getElementById("music-player-widget");
  const playBtn = document.getElementById("music-play-btn");
  const playIcon = document.getElementById("music-play-icon");
  const muteBtn = document.getElementById("music-mute-btn");
  const volumeIcon = document.getElementById("music-volume-icon");
  const volumeSlider = document.getElementById("music-volume-slider");
  const volumeText = document.getElementById("music-volume-text");

  if (!widget) return;

  // Retrieve saved user preferences from localStorage
  const savedEnabled = localStorage.getItem(MUSIC_CONFIG.storageKeyEnabled);
  const isEnabled = savedEnabled === null ? true : savedEnabled === "true";

  const savedVolume = localStorage.getItem(MUSIC_CONFIG.storageKeyVolume);
  let currentVolume = savedVolume !== null ? parseFloat(savedVolume) : MUSIC_CONFIG.defaultVolume;
  if (isNaN(currentVolume) || currentVolume < 0 || currentVolume > 1) {
    currentVolume = MUSIC_CONFIG.defaultVolume;
  }

  let isPlaying = false;
  let isMuted = currentVolume === 0;
  let previousVolume = currentVolume > 0 ? currentVolume : MUSIC_CONFIG.defaultVolume;
  let fadeInterval = null;
  let isUsingSynthFallback = false;

  // HTML5 Audio element instance
  const audio = new Audio();
  audio.src = MUSIC_CONFIG.audioPath;
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = 0; // Starts at 0 for smooth fade-in

  // Web Audio Synth Fallback (Ambient dark futuristic drone/synth pad)
  let synthContext = null;
  let synthGainNode = null;
  let synthOscillators = [];

  function initSynthFallback() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!synthContext) {
        synthContext = new AudioContext();
      }

      synthGainNode = synthContext.createGain();
      synthGainNode.gain.setValueAtTime(0, synthContext.currentTime);

      const filter = synthContext.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(520, synthContext.currentTime);
      filter.Q.setValueAtTime(3.5, synthContext.currentTime);

      // Cyber Ambient chord notes (C minor 9: C, Eb, G, Bb, D)
      const frequencies = [65.41, 130.81, 155.56, 196.00, 233.08, 293.66];
      synthOscillators = [];

      frequencies.forEach((freq, index) => {
        const osc = synthContext.createOscillator();
        osc.type = index % 2 === 0 ? "sawtooth" : "sine";
        osc.frequency.setValueAtTime(freq, synthContext.currentTime);

        const lfo = synthContext.createOscillator();
        lfo.frequency.setValueAtTime(0.08 + index * 0.025, synthContext.currentTime);
        const lfoGain = synthContext.createGain();
        lfoGain.gain.setValueAtTime(index % 2 === 0 ? 1.2 : 0.6, synthContext.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        const oscGain = synthContext.createGain();
        oscGain.gain.setValueAtTime(0.12 / frequencies.length, synthContext.currentTime);

        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        synthOscillators.push(osc);
      });

      filter.connect(synthGainNode);
      synthGainNode.connect(synthContext.destination);
    } catch (e) {
      console.warn("Synth fallback initialized gracefully:", e);
    }
  }

  // Handle Audio error -> Gracefully activate Web Audio Synth fallback
  audio.addEventListener("error", () => {
    isUsingSynthFallback = true;
    if (isPlaying) {
      if (!synthContext) initSynthFallback();
      if (synthContext && synthContext.state === "suspended") {
        synthContext.resume();
      }
      fadeIn(currentVolume);
    }
  });

  // UI Updates
  function updateUI() {
    const displayVol = isMuted ? 0 : currentVolume;

    if (volumeSlider) {
      volumeSlider.value = displayVol;
    }
    if (volumeText) {
      volumeText.textContent = `${Math.round(displayVol * 100)}%`;
    }

    // Volume icon
    if (volumeIcon) {
      if (isMuted || currentVolume === 0) {
        volumeIcon.className = "fa-solid fa-volume-xmark text-red";
      } else if (currentVolume < 0.5) {
        volumeIcon.className = "fa-solid fa-volume-low";
      } else {
        volumeIcon.className = "fa-solid fa-volume-high";
      }
    }

    // Play/Pause icon
    if (playIcon) {
      playIcon.className = isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";
    }

    // Equalizer animation
    if (isPlaying) {
      widget.classList.add("playing");
    } else {
      widget.classList.remove("playing");
    }
  }

  // Smooth Fade In
  function fadeIn(targetVolume, duration = MUSIC_CONFIG.fadeInDuration) {
    clearInterval(fadeInterval);
    const effectiveTarget = isMuted ? 0 : targetVolume;
    const startTime = performance.now();
    const startVolume = isUsingSynthFallback && synthGainNode ? synthGainNode.gain.value : audio.volume;

    fadeInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const vol = startVolume + (effectiveTarget - startVolume) * progress;

      if (isUsingSynthFallback && synthGainNode && synthContext) {
        synthGainNode.gain.setValueAtTime(vol, synthContext.currentTime);
      } else {
        audio.volume = vol;
      }

      if (progress >= 1) {
        clearInterval(fadeInterval);
        if (isUsingSynthFallback && synthGainNode && synthContext) {
          synthGainNode.gain.setValueAtTime(effectiveTarget, synthContext.currentTime);
        } else {
          audio.volume = effectiveTarget;
        }
      }
    }, 25);
  }

  // Smooth Fade Out
  function fadeOut(duration = MUSIC_CONFIG.fadeOutDuration, callback) {
    clearInterval(fadeInterval);
    const startTime = performance.now();
    const startVolume = isUsingSynthFallback && synthGainNode ? synthGainNode.gain.value : audio.volume;

    fadeInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const vol = startVolume * (1 - progress);

      if (isUsingSynthFallback && synthGainNode && synthContext) {
        synthGainNode.gain.setValueAtTime(vol, synthContext.currentTime);
      } else {
        audio.volume = vol;
      }

      if (progress >= 1) {
        clearInterval(fadeInterval);
        if (isUsingSynthFallback && synthGainNode && synthContext) {
          synthGainNode.gain.setValueAtTime(0, synthContext.currentTime);
        } else {
          audio.volume = 0;
        }
        if (callback) callback();
      }
    }, 25);
  }

  // Play Music
  function startPlayback() {
    isPlaying = true;
    localStorage.setItem(MUSIC_CONFIG.storageKeyEnabled, "true");
    updateUI();

    if (!isUsingSynthFallback) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            fadeIn(currentVolume);
          })
          .catch((err) => {
            // Autoplay blocked by browser policy -> Setup silent one-time first interaction fallback
            isPlaying = false;
            updateUI();
            setupFirstInteractionFallback();
          });
      }
    } else {
      if (!synthContext) initSynthFallback();
      if (synthContext && synthContext.state === "suspended") {
        synthContext.resume().catch(() => {});
      }
      fadeIn(currentVolume);
    }
  }

  // Pause Music
  function pausePlayback() {
    isPlaying = false;
    localStorage.setItem(MUSIC_CONFIG.storageKeyEnabled, "false");
    updateUI();

    fadeOut(MUSIC_CONFIG.fadeOutDuration, () => {
      if (!isUsingSynthFallback) {
        audio.pause();
      }
    });
  }

  // One-time interaction fallback if browser blocks initial autoplay
  let hasSetupInteractionListener = false;
  function setupFirstInteractionFallback() {
    if (hasSetupInteractionListener) return;
    hasSetupInteractionListener = true;

    const onFirstUserInteraction = () => {
      const userEnabled = localStorage.getItem(MUSIC_CONFIG.storageKeyEnabled) !== "false";
      if (userEnabled && !isPlaying) {
        startPlayback();
      }
      ["click", "touchstart", "keydown", "pointerdown"].forEach(ev => {
        document.removeEventListener(ev, onFirstUserInteraction);
      });
    };

    ["click", "touchstart", "keydown", "pointerdown"].forEach(ev => {
      document.addEventListener(ev, onFirstUserInteraction, { once: true, passive: true });
    });
  }

  // Toggle Play / Pause
  function togglePlay() {
    if (isPlaying) {
      pausePlayback();
    } else {
      isMuted = false;
      if (currentVolume === 0) currentVolume = MUSIC_CONFIG.defaultVolume;
      startPlayback();
    }
  }

  // Toggle Mute / Unmute
  function toggleMute() {
    if (isMuted) {
      isMuted = false;
      currentVolume = previousVolume > 0 ? previousVolume : MUSIC_CONFIG.defaultVolume;
      if (!isPlaying) {
        startPlayback();
      } else {
        fadeIn(currentVolume);
      }
    } else {
      previousVolume = currentVolume;
      isMuted = true;
      fadeOut(MUSIC_CONFIG.fadeOutDuration);
    }
    localStorage.setItem(MUSIC_CONFIG.storageKeyVolume, currentVolume.toString());
    updateUI();
  }

  // Volume Slider Change
  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      currentVolume = val;
      isMuted = val === 0;
      if (val > 0) previousVolume = val;

      if (!isUsingSynthFallback) {
        audio.volume = val;
      } else if (synthGainNode && synthContext) {
        synthGainNode.gain.setValueAtTime(val, synthContext.currentTime);
      }

      if (val > 0 && !isPlaying) {
        startPlayback();
      }

      localStorage.setItem(MUSIC_CONFIG.storageKeyVolume, val.toString());
      updateUI();
    });
  }

  // Event Listeners
  if (playBtn) playBtn.addEventListener("click", togglePlay);
  if (muteBtn) muteBtn.addEventListener("click", toggleMute);

  // Initialize UI state
  updateUI();

  // Attempt Autoplay on Load
  if (isEnabled) {
    startPlayback();
  } else {
    setupFirstInteractionFallback();
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   9. AUTHENTICATION & CLIENT ACCOUNT SYSTEM (GOOGLE, DISCORD, GMAIL)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const AUTH_STORAGE_KEY = "mcdevhub_current_user";
const USERS_DB_KEY = "mcdevhub_users_db";
const RESET_TOKENS_KEY = "mcdevhub_reset_tokens";

function initAuthSystem() {
  // Modal Elements
  const authModal = document.getElementById("auth-modal");
  const accountModal = document.getElementById("account-modal");
  const btnOpenLogin = document.getElementById("btn-open-login");
  const btnCloseAuthModal = document.getElementById("btn-close-auth-modal");
  const btnCloseAccountModal = document.getElementById("btn-close-account-modal");

  // Tab & Header Controls
  const authMainTabs = document.getElementById("auth-main-tabs");
  const authForgotHeader = document.getElementById("auth-forgot-header");
  const btnForgotBackNav = document.getElementById("btn-forgot-back-nav");
  const socialAuthContainer = document.getElementById("social-auth-container");
  const socialAuthDivider = document.getElementById("social-auth-divider");

  // Tab Buttons & Forms
  const tabBtnSignin = document.getElementById("tab-btn-signin");
  const tabBtnSignup = document.getElementById("tab-btn-signup");
  const formSignin = document.getElementById("form-signin");
  const formSignup = document.getElementById("form-signup");
  const formForgotRequest = document.getElementById("form-forgot-request");
  const formForgotVerify = document.getElementById("form-forgot-verify");
  const authAlert = document.getElementById("auth-alert");
  const authAlertText = document.getElementById("auth-alert-text");

  // Forgot Password Controls
  const btnForgotPassword = document.getElementById("btn-forgot-password");
  const btnForgotToSignin = document.getElementById("btn-forgot-to-signin");
  const btnCancelReset = document.getElementById("btn-cancel-reset");
  const forgotEmailInput = document.getElementById("forgot-email-input");
  const tokenEmailDisplay = document.getElementById("token-email-display");
  const simulatedTokenCode = document.getElementById("simulated-token-code");
  const btnAutofillToken = document.getElementById("btn-autofill-token");
  const forgotTokenCode = document.getElementById("forgot-token-code");
  const forgotNewPassword = document.getElementById("forgot-new-password");
  const forgotConfirmPassword = document.getElementById("forgot-confirm-password");
  const tokenCountdownTimer = document.getElementById("token-countdown-timer");
  const btnResendToken = document.getElementById("btn-resend-token");

  // Social Auth Buttons
  const btnAuthGoogle = document.getElementById("btn-auth-google");
  const btnAuthDiscord = document.getElementById("btn-auth-discord");

  // User Dropdown Elements in Navbar
  const navAuthContainer = document.getElementById("nav-auth-container");
  const navUserDropdown = document.getElementById("nav-user-dropdown");
  const btnUserProfileToggle = document.getElementById("btn-user-profile-toggle");
  const userMenuPopover = document.getElementById("user-menu-popover");
  const userNavAvatar = document.getElementById("user-nav-avatar");
  const userNavName = document.getElementById("user-nav-name");

  // Popover info elements
  const menuUserAvatar = document.getElementById("menu-user-avatar");
  const menuUserName = document.getElementById("menu-user-name");
  const menuUserEmail = document.getElementById("menu-user-email");
  const menuProviderBadge = document.getElementById("menu-provider-badge");
  const btnMenuAccount = document.getElementById("btn-menu-account");
  const btnUserLogout = document.getElementById("btn-user-logout");

  // Account Modal Elements
  const accModalAvatar = document.getElementById("acc-modal-avatar");
  const accModalName = document.getElementById("acc-modal-name");
  const accModalEmail = document.getElementById("acc-modal-email");
  const accModalProviderIcon = document.getElementById("acc-modal-provider-icon");
  const accModalId = document.getElementById("acc-modal-id");
  const accModalDiscord = document.getElementById("acc-modal-discord");
  const accModalJoined = document.getElementById("acc-modal-joined");
  const btnModalLogout = document.getElementById("btn-modal-logout");

  // State for reset token timer
  let activeResetEmail = "";
  let tokenCountdownInterval = null;

  // Password Reveal Buttons
  const pwToggleButtons = document.querySelectorAll(".btn-toggle-pw");
  pwToggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const input = document.getElementById(targetId);
      if (!input) return;
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      btn.innerHTML = isPassword ? '<i class="fa-solid fa-eye text-red"></i>' : '<i class="fa-solid fa-eye-slash"></i>';
    });
  });

  // Local storage Database helpers
  function getUsersDB() {
    try {
      const raw = localStorage.getItem(USERS_DB_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveUserToDB(user) {
    const users = getUsersDB();
    const index = users.findIndex((u) => u.email.toLowerCase() === user.email.toLowerCase());
    if (index >= 0) {
      users[index] = { ...users[index], ...user };
    } else {
      users.push(user);
    }
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
  }

  function updateUserPassword(email, newPassword) {
    const users = getUsersDB();
    const index = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].password = newPassword;
    } else {
      // Create account entry if not existed yet
      users.push({
        id: `MCDH-${Math.floor(1000 + Math.random() * 9000)}`,
        name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
        email: email,
        password: newPassword,
        provider: "email",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80",
        discord: "Linked",
        joined: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
      });
    }
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
  }

  function getCurrentUser() {
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function setCurrentUser(user) {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
    updateAuthUI();
  }

  // Token Store Helpers
  function getTokensDB() {
    try {
      const raw = localStorage.getItem(RESET_TOKENS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveTokenForEmail(email, tokenCode, durationMs = 10 * 60 * 1000) {
    const tokens = getTokensDB();
    const expiresAt = Date.now() + durationMs;
    tokens[email.toLowerCase()] = {
      token: tokenCode,
      expiresAt: expiresAt,
      created: Date.now()
    };
    localStorage.setItem(RESET_TOKENS_KEY, JSON.stringify(tokens));
    return expiresAt;
  }

  function getTokenForEmail(email) {
    const tokens = getTokensDB();
    return tokens[email.toLowerCase()] || null;
  }

  function removeTokenForEmail(email) {
    const tokens = getTokensDB();
    delete tokens[email.toLowerCase()];
    localStorage.setItem(RESET_TOKENS_KEY, JSON.stringify(tokens));
  }

  // Alert in modal
  function showAuthAlert(msg, type = "error") {
    if (!authAlert || !authAlertText) return;
    authAlertText.textContent = msg;
    authAlert.className = `auth-alert ${type}`;
    const icon = authAlert.querySelector("i");
    if (icon) {
      icon.className = type === "success" ? "fa-solid fa-circle-check" : "fa-solid fa-circle-exclamation";
    }
    authAlert.style.display = "flex";
  }

  function hideAuthAlert() {
    if (authAlert) authAlert.style.display = "none";
  }

  // Countdown timer for Reset Token
  function startTokenCountdown(expiresAt) {
    if (tokenCountdownInterval) clearInterval(tokenCountdownInterval);

    function updateTimer() {
      const remainingMs = expiresAt - Date.now();
      if (remainingMs <= 0) {
        clearInterval(tokenCountdownInterval);
        if (tokenCountdownTimer) tokenCountdownTimer.textContent = "00:00 (Expired)";
        showAuthAlert("Verification token has expired. Please click 'Resend Code'.", "error");
        return;
      }

      const totalSeconds = Math.floor(remainingMs / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      if (tokenCountdownTimer) {
        tokenCountdownTimer.textContent = formatted;
      }
    }

    updateTimer();
    tokenCountdownInterval = setInterval(updateTimer, 1000);
  }

  // Tab switching (Sign In vs Sign Up vs Forgot Password)
  function switchTab(tab) {
    hideAuthAlert();

    // Reset visibility of all forms
    if (formSignin) formSignin.classList.remove("active");
    if (formSignup) formSignup.classList.remove("active");
    if (formForgotRequest) formForgotRequest.classList.remove("active");
    if (formForgotVerify) formForgotVerify.classList.remove("active");

    if (tab === "signin") {
      if (authMainTabs) authMainTabs.style.display = "grid";
      if (authForgotHeader) authForgotHeader.style.display = "none";
      if (socialAuthContainer) socialAuthContainer.style.display = "flex";
      if (socialAuthDivider) socialAuthDivider.style.display = "flex";
      if (tabBtnSignin) tabBtnSignin.classList.add("active");
      if (tabBtnSignup) tabBtnSignup.classList.remove("active");
      if (formSignin) formSignin.classList.add("active");
    } else if (tab === "signup") {
      if (authMainTabs) authMainTabs.style.display = "grid";
      if (authForgotHeader) authForgotHeader.style.display = "none";
      if (socialAuthContainer) socialAuthContainer.style.display = "flex";
      if (socialAuthDivider) socialAuthDivider.style.display = "flex";
      if (tabBtnSignup) tabBtnSignup.classList.add("active");
      if (tabBtnSignin) tabBtnSignin.classList.remove("active");
      if (formSignup) formSignup.classList.add("active");
    } else if (tab === "forgot-request") {
      if (authMainTabs) authMainTabs.style.display = "none";
      if (authForgotHeader) authForgotHeader.style.display = "flex";
      if (socialAuthContainer) socialAuthContainer.style.display = "none";
      if (socialAuthDivider) socialAuthDivider.style.display = "none";
      if (formForgotRequest) formForgotRequest.classList.add("active");
      if (forgotEmailInput) {
        const signinEmail = document.getElementById("signin-email");
        if (signinEmail && signinEmail.value) {
          forgotEmailInput.value = signinEmail.value;
        }
        setTimeout(() => forgotEmailInput.focus(), 100);
      }
    } else if (tab === "forgot-verify") {
      if (authMainTabs) authMainTabs.style.display = "none";
      if (authForgotHeader) authForgotHeader.style.display = "flex";
      if (socialAuthContainer) socialAuthContainer.style.display = "none";
      if (socialAuthDivider) socialAuthDivider.style.display = "none";
      if (formForgotVerify) formForgotVerify.classList.add("active");
      if (forgotTokenCode) setTimeout(() => forgotTokenCode.focus(), 100);
    }
  }

  if (tabBtnSignin) tabBtnSignin.addEventListener("click", () => switchTab("signin"));
  if (tabBtnSignup) tabBtnSignup.addEventListener("click", () => switchTab("signup"));

  // Forgot password triggers
  if (btnForgotPassword) {
    btnForgotPassword.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("forgot-request");
    });
  }

  if (btnForgotBackNav) btnForgotBackNav.addEventListener("click", () => switchTab("signin"));
  if (btnForgotToSignin) btnForgotToSignin.addEventListener("click", () => switchTab("signin"));
  if (btnCancelReset) btnCancelReset.addEventListener("click", () => switchTab("signin"));

  // Function to dispatch / generate token
  function handleGenerateToken(email) {
    activeResetEmail = email.toLowerCase();
    
    // Generate secure 6-digit numeric token
    const tokenCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = saveTokenForEmail(activeResetEmail, tokenCode);

    if (tokenEmailDisplay) tokenEmailDisplay.textContent = activeResetEmail;
    if (simulatedTokenCode) simulatedTokenCode.textContent = tokenCode;
    if (forgotTokenCode) forgotTokenCode.value = "";

    startTokenCountdown(expiresAt);
    switchTab("forgot-verify");

    showToast("Verification Token Sent", `Security token dispatched to ${activeResetEmail}. Check simulated box.`, "info");
  }

  // Submit Step 1: Request Verification Token
  if (formForgotRequest) {
    formForgotRequest.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = forgotEmailInput.value.trim();
      if (!email || !email.includes("@")) {
        showAuthAlert("Please enter a valid Gmail / Email address.", "error");
        return;
      }
      handleGenerateToken(email);
    });
  }

  // Auto-fill token helper
  if (btnAutofillToken) {
    btnAutofillToken.addEventListener("click", () => {
      const code = simulatedTokenCode ? simulatedTokenCode.textContent : "";
      if (code && code !== "------" && forgotTokenCode) {
        forgotTokenCode.value = code;
        showToast("Auto-filled", "Verification code inserted into form.", "info");
      }
    });
  }

  // Resend code button
  if (btnResendToken) {
    btnResendToken.addEventListener("click", () => {
      if (!activeResetEmail) {
        switchTab("forgot-request");
        return;
      }
      handleGenerateToken(activeResetEmail);
    });
  }

  // Submit Step 2: Verify Token and Reset Password
  if (formForgotVerify) {
    formForgotVerify.addEventListener("submit", (e) => {
      e.preventDefault();
      const enteredToken = forgotTokenCode.value.trim();
      const newPw = forgotNewPassword.value;
      const confirmPw = forgotConfirmPassword.value;

      if (!activeResetEmail) {
        showAuthAlert("Session expired. Please request a new code.", "error");
        switchTab("forgot-request");
        return;
      }

      const tokenRecord = getTokenForEmail(activeResetEmail);

      if (!tokenRecord) {
        showAuthAlert("No active verification token found. Please request a new one.", "error");
        return;
      }

      if (Date.now() > tokenRecord.expiresAt) {
        showAuthAlert("Verification token has expired. Please click 'Resend Code'.", "error");
        return;
      }

      if (enteredToken !== tokenRecord.token) {
        showAuthAlert("Invalid verification token code. Please check and re-enter.", "error");
        return;
      }

      if (newPw.length < 6) {
        showAuthAlert("New password must be at least 6 characters.", "error");
        return;
      }

      if (newPw !== confirmPw) {
        showAuthAlert("Passwords do not match. Please verify.", "error");
        return;
      }

      // Password successfully verified & reset
      updateUserPassword(activeResetEmail, newPw);
      removeTokenForEmail(activeResetEmail);
      if (tokenCountdownInterval) clearInterval(tokenCountdownInterval);

      // Pre-fill email in sign in form
      const signinEmail = document.getElementById("signin-email");
      if (signinEmail) signinEmail.value = activeResetEmail;

      const signinPassword = document.getElementById("signin-password");
      if (signinPassword) {
        signinPassword.value = "";
        setTimeout(() => signinPassword.focus(), 150);
      }

      // Reset forms
      formForgotVerify.reset();
      formForgotRequest.reset();

      switchTab("signin");
      showAuthAlert("Password has been reset successfully! Please sign in with your new password.", "success");
      showToast("Password Reset Complete", `Your password for ${activeResetEmail} has been updated.`, "success");
    });
  }

  // Modal open / close handlers
  function openAuthModal(defaultTab = "signin") {
    if (!authModal) return;
    switchTab(defaultTab);
    authModal.classList.add("open");
    authModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.remove("open");
    authModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    hideAuthAlert();
    if (tokenCountdownInterval) clearInterval(tokenCountdownInterval);
  }

  function openAccountModal() {
    const user = getCurrentUser();
    if (!user) return openAuthModal("signin");

    if (accModalAvatar) accModalAvatar.src = user.avatar || "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&auto=format&fit=crop&q=80";
    if (accModalName) accModalName.textContent = user.name || "Client";
    if (accModalEmail) accModalEmail.textContent = user.email || "client@gmail.com";
    if (accModalId) accModalId.textContent = user.id || `MCDH-${Math.floor(1000 + Math.random() * 9000)}`;
    if (accModalDiscord) accModalDiscord.textContent = user.discord || "Ready / Linked";
    if (accModalJoined) accModalJoined.textContent = user.joined || "Aug 2026";

    if (accModalProviderIcon) {
      if (user.provider === "google") {
        accModalProviderIcon.innerHTML = '<i class="fa-brands fa-google text-red"></i>';
      } else if (user.provider === "discord") {
        accModalProviderIcon.innerHTML = '<i class="fa-brands fa-discord text-blurple"></i>';
      } else {
        accModalProviderIcon.innerHTML = '<i class="fa-solid fa-envelope text-red"></i>';
      }
    }

    if (accountModal) {
      accountModal.classList.add("open");
      accountModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function closeAccountModal() {
    if (!accountModal) return;
    accountModal.classList.remove("open");
    accountModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (btnOpenLogin) btnOpenLogin.addEventListener("click", () => openAuthModal("signin"));
  if (btnCloseAuthModal) btnCloseAuthModal.addEventListener("click", closeAuthModal);
  if (btnCloseAccountModal) btnCloseAccountModal.addEventListener("click", closeAccountModal);

  // Close modals by clicking on backdrop
  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) closeAuthModal();
    });
  }
  if (accountModal) {
    accountModal.addEventListener("click", (e) => {
      if (e.target === accountModal) closeAccountModal();
    });
  }

  // Popover toggle
  if (btnUserProfileToggle && userMenuPopover) {
    btnUserProfileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      userMenuPopover.classList.toggle("show");
    });
  }

  document.addEventListener("click", (e) => {
    if (userMenuPopover && userMenuPopover.classList.contains("show")) {
      if (!userMenuPopover.contains(e.target) && !btnUserProfileToggle.contains(e.target)) {
        userMenuPopover.classList.remove("show");
      }
    }
  });

  if (btnMenuAccount) {
    btnMenuAccount.addEventListener("click", () => {
      if (userMenuPopover) userMenuPopover.classList.remove("show");
      openAccountModal();
    });
  }

  // Logout handler
  function handleLogout() {
    const user = getCurrentUser();
    const userName = user ? user.name : "Client";
    setCurrentUser(null);
    if (userMenuPopover) userMenuPopover.classList.remove("show");
    closeAccountModal();
    showToast("Signed Out", `You have successfully logged out. See you soon, ${userName}!`, "info");
  }

  if (btnUserLogout) btnUserLogout.addEventListener("click", handleLogout);
  if (btnModalLogout) btnModalLogout.addEventListener("click", handleLogout);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 1. GOOGLE AUTHENTICATION FLOW
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (btnAuthGoogle) {
    btnAuthGoogle.addEventListener("click", () => {
      const defaultGoogleName = "Google Developer User";
      const defaultGoogleEmail = "developer.hub.user@gmail.com";
      
      const googleUser = {
        id: `MCDH-G${Math.floor(1000 + Math.random() * 9000)}`,
        name: defaultGoogleName,
        email: defaultGoogleEmail,
        provider: "google",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
        discord: "Linked with Google ID",
        joined: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
      };

      saveUserToDB(googleUser);
      setCurrentUser(googleUser);
      closeAuthModal();
      showToast("Google Connected", `Welcome to MCDeveloperHub, ${googleUser.name}!`, "success");
    });
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 2. DISCORD AUTHENTICATION FLOW
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (btnAuthDiscord) {
    btnAuthDiscord.addEventListener("click", () => {
      const discordTag = prompt("Enter your Discord username (or click OK for instant guest sync):", "gamer_terror#1943") || "DiscordGamer#0001";
      
      const discordUser = {
        id: `MCDH-DC${Math.floor(1000 + Math.random() * 9000)}`,
        name: discordTag.split("#")[0],
        email: `${discordTag.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}@discord.user`,
        provider: "discord",
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&auto=format&fit=crop&q=80",
        discord: discordTag,
        joined: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
      };

      saveUserToDB(discordUser);
      setCurrentUser(discordUser);
      closeAuthModal();
      showToast("Discord Linked", `Authenticated as ${discordUser.discord}!`, "success");
    });
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 3. GMAIL / EMAIL SIGN IN FLOW
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (formSignin) {
    formSignin.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signin-email").value.trim();
      const password = document.getElementById("signin-password").value;

      if (!email || !password) {
        showAuthAlert("Please fill in both email and password.", "error");
        return;
      }

      // Check against existing users database or grant access
      const users = getUsersDB();
      const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

      const signedInUser = existing || {
        id: `MCDH-${Math.floor(1000 + Math.random() * 9000)}`,
        name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
        email: email,
        provider: "email",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80",
        discord: "Pending Link",
        joined: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
      };

      saveUserToDB(signedInUser);
      setCurrentUser(signedInUser);
      closeAuthModal();
      formSignin.reset();
      showToast("Welcome Back", `Successfully signed in as ${signedInUser.name}!`, "success");
    });
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 4. GMAIL / EMAIL SIGN UP FLOW
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (formSignup) {
    formSignup.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signup-name").value.trim();
      const email = document.getElementById("signup-email").value.trim();
      const discord = document.getElementById("signup-discord").value.trim();
      const password = document.getElementById("signup-password").value;
      const confirmPassword = document.getElementById("signup-confirm-password").value;

      if (password.length < 6) {
        showAuthAlert("Password must be at least 6 characters.", "error");
        return;
      }

      if (password !== confirmPassword) {
        showAuthAlert("Passwords do not match. Please re-check.", "error");
        return;
      }

      const newUser = {
        id: `MCDH-${Math.floor(1000 + Math.random() * 9000)}`,
        name: name || email.split("@")[0],
        email: email,
        password: password,
        provider: "email",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80",
        discord: discord || "Linked",
        joined: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
      };

      saveUserToDB(newUser);
      setCurrentUser(newUser);
      closeAuthModal();
      formSignup.reset();
      showToast("Account Created", `Welcome to MCDeveloperHub, ${newUser.name}!`, "success");
    });
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 5. UPDATE AUTH UI STATE ACROSS APP
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  function updateAuthUI() {
    const user = getCurrentUser();

    if (user) {
      if (btnOpenLogin) btnOpenLogin.style.display = "none";
      if (navUserDropdown) navUserDropdown.style.display = "block";

      if (userNavAvatar) userNavAvatar.src = user.avatar || "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format&fit=crop&q=80";
      if (userNavName) userNavName.textContent = user.name || "Client";

      if (menuUserAvatar) menuUserAvatar.src = user.avatar || "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format&fit=crop&q=80";
      if (menuUserName) menuUserName.textContent = user.name || "Client";
      if (menuUserEmail) menuUserEmail.textContent = user.email || "";

      if (menuProviderBadge) {
        if (user.provider === "google") {
          menuProviderBadge.innerHTML = '<i class="fa-brands fa-google text-red"></i>';
        } else if (user.provider === "discord") {
          menuProviderBadge.innerHTML = '<i class="fa-brands fa-discord text-blurple"></i>';
        } else {
          menuProviderBadge.innerHTML = '<i class="fa-solid fa-envelope text-red"></i>';
        }
      }
    } else {
      if (btnOpenLogin) btnOpenLogin.style.display = "inline-flex";
      if (navUserDropdown) navUserDropdown.style.display = "none";
      if (userMenuPopover) userMenuPopover.classList.remove("show");
    }
  }

  // Initialize UI on startup
  updateAuthUI();
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   10. CYBER TOAST NOTIFICATION ENGINE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function showToast(title, message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-item ${type}`;

  const iconClass =
    type === "success"
      ? "fa-solid fa-circle-check text-green"
      : type === "info"
      ? "fa-solid fa-bell text-red"
      : "fa-solid fa-circle-exclamation text-red";

  toast.innerHTML = `
    <i class="${iconClass} toast-icon"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.add("show");
  }, 50);

  // Auto dismiss after 4.5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 4500);
}

