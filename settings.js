function onSaveTheme() {
    const selectedOption = document.querySelector("#theme-select");
    window.localStorage.setItem("theme", selectedOption.value);
    applyTheme(selectedOption.value);
}
function applyTheme(theme) {
    const element = document.querySelector("body");
    const themes = ["oceanic", "galaxy", "gaming", "cyberpunk", "techno", "hacker", "midnight", "crimson"]; // Add "default" to the list
    // Remove all theme classes except for 'default'
    themes.forEach(themeClass => {
        if (themeClass !== theme) {
            element.classList.remove(themeClass);
        }
    });
    if (theme !== "default") {
        document.body.style.backgroundImage = 'none';
        element.classList.add(theme); // Only add the theme class if it's not already present
    } else {
        document.body.style.backgroundImage = "url('images/bg.png')";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const theme = window.localStorage.getItem("theme") || "default";
    applyTheme(theme);
});
// Encapsulate other initializations to ensure DOM is fully loaded before they run
document.addEventListener('DOMContentLoaded', function() {
    // Setup the event listener for the "Save Theme" button
    const saveThemeButton = document.getElementById('save-theme-button');
    if (saveThemeButton) {
        saveThemeButton.addEventListener('click', onSaveTheme);
    }
     // Background image upload functionality
      const fileInput = document.querySelector("#background-upload");
      fileInput.addEventListener('change', function() {
          if (fileInput.files.length > 0) {
              const file = fileInput.files[0];
              const reader = new FileReader();
              reader.onload = function(event) {
                  document.body.style.backgroundImage = `url(${event.target.result})`;
              };
              reader.readAsDataURL(file);
          } else {
              console.error("No file selected.");
          }
      });
      // Image URL saving functionality
      const imageUrlInput = document.getElementById('image-url');
      const imageSaveButton = document.querySelector('#image-settings button'); // Make sure the selector matches your HTML
      imageSaveButton.addEventListener('click', function() {
          const imageUrl = imageUrlInput.value;
          document.body.style.backgroundImage = `url(${imageUrl})`;
      });
    function addParticle() 
    { 
    const particleContainer = document.getElementById('particleContainer');
    const particle = document.createElement('div'); 
    particle.classList.add('particle');
        particle.style.setProperty('--d', Math.random() * 10 + 's');
        particleContainer.appendChild(particle);
        }
    function removeParticle() 
    { 
    const particleContainer = document.getElementById('particleContainer'); 
    const particles = particleContainer.querySelectorAll('.particle');
     if (particles.length > 0) 
    { 
    const lastParticle = particles[particles.length - 1]; 
    particleContainer.removeChild(lastParticle); 
    }
     }
});
