/* Get In Touch Modal */
/* Get In Touch Modal */
/* Get In Touch Modal */
/* Get In Touch Modal */
/* Get In Touch Modal */
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

/* Opens the modal and controls CSS variables for transitions and animations */
openModal.addEventListener("click", () => {
  modal.showModal();
  document.body.style.overflow = "hidden";
});

/* Default way for closing the modal and controls CSS variables for transitions and animations */
closeModal.addEventListener("click", () => {
  modal.close();
  document.body.style.overflow = "auto";
});

/* Project Modals */
/* Project Modals */
/* Project Modals */
/* Project Modals */
/* Project Modals */
/* Modal 1 */
const projectModal1 = document.querySelector("#modal1");
const openProject1 = document.querySelector("#open-project1");
const closeProjectModal1 = document.querySelector("#project-modal-close1")

  openProject1.addEventListener("click", () => {
    projectModal1.showModal();
    document.body.style.overflow = "hidden";
  });

  closeProjectModal1.addEventListener("click", () => {
    projectModal1.close();
    document.body.style.overflow = "auto";
  });

/* Modal 2 */
const projectModal2 = document.querySelector("#modal2");
const openProject2 = document.querySelector("#open-project2");
const closeProjectModal2 = document.querySelector("#project-modal-close2")

  openProject2.addEventListener("click", () => {
    projectModal2.showModal();
    document.body.style.overflow = "hidden";
  });

  closeProjectModal2.addEventListener("click", () => {
    projectModal2.close();
    document.body.style.overflow = "auto";
  });

/* Modal 3 */
const projectModal3 = document.querySelector("#modal3");
const openProject3 = document.querySelector("#open-project3");
const closeProjectModal3 = document.querySelector("#project-modal-close3")

  openProject3.addEventListener("click", () => {
    projectModal3.showModal();
    document.body.style.overflow = "hidden";
  });

  closeProjectModal3.addEventListener("click", () => {
    projectModal3.close();
    document.body.style.overflow = "auto";
  });

/* Modal 4 */
const projectModal4 = document.querySelector("#modal4");
const openProject4 = document.querySelector("#open-project4");
const closeProjectModal4 = document.querySelector("#project-modal-close4")

  openProject4.addEventListener("click", () => {
    projectModal4.showModal();
    document.body.style.overflow = "hidden";
  });

  closeProjectModal4.addEventListener("click", () => {
    projectModal4.close();
    document.body.style.overflow = "auto";
  });

const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);

/* Close Modal With ESC */
/* Close Modal With ESC */
/* Close Modal With ESC */
/* Close Modal With ESC */
/* Close Modal With ESC */
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    document.body.style.overflow = "auto";
  }
});

/* Copy Email */
/* Copy Email */
/* Copy Email */
/* Copy Email */
/* Copy Email */
const sideEmail = document.querySelector(".side-email");
const email = "jonespm1.dev@gmail.com";

sideEmail.addEventListener('click', function(event) {
  navigator.clipboard.writeText(email);
});

/* this is me working on closing modal with click outside */
/* this is me working on closing modal with click outside */
/* this is me working on closing modal with click outside */
/* this is me working on closing modal with click outside */
/* this is me working on closing modal with click outside */
// const projectModal = document.querySelector(".project-modal-wrapper");
// document.addEventListener('click', evt => {
//   if (  document.body.style.overflow = "hidden") {
//     if (evt.target !== projectModal) {
//       modal.close();
//     }
//   }
// });





function projectOne() {
  const slider1 = document.querySelector(".slider-container-1"),
  slides1 = Array.from(document.querySelectorAll(".slide1"))
  
  let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0
  
  slides1.forEach((slide1, index) => {
  const slideImage1 = slide1.querySelector("img")
  slideImage1.addEventListener("dragstart", (e) => e.
    preventDefault())
  
  //Touch events
  slide1.addEventListener("touchstart", touchStart(index))
  slide1.addEventListener("touchend", touchEnd)
  slide1.addEventListener("touchmove", touchMove)
  
  //mouse events
  slide1.addEventListener("mousedown", touchStart(index))
  slide1.addEventListener("mouseup", touchEnd)
  slide1.addEventListener("mouseleave", touchEnd)
  slide1.addEventListener("mousemove", touchMove)
  })
  
  // disable context menu
  slider1.oncontextmenu = function(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }
  
  function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
  
    animationID = requestAnimationFrame(animation)
    slider1.classList.add("grabbing")
    }
  }
  
  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
  
    const movedBy = currentTranslate - prevTranslate
  
    if (movedBy < -100 && currentIndex < slides1.length - 1)
    currentIndex += 1
  
    if (movedBy > 100 && currentIndex > 0)
    currentIndex -= 1
  
    setPositionByIndex()
  
    slider1.classList.remove("grabbing")
  }
  
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event)
      currentTranslate = prevTranslate + currentPosition - startPos
    }
  }
  
  function getPositionX(event) {
    return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
  }
  
  function animation() {
    setSlider1Position()
    if(isDragging) requestAnimationFrame(animation)
  }
  
  function setSlider1Position() {
    slider1.style.transform = `translateX(${currentTranslate}px)`
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSlider1Position()
  }
  } projectOne()
  

