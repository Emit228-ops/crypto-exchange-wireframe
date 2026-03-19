// Интерактивность для шаблона криптообменника

document.addEventListener('DOMContentLoaded', function() {

    // 1. Выдвижные блоки условий обмена
    const toggleButtons = document.querySelectorAll('.condition-badge[data-toggle]');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const wrapper = this.closest('.condition-badge-wrapper');
            const isOpen = wrapper.classList.contains('open');

            // Закрываем все остальные
            document.querySelectorAll('.condition-badge-wrapper.open').forEach(item => {
                if (item !== wrapper) {
                    item.classList.remove('open');
                }
            });

            // Переключаем текущий
            wrapper.classList.toggle('open');
        });
    });

    // 2. Переключение типа курса (фиксированный / плавающий)
    const rateTypeButtons = document.querySelectorAll('.rate-type-btn');
    const rateBadgeText = document.getElementById('rate-type-badge-text');
    const rateBadgeDescription = document.getElementById('rate-type-badge-description');

    const rateTypeTexts = {
        floating: {
            badge: 'По подтверждениям',
            description: 'Курс не фиксируется и фиксируется только в момент получения подтверждений в блокчейн-сети. Это обеспечивает актуальность курса на момент завершения транзакции.'
        },
        fixed: {
            badge: 'Фиксированный',
            description: 'Курс фиксируется на момент создания заявки и изменяется только в случае, если биржевой курс изменится более чем на ±1.5%. Это защищает вас от резких колебаний рынка.'
        }
    };

    rateTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем active у всех кнопок
            rateTypeButtons.forEach(btn => btn.classList.remove('active'));

            // Добавляем active к нажатой кнопке
            this.classList.add('active');

            // Получаем тип курса
            const rateType = this.getAttribute('data-rate-type');

            // Обновляем текст в бейдже
            if (rateBadgeText && rateTypeTexts[rateType]) {
                rateBadgeText.textContent = rateTypeTexts[rateType].badge;
            }

            // Обновляем описание в бейдже
            if (rateBadgeDescription && rateTypeTexts[rateType]) {
                rateBadgeDescription.textContent = rateTypeTexts[rateType].description;
            }
        });
    });

    // 3. Переключение темы (светлая/темная)
    const themeToggle = document.getElementById('theme-toggle');
    const themeLightIcon = document.querySelector('.theme-icon-light');
    const themeDarkIcon = document.querySelector('.theme-icon-dark');

    // Проверяем сохраненную тему в localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeLightIcon.style.display = 'none';
            themeDarkIcon.style.display = 'block';
        } else {
            themeLightIcon.style.display = 'block';
            themeDarkIcon.style.display = 'none';
        }
    }

    // 4. Переключение языка (RU/EN)
    const langButtons = document.querySelectorAll('.lang-btn');

    // Проверяем сохраненный язык в localStorage
    const savedLang = localStorage.getItem('language') || 'ru';
    updateLanguage(savedLang);

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');

            // Убираем active у всех кнопок
            langButtons.forEach(btn => btn.classList.remove('active'));

            // Добавляем active к нажатой кнопке
            this.classList.add('active');

            // Сохраняем выбор
            localStorage.setItem('language', lang);
            updateLanguage(lang);
        });
    });

    function updateLanguage(lang) {
        // Обновляем активную кнопку
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Здесь можно добавить логику смены языка на сайте
        document.documentElement.setAttribute('lang', lang);
        console.log('Language changed to:', lang);
    }

    // 5. Выпадающее меню "Обмен" в навигации
    const exchangeDropdown = document.querySelector('.nav-dropdown');
    const exchangeToggle = document.getElementById('exchange-dropdown');

    if (exchangeToggle) {
        // Открытие/закрытие dropdown по клику
        exchangeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            exchangeDropdown.classList.toggle('open');
        });

        // Закрытие dropdown при клике вне его
        document.addEventListener('click', function(e) {
            if (!exchangeDropdown.contains(e.target)) {
                exchangeDropdown.classList.remove('open');
            }
        });

        // Предотвращение закрытия при клике внутри dropdown
        const dropdownMenu = document.getElementById('exchange-dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }

    // 6. Кнопка переключения направления обмена (опционально)
    /*
    const switchBtn = document.querySelector('.switch-btn');

    if (switchBtn) {
        switchBtn.addEventListener('click', function() {
            // Здесь логика переключения валют местами
            console.log('Switch currencies');
        });
    }
    */

    // 7. Переключение типа карты на странице верификации
    const cardTypeButtons = document.querySelectorAll('.card-type-btn');
    const physicalRequirements = document.getElementById('physical-requirements');
    const virtualRequirements = document.getElementById('virtual-requirements');

    cardTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем active у всех кнопок
            cardTypeButtons.forEach(btn => btn.classList.remove('active'));

            // Добавляем active к нажатой кнопке
            this.classList.add('active');

            // Получаем тип карты
            const cardType = this.getAttribute('data-card-type');

            // Переключаем требования
            if (cardType === 'physical') {
                if (physicalRequirements) physicalRequirements.style.display = 'block';
                if (virtualRequirements) virtualRequirements.style.display = 'none';
            } else if (cardType === 'virtual') {
                if (physicalRequirements) physicalRequirements.style.display = 'none';
                if (virtualRequirements) virtualRequirements.style.display = 'block';
            }
        });
    });

});
