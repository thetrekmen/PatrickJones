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