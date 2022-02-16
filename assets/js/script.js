let btn = document.querySelector(".search-box__btn");
let input = document.querySelector(".search-box__input");
let searchBox = document.querySelector(".search-box");

btn.addEventListener("click", function () {
	this.parentElement.classList.toggle("open");
	this.previousElementSibling.focus();
});
