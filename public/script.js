
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
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Получаем данные из формы
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  // Проверяем, заполнены ли поля
  if (!name || !phone) {
    alert('Пожалуйста, заполните все поля!');
    return;
  }

  // Проверяем, есть ли уже пользователь в LocalStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Проверяем, не зарегистрирован ли уже такой пользователь
  const userExists = users.some(user => user.name === name && user.phone === phone);
  if (userExists) {
    alert('Пользователь с таким именем и телефоном уже зарегистрирован!');
    return;
  }

  // Добавляем нового пользователя
  users.push({ name, phone });
  localStorage.setItem('users', JSON.stringify(users));

  // Очищаем поля формы
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';

  // Скрываем модальное окно
  document.getElementById('registrationModal').style.display = 'none';

  // Уведомляем пользователя
  alert(`Регистрация успешна!\nИмя: ${name}\nТелефон: ${phone}`);
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