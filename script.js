// Hotel Data
const hotelsData = [
  {
    id: 1,
    name: "Serena Safari Lodge",
    city: "Nairobi",
    country: "Kenya",
    price: 180,
    rating: 5,
    image: "https://picsum.photos/seed/hotel1/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Luxury safari lodge with stunning views of the savanna"
  },
  {
    id: 2,
    name: "Cape Grace Hotel",
    city: "Cape Town",
    country: "South Africa",
    price: 220,
    rating: 5,
    image: "https://picsum.photos/seed/hotel2/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Elegant waterfront hotel in the Victoria & Alfred Waterfront"
  },
  {
    id: 3,
    name: "Pyramids View Inn",
    city: "Giza",
    country: "Egypt",
    price: 95,
    rating: 4,
    image: "https://picsum.photos/seed/hotel3/400/300",
    amenities: ["wifi", "restaurant", "parking"],
    description: "Comfortable hotel with spectacular pyramid views"
  },
  {
    id: 4,
    name: "Riad Marrakech",
    city: "Marrakech",
    country: "Morocco",
    price: 120,
    rating: 4,
    image: "https://picsum.photos/seed/hotel4/400/300",
    amenities: ["wifi", "pool", "restaurant"],
    description: "Traditional Moroccan riad in the heart of the medina"
  },
  {
    id: 5,
    name: "Zanzibar Beach Resort",
    city: "Zanzibar",
    country: "Tanzania",
    price: 160,
    rating: 5,
    image: "https://picsum.photos/seed/hotel5/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Beachfront paradise with crystal clear waters"
  },
  {
    id: 6,
    name: "Lagos Continental",
    city: "Lagos",
    country: "Nigeria",
    price: 110,
    rating: 4,
    image: "https://picsum.photos/seed/hotel6/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Modern business hotel in Victoria Island"
  },
  {
    id: 7,
    name: "Accra Beach Hotel",
    city: "Accra",
    country: "Ghana",
    price: 85,
    rating: 4,
    image: "https://picsum.photos/seed/hotel7/400/300",
    amenities: ["wifi", "pool", "restaurant"],
    description: "Coastal hotel with vibrant local culture"
  },
  {
    id: 8,
    name: "Kigali Serena Hotel",
    city: "Kigali",
    country: "Rwanda",
    price: 140,
    rating: 5,
    image: "https://picsum.photos/seed/hotel8/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Premium hotel in Rwanda's capital with exceptional service"
  },
  {
    id: 9,
    name: "Budget Inn Nairobi",
    city: "Nairobi",
    country: "Kenya",
    price: 35,
    rating: 3,
    image: "https://picsum.photos/seed/hotel9/400/300",
    amenities: ["wifi", "parking"],
    description: "Affordable accommodation for budget travelers"
  },
  {
    id: 10,
    name: "Addis Regency",
    city: "Addis Ababa",
    country: "Ethiopia",
    price: 90,
    rating: 4,
    image: "https://picsum.photos/seed/hotel10/400/300",
    amenities: ["wifi", "restaurant", "parking"],
    description: "Comfortable stay in the heart of Ethiopia's capital"
  },
  {
    id: 11,
    name: "Dakar Beach Resort",
    city: "Dakar",
    country: "Senegal",
    price: 115,
    rating: 4,
    image: "https://picsum.photos/seed/hotel11/400/300",
    amenities: ["wifi", "pool", "restaurant"],
    description: "Oceanfront resort with beautiful Atlantic views"
  },
  {
    id: 12,
    name: "The Table Bay Hotel",
    city: "Cape Town",
    country: "South Africa",
    price: 280,
    rating: 5,
    image: "https://picsum.photos/seed/hotel12/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Five-star luxury overlooking Table Mountain"
  },
  {
    id: 13,
    name: "Casablanca Inn",
    city: "Casablanca",
    country: "Morocco",
    price: 75,
    rating: 3,
    image: "https://picsum.photos/seed/hotel13/400/300",
    amenities: ["wifi", "restaurant"],
    description: "Convenient city center location at great value"
  },
  {
    id: 14,
    name: "Luxor Palace",
    city: "Luxor",
    country: "Egypt",
    price: 130,
    rating: 4,
    image: "https://picsum.photos/seed/hotel14/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Historic hotel near the Valley of the Kings"
  },
  {
    id: 15,
    name: "Mombasa Palm Resort",
    city: "Mombasa",
    country: "Kenya",
    price: 145,
    rating: 4,
    image: "https://picsum.photos/seed/hotel15/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Tropical beachfront resort on the Indian Ocean"
  },
  {
    id: 16,
    name: "Abuja Grand Hotel",
    city: "Abuja",
    country: "Nigeria",
    price: 125,
    rating: 4,
    image: "https://picsum.photos/seed/hotel16/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Upscale accommodations in Nigeria's capital"
  },
  {
    id: 17,
    name: "Kumasi Garden Hotel",
    city: "Kumasi",
    country: "Ghana",
    price: 65,
    rating: 3,
    image: "https://picsum.photos/seed/hotel17/400/300",
    amenities: ["wifi", "restaurant"],
    description: "Charming garden setting in Ghana's cultural heart"
  },
  {
    id: 18,
    name: "Arusha Safari Lodge",
    city: "Arusha",
    country: "Tanzania",
    price: 155,
    rating: 5,
    image: "https://picsum.photos/seed/hotel18/400/300",
    amenities: ["wifi", "pool", "restaurant", "parking"],
    description: "Gateway to Serengeti with luxury amenities"
  }
];

