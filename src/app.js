const APP_NAME = "Glassfin";
const APP_VERSION = "1.0.0";
const SESSION_KEY = "glassfin.session.v1";
const DEVICE_KEY = "glassfin.deviceId.v1";

const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h3l3-8 4 16 3-8h5"/></svg>`,
  tools: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 1 0 3.1 3.1l3.5 3.5-2.8 2.8-3.5-3.5a4 4 0 0 1-3.1-3.1L7 5l-2 2 4.4 4.4"/><path d="m9 13-5 5 2 2 5-5"/></svg>`,
  cast: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><path d="M2 12a8 8 0 0 1 8 8"/><path d="M2 16a4 4 0 0 1 4 4"/><circle cx="3" cy="20" r="1" fill="currentColor"/></svg>`,
  caret: `<svg viewBox="0 0 12 12"><path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  status: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  playlists: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="14" y2="6"/><line x1="3" y1="12" x2="11" y2="12"/><line x1="3" y1="18" x2="11" y2="18"/><polygon points="16 12 22 16 16 20 16 12" fill="currentColor" stroke="currentColor"/></svg>`,
  movies: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="1.5"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="7" y1="4" x2="7" y2="20"/><line x1="17" y1="4" x2="17" y2="20"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  photos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>`,
  tv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
  channels: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  slider: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="10" y2="6"/><line x1="14" y1="6" x2="20" y2="6"/><circle cx="12" cy="6" r="2"/><line x1="4" y1="12" x2="6" y2="12"/><line x1="10" y1="12" x2="20" y2="12"/><circle cx="8" cy="12" r="2"/><line x1="4" y1="18" x2="14" y2="18"/><line x1="18" y1="18" x2="20" y2="18"/><circle cx="16" cy="18" r="2"/></svg>`,
  plexMark: `<svg viewBox="0 0 64 64"><path d="M16 12 L40 12 L52 32 L40 52 L16 52 L28 32 Z" fill="currentColor"/></svg>`,
  play: `<svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20" fill="currentColor"/></svg>`,
};

function icon(name, cls = "icon") {
  return `<span class="${cls}" aria-hidden="true">${ICONS[name] || ""}</span>`;
}

const state = {
  session: loadSession(),
  route: { name: "home", params: {} },
  views: [],
  home: null,
  library: null,
  detail: null,
  series: null,
  search: { query: "", results: [] },
  loading: false,
  error: "",
};

const app = document.querySelector("#app");

window.addEventListener("hashchange", () => {
  state.route = parseHash();
  render();
  void loadRoute();
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  const action = form.dataset.action;
  if (!action) return;
  event.preventDefault();

  if (action === "login") {
    void login(new FormData(form));
  }
  if (action === "search") {
    const query = String(new FormData(form).get("query") || "").trim();
    location.hash = query ? `#/search/${encodeURIComponent(query)}` : "#/search";
  }
});

document.addEventListener("click", (event) => {
  const disabled = event.target.closest("[data-disabled]");
  if (disabled) {
    event.preventDefault();
    return;
  }
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "logout") {
    logout();
  }
  if (action === "demo-login") {
    void startDemoSession();
  }
  if (action === "play") {
    const id = target.dataset.id;
    if (id) location.hash = `#/play/${id}`;
  }
  if (action === "season") {
    const id = target.dataset.id;
    if (id) void selectSeason(id);
  }
  if (action === "rail-prev" || action === "rail-next") {
    const rail = target.closest(".rail")?.querySelector(".poster-row");
    if (rail) {
      const direction = action === "rail-next" ? 1 : -1;
      rail.scrollBy({ left: direction * Math.max(rail.clientWidth - 80, 320), behavior: "smooth" });
    }
  }
});

state.route = parseHash();
render();
queueMicrotask(() => void bootstrap());

async function bootstrap() {
  if (!state.session) return;
  await loadRoute();
}

async function login(formData) {
  const server = normalizeServer(String(formData.get("server") || ""));
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  if (!server || !username || !password) {
    setError("Enter a server URL, username, and password.");
    return;
  }

  setLoading(true);
  try {
    const response = await fetch(`${server}/Users/AuthenticateByName`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Emby-Authorization": authorizationHeader(server),
      },
      body: JSON.stringify({ Username: username, Pw: password }),
    });

    if (!response.ok) {
      throw new Error(response.status === 401 ? "Those Jellyfin credentials were not accepted." : `Login failed (${response.status}).`);
    }

    const data = await response.json();
    state.session = {
      server,
      token: data.AccessToken,
      userId: data.User?.Id,
      username: data.User?.Name || username,
    };
    state.error = "";
    localStorage.setItem(SESSION_KEY, JSON.stringify(state.session));
    state.route = { name: "home", params: {} };
    location.hash = "#/home";
    await loadRoute();
  } catch (error) {
    setError(error.message || "Could not sign in to Jellyfin.");
  } finally {
    setLoading(false);
  }
}

