const modalButton = document.querySelector(".modal__window-button");
const modal = document.querySelector(".modal")
const modalComplete = document.querySelector(".modal__complete")
const wrapper = document.querySelector(".wrapper")
const openModalButtons = document.querySelectorAll(".openButton")

const openModalCompleteButton = document.querySelectorAll(".openButtonComplete")

const modalEnter = document.querySelector(".modal__enter")
const modalEnterOpenButton = document.querySelectorAll(".header__buttons-signIn")

const modalSignUp = document.querySelector(".modal__signUp")
const modalSignUpOpenButton = document.querySelectorAll(".header__buttons-signUp");

const body = document.body;

openModalButtons.forEach(item => {
  item.addEventListener("click", () => {
    modal.classList.add("openModal")
    // wrapper.classList.add("closing")
    // When the modal is shown, we want a fixed body
    let pagePosition = window.scrollY;
    body.dataset.position = pagePosition;
    body.classList.add("closing")
    body.style.top = -pagePosition + 'px';
    modal.style.top = pagePosition + 'px'
  })
})


openModalCompleteButton.forEach(item => {
  item.addEventListener("click", () => {
    modalComplete.classList.add("openModal");
    let pagePosition = window.scrollY;
    body.dataset.position = pagePosition;
    body.classList.add("closing")
    body.style.top = -pagePosition + 'px';
    modalComplete.style.top = pagePosition + 'px'
    window.scroll({top: pagePosition})
  })
})

modalButton.addEventListener("click", () => {
  let pagePosition = +modal.style.top.split("px")[0];
  modal.classList.remove("openModal")
  modalComplete.classList.add("openModal")
  body.classList.add("closing")
  body.style.top = -pagePosition + 'px';
  modalComplete.style.top = pagePosition + 'px'
  window.scroll({top: pagePosition})
})


const modalCloseButtonIcon = document.querySelectorAll(".modal__closeButtonIcon")

modalCloseButtonIcon.forEach(item => {
  item.addEventListener("click", () => {
    body.classList.remove("closing")
    let pagePosition = parseInt(body.dataset.position, 10)
    body.style.top = ""
    window.scroll({top: pagePosition})
    body.removeAttribute('data-position')
    modal.classList.remove("openModal")
    modalComplete.classList.remove("openModal")
    modalEnter.classList.remove("openModal")
    modalSignUp.classList.remove("openModal")
    trener.classList.remove("openModal")
  })
})

const trener = document.querySelector(".trener")

const modalCloseButton = document.querySelector(".modal__closeButton")
modalCloseButton.addEventListener("click", () => {
  body.style.top = ""
  body.classList.remove("closing")
  body.removeAttribute('data-position')
  modal.classList.remove("openModal")
  modalComplete.classList.remove("openModal")
  trener.classList.remove("openModal")
  let pagePosition = window.scrollY
  window.scroll({top: pagePosition})
  // When the modal is hidden, we want to remain at the top of the scroll position
})






modalEnterOpenButton.forEach(item => {
  item.addEventListener("click", () => {
    modalEnter.classList.add("openModal")
    let pagePosition = window.scrollY;
    body.dataset.position = pagePosition;
    body.classList.add("closing")
    body.style.top = -pagePosition + 'px';
    modalEnter.style.top = pagePosition + 'px'
    window.scroll({top: pagePosition})
  })
})

modalSignUpOpenButton.forEach(item => {
  item.addEventListener("click", () => {
    modalSignUp.classList.add("openModal")
    let pagePosition = window.scrollY;
    body.dataset.position = pagePosition;
    body.classList.add("closing")
    body.style.top = -pagePosition + 'px';
    modalSignUp.style.top = pagePosition + 'px'
    window.scroll({top: pagePosition})
  })
})


