const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
removeShow();
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

tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

$('#myList a').on('click', function (e) {
    e.preventDefault()
    $('#myList a[href="#profile"]').tab('show')
    $(this).tab('show')
  })