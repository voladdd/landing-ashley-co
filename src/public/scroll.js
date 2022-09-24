const content = document.querySelector(".content");

content.onscroll = function (e) {
  const scrollUp = this.oldScroll > this.scrollTop;
  if (scrollUp && window.scrollY > 0) {
    window.scroll(0, 0);
  }
  this.oldScroll = this.scrollTop;
};
