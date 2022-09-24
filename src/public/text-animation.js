//add hidden class for necessary elements
const elementsToHide = ["h1", "h2", "h3", ".text"];
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  elementsToHide.forEach((element) => {
    const findedElement = section.querySelector(element);
    if (findedElement) {
      findedElement.classList.add("hidden");
    }
  });
});

//add observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});
