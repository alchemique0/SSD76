
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



// Модальное окно2
// Открытие модального окна
document.getElementById('openModalBtn').addEventListener('click', function() {
  document.getElementById('registrationModal').style.display = 'block';
});

// Закрытие модального окна
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('registrationModal').style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('registrationModal')) {
    document.getElementById('registrationModal').style.display = 'none';
  }
});

// Обработка формы регистрации
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  alert(`Регистрация успешна!\nИмя: ${name}\nТелефон: ${phone}`);
  document.getElementById('registrationModal').style.display = 'none';
});

// Обработка кнопок социальных сетей
document.querySelector('.social-btn.vk').addEventListener('click', function() {
  alert('Вход через ВКонтакте');
  // Здесь можно добавить перенаправление на авторизацию через ВК
});

document.querySelector('.social-btn.google').addEventListener('click', function() {
  alert('Вход через Google');
  // Здесь можно добавить перенаправление на авторизацию через Google
});

document.querySelector('.social-btn.yandex').addEventListener('click', function() {
  alert('Вход через Яндекс');
  // Здесь можно добавить перенаправление на авторизацию через Яндекс
});
// Модальное окно2 конец