async function startDemoSession() {
  state.session = {
    server: "demo://glassfin",
    token: "demo-token",
    userId: "demo-user",
    username: "Demo Viewer",
    demo: true,
  };
  state.views = [];
  state.home = null;
  state.library = null;
  state.detail = null;
  state.series = null;
  state.search = { query: "", results: [] };
  state.error = "";
  localStorage.setItem(SESSION_KEY, JSON.stringify(state.session));
  state.route = { name: "home", params: {} };
  location.hash = "#/home";
  await loadRoute();
}

function logout() {
  state.session = null;
  state.views = [];
  state.home = null;
  state.library = null;
  state.detail = null;
  state.series = null;
  state.search = { query: "", results: [] };
  localStorage.removeItem(SESSION_KEY);
  location.hash = "#/login";
  render();
}

async function loadRoute() {
  if (!state.session) {
    render();
    return;
  }

  setLoading(true);
  try {
    state.views = state.views.Items ? state.views : await api("/Users/{userId}/Views");

    if (state.route.name === "home") {
      await loadHome();
    }
    if (state.route.name === "library") {
      await loadLibrary(state.route.params.id);
    }
    if (state.route.name === "detail") {
      await loadDetail(state.route.params.id);
    }
    if (state.route.name === "search") {
      await loadSearch(state.route.params.query || "");
    }
    if (state.route.name === "play") {
      await loadDetail(state.route.params.id);
    }
  } catch (error) {
    if (String(error.message).includes("401")) logout();
    else setError(error.message || "Jellyfin did not return the requested content.");
  } finally {
    setLoading(false);
  }
}

async function loadHome() {
  const [resume, latest, nextUp] = await Promise.all([
    api("/Users/{userId}/Items/Resume", {
      MediaTypes: "Video",
      Limit: 18,
      Fields: commonFields(),
    }),
    api("/Users/{userId}/Items/Latest", {
      Limit: 24,
      Fields: commonFields(),
    }),
    api("/Shows/NextUp", {
      userId: state.session.userId,
      Limit: 18,
      Fields: commonFields(),
    }).catch(() => ({ Items: [] })),
  ]);

  state.home = {
    resume: resume.Items || [],
    latest: Array.isArray(latest) ? latest : latest.Items || [],
    nextUp: nextUp.Items || [],
  };
}

async function loadLibrary(id) {
  if (!id) {
    state.library = null;
    return;
  }
  const view = state.views.Items?.find((item) => item.Id === id) || null;
  const includeItemTypes = view?.CollectionType === "tvshows" ? "Series" : view?.CollectionType === "movies" ? "Movie" : "Movie,Series,Episode";
  const items = await api("/Users/{userId}/Items", {
    ParentId: id,
    Recursive: true,
    IncludeItemTypes: includeItemTypes,
    SortBy: "SortName",
    SortOrder: "Ascending",
    Fields: commonFields(),
    ImageTypeLimit: 1,
    EnableImageTypes: "Primary,Backdrop",
  });
  state.library = { view, items: items.Items || [] };
}

async function loadDetail(id) {
  if (!id) return;
  const item = await api(`/Users/{userId}/Items/${id}`, { Fields: `${commonFields()},Genres,People,MediaSources` });
  state.detail = item;
  state.series = null;

  if (item.Type === "Series") {
    const seasons = await api(`/Shows/${id}/Seasons`, {
      userId: state.session.userId,
      Fields: commonFields(),
    });
    const firstSeason = seasons.Items?.[0];
    let episodes = [];
    if (firstSeason) {
      const episodeResult = await api(`/Shows/${id}/Episodes`, {
        userId: state.session.userId,
        seasonId: firstSeason.Id,
        Fields: commonFields(),
      });
      episodes = episodeResult.Items || [];
    }
    state.series = {
      seasons: seasons.Items || [],
      selectedSeasonId: firstSeason?.Id || "",
      episodes,
    };
  }
}

async function selectSeason(seasonId) {
  if (!state.detail || state.detail.Type !== "Series") return;
  const episodeResult = await api(`/Shows/${state.detail.Id}/Episodes`, {
    userId: state.session.userId,
    seasonId,
    Fields: commonFields(),
  });
  state.series = {
    ...state.series,
    selectedSeasonId: seasonId,
    episodes: episodeResult.Items || [],
  };
  render();
}

async function loadSearch(query) {
  state.search.query = query;
  if (!query) {
    state.search.results = [];
    return;
  }
  const results = await api("/Users/{userId}/Items", {
    SearchTerm: query,
    Recursive: true,
    IncludeItemTypes: "Movie,Series,Episode",
    Limit: 60,
    Fields: commonFields(),
    ImageTypeLimit: 1,
    EnableImageTypes: "Primary,Backdrop",
  });
  state.search.results = results.Items || [];
}

