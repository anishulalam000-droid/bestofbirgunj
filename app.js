const STORAGE_KEY = "bestofbirgunj:listings";

const defaultListings = [
  {
    id: "biryani-darbar",
    name: "Biryani Darbar",
    category: "Restaurants",
    rating: 4.8,
    shortDescription: "Crowd-favorite biryani spot known for rich spice and late evening buzz.",
    description:
      "Biryani Darbar is one of Birgunj's most loved food stops for aromatic chicken biryani, tandoori platters, and family dinner service. The place is popular with both locals and visitors looking for a reliable restaurant near the city center.",
    location: "Adarsh Nagar, Birgunj",
    contact: "+977-9801234501",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d29a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563379091339-03246963d29a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true,
    reviews: [
      { author: "Aarav", date: "March 2026", text: "Perfect for family dinners and the biryani always tastes fresh." },
      { author: "Sita", date: "February 2026", text: "Fast service, great portions, and very easy to recommend." },
      { author: "Imran", date: "January 2026", text: "One of the safest picks in town when friends visit Birgunj." }
    ]
  },
  {
    id: "metro-fashion-house",
    name: "Metro Fashion House",
    category: "Clothing Shops",
    rating: 4.6,
    shortDescription: "Trendy menswear and womenswear with festive and casual collections.",
    description:
      "Metro Fashion House offers curated apparel for daily wear, wedding events, and seasonal shopping. Its central location and broad size range make it a frequent stop for college students and families.",
    location: "Ghantaghar Road, Birgunj",
    contact: "+977-9801234502",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false,
    reviews: [
      { author: "Neha", date: "March 2026", text: "A neat store with helpful staff and surprisingly modern options." },
      { author: "Raj", date: "February 2026", text: "Good festive wear collection and fair pricing for the quality." }
    ]
  },
  {
    id: "digital-world",
    name: "Digital World Electronics",
    category: "Electronics",
    rating: 4.7,
    shortDescription: "Reliable gadgets, accessories, and repair support for everyday tech needs.",
    description:
      "Digital World Electronics is a dependable choice for smartphones, laptops, accessories, and quick repair advice. Customers like the transparent pricing and after-sales support for common devices.",
    location: "Link Road, Birgunj",
    contact: "+977-9801234503",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true,
    reviews: [
      { author: "Pawan", date: "March 2026", text: "Helpful for accessories and the team explains options clearly." },
      { author: "Ritika", date: "January 2026", text: "I found a good laptop bag and charging setup in one visit." }
    ]
  },
  {
    id: "ghadiarwa-park",
    name: "Ghadiarwa Pokhari Park",
    category: "Tourist Places",
    rating: 4.5,
    shortDescription: "A peaceful local landmark for evening walks, photos, and relaxed city views.",
    description:
      "Ghadiarwa Pokhari Park is one of Birgunj's recognizable public spaces, drawing families, walkers, and casual visitors. It is especially lively in the evening with its open atmosphere and local street snacks nearby.",
    location: "Ghadiarwa, Birgunj",
    contact: "Public attraction",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true,
    reviews: [
      { author: "Mina", date: "February 2026", text: "A nice place for photos and a calm stop during a busy day." },
      { author: "Deepak", date: "January 2026", text: "Simple, local, and best enjoyed around sunset." }
    ]
  },
  {
    id: "bean-boulevard",
    name: "Bean Boulevard Cafe",
    category: "Cafes",
    rating: 4.9,
    shortDescription: "Modern cafe for coffee, desserts, remote work, and casual meetups.",
    description:
      "Bean Boulevard Cafe blends warm interiors, specialty coffee, and a startup-style atmosphere that appeals to students and professionals alike. It is a standout option for relaxed conversations and laptop sessions in Birgunj.",
    location: "Murli, Birgunj",
    contact: "+977-9801234504",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true,
    reviews: [
      { author: "Kriti", date: "March 2026", text: "Best cafe vibe in town for work and coffee dates." },
      { author: "Anish", date: "February 2026", text: "Loved the dessert counter and the bright interior." },
      { author: "Sanjay", date: "January 2026", text: "Feels fresh and polished compared with the usual options." }
    ]
  },
  {
    id: "taj-service-center",
    name: "Taj Service Center",
    category: "Electronics",
    rating: 4.4,
    shortDescription: "Quick device repair and essential accessories with walk-in support.",
    description:
      "Taj Service Center handles phone repairs, screen replacements, chargers, and basic diagnostics. It is valued by customers who want fast support without leaving Birgunj.",
    location: "Pratima Chowk, Birgunj",
    contact: "+977-9801234505",
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false,
    reviews: [
      { author: "Niraj", date: "March 2026", text: "The repair estimate was fair and the turnaround was quick." }
    ]
  }
];

