
// Для аккордеона

document.getElementById('menuToggle').addEventListener('click', function() {
  var sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.toggle('active');
});

// Олдовая карусель

const slides = [
{
 title: "Nintendo Switch",
 text: "Современные приставки Nintendo Switch: Oled, Lite, Rev1, Rev2",
},
{
 title: "SSD76",
 text: "Быстрые и надежные SSD76 диски ускорят ваш ноутбук",
},
{
 title: "Лазерная гравировка",
 text: "Лазерная гравировка на флешках и учках индивидуальный подарок",
},
];

let currentIndex = 0;

function setSlide(index) {
const titleElement = document.getElementById("carousel-title");
const textElement = document.getElementById("carousel-text");
const buttons = document.querySelectorAll(".carousel-buttons button");

// Меняем текст
titleElement.textContent = slides[index].title;
textElement.textContent = slides[index].text;

// Обновляем активную кнопку
buttons.forEach((button, i) => {
 button.classList.toggle("active", i === index);
});

currentIndex = index;
}

// Автоматическая прокрутка (по желанию)
setInterval(() => {
currentIndex = (currentIndex + 1) % slides.length;
setSlide(currentIndex);
}, 5000);



// Виджет Пишем анимацию текста
const TextToType = "Привет, скоро тут будет промокод";
const typeSpeed = 70;
function typeWriteEffect(text, speed, index = 0) {
const typingElement = document.getElementById('typingText');
if (index < text.length) {
typingElement.innerHTML +=text.charAt (index);

setTimeout (() => typeWriteEffect (text, speed, index + 1), 
speed)  ;
}
}

document.addEventListener ('DOMContentLoaded', () => {
typeWriteEffect (TextToType, typeSpeed) ;
});
