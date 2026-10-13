/**
 * Editing Lokam (എഡിറ്റിംഗ് ലോകം) - Core Interactive Application Logic
 * 
 * Manages view routing, category filtering, search engine,
 * breadcrumbs, copy-link notifications, and responsive navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    category: 'home',      // 'home' | 'video' | 'photo'
    section: 'apps',       // 'apps' | 'tutorials' | 'resources'
    platform: 'pc',        // 'pc' | 'mobile'
    tier: 'all',           // 'all' | 'free' | 'paid' | 'paid-for-free'
    resourceFilter: 'all', // 'all' | category string
    searchQuery: '',
    searchFilter: 'all'
  };

  // DOM Elements Cache
  const views = {
    home: document.getElementById('home-view'),
    category: document.getElementById('category-view')
  };

  const breadcrumbsNav = document.getElementById('breadcrumbs-bar');
  const breadcrumbsList = document.getElementById('breadcrumbs-list');
  const backBtn = document.getElementById('btn-back');

  const catHeaderTitle = document.getElementById('category-header-title');
  const catHeaderTitleMl = document.getElementById('category-header-title-ml');
  const catHeaderDesc = document.getElementById('category-header-desc');

  const sectionTabs = document.querySelectorAll('.tab-btn');
  const subnavToolbar = document.getElementById('filter-toolbar');
  const cardsContainer = document.getElementById('content-cards-container');

  // Search Elements
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('modal-search-input');
  const searchCloseBtn = document.getElementById('modal-close-btn');
  const searchResultsList = document.getElementById('modal-search-results');
  const searchModalFilterChips = document.querySelectorAll('.modal-filter-chip');
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroSearchForm = document.getElementById('hero-search-form');

  // Toast
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');

  // Mobile Menu
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileDrawerCloseBtn = document.getElementById('mobile-drawer-close');

  // --- SVG Icons Map for Rendering ---
  const icons = {
    external: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    copy: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    check: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    play: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    download: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    telegram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.17 3.35-1.37 3.73-1.38.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>`,
    empty: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
  };

  // --- Router / Hash Management ---
  function parseHash() {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    if (!rawHash) {
      return { category: 'home' };
    }

    const parts = rawHash.split('/');
    const cat = parts[0]; // 'video' | 'photo' | 'home'
    const sec = parts[1] || 'apps';
    const plat = parts[2] || 'pc';
    const tier = parts[3] || 'all';

    if (cat === 'video' || cat === 'photo') {
      return {
        category: cat,
        section: ['apps', 'tutorials', 'resources'].includes(sec) ? sec : 'apps',
        platform: ['pc', 'mobile'].includes(plat) ? plat : 'pc',
        tier: ['all', 'free', 'paid', 'paid-for-free'].includes(tier) ? tier : 'all'
      };
    }
    return { category: 'home' };
  }

  function updateRoute(newParams, replace = false) {
    Object.assign(state, newParams);
    let hash = '';
    if (state.category === 'home') {
      hash = '';
    } else {
      hash = `#/${state.category}/${state.section}/${state.platform}`;
      if (state.section === 'apps' && state.tier !== 'all') {
        hash += `/${state.tier}`;
      }
    }

    if (replace) {
      window.history.replaceState(null, '', hash || window.location.pathname);
    } else {
      window.location.hash = hash;
    }
    renderApp();
  }

  window.addEventListener('hashchange', () => {
    const route = parseHash();
    Object.assign(state, route);
    renderApp();
  });

  // --- Toast Trigger ---
  function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Copy Link Helper
  function copyToClipboard(url, title = 'Link') {
    navigator.clipboard.writeText(url).then(() => {
      showToast(`${title} copied to clipboard!`);
    }).catch(() => {
      // Fallback
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showToast(`${title} copied to clipboard!`);
    });
  }

  // --- Render Orchestrator ---
  function renderApp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Header active state
    document.querySelectorAll('.nav-link-btn').forEach(btn => {
      const target = btn.dataset.nav;
      if (target === state.category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (state.category === 'home') {
      views.home.style.display = 'block';
      views.category.style.display = 'none';
      breadcrumbsNav.style.display = 'none';
    } else {
      views.home.style.display = 'none';
      views.category.style.display = 'block';
      breadcrumbsNav.style.display = 'flex';
      renderBreadcrumbs();
      renderCategoryView();
    }
  }

  // --- Breadcrumb Renderer ---
  function renderBreadcrumbs() {
    breadcrumbsList.innerHTML = '';

    // Home Item
    const homeLi = document.createElement('li');
    homeLi.className = 'breadcrumb-item';
    homeLi.innerHTML = `
      <a class="breadcrumb-link" data-route="home">Home</a>
      <span class="breadcrumb-sep">/</span>
    `;
    homeLi.querySelector('a').addEventListener('click', () => {
      updateRoute({ category: 'home' });
    });
    breadcrumbsList.appendChild(homeLi);

    // Category Item
    const catData = EDITING_LOKAM_DATA.categories.find(c => c.id === state.category);
    const catLi = document.createElement('li');
    catLi.className = 'breadcrumb-item' + (state.section ? '' : ' active');
    catLi.innerHTML = `
      <a class="breadcrumb-link" data-route="${state.category}">${catData ? catData.name : state.category}</a>
      ${state.section ? '<span class="breadcrumb-sep">/</span>' : ''}
    `;
    catLi.querySelector('a').addEventListener('click', () => {
      updateRoute({ category: state.category, section: 'apps', platform: 'pc', tier: 'all' });
    });
    breadcrumbsList.appendChild(catLi);

    // Section Item
    if (state.section) {
      const secNames = { apps: 'Apps', tutorials: 'Tutorials', resources: 'Resources' };
      const secLi = document.createElement('li');
      secLi.className = 'breadcrumb-item' + (state.section === 'resources' ? ' active' : '');
      secLi.innerHTML = `
        <span class="${state.section === 'resources' ? '' : 'breadcrumb-link'}">${secNames[state.section]}</span>
        ${state.section !== 'resources' ? '<span class="breadcrumb-sep">/</span>' : ''}
      `;
      breadcrumbsList.appendChild(secLi);

      // Platform Item (for Apps & Tutorials)
      if (state.section !== 'resources' && state.platform) {
        const platNames = { pc: 'PC', mobile: 'Mobile' };
        const platLi = document.createElement('li');
        platLi.className = 'breadcrumb-item active';
        platLi.innerHTML = `<span>${platNames[state.platform]}</span>`;
        breadcrumbsList.appendChild(platLi);
      }
    }
  }

  // Back button action
  backBtn.addEventListener('click', () => {
    if (state.category !== 'home') {
      updateRoute({ category: 'home' });
    }
  });

  // --- Category View Renderer ---
  function renderCategoryView() {
    const isVideo = state.category === 'video';
    const catData = EDITING_LOKAM_DATA.categories.find(c => c.id === state.category);

    // Category Header
    catHeaderTitle.textContent = isVideo ? 'Video Editing' : 'Photo Editing';
    catHeaderTitleMl.textContent = isVideo ? 'വീഡിയോ എഡിറ്റിംഗ് ഹബ്' : 'ഫോട്ടോ എഡിറ്റിംഗ് ഹബ്';
    catHeaderDesc.textContent = isVideo 
      ? 'Explore powerful video editing suites, motion design assets, color grading tutorials, and sound libraries.' 
      : 'Discover graphic design software, unlocked editing APKs, Malayalam typography packs, and Lightroom presets.';

    // Section Tabs Active State
    sectionTabs.forEach(tab => {
      if (tab.dataset.section === state.section) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Render Sub-navigation toolbar based on active section
    renderSubnavToolbar();

    // Render Cards
    renderContentCards();
  }

  // --- Sub-navigation Toolbar (Platforms & Tiers) ---
  function renderSubnavToolbar() {
    subnavToolbar.innerHTML = '';

    if (state.section === 'apps') {
      // 1. Platform Switcher (PC / Mobile)
      const platGroup = document.createElement('div');
      platGroup.className = 'filter-group';
      platGroup.innerHTML = `
        <span class="filter-label">Platform:</span>
        <button class="pill-btn ${state.platform === 'pc' ? 'active' : ''}" data-plat="pc">💻 PC</button>
        <button class="pill-btn ${state.platform === 'mobile' ? 'active' : ''}" data-plat="mobile">📱 Mobile</button>
      `;
      platGroup.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          updateRoute({ platform: btn.dataset.plat });
        });
      });
      subnavToolbar.appendChild(platGroup);

      // 2. Tier Switcher (All / Free / Paid / Paid for Free)
      const tierGroup = document.createElement('div');
      tierGroup.className = 'filter-group';
      tierGroup.innerHTML = `
        <span class="filter-label">Tier:</span>
        <button class="pill-btn ${state.tier === 'all' ? 'active' : ''}" data-tier="all">All Apps</button>
        <button class="pill-btn ${state.tier === 'free' ? 'active' : ''}" data-tier="free">🟢 Free Apps</button>
        <button class="pill-btn ${state.tier === 'paid' ? 'active' : ''}" data-tier="paid">💎 Paid Apps</button>
        <button class="pill-btn ${state.tier === 'paid-for-free' ? 'active' : ''}" data-tier="paid-for-free">⚡ Paid Apps for Free</button>
      `;
      tierGroup.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          updateRoute({ tier: btn.dataset.tier });
        });
      });
      subnavToolbar.appendChild(tierGroup);

    } else if (state.section === 'tutorials') {
      // Tutorials Platform Switcher
      const platGroup = document.createElement('div');
      platGroup.className = 'filter-group';
      platGroup.innerHTML = `
        <span class="filter-label">Platform:</span>
        <button class="pill-btn ${state.platform === 'pc' ? 'active' : ''}" data-plat="pc">💻 PC Tutorials</button>
        <button class="pill-btn ${state.platform === 'mobile' ? 'active' : ''}" data-plat="mobile">📱 Mobile Tutorials</button>
      `;
      platGroup.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          updateRoute({ platform: btn.dataset.plat });
        });
      });
      subnavToolbar.appendChild(platGroup);

    } else if (state.section === 'resources') {
      // Resource Category Filter Chips
      const catGroup = document.createElement('div');
      catGroup.className = 'filter-group';
      catGroup.innerHTML = `
        <span class="filter-label">Asset Type:</span>
        <button class="pill-btn ${state.resourceFilter === 'all' ? 'active' : ''}" data-res-cat="all">All Assets</button>
      `;

      // Extract unique categories from current dataset
      const resItems = state.category === 'video' 
        ? EDITING_LOKAM_DATA.video.resources 
        : EDITING_LOKAM_DATA.photo.resources;

      const categories = [...new Set(resItems.map(item => item.category))];
      categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `pill-btn ${state.resourceFilter === cat ? 'active' : ''}`;
        btn.dataset.resCat = cat;
        btn.textContent = cat;
        catGroup.appendChild(btn);
      });

      catGroup.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          state.resourceFilter = btn.dataset.resCat;
          renderSubnavToolbar();
          renderContentCards();
        });
      });
      subnavToolbar.appendChild(catGroup);
    }
  }

  // --- Content Card Renderer ---
  function renderContentCards() {
    cardsContainer.innerHTML = '';
    const catData = EDITING_LOKAM_DATA[state.category];
    if (!catData) return;

    if (state.section === 'apps') {
      renderAppCards(catData.apps);
    } else if (state.section === 'tutorials') {
      renderTutorialCards(catData.tutorials);
    } else if (state.section === 'resources') {
      renderResourceCards(catData.resources);
    }
  }

  // Render Apps Section
  function renderAppCards(appsData) {
    let itemsToRender = [];
    const isMobile = state.platform === 'mobile';
    const platData = isMobile ? appsData.mobile : appsData.pc;

    if (!platData) return;

    if (state.category === 'video') {
      // Video Editing structure
      if (state.tier === 'all') {
        const free = (platData.free || []).map(i => ({ ...i, tierLabel: 'Free App' }));
        const paid = (platData.paid || []).map(i => ({ ...i, tierLabel: 'Paid App' }));
        const paidForFree = (platData.paidForFree || []).map(i => ({ ...i, tierLabel: 'Paid App for Free' }));
        itemsToRender = [...free, ...paid, ...paidForFree];
      } else if (state.tier === 'free') {
        itemsToRender = (platData.free || []).map(i => ({ ...i, tierLabel: 'Free App' }));
      } else if (state.tier === 'paid') {
        itemsToRender = (platData.paid || []).map(i => ({ ...i, tierLabel: 'Paid App' }));
      } else if (state.tier === 'paid-for-free') {
        itemsToRender = (platData.paidForFree || []).map(i => ({ ...i, tierLabel: 'Paid App for Free' }));
      }
    } else {
      // Photo Editing structure
      if (state.tier === 'all') {
        itemsToRender = platData.all || [];
      } else if (state.tier === 'free') {
        itemsToRender = platData.free || [];
      } else if (state.tier === 'paid') {
        itemsToRender = platData.paid || [];
      } else if (state.tier === 'paid-for-free') {
        itemsToRender = platData.paidForFree || [];
      }
    }

    // Check Empty State
    if (!itemsToRender || itemsToRender.length === 0) {
      renderEmptyState("No apps added yet", "We haven't added apps to this section yet. Join our Telegram channel or check back soon for upcoming links!");
      return;
    }

    // Render Cards
    itemsToRender.forEach(app => {
      cardsContainer.appendChild(createAppCard(app));
    });
  }

  function createAppCard(app) {
    const card = document.createElement('article');
    card.className = 'content-card';

    // Source badge styling
    let badgeClass = 'badge-official';
    if (app.sourceType === 'telegram') badgeClass = 'badge-telegram';
    else if (app.sourceType === 'third-party') badgeClass = 'badge-third-party';

    // Action button label
    let actionLabel = 'Open Link';
    let actionIcon = icons.external;
    if (app.sourceType === 'official-store' || app.sourceType === 'official-web') {
      actionLabel = app.tierBadge.includes('Paid') ? 'View Official Plans' : 'Official Download';
      actionIcon = icons.download;
    } else if (app.sourceType === 'telegram') {
      actionLabel = 'Open Telegram Post';
      actionIcon = icons.telegram;
    } else if (app.sourceType === 'third-party') {
      actionLabel = 'Download Package';
      actionIcon = icons.download;
    }

    card.innerHTML = `
      <div>
        <div class="card-header-row">
          <div class="card-icon-title-wrap">
            <div class="item-icon">
              ${app.sourceType === 'telegram' ? icons.telegram : (app.platform.includes('Mobile') ? '📱' : '💻')}
            </div>
            <div class="card-title-group">
              ${app.titleMl ? `<span class="card-item-title-ml ml-text">${app.titleMl}</span>` : ''}
              <h3 class="card-item-title">${app.title}</h3>
            </div>
          </div>
          <span class="badge-tag ${badgeClass}">${app.badge || 'Link'}</span>
        </div>

        <div class="card-body">
          <p class="card-desc-text">${app.description}</p>
          <div class="card-meta-chips">
            <span class="meta-chip">${app.platform}</span>
            <span class="meta-chip" style="color: var(--electric-cyan);">${app.tierBadge || 'Resource'}</span>
            ${(app.tags || []).slice(0, 2).map(t => `<span class="meta-chip">#${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="card-actions-row">
        <a href="${app.url}" target="_blank" rel="noopener noreferrer" class="btn-primary-action">
          ${actionIcon}
          <span>${actionLabel}</span>
        </a>
        <button class="btn-icon-action" title="Copy Link" aria-label="Copy Link">
          ${icons.copy}
        </button>
      </div>
    `;

    card.querySelector('.btn-icon-action').addEventListener('click', () => {
      copyToClipboard(app.url, app.title);
    });

    return card;
  }

  // Render Tutorials Section
  function renderTutorialCards(tutorialsData) {
    const isMobile = state.platform === 'mobile';
    const list = isMobile ? tutorialsData.mobile : tutorialsData.pc;

    if (!list || list.length === 0) {
      renderEmptyState("No tutorials added yet", "Tutorials for this platform are being compiled by our editors.");
      return;
    }

    list.forEach(item => {
      const card = document.createElement('article');
      card.className = 'content-card';

      const isPlaylist = item.type.includes('Playlist');
      const isTg = item.type.includes('Telegram');

      card.innerHTML = `
        <div>
          <div class="card-header-row">
            <div class="card-icon-title-wrap">
              <div class="item-icon" style="color: ${isTg ? '#38bdf8' : '#ef4444'};">
                ${isTg ? icons.telegram : icons.play}
              </div>
              <div class="card-title-group">
                ${item.titleMl ? `<span class="card-item-title-ml ml-text">${item.titleMl}</span>` : ''}
                <h3 class="card-item-title">${item.title}</h3>
              </div>
            </div>
            <span class="badge-tag ${isTg ? 'badge-telegram' : 'badge-playlist'}">${item.badge}</span>
          </div>

          <div class="card-body">
            <p class="card-desc-text">${item.description}</p>
            <div class="card-meta-chips">
              <span class="meta-chip">Tool: ${item.app}</span>
              <span class="meta-chip">${item.platform}</span>
              <span class="meta-chip">${item.type}</span>
            </div>
          </div>
        </div>

        <div class="card-actions-row">
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-primary-action" style="${isTg ? '' : 'background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white;'}">
            ${isTg ? icons.telegram : icons.play}
            <span>${isPlaylist ? 'Watch Playlist' : (isTg ? 'Read Guide' : 'Watch Video')}</span>
          </a>
          <button class="btn-icon-action" title="Copy Link" aria-label="Copy Link">
            ${icons.copy}
          </button>
        </div>
      `;

      card.querySelector('.btn-icon-action').addEventListener('click', () => {
        copyToClipboard(item.url, item.title);
      });

      cardsContainer.appendChild(card);
    });
  }

  // Render Resources Section
  function renderResourceCards(resourcesList) {
    let filtered = resourcesList;
    if (state.resourceFilter !== 'all') {
      filtered = resourcesList.filter(r => r.category === state.resourceFilter);
    }

    if (!filtered || filtered.length === 0) {
      renderEmptyState("No resources found", "No resources match the selected filter category.");
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'content-card';

      const isGdrive = item.sourceType === 'gdrive';

      card.innerHTML = `
        <div>
          <div class="card-header-row">
            <div class="card-icon-title-wrap">
              <div class="item-icon" style="color: var(--electric-cyan);">
                📦
              </div>
              <div class="card-title-group">
                ${item.titleMl ? `<span class="card-item-title-ml ml-text">${item.titleMl}</span>` : ''}
                <h3 class="card-item-title">${item.title}</h3>
              </div>
            </div>
            <span class="badge-tag badge-cloud">${item.badge}</span>
          </div>

          <div class="card-body">
            <p class="card-desc-text">${item.description}</p>
            <div class="card-meta-chips">
              <span class="meta-chip">Format: ${item.fileTypes}</span>
              <span class="meta-chip">Type: ${item.category}</span>
            </div>
          </div>
        </div>

        <div class="card-actions-row">
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-primary-action">
            ${isGdrive ? icons.download : icons.external}
            <span>${isGdrive ? 'Open Google Drive' : 'Access Library'}</span>
          </a>
          <button class="btn-icon-action" title="Copy Link" aria-label="Copy Link">
            ${icons.copy}
          </button>
        </div>
      `;

      card.querySelector('.btn-icon-action').addEventListener('click', () => {
        copyToClipboard(item.url, item.title);
      });

      cardsContainer.appendChild(card);
    });
  }

  // Empty State Component
  function renderEmptyState(title, message) {
    const emptyBox = document.createElement('div');
    emptyBox.className = 'empty-state-card';
    emptyBox.innerHTML = `
      <div class="empty-state-icon-wrap">
        ${icons.empty}
      </div>
      <h3 class="empty-state-title">${title}</h3>
      <p class="empty-state-desc">${message}</p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <button class="empty-state-btn btn-browse-all">
          Browse All Available Apps
        </button>
        <a href="${EDITING_LOKAM_DATA.siteInfo.communityLinks.telegramAbez}" target="_blank" rel="noopener noreferrer" class="empty-state-btn" style="background: rgba(56, 189, 248, 0.15); border-color: rgba(56, 189, 248, 0.3);">
          ${icons.telegram}
          Request on Telegram
        </a>
      </div>
    `;

    emptyBox.querySelector('.btn-browse-all').addEventListener('click', () => {
      updateRoute({ tier: 'all' });
    });

    cardsContainer.appendChild(emptyBox);
  }

  // --- Category Card Event Listeners on Home ---
  document.querySelectorAll('.main-cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      updateRoute({ category: cat, section: 'apps', platform: 'pc', tier: 'all' });
    });
  });

  // Section Tab Buttons Event
  sectionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const sec = tab.dataset.section;
      state.resourceFilter = 'all';
      updateRoute({ section: sec });
    });
  });

  // Nav link buttons
  document.querySelectorAll('.nav-link-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const navTarget = btn.dataset.nav;
      if (navTarget === 'home') {
        updateRoute({ category: 'home' });
      } else if (navTarget === 'video' || navTarget === 'photo') {
        updateRoute({ category: navTarget, section: 'apps', platform: 'pc', tier: 'all' });
      } else if (navTarget === 'resources') {
        updateRoute({ category: 'video', section: 'resources' });
      }
    });
  });

  // Brand click -> Home
  document.querySelectorAll('.nav-brand').forEach(brand => {
    brand.addEventListener('click', (e) => {
      e.preventDefault();
      updateRoute({ category: 'home' });
    });
  });

  // --- Quick Tags on Hero ---
  document.querySelectorAll('.quick-tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.dataset.search;
      openSearchWithQuery(tag);
    });
  });

  // --- Search Engine Implementation ---
  const allSearchable = getAllSearchableItems();

  function openSearchModal() {
    searchModal.classList.add('open');
    searchInput.focus();
    executeSearch();
  }

  function closeSearchModal() {
    searchModal.classList.remove('open');
  }

  function openSearchWithQuery(q) {
    searchInput.value = q;
    state.searchQuery = q;
    openSearchModal();
  }

  // Global search trigger button in Nav
  document.getElementById('nav-search-btn').addEventListener('click', openSearchModal);

  // Keyboard shortcut Ctrl+K or /
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === 'Escape' && searchModal.classList.contains('open')) {
      closeSearchModal();
    }
  });

  searchCloseBtn.addEventListener('click', closeSearchModal);
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearchModal();
  });

  // Hero search form submit
  heroSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = heroSearchInput.value.trim();
    if (query) {
      openSearchWithQuery(query);
    }
  });

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    executeSearch();
  });

  // Search Filter Chips
  searchModalFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      searchModalFilterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.searchFilter = chip.dataset.filter;
      executeSearch();
    });
  });

  function executeSearch() {
    const query = (state.searchQuery || '').toLowerCase();
    const filter = state.searchFilter;

    let matches = allSearchable.filter(item => {
      // Filter category/section
      if (filter === 'video' && item.searchCategory !== 'video') return false;
      if (filter === 'photo' && item.searchCategory !== 'photo') return false;
      if (filter === 'apps' && item.searchSection !== 'apps') return false;
      if (filter === 'tutorials' && item.searchSection !== 'tutorials') return false;
      if (filter === 'resources' && item.searchSection !== 'resources') return false;

      // Query matching
      if (!query) return true;

      const titleMatch = (item.title || '').toLowerCase().includes(query);
      const titleMlMatch = (item.titleMl || '').toLowerCase().includes(query);
      const descMatch = (item.description || '').toLowerCase().includes(query);
      const tagMatch = (item.tags || []).some(t => t.toLowerCase().includes(query));
      const appMatch = (item.app || '').toLowerCase().includes(query);

      return titleMatch || titleMlMatch || descMatch || tagMatch || appMatch;
    });

    renderSearchResults(matches, query);
  }

  function highlightText(text, query) {
    if (!query || !text) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  function renderSearchResults(results, query) {
    searchResultsList.innerHTML = '';

    if (results.length === 0) {
      searchResultsList.innerHTML = `
        <div style="text-align: center; padding: 40px 16px; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
          <p style="font-weight: 600; font-size: 1.1rem; color: var(--text-main);">No results found</p>
          <p style="font-size: 0.85rem; margin-top: 4px;">Try searching for "CapCut", "Premiere", "Photoshop", "SFX", or "Presets".</p>
        </div>
      `;
      return;
    }

    results.slice(0, 20).forEach(item => {
      const li = document.createElement('li');
      li.className = 'search-result-item';

      const highlightedTitle = highlightText(item.title, query);
      const highlightedDesc = highlightText(item.description, query);

      li.innerHTML = `
        <div class="search-res-info">
          <div class="search-res-title">
            <span>${highlightedTitle}</span>
            <span class="meta-chip" style="font-size: 0.68rem; text-transform: uppercase;">${item.searchCategory} • ${item.searchSection}</span>
          </div>
          <div class="search-res-sub">${highlightedDesc.slice(0, 95)}...</div>
        </div>
        <div style="display: flex; gap: 8px;">
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="pill-btn" style="padding: 4px 10px; font-size: 0.76rem; background: var(--electric-gradient); color: #040711; text-decoration: none; font-weight: 700;">
            Open ↗
          </a>
          <button class="pill-btn btn-jump" style="padding: 4px 8px; font-size: 0.76rem;" title="Go to section">
            Go →
          </button>
        </div>
      `;

      li.querySelector('.btn-jump').addEventListener('click', () => {
        closeSearchModal();
        updateRoute({
          category: item.searchCategory,
          section: item.searchSection,
          platform: item.searchPlatform === 'mobile' ? 'mobile' : 'pc',
          tier: 'all'
        });
      });

      searchResultsList.appendChild(li);
    });
  }

  // --- Mobile Drawer Controls ---
  mobileToggleBtn.addEventListener('click', () => {
    mobileDrawer.classList.add('open');
  });

  mobileDrawerCloseBtn.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
  });

  mobileDrawer.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      mobileDrawer.classList.remove('open');
    }
  });

  document.querySelectorAll('.mobile-nav-item-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileDrawer.classList.remove('open');
      const target = btn.dataset.nav;
      if (target === 'home') {
        updateRoute({ category: 'home' });
      } else if (target === 'video' || target === 'photo') {
        updateRoute({ category: target, section: 'apps', platform: 'pc', tier: 'all' });
      } else if (target === 'resources') {
        updateRoute({ category: 'video', section: 'resources' });
      }
    });
  });

  // Header scroll blur effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Initialize Route
  const initialRoute = parseHash();
  Object.assign(state, initialRoute);
  renderApp();
});

