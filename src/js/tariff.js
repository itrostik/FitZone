const menuItems = document.querySelectorAll(".main__tariffs-item")
const advantagesMenu = document.querySelectorAll(".main__tariffs-advantages");
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach(elem => {
      if (elem === item) {
        item.classList.add("item__active")
      }
      else {
        elem.classList.remove("item__active")
      }
    })
    const advantagesId = item.classList[1];
    advantagesMenu.forEach(advantage => {
      if (advantage.id === advantagesId) {
        advantage.classList.add("openBlock")
      }
      else {
        advantage.classList.remove("openBlock");
      }
    })
  })
})