async function api(path, query = {}) {
  const session = state.session;
  if (!session) throw new Error("No Jellyfin session.");
  if (session.demo) return demoApi(path, query);

  const url = new URL(`${session.server}${path.replace("{userId}", session.userId)}`);
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, value);
  });
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Emby-Token": session.token,
      "X-Emby-Authorization": authorizationHeader(session.server, session.token),
    },
  });
  if (!response.ok) throw new Error(`Jellyfin request failed (${response.status}).`);
  return response.json();
}

function render() {
  if (!state.session) {
    app.innerHTML = loginView();
    return;
  }

  app.innerHTML = `
    <div class="shell">
      ${sidebarView()}
      <main class="stage">
        ${topbarView()}
        ${state.error ? `<div class="toast" role="alert">${escapeHtml(state.error)}</div>` : ""}
        ${state.loading ? `<div class="loading-line" aria-hidden="true"></div>` : ""}
        ${routeView()}
      </main>
    </div>
  `;
}

function loginView() {
  return `
    <main class="login-screen">
      <form class="auth-card" data-action="login">
        <div class="auth-brand">
          <span class="plex-logo">${ICONS.plexMark}</span>
          <h1>Sign in to your server</h1>
          <p>Use your Jellyfin credentials</p>
        </div>
        ${state.error ? `<div class="form-error">${escapeHtml(state.error)}</div>` : ""}
        <label>
          <span>Server</span>
          <input name="server" type="url" placeholder="https://media.example.com" autocomplete="url" required />
        </label>
        <label>
          <span>Username</span>
          <input name="username" autocomplete="username" required />
        </label>
        <label>
          <span>Password</span>
          <input name="password" type="password" autocomplete="current-password" required />
        </label>
        <button class="primary-button" type="submit">${state.loading ? "Connecting…" : "Sign In"}</button>
        <button class="secondary-button demo-button" data-action="demo-login" type="button">Browse demo library</button>
      </form>
    </main>
  `;
}

function sidebarView() {
  const views = state.views.Items || [];
  const serverName = state.session.demo ? "Demo Server" : serverDisplayName(state.session.server);
  return `
    <aside class="sidebar">
      <div class="server-picker" role="button" tabindex="0">
        <span>${escapeHtml(serverName)}</span>
        <span class="online-dot" aria-label="Online"></span>
        <span class="caret">${ICONS.caret}</span>
      </div>

      <div class="nav-section">
        <p class="nav-section-label">Manage</p>
        <nav class="nav-stack" aria-label="Manage">
          <a class="disabled" href="#/home" data-disabled><span class="nav-glyph">${ICONS.status}</span>Status</a>
          <a class="disabled" href="#/home" data-disabled><span class="nav-glyph">${ICONS.settings}</span>Settings</a>
        </nav>
      </div>

      <div class="nav-section">
        <p class="nav-section-label">Libraries</p>
        <nav class="nav-stack" aria-label="Libraries">
          <a class="disabled" href="#/home" data-disabled><span class="nav-glyph">${ICONS.playlists}</span>Playlists</a>
          ${views.map((view) => `<a class="${state.route.params.id === view.Id ? "active" : ""}" href="#/library/${view.Id}"><span class="nav-glyph">${ICONS[collectionIcon(view)] || ICONS.movies}</span>${escapeHtml(view.Name)}</a>`).join("")}
        </nav>
      </div>

      <div class="nav-section">
        <p class="nav-section-label">Online Content</p>
        <nav class="nav-stack" aria-label="Online Content">
          <a class="disabled" href="#/home" data-disabled><span class="nav-glyph">${ICONS.channels}</span>Channels</a>
          <a class="disabled" href="#/home" data-disabled><span class="nav-glyph">${ICONS.bookmark}</span>Watch Later<span class="count">14</span></a>
          <a class="disabled" href="#/home" data-disabled><span class="nav-glyph">${ICONS.star}</span>Recommended<span class="count">4</span></a>
        </nav>
      </div>

      <div class="sidebar-foot">
        <button class="logout" data-action="logout" type="button">Sign out</button>
      </div>
    </aside>
  `;
}

function topbarView() {
  const query = state.route.name === "search" ? state.search.query : "";
  return `
    <header class="topbar">
      <div class="top-left">
        <a class="icon-button" href="#/home" aria-label="Home">${ICONS.home}</a>
      </div>
      <form class="search-box" data-action="search">
        <span class="icon" aria-hidden="true">${ICONS.search}</span>
        <input name="query" value="${escapeAttr(query)}" placeholder="Search" />
      </form>
      <div class="top-right">
        <button class="icon-button" type="button" aria-label="Activity">${ICONS.activity}</button>
        <button class="icon-button" type="button" aria-label="Tools">${ICONS.tools}</button>
        <button class="icon-button" type="button" aria-label="Devices">${ICONS.cast}</button>
        <span class="user-chip">
          <span class="user-avatar">${escapeHtml(initials(state.session.username))}</span>
          <span class="caret">${ICONS.caret}</span>
        </span>
      </div>
    </header>
  `;
}

