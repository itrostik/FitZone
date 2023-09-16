class Trener {
  id = null;
  direction = ''
  gender = ''
  special = ''
  name = ''
  image = ''
  text = ''
  constructor(id, gender, direction, special, name, image, text) {
    this.id = id;
    this.name = name
    this.gender = gender
    this.special = special
    this.direction = direction
    this.image = image
    this.text = text
  }
  getId() {
    return this.id
  }
  getName() {
    return this.name
  }
  getGender() {
    return this.gender
  }
  getDirection() {
    return this.direction
  }
  getSpecial() {
    return this.special
  }
  getImage() {
    return this.image
  }
  getText() {
    return this.text
  }
}

const trenerMaks = new Trener("1","male", "training", "body", "Максим Алексеев", "../img/trener1.jpg",  "Тренер по силовому тренингу, специализируется на бодибилдинге и помогает своим клиентам достигать максимальной мускулатуры.");
const trenerAlina = new Trener("2", "female", "cardio", "crossfit", "Алина Иванова", "../img/trener3.jpg", "Тренер по кардио-тренингу, знает все о кардио-нагрузках и помогает своим клиентам улучшить выносливость и снижать вес.");
const trenerKirill = new Trener("3","male", "group", "crossfit", "Кирилл Богатырёв", "../img/trener2.jpg", "Помогает своим клиентам улучшить координацию, баланс и гибкость.");
const trenerDmitry = new Trener("4","male", "functial", "yoga", "Дмитрий Крылов", "../img/trener4.jpg", "Тренер по йоге и пилатесу, помогает своим клиентам улучшить гибкость, снять напряжение и улучшить психическое состояние");
const trenerArtem = new Trener("5", "male", "functial", "body", "Артём Сельчук", "../img/trener5.jpg", "Тренер по зумбе и танцам, создает энергичные и веселые тренировки, помогает своим клиентам улучшить координацию и настроение");
const trenerAnna = new Trener("6", "female", "cardio", "body", "Анна Кульчицкая", "../img/trener6.jpg", "Тренер по бодибилдингу, специализируется на работе с начинающими спортсменами и помогает им достигать максимальных результатов")
const trenerNikolay = new Trener("7","male", "cardio", "yoga", "Николай Безрукавов", "../img/trener7.jpg", "Тренер по кардио-тренингу, знает все о кардио-нагрузках и помогает своим клиентам улучшить выносливость и снижать вес")
const trenerAleksandr = new Trener("8","male", "training", "crossfit",
  "Александр Безрукавов", "../img/trener8.jpg", "Тренер по функциональному тренингу, специализируется на работе с профессиональными спортсменами и помогает им улучшать свои навыки и достигать новых высот")
const trenerAnastasiya = new Trener("9","female", "training", "yoga", "Анастасия Котина", "../img/trener9.jpg", "Тренер по зумбе и танцам, создает энергичные и веселые тренировки, помогает своим клиентам улучшить координацию и настроение")
const trenerOleg = new Trener("10","male", "group", "body", "Олег Лукошков", "../img/trener10.jpg", "Тренер по бодибилдингу, специализируется на работе с начинающими спортсменами и помогает им достигать максимальных результатов")
const trenerMaksim = new Trener("11", "male", "functial", "crossfit", "Максим Гречишкин", "../img/trener11.jpg", "Тренер по функциональному тренингу, специализируется на работе с профессиональными спортсменами и помогает им улучшать свои навыки и достигать новых высот")

export const treners = [trenerMaks, trenerAlina, trenerKirill, trenerDmitry, trenerArtem, trenerAnna, trenerNikolay, trenerAleksandr, trenerAnastasiya, trenerOleg, trenerMaksim];

const teamFilter = document.querySelector(".main__team-filter")
const filterMenu = teamFilter.querySelectorAll(".filter__block")


filterMenu.forEach(item => {
  const filterItems = item.querySelectorAll(".filter__item")
  filterItems.forEach(elem => {
    elem.addEventListener("click", () => {
      const elemName = elem.getAttribute("name");
      const elemValue = elem.getAttribute("value");
      findTrener(elemName, elemValue);
    })
  })
})


const searchConfig = {
  name: "",
  gender: "",
  direction: "",
  special: "",
}


function findTrener(name, value) {
  searchConfig[name] = value
  let flag = false
  const noResult = document.querySelector(".main__team-noresult");
  treners.forEach(trener => {
    const trenerBlock = document.getElementById(trener.getId())
    if((trener.getGender() === searchConfig.gender || searchConfig.gender === "")
      && (trener.getDirection() === searchConfig.direction || searchConfig.direction === "")
      && (trener.getSpecial() === searchConfig.special || searchConfig.special === "")
      && (trener.getName().toUpperCase().includes(searchConfig.name) || searchConfig.name === "")) {
      trenerBlock.classList.add("open")
      flag = true
      noResult.classList.remove("open");
    }
    else{
      trenerBlock.classList.remove("open")
    }
  })
  if (!flag) {
    noResult.classList.add("open");
  }
}

const inputName = document.querySelector(".filter__search-name")

inputName.addEventListener("input", (event) => {
  const input = event.target.value.toUpperCase()
  findTrener("name", input)
})
