const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const inProgressItems = document.querySelectorAll(".color-c");


function selectItem(e) {
  removeShow();
  console.log(this.id);
  const tabItem = document.querySelector(`#${this.id}`);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  console.log(tabContentItem);
  tabContentItem.classList.add("show");
  tabItem.classList.add("active");
}

const removeShow = () => {
  tabContentItems.forEach((item) => item.classList.remove("show"));
  tabItems.forEach((item) => item.classList.remove("active"));
}
removeShow();
// functia removeShow face sa nu apara continutul tututor taburilor
document.querySelector("#tasks-content").classList.add("show");
// selecteaza pagina (tabul) care sa se afiseze initial si butonul acesteia activat
document.querySelector("#tasks").classList.add("active");
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

// butonul close alaturat fiecarui nod existent
const myNodelist = document.getElementsByClassName("color-c");
const myNodel = document.getElementsByClassName("list");
// for (let i = 0; i < myNodelist.length; i++) { before
// myNodelist.forEach((node)=>{ 
Array.prototype.forEach.call(myNodelist, li => {
  const spanClose = document.createElement("SPAN");
  const txtClose = document.createTextNode("\u00D7");
  spanClose.className = "close";
  spanClose.appendChild(txtClose);
  console.log(li);
  li.appendChild(spanClose);
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
//adaugarea butonului in progress fiecarui item existent
const inprogress = document.getElementsByClassName("inprogress");
Array.prototype.forEach.call(myNodelist, li => {
  const spanProg = document.createElement("SPAN");
  const txtProg = document.createTextNode("\u00AB");
  spanProg.className = "inprogress";
  spanProg.appendChild(txtProg);
  li.appendChild(spanProg)
  console.log(li);
}
)
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
      }
      // div.classList.add("color-c");     alta modalitate
    };
  })
}
//butonul finish task, adaugat itemilor existenti
Array.prototype.forEach.call(myNodelist, li => {
  const spanFinish = document.createElement("SPAN");
  const txtFinish = document.createTextNode("\u2713");
  spanFinish.className = "finish";
  spanFinish.appendChild(txtFinish);
  li.appendChild(spanFinish);
})
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
function currentNodes(spanx, txt, name, li) {
  spanx.className = name;
  spanx.appendChild(txt);
  li.appendChild(spanx);
}
// creeaza un nou nod in lista la apasarea butonului add
const newElement = () => {
  const li = document.createElement("li");
  let inputValue1 = document.getElementById("input-title").value;
  let inputValue2 = document.getElementById("input-content").value;
  const title = "Title";
  const content = "Content";
  let inputValue = `${title}: ` + inputValue1 + ` | ${content}: ` + inputValue2;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if ((inputValue1 === "") && (inputValue2 === "")) {
    // alert("You must write something in at least one input!");
    document.getElementById("demo").innerHTML = "Please write something!";
  } else {
    document.getElementById("list").appendChild(li);
    document.getElementById("demo").innerHTML = "";
  }
  document.getElementById("input-title").value = "";
  document.getElementById("input-content").value = "";
  //close button adaugat noului item cu reutilizare de cod
  let spanCls = document.createElement("SPAN");
  const txtCls = document.createTextNode("\u00D7");
  currentNodes(spanCls, txtCls, "close", li);

  //in progress button adaugat noului item cu reutilizare de cod
  const spanPrg = document.createElement("SPAN");
  const txtPrg = document.createTextNode("\u00AB");
  currentNodes(spanPrg, txtPrg, "inprogress", li);

  //finish button adaugat noului item cu reutilizare de cod
  const spanFin = document.createElement("SPAN");
  const txtFin = document.createTextNode("\u2713");
  currentNodes(spanFin, txtFin, "finish", li)

  closeFunctionality();
  inprogressFunctionality();
  finishFunctionality();
}
closeFunctionality();
inprogressFunctionality();
finishFunctionality();