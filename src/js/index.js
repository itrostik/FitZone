

const headerMenuOpenButton = document.querySelector(".header__infoMenu")
const headerMenu = document.querySelector(".header__mobileMenu")
const headerMenuCloseButton = document.querySelector(".header__mobileMenu-closeButton")

const headerEnterButton = document.querySelectorAll(".header__mobileMenu-buttons-signIn")
const headerSignUpButton = document.querySelectorAll(".header__mobileMenu-buttons-signUp")

headerEnterButton.forEach(item => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("openMenu")
  })
})

headerSignUpButton.forEach(item => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("openMenu")
  })
})

headerMenuOpenButton.addEventListener("click", () => {
  headerMenu.classList.toggle("openMenu")
})



headerMenuCloseButton.addEventListener("click", () => {
  headerMenu.classList.toggle("openMenu")
})

//input radio

const argOfImageSrc = ['../img/gymchoose.png', "../img/fitness.jpg", "../img/fitnesschoose.jpg", "../img/swiperImage.png", '../img/gymchoose.png', "../img/fitness.jpg", "../img/fitnesschoose.jpg", "../img/swiperImage.png"]

const listRadio = document.querySelectorAll(".main__zone-item")

const imageBlock = document.querySelector(".main__zone-image")
const image = imageBlock.children[0]

listRadio.forEach((item) => {
  item.addEventListener('click', (ev) => {
    const radioID = ev.target.id
    image.setAttribute("src", argOfImageSrc[radioID - 1])
  })
})

const treners = document.querySelectorAll(".main__team-member")
const trenerModal = document.querySelector(".trener")
const body = document.body
const closeButton = trenerModal.querySelector(".trener__closeButtonIcon")
treners.forEach(item => {
  item.addEventListener('click', () => {
    replace(item);
    trenerModal.classList.add("openModal")
    let pagePosition = window.scrollY;
    body.dataset.position = pagePosition;
    body.classList.add("closing")
    window.scroll({top: pagePosition})
    body.style.top = -pagePosition + 'px';
    trenerModal.style.top = pagePosition + 'px'
  })
})

function replace(item) {
  const trenerName = trenerModal.querySelector(".trener__name")
  const trenerImage = trenerModal.querySelector(".trener__image")
  const trenerSpecial = trenerModal.querySelector(".trener__special")
  const trenerDescription = trenerModal.querySelector(".trener__text")
  if (item.querySelector(".team-member__name").innerText === "Максим Алексеев") {
    trenerImage.style.cssText = `background: url("../img/trener1.jpg") center / cover no-repeat`
    trenerName.innerText = item.querySelector(".team-member__name").innerText;
    trenerSpecial.innerText = item.querySelector(".team-member__special").innerText;
    trenerDescription.innerText = "Тренер по силовому тренингу, специализируется на бодибилдинге и помогает своим клиентам достигать максимальной мускулатуры."
  }
  else if (item.querySelector(".team-member__name").innerText === "Алина Иванова") {
    trenerImage.style.cssText = `background: url("../img/trener3.jpg") center / cover no-repeat`
    trenerName.innerText = item.querySelector(".team-member__name").innerText;
    trenerSpecial.innerText = item.querySelector(".team-member__special").innerText;
    trenerDescription.innerText = "Тренер по кардио-тренингу, знает все о кардио-нагрузках и помогает своим клиентам улучшить выносливость и снижать вес."
  }
  else if (item.querySelector(".team-member__name").innerText === "Кирилл Богатырёв") {
    trenerImage.style.cssText = `background: url("../img/trener2.jpg") center / cover no-repeat`
    trenerName.innerText = item.querySelector(".team-member__name").innerText;
    trenerSpecial.innerText = item.querySelector(".team-member__special").innerText;
    trenerDescription.innerText = "Помогает своим клиентам улучшить координацию, баланс и гибкость."
  }
}

closeButton.addEventListener("click", () => {
  trenerModal.classList.remove("openModal")
  body.classList.remove("closing")
  let pagePosition = parseInt(body.dataset.position, 10)
  body.style.top = ""
  window.scroll({top: pagePosition})
  // // When the modal is hidden, we want to remain at the top of the scroll position
  body.removeAttribute('data-position')
})