const app = document.getElementById("app");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

const state = {
  search: "",
  filter: "All",
  editingId: null,
  uploadedImage: ""
};

function loadListings() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultListings));
    return [...defaultListings];
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultListings));
    return [...defaultListings];
  }
}

function saveListings(listings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(listings));
}

function getListings() {
  return loadListings();
}

function setListings(nextListings) {
  saveListings(nextListings);
}

function getRoute() {
  const hash = window.location.hash || "#home";
  const cleaned = hash.slice(1);
  const [page, param] = cleaned.split("/");
  return { page: page || "home", param };
}

function getCategories() {
  return ["All", "Restaurants", "Clothing Shops", "Electronics", "Tourist Places", "Cafes"];
}

function starString(rating) {
  const filled = Math.round(rating);
  return "★".repeat(filled) + "☆".repeat(5 - filled);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderHome() {
  const listings = getListings();
  const featured = listings.filter((listing) => listing.featured).slice(0, 3);

  app.innerHTML = `
    <section class="page-section hero">
      <div class="container hero-grid">
        <div class="hero-copy fade-up">
          <span class="eyebrow">Local discovery platform for Birgunj, Nepal</span>
          <h1>Discover the Best of Birgunj</h1>
          <p>
            Find standout restaurants, fashion stores, electronics hubs, tourist places, and
            cozy cafes curated for locals and travelers who want the city's best in one smooth experience.
          </p>
          <form class="hero-search" id="heroSearchForm">
            <input
              id="heroSearchInput"
              type="search"
              placeholder="Search shops, food, places..."
              value="${escapeHtml(state.search)}"
              aria-label="Search shops, food, places"
            >
            <button type="submit">Search Now</button>
          </form>
          <div class="hero-tags">
            <button class="chip" data-jump="Restaurants" type="button">Top Restaurants</button>
            <button class="chip" data-jump="Cafes" type="button">Coffee Spots</button>
            <button class="chip" data-jump="Tourist Places" type="button">Places to Visit</button>
          </div>
        </div>

        <div class="hero-card fade-up">
          <img src="logo.jpeg" alt="BestOfBirgunj brand logo">
          <div class="hero-badges">
            <div>
              <strong>${listings.length}+</strong>
              <span>Local listings</span>
            </div>
            <div>
              <strong>4.7</strong>
              <span>Average rating</span>
            </div>
            <div>
              <strong>5</strong>
              <span>Core categories</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="categories">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="eyebrow">Browse by category</p>
            <h2>Everything people look for in Birgunj</h2>
          </div>
          <a class="secondary-btn" href="#listings">View all listings</a>
        </div>

        <div class="category-grid">
          ${renderCategoryCard("Restaurants", "🍽", "orange", "From biryani spots to family dining favorites.")}
          ${renderCategoryCard("Clothing Shops", "🛍", "blue", "Popular fashion stores for casual and festive wear.")}
          ${renderCategoryCard("Electronics", "💻", "green", "Trusted device shops, accessories, and repairs.")}
          ${renderCategoryCard("Tourist Places", "📍", "red", "City landmarks and leisure spots worth visiting.")}
          ${renderCategoryCard("Cafes", "☕", "gold", "Modern coffee shops for hangouts and work sessions.")}
        </div>

        <div class="stats-strip">
          <div class="stat-item">
            <strong>Restaurants</strong>
            <span>Food gems for locals and travelers</span>
          </div>
          <div class="stat-item">
            <strong>Shops</strong>
            <span>Discover trusted clothing and retail spots</span>
          </div>
          <div class="stat-item">
            <strong>Places</strong>
            <span>Find city attractions and evening hangouts</span>
          </div>
          <div class="stat-item">
            <strong>Services</strong>
            <span>Explore practical everyday businesses nearby</span>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="featured">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="eyebrow">Featured listings</p>
            <h2>Top-rated places people keep recommending</h2>
          </div>
        </div>
        <div class="listing-grid">
          ${featured.map(renderListingCard).join("")}
        </div>

        <div class="featured-banner">
          <div>
            <p class="eyebrow">Why locals love it</p>
            <h2>Startup-style discovery, built for one city</h2>
            <p>
              BestOfBirgunj combines the trust of review platforms with the simplicity of a local guide,
              helping users find better places faster.
            </p>
          </div>
          <a class="primary-btn" href="#admin">Manage listings</a>
        </div>
      </div>
    </section>
  `;

  bindHomeEvents();
}

function renderCategoryCard(title, icon, color, text) {
  return `
    <a href="#listings" class="category-card ${color}" data-category="${escapeHtml(title)}">
      <span>${icon}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </a>
  `;
}

function renderListingsPage() {
  const filtered = filterListings(getListings(), state.search, state.filter);

  app.innerHTML = `
    <section class="page-section">
      <div class="container listing-shell fade-up">
        <div class="page-header">
          <div>
            <p class="eyebrow">Explore local gems</p>
            <h1>Birgunj Listings</h1>
            <p>Browse food, shopping, cafes, electronics, and places with clean filters and quick details.</p>
          </div>
        </div>

        <div class="toolbar">
          <div class="filter-bar">
            <input
              id="listingSearch"
              type="search"
              placeholder="Search shops, food, places..."
              value="${escapeHtml(state.search)}"
              aria-label="Search listings"
            >
            <select id="categoryFilter" class="filter-select" aria-label="Filter by category">
              ${getCategories()
                .map(
                  (category) => `
                    <option value="${escapeHtml(category)}" ${state.filter === category ? "selected" : ""}>
                      ${escapeHtml(category)}
                    </option>
                  `
                )
                .join("")}
            </select>
          </div>
          <a class="secondary-btn" href="#admin">Add new listing</a>
        </div>

        ${
          filtered.length
            ? `<div class="listing-grid">${filtered.map(renderListingCard).join("")}</div>`
            : `
              <div class="empty-state">
                <h3>No matching places found</h3>
                <p>Try a different search or category filter to explore more of Birgunj.</p>
              </div>
            `
        }
      </div>
    </section>
  `;

  bindListingsEvents();
}

function renderListingCard(listing) {
  return `
    <article class="listing-card fade-up">
      <button class="listing-open" data-id="${escapeHtml(listing.id)}" type="button">
        <div class="listing-media">
          <img src="${escapeHtml(listing.image)}" alt="${escapeHtml(listing.name)}">
          <span class="listing-tag">${escapeHtml(listing.category)}</span>
        </div>
        <div class="listing-content">
          <div class="listing-topline">
            <div>
              <h3>${escapeHtml(listing.name)}</h3>
              <p class="listing-meta">${escapeHtml(listing.shortDescription)}</p>
            </div>
            <span class="rating"><span class="stars">${starString(listing.rating)}</span> ${listing.rating.toFixed(1)}</span>
          </div>
          <div class="listing-footer">
            <span>${escapeHtml(listing.location)}</span>
            <span>View details</span>
          </div>
        </div>
      </button>
    </article>
  `;
}

function renderDetailPage(listingId) {
  const listing = getListings().find((item) => item.id === listingId);

  if (!listing) {
    app.innerHTML = `
      <section class="page-section">
        <div class="container empty-state fade-up">
          <h2>Listing not found</h2>
          <p>The place you tried to open does not exist anymore.</p>
          <a class="primary-btn" href="#listings">Back to listings</a>
        </div>
      </section>
    `;
    return;
  }

  const gallery = listing.gallery?.length ? listing.gallery : [listing.image, listing.image, listing.image];

  app.innerHTML = `
    <section class="page-section">
      <div class="container details-shell fade-up">
        <div class="details-gallery">
          <img src="${escapeHtml(gallery[0])}" alt="${escapeHtml(listing.name)} main image">
          <div class="gallery-stack">
            <img src="${escapeHtml(gallery[1] || gallery[0])}" alt="${escapeHtml(listing.name)} gallery image">
            <img src="${escapeHtml(gallery[2] || gallery[0])}" alt="${escapeHtml(listing.name)} gallery image">
          </div>
        </div>

        <div class="details-main">
          <div>
            <div class="pill-row">
              <span class="pill">${escapeHtml(listing.category)}</span>
              <span class="pill">${starString(listing.rating)} ${listing.rating.toFixed(1)}</span>
            </div>
            <h1>${escapeHtml(listing.name)}</h1>
            <p>${escapeHtml(listing.description)}</p>
          </div>

          <aside class="detail-card">
            <h3>Place details</h3>
            <div class="detail-meta">
              <div><strong>Location:</strong> ${escapeHtml(listing.location)}</div>
              <div><strong>Contact:</strong> ${escapeHtml(listing.contact)}</div>
              <div><strong>Category:</strong> ${escapeHtml(listing.category)}</div>
              <div><strong>Rating:</strong> ${listing.rating.toFixed(1)} / 5</div>
            </div>
            <div class="admin-actions" style="margin-top:18px;">
              <a class="primary-btn" href="#listings">Explore more</a>
              <a class="secondary-btn" href="#admin">Edit in admin</a>
            </div>
          </aside>
        </div>

        <section>
          <div class="section-header">
            <div>
              <p class="eyebrow">What people are saying</p>
              <h2>Reviews</h2>
            </div>
          </div>
          <div class="reviews-grid">
            ${listing.reviews.map(renderReviewCard).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderReviewCard(review) {
  return `
    <article class="review-card">
      <h4>${escapeHtml(review.author)}</h4>
      <small>${escapeHtml(review.date)}</small>
      <p>${escapeHtml(review.text)}</p>
    </article>
  `;
}

function renderAdminPage() {
  const listings = getListings();
  const editingListing = listings.find((listing) => listing.id === state.editingId);

  app.innerHTML = `
    <section class="page-section">
      <div class="container admin-shell fade-up">
        <div class="page-header">
          <div>
            <p class="eyebrow">Basic admin panel</p>
            <h1>Manage Birgunj listings</h1>
            <p>Add, edit, delete, and upload images for local businesses and places.</p>
          </div>
        </div>

        <div class="admin-layout">
          <div class="admin-form">
            <h3>${editingListing ? "Edit listing" : "Add new listing"}</h3>
            <form id="adminForm" class="form-grid">
              <input type="hidden" id="listingId" name="listingId" value="${escapeHtml(editingListing?.id || "")}">
              <input id="name" type="text" placeholder="Place name" value="${escapeHtml(editingListing?.name || "")}" required>
              <select id="category" required>
                <option value="">Choose category</option>
                ${getCategories()
                  .filter((category) => category !== "All")
                  .map(
                    (category) => `
                      <option value="${escapeHtml(category)}" ${editingListing?.category === category ? "selected" : ""}>
                        ${escapeHtml(category)}
                      </option>
                    `
                  )
                  .join("")}
              </select>
              <input id="rating" type="number" placeholder="Rating (0-5)" min="0" max="5" step="0.1" value="${editingListing?.rating || ""}" required>
              <input id="location" type="text" placeholder="Location" value="${escapeHtml(editingListing?.location || "")}" required>
              <input id="contact" type="text" placeholder="Contact info" value="${escapeHtml(editingListing?.contact || "")}" required>
              <input id="image" type="url" placeholder="Image URL (optional if uploading)" value="${escapeHtml(editingListing?.image || "")}">
              <div class="file-upload">
                <label for="imageUpload">Upload image from device</label>
                <input id="imageUpload" type="file" accept="image/*">
              </div>
              <input id="featured" type="text" placeholder="Featured? yes or no" value="${editingListing?.featured ? "yes" : "no"}">
              <textarea id="shortDescription" placeholder="Short description" required>${escapeHtml(editingListing?.shortDescription || "")}</textarea>
              <textarea id="description" placeholder="Full description" required>${escapeHtml(editingListing?.description || "")}</textarea>
              <div class="admin-actions">
                <button type="submit">${editingListing ? "Update listing" : "Add listing"}</button>
                <button type="button" id="resetForm">Clear form</button>
              </div>
            </form>
          </div>

          <div>
            <div class="section-header">
              <div>
                <p class="eyebrow">Current listings</p>
                <h2>All entries</h2>
              </div>
            </div>
            <div class="admin-listings">
              ${listings.map(renderAdminCard).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  bindAdminEvents();
}

function renderAdminCard(listing) {
  return `
    <article class="admin-card">
      <div class="admin-card-top">
        <div>
          <h4>${escapeHtml(listing.name)}</h4>
          <small>${escapeHtml(listing.category)} • ${escapeHtml(listing.location)}</small>
        </div>
        <strong>${listing.rating.toFixed(1)}</strong>
      </div>
      <p class="listing-meta">${escapeHtml(listing.shortDescription)}</p>
      <div class="admin-card-actions">
        <button class="edit-btn" data-id="${escapeHtml(listing.id)}" type="button">Edit</button>
        <button class="delete-btn" data-id="${escapeHtml(listing.id)}" type="button">Delete</button>
        <button class="secondary-btn listing-preview-btn" data-id="${escapeHtml(listing.id)}" type="button">Preview</button>
      </div>
    </article>
  `;
}

function filterListings(listings, search, filter) {
  return listings.filter((listing) => {
    const matchesFilter = filter === "All" || listing.category === filter;
    const haystack = `${listing.name} ${listing.shortDescription} ${listing.location} ${listing.category}`.toLowerCase();
    const matchesSearch = !search.trim() || haystack.includes(search.trim().toLowerCase());
    return matchesFilter && matchesSearch;
  });
}

function bindHomeEvents() {
  const searchForm = document.getElementById("heroSearchForm");
  const searchInput = document.getElementById("heroSearchInput");

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.search = searchInput.value.trim();
    state.filter = "All";
    window.location.hash = "#listings";
  });

  document.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.jump || "All";
      window.location.hash = "#listings";
    });
  });

  document.querySelectorAll(".category-card").forEach((link) => {
    link.addEventListener("click", () => {
      state.filter = link.dataset.category || "All";
    });
  });

  bindListingOpenButtons();
}

