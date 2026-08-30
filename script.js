/* =========================================
   PORTFOLIO — PREMIUM JAVASCRIPT ENGINE
   =========================================
   All portfolio logic: data, rendering, 
   animations, admin CRUD, localStorage, 
   command palette, particles, and more.
   ========================================= */

'use strict';

/* ─────────────────────────────────────────
   1. DEFAULT DATA
   ───────────────────────────────────────── */
const DEFAULT_DATA = {
  profile: {
    name: 'Guru',
    title: 'Full-Stack Developer',
    titles: ['Full-Stack Developer', 'Python Developer', 'Django Specialist', 'REST API Engineer', 'React Developer'],
    bio: 'A passionate full-stack developer crafting modern, elegant, and performant digital experiences. Specializing in Python, Django, React, and cutting-edge web technologies.',
    resumeLink: '#',
    profilePhoto: '',
    coverImage: ''
  },
  social: {
    email: 'hello@guru.dev',
    phone: '+91 XXXXXXXXXX',
    whatsapp: '',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: '',
    twitter: '',
    portfolio: '',
    location: 'India'
  },
  skills: [
    { name: 'Python', icon: 'devicon-python-plain', percentage: 90, color: '#3776ab' },
    { name: 'Django', icon: 'devicon-django-plain', percentage: 85, color: '#092e20' },
    { name: 'REST API', icon: 'fas fa-plug', percentage: 85, color: '#ff6b6b' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', percentage: 80, color: '#f7df1e' },
    { name: 'HTML5', icon: 'devicon-html5-plain', percentage: 95, color: '#e34f26' },
    { name: 'CSS3', icon: 'devicon-css3-plain', percentage: 90, color: '#1572b6' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', percentage: 88, color: '#7952b3' },
    { name: 'React', icon: 'devicon-react-original', percentage: 70, color: '#61dafb' },
    { name: 'Git', icon: 'devicon-git-plain', percentage: 85, color: '#f05032' },
    { name: 'GitHub', icon: 'devicon-github-original', percentage: 90, color: '#fff' },
    { name: 'Docker', icon: 'devicon-docker-plain', percentage: 65, color: '#2496ed' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', percentage: 75, color: '#4169e1' },
    { name: 'Linux', icon: 'devicon-linux-plain', percentage: 70, color: '#fcc624' }
  ],
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Django, REST API, and React. Includes user authentication, product management, cart, checkout with Stripe integration, and an admin dashboard.',
      image: '',
      github: 'https://github.com',
      live: '#',
      tags: ['Python', 'Django', 'React', 'PostgreSQL'],
      category: 'Web App'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'A collaborative task management app with real-time updates, drag-and-drop boards, team assignments, and deadline tracking. Built using Django REST Framework.',
      image: '',
      github: 'https://github.com',
      live: '#',
      tags: ['Django', 'REST API', 'JavaScript'],
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A premium glassmorphism portfolio website with animated particles, admin panel, and dynamic content management. Built with vanilla JavaScript and Bootstrap 5.',
      image: '',
      github: 'https://github.com',
      live: '#',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Blog API Platform',
      description: 'RESTful blog API with JWT authentication, CRUD operations, comment system, and category management. Complete with Swagger documentation.',
      image: '',
      github: 'https://github.com',
      live: '#',
      tags: ['Python', 'Django', 'REST API'],
      category: 'API'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location search, 7-day forecast, interactive charts, and dark mode. Uses OpenWeatherMap API.',
      image: '',
      github: 'https://github.com',
      live: '#',
      tags: ['JavaScript', 'CSS', 'API'],
      category: 'Frontend'
    },
    {
      id: 6,
      title: 'Docker Deployment Pipeline',
      description: 'Automated CI/CD pipeline for Django applications using Docker, GitHub Actions, and cloud deployment. Includes staging and production environments.',
      image: '',
      github: 'https://github.com',
      live: '#',
      tags: ['Docker', 'Linux', 'Git'],
      category: 'DevOps'
    }
  ],
  experience: [
    {
      title: 'Full-Stack Developer',
      company: 'Freelance',
      duration: '2024 – Present',
      description: 'Building custom web applications and REST APIs for clients worldwide. Specializing in Django, React, and modern deployment practices.'
    },
    {
      title: 'Python Developer Intern',
      company: 'Tech Startup',
      duration: '2023 – 2024',
      description: 'Developed backend services and APIs using Python and Django. Collaborated with frontend team to integrate UI components.'
    }
  ],
  education: [
    {
      title: "Bachelor's in Computer Science",
      institution: 'University',
      duration: '2021 – 2025',
      description: 'Focused on software engineering, data structures, algorithms, and web development. Participated in coding competitions and hackathons.'
    },
    {
      title: 'Higher Secondary (XII)',
      institution: 'School',
      duration: '2019 – 2021',
      description: 'Science stream with Computer Science. Developed foundation in programming and mathematics.'
    }
  ],
  certificates: [
    {
      title: 'Python for Everybody',
      issuer: 'Coursera - University of Michigan',
      image: '',
      link: '#'
    },
    {
      title: 'Django for Beginners',
      issuer: 'Udemy',
      image: '',
      link: '#'
    },
    {
      title: 'JavaScript Algorithms & DS',
      issuer: 'freeCodeCamp',
      image: '',
      link: '#'
    },
    {
      title: 'React — The Complete Guide',
      issuer: 'Udemy',
      image: '',
      link: '#'
    }
  ],
  achievements: [
    { title: 'Hackathon Winner', description: 'First place in university-level hackathon with a social impact project.', icon: 'fas fa-trophy' },
    { title: 'Open Source Contributor', description: 'Active contributor to multiple open-source projects on GitHub.', icon: 'fas fa-code-branch' },
    { title: '1000+ Commits', description: 'Consistent coding practice with over 1000 GitHub contributions.', icon: 'fas fa-fire' },
    { title: 'Tech Community Leader', description: 'Organized coding workshops and tech meetups for students.', icon: 'fas fa-users' }
  ],
  services: [
    { title: 'Web Development', description: 'Full-stack web applications with modern technologies, responsive design, and optimal performance.', icon: 'fas fa-globe' },
    { title: 'API Development', description: 'RESTful API design and development with Django REST Framework, authentication, and documentation.', icon: 'fas fa-plug' },
    { title: 'Frontend Design', description: 'Beautiful, responsive UI/UX design with HTML, CSS, JavaScript, and modern frameworks.', icon: 'fas fa-paint-brush' },
    { title: 'Database Design', description: 'Efficient database architecture with PostgreSQL, query optimization, and data modeling.', icon: 'fas fa-database' },
    { title: 'DevOps & Deployment', description: 'Docker containerization, CI/CD pipelines, and cloud deployment for scalable applications.', icon: 'fas fa-server' },
    { title: 'Technical Consulting', description: 'Architecture guidance, code reviews, and tech stack recommendations for your project.', icon: 'fas fa-lightbulb' }
  ],
  contact: {
    email: 'hello@guru.dev',
    phone: '+91 XXXXXXXXXX',
    whatsapp: '',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    supportEmail: 'support@guru.dev',
    address: 'India',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1'
  },
  settings: {
    theme: 'dark',
    accent: 'blue',
    glassIntensity: 0.06,
    animSpeed: 1,
    particles: true,
    cursorEffects: true,
    musicEnabled: false
  },
  stats: {
    projects: 15,
    experience: 2,
    technologies: 12,
    certificates: 8
  }
};

/* ─────────────────────────────────────────
   2. STATE MANAGEMENT
   ───────────────────────────────────────── */
let portfolioData = {};
let isAdminOpen = false;
let currentAdminPanel = 'dashboard';
let editingIndex = -1; // for CRUD operations

function loadData() {
  const saved = localStorage.getItem('portfolioData');
  if (saved) {
    try {
      portfolioData = JSON.parse(saved);
      // Merge with defaults to add any new fields
      portfolioData = deepMerge(structuredClone(DEFAULT_DATA), portfolioData);
    } catch (e) {
      portfolioData = structuredClone(DEFAULT_DATA);
    }
  } else {
    portfolioData = structuredClone(DEFAULT_DATA);
  }
}

function saveData() {
  localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

/* ─────────────────────────────────────────
   3. INITIALIZATION
   ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  applyTheme();
  renderAll();
  initLoader();
  initThemeToggle();
  initParticles();
  initScrollEffects();
  initTypingAnimation();
  initCounterAnimation();
  initCursorGlow();
  initMagneticButtons();
  initRippleEffect();
  initNavHighlight();
  initContactForm();
  initCommandPalette();
  initKeyboardShortcuts();
  initVisitorCounter();
  initMusicToggle();
  initFloatingIcons();
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  if (localStorage.getItem('isAdminOpen') === 'true') {
    // Delay slightly to ensure UI is ready before overlaying
    setTimeout(openAdminPanel, 100);
  }
});

/* ─────────────────────────────────────────
   4. RENDERING ENGINE
   ───────────────────────────────────────── */
function renderAll() {
  renderProfile();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCertificates();
  renderAchievements();
  renderServices();
  renderContactInfo();
  renderFooterSocial();
}

function renderProfile() {
  const p = portfolioData.profile;
  const s = portfolioData.social;
  const st = portfolioData.stats;

  document.getElementById('hero-name').textContent = p.name;
  document.getElementById('hero-bio').textContent = p.bio;
  document.getElementById('nav-logo-text').textContent = p.name;
  document.getElementById('footer-logo-text').textContent = p.name;
  document.title = `${p.name} — ${p.title} Portfolio`;

  // Profile image
  const profileImg = document.getElementById('hero-profile-img');
  if (p.profilePhoto) {
    profileImg.src = p.profilePhoto;
  } else {
    profileImg.src = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(p.name.charAt(0))}&backgroundColor=3b82f6&textColor=ffffff&fontSize=42`;
  }

  // Resume link
  document.getElementById('resume-btn').href = p.resumeLink || '#';

  // Social links
  const ghBtn = document.getElementById('github-hero-btn');
  const liBtn = document.getElementById('linkedin-hero-btn');
  if (s.github) ghBtn.href = s.github;
  if (s.linkedin) liBtn.href = s.linkedin;

  // Stats
  const counters = document.querySelectorAll('.counter');
  const statKeys = ['projects', 'experience', 'technologies', 'certificates'];
  counters.forEach((c, i) => {
    c.setAttribute('data-target', st[statKeys[i]] || 0);
  });
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = '';
  if (portfolioData.skills.length === 0) {
    grid.innerHTML = '<div class="col-12 no-items"><i class="fas fa-cogs d-block"></i><p>No skills added yet.</p></div>';
    return;
  }
  portfolioData.skills.forEach((skill, i) => {
    const div = document.createElement('div');
    div.className = 'col-6 col-md-4 col-lg-3';
    div.innerHTML = `
      <div class="glass-card skill-card reveal" style="transition-delay: ${i * 0.05}s">
        <div class="skill-icon-wrapper">
          <i class="${skill.icon}" style="color: ${skill.color || 'var(--accent)'}"></i>
        </div>
        <div class="skill-name">${escHtml(skill.name)}</div>
        <div class="skill-bar">
          <div class="skill-bar-fill" data-width="${skill.percentage}"></div>
        </div>
        <div class="skill-percentage">${skill.percentage}%</div>
      </div>
    `;
    grid.appendChild(div);
  });
}

function renderProjects() {
  const filtersEl = document.getElementById('project-filters');
  // Categories
  const categories = [...new Set(portfolioData.projects.map(p => p.category).filter(Boolean))];
  filtersEl.innerHTML = '<button class="filter-btn active" data-filter="all">All</button>';
  categories.forEach(cat => {
    filtersEl.innerHTML += `<button class="filter-btn" data-filter="${escHtml(cat)}">${escHtml(cat)}</button>`;
  });
  // Re-bind filter clicks
  filtersEl.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProjects(btn.dataset.filter);
    });
  });

  renderProjectsList('all');
}

function renderProjectsList(categoryFilter) {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  
  const filteredProjects = portfolioData.projects.filter(proj => categoryFilter === 'all' || proj.category === categoryFilter);

  if (filteredProjects.length === 0) {
    grid.innerHTML = '<div class="col-12 no-items"><i class="fas fa-folder-open d-block"></i><p>No projects found.</p></div>';
    return;
  }
  
  filteredProjects.forEach((proj, i) => {
    const originalIndex = portfolioData.projects.indexOf(proj);
    
    // Parse images (comma-separated if multiple)
    let images = [];
    if (proj.image) {
      images = proj.image.split(',').map(url => url.trim()).filter(url => url);
    }
    if (images.length === 0) {
      images = [generateProjectPlaceholder(proj.title)];
    }

    // Generate image HTML (Carousel if multiple, single image if one)
    let imageHTML = '';
    if (images.length > 1) {
      const carouselId = `projectCarousel-${originalIndex}`;
      let indicators = '';
      let innerItems = '';
      images.forEach((imgSrc, imgIdx) => {
        indicators += `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${imgIdx}" class="${imgIdx === 0 ? 'active' : ''}" aria-label="Slide ${imgIdx + 1}" onclick="event.stopPropagation()"></button>`;
        innerItems += `
          <div class="carousel-item ${imgIdx === 0 ? 'active' : ''}">
            <img src="${imgSrc}" alt="${escHtml(proj.title)} - Image ${imgIdx + 1}" class="project-card-img" loading="lazy">
          </div>
        `;
      });
      imageHTML = `
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" onclick="event.stopPropagation()">
          <div class="carousel-indicators">
            ${indicators}
          </div>
          <div class="carousel-inner" style="border-radius: var(--radius-lg) var(--radius-lg) 0 0; overflow: hidden;">
            ${innerItems}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev" onclick="event.stopPropagation()">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next" onclick="event.stopPropagation()">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      `;
    } else {
      imageHTML = `
        <div style="overflow:hidden;border-radius:var(--radius-lg) var(--radius-lg) 0 0;">
          <img src="${images[0]}" alt="${escHtml(proj.title)}" class="project-card-img" loading="lazy">
        </div>
      `;
    }

    const div = document.createElement('div');
    div.className = 'project-item';
    div.dataset.category = proj.category || '';
    div.innerHTML = `
      <div class="glass-card project-card reveal" style="transition-delay: ${i * 0.08}s; cursor: pointer;" onclick="openProjectModal(${originalIndex})">
        ${imageHTML}
        <div class="project-card-body">
          <h5 class="project-card-title">${escHtml(proj.title)}</h5>
          <p class="project-card-desc">${escHtml(proj.description)}</p>
          <div class="project-tags">
            ${(proj.tags || []).map(t => `<span class="project-tag">${escHtml(t)}</span>`).join('')}
          </div>
          <div class="project-card-links" onclick="event.stopPropagation()">
            ${proj.github ? `<a href="${escHtml(proj.github)}" class="project-link-btn" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>` : ''}
            ${proj.live && proj.live !== '#' ? `<a href="${escHtml(proj.live)}" class="project-link-btn primary" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
          </div>
        </div>
      </div>
    `;
    grid.appendChild(div);
  });
  
  setTimeout(() => {
    triggerRevealAnimations();
  }, 50);
}

function filterProjects(category) {
  renderProjectsList(category);
}

function openProjectModal(index) {
  const proj = portfolioData.projects[index];
  if (!proj) return;
  const imgSrc = proj.image || generateProjectPlaceholder(proj.title);
  document.getElementById('projectModalTitle').textContent = proj.title;
  document.getElementById('projectModalBody').innerHTML = `
    <img src="${imgSrc}" alt="${escHtml(proj.title)}" class="w-100 mb-3" style="border-radius:var(--radius-md); max-height: 350px; object-fit: cover;">
    <p style="color:var(--text-secondary); line-height:1.8;">${escHtml(proj.description)}</p>
    <div class="project-tags mb-3">
      ${(proj.tags || []).map(t => `<span class="project-tag">${escHtml(t)}</span>`).join('')}
    </div>
    ${proj.category ? `<p class="mb-3"><strong>Category:</strong> <span class="text-accent">${escHtml(proj.category)}</span></p>` : ''}
    <div class="d-flex gap-2 flex-wrap">
      ${proj.github ? `<a href="${escHtml(proj.github)}" class="btn-premium btn-outline-premium" target="_blank"><i class="fab fa-github"></i> View Code</a>` : ''}
      ${proj.live && proj.live !== '#' ? `<a href="${escHtml(proj.live)}" class="btn-premium btn-primary-premium" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
    </div>
  `;
  new bootstrap.Modal(document.getElementById('projectModal')).show();
}