function routeView() {
  if (state.route.name === "library") return libraryView();
  if (state.route.name === "detail") return detailView();
  if (state.route.name === "search") return searchView();
  if (state.route.name === "play") return playerView();
  return homeView();
}

function homeView() {
  const home = state.home;
  const onDeck = [...(home?.resume || []), ...(home?.nextUp || [])];
  const latest = home?.latest || [];
  const movies = latest.filter((item) => item.Type === "Movie");
  const episodes = latest.filter((item) => item.Type === "Episode");
  const series = latest.filter((item) => item.Type === "Series");
  const otherLatest = movies.length || episodes.length || series.length ? [] : latest;
  const empty = !onDeck.length && !latest.length;

  return `
    <section class="content-flow">
      ${discoverHeadView()}
      ${empty ? emptyState("Your library is warming up", "Connect a Jellyfin server with movies or series to fill this room.") : ""}
      ${railView("On Deck", onDeck)}
      ${railView("Recently Added Movies", movies)}
      ${railView("Recently Added Episodes", episodes)}
      ${railView("Recently Added Shows", series)}
      ${railView("Recently Added", otherLatest)}
    </section>
  `;
}

function discoverHeadView() {
  return `
    <div class="discover-head">
      <h1 class="discover-title">
        <span class="lead">Discover</span>
        <span class="sep">—</span>
        <span class="scope">All Libraries <span class="caret">${ICONS.caret}</span></span>
      </h1>
      <div class="discover-tools">
        <button class="icon-button" type="button" aria-label="Filter">${ICONS.slider}</button>
        <span class="divider"></span>
        <button class="icon-button" type="button" aria-label="Grid view">${ICONS.grid}</button>
      </div>
    </div>
  `;
}

function railView(title, items) {
  if (!items.length) return "";
  return `
    <section class="rail">
      <div class="section-head">
        <h2>${escapeHtml(title)}</h2>
        <div class="rail-nav">
          <button class="icon-button" type="button" aria-label="Scroll left" data-action="rail-prev">${ICONS.chevronLeft}</button>
          <button class="icon-button" type="button" aria-label="Scroll right" data-action="rail-next">${ICONS.chevronRight}</button>
        </div>
      </div>
      <div class="poster-row">
        ${items.map(cardView).join("")}
      </div>
    </section>
  `;
}

function libraryView() {
  const library = state.library;
  if (!library) return emptyState("Choose a library", "Movies and shows from Jellyfin appear here.");
  return `
    <section class="content-flow">
      <div class="page-head">
        <p class="eyebrow">${escapeHtml(library.view?.CollectionType || "Library")}</p>
        <h1>${escapeHtml(library.view?.Name || "Library")}</h1>
      </div>
      <div class="media-grid">
        ${library.items.map(cardView).join("") || emptyState("No titles found", "This Jellyfin library did not return playable movies or shows.")}
      </div>
    </section>
  `;
}

function detailView() {
  const item = state.detail;
  if (!item) return emptyState("Title unavailable", "Jellyfin did not return this item.");
  const background = imageUrl(item, "Backdrop", 1600, 720) || imageUrl(item, "Primary", 900, 900);
  const style = background ? `style="background-image: linear-gradient(90deg, rgba(20,22,25,.94), rgba(20,22,25,.7) 60%, rgba(20,22,25,.35)), url('${background}')"` : "";
  return `
    <section class="detail-page">
      <article class="detail-hero" ${style}>
        <div class="detail-poster">${posterImage(item)}</div>
        <div class="detail-copy">
          <p class="eyebrow">${metaLine(item)}</p>
          <h1>${escapeHtml(item.Name)}</h1>
          <p>${escapeHtml(item.Overview || "No overview is available from Jellyfin.")}</p>
          <div class="detail-actions">
            ${playButton(item)}
            ${item.RunTimeTicks ? `<span class="runtime">${formatRuntime(item.RunTimeTicks)}</span>` : ""}
          </div>
          ${chipsView([...(item.Genres || []), item.OfficialRating].filter(Boolean).slice(0, 6))}
        </div>
      </article>
      ${item.Type === "Series" ? seriesView() : relatedFactsView(item)}
    </section>
  `;
}

function seriesView() {
  if (!state.series) return "";
  return `
    <section class="episodes-panel">
      <div class="season-tabs" role="tablist">
        ${state.series.seasons.map((season) => `<button class="${season.Id === state.series.selectedSeasonId ? "active" : ""}" data-action="season" data-id="${season.Id}" type="button">${escapeHtml(season.Name)}</button>`).join("")}
      </div>
      <div class="episode-list">
        ${state.series.episodes.map(episodeView).join("") || emptyState("No episodes", "Jellyfin did not return episodes for this season.")}
      </div>
    </section>
  `;
}

