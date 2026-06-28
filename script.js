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

function scaleFeatured() {
  const scaler = document.querySelector('.featured-scaler');
  const product = document.querySelector('.featured-product');
  const scale = window.innerWidth / 1200;
  scaler.style.transform = `scale(${scale})`;
  scaler.style.transformOrigin = 'top left';
  product.style.height = (900 * scale) + 'px';
}

scaleFeatured();
window.addEventListener('resize', scaleFeatured);

//============= Featured Section =============//

// const shoes = [
//     {
//         name: "Velocity Rise 01",
//         price: "₹6,999",
//         mainImage: "images/shoe1-main.png",
//     },

// ]


//======================== Slider =====================//

const shoes=[
{
name:"Velocity Rise 01",
price:"₹6,999",
mainImage:"images/Arctic Flow 02.png",
thumbnails:[
"https://picsum.photos/seed/a1/70/70",
"https://picsum.photos/seed/a2/70/70",
"https://picsum.photos/seed/a3/70/70"
]
},
{
name:"Velocity Rise 02",
price:"₹7,499",
mainImage:"images/Crimson Blaze 03.png",
thumbnails:[
"https://picsum.photos/seed/b1/70/70",
"https://picsum.photos/seed/b2/70/70",
"https://picsum.photos/seed/b3/70/70"
]
},
{
name:"Velocity Rise 03",
price:"₹8,299",
mainImage:"images/Olive Crest 04.png",
thumbnails:[
"https://picsum.photos/seed/c1/70/70",
"https://picsum.photos/seed/c2/70/70",
"https://picsum.photos/seed/c3/70/70"
]
}
];

const shoeName=document.getElementById("shoeName");
const price=document.getElementById("price");
const mainImage=document.getElementById("mainImage");
const thumb1=document.getElementById("thumb1");
const thumb2=document.getElementById("thumb2");
const thumb3=document.getElementById("thumb3");

function changeShoe(index){
    const shoe=shoes[index];

    shoeName.textContent=shoe.name;
    price.textContent=shoe.price;
    mainImage.src=shoe.mainImage;

    thumb1.src=shoe.thumbnails[0];
    thumb2.src=shoe.thumbnails[1];
    thumb3.src=shoe.thumbnails[2];
}

changeShoe(0);
