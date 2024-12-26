
// Выбираем элементы
const btn = document.querySelector("#Thema_HTML_Input");
const Thema_HTML_div_label = document.querySelector("#Thema_HTML_div_label");

// Проверяем и восстанавливаем тему из localStorage
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
  Thema_HTML_div_label.innerHTML = `<i class="fas fa-sun"></i>`;
} else {
  Thema_HTML_div_label.innerHTML = `<i class="fas fa-moon"></i>`;
}

// Отслеживаем щелчок по кнопке
btn.addEventListener("click", () => {
  // Переключаем класс темы
  const isDarkTheme = document.body.classList.toggle("dark-theme");

  // Обновляем иконку в зависимости от темы
  if (isDarkTheme) {
    Thema_HTML_div_label.innerHTML = `<i class="fas fa-sun"></i>`;
    localStorage.setItem("theme", "dark");
  } else {
    Thema_HTML_div_label.innerHTML = `<i class="fas fa-moon"></i>`;
    localStorage.setItem("theme", "light");
  }
});

// -------------------------------------------------------------------------------

// Логика для изменения масштабирования изображений
const About_info_img = document.querySelector(".About_info_img");
const About_info_img_id = About_info_img.querySelectorAll(".About_info_img_id");

function img_scale(el) {
  el.classList.toggle("active");
}

About_info_img_id.forEach((el) => {
  el.addEventListener("click", () => img_scale(el));
});