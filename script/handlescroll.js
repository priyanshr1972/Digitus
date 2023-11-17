



const hideDropdown = () => {
  document.getElementById('dropdown1').style.display = 'none';
}
const hideDropdown3 = () => {
  document.getElementById('dropdown3').style.display = 'none';
}
const hideDropdown2 = () => {
  document.getElementById('dropdown2').style.display = 'none';
}

const showDropdown = () => {
  hideDropdown2();
  hideDropdown3();
  document.getElementById('dropdown1').style.display = 'block';
}


const showDropdown2 = () => {
  hideDropdown();
  hideDropdown3();
  document.getElementById('dropdown2').style.display = 'block';
}


const showDropdown3 = () => {
  hideDropdown2();
  hideDropdown();
  document.getElementById('dropdown3').style.display = 'block';
}

const handleScroll = () => {
  const styleElementWhite = document.createElement('style');
  const styleElementBlack = document.createElement('style');
  const whiteBorderBottom = '.navButton {color: white;background-color:#ffffff56;}.factLinkContainer:hover {background-color: inherit;}.addOption {color: white;} .addOption:hover {border-bottom: 3px solid white;} .logoImage {filter: invert(0%);}#menu-icon{color:black} .fropt select{color:white}  .fropt{border:3px solid white}';
  const blackBorderBottom = '.navButton {color:  #eb9018;background-color:#f1f5f9;}.factLinkContainer:hover {background-color: white;}.addOption {color:  #eb9018;}.addOption:hover {border-bottom: 3px solid #eb9018;}.logoImage {filter: invert(0%);} #menu-icon{color:#eb9018}.fropt select{color:#eb9018} .fropt{border: 3px solid #eb9018 } ';
  styleElementWhite.textContent = whiteBorderBottom;
  styleElementBlack.textContent = blackBorderBottom;
  
  document.getElementById('firstSectionContainer').style.cssText = `${window.scrollY <= 90 ? `position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    
    
  
    background:transparent`
    :
    `top: 0;
    right: 0;
    
    display: flex;
    align-items: center;
    
    
  
    
    z-index: 1000;
    color: black;
    background-color: #fff;
     `}`
  document.getElementsByClassName('factLinkContainer')[0].style.cssText = `${window.scrollY <= 90 ? 'border-color: white; color: white;' : 'border-color:#eb9018;color:#eb9018;'}`
  document.getElementById('body').appendChild(window.scrollY <= 90 ? styleElementWhite : styleElementBlack);

}; 

document.addEventListener('DOMContentLoaded', function () {
 
 AOS.init();

 AOS.refresh();

});

const buttons = document.querySelectorAll(".hidden_Navbar_button");
      buttons.forEach((button) => {
        button.addEventListener("click", function () {
          const dropdown = this.nextElementSibling;

          if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
          } else {
            document.querySelectorAll(".dropdown_division").forEach((div) => {
              div.style.display = "none";
            });
            dropdown.style.display = "block";
          }
        });
});
document.getElementById('menu-icon').addEventListener('click', function() {
   const navbarContainer =document.querySelector('.hidden_Navbar');
 
    navbarContainer.style.display = 'flex';
  
  
});

document.getElementById('hidden_Navbar_menu-icon').addEventListener('click', function() {
  const navbarContainer =document.querySelector('.hidden_Navbar');
 
  
  navbarContainer.style.display = 'none';
});

