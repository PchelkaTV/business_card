document.addEventListener('DOMContentLoaded', () => {
    // Переключение тем
    const themeToggle = document.getElementById('theme-toggle');
    const translations = {
      ru: {
          "intro-title": "Привет, я Слава!",
          "intro-text": "Здесь вы найдете информацию обо мне, моих проектах и увлечениях.",
          "about-title": "Обо мне",
          "about-text": "Привет! Ну как вы уже поняли я Вячеслав, мне 16 лет и это что-то типо моей визитки. Я увлекаюсь программированием, музыкой, фотографией. Веду блог в Telegram, где делюсь своими мыслями и фотками, также проектами. Мы с другом пытаемся стать музыкальной группой, и мы активно развиваемся.",
          "projects-title": "Мои проекты: ",
          "project-blog-title": "Мой блог",
          "project-tg-blog-text": "Telegram канал PchelLive",
          "project-instagram-text": "Instagram",
          "project-tg-chat-text": "Чат PchelLive",
          "project-band-title": "Музыкальная группа: ",
          "project-band-youtube-text": "YouTube ",
          "project-band-tg-text": "Telegram канал группы",
          "project-band-chat-text": "Чат подписчиков",
          "project-band-streaming-text": "Стриминговые сервисы",
          "project-band-streaming-info": "Ведется работа над договором с дистрибьютером",
          "project-streams-title": "Стримы: ",
          "project-twitch-text": "Twitch",
          "project-youtube-text": "YouTube канал",
          "project-other-title": "Другие проекты: ",
          "project-dnd-utils-text": "Утилита для помощи с играми D&D",
          "project-game-text": "Моя игра: NoTexturePlatformer",
          "project-game-info": "В разработке",
          "contact-title": "Связаться со мной: ",
          "contact-tg-offer-text": "Предложка ТГК канала",
          "contact-email-text": "Электронная почта",
          "footer-text": "&copy; 2023 Slava. Все права защищены.",
          "theme-toggle-dark": "Темная тема",
          "theme-toggle-light": "Светлая тема",
          "releases-title": "Последние релизы нашей группы: ",
          "release-track-name": "my plastic existence",
          "release-next-text": "Релиз на подходе",
          "no-releases-message": "Увы, пока релизов нет("
      },
      en: {
          "intro-title": "Hello, I'm Slava!",
          "intro-text": "Here you will find information about me, my projects, and hobbies.",
          "about-title": "About Me",
          "about-text": "Hi! As you may have already guessed, I'm Vyacheslav, I'm 16 years old, and this is sort of my business card. I'm into programming, music, and photography. I run a blog on Telegram where I share my thoughts, photos, and projects. My friend and I are trying to become a music band, and we are actively developing.",
          "projects-title": "My Projects:",
          "project-blog-title": "My Blog:",
          "project-tg-blog-text": "Telegram Channel PchelLive",
          "project-instagram-text": "Instagram",
          "project-tg-chat-text": "PchelLive Chat",
          "project-band-title": "Band: ",
          "project-band-youtube-text": "YouTube Channel",
          "project-band-tg-text": "Band's Telegram Channel",
          "project-band-chat-text": "Followers Chat of the Band's",
          "project-band-streaming-text": "Streaming Services",
          "project-band-streaming-info": "Working on a contract with a distributor",
          "project-streams-title": "Streams:",
          "project-twitch-text": "Twitch",
          "project-youtube-text": "YouTube Channel",
          "project-other-title": "Other Projects:",
          "project-dnd-utils-text": "Utility for D&D Games",
          "project-game-text": "My Game: NoTexturePlatformer",
          "project-game-info": "In development",
          "contact-title": "Contact Me:",
          "contact-tg-offer-text": "Telegram Channel Suggestion Box",
          "contact-email-text": "Email",
          "footer-text": "&copy; 2023 Slava. All rights reserved.",
          "theme-toggle-dark": "Dark Theme",
          "theme-toggle-light": "Light Theme",
          "releases-title": "Our Band's Latest Releases:",
          "release-track-name": "my plastic existence",
          "release-next-text": "Release coming soon",
          "no-releases-message": "Sorry, there are no releases yet"
      },
      sr: {
          "intro-title": "Здраво, ја сам Слава!",
          "intro-text": "Овде ћете пронаћи информације о мени, мојим пројектима и хобијима.",
          "about-title": "О мени: ",
          "about-text": "Здраво! Као што сте вероватно већ схватили, ја сам Вјачеслав, имам 16 година и ово је нека врста моје визит карте. Бавим се програмирањем, музиком и фотографијом. Водим блог на Телеграму где делим своја размишљања, фотографије, као и пројекте. Мој друг и ја покушавамо да постанемо музичка група, и активно се развијамо.",
          "projects-title": "Моји пројекти:",
          "project-blog-title": "Мој блог:",
          "project-tg-blog-text": "Telegram Канал PchelLive",
          "project-instagram-text": "Instagram",
          "project-tg-chat-text": "Чет PchelLive",
          "project-band-title": "Музичка група:",
          "project-band-youtube-text": "YouTube Канал",
          "project-band-tg-text": "Telegram Канал групе",
          "project-band-chat-text": "Чет пратилаца канала групе",
          "project-band-streaming-text": "Стриминг сервиси",
          "project-band-streaming-info": "Ради се на уговору са дистрибутером",
          "project-streams-title": "Стримови:",
          "project-twitch-text": "Twitch",
          "project-youtube-text": "YouTube Канал",
          "project-other-title": "Остали пројекти:",
          "project-dnd-utils-text": "Алат за помоћ у D&D играма",
          "project-game-text": "Моја игра: NoTexturePlatformer",
          "project-game-info": "У развоју",
          "contact-title": "Контактирајте ме:",
          "contact-tg-offer-text": "Предлози за ТГ Канал",
          "contact-email-text": "Е-пошта",
          "footer-text": "&copy; 2023 Slava. Сва права задржана.",
          "theme-toggle-dark": "Тамна тема",
          "theme-toggle-light": "Светла тема",
          "releases-title": "Последњи альбуми наше групе:",
          "release-track-name": "my plastic existence",
          "release-next-text": "Следеће издање ускоро",
          "no-releases-message": "Нажалост, тренутно нема издања"
    }
};
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    let currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyThemeText(currentLang);
  });

  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'ru';

  // Инициализация при загрузке страницы
  applyLanguage(currentLang);

  let savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
  }

  applyThemeText(currentLang);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyLanguage(currentLang);
      localStorage.setItem('lang', currentLang);
      applyThemeText(currentLang);
    });
  });

  function applyLanguage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(elem => {
      const key = elem.dataset.langKey;
      if (translations[lang] && translations[lang][key]) {
        elem.textContent = translations[lang][key];
      }
    });
  }

  function applyThemeText(lang) {
    if (document.body.classList.contains('light-theme')) {
        themeToggle.textContent = translations[lang]["theme-toggle-light"];
    } else {
        themeToggle.textContent = translations[lang]["theme-toggle-dark"];
    }
  }

  document.querySelectorAll('.project-text-button').forEach(button => {
    button.addEventListener('click', () => {
        const href = button.dataset.href;
        if (href === "#") return;
        window.open(href, '_blank');
    });
  });

  document.querySelectorAll('.release-track-name').forEach(button => {
    button.addEventListener('click', () => {
      const href = button.dataset.href;
      if (href === "#") return;
      window.open(href, '_blank');
    });
  });

  // Блок с релизами
  const releases = [
    {
      type: 'release',
      image: 'img/my_plastic_existence.jpg',
      link: 'https://www.youtube.com/watch?v=PCRK__O_WEU',
      name: 'my plastic existence'
    },
    {
      type: 'placeholder'
    }
  ];

  const releasesList = document.getElementById('releases-list');

  function displayReleases(releases) {
    releasesList.innerHTML = '';

    releases.forEach(release => {
      if (release.type === 'release') {
        const releaseItem = document.createElement('div');
        releaseItem.classList.add('release-item');
        releaseItem.innerHTML = `
          <img src="${release.image}" alt="Обложка трека" class="release-cover">
          <div class="release-info">
            <span data-lang-key="release-track-name" class="release-track-name" data-href="${release.link}">${release.name}</span>
          </div>
        `;
        releasesList.appendChild(releaseItem);
      } else if (release.type === 'placeholder') {
        const placeholderItem = document.createElement('div');
        placeholderItem.classList.add('release-item');
        placeholderItem.innerHTML = `
          <div class="release-info">
            <span data-lang-key="release-next-text" class="release-next-text"></span>
          </div>
        `;
        releasesList.appendChild(placeholderItem);
      }
    });
  }

  displayReleases(releases);
});