import {treners} from "./team";

const trenersTeam = document.querySelectorAll(".main__team-member")
const body = document.body;
const trener = document.querySelector(".trener")
const closeButton = document.querySelector(".trener__closeButtonIcon")

trenersTeam.forEach(item => {
  item.addEventListener('click', () => {
    replace(treners, item)
    trener.classList.add("openModal")
    let pagePosition = window.scrollY;
    body.dataset.position = pagePosition;
    body.classList.add("closing")
    window.scroll({top: pagePosition})
    body.style.top = -pagePosition + 'px';
    trener.style.top = pagePosition + 'px'
  })
})

function replace(treners, item) {
  const trenerObject = treners[item.id - 1]
  const trenerName = trener.querySelector(".trener__name")
  const trenerImage = trener.querySelector(".trener__image")
  const trenerSpecial = trener.querySelector(".trener__special")
  const trenerDescription = trener.querySelector(".trener__text")
  trenerImage.style.cssText = `background: url("${trenerObject.getImage()}") center / cover no-repeat`
  trenerName.innerText = trenerObject.getName();
  trenerSpecial.innerText = item.querySelector(".team-member__special").innerText;
  trenerDescription.innerText = trenerObject.getText()
}


closeButton.addEventListener("click", () => {
  trener.classList.remove("openModal")
  body.classList.remove("closing")
  let pagePosition = parseInt(body.dataset.position, 10)
  body.style.top = ""
  window.scroll({top: pagePosition})
  body.removeAttribute('data-position')
})