function episodeView(item) {
  return `
    <article class="episode">
      <a class="episode-thumb" href="#/detail/${item.Id}">
        ${posterImage(item, "Backdrop")}
        ${progressView(item)}
      </a>
      <div>
        <p>${item.IndexNumber ? `Episode ${item.IndexNumber}` : "Episode"}</p>
        <h3>${escapeHtml(item.Name)}</h3>
        <span>${escapeHtml(trimText(item.Overview, 120) || "")}</span>
      </div>
      ${playButton(item, "icon")}
    </article>
  `;
}

function relatedFactsView(item) {
  const people = (item.People || []).filter((person) => person.Type === "Actor").slice(0, 8);
  if (!people.length) return "";
  return `
    <section class="facts-strip">
      <h2>Cast</h2>
      <div class="chip-row">${people.map((person) => `<span>${escapeHtml(person.Name)}</span>`).join("")}</div>
    </section>
  `;
}

function searchView() {
  const query = state.search.query;
  return `
    <section class="content-flow">
      <div class="page-head">
        <p class="eyebrow">Search</p>
        <h1>${query ? `Results for ${escapeHtml(query)}` : "Find a title"}</h1>
      </div>
      ${query ? `<div class="media-grid">${state.search.results.map(cardView).join("") || emptyState("No matches", "Try another title, actor, or episode name.")}</div>` : emptyState("Search your Jellyfin library", "Use the search field above to look across movies, series, and episodes.")}
    </section>
  `;
}

function playerView() {
  const item = state.detail;
  if (!item) return emptyState("Player unavailable", "Jellyfin did not return this title.");
  const stream = streamUrl(item.Id);
  const poster = imageUrl(item, "Backdrop", 1280, 720) || imageUrl(item, "Primary", 700, 700);
  return `
    <section class="player-page">
      <div class="player-top">
        <a class="secondary-button" href="#/detail/${item.Id}">Back to details</a>
        <h1>${escapeHtml(item.Name)}</h1>
      </div>
      <div class="player-frame">
        <video class="video-player" controls ${state.session.demo ? "" : "autoplay"} playsinline poster="${escapeAttr(poster || "")}" src="${escapeAttr(stream)}"></video>
        ${state.session.demo ? `<div class="demo-player-note"><strong>Demo playback shell</strong><span>Connect a real Jellyfin server to stream media here.</span></div>` : ""}
      </div>
    </section>
  `;
}

function cardView(item) {
  const title = item.Type === "Episode" ? (item.SeriesName || item.Name) : item.Name;
  const subtitle = cardSubtitle(item);
  const detailId = item.Type === "Episode" ? item.SeriesId || item.Id : item.Id;
  return `
    <article class="media-card">
      <a href="#/detail/${detailId}" aria-label="${escapeAttr(title)}">
        <div class="poster-wrap">
          ${posterImage(item)}
          ${isUnwatched(item) ? `<span class="new-flag" aria-label="Unwatched"></span>` : ""}
          ${progressView(item)}
        </div>
        <div class="card-copy">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(subtitle)}</p>
        </div>
      </a>
    </article>
  `;
}

function cardSubtitle(item) {
  if (item.Type === "Episode") {
    const ep = episodeNumber(item);
    return [item.Name, ep].filter(Boolean).join(" · ");
  }
  if (item.ProductionYear) return String(item.ProductionYear);
  return item.Type || "";
}

function isUnwatched(item) {
  if (!item?.UserData) return false;
  if (item.UserData.PlaybackPositionTicks) return false;
  if (item.UserData.Played === true) return false;
  if (item.Type === "Series") return (item.UserData.UnplayedItemCount || 0) > 0;
  return item.UserData.Played === false;
}

function posterImage(item, type = "Primary") {
  const url = imageUrl(item, type, type === "Backdrop" ? 520 : 360, type === "Backdrop" ? 300 : 540);
  if (!url) {
    return `<div class="poster-fallback"><span>${escapeHtml(initials(item.Name))}</span></div>`;
  }
  return `<img src="${escapeAttr(url)}" alt="" loading="lazy" />`;
}

function progressView(item) {
  const played = item.UserData?.PlaybackPositionTicks || 0;
  const total = item.RunTimeTicks || 0;
  if (!played || !total) return "";
  const width = Math.min(100, Math.max(2, (played / total) * 100));
  return `<span class="progress"><span style="width:${width}%"></span></span>`;
}

function playButton(item, variant = "text") {
  if (item.Type === "Series" || item.Type === "Season") {
    return `<a class="primary-button" href="#/detail/${item.Id}">View episodes</a>`;
  }
  const label = variant === "icon" ? "Play" : "Play now";
  return `<button class="primary-button" data-action="play" data-id="${item.Id}" type="button">${label}</button>`;
}

