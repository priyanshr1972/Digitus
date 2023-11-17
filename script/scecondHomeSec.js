const corousalItems = document.querySelectorAll('.corousalItem');
const corosalContainer = document.querySelector('.corosalContainer');
const corousalHoverStyleElement = document.createElement('style');
const cssForCorousalHover = `.toBeVanished {
    visibility: hidden;
}`

corousalHoverStyleElement.textContent = cssForCorousalHover;


const handleResize = () => {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  console.log(screenWidth);
  corousalItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      if (screenWidth >= 780)
        corosalContainer.style.gridTemplateColumns = index === 0 ?`1.8fr 1fr 1fr`
          : index === 1 ? `1fr 1.8fr 1fr `: `1fr 1fr 1.8fr`;
      else if(screenWidth < 780)
      corosalContainer.style.gridTemplateRows = index === 0 ? `1.8fr 1fr 1fr`
      : index === 1 ? `1fr 1.8fr 1fr `: `1fr 1fr 1.8fr`;
    });
  
    item.addEventListener('mouseleave', () => {
      if(screenWidth>=780)
        corosalContainer.style.gridTemplateColumns = `1fr 1fr 1fr`;
      else if(screenWidth<780)
        corosalContainer.style.gridTemplateRows = `1fr 1fr 1fr`;
    });
  });
}
handleResize();

Object.values(document.getElementsByClassName('corousalItem')).forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    Object.values(document.getElementsByClassName(`toBeVanished${index + 1}`)).forEach((elem) => {
      elem.classList.add('hidden');
    });
    Object.values(document.getElementsByClassName(`toBeVanished2${index + 1}`)).forEach((elem) => {
      elem.classList.add('hidden');
    });
  });
  item.addEventListener('mouseleave', () => {
    Object.values(document.getElementsByClassName(`toBeVanished${index + 1}`)).forEach((elem) => {
      elem.classList.remove('hidden');
    });
    Object.values(document.getElementsByClassName(`toBeVanished2${index + 1}`)).forEach((elem) => {
      elem.classList.remove('hidden');
    });
  });
});



const showCircleDiv = (id,index) => {
  document.querySelectorAll('.secondCircleDesc').forEach(e => {
    e.classList.remove('activeCircle');
  });
  document.querySelectorAll('.arrowIcon').forEach((e, ind) => {
  })
  const circleImg = document.getElementById('circleImg');
  let currentRotation = circleImg.style.transform ? parseInt(circleImg.style.transform.match(/\d+/)[0]) : 0;
  currentRotation += 360;
  circleImg.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    if (id === 'secDesc1') {
      circleImg.src = './images/circle.png';
    } else if (id === 'secDesc2') {
      circleImg.src = './images/Accomplishment.jpg';
    } else if (id === 'secDesc3') {
      circleImg.src = './images/Integration.jpg';
    }

    setTimeout(() => {
      circleImg.style.transform = `rotate(${currentRotation}deg)`;
    }, 250);
  }, 250);
  
  var div = document.getElementById(id);
  console.log(div)
  if (div)
    div.classList.add('activeCircle');
}



const showCircleDivision = (id) => {

  document.querySelectorAll('.secondCircleDesc2nd').forEach(e => {
    e.classList.remove('activeCircle2nd');
  });

  var div = document.getElementById(id);
  if (div)
    div.classList.add('activeCircle2nd');
}



// COROUSAL JS
// JavaScript to clone carousel items
const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemWidth = carouselItems[0].getBoundingClientRect().width;
const numItems = carouselItems.length;
const carouselInner = document.querySelector('.carousel-inner');
const carousalImage = document.querySelectorAll('.carousel-image');



let scrollPosition = 0;

function scrollCarousel() {
  scrollPosition += itemWidth;
  if (scrollPosition >= numItems * itemWidth) {
    scrollPosition = 0;
  }
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

const scrollInterval = setInterval(scrollCarousel, 2000);



//------------------------------------------



 