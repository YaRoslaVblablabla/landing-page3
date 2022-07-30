let btn = document.querySelector('.header__top-burger')
let popup = document.querySelector('.popup')
let menu = document.querySelector('.header__bottom-list').cloneNode(1)
let body = document.querySelector('body')
let popTop = document.querySelector('.popup__top')

btn.addEventListener('click', function(){
	popup.classList.toggle('popup-open')
	renderPopup()
	body.classList.toggle('noScroll')
})

function renderPopup(){
	popup.appendChild(menu)
}