// Velora — Responsive Search
// Paste this entire <script> block just before </body> in index.html

const searchBox   = document.querySelector('.search-box');
const searchIcon  = document.querySelector('.search-box i');
const searchInput = document.querySelector('.search-box input');

// The breakpoint where the input gets hidden (must match CSS media query)
const MOBILE_BREAKPOINT = 650;

function isSmallScreen() {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

function openSearch() {
  searchBox.classList.add('open');
  searchInput.focus();
}

function closeSearch() {
  searchBox.classList.remove('open');
  searchInput.blur();
}

searchIcon.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent bubbling to document listener

  if (isSmallScreen()) {
    // Small screen: toggle the floating search box
    if (searchBox.classList.contains('open')) {
      closeSearch();
    } else {
      openSearch();
    }
  } else {
    // Large screen: search bar is always visible — just focus the input
    searchInput.focus();
  }
});

// Close when clicking anywhere outside the search box
document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target)) {
    closeSearch();
  }
});

// Close on Enter (after user finishes typing)
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    // TODO: wire up actual search logic here if needed
    closeSearch();
  }
});

// If user resizes from small → large while open, clean up the open state
window.addEventListener('resize', () => {
  if (!isSmallScreen() && searchBox.classList.contains('open')) {
    closeSearch();
  }
});