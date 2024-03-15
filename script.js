function imageSlider(anything) {
  const mainImage = document.querySelector("#mainImage");
  mainImage.src = anything;
  // Set hover Strawberry
  if (anything === "images/RIOTEnergyStrawberrylemonade_550x.png") {
    mainImage.onmouseover = function () {
      this.src = "images/RIOTwebfruitcrusherw_typeRollover_550x.png";
    };
    mainImage.onmouseout = function () {
      this.src = "images/RIOTEnergyStrawberrylemonade_550x.png";
    };
  }
  // Hover efekat za Citrus Lime
  else if (anything === "images/RIOT-Web-Cans-CitrusLime-HP_550x.png") {
    mainImage.onmouseover = function () {
      this.src = "images/RIOT-NEW-Crusher-Rollover-lime_550x.png";
    };
    mainImage.onmouseout = function () {
      this.src = "images/RIOT-Web-Cans-CitrusLime-HP_550x.png";
    };
  }
  // Hover  efekat za 'Mango'
  else if (anything === "images/RIOT-HP-MANO_550x.png") {
    mainImage.onmouseover = function () {
      this.src = "images/RIOT-NEW-Crusher-Rollover-mango_550x.png";
    };
    mainImage.onmouseout = function () {
      this.src = "images/RIOT-HP-MANO_550x.png";
    };
  }
  // Uklanja hover efekat za druge slike
  else {
    mainImage.onmouseover = null;
    mainImage.onmouseout = null;
  }
}

function colorChange(color) {
  const sec = document.querySelector(".sec");
  sec.style.background = color;
  const navMenu = document.querySelector(".navigation");
  navMenu.style.background = color;
}
