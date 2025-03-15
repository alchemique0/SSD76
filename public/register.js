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
  

// Переход по ссылке в личный кабинет
function redirectToDashboard() {

    // window.location.href = 'private.html';
  }

// Обработка формы регистрации
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Получаем данные из формы
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  // Сохраняем переменную в LocalStorage
localStorage.setItem('name', name);
localStorage.setItem('phone', phone);

localStorage.getItem('name');

console.log('name');



  // Уведомляем пользователя
  alert(`Регистрация успешна!\nИмя: ${name}\nТелефон: ${phone}`);
});

function redirectToDashboard1() {
    window.location.href = './public/private.html';
}

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





