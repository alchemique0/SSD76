
// Функция для открытия модального окна
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Для аккордеона

document.getElementById('menuToggle').addEventListener('click', function() {
  var sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.toggle('active');
});

// Олдовая карусель

const slides = [
{
 title: "Ноутбуки",
 text: "Обслуживание, чистка, установка программ",
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



