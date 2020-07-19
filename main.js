const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const inProgressItems = document.querySelectorAll(".color-c");

function selectItem(e) {
  removeShow();
  const tabItem = document.querySelector(`#${this.id}`);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  console.log(tabContentItem);
  tabContentItem.classList.add("show");
  tabItem.classList.add("active");
}
// functia removeShow face sa nu apara continutul tututor taburilor deodata
const removeShow = () => {
  tabContentItems.forEach((item) => item.classList.remove("show"));
  tabItems.forEach((item) => item.classList.remove("active"));
}
removeShow();
// selecteaza pagina (tabul) care sa se afiseze initial si butonul acesteia activat
document.querySelector("#tasks-content").classList.add("show");
document.querySelector("#tasks").classList.add("active");

tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

// butonul close alaturat fiecarui nod existent
const myNodelist = document.getElementsByClassName("color-c");
Array.prototype.forEach.call(myNodelist, listItem => {
  const spanClose = document.createElement("SPAN");
  const txtClose = document.createTextNode("\u00D7");
  spanClose.className = "close";
  spanClose.appendChild(txtClose);
  console.log(listItem);
  listItem.appendChild(spanClose);
}
)
//butonul edit alaturat itmilor existenti
Array.prototype.forEach.call(myNodelist, listItem => {
  const edit = document.createElement("SPAN");
  const eText = document.createTextNode("\u270E");
  edit.className = "edit";
  edit.appendChild(eText);
  listItem.appendChild(edit);
})

//adaugarea butonului in progress fiecarui item existent
const inprogress = document.getElementsByClassName("inprogress");
Array.prototype.forEach.call(myNodelist, listItem => {
  const spanProg = document.createElement("SPAN");
  const txtProg = document.createTextNode("\u00AB");
  spanProg.className = "inprogress";
  spanProg.appendChild(txtProg);
  listItem.appendChild(spanProg)
  console.log(listItem);
}
)

// functionalitatea butonului close
const closeFunctionality = () => {
  const close = document.getElementsByClassName("close");
  Array.prototype.forEach.call(close, node => {
    node.onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  })
}
const editTask = () => {
  const edit = document.getElementsByClassName("edit");
  Array.prototype.forEach.call(edit, node => {
    node.onclick = function () {
      const entry = this.parentElement.childNodes[0];
      const userResult = entry.data.split(" | ");
      const titleText = userResult[0].substring(7);
      const n = userResult[1].indexOf("Content: ");
      const contentText = userResult[1].substring(n + 9);
      console.log(titleText + '\n' + contentText);
      editButton = document.getElementById("edit-task");
      document.getElementById("input-title").value = titleText;
      document.getElementById("input-content").value = contentText;
      // inputs(titleText, contentText);
      editButton.onclick = function () {
        const inputTitle = document.getElementById("input-title").value;
        const inputContent = document.getElementById("input-content").value;
        if (inputTitle == "") {
          document.getElementById("error-message").innerHTML = "Please write a title!";
        }
        else {
          document.getElementById("error-message").innerHTML = "";
          entry.data = "Title: " + inputTitle + " | Content: " + inputContent;
        }
      }
    }
  })
}

//functionalitatea butonului "in progress"
const inprogressFunctionality = () => {
  const inprog = document.getElementsByClassName("inprogress");
  Array.prototype.forEach.call(inprog, node => {
    node.onclick = function () {
      const div = this.parentElement;
      console.log(div);
      //nu se poate ajunge aici decat din starea initiala
      if (div.style.backgroundColor != "rgb(136, 136, 136)") {
        div.style.backgroundColor = "yellow";
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u2713");
        span.className = "finish";
        span.appendChild(txt);
        div.appendChild(span);
      }
      finishFunctionality();
      // div.classList.add("color-c");     alta modalitate
    };
  })
}
//functionalitatea butonului finish
const finishFunctionality = () => {
  const finish = document.getElementsByClassName("finish");
  Array.prototype.forEach.call(finish, node => {
    node.onclick = function () {
      const div = this.parentElement;
      //doar daca a fost in progres inainte
      if (div.style.backgroundColor == "yellow") {
        div.style.backgroundColor = "rgb(136, 136, 136)";
        div.classList.add("checked");
      }
    };
  })
}
//functie folosita la creare butoanelor itemilor adaugati de utilizator
const currentNodes = (spanItem, txtItem, name, listItem) => {
  spanItem.className = name;
  spanItem.appendChild(txt);
  listItem.appendChild(spanx);
}
// creeaza un nou nod in lista la apasarea butonului add
const newElement = () => {
  const listItem = document.createElement("li");
  let inputTitle = document.getElementById("input-title").value;
  let inputContent = document.getElementById("input-content").value;
  const title = "Title";
  const content = "Content";
  let inputValue = `${title}: ` + inputTitle + ` | ${content}: ` + inputContent;
  let textNode = document.createTextNode(inputValue);
  listItem.appendChild(textNode);
  if (inputTitle === "") {
    document.getElementById("error-message").innerHTML = "Please write a title!";
  } else {
    document.getElementById("list").appendChild(listItem);
    document.getElementById("error-message").innerHTML = "";
  }
  document.getElementById("input-title").value = "";
  document.getElementById("input-content").value = "";
  //close button adaugat noului item cu reutilizare de cod
  const spanClose = document.createElement("SPAN");
  const txtClose = document.createTextNode("\u00D7");
  currentNodes(spanClose, txtClose, "close", listItem);
  //in progress button adaugat noului item
  const spanPrg = document.createElement("SPAN");
  const txtPrg = document.createTextNode("\u00AB");
  currentNodes(spanPrg, txtPrg, "inprogress", listItem);
  //edit button adaugat noului item
  const spanEdit = document.createElement("SPAN");
  const txtEdit = document.createTextNode("\u270E");
  currentNodes(spanEdit, txtEdit, "edit", listItem)

  editTask();
  closeFunctionality();
  inprogressFunctionality();

}
closeFunctionality();
inprogressFunctionality();
editTask();
$('#list').sortable();
const signIn = document.getElementById("signIn");

// Contact form
signIn.onclick = function () {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("inputEmail").value;
  let subjects = document.getElementById("subjects").value;
  let message = document.getElementById("message").value;
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // const messageFormat = /^.{10,}$/;
  const info = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    subjects: subjects,
    message: message
  };
  // const n = email.indexOf("@"); 
  const firstNString = "First name";
  const lastNString = "Last name";
  const emailString = "Email";
  const subjectsString = "Subjects"
  const messageString = "Message"
  if (email.match(mailFormat) && message.length >= 10) {
    document.getElementById("informations").innerHTML = `{&quot${firstNString}&quot: ` + info.firstName + "<br />" + `&quot${lastNString}&quot: ` + info.lastName +
      "<br />" + `&quot${emailString}&quot: ` + info.email + "<br />" + `&quot${subjectsString}&quot: ` + info.subjects + "<br />" + `&quot${messageString}&quot: ` + info.message + "<br />" + `}`;
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("subjects").value = "";
    document.getElementById("message").value = "";
  }
  else if (email.match(mailFormat)) {
    document.getElementById("informations").innerHTML = "Mesajul dvs trebuie sa contina cel putin 10 caractere";
  }
  else if (message.length < 10 ) {
    document.getElementById("informations").innerHTML = "Email-ul este invalid!";
  }
  else {
    document.getElementById("informations").innerHTML = "Mesajul dvs trebuie sa contina 10 caractere, iar mailul trebuie sa aiba format corespunzator"
  }
}
const coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activeCollapsible");
    const content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}