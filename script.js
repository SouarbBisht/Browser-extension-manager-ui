// Data structure to store the content for each card
const cardsData = [
    {
      title: 'DevLens',
      description: 'Quickly inspect page layouts and visualize element boundaries.',
      imageSrc: '/images/logo-devlens.svg',
    },
    {
      title: 'StyleSpy',
      description: 'Instantly analyze and copy CSS from any webpage element.',
      imageSrc: '/images/logo-style-spy.svg',
    },
    {
      title: 'SpeedBoost',
      description: 'Optimizes browser resource usage to accelerate page loading.',
      imageSrc: '/images/logo-speed-boost.svg',
    },
    {
      title: 'JSONWizard',
      description: 'Formats, validates, and prettifies JSON responses in-browser.',
      imageSrc: '/images/logo-json-wizard.svg',
    },
    {
      title: 'Web Inspector',
      description: 'Inspect and debug HTML and CSS layouts efficiently.',
      imageSrc: '/images/logo-devlens.svg',
    },
    {
      title: 'Web Inspector',
      description: 'Inspect and debug HTML and CSS layouts efficiently.',
      imageSrc: '/images/logo-devlens.svg',
    },
    {
      title: 'Web Inspector',
      description: 'Inspect and debug HTML and CSS layouts efficiently.',
      imageSrc: '/images/logo-devlens.svg',
    },
    {
      title: 'Web Inspector',
      description: 'Inspect and debug HTML and CSS layouts efficiently.',
      imageSrc: '/images/logo-devlens.svg',
    },
    {
      title: 'Web Inspector',
      description: 'Inspect and debug HTML and CSS layouts efficiently.',
      imageSrc: '/images/logo-devlens.svg',
    },
    
  ];
  
  // Function to generate the HTML for each card
  function createCard({ title, description, imageSrc }, index) {
    return `
      <div class="devLens">
        <div class="mainsection">
          <div class="uppercard">
            <div class="image">
              <img src="${imageSrc}" alt="${title}" />
            </div>
            <div class="dev">
              <h2>${title}</h2>
              <p>${description}</p>
            </div>
          </div>
          <div class="btn">
            <button>Remove</button>
            <!-- Each toggle has its own unique ID -->
            <input type="checkbox" id="toggle-${index}" class="toggle-switch" />
            <label for="toggle-${index}" class="toggle-label"></label>
          </div>
        </div>
      </div>
    `;
  }
  
  // Function to render all the cards
  function renderCards() {
    const container = document.getElementById('devLensContainer');
    container.innerHTML = cardsData.map((card, index) => createCard(card, index)).join('');
  }
  
  // Call the renderCards function to populate the page with cards
  window.onload = renderCards;
  
  // Get the button and icon elements
const themeToggle = document.getElementById('theme-toggle');
const icon = document.getElementById('icon');

// Check if dark mode is stored in localStorage (so it's persistent)
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  icon.src = '/images/sun-icon.svg';  // Set the sun icon for dark mode
}

// Toggle the theme when the button is clicked
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Change the icon based on the current theme
  if (document.body.classList.contains('dark-mode')&&document.h1.classList.contains('dark-mode')) {
    icon.src = '/images/sun-icon.svg'; // Set the sun icon when dark mode is active
    localStorage.setItem('theme', 'dark'); // Save the theme in localStorage
  } else {
    icon.src = '/images/moon-icon.svg'; // Set the moon icon when light mode is active
    localStorage.setItem('theme', 'light'); // Save the theme in localStorage
  }
});
