const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  // removeBorder();
  removeShow();
  // this.classList.add('');
  //imi aduce itemul din DOM
  console.log(this.id);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //arata show class
  tabContentItem.classList.add("show");
}
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// document.getElementById("faq").addEventListener("click", removeShow(),tabContentItem.classList.add('show'));
