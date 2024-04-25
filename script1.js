function imageSlider(anything) {
  const mainImage = document.querySelector("#mainImage");
  mainImage.src = anything;

  const isMobile = window.innerWidth <= 960; // Assuming 960px as a breakpoint for mobile devices
  const delay = isMobile ? 100 : 300; // Faster change on mobile

  // Updated event handlers
  if (anything === "images/RIOTEnergyStrawberrylemonade_550x.png") {
    mainImage.onmouseover = mainImage.ontouchstart = function () {
      setTimeout(() => {
        this.src = "images/RIOTwebfruitcrusherw_typeRollover_550x.png";
      }, delay);
    };
    mainImage.onmouseout = mainImage.ontouchend = function () {
      setTimeout(() => {
        this.src = "images/RIOTEnergyStrawberrylemonade_550x.png";
      }, delay);
    };
  } else if (anything === "images/RIOT-Web-Cans-CitrusLime-HP_550x.png") {
    mainImage.onmouseover = mainImage.ontouchstart = function () {
      setTimeout(() => {
        this.src = "images/RIOT-NEW-Crusher-Rollover-lime_550x.png";
      }, delay);
    };
    mainImage.onmouseout = mainImage.ontouchend = function () {
      setTimeout(() => {
        this.src = "images/RIOT-Web-Cans-CitrusLime-HP_550x.png";
      }, delay);
    };
  } else if (anything === "images/RIOT-HP-MANO_550x.png") {
    mainImage.onmouseover = mainImage.ontouchstart = function () {
      setTimeout(() => {
        this.src = "images/RIOT-NEW-Crusher-Rollover-mango_550x.png";
      }, delay);
    };
    mainImage.onmouseout = mainImage.ontouchend = function () {
      setTimeout(() => {
        this.src = "images/RIOT-HP-MANO_550x.png";
      }, delay);
    };
  } else {
    // Remove hover effects
    mainImage.onmouseover = mainImage.ontouchstart = null;
    mainImage.onmouseout = mainImage.ontouchend = null;
  }
}

// Function to handle background changes
function colorChange(color1, color2) {
  const sec = document.querySelector(".sec");
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (width > 960) {
    sec.style.background = `linear-gradient(90deg, ${color1} 0%, ${color2} 55%)`;
  } else {
    sec.style.background = "#000"; // Ensure solid background on smaller devices
  }
}
