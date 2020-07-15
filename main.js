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
const myNodelist = document.getElementsByClassName("color-c");
for (let i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
function myEdit() {
  for (i = 0; i < myNodelist.length; i++) {
    const edit = document.createElement("SPAN");
    const eText = document.createTextNode("\u270E");
    edit.className = "edit";
    edit.appendChild(eText);
    myNodelist[i].appendChild(edit);
    edit.onclick = function merge() {
      let entryy = this.parentElement.childNodes[0];
      let res = entryy.data.split(" | ");
      let TitleText = res[0].substring(7);
      let n = res[1].indexOf("Content: ");
      let ContentText = res[1].substring(n + 9);
      console.log(TitleText + '\n' + ContentText);
      editt = document.getElementById("editt");
      document.getElementById("myInput").value = TitleText;
      document.getElementById("myInputContent").value = ContentText;

      editt.onclick = function () {
        let inputValue01 = document.getElementById("myInput").value;
        let inputValue02 = document.getElementById("myInputContent").value;
        if (inputValue01 == "") {
          document.getElementById("demo").innerHTML = "Please write a title!";
        }
        else {
          document.getElementById("demo").innerHTML = "";
          entryy.data = "Title: " + inputValue01 + " | Content: " + inputValue02;
        }
      }
      //era o alta versiune pentru edit
      //    var p = prompt("Edit your title", TitleText);
      //   {
      //   if(TitleText == ""){
      //   window.alert("Your title can't be empty");
      //   this.parentElement.childNodes[0].data="";
      //   var p = prompt("Edit your title", TitleText);
      //   this.parentElement.childNodes[0].data="Title: " +p;
      //   }
      //   else{
      //     this.parentElement.childNodes[0].data="Title: " +p;
      //   }
      // }
      //    var p = prompt("Edit your content", ContentText);
      //     this.parentElement.childNodes[0].data+=" | Content:" + p;
    }
  }
}
// functionalitatea butonului close
function closeFunctionality() {
  const close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
//adaugarea butonului in progress fiecarui item existent
let inprogress = document.getElementsByClassName("inprogress");
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00AB");
  span.className = "inprogress";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//functionalitatea butonului "in progress"
function inprogressFunctionality() {
  let inprog = document.getElementsByClassName("inprogress");
  for (i = 0; i < inprog.length; i++) {
    inprog[i].onclick = function () {
      let div = this.parentElement;
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
  }
}
//functionalitatea butonului finish
function finishFunctionality() {
  let finish = document.getElementsByClassName("finish");
  for (i = 0; i < finish.length; i++) {
    finish[i].onclick = function () {
      let div = this.parentElement;
      //doar daca a fost in progres inainte
      if (div.style.backgroundColor == "yellow") {
        div.style.backgroundColor = "rgb(136, 136, 136)";
        div.classList.add("checked");
      }
    };
  }
}

// creeaza un nou nod in lista la apasarea butonului add
function newElement() {
  const li = document.createElement("li");
  let inputValue1 = document.getElementById("myInput").value;
  let inputValue2 = document.getElementById("myInputContent").value;
  const title = "Title";
  const content="Content";
  let inputValue = `${title}: ` + inputValue1 + ` | ${content}: ` + inputValue2;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue1 === "") {
    // alert("You must write something in at least one input!");
    document.getElementById("demo").innerHTML = "Please write a title!";
  } else {
    document.getElementById("myUL").appendChild(li);
    document.getElementById("demo").innerHTML = "";
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myInputContent").value = "";
  //close button adaugat noului item
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  //in progress button adaugat noului item
  const span2 = document.createElement("SPAN");
  const txt2 = document.createTextNode("\u00AB");
  span2.className = "inprogress";
  span2.appendChild(txt2);
  li.appendChild(span2);
  closeFunctionality();
  inprogressFunctionality();
  myEdit();
}
closeFunctionality();
inprogressFunctionality();
finishFunctionality();
myEdit();
$('#myUL').sortable();
const signIn = document.getElementById("signIn");


  signIn.onclick = function () {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("inputEmail").value;
    let subjects = document.getElementById("subjects").value;
    let message = document.getElementById("message").value;
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const messageFormat=/^.{10,}$/;
    const info = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subjects: subjects,
      message: message,
      // print: function() {
      //   alert(this.firstName);
      // }
    };
    // var n = email.indexOf("@"); 
    const firstN="First name";
    const lastN="Last name";
    const emaill="Email";
    const subjectss="Subjects"
    const messagee="Message"
    if(email.match(mailFormat) && message.match(messageFormat))
    {
      document.getElementById("informations").innerHTML= `{&quot${firstN}&quot: ` + info.firstName+ "<br />"+ `&quot${lastN}&quot: ` + info.lastName+
      "<br />"+ `&quot${emaill}&quot: ` + info.email+"<br />"+ `&quot${subjectss}&quot: ` + info.subjects+ "<br />"+`&quot${messagee}&quot: ` + info.message+ "<br />"+`}`;
      // firstName+'   '+ lastName+'   '+email+'   '+subjects + ' ' + message;
      document.getElementById("firstName").value="";
      document.getElementById("lastName").value="";
      document.getElementById("inputEmail").value="";
      document.getElementById("subjects").value="";
      document.getElementById("message").value="";
    }   
    else if (email.match(mailFormat)){
      document.getElementById("informations").innerHTML="Mesajul dvs trebuie sa contina cel putin 10 caractere";
    }
    else if (message.match(messageFormat)){
      document.getElementById("informations").innerHTML="Email-ul este invalid!";
    }
    else{
      document.getElementById("informations").innerHTML="Mesajul dvs trebuie sa contina 10 caractere, iar mailul trebuie sa aiba format corespunzator"
    }
  }
  