function renderExperience() {
  const tl = document.getElementById('experience-timeline');
  tl.innerHTML = '';
  if (portfolioData.experience.length === 0) {
    tl.innerHTML = '<div class="no-items"><i class="fas fa-briefcase d-block"></i><p>No experience added yet.</p></div>';
    return;
  }
  portfolioData.experience.forEach((exp, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item reveal';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="glass-card timeline-card">
        <span class="timeline-date"><i class="fas fa-calendar-alt"></i> ${escHtml(exp.duration)}</span>
        <h5 class="timeline-title">${escHtml(exp.title)}</h5>
        <div class="timeline-company">${escHtml(exp.company)}</div>
        <p class="timeline-desc">${escHtml(exp.description)}</p>
      </div>
    `;
    tl.appendChild(div);
  });
}

function renderEducation() {
  const tl = document.getElementById('education-timeline');
  tl.innerHTML = '';
  if (portfolioData.education.length === 0) {
    tl.innerHTML = '<div class="no-items"><i class="fas fa-graduation-cap d-block"></i><p>No education added yet.</p></div>';
    return;
  }
  portfolioData.education.forEach((edu, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item reveal';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="glass-card timeline-card">
        <span class="timeline-date"><i class="fas fa-calendar-alt"></i> ${escHtml(edu.duration)}</span>
        <h5 class="timeline-title">${escHtml(edu.title)}</h5>
        <div class="timeline-company">${escHtml(edu.institution)}</div>
        <p class="timeline-desc">${escHtml(edu.description)}</p>
      </div>
    `;
    tl.appendChild(div);
  });
}

function renderCertificates() {
  const grid = document.getElementById('certificates-grid');
  grid.innerHTML = '';
  if (portfolioData.certificates.length === 0) {
    grid.innerHTML = '<div class="col-12 no-items"><i class="fas fa-certificate d-block"></i><p>No certificates added yet.</p></div>';
    return;
  }
  portfolioData.certificates.forEach((cert, i) => {
    const imgSrc = cert.image || `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(cert.title)}&backgroundColor=1a1a24`;
    const div = document.createElement('div');
    div.className = 'col-md-6 col-lg-3';
    div.innerHTML = `
      <div class="glass-card cert-card reveal" style="transition-delay: ${i * 0.08}s">
        <img src="${imgSrc}" alt="${escHtml(cert.title)}" class="cert-card-img" loading="lazy" 
             onclick="openLightbox('${imgSrc}')" style="cursor: zoom-in;">
        <div class="cert-card-body">
          <h6 class="cert-card-title">${escHtml(cert.title)}</h6>
          <p class="cert-card-issuer">${escHtml(cert.issuer)}</p>
          <div class="cert-card-actions">
            ${cert.link && cert.link !== '#' 
              ? `<a href="${escHtml(cert.link)}" class="project-link-btn primary" target="_blank" rel="noopener"><i class="fas fa-eye"></i> View</a>` 
              : `<a href="#!" class="project-link-btn primary" onclick="openLightbox('${imgSrc}'); return false;"><i class="fas fa-eye"></i> View</a>`
            }
          </div>
        </div>
      </div>
    `;
    grid.appendChild(div);
  });
}

