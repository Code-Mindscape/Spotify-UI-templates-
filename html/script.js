function toggleMenu() {
  const menuToggle = document.querySelector(".navbar-icon");
  const sidebar = document.querySelector(".side-bar");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
}

function showPlayBox() {
    const playlistSection2 = document.querySelector('.playlist-section2');
    const content2InSection2 = playlistSection2.querySelector('.content2');
  
    // Check if the .active class is already present
    const isActive = content2InSection2.classList.contains('active');
  
    // Toggle the .active class based on its presence
    if (isActive) {
      content2InSection2.classList.remove('active');
    } else {
      content2InSection2.classList.add('active');
    }
  }
  

const playImage = document.getElementById("playIcon").querySelector("img");

playImage.addEventListener("click", function () {
  if (playImage.src.includes("play-circle.svg")) {
    playImage.src = "../images/pause-circle.svg";
  } else {
    playImage.src = "../images/play-circle.svg";
  }
});


let isPlaying = {}; // Use an object to store the playing state for each song box

function togglePlayBox(event) {
    const iconBox = event.currentTarget; // Get the clicked icon-box element
    const songBox = iconBox.closest('.added-song-box'); // Get the parent song box

    if (!isPlaying[songBox]) {
        // Replace the SVG with the "pause" SVG for the clicked song box
        iconBox.innerHTML = `
        <svg width="46" height="46" fill="#1ED760" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.769 9.769 0 0 0 12 2.25ZM10.5 15A.75.75 0 1 1 9 15V9a.75.75 0 0 1 1.5 0v6Zm4.5 0a.75.75 0 1 1-1.5 0V9A.75.75 0 1 1 15 9v6Z"></path>
      </svg>`;
    } else {
        // Replace the SVG with the "play" SVG for the clicked song box
        iconBox.innerHTML = `
        <?xml version="1.0" encoding="utf-8"?>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 46 46"
            style="enable-background:new 0 0 46 46;" xml:space="preserve">
            <style type="text/css">
                .st0 {
                    fill: #1ED760;
                }
            </style>
            <path class="st0" d="M23,4.3C12.7,4.3,4.3,12.7,4.3,23S12.7,41.7,23,41.7S41.7,33.3,41.7,23C41.7,12.7,33.3,4.3,23,4.3z M29.5,24.2
    L20.9,30c-0.2,0.1-0.5,0.2-0.8,0.2c-0.2,0-0.5-0.1-0.7-0.2c-0.5-0.3-0.8-0.7-0.8-1.3V17.3c0-0.5,0.3-1,0.8-1.3
    c0.5-0.2,1-0.2,1.5,0.1l8.6,5.8c0.7,0.4,0.9,1.3,0.4,2C29.8,24,29.7,24.1,29.5,24.2z" />
        </svg>`;
    }

    isPlaying[songBox] = !isPlaying[songBox]; // Toggle the playing state for the clicked song box
}