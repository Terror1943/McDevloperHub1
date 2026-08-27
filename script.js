/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * MCDEVELOPERHUB - MAIN APPLICATION ENGINE & PRICING REGISTRY
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

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
      singlePrice: "₹1000",
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
        { label: "Standard", price: "₹500", highlight: false },
        { label: "Premium", price: "₹100", highlight: true }
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