function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  grid.innerHTML = '';
  if (portfolioData.achievements.length === 0) {
    grid.innerHTML = '<div class="col-12 no-items"><i class="fas fa-trophy d-block"></i><p>No achievements added yet.</p></div>';
    return;
  }
  portfolioData.achievements.forEach((ach, i) => {
    const div = document.createElement('div');
    div.className = 'col-md-6 col-lg-3';
    div.innerHTML = `
      <div class="glass-card achievement-card reveal" style="transition-delay: ${i * 0.08}s">
        <div class="achievement-icon"><i class="${ach.icon || 'fas fa-star'}"></i></div>
        <h6 class="achievement-title">${escHtml(ach.title)}</h6>
        <p class="achievement-desc">${escHtml(ach.description)}</p>
      </div>
    `;
    grid.appendChild(div);
  });
}

function renderServices() {
  const grid = document.getElementById('services-grid');
  grid.innerHTML = '';
  if (portfolioData.services.length === 0) {
    grid.innerHTML = '<div class="col-12 no-items"><i class="fas fa-concierge-bell d-block"></i><p>No services added yet.</p></div>';
    return;
  }
  portfolioData.services.forEach((srv, i) => {
    const div = document.createElement('div');
    div.className = 'col-md-6 col-lg-4';
    div.innerHTML = `
      <div class="glass-card service-card reveal" style="transition-delay: ${i * 0.08}s">
        <div class="service-icon"><i class="${srv.icon || 'fas fa-cog'}"></i></div>
        <h5 class="service-title">${escHtml(srv.title)}</h5>
        <p class="service-desc">${escHtml(srv.description)}</p>
      </div>
    `;
    grid.appendChild(div);
  });
}

function renderContactInfo() {
  const c = portfolioData.contact || portfolioData.social;
  
  // Hide the bulky cards container that exposes raw text
  const container = document.getElementById('contact-info-cards');
  if (container) container.style.display = 'none';

  // Action buttons
  const actionsContainer = document.getElementById('contact-action-btns');
  actionsContainer.innerHTML = `
    <a href="mailto:${c.email}" class="btn-premium btn-primary-premium ripple magnetic" target="_blank" rel="noopener"><i class="fas fa-envelope"></i> Email</a>
    ${c.whatsapp ? `<a href="https://wa.me/${c.whatsapp.replace(/[^0-9]/g, '')}" class="btn-premium btn-outline-premium ripple magnetic" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> WhatsApp</a>` : ''}
    <a href="tel:${c.phone}" class="btn-premium btn-outline-premium ripple magnetic" target="_blank" rel="noopener"><i class="fas fa-phone-alt"></i> Call</a>
    ${c.github ? `<a href="${c.github}" class="btn-icon-premium magnetic" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>` : ''}
    ${c.linkedin ? `<a href="${c.linkedin}" class="btn-icon-premium magnetic" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>` : ''}
  `;

  // Map
  const mapContainer = document.getElementById('map-container');
  if (c.mapEmbed) {
    mapContainer.innerHTML = `<iframe src="${c.mapEmbed}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  }

  // Support buttons
  document.getElementById('support-email-btn').href = `mailto:${c.supportEmail || c.email}`;
  if (c.whatsapp) {
    document.getElementById('support-whatsapp-btn').href = `https://wa.me/${c.whatsapp.replace(/[^0-9]/g, '')}`;
  }
  document.getElementById('support-call-btn').href = `tel:${c.phone}`;

  // Footer
  document.getElementById('footer-email').innerHTML = `<i class="fas fa-envelope me-2"></i>Email Me`;
  document.getElementById('footer-email').href = `mailto:${c.email}`;
  document.getElementById('footer-phone').innerHTML = `<i class="fas fa-phone me-2"></i>Call Me`;
  document.getElementById('footer-phone').href = `tel:${c.phone}`;
  document.getElementById('footer-location').innerHTML = `<i class="fas fa-map-marker-alt me-2"></i>${escHtml(c.address || portfolioData.social.location)}`;
}

function renderFooterSocial() {
  const s = portfolioData.social;
  const container = document.getElementById('footer-social');
  container.innerHTML = '';
  const socials = [
    { icon: 'fab fa-github', url: s.github },
    { icon: 'fab fa-linkedin-in', url: s.linkedin },
    { icon: 'fab fa-instagram', url: s.instagram },
    { icon: 'fab fa-twitter', url: s.twitter },
    { icon: 'fas fa-envelope', url: s.email ? `mailto:${s.email}` : '' }
  ];
  socials.forEach(soc => {
    if (soc.url) {
      const a = document.createElement('a');
      a.href = soc.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = `<i class="${soc.icon}"></i>`;
      a.setAttribute('aria-label', soc.icon.split('-').pop());
      container.appendChild(a);
    }
  });
}

/* ─────────────────────────────────────────
   5. LOADER
   ───────────────────────────────────────── */
function initLoader() {
  window.addEventListener('load', () => {
    // Hide loader immediately after the page finishes loading
    document.getElementById('loader').classList.add('hidden');
    // Trigger reveal animations after loader
    setTimeout(triggerRevealAnimations, 200);
  });
}

/* ─────────────────────────────────────────
   6. PARTICLE SYSTEM (Canvas)
   ───────────────────────────────────────── */
let particleCanvas, particleCtx, particlesArray = [];

function initParticles() {
  particleCanvas = document.getElementById('bg-canvas');
  particleCtx = particleCanvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  if (portfolioData.settings.particles) {
    createParticles();
    animateParticles();
  }
}

function resizeCanvas() {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
}

function createParticles() {
  particlesArray = [];
  if (!particleCanvas) return;
  const count = Math.min(60, Math.floor(window.innerWidth / 25));
  for (let i = 0; i < count; i++) {
    particlesArray.push({
      x: Math.random() * particleCanvas.width,
      y: Math.random() * particleCanvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.4 + 0.1
    });
  }
}

function animateParticles() {
  if (!portfolioData.settings.particles) return;
  particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

  const accentRgb = getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb').trim() || '59, 130, 246';

  particlesArray.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > particleCanvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > particleCanvas.height) p.speedY *= -1;

    particleCtx.beginPath();
    particleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    particleCtx.fillStyle = `rgba(${accentRgb}, ${p.opacity})`;
    particleCtx.fill();
  });

  // Connect particles
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a + 1; b < particlesArray.length; b++) {
      const dx = particlesArray[a].x - particlesArray[b].x;
      const dy = particlesArray[a].y - particlesArray[b].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        particleCtx.beginPath();
        particleCtx.strokeStyle = `rgba(${accentRgb}, ${0.06 * (1 - dist / 120)})`;
        particleCtx.lineWidth = 0.5;
        particleCtx.moveTo(particlesArray[a].x, particlesArray[a].y);
        particleCtx.lineTo(particlesArray[b].x, particlesArray[b].y);
        particleCtx.stroke();
      }
    }
  }

  requestAnimationFrame(animateParticles);
}

/* ─────────────────────────────────────────
   7. SCROLL EFFECTS
   ───────────────────────────────────────── */
function initScrollEffects() {
  // Scroll progress bar
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxScroll) * 100;
    document.getElementById('scroll-progress').style.width = progress + '%';

    // Back to top button
    const btn = document.getElementById('back-to-top');
    if (scrolled > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');

    // Navbar scroll state
    const nav = document.getElementById('navbar');
    if (scrolled > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // Back to top click
  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Scroll reveal observer
  initRevealObserver();
}

function initRevealObserver() {
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');

        // Skill bars
        const bars = entry.target.querySelectorAll('.skill-bar-fill');
        bars.forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el);
  });
}

function triggerRevealAnimations() {
  initRevealObserver();
}

/* ─────────────────────────────────────────
   8. TYPING ANIMATION
   ───────────────────────────────────────── */
function initTypingAnimation() {
  const titles = portfolioData.profile.titles || ['Full-Stack Developer'];
  const el = document.getElementById('typing-text');
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const current = titles[titleIndex];
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === current.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed / portfolioData.settings.animSpeed);
  }
  type();
}

/* ─────────────────────────────────────────
   9. COUNTER ANIMATION
   ───────────────────────────────────────── */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target) || 0;
  const duration = 2000 / portfolioData.settings.animSpeed;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target) + (target > 0 ? '+' : '');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ─────────────────────────────────────────
   10. CURSOR GLOW
   ───────────────────────────────────────── */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!portfolioData.settings.cursorEffects) {
    glow.style.display = 'none';
    return;
  }
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

/* ─────────────────────────────────────────
   11. MAGNETIC BUTTONS
   ───────────────────────────────────────── */
function initMagneticButtons() {
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ─────────────────────────────────────────
   12. RIPPLE EFFECT
   ───────────────────────────────────────── */
function initRippleEffect() {
  document.addEventListener('click', (e) => {
    const rippleEl = e.target.closest('.ripple');
    if (!rippleEl) return;
    const rect = rippleEl.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
    rippleEl.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

/* ─────────────────────────────────────────
   13. NAV SECTION HIGHLIGHT
   ───────────────────────────────────────── */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  });
}

/* ─────────────────────────────────────────
   14. MOBILE NAV
   ───────────────────────────────────────── */
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  nav.classList.toggle('show');
}
function closeMobileNav() {
  const nav = document.getElementById('mobile-nav');
  nav.classList.remove('show');
}

/* ─────────────────────────────────────────
   15. CONTACT FORM
   ───────────────────────────────────────── */
