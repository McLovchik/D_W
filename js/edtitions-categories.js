let btn = document.querySelector(".header-four-categories");
let checklist = document.querySelector(".editions__categories-list");
btn.addEventListener("click", function() {
  checklist.classList.toggle("checklist__active");
  document.querySelectorAll(".editions__categories-item").forEach(el => {
    el.classList.toggle("active");
    let checkbox = el.querySelector(".editions__checkbox");
 
    if (checkbox.checked) {
      el.classList.add("active");
    } 
  })
});

document.querySelectorAll(".editions__categories-item").forEach(el => {
  el.addEventListener("click", function() {
    let label = this;
    if (!checklist.classList.contains("checklist__active")) {
      label.classList.remove("active");
    } 
  });
})