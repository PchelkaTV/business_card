document.addEventListener("DOMContentLoaded", () => {
  // Переключение темы и языка
  const themeToggle = document.getElementById("theme-toggle");
  const langButtons = document.querySelectorAll(".lang-btn");
  let currentLang = localStorage.getItem("lang") || navigator.language.slice(0, 2) || "ru";
  // Инициализация при загрузке страницы
  async function loadLanguage(lang) {
    try {
      const response = await fetch(`locales/${lang}.json`);
      const translations = await response.json();

      document.querySelectorAll("[data-lang-key]").forEach((elem) => {
        const key = elem.dataset.langKey;
        elem.textContent = translations[key] || key;
      });

      localStorage.setItem("lang", lang);
      applyThemeText(translations);
      displayReleases(translations);
    } catch (error) {
      console.error("Error loading language:", error);
    }
  }

  function applyThemeText(translations) {
    themeToggle.textContent = document.body.classList.contains("light-theme")
      ? translations["theme-toggle-light"]
      : translations["theme-toggle-dark"];
  }

  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
    loadLanguage(currentLang);
  });

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      langButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      loadLanguage(currentLang);
    });
  });
  // Блок с релизами
  const releases = [
    {
      type: "release",
      image: "img/my_plastic_existence.jpg",
      link: "https://www.youtube.com/watch?v=PCRK__O_WEU",
      name: "my plastic existence",
    },
    {
      type: "placeholder",
    },
  ];

  const releasesList = document.getElementById("releases-list");

  function displayReleases(translations) {
    releasesList.innerHTML = "";
    releases.forEach((release) => {
      const releaseItem = document.createElement("div");
      releaseItem.classList.add("release-item");

      if (release.type === "release") {
        releaseItem.innerHTML = `
          <img src="${release.image}" alt="Обложка трека" class="release-cover">
          <div class="release-info">
            <span data-lang-key="release-track-name" class="release-track-name" data-href="${release.link}">${release.name}</span>
          </div>
        `;
      } else {
        releaseItem.innerHTML = `
          <div class="release-info">
            <span data-lang-key="release-next-text" class="release-next-text">
              ${translations["release-next-text"] || "Release coming soon"}
            </span>
          </div>
        `;
      }
      releasesList.appendChild(releaseItem);
    });
  }

  document.querySelectorAll(".project-text-button, .release-track-name").forEach((button) => {
    button.addEventListener("click", () => {
      const href = button.dataset.href;
      if (href !== "#") window.open(href, "_blank");
    });
  });

  loadLanguage(currentLang);
});