function chipsView(values) {
  if (!values.length) return "";
  return `<div class="chip-row">${values.map((value) => `<span>${escapeHtml(value)}</span>`).join("")}</div>`;
}

function emptyState(title, body) {
  return `
    <div class="empty-state">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(body)}</p>
    </div>
  `;
}

function parseHash() {
  const [name = "home", first = ""] = location.hash.replace(/^#\/?/, "").split("/");
  if (!state.session) return { name: "login", params: {} };
  if (name === "library") return { name, params: { id: first } };
  if (name === "detail") return { name, params: { id: first } };
  if (name === "play") return { name, params: { id: first } };
  if (name === "search") return { name, params: { query: decodeURIComponent(first || "") } };
  return { name: "home", params: {} };
}

function imageUrl(item, type, width, height) {
  if (!state.session || !item?.Id) return "";
  if (state.session.demo) return demoImageUrl(item, type, width, height);
  if (type === "Backdrop" && !item.BackdropImageTags?.length && !item.ImageTags?.Backdrop) return "";
  if (type === "Primary" && !item.ImageTags?.Primary) return "";
  const url = new URL(`${state.session.server}/Items/${item.Id}/Images/${type}${type === "Backdrop" ? "/0" : ""}`);
  url.searchParams.set("fillWidth", width);
  url.searchParams.set("fillHeight", height);
  url.searchParams.set("quality", "92");
  url.searchParams.set("api_key", state.session.token);
  return url.toString();
}

function streamUrl(id) {
  if (state.session?.demo) return "";
  const url = new URL(`${state.session.server}/Videos/${id}/stream`);
  url.searchParams.set("static", "true");
  url.searchParams.set("api_key", state.session.token);
  return url.toString();
}

function authorizationHeader(server, token = "") {
  const values = [
    `MediaBrowser Client="${APP_NAME}"`,
    `Device="Web Browser"`,
    `DeviceId="${deviceId(server)}"`,
    `Version="${APP_VERSION}"`,
  ];
  if (token) values.push(`Token="${token}"`);
  return values.join(", ");
}

function deviceId(server) {
  const key = `${DEVICE_KEY}.${server || "default"}`;
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    localStorage.setItem(key, id);
  }
  return id;
}

function commonFields() {
  return [
    "PrimaryImageAspectRatio",
    "Overview",
    "Genres",
    "ProductionYear",
    "RunTimeTicks",
    "OfficialRating",
    "UserData",
    "SeriesName",
    "SeasonName",
    "IndexNumber",
    "ParentIndexNumber",
    "DateCreated",
    "BackdropImageTags",
  ].join(",");
}

function metaLine(item) {
  const parts = [
    item.ProductionYear,
    item.Type === "Episode" && item.SeriesName,
    item.Type === "Episode" && episodeNumber(item),
    item.Type,
    item.RunTimeTicks && formatRuntime(item.RunTimeTicks),
  ].filter(Boolean);
  return escapeHtml(parts.join("  /  "));
}

function episodeNumber(item) {
  if (!item.ParentIndexNumber && !item.IndexNumber) return "";
  return `S${String(item.ParentIndexNumber || 0).padStart(2, "0")} E${String(item.IndexNumber || 0).padStart(2, "0")}`;
}

function formatRuntime(ticks) {
  const minutes = Math.round(ticks / 600000000);
  if (!minutes) return "";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours ? `${hours}h ${mins}m` : `${mins}m`;
}

function trimText(text = "", max = 160) {
  return text.length > max ? `${text.slice(0, max - 1).trim()}...` : text;
}

function normalizeServer(value) {
  const trimmed = value.trim().replace(/\/+$/, "");
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `http://${trimmed}`;
}

function loadSession() {
  try {
    const data = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    return data?.server && data?.token && data?.userId ? data : null;
  } catch {
    return null;
  }
}

function setLoading(value) {
  state.loading = value;
  render();
}

function setError(message) {
  state.error = message;
  render();
  window.clearTimeout(setError.timer);
  setError.timer = window.setTimeout(() => {
    state.error = "";
    render();
  }, 5000);
}

function routeClass(name) {
  return state.route.name === name ? "active" : "";
}

function collectionIcon(view) {
  switch (view.CollectionType) {
    case "movies": return "movies";
    case "tvshows": return "tv";
    case "music": return "music";
    case "homevideos":
    case "photos": return "photos";
    case "playlists": return "playlists";
    case "channels": return "channels";
    default: return "movies";
  }
}

function serverDisplayName(server = "") {
  try {
    const url = new URL(server);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return server || "Server";
  }
}

function initials(value = "") {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "GF";
}

const demoViews = {
  Items: [
    { Id: "demo-movies", Name: "Films", CollectionType: "movies" },
    { Id: "demo-shows", Name: "Series", CollectionType: "tvshows" },
  ],
};