function initContactForm() {
  document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Check if user has set the Web3Forms access key
    if (formData.get('access_key') === 'YOUR_ACCESS_KEY_HERE') {
      showToast('Email system is ready! Add your Web3Forms access_key in index.html to enable sending.', 'warning');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    try {
      const json = JSON.stringify(Object.fromEntries(formData));
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });
      const data = await response.json();

      if (data.success) {
        showToast('Message sent successfully!', 'success');
        form.reset();
      } else {
        showToast(`Failed: ${data.message || 'Unknown error'}`, 'error');
        console.error('Web3Forms Error:', data);
      }
    } catch (error) {
      showToast(`Error: ${error.message}`, 'error');
      console.error('Fetch Error:', error);
    } finally {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  });
}

/* ─────────────────────────────────────────
   16. PROJECT SEARCH
   ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('project-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.project-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
});

/* ─────────────────────────────────────────
   17. FLOATING ICONS
   ───────────────────────────────────────── */
function initFloatingIcons() {
  const container = document.getElementById('floating-icons');
  if (!container) return;
  const icons = ['devicon-python-plain', 'devicon-django-plain', 'devicon-javascript-plain',
    'devicon-react-original', 'devicon-html5-plain', 'devicon-css3-plain',
    'devicon-git-plain', 'devicon-docker-plain', 'devicon-postgresql-plain',
    'devicon-linux-plain', 'devicon-bootstrap-plain', 'devicon-github-original'];

  icons.forEach((icon, i) => {
    const span = document.createElement('i');
    span.className = `floating-icon ${icon}`;
    span.style.left = Math.random() * 90 + '%';
    span.style.top = Math.random() * 90 + '%';
    span.style.animationDelay = `${i * -1.2}s`;
    span.style.animationDuration = `${12 + Math.random() * 8}s`;
    container.appendChild(span);
  });
}

/* ─────────────────────────────────────────
   18. THEME SYSTEM
   ───────────────────────────────────────── */
function applyTheme() {
  const s = portfolioData.settings;
  const html = document.documentElement;

  // Theme mode
  let currentTheme = s.theme;
  if (s.theme === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = prefersDark ? 'dark' : 'light';
  }
  html.setAttribute('data-theme', currentTheme);

  // Update toggle button icon
  const themeIcon = document.querySelector('#theme-toggle i');
  if (themeIcon) {
    if (currentTheme === 'dark') {
      themeIcon.className = 'fa-solid fa-moon';
    } else {
      themeIcon.className = 'fa-solid fa-sun';
    }
  }

  // Accent
  html.setAttribute('data-accent', s.accent);

  // Glass intensity
  html.style.setProperty('--glass-intensity', s.glassIntensity);

  // Animation speed
  html.style.setProperty('--anim-speed', s.animSpeed);

  // Cursor effects
  const glow = document.getElementById('cursor-glow');
  if (glow) glow.style.display = s.cursorEffects ? '' : 'none';

  // Particles
  if (s.particles && particlesArray.length === 0 && particleCanvas) {
    createParticles();
    animateParticles();
  }
}

function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      let currentTheme = portfolioData.settings.theme;
      if (currentTheme === 'auto') {
         currentTheme = document.documentElement.getAttribute('data-theme');
      }
      portfolioData.settings.theme = currentTheme === 'dark' ? 'light' : 'dark';
      saveData();
      applyTheme();
    });
  }
}

/* ─────────────────────────────────────────
   19. TOAST NOTIFICATIONS
   ───────────────────────────────────────── */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast-notification ${type}`;
  const icons = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle', info: 'fas fa-info-circle', warning: 'fas fa-exclamation-triangle' };
  toast.innerHTML = `<i class="toast-icon ${icons[type] || icons.info}"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ─────────────────────────────────────────
   20. CONFIRM DIALOG
   ───────────────────────────────────────── */
function showConfirm(title, message) {
  return new Promise((resolve) => {
    const overlay = document.getElementById('confirm-dialog');
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    overlay.classList.add('active');

    const okBtn = document.getElementById('confirm-ok');
    const cancelBtn = document.getElementById('confirm-cancel');

    function cleanup() {
      overlay.classList.remove('active');
      okBtn.removeEventListener('click', onOk);
      cancelBtn.removeEventListener('click', onCancel);
    }
    function onOk() { cleanup(); resolve(true); }
    function onCancel() { cleanup(); resolve(false); }

    okBtn.addEventListener('click', onOk);
    cancelBtn.addEventListener('click', onCancel);
  });
}

/* ─────────────────────────────────────────
   21. LIGHTBOX
   ───────────────────────────────────────── */
function openLightbox(src) {
  const overlay = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  overlay.classList.add('active');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

/* ─────────────────────────────────────────
   22. VISITOR COUNTER
   ───────────────────────────────────────── */
function initVisitorCounter() {
  let count = parseInt(localStorage.getItem('visitorCount')) || 0;
  count++;
  localStorage.setItem('visitorCount', count);
  document.getElementById('visitor-count').textContent = count.toLocaleString();
}

/* ─────────────────────────────────────────
   23. MUSIC TOGGLE
   ───────────────────────────────────────── */
function initMusicToggle() {
  const btn = document.getElementById('music-toggle');
  btn.addEventListener('click', () => {
    btn.classList.toggle('playing');
    showToast(btn.classList.contains('playing') ? '🎵 Music feature — connect your audio source' : '🔇 Music paused', 'info');
  });
}

/* ─────────────────────────────────────────
   24. COMMAND PALETTE
   ───────────────────────────────────────── */
const ADMIN_PASSWORD = 'Guru@7126';
let commandPaletteOpen = false;

const COMMANDS = [
  { name: 'Open Admin Panel', cmd: '/admin', icon: 'fas fa-lock', action: () => promptAdminPassword() },
  { name: 'Edit Portfolio', cmd: '/edit', icon: 'fas fa-edit', action: () => promptAdminPassword() },
  { name: 'Open Panel', cmd: '/open-panel', icon: 'fas fa-columns', action: () => promptAdminPassword() },
  { name: 'Toggle Dark Mode', cmd: '/dark', icon: 'fas fa-moon', action: () => { portfolioData.settings.theme = 'dark'; applyTheme(); saveData(); showToast('Dark mode enabled', 'success'); } },
  { name: 'Toggle Light Mode', cmd: '/light', icon: 'fas fa-sun', action: () => { portfolioData.settings.theme = 'light'; applyTheme(); saveData(); showToast('Light mode enabled', 'success'); } },
  { name: 'Export Data', cmd: '/export', icon: 'fas fa-download', action: () => exportData() },
  { name: 'Go to Home', cmd: '/home', icon: 'fas fa-home', action: () => { document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }); closeCommandPalette(); } },
  { name: 'Go to Contact', cmd: '/contact', icon: 'fas fa-envelope', action: () => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); closeCommandPalette(); } },
  { name: 'Go to Projects', cmd: '/projects', icon: 'fas fa-folder', action: () => { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); closeCommandPalette(); } },
];

function initCommandPalette() {
  const overlay = document.getElementById('command-palette-overlay');
  const input = document.getElementById('command-palette-input');
  const results = document.getElementById('command-palette-results');
  let selectedIdx = 0;

  function renderResults(query) {
    const filtered = COMMANDS.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.cmd.toLowerCase().includes(query.toLowerCase())
    );
    results.innerHTML = '';
    filtered.forEach((cmd, i) => {
      const div = document.createElement('div');
      div.className = `command-palette-item ${i === selectedIdx ? 'selected' : ''}`;
      div.innerHTML = `<i class="${cmd.icon}"></i><span>${cmd.name}</span><span style="margin-left:auto;font-size:0.75rem;color:var(--text-tertiary);font-family:var(--font-mono)">${cmd.cmd}</span>`;
      div.addEventListener('click', () => { closeCommandPalette(); cmd.action(); });
      results.appendChild(div);
    });
    return filtered;
  }

  input.addEventListener('input', () => {
    selectedIdx = 0;
    // Check for direct commands
    const val = input.value.trim();
    if (val === '/admin' || val === '/edit' || val === '/open-panel') {
      closeCommandPalette();
      promptAdminPassword();
      return;
    }
    renderResults(val);
  });

  input.addEventListener('keydown', (e) => {
    const items = results.querySelectorAll('.command-palette-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIdx = Math.min(selectedIdx + 1, items.length - 1);
      items.forEach((it, i) => it.classList.toggle('selected', i === selectedIdx));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIdx = Math.max(selectedIdx - 1, 0);
      items.forEach((it, i) => it.classList.toggle('selected', i === selectedIdx));
    } else if (e.key === 'Enter') {
      if (items[selectedIdx]) items[selectedIdx].click();
    } else if (e.key === 'Escape') {
      closeCommandPalette();
    }
  });

  // Initial render
  renderResults('');
}

function openCommandPalette() {
  const overlay = document.getElementById('command-palette-overlay');
  const input = document.getElementById('command-palette-input');
  const passwordSection = document.getElementById('command-palette-password');
  const resultsSection = document.getElementById('command-palette-results');
  const footerSection = overlay.querySelector('.command-palette-footer');

  passwordSection.style.display = 'none';
  resultsSection.style.display = '';
  input.style.display = '';
  if (footerSection) footerSection.style.display = '';

  overlay.classList.add('active');
  input.value = '';
  input.focus();
  commandPaletteOpen = true;

  // Re-render results
  const results = document.getElementById('command-palette-results');
  results.innerHTML = '';
  COMMANDS.forEach((cmd, i) => {
    const div = document.createElement('div');
    div.className = `command-palette-item ${i === 0 ? 'selected' : ''}`;
    div.innerHTML = `<i class="${cmd.icon}"></i><span>${cmd.name}</span><span style="margin-left:auto;font-size:0.75rem;color:var(--text-tertiary);font-family:var(--font-mono)">${cmd.cmd}</span>`;
    div.addEventListener('click', () => { closeCommandPalette(); cmd.action(); });
    results.appendChild(div);
  });
}

