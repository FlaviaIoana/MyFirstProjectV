const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
//   // removeBorder();
  removeShow();
//   // this.classList.add('');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  console.log(this.id);
  tabContentItem.classList.add("show");
}
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
// document.getElementById("faq-nav").addEventListener("click", removeShow(),tabContentItem.classList.add('show'));
