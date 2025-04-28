
// script.js

window.addEventListener('load', () => {
  const bgMusic = document.getElementById('bg-music');
  const playBtn = document.getElementById('playMusicBtn');

  bgMusic.volume = 0.2; // Set volume to 20%

  // Play music on button click
  playBtn.addEventListener('click', () => {
    bgMusic.muted = false;
    bgMusic.play();
    playBtn.style.display = 'none'; // Hide button after playing
  });
});
const backgroundMusic = document.getElementById('bg_music');
const volumeControl = document.getElementById('volumeControl');

// Set volume when clicking on buttons
function setVolume(value) {
  bg_music.volume = value;
  volumeControl.value = value;  // Sync the slider with the button selection
}

volumeControl.addEventListener('input', function () 
{
  bg_music.volume = volumeControl.value;
});
const container = document.getElementById('leaf-container');

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');

  // Random horizontal starting position (left side)
  leaf.style.left = Math.random() * window.innerWidth + 'px';
  
  // Always start from the top
  leaf.style.top = '-50px';  // start slightly above visible screen

  // Random animation duration between 8 to 15 seconds
  leaf.style.animationDuration = (8 + Math.random() * 7) + 's';

  // Random size
  const scale = 0.5 + Math.random();
  leaf.style.transform = `scale(${scale})`;

  container.appendChild(leaf);

  // Remove leaf after animation
  setTimeout(() => {
    leaf.remove();
  }, 17000); // slightly longer than your animation duration
  
}

// Create a leaf every 400 milliseconds
setInterval(createLeaf, 400);

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function searchFiles() {
  // Prompt user for a file or item name to search
  let searchTerm = prompt("Enter the file or item name to search:");

  if (searchTerm) {
    // Example of searching through an array of files (replace this with your own file list)
    let files = ['file1.txt', 'image.jpg', 'document.pdf', 'file2.txt', 'app.exe'];

    // Filter files based on the search term (case-insensitive)
    let searchResults = files.filter(file => file.toLowerCase().includes(searchTerm.toLowerCase()));

    if (searchResults.length > 0) {
      alert("Found files: " + searchResults.join(', '));
    } else {
      alert("No files found.");
    }
  } else {
    alert("Please enter a search term.");
  }
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function toggleSearchBox() {
  const searchBox = document.querySelector('.search-box-container');
  // Toggle visibility of the search box with a smooth transition
  searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
}



