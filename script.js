const expanded = new Set(); // 메뉴 더보기가 열려있는 식당 이름
const activeFilter = { region: "전체", category: "전체" };

function imagePath(name, type) {
  return `images/${name}_${type}.png`;
}

function repMenu(r) {
  return r.menus[0];
}

function mapLabel(url) {
  if (url.includes("naver")) return "네이버 지도";
  if (url.includes("google") || url.includes("goo.gl")) return "구글 지도";
  return "지도 보기";
}

function openLightbox(src, alt) {
  const img = document.getElementById("lightbox-img");
  img.src = src;
  img.alt = alt;
  document.getElementById("lightbox").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
  document.body.style.overflow = "";
}

function makeZoomable(img) {
  img.classList.add("zoomable");
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
}

function makePhotoCell(name, type, label) {
  const wrap = document.createElement("div");
  const img = document.createElement("img");
  img.src = imagePath(name, type);
  img.alt = `${name} ${label}`;
  img.loading = "lazy";
  img.addEventListener("load", () => img.classList.add("loaded"));
  img.addEventListener("error", () => {
    const fallback = document.createElement("div");
    fallback.className = "photo-fallback";
    fallback.textContent = `${label} 사진 없음`;
    wrap.replaceWith(fallback);
  });
  makeZoomable(img);
  wrap.appendChild(img);
  return wrap;
}

function makeMenuRow(menu) {
  const row = document.createElement("div");
  row.className = "menu-row";

  if (menu.image) {
    const img = document.createElement("img");
    img.className = "menu-thumb";
    img.src = menu.image;
    img.alt = menu.name;
    img.loading = "lazy";
    img.addEventListener("load", () => img.classList.add("loaded"));
    img.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "menu-thumb menu-thumb-fallback";
      fallback.textContent = "사진 없음";
      img.replaceWith(fallback);
    });
    makeZoomable(img);
    row.appendChild(img);
  }

  const info = document.createElement("div");
  info.className = "menu-info";
  info.innerHTML = `
    <p class="menu-name">${menu.name}</p>
    ${menu.desc ? `<p class="menu-desc">${menu.desc}</p>` : ""}
    <p class="menu-price">${menu.price}</p>
  `;

  row.appendChild(info);
  return row;
}

function makePhotoGallery(r) {
  if (!r.photos || r.photos.length === 0) return null;

  const wrap = document.createElement("div");
  wrap.className = "photo-gallery";

  const label = document.createElement("p");
  label.className = "photo-gallery-label";
  label.textContent = "추가 사진";
  wrap.appendChild(label);

  const scroll = document.createElement("div");
  scroll.className = "photo-gallery-scroll";

  r.photos.forEach((src) => {
    const img = document.createElement("img");
    img.className = "photo-gallery-thumb";
    img.src = src;
    img.alt = `${r.name} 방문 사진`;
    img.loading = "lazy";
    img.addEventListener("load", () => img.classList.add("loaded"));
    img.addEventListener("error", () => img.remove());
    makeZoomable(img);
    scroll.appendChild(img);
  });

  wrap.appendChild(scroll);
  return wrap;
}

function getFilteredRestaurants() {
  return restaurants.filter((r) => {
    const regionOk = activeFilter.region === "전체" || r.region === activeFilter.region;
    const categoryOk = activeFilter.category === "전체" || r.category === activeFilter.category;
    return regionOk && categoryOk;
  });
}

function renderList() {
  const list = document.getElementById("restaurant-list");
  list.innerHTML = "";

  const filtered = getFilteredRestaurants();

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "조건에 맞는 식당이 없어요.";
    list.appendChild(empty);
    return;
  }

  filtered.forEach((r) => {
    const card = document.createElement("article");
    card.className = "restaurant-card";

    const photos = document.createElement("div");
    photos.className = "card-photos";
    photos.appendChild(makePhotoCell(r.imageKey, "외관", "외관"));
    photos.appendChild(makePhotoCell(r.imageKey, "내부사진", "내부"));
    card.appendChild(photos);

    const body = document.createElement("div");
    body.className = "card-body";

    const topRow = document.createElement("div");
    topRow.className = "card-top-row";
    topRow.innerHTML = `
      <h2 class="card-title">${r.name}</h2>
      <div class="card-tags">
        <span class="tag">${r.region}</span>
        <span class="tag">${r.category}</span>
      </div>
    `;
    body.appendChild(topRow);

    const menuSection = document.createElement("div");
    menuSection.className = "menu-section";
    menuSection.appendChild(makeMenuRow(repMenu(r)));

    const restMenus = r.menus.slice(1);
    if (restMenus.length > 0) {
      const isOpen = expanded.has(r.name);
      const moreList = document.createElement("div");
      moreList.className = "menu-more-list";
      moreList.hidden = !isOpen;
      restMenus.forEach((m) => moreList.appendChild(makeMenuRow(m)));

      const moreBtn = document.createElement("button");
      moreBtn.type = "button";
      moreBtn.className = "menu-more-toggle";
      moreBtn.textContent = isOpen ? "메뉴 접기" : `메뉴 더보기 (${restMenus.length})`;
      moreBtn.addEventListener("click", () => {
        if (expanded.has(r.name)) {
          expanded.delete(r.name);
        } else {
          expanded.add(r.name);
        }
        renderList();
      });

      menuSection.appendChild(moreList);
      menuSection.appendChild(moreBtn);
    }

    body.appendChild(menuSection);

    const gallery = makePhotoGallery(r);
    if (gallery) body.appendChild(gallery);

    const actions = document.createElement("div");
    actions.className = "card-actions";
    actions.innerHTML = `
      <a class="map-link" href="${r.mapUrl}" target="_blank" rel="noopener">${mapLabel(r.mapUrl)}</a>
    `;
    body.appendChild(actions);

    card.appendChild(body);
    list.appendChild(card);
  });
}

function renderFilterPills(containerId, key) {
  const container = document.getElementById(containerId);
  const values = ["전체", ...new Set(restaurants.map((r) => r[key]))];

  container.innerHTML = "";
  values.forEach((value) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-pill" + (activeFilter[key] === value ? " active" : "");
    btn.textContent = value;
    btn.addEventListener("click", () => {
      activeFilter[key] = value;
      renderFilterPills(containerId, key);
      renderList();
    });
    container.appendChild(btn);
  });
}

function renderFilters() {
  renderFilterPills("filter-region", "region");
  renderFilterPills("filter-category", "category");
}

function openSidebar() {
  document.getElementById("sidebar").hidden = false;
  document.getElementById("sidebar-backdrop").hidden = false;
}

function closeSidebar() {
  document.getElementById("sidebar").hidden = true;
  document.getElementById("sidebar-backdrop").hidden = true;
}

document.getElementById("filter-open").addEventListener("click", openSidebar);
document.getElementById("filter-close").addEventListener("click", closeSidebar);
document.getElementById("sidebar-backdrop").addEventListener("click", closeSidebar);
document.getElementById("filter-reset").addEventListener("click", () => {
  activeFilter.region = "전체";
  activeFilter.category = "전체";
  renderFilters();
  renderList();
});

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

renderFilters();
renderList();