function bindListingsEvents() {
  const searchInput = document.getElementById("listingSearch");
  const filterSelect = document.getElementById("categoryFilter");

  searchInput?.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderListingsPage();
  });

  filterSelect?.addEventListener("change", (event) => {
    state.filter = event.target.value;
    renderListingsPage();
  });

  bindListingOpenButtons();
}

function bindListingOpenButtons() {
  document.querySelectorAll(".listing-open, .listing-preview-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const { id } = button.dataset;
      window.location.hash = `#detail/${id}`;
    });
  });
}

function bindAdminEvents() {
  const form = document.getElementById("adminForm");
  const uploadInput = document.getElementById("imageUpload");
  const resetButton = document.getElementById("resetForm");

  uploadInput?.addEventListener("change", (event) => {
    const [file] = event.target.files || [];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      state.uploadedImage = reader.result;
      const imageInput = document.getElementById("image");

      if (imageInput) {
        imageInput.value = "";
      }
    };
    reader.readAsDataURL(file);
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const existingId = document.getElementById("listingId").value;
    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value;
    const rating = Number(document.getElementById("rating").value);
    const location = document.getElementById("location").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const image = document.getElementById("image").value.trim();
    const shortDescription = document.getElementById("shortDescription").value.trim();
    const description = document.getElementById("description").value.trim();
    const featuredValue = document.getElementById("featured").value.trim().toLowerCase();

    if (!name || !category || Number.isNaN(rating) || !location || !contact || !shortDescription || !description) {
      window.alert("Please fill in all required fields.");
      return;
    }

    const listings = getListings();
    const safeId = existingId || slugify(name);
    const previousListing = listings.find((listing) => listing.id === safeId);
    const resolvedImage = state.uploadedImage || image || previousListing?.image || "logo.jpeg";

    const nextListing = {
      id: safeId,
      name,
      category,
      rating: Math.max(0, Math.min(5, rating)),
      location,
      contact,
      image: resolvedImage,
      gallery: [resolvedImage, resolvedImage, resolvedImage],
      shortDescription,
      description,
      featured: featuredValue === "yes" || featuredValue === "true",
      reviews: previousListing?.reviews || [
        { author: "Local Guide", date: "April 2026", text: "A newly added listing on BestOfBirgunj." }
      ]
    };

    const nextListings = previousListing
      ? listings.map((listing) => (listing.id === safeId ? nextListing : listing))
      : [nextListing, ...listings];

    setListings(nextListings);
    state.editingId = null;
    state.uploadedImage = "";
    renderAdminPage();
  });

  resetButton?.addEventListener("click", () => {
    state.editingId = null;
    state.uploadedImage = "";
    renderAdminPage();
  });

  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.editingId = button.dataset.id;
      state.uploadedImage = "";
      renderAdminPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const { id } = button.dataset;
      const nextListings = getListings().filter((listing) => listing.id !== id);
      setListings(nextListings);

      if (state.editingId === id) {
        state.editingId = null;
      }

      renderAdminPage();
    });
  });

  bindListingOpenButtons();
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderRoute() {
  const route = getRoute();

  switch (route.page) {
    case "listings":
      renderListingsPage();
      break;
    case "detail":
      renderDetailPage(route.param);
      break;
    case "admin":
      renderAdminPage();
      break;
    case "home":
    default:
      renderHome();
      break;
  }

  navLinks.classList.remove("open");

  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
  }
}

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
