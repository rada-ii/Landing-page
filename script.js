function imageSlider(anything) {
  const mainImage = document.querySelector("#mainImage");
  mainImage.src = anything;
  // Set hover Strawberry
  if (anything === "images/RIOTEnergyStrawberrylemonade_550x.png") {
    mainImage.onmouseover = function () {
      timeout = setTimeout(() => {
        this.src = "images/RIOTwebfruitcrusherw_typeRollover_550x.png";
      }, 300);
    };
    mainImage.onmouseout = function () {
      timeout = setTimeout(() => {
        this.src = "images/RIOTEnergyStrawberrylemonade_550x.png";
      }, 300);
    };
  }
  // Hover effect for Citrus Lime
  else if (anything === "images/RIOT-Web-Cans-CitrusLime-HP_550x.png") {
    mainImage.onmouseover = function () {
      timeout = setTimeout(() => {
        this.src = "images/RIOT-NEW-Crusher-Rollover-lime_550x.png";
      }, 300);
    };
    mainImage.onmouseout = function () {
      timeout = setTimeout(() => {
        this.src = "images/RIOT-Web-Cans-CitrusLime-HP_550x.png";
      }, 300);
    };
  }
  // Hover effect for 'Mango'
  else if (anything === "images/RIOT-HP-MANO_550x.png") {
    mainImage.onmouseover = function () {
      timeout = setTimeout(() => {
        this.src = "images/RIOT-NEW-Crusher-Rollover-mango_550x.png";
      }, 300);
    };
    mainImage.onmouseout = function () {
      timeout = setTimeout(() => {
        this.src = "images/RIOT-HP-MANO_550x.png";
      }, 300);
    };
  }

  // remove hover
  else {
    mainImage.onmouseover = null;
    mainImage.onmouseout = null;
  }
}

function colorChange(color1, color2) {
  const sec = document.querySelector(".sec");
  sec.style.background = `linear-gradient(90deg, ${color1} 0%, ${color2} 55%)`;
  // const navMenu = document.querySelector(".navigation");
  navMenu.style.background = `linear-gradient(90deg, ${color1} 0%, ${color2} 55%)`;
}