const demoPeople = [
  { Name: "Mara Voss", Type: "Actor" },
  { Name: "Julian Crest", Type: "Actor" },
  { Name: "Inez Ro", Type: "Actor" },
  { Name: "Theo Vale", Type: "Actor" },
  { Name: "Samir Keene", Type: "Actor" },
];

const demoMovies = [
  demoItem("m-aurora", "Aurora Terminal", "Movie", 2026, 126, "A pilot stranded above Neptune uncovers a silent relay station broadcasting memories from a city that never existed.", ["Sci-Fi", "Mystery"], "#16343a", "#5bd0c0", 0.42),
  demoItem("m-cinder", "Cinder Arcade", "Movie", 2024, 104, "Two estranged siblings reopen a seaside game hall and discover its machines are keeping score across generations.", ["Drama", "Adventure"], "#3b2630", "#ff7a68", 0),
  demoItem("m-harbor", "The Harbor Below", "Movie", 2023, 118, "A rescue diver follows a signal into a flooded transit system beneath the old district.", ["Thriller"], "#102a36", "#6ca8ff", 0.68),
  demoItem("m-lantern", "Lanterns at Noon", "Movie", 2025, 97, "In a town where daylight never fades, a cartographer searches for the first night in fifty years.", ["Fantasy", "Romance"], "#26351d", "#d8db72", 0),
  demoItem("m-signal", "Signal Room Seven", "Movie", 2022, 111, "An archivist restoring emergency recordings finds one addressed to her from tomorrow morning.", ["Suspense"], "#1d203b", "#8fa2ff", 0.18),
  demoItem("m-vault", "Glass Vault", "Movie", 2021, 134, "A meticulous art recovery crew plans a quiet impossible job inside a museum built from transparent steel.", ["Crime", "Drama"], "#332531", "#d29b72", 0),
];

const demoSeries = [
  demoItem("s-northstar", "Northstar Kitchen", "Series", 2026, 48, "A night-shift restaurant at the edge of the Arctic Circle becomes a refuge for travelers with unfinished business.", ["Drama", "Comedy"], "#203029", "#79e0a4", 0),
  demoItem("s-afterlight", "Afterlight Bureau", "Series", 2025, 52, "Investigators catalog strange civic miracles in a city that keeps rewriting its own history.", ["Mystery", "Sci-Fi"], "#1d2634", "#7ca7ff", 0),
];

const demoSeasons = {
  "s-northstar": [
    { Id: "season-northstar-1", Name: "Season 1", SeriesId: "s-northstar" },
    { Id: "season-northstar-2", Name: "Season 2", SeriesId: "s-northstar" },
  ],
  "s-afterlight": [
    { Id: "season-afterlight-1", Name: "Season 1", SeriesId: "s-afterlight" },
  ],
};

const demoEpisodes = {
  "season-northstar-1": [
    demoEpisode("e-ns-101", "s-northstar", "Northstar Kitchen", 1, 1, "The Last Table", "A snowstorm strands the dining room with a critic, a locksmith, and a missing reservation.", 0.52),
    demoEpisode("e-ns-102", "s-northstar", "Northstar Kitchen", 1, 2, "Blue Hour Stock", "Mira trades favors for ingredients while the staff learns why the freezer has two locks.", 0),
    demoEpisode("e-ns-103", "s-northstar", "Northstar Kitchen", 1, 3, "Salt Road", "A delivery arrives from a road that closed before anyone on staff was born.", 0),
  ],
  "season-northstar-2": [
    demoEpisode("e-ns-201", "s-northstar", "Northstar Kitchen", 2, 1, "Open Flame", "The first sunny morning in weeks brings old regulars and an impossible breakfast order.", 0.24),
    demoEpisode("e-ns-202", "s-northstar", "Northstar Kitchen", 2, 2, "The Pantry Map", "A hand-drawn map behind the shelves points to a room no one remembers building.", 0),
  ],
  "season-afterlight-1": [
    demoEpisode("e-ab-101", "s-afterlight", "Afterlight Bureau", 1, 1, "Civic Wonder", "The bureau opens a file on a bridge that appears only during rush hour.", 0.61),
    demoEpisode("e-ab-102", "s-afterlight", "Afterlight Bureau", 1, 2, "Office of Rain", "A clerk is promoted to a department that controls weather over four city blocks.", 0),
  ],
};

function demoItem(id, name, type, year, minutes, overview, genres, colorA, colorB, progress) {
  const ticks = minutes * 600000000;
  return {
    Id: id,
    Name: name,
    Type: type,
    Overview: overview,
    Genres: genres,
    ProductionYear: year,
    OfficialRating: "PG-13",
    RunTimeTicks: ticks,
    ImageTags: { Primary: "demo" },
    BackdropImageTags: ["demo"],
    People: demoPeople,
    DemoArt: { colorA, colorB },
    UserData: progress
      ? { PlaybackPositionTicks: Math.round(ticks * progress), Played: false }
      : { Played: false, UnplayedItemCount: type === "Series" ? 6 : 0 },
  };
}