function projectTwo() {
const slider2 = document.querySelector(".slider-container-2"),
slides2 = Array.from(document.querySelectorAll(".slide2"))

let isDragging = false,
startPos = 0,
currentTranslate = 0,
prevTranslate = 0,
animationID = 0,
currentIndex = 0

slides2.forEach((slide2, index) => {
const slideImage2 = slide2.querySelector("img")
slideImage2.addEventListener("dragstart", (e) => e.
  preventDefault())

//Touch events
slide2.addEventListener("touchstart", touchStart(index))
slide2.addEventListener("touchend", touchEnd)
slide2.addEventListener("touchmove", touchMove)

//mouse events
slide2.addEventListener("mousedown", touchStart(index))
slide2.addEventListener("mouseup", touchEnd)
slide2.addEventListener("mouseleave", touchEnd)
slide2.addEventListener("mousemove", touchMove)
})

// disable context menu
slider2.oncontextmenu = function(event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart(index) {
return function (event) {
  currentIndex = index
  startPos = getPositionX(event)
  isDragging = true

  animationID = requestAnimationFrame(animation)
  slider2.classList.add("grabbing")
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides2.length - 1)
  currentIndex += 1

  if (movedBy > 100 && currentIndex > 0)
  currentIndex -= 1

  setPositionByIndex()

  slider2.classList.remove("grabbing")
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSlider2Position()
  if(isDragging) requestAnimationFrame(animation)
}

function setSlider2Position() {
  slider2.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSlider2Position()
}
} projectTwo()


function projectThree() {
  const slider3 = document.querySelector(".slider-container-3"),
  slides3 = Array.from(document.querySelectorAll(".slide3"))
  
  let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0
  
  slides3.forEach((slide3, index) => {
  const slideImage3 = slide3.querySelector("img")
  slideImage3.addEventListener("dragstart", (e) => e.
    preventDefault())
  
  //Touch events
  slide3.addEventListener("touchstart", touchStart(index))
  slide3.addEventListener("touchend", touchEnd)
  slide3.addEventListener("touchmove", touchMove)
  
  //mouse events
  slide3.addEventListener("mousedown", touchStart(index))
  slide3.addEventListener("mouseup", touchEnd)
  slide3.addEventListener("mouseleave", touchEnd)
  slide3.addEventListener("mousemove", touchMove)
  })
  
  // disable context menu
  slider3.oncontextmenu = function(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }
  
  function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
  
    animationID = requestAnimationFrame(animation)
    slider3.classList.add("grabbing")
    }
  }
  
  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
  
    const movedBy = currentTranslate - prevTranslate
  
    if (movedBy < -100 && currentIndex < slides3.length - 1)
    currentIndex += 1
  
    if (movedBy > 100 && currentIndex > 0)
    currentIndex -= 1
  
    setPositionByIndex()
  
    slider3.classList.remove("grabbing")
  }
  
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event)
      currentTranslate = prevTranslate + currentPosition - startPos
    }
  }
  
  function getPositionX(event) {
    return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
  }
  
  function animation() {
    setSlider3Position()
    if(isDragging) requestAnimationFrame(animation)
  }
  
  function setSlider3Position() {
    slider3.style.transform = `translateX(${currentTranslate}px)`
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSlider3Position()
  }
  } projectThree()


function projectFour() {
  const slider4 = document.querySelector(".slider-container-4"),
  slides4 = Array.from(document.querySelectorAll(".slide4"))
  
  let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0
  
  slides4.forEach((slide4, index) => {
  const slideImage4 = slide4.querySelector("img")
  slideImage4.addEventListener("dragstart", (e) => e.
    preventDefault())
  
  //Touch events
  slide4.addEventListener("touchstart", touchStart(index))
  slide4.addEventListener("touchend", touchEnd)
  slide4.addEventListener("touchmove", touchMove)
  
  //mouse events
  slide4.addEventListener("mousedown", touchStart(index))
  slide4.addEventListener("mouseup", touchEnd)
  slide4.addEventListener("mouseleave", touchEnd)
  slide4.addEventListener("mousemove", touchMove)
  })
  
  // disable context menu
  slider4.oncontextmenu = function(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }
  
  function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
  
    animationID = requestAnimationFrame(animation)
    slider4.classList.add("grabbing")
    }
  }
  
  function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
  
    const movedBy = currentTranslate - prevTranslate
  
    if (movedBy < -100 && currentIndex < slides4.length - 1)
    currentIndex += 1
  
    if (movedBy > 100 && currentIndex > 0)
    currentIndex -= 1
  
    setPositionByIndex()
  
    slider4.classList.remove("grabbing")
  }
  
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event)
      currentTranslate = prevTranslate + currentPosition - startPos
    }
  }
  
  function getPositionX(event) {
    return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
  }
  
  function animation() {
    setSlider4Position()
    if(isDragging) requestAnimationFrame(animation)
  }
  
  function setSlider4Position() {
    slider4.style.transform = `translateX(${currentTranslate}px)`
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSlider4Position()
  }
  } projectFour()