// State
let filteredHotels = [...hotelsData];

// DOM Elements
const hotelsGrid = document.getElementById('hotelsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const searchLocation = document.getElementById('searchLocation');
const countryFilter = document.getElementById('countryFilter');
const priceFilter = document.getElementById('priceFilter');
const ratingFilter = document.getElementById('ratingFilter');
const amenitiesFilter = document.getElementById('amenitiesFilter');
const searchBtn = document.getElementById('searchBtn');
const clearFilters = document.getElementById('clearFilters');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Initialize
renderHotels(hotelsData);

// Event Listeners
searchBtn.addEventListener('click', applyFilters);
searchLocation.addEventListener('input', applyFilters);
countryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);
ratingFilter.addEventListener('change', applyFilters);
amenitiesFilter.addEventListener('change', applyFilters);
clearFilters.addEventListener('click', resetFilters);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Functions
function renderHotels(hotels) {
  filteredHotels = hotels;
  
  if (hotels.length === 0) {
    hotelsGrid.classList.add('hidden');
    noResults.classList.remove('hidden');
    resultsCount.textContent = '0';
    return;
  }

  hotelsGrid.classList.remove('hidden');
  noResults.classList.add('hidden');
  resultsCount.textContent = hotels.length;

  hotelsGrid.innerHTML = hotels.map(hotel => `
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div class="relative">
        <img src="${hotel.image}" alt="${hotel.name}" class="w-full h-48 object-cover">
        <div class="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md">
          <span class="text-blue-600 font-bold">$${hotel.price}</span>
          <span class="text-gray-600 text-sm">/night</span>
        </div>
      </div>
      <div class="p-4">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold text-gray-900">${hotel.name}</h3>
          <div class="flex items-center">
            ${renderStars(hotel.rating)}
          </div>
        </div>
        <div class="flex items-center text-gray-600 text-sm mb-3">
          <i class="fas fa-map-marker-alt mr-1"></i>
          <span>${hotel.city}, ${hotel.country}</span>
        </div>
        <p class="text-gray-600 text-sm mb-4">${hotel.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${renderAmenities(hotel.amenities)}
        </div>
        <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
          View Details
        </button>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  return Array(5).fill(0).map((_, i) => 
    `<i class="fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-300'} text-sm"></i>`
  ).join('');
}

function renderAmenities(amenities) {
  const amenityIcons = {
    wifi: '<i class="fas fa-wifi"></i> WiFi',
    pool: '<i class="fas fa-swimming-pool"></i> Pool',
    parking: '<i class="fas fa-parking"></i> Parking',
    restaurant: '<i class="fas fa-utensils"></i> Restaurant'
  };

  return amenities.slice(0, 3).map(amenity => 
    `<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">${amenityIcons[amenity]}</span>`
  ).join('');
}

function applyFilters() {
  let filtered = [...hotelsData];

  // Search location filter
  const searchTerm = searchLocation.value.toLowerCase().trim();
  if (searchTerm) {
    filtered = filtered.filter(hotel => 
      hotel.city.toLowerCase().includes(searchTerm) ||
      hotel.country.toLowerCase().includes(searchTerm) ||
      hotel.name.toLowerCase().includes(searchTerm)
    );
  }

  // Country filter
  const country = countryFilter.value;
  if (country) {
    filtered = filtered.filter(hotel => hotel.country === country);
  }

  // Price filter
  const priceRange = priceFilter.value;
  if (priceRange) {
    filtered = filtered.filter(hotel => {
      if (priceRange === 'budget') return hotel.price < 50;
      if (priceRange === 'mid') return hotel.price >= 50 && hotel.price <= 150;
      if (priceRange === 'luxury') return hotel.price > 150;
      return true;
    });
  }

  // Rating filter
  const minRating = ratingFilter.value;
  if (minRating) {
    filtered = filtered.filter(hotel => hotel.rating >= parseInt(minRating));
  }

  // Amenities filter
  const amenity = amenitiesFilter.value;
  if (amenity) {
    filtered = filtered.filter(hotel => hotel.amenities.includes(amenity));
  }

  renderHotels(filtered);
}

function resetFilters() {
  searchLocation.value = '';
  countryFilter.value = '';
  priceFilter.value = '';
  ratingFilter.value = '';
  amenitiesFilter.value = '';
  renderHotels(hotelsData);
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add('hidden');
  }
});