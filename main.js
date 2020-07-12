const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const inProgressItems = document.querySelectorAll(".color-c");
// functia removeShow face sa nu apara continutul tututor taburilor
removeShow();
// selecteaza pagina (tabul) care sa se afiseze initial si butonul acesteia activat
document.querySelector("#tasks-content").classList.add("show");
document.querySelector("#tasks").classList.add("active");

function selectItem(e) {
  removeShow();
  console.log(this.id);
  const tabItem = document.querySelector(`#${this.id}`);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  console.log(tabContentItem);
  tabContentItem.classList.add("show");
  tabItem.classList.add("active");
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
  tabItems.forEach((item) => item.classList.remove("active"));
}

tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

// butonul close alaturat fiecarui nod existent
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// functionalitatea butonului close
function closeFunctionality() {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
//adaugarea butonului in progress fiecarui item existent
var inprogress = document.getElementsByClassName("inprogress");
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00AB");
  span.className = "inprogress";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//functionalitatea butonului "in progress"
function inprogressFunctionality() {
  var inprog = document.getElementsByClassName("inprogress");
  var i;
  for (i = 0; i < inprog.length; i++) {
    inprog[i].onclick = function () {
      var div = this.parentElement;
      console.log(div);
      //nu se poate ajunge aici decat din starea initiala
      if (div.style.backgroundColor != "rgb(136, 136, 136)") {
        div.style.backgroundColor = "yellow";
      }
      // div.classList.add("color-c");     alta modalitate
    };
  }
}
//butonul finish task, adaugat itemilor existenti
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u2713");
  span.className = "finish";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//functionalitatea butonului finish
function finishFunctionality() {
  var finish = document.getElementsByClassName("finish");
  var i;
  for (i = 0; i < finish.length; i++) {
    finish[i].onclick = function () {
      var div = this.parentElement;
      //doar daca a fost in progres inainte
      if (div.style.backgroundColor == "yellow") {
        div.style.backgroundColor = "rgb(136, 136, 136)";
        div.classList.add("checked");
      }
    };
  }
}
// Nu o folosesc, am pastrat-o ca model pentru toggle
// var list = document.querySelector("ul");
// list.addEventListener(
//   "click",   
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       // ev.target.classList.toggle("checked");
//       // ev.target.classList.add("checked");
//       ev.target.style.backgroundColor= "#888";
//       ev.target.style.color= "black";
//       ev.target.style.textDecoration= "line-through";
//     }
//   },
//   false
// );

// creeaza un nou nod in lista la apasarea butonului add
function newElement() {
  var li = document.createElement("li");
  var inputValue1 = document.getElementById("myInput").value;
  var inputValue2 = document.getElementById("myInputContent").value;
  var inputValue = 'Title:  ' + inputValue1 + ' | Content:' + inputValue2;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if ((inputValue1 === "") && (inputValue2 === "")) {
    // alert("You must write something in at least one input!");
    document.getElementById("demo").innerHTML = "Please write something!";
  } else {
    document.getElementById("myUL").appendChild(li);
    document.getElementById("demo").innerHTML = "";
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myInputContent").value = "";
  //close button adaugat noului item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  //in progress button adaugat noului item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00AB");
  span.className = "inprogress";
  span.appendChild(txt);
  li.appendChild(span);
  //finish button adaugat noului item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u2713");
  span.className = "finish";
  span.appendChild(txt);
  li.appendChild(span);
  closeFunctionality();
  inprogressFunctionality();
  finishFunctionality();
}
closeFunctionality();
inprogressFunctionality();
finishFunctionality();