function closeCommandPalette() {
  document.getElementById('command-palette-overlay').classList.remove('active');
  commandPaletteOpen = false;
}

function promptAdminPassword() {
  const overlay = document.getElementById('command-palette-overlay');
  const input = document.getElementById('command-palette-input');
  const passwordSection = document.getElementById('command-palette-password');
  const resultsSection = document.getElementById('command-palette-results');
  const footerSection = overlay.querySelector('.command-palette-footer');

  overlay.classList.add('active');
  commandPaletteOpen = true;

  input.style.display = 'none';
  resultsSection.style.display = 'none';
  if (footerSection) footerSection.style.display = 'none';
  passwordSection.style.display = '';

  const pwInput = document.getElementById('admin-password-input');
  pwInput.value = '';
  document.getElementById('password-error').style.display = 'none';
  setTimeout(() => pwInput.focus(), 100);

  // Allow Enter to submit
  pwInput.onkeydown = (e) => {
    if (e.key === 'Enter') verifyAdminPassword();
    if (e.key === 'Escape') closeCommandPalette();
  };
}

function verifyAdminPassword() {
  const pwInput = document.getElementById('admin-password-input');
  if (pwInput.value === ADMIN_PASSWORD) {
    closeCommandPalette();
    openAdminPanel();
    showToast('Admin panel unlocked!', 'success');
  } else {
    document.getElementById('password-error').style.display = 'block';
    pwInput.value = '';
    pwInput.focus();
  }
}

/* ─────────────────────────────────────────
   25. KEYBOARD SHORTCUTS
   ───────────────────────────────────────── */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl+Shift+P — command palette
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      if (commandPaletteOpen) closeCommandPalette();
      else openCommandPalette();
    }
    // Ctrl+Shift+E — admin shortcut
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e') {
      e.preventDefault();
      promptAdminPassword();
    }
    // Ctrl+Alt+Shift+P — admin shortcut
    if (e.ctrlKey && e.altKey && e.shiftKey && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      promptAdminPassword();
    }
    // Escape
    if (e.key === 'Escape') {
      if (commandPaletteOpen) closeCommandPalette();
      else if (isAdminOpen) closeAdminPanel();
      else if (document.getElementById('lightbox').classList.contains('active')) closeLightbox();
    }
  });
}

/* ─────────────────────────────────────────
   26. ADMIN PANEL
   ───────────────────────────────────────── */
