const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const inProgressItems = document.querySelectorAll(".color-c");
removeShow();
removeProgress();
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

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
//create an "in progress" button
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00AB");
  span.className = "in-progress";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
function removeProgress() {
  inProgressItems.forEach((item) => item.classList.remove("in-progress"));
}
var closee = document.getElementsByClassName("in-progress");
var i;
for (i = 0; i < closee.length; i++) {
  removeProgress();
  closee[i].onclick = function () {
    removeProgress();
    var div = this.parentElement;
    console.log(div);
    div.style.backgroundColor = "yellow";
    // div.classList.add("color-c");
    // document.getElementById("div").style.background-color = "yellow";
  };
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",   
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue1= document.getElementById("myInput").value;
  var inputValue2= document.getElementById("myInputContent").value;
  var inputValue ='Title:  ' +  inputValue1 + ' | Content:' +  inputValue2;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if ((inputValue1 === "") && (inputValue2 === "")) {
    alert("You must write something in at least one input!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myInputContent").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