function demoEpisode(id, seriesId, seriesName, season, episode, name, overview, progress) {
  const item = demoItem(id, name, "Episode", 2026, 47, overview, ["Drama"], "#1b2a34", "#5bd0c0", progress);
  return {
    ...item,
    SeriesId: seriesId,
    SeriesName: seriesName,
    ParentIndexNumber: season,
    IndexNumber: episode,
    SeasonName: `Season ${season}`,
  };
}

function demoApi(path, query = {}) {
  const allEpisodes = Object.values(demoEpisodes).flat();
  const allTitles = [...demoMovies, ...demoSeries, ...allEpisodes];
  const cleanPath = path.replace("{userId}", "demo-user");

  if (cleanPath.endsWith("/Views")) return Promise.resolve(demoViews);
  if (cleanPath.includes("/Items/Resume")) {
    return Promise.resolve({ Items: allTitles.filter((item) => item.UserData?.PlaybackPositionTicks).slice(0, query.Limit || 18) });
  }
  if (cleanPath.includes("/Items/Latest")) {
    return Promise.resolve([...demoMovies, ...demoSeries].slice(0, query.Limit || 24));
  }
  if (cleanPath.includes("/Shows/NextUp")) {
    return Promise.resolve({ Items: [demoEpisodes["season-northstar-1"][0], demoEpisodes["season-afterlight-1"][0]] });
  }

  const detailMatch = cleanPath.match(/\/Items\/([^/?]+)$/);
  if (detailMatch) {
    return Promise.resolve(allTitles.find((item) => item.Id === detailMatch[1]) || demoMovies[0]);
  }

  const seasonMatch = cleanPath.match(/\/Shows\/([^/]+)\/Seasons$/);
  if (seasonMatch) {
    return Promise.resolve({ Items: demoSeasons[seasonMatch[1]] || [] });
  }

  const episodeMatch = cleanPath.match(/\/Shows\/([^/]+)\/Episodes$/);
  if (episodeMatch) {
    return Promise.resolve({ Items: demoEpisodes[query.seasonId] || [] });
  }

  if (cleanPath.includes("/Items")) {
    if (query.SearchTerm) {
      const search = String(query.SearchTerm).toLowerCase();
      return Promise.resolve({
        Items: allTitles.filter((item) => [item.Name, item.SeriesName, item.Overview, ...(item.Genres || [])].filter(Boolean).join(" ").toLowerCase().includes(search)),
      });
    }
    if (query.ParentId === "demo-shows") return Promise.resolve({ Items: demoSeries });
    return Promise.resolve({ Items: demoMovies });
  }

  return Promise.resolve({ Items: [] });
}

function demoImageUrl(item, type, width, height) {
  if (!item?.DemoArt) return "";
  const title = escapeSvg(item.Name);
  const subtitle = escapeSvg(type === "Backdrop" ? metaLinePlain(item) : item.Type);
  const label = type === "Backdrop" ? "" : `
      <text x="${width * 0.08}" y="${height * 0.78}" fill="#fff" font-family="Inter, Arial, sans-serif" font-size="${Math.max(24, width * 0.09)}" font-weight="900">${title}</text>
      <text x="${width * 0.08}" y="${height * 0.87}" fill="rgba(255,255,255,.76)" font-family="Inter, Arial, sans-serif" font-size="${Math.max(14, width * 0.032)}" font-weight="700">${subtitle}</text>
  `;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${item.DemoArt.colorA}" offset="0"/>
          <stop stop-color="${item.DemoArt.colorB}" offset="1"/>
        </linearGradient>
        <radialGradient id="r" cx="68%" cy="28%" r="65%">
          <stop stop-color="rgba(255,255,255,.34)" offset="0"/>
          <stop stop-color="rgba(255,255,255,0)" offset="1"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect width="100%" height="100%" fill="url(#r)"/>
      <circle cx="${width * 0.78}" cy="${height * 0.24}" r="${Math.min(width, height) * 0.18}" fill="rgba(255,255,255,.12)"/>
      <path d="M0 ${height * 0.76} C ${width * 0.25} ${height * 0.62}, ${width * 0.55} ${height * 0.92}, ${width} ${height * 0.72} L ${width} ${height} L 0 ${height} Z" fill="rgba(4,9,13,.32)"/>
      ${label}
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function metaLinePlain(item) {
  return [item.ProductionYear, item.Type, item.RunTimeTicks && formatRuntime(item.RunTimeTicks)].filter(Boolean).join(" / ");
}

function escapeSvg(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value = "") {
  return escapeHtml(value);
}