function openAdminPanel() {
  isAdminOpen = true;
  localStorage.setItem('isAdminOpen', 'true');
  document.getElementById('admin-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Restore previous panel or default to dashboard
  const savedPanel = localStorage.getItem('currentAdminPanel') || 'dashboard';
  showAdminPanelContent(savedPanel);

  // Sidebar nav clicks
  document.querySelectorAll('.admin-nav-item').forEach(btn => {
    // Set initial active class
    if (btn.dataset.panel === savedPanel) {
      document.querySelectorAll('.admin-nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    
    btn.onclick = () => {
      if (btn.classList.contains('logout-btn')) return;
      document.querySelectorAll('.admin-nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      localStorage.setItem('currentAdminPanel', btn.dataset.panel);
      showAdminPanelContent(btn.dataset.panel);
    };
  });
}

function closeAdminPanel() {
  isAdminOpen = false;
  localStorage.removeItem('isAdminOpen');
  document.getElementById('admin-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function logoutAdmin() {
  closeAdminPanel();
  showToast('Logged out successfully', 'success');
  setTimeout(() => {
    window.location.reload();
  }, 800);
}

let adminCrudModalInstance = null;
function openAdminCrudModal(title, fieldsHTML, saveCallback) {
  if (!adminCrudModalInstance) {
    adminCrudModalInstance = new bootstrap.Modal(document.getElementById('adminCrudModal'));
  }
  document.getElementById('adminCrudModalTitle').innerText = title;
  document.getElementById('adminCrudModalBody').innerHTML = fieldsHTML;
  
  const saveBtn = document.getElementById('adminCrudSaveBtn');
  // Remove old event listeners
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
  
  newSaveBtn.onclick = () => {
    saveCallback(adminCrudModalInstance);
  };
  
  adminCrudModalInstance.show();
}

function showAdminPanelContent(panel) {
  currentAdminPanel = panel;
  const container = document.getElementById('admin-content');
  const title = document.getElementById('admin-panel-title');
  editingIndex = -1;

  const panelRenderers = {
    dashboard: renderAdminDashboard,
    profile: renderAdminProfile,
    skills: renderAdminSkills,
    projects: renderAdminProjects,
    experience: renderAdminExperience,
    education: renderAdminEducation,
    certificates: renderAdminCertificates,
    achievements: renderAdminAchievements,
    social: renderAdminSocial,
    contact: renderAdminContact,
    'services-admin': renderAdminServices,
    'support-admin': renderAdminSupport,
    theme: renderAdminTheme,
    export: renderAdminExport,
    import: renderAdminImport,
    settings: renderAdminSettings
  };

  const titles = {
    dashboard: 'Dashboard', profile: 'Profile Editor', skills: 'Skills Editor',
    projects: 'Project Editor', experience: 'Experience Editor', education: 'Education Editor',
    certificates: 'Certificate Editor', achievements: 'Achievement Editor',
    social: 'Social Links', contact: 'Contact Details', 'services-admin': 'Services Editor',
    'support-admin': 'Support Settings', theme: 'Theme Settings',
    export: 'Export Data', import: 'Import Data', settings: 'Settings'
  };

  title.textContent = titles[panel] || 'Dashboard';
  const renderer = panelRenderers[panel];
  if (renderer) renderer(container);
  else container.innerHTML = '<p>Panel not found.</p>';
}

/* ── Admin: Dashboard ── */
function renderAdminDashboard(el) {
  el.innerHTML = `
    <div class="row g-4 mb-4">
      <div class="col-md-3 col-6">
        <div class="glass-card text-center" style="padding: 20px;">
          <div style="font-size:2rem; color:var(--accent); margin-bottom:8px;"><i class="fas fa-cogs"></i></div>
          <div style="font-size:1.5rem; font-weight:700;">${portfolioData.skills.length}</div>
          <div style="font-size:0.8rem; color:var(--text-tertiary);">Skills</div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="glass-card text-center" style="padding: 20px;">
          <div style="font-size:2rem; color:var(--accent); margin-bottom:8px;"><i class="fas fa-folder"></i></div>
          <div style="font-size:1.5rem; font-weight:700;">${portfolioData.projects.length}</div>
          <div style="font-size:0.8rem; color:var(--text-tertiary);">Projects</div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="glass-card text-center" style="padding: 20px;">
          <div style="font-size:2rem; color:var(--accent); margin-bottom:8px;"><i class="fas fa-certificate"></i></div>
          <div style="font-size:1.5rem; font-weight:700;">${portfolioData.certificates.length}</div>
          <div style="font-size:0.8rem; color:var(--text-tertiary);">Certificates</div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="glass-card text-center" style="padding: 20px;">
          <div style="font-size:2rem; color:var(--accent); margin-bottom:8px;"><i class="fas fa-trophy"></i></div>
          <div style="font-size:1.5rem; font-weight:700;">${portfolioData.achievements.length}</div>
          <div style="font-size:0.8rem; color:var(--text-tertiary);">Achievements</div>
        </div>
      </div>
    </div>
    <div class="glass-card" style="padding: 20px;">
      <h6 style="margin-bottom: 16px; font-weight: 600;">Quick Actions</h6>
      <div class="d-flex flex-wrap gap-2">
        <button class="btn-premium btn-outline-premium" onclick="showAdminPanelContent('profile')"><i class="fas fa-user"></i> Edit Profile</button>
        <button class="btn-premium btn-outline-premium" onclick="showAdminPanelContent('projects')"><i class="fas fa-folder"></i> Add Project</button>
        <button class="btn-premium btn-outline-premium" onclick="showAdminPanelContent('theme')"><i class="fas fa-palette"></i> Change Theme</button>
        <button class="btn-premium btn-outline-premium" onclick="showAdminPanelContent('export')"><i class="fas fa-download"></i> Export Data</button>
      </div>
    </div>
  `;
}

/* ── Admin: Profile ── */
function renderAdminProfile(el) {
  const p = portfolioData.profile;
  el.innerHTML = `
    <div class="admin-form-group">
      <label>Full Name</label>
      <input type="text" id="admin-name" value="${escAttr(p.name)}">
    </div>
    <div class="admin-form-group">
      <label>Title / Designation</label>
      <input type="text" id="admin-title" value="${escAttr(p.title)}">
    </div>
    <div class="admin-form-group">
      <label>Animated Titles (comma-separated)</label>
      <input type="text" id="admin-titles" value="${escAttr((p.titles || []).join(', '))}">
    </div>
    <div class="admin-form-group">
      <label>Bio / Description</label>
      <textarea id="admin-bio" rows="4">${escHtml(p.bio)}</textarea>
    </div>
    <div class="admin-form-row">
      <div class="admin-form-group">
        <label>Resume Link (URL)</label>
        <input type="url" id="admin-resume" value="${escAttr(p.resumeLink)}">
      </div>
      <div class="admin-form-group">
        <label>Profile Photo (URL)</label>
        <input type="url" id="admin-photo" value="${escAttr(p.profilePhoto || '')}">
      </div>
    </div>
    <h6 style="margin-top:20px; margin-bottom:16px; font-weight:600;">Statistics</h6>
    <div class="admin-form-row">
      <div class="admin-form-group">
        <label>Projects Count</label>
        <input type="number" id="admin-stat-projects" value="${portfolioData.stats.projects}">
      </div>
      <div class="admin-form-group">
        <label>Years Experience</label>
        <input type="number" id="admin-stat-experience" value="${portfolioData.stats.experience}">
      </div>
    </div>
    <div class="admin-form-row">
      <div class="admin-form-group">
        <label>Technologies Count</label>
        <input type="number" id="admin-stat-technologies" value="${portfolioData.stats.technologies}">
      </div>
      <div class="admin-form-group">
        <label>Certificates Count</label>
        <input type="number" id="admin-stat-certificates" value="${portfolioData.stats.certificates}">
      </div>
    </div>
    <div class="admin-actions-bar">
      <button class="btn-premium btn-primary-premium" onclick="saveProfile()"><i class="fas fa-save"></i> Save Profile</button>
    </div>
  `;
}

function saveProfile() {
  portfolioData.profile.name = document.getElementById('admin-name').value;
  portfolioData.profile.title = document.getElementById('admin-title').value;
  portfolioData.profile.titles = document.getElementById('admin-titles').value.split(',').map(t => t.trim()).filter(Boolean);
  portfolioData.profile.bio = document.getElementById('admin-bio').value;
  portfolioData.profile.resumeLink = document.getElementById('admin-resume').value;
  portfolioData.profile.profilePhoto = document.getElementById('admin-photo').value;
  portfolioData.stats.projects = parseInt(document.getElementById('admin-stat-projects').value) || 0;
  portfolioData.stats.experience = parseInt(document.getElementById('admin-stat-experience').value) || 0;
  portfolioData.stats.technologies = parseInt(document.getElementById('admin-stat-technologies').value) || 0;
  portfolioData.stats.certificates = parseInt(document.getElementById('admin-stat-certificates').value) || 0;
  saveData();
  renderAll();
  showToast('Profile saved!', 'success');
}

/* ── Admin: Social Links ── */
function renderAdminSocial(el) {
  const s = portfolioData.social;
  el.innerHTML = `
    <div class="admin-form-row">
      <div class="admin-form-group"><label>Email</label><input type="email" id="admin-social-email" value="${escAttr(s.email)}"></div>
      <div class="admin-form-group"><label>Phone</label><input type="tel" id="admin-social-phone" value="${escAttr(s.phone)}"></div>
    </div>
    <div class="admin-form-row">
      <div class="admin-form-group"><label>WhatsApp Number</label><input type="text" id="admin-social-whatsapp" value="${escAttr(s.whatsapp || '')}"></div>
      <div class="admin-form-group"><label>GitHub URL</label><input type="url" id="admin-social-github" value="${escAttr(s.github)}"></div>
    </div>
    <div class="admin-form-row">
      <div class="admin-form-group"><label>LinkedIn URL</label><input type="url" id="admin-social-linkedin" value="${escAttr(s.linkedin)}"></div>
      <div class="admin-form-group"><label>Instagram URL</label><input type="url" id="admin-social-instagram" value="${escAttr(s.instagram || '')}"></div>
    </div>
    <div class="admin-form-row">
      <div class="admin-form-group"><label>Twitter/X URL</label><input type="url" id="admin-social-twitter" value="${escAttr(s.twitter || '')}"></div>
      <div class="admin-form-group"><label>Portfolio URL</label><input type="url" id="admin-social-portfolio" value="${escAttr(s.portfolio || '')}"></div>
    </div>
    <div class="admin-form-group"><label>Location</label><input type="text" id="admin-social-location" value="${escAttr(s.location)}"></div>
    <div class="admin-actions-bar">
      <button class="btn-premium btn-primary-premium" onclick="saveSocial()"><i class="fas fa-save"></i> Save Social Links</button>
    </div>
  `;
}

function saveSocial() {
  const fields = ['email', 'phone', 'whatsapp', 'github', 'linkedin', 'instagram', 'twitter', 'portfolio', 'location'];
  fields.forEach(f => {
    portfolioData.social[f] = document.getElementById(`admin-social-${f}`).value;
  });
  saveData();
  renderAll();
  showToast('Social links saved!', 'success');
}

/* ── Admin: Skills CRUD ── */
function renderAdminSkills(el) {
  el.innerHTML = `
    <div class="admin-item-list" id="admin-skills-list"></div>
    <button class="admin-add-btn" onclick="addSkillForm()"><i class="fas fa-plus"></i> Add Skill</button>
  `;
  renderAdminSkillsList();
}

function renderAdminSkillsList() {
  const list = document.getElementById('admin-skills-list');
  if (!list) return;
  list.innerHTML = '';
  portfolioData.skills.forEach((skill, i) => {
    list.innerHTML += `
      <div class="admin-item-card">
        <div class="admin-item-info">
          <div class="admin-item-title"><i class="${skill.icon}" style="color:${skill.color || 'var(--accent)'}; margin-right:8px;"></i>${escHtml(skill.name)}</div>
          <div class="admin-item-subtitle">${skill.percentage}%</div>
        </div>
        <div class="admin-item-actions">
          ${i > 0 ? `<button title="Move Up" onclick="moveSkill(${i},-1)"><i class="fas fa-chevron-up"></i></button>` : ''}
          ${i < portfolioData.skills.length - 1 ? `<button title="Move Down" onclick="moveSkill(${i},1)"><i class="fas fa-chevron-down"></i></button>` : ''}
          <button class="edit-btn" onclick="editSkill(${i})"><i class="fas fa-pen"></i></button>
          <button class="delete-btn" onclick="deleteSkill(${i})"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `;
  });
}

function getSkillFormHTML(skill = {}) {
  const name = skill.name || '';
  const icon = skill.icon || '';
  const percentage = skill.percentage || 80;
  const color = skill.color || '#3b82f6';
  const standardIcons = [
    {val: 'fas fa-code', label: 'Default Code'},
    {val: 'devicon-python-plain', label: 'Python'},
    {val: 'devicon-javascript-plain', label: 'JavaScript'},
    {val: 'devicon-react-original', label: 'React'},
    {val: 'devicon-html5-plain', label: 'HTML5'},
    {val: 'devicon-css3-plain', label: 'CSS3'},
    {val: 'devicon-django-plain', label: 'Django'},
    {val: 'devicon-git-plain', label: 'Git'},
    {val: 'devicon-docker-plain', label: 'Docker'},
    {val: 'devicon-postgresql-plain', label: 'PostgreSQL'},
    {val: 'devicon-linux-plain', label: 'Linux'},
    {val: 'devicon-bootstrap-plain', label: 'Bootstrap'},
    {val: 'devicon-github-original', label: 'GitHub'},
    {val: 'devicon-java-plain', label: 'Java'},
    {val: 'devicon-cplusplus-plain', label: 'C++'},
    {val: 'devicon-nodejs-plain', label: 'Node.js'}
  ];
  
  let hasCustom = icon && !standardIcons.find(i => i.val === icon);
  let optionsHTML = hasCustom ? `<option value="${icon}" selected>${icon} (Custom)</option>` : '';
  
  optionsHTML += standardIcons.map(ic => 
    `<option value="${ic.val}" ${icon === ic.val ? 'selected' : ''}>${ic.label}</option>`
  ).join('');

  return `
    <div class="admin-form-row">
      <div class="admin-form-group"><label>Skill Name</label><input type="text" id="admin-skill-name" value="${escHtml(name)}"></div>
      <div class="admin-form-group">
        <label>Icon</label>
        <select id="admin-skill-icon" class="admin-form-control">
          ${optionsHTML}
        </select>
      </div>
    </div>
    <div class="admin-form-row">
      <div class="admin-form-group"><label>Percentage (0-100)</label><input type="number" id="admin-skill-percent" min="0" max="100" value="${percentage}"></div>
      <div class="admin-form-group"><label>Icon Color</label><input type="color" id="admin-skill-color" value="${escHtml(color)}"></div>
    </div>
  `;
}

function addSkillForm() {
  editingIndex = -1;
  openAdminCrudModal('Add Skill', getSkillFormHTML({}), (modalInst) => {
    if (saveSkill()) {
      modalInst.hide();
    }
  });
}

function editSkill(i) {
  editingIndex = i;
  const skill = portfolioData.skills[i];
  openAdminCrudModal('Edit Skill', getSkillFormHTML(skill), (modalInst) => {
    if (saveSkill()) {
      modalInst.hide();
    }
  });
}

function saveSkill() {
  const obj = {
    name: document.getElementById('admin-skill-name').value.trim(),
    icon: document.getElementById('admin-skill-icon').value || 'fas fa-code',
    percentage: parseInt(document.getElementById('admin-skill-percent').value) || 80,
    color: document.getElementById('admin-skill-color').value
  };
  if (!obj.name) { showToast('Skill name is required', 'error'); return false; }
  
  // Check for duplicates
  const isDuplicate = portfolioData.skills.some((s, idx) => 
    s.name.toLowerCase() === obj.name.toLowerCase() && idx !== editingIndex
  );
  if (isDuplicate) {
    showToast('A skill with this name already exists', 'error');
    return false;
  }
  
  if (editingIndex >= 0) portfolioData.skills[editingIndex] = obj;
  else portfolioData.skills.push(obj);
  saveData();
  renderAll();
  editingIndex = -1;
  renderAdminSkillsList();
  showToast('Skill saved!', 'success');
  return true;
}

async function deleteSkill(i) {
  if (await showConfirm('Delete Skill', `Delete "${portfolioData.skills[i].name}"?`)) {
    portfolioData.skills.splice(i, 1);
    saveData();
    renderAll();
    renderAdminSkillsList();
    showToast('Skill deleted', 'info');
  }
}

function moveSkill(i, dir) {
  const arr = portfolioData.skills;
  const j = i + dir;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  saveData();
  renderAll();
  renderAdminSkillsList();
}

/* ── Admin: Generic CRUD helper ── */
function renderCrudPanel(el, key, fields, titleField, subtitleField, formTitle) {
  el.innerHTML = `
    <div class="admin-item-list" id="admin-${key}-list"></div>
    <button class="admin-add-btn" onclick="addCrudItem('${key}')"><i class="fas fa-plus"></i> Add ${formTitle}</button>
  `;
  renderCrudList(key, titleField, subtitleField);

  // Store fields meta
  window[`${key}Fields`] = fields;
  window[`${key}TitleField`] = titleField;
  window[`${key}SubtitleField`] = subtitleField;
  window[`${key}FormTitle`] = formTitle;
}

function renderCrudList(key, titleField, subtitleField) {
  const list = document.getElementById(`admin-${key}-list`);
  if (!list) return;
  list.innerHTML = '';
  portfolioData[key].forEach((item, i) => {
    list.innerHTML += `
      <div class="admin-item-card">
        <div class="admin-item-info">
          <div class="admin-item-title">${escHtml(item[titleField] || 'Untitled')}</div>
          <div class="admin-item-subtitle">${escHtml(item[subtitleField] || '')}</div>
        </div>
        <div class="admin-item-actions">
          <button class="edit-btn" onclick="editCrudItem('${key}', ${i})"><i class="fas fa-pen"></i></button>
          <button class="delete-btn" onclick="deleteCrudItem('${key}', ${i})"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `;
  });
}

function generateCrudFormHTML(key, fields, data) {
  return fields.map(f => {
    const val = data[f.key] !== undefined ? data[f.key] : '';
    const inputId = `admin-${key}-${f.key}`;
    if (f.type === 'textarea') {
      return `<div class="admin-form-group"><label>${f.label}</label><textarea id="${inputId}" rows="3">${escHtml(val)}</textarea></div>`;
    } else if (f.key === 'tags') {
      const tagStr = Array.isArray(val) ? val.join(', ') : val;
      return `<div class="admin-form-group"><label>${f.label}</label><input type="text" id="${inputId}" value="${escHtml(tagStr)}"></div>`;
    } else {
      return `<div class="admin-form-group"><label>${f.label}</label><input type="${f.type || 'text'}" id="${inputId}" value="${escHtml(val)}"></div>`;
    }
  }).join('');
}

function addCrudItem(key) {
  editingIndex = -1;
  const formTitle = window[`${key}FormTitle`] || key;
  const fields = window[`${key}Fields`];
  const formHTML = generateCrudFormHTML(key, fields, {});
  
  openAdminCrudModal(`Add ${formTitle}`, formHTML, () => {
    return saveCrudItem(key);
  });
}

function editCrudItem(key, i) {
  editingIndex = i;
  const item = portfolioData[key][i];
  const formTitle = window[`${key}FormTitle`] || key;
  const fields = window[`${key}Fields`];
  const formHTML = generateCrudFormHTML(key, fields, item);
  
  openAdminCrudModal(`Edit ${formTitle}`, formHTML, () => {
    return saveCrudItem(key);
  });
}

function saveCrudItem(key) {
  const fields = window[`${key}Fields`];
  const obj = {};
  fields.forEach(f => {
    const input = document.getElementById(`admin-${key}-${f.key}`);
    if (f.key === 'tags') {
      obj[f.key] = (input.value || '').split(',').map(t => t.trim()).filter(Boolean);
    } else if (f.type === 'number') {
      obj[f.key] = parseInt(input.value) || 0;
    } else {
      obj[f.key] = input.value;
    }
  });
  if (!obj[window[`${key}TitleField`]]) { showToast('Title is required', 'error'); return false; }

  if (editingIndex >= 0) {
    // Preserve id if exists
    if (portfolioData[key][editingIndex].id) obj.id = portfolioData[key][editingIndex].id;
    portfolioData[key][editingIndex] = obj;
  } else {
    obj.id = Date.now();
    portfolioData[key].push(obj);
  }

  saveData();
  renderAll();
  editingIndex = -1;
  renderCrudList(key, window[`${key}TitleField`], window[`${key}SubtitleField`]);
  showToast('Saved!', 'success');
  return true;
}

async function deleteCrudItem(key, i) {
  const title = portfolioData[key][i][window[`${key}TitleField`]] || 'this item';
  if (await showConfirm('Delete', `Delete "${title}"?`)) {
    portfolioData[key].splice(i, 1);
    saveData();
    renderAll();
    renderCrudList(key, window[`${key}TitleField`], window[`${key}SubtitleField`]);
    showToast('Deleted', 'info');
  }
}

/* ── Admin: Projects ── */
function renderAdminProjects(el) {
  renderCrudPanel(el, 'projects', [
    { key: 'title', label: 'Project Title' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'image', label: 'Image URLs (comma-separated)', type: 'textarea' },
    { key: 'github', label: 'GitHub URL', type: 'url' },
    { key: 'live', label: 'Live Demo URL', type: 'url' },
    { key: 'tags', label: 'Tags (comma-separated)' },
    { key: 'category', label: 'Category' }
  ], 'title', 'category', 'Project');
}

/* ── Admin: Experience ── */
function renderAdminExperience(el) {
  renderCrudPanel(el, 'experience', [
    { key: 'title', label: 'Job Title' },
    { key: 'company', label: 'Company' },
    { key: 'duration', label: 'Duration' },
    { key: 'description', label: 'Description', type: 'textarea' }
  ], 'title', 'company', 'Experience');
}

/* ── Admin: Education ── */
function renderAdminEducation(el) {
  renderCrudPanel(el, 'education', [
    { key: 'title', label: 'Degree / Course' },
    { key: 'institution', label: 'Institution' },
    { key: 'duration', label: 'Duration' },
    { key: 'description', label: 'Description', type: 'textarea' }
  ], 'title', 'institution', 'Education');
}

/* ── Admin: Certificates ── */
function renderAdminCertificates(el) {
  renderCrudPanel(el, 'certificates', [
    { key: 'title', label: 'Certificate Title' },
    { key: 'issuer', label: 'Issuer / Platform' },
    { key: 'image', label: 'Image URL', type: 'url' },
    { key: 'link', label: 'Certificate Link', type: 'url' }
  ], 'title', 'issuer', 'Certificate');
}

/* ── Admin: Achievements ── */
function renderAdminAchievements(el) {
  renderCrudPanel(el, 'achievements', [
    { key: 'title', label: 'Achievement Title' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'icon', label: 'Icon Class', placeholder: 'fas fa-trophy' }
  ], 'title', 'description', 'Achievement');
}

/* ── Admin: Services ── */
function renderAdminServices(el) {
  renderCrudPanel(el, 'services', [
    { key: 'title', label: 'Service Title' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'icon', label: 'Icon Class', placeholder: 'fas fa-globe' }
  ], 'title', 'description', 'Service');
}

/* ── Admin: Contact ── */
function renderAdminContact(el) {
  const c = portfolioData.contact;
  el.innerHTML = `
    <div class="admin-form-row">
      <div class="admin-form-group"><label>Email</label><input type="email" id="admin-contact-email" value="${escAttr(c.email)}"></div>
      <div class="admin-form-group"><label>Phone</label><input type="tel" id="admin-contact-phone" value="${escAttr(c.phone)}"></div>
    </div>
    <div class="admin-form-row">
      <div class="admin-form-group"><label>WhatsApp</label><input type="text" id="admin-contact-whatsapp" value="${escAttr(c.whatsapp || '')}"></div>
      <div class="admin-form-group"><label>GitHub</label><input type="url" id="admin-contact-github" value="${escAttr(c.github || '')}"></div>
    </div>
    <div class="admin-form-row">
      <div class="admin-form-group"><label>LinkedIn</label><input type="url" id="admin-contact-linkedin" value="${escAttr(c.linkedin || '')}"></div>
      <div class="admin-form-group"><label>Support Email</label><input type="email" id="admin-contact-supportEmail" value="${escAttr(c.supportEmail || '')}"></div>
    </div>
    <div class="admin-form-group"><label>Address</label><input type="text" id="admin-contact-address" value="${escAttr(c.address || '')}"></div>
    <div class="admin-form-group"><label>Google Map Embed URL</label><input type="url" id="admin-contact-mapEmbed" value="${escAttr(c.mapEmbed || '')}"></div>
    <div class="admin-actions-bar">
      <button class="btn-premium btn-primary-premium" onclick="saveContact()"><i class="fas fa-save"></i> Save Contact</button>
    </div>
  `;
}

function saveContact() {
  const fields = ['email', 'phone', 'whatsapp', 'github', 'linkedin', 'supportEmail', 'address', 'mapEmbed'];
  fields.forEach(f => {
    portfolioData.contact[f] = document.getElementById(`admin-contact-${f}`).value;
  });
  saveData();
  renderAll();
  showToast('Contact details saved!', 'success');
}

/* ── Admin: Support ── */
function renderAdminSupport(el) {
  el.innerHTML = `
    <div class="glass-card" style="padding:20px;">
      <p style="color:var(--text-secondary);">Support section uses the contact details configured in the Contact Details panel. Update your email, WhatsApp, and phone there to reflect changes in the support section.</p>
      <button class="btn-premium btn-outline-premium mt-3" onclick="showAdminPanelContent('contact')"><i class="fas fa-arrow-right"></i> Go to Contact Details</button>
    </div>
  `;
}

/* ── Admin: Theme ── */
function renderAdminTheme(el) {
  const s = portfolioData.settings;
  el.innerHTML = `
    <h6 style="font-weight:600; margin-bottom:16px;">Theme Mode</h6>
    <div class="theme-mode-btns">
      <button class="theme-mode-btn ${s.theme === 'dark' ? 'active' : ''}" onclick="setThemeMode('dark')"><i class="fas fa-moon me-2"></i>Dark</button>
      <button class="theme-mode-btn ${s.theme === 'light' ? 'active' : ''}" onclick="setThemeMode('light')"><i class="fas fa-sun me-2"></i>Light</button>
      <button class="theme-mode-btn ${s.theme === 'auto' ? 'active' : ''}" onclick="setThemeMode('auto')"><i class="fas fa-adjust me-2"></i>Auto</button>
    </div>

    <h6 style="font-weight:600; margin-bottom:16px;">Accent Color</h6>
    <div class="theme-presets">
      <button class="theme-preset-btn ${s.accent === 'blue' ? 'active' : ''}" style="background:#3b82f6;" onclick="setAccent('blue')" title="Blue"></button>
      <button class="theme-preset-btn ${s.accent === 'purple' ? 'active' : ''}" style="background:#8b5cf6;" onclick="setAccent('purple')" title="Purple"></button>
      <button class="theme-preset-btn ${s.accent === 'emerald' ? 'active' : ''}" style="background:#10b981;" onclick="setAccent('emerald')" title="Emerald"></button>
      <button class="theme-preset-btn ${s.accent === 'orange' ? 'active' : ''}" style="background:#f97316;" onclick="setAccent('orange')" title="Orange"></button>
      <button class="theme-preset-btn ${s.accent === 'rose' ? 'active' : ''}" style="background:#e11d48;" onclick="setAccent('rose')" title="Rose"></button>
    </div>

    <h6 style="font-weight:600; margin-bottom:16px;">Glass Intensity</h6>
    <input type="range" class="setting-slider" min="0.01" max="0.2" step="0.01" value="${s.glassIntensity}" onchange="setGlassIntensity(this.value)">
    <span style="font-size:0.85rem; color:var(--text-tertiary);">${s.glassIntensity}</span>

    <h6 style="font-weight:600; margin-top:20px; margin-bottom:16px;">Animation Speed</h6>
    <input type="range" class="setting-slider" min="0.5" max="2" step="0.1" value="${s.animSpeed}" onchange="setAnimSpeed(this.value)">
    <span style="font-size:0.85rem; color:var(--text-tertiary);">${s.animSpeed}x</span>

    <h6 style="font-weight:600; margin-top:20px; margin-bottom:16px;">Effects</h6>
    <div class="setting-toggle">
      <label>Particles</label>
      <button class="toggle-switch ${s.particles ? 'active' : ''}" onclick="toggleSetting('particles', this)"></button>
    </div>
    <div class="setting-toggle">
      <label>Cursor Glow</label>
      <button class="toggle-switch ${s.cursorEffects ? 'active' : ''}" onclick="toggleSetting('cursorEffects', this)"></button>
    </div>
  `;
}

function setThemeMode(mode) {
  portfolioData.settings.theme = mode;
  applyTheme();
  saveData();
  showAdminPanelContent('theme');
  showToast(`Theme set to ${mode}`, 'success');
}

function setAccent(accent) {
  portfolioData.settings.accent = accent;
  applyTheme();
  saveData();
  showAdminPanelContent('theme');
  showToast(`Accent color: ${accent}`, 'success');
}

function setGlassIntensity(val) {
  portfolioData.settings.glassIntensity = parseFloat(val);
  applyTheme();
  saveData();
}

function setAnimSpeed(val) {
  portfolioData.settings.animSpeed = parseFloat(val);
  applyTheme();
  saveData();
}

function toggleSetting(key, btn) {
  portfolioData.settings[key] = !portfolioData.settings[key];
  btn.classList.toggle('active');
  applyTheme();
  saveData();
  if (key === 'particles') {
    if (portfolioData.settings.particles) {
      createParticles();
      animateParticles();
    } else {
      particlesArray = [];
      particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    }
  }
}

/* ── Admin: Export ── */
function renderAdminExport(el) {
  el.innerHTML = `
    <div class="glass-card" style="padding:24px;">
      <h6 style="font-weight:600; margin-bottom:16px;"><i class="fas fa-download me-2 text-accent"></i>Export Portfolio Data</h6>
      <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:20px;">Download all your portfolio data as a JSON file. This includes profile, skills, projects, experience, education, certificates, achievements, services, contact, and theme settings.</p>
      <button class="btn-premium btn-primary-premium" onclick="exportData()"><i class="fas fa-download"></i> Export as JSON</button>
    </div>
  `;
}

function exportData() {
  const dataStr = JSON.stringify(portfolioData, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data exported!', 'success');
}

/* ── Admin: Import ── */
function renderAdminImport(el) {
  el.innerHTML = `
    <div class="glass-card" style="padding:24px; margin-bottom:20px;">
      <h6 style="font-weight:600; margin-bottom:16px;"><i class="fas fa-file-import me-2 text-accent"></i>Import Portfolio Data</h6>
      <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:20px;">Upload a previously exported JSON file to restore your portfolio data.</p>
      <input type="file" accept=".json" id="import-file-input" style="display:none;" onchange="importData(event)">
      <button class="btn-premium btn-primary-premium" onclick="document.getElementById('import-file-input').click()"><i class="fas fa-upload"></i> Import JSON</button>
    </div>
    <div class="glass-card" style="padding:24px; margin-bottom:20px;">
      <h6 style="font-weight:600; margin-bottom:16px;"><i class="fas fa-undo me-2 text-accent"></i>Restore Default</h6>
      <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:20px;">Reset all portfolio data to the original defaults. This cannot be undone.</p>
      <button class="btn-premium btn-outline-premium" style="border-color:#ff4444;color:#ff4444;" onclick="resetPortfolio()"><i class="fas fa-trash-alt"></i> Reset Portfolio</button>
    </div>
  `;
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      portfolioData = deepMerge(structuredClone(DEFAULT_DATA), imported);
      saveData();
      applyTheme();
      renderAll();
      showToast('Data imported successfully!', 'success');
      showAdminPanelContent('dashboard');
    } catch (err) {
      showToast('Invalid JSON file', 'error');
    }
  };
  reader.readAsText(file);
}

async function resetPortfolio() {
  if (await showConfirm('Reset Portfolio', 'This will reset all data to defaults. Are you sure?')) {
    portfolioData = structuredClone(DEFAULT_DATA);
    saveData();
    applyTheme();
    renderAll();
    showToast('Portfolio reset to defaults', 'info');
    showAdminPanelContent('dashboard');
  }
}

/* ── Admin: Settings ── */
function renderAdminSettings(el) {
  el.innerHTML = `
    <div class="glass-card" style="padding:24px; margin-bottom:20px;">
      <h6 style="font-weight:600; margin-bottom:16px;"><i class="fas fa-keyboard me-2 text-accent"></i>Keyboard Shortcuts</h6>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-color);">
          <span style="font-size:0.9rem;">Command Palette</span>
          <span><kbd style="padding:3px 8px;background:var(--glass-bg);border:1px solid var(--border-color);border-radius:4px;font-family:var(--font-mono);font-size:0.8rem;">Ctrl + Shift + P</kbd></span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-color);">
          <span style="font-size:0.9rem;">Admin Panel</span>
          <span><kbd style="padding:3px 8px;background:var(--glass-bg);border:1px solid var(--border-color);border-radius:4px;font-family:var(--font-mono);font-size:0.8rem;">Ctrl + Shift + E</kbd></span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-color);">
          <span style="font-size:0.9rem;">Close Panel / Escape</span>
          <span><kbd style="padding:3px 8px;background:var(--glass-bg);border:1px solid var(--border-color);border-radius:4px;font-family:var(--font-mono);font-size:0.8rem;">Esc</kbd></span>
        </div>
      </div>
    </div>
    <div class="glass-card" style="padding:24px; margin-bottom:20px;">
      <h6 style="font-weight:600; margin-bottom:16px;"><i class="fas fa-terminal me-2 text-accent"></i>Secret Commands</h6>
      <p style="color:var(--text-secondary);font-size:0.9rem;">Type these in the command palette:</p>
      <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;">
        <code style="background:var(--code-bg);padding:6px 12px;border-radius:var(--radius-sm);font-family:var(--font-mono);font-size:0.85rem;">/admin</code>
        <code style="background:var(--code-bg);padding:6px 12px;border-radius:var(--radius-sm);font-family:var(--font-mono);font-size:0.85rem;">/edit</code>
        <code style="background:var(--code-bg);padding:6px 12px;border-radius:var(--radius-sm);font-family:var(--font-mono);font-size:0.85rem;">/open-panel</code>
      </div>
    </div>
    <div class="glass-card" style="padding:24px;">
      <h6 style="font-weight:600; margin-bottom:16px;"><i class="fas fa-info-circle me-2 text-accent"></i>About</h6>
      <p style="color:var(--text-secondary);font-size:0.9rem;">Premium Portfolio v1.0</p>
      <p style="color:var(--text-tertiary);font-size:0.8rem;">Built with HTML5, CSS3, Bootstrap 5 & Vanilla JavaScript</p>
    </div>
  `;
}

/* ─────────────────────────────────────────
   27. UTILITY FUNCTIONS
   ───────────────────────────────────────── */
function escHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escAttr(str) {
  if (!str) return '';
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function generateProjectPlaceholder(title) {
  return `https://api.dicebear.com/9.x/shapes/svg?seed=${encodeURIComponent(title)}&backgroundColor=1a1a24,111118&shape1Color=3b82f6`;
}

/* ─────────────────────────────────────────
   28. AUTO-SAVE: Monitor admin form changes
   ───────────────────────────────────────── */
// The auto-save is handled by each individual save function.
// Each "Save" button triggers saveData() immediately.
