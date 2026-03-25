# Структура проекта

## Файлы

| Файл | Тип |
|------|-----|
| index.html | Главная страница (крипта-крипта) |
| index-fiat.html | Главная страница (фиат-крипта) |
| exchange-order.html | Оформление заявки |
| exchange-card-verification.html | Верификация карты |
| exchange-identity-verification.html | Верификация личности |
| exchange-payment.html | Оплата заявки |
| exchange-processing.html | Обработка заявки |
| exchange-error.html | Ошибка обмена |
| exchange-complete.html | Обмен завершён |
| dashboard.html | Личный кабинет |
| faq.html | FAQ |
| about.html | О нас |
| contacts.html | Контакты |
| how-it-works.html | Как совершить обмен |
| terms.html | Правила использования |
| aml.html | AML регламент |
| privacy.html | Политика конфиденциальности |
| blog.html | Блог (список SEO-статей) |
| blog-article.html | Шаблон статьи блога |
| exchange-order-fiat.html | Оформление заявки (фиат) |
| exchange-payment-fiat.html | Оплата заявки (фиат) |
| index-cash.html | Главная страница (наличный обмен) |
| exchange-order-cash.html | Оформление заявки (наличные) |
| index-dex.html | Главная страница DEX (децентрализованный обмен) |
| aml-check.html | AML проверка (форма) |
| aml-check-payment.html | Оплата AML проверки (крипта / карта / баланс) |
| aml-check-result.html | Результаты AML проверки |
| styles.css | Стили и CSS-переменные |
| script.js | Интерактивность |

## HTML структура: index.html

```
HEADER
├── Logo
├── Navigation
│   ├── Обмен (Dropdown)
│   │   ├── Крипта на крипту
│   │   ├── Фиат на крипту / Крипта на фиат
│   │   ├── Наличные
│   │   └── DEX
│   ├── Проверить AML
│   ├── Как совершить обмен
│   ├── О нас
│   ├── FAQ
│   └── Контакты
├── Settings (Theme Toggle, Language Toggle)
└── Actions (Войти, Регистрация)

HERO SECTION
├── Hero Text (заголовок, подзаголовок)
├── Conditions Badges (Фиксация курса, AML)
└── EXCHANGE FORM
    ├── Rate Type Selector (Плавающий / Фиксированный)
    ├── Send Field (сумма, валюта, сеть, лимиты)
    ├── Switch Button
    ├── Receive Field (сумма, валюта, сеть, лимиты)
    ├── Confirmations Info
    ├── Agreement Checkbox
    ├── Rate Refresh (таймер обновления курса, 60 сек)
    └── Submit Button

SEO TEXT (заголовок направления, 2 абзаца)

POPULAR DIRECTIONS (6 карточек с парами обмена)

EXCHANGE STEPS (4 шага с иконками)

REVIEWS (4 карточки отзывов)

FOOTER
├── Footer Columns (4 колонки)
├── Partners Block (6 логотипов)
├── SEO Links (Buy Crypto, Exchange, Exchange Pairs)
└── Copyright
```

## HTML структура: index-fiat.html

```
HEADER (идентичен главной)

HERO SECTION
├── Hero Text (заголовок, подзаголовок — покупка/продажа)
├── Conditions Badges
│   ├── Фиксация курса (expandable)
│   ├── Верификация (expandable)
│   └── Способы оплаты (expandable)
└── EXCHANGE FORM (FIAT)
    ├── Direction Tabs (Купить / Продать)
    ├── Send Field (фиат: сумма, валюта ₽ RUB, способ оплаты)
    ├── Switch Button
    ├── Receive Field (крипта: сумма, BTC, сеть)
    ├── Verification Notice
    ├── Agreement Checkbox
    ├── Rate Refresh
    └── Submit Button ("Купить BTC")

SEO TEXT (покупка/продажа крипты за рубли)

POPULAR DIRECTIONS FIAT (6 карточек: RUB→BTC, RUB→USDT, RUB→ETH, BTC→RUB, USDT→RUB, ETH→RUB)

EXCHANGE STEPS FIAT (4 шага: валюта, реквизиты, верификация, получение)

REVIEWS (4 карточки отзывов о фиат-обменах)

FOOTER
├── Footer Columns (4 колонки)
├── Partners Block (6 логотипов)
├── SEO Links (Купить за рубли, Продать за рубли, Другие валюты)
└── Copyright
```

## HTML структура: index-dex.html

```
HEADER (кнопка "Подключить кошелек" вместо Войти/Регистрация)

HERO SECTION
├── Hero Text (заголовок, подзаголовок — децентрализованный обмен)
├── Conditions Badges
│   ├── Тип обмена — Децентрализованный (expandable)
│   ├── Верификация — Не требуется (expandable)
│   └── Сети — Мультисеть (expandable)
└── LI.FI WIDGET
    ├── Widget Header (заголовок "Swap")
    └── Widget Container (placeholder для виджета li.fi)

SEO TEXT (DEX обмен, агрегатор, поддерживаемые сети)

EXCHANGE STEPS DEX (4 шага: кошелек, токены, Approve, Swap)

REVIEWS (4 карточки отзывов о DEX обменах)

FOOTER
├── Footer Columns (4 колонки)
├── Partners Block (6 логотипов)
├── SEO Links (Swap Ethereum, Swap BNB Chain, Swap L2 Networks)
└── Copyright
```

## HTML структура: exchange-order.html

```
HEADER (идентичен главной)

STEPS INDICATOR (5 шагов, шаг 2 активен)

ORDER LAYOUT (две колонки)
├── ORDER FORM (левая колонка)
│   └── ORDER CARD
│       ├── Заголовок: "Данные для обмена"
│       └── Форма
│           ├── Адрес кошелька (required)
│           ├── MEMO / Тег (optional, чекбокс "не требуется")
│           ├── Email (required)
│           ├── Telegram (optional)
│           ├── Промокод (optional, кнопка "Применить")
│           ├── Agreement Checkbox
│           └── Кнопка "Создать заявку на обмен"
│
└── ORDER DETAILS (правая колонка)
    └── ORDER CARD
        ├── Заголовок: "Детали заявки"
        ├── Rate Refresh (таймер обновления курса, 60 сек)
        ├── Exchange Direction (BTC → USDT)
        ├── Order Info (курс, сети, подтверждения, сумма)
        └── Warning Box

FOOTER (идентичен главной)
```

## HTML структура: exchange-order-fiat.html

```
HEADER (идентичен главной)

STEPS INDICATOR (6 шагов — фиат поток)
├── Выбор валют [completed]
├── Ввод данных [active]
├── Верификация
├── Оплата
├── Обработка
└── Завершено

ORDER LAYOUT — ФИАТ → КРИПТА
├── Order Form (Fiat → Crypto)
│   ├── Bank Card Details (списание)
│   │   ├── Card Number (с иконкой карты)
│   │   ├── Card Holder Name
│   │   └── Bank Select
│   ├── Crypto Wallet Address
│   ├── MEMO
│   ├── Email
│   ├── Telegram
│   ├── Promo Code
│   ├── Agreement Checkbox
│   └── Submit Button
└── Order Details
    ├── Rate Refresh (таймер 60 сек)
    ├── Exchange Direction (RUB → BTC, иконка ₽)
    ├── Order Info (курс, способ оплаты, комиссия, сумма)
    ├── Warning Box (верификация)
    └── Info Message (этап верификации)

ORDER LAYOUT — КРИПТА → ФИАТ
├── Order Form (Crypto → Fiat)
│   ├── Bank Card Details (зачисление)
│   │   ├── Card Number
│   │   ├── Card Holder Name
│   │   └── Bank Select
│   ├── Email
│   ├── Telegram
│   ├── Promo Code
│   ├── Agreement Checkbox
│   └── Submit Button
└── Order Details
    ├── Rate Refresh
    ├── Exchange Direction (BTC → RUB)
    ├── Order Info (курс, способ получения, сумма)
    ├── Warning Box
    └── Info Message

FOOTER (идентичен главной)
```

## HTML структура: index-cash.html

```
HEADER (идентичен главной, "Наличные" активен в dropdown)

HERO SECTION
├── Hero Text
│   ├── Заголовок: "Обмен криптовалюты за наличные"
│   ├── Подзаголовок
│   └── Conditions Badges
│       ├── Фиксация курса (при бронировании)
│       ├── Верификация (требуется паспорт)
│       └── Минимальная сумма (зависит от города)
├── Exchange Form (Cash)
│   ├── Form Title: "Обмен за наличные"
│   ├── Direction Tabs (Купить / Продать)
│   ├── Send Field (наличные RUB, выбор города)
│   ├── Switch Button
│   ├── Receive Field (крипта BTC, выбор сети)
│   ├── Agreement Checkbox
│   ├── Rate Refresh (таймер 60 сек)
│   └── Submit Button ("Купить BTC за наличные")

SEO TEXT — текст о наличном обмене

POPULAR DIRECTIONS (CASH) — 6 карточек
├── Наличные → BTC
├── Наличные → USDT
├── Наличные → ETH
├── BTC → Наличные
├── USDT → Наличные
└── ETH → Наличные

EXCHANGE STEPS (CASH) — 4 шага
├── Выберите валюту и город
├── Забронируйте визит
├── Посетите офис
└── Получите средства

REVIEWS — 4 карточки отзывов о наличных обменах

FOOTER (идентичен главной)
├── Partners
└── SEO Links (Купить за наличные, Продать за наличные, Города обмена)
```

## HTML структура: exchange-order-cash.html

```
HEADER (идентичен главной, "Наличные" активен в dropdown)

STEPS INDICATOR (5 шагов — наличный поток)
├── Выбор валют [completed]
├── Ввод данных [active]
├── Бронирование
├── Визит в офис
└── Завершено

CASH DIRECTION TABS (Наличные → Крипта / Крипта → Наличные)

ORDER LAYOUT — НАЛИЧНЫЕ → КРИПТА
├── Order Form (Cash → Crypto)
│   ├── City Section
│   │   ├── City Select (Москва, СПб, Новосибирск, Казань, Екатеринбург)
│   │   └── Office Notice (адрес после верификации)
│   ├── Crypto Wallet Address
│   ├── MEMO
│   ├── Telegram (required)
│   ├── Email
│   ├── Promo Code
│   ├── Agreement Checkbox
│   └── Submit Button ("Забронировать визит")
└── Order Details
    ├── Rate Refresh (таймер 60 сек)
    ├── Exchange Direction (₽ Наличные → BTC)
    ├── Order Info (курс, способ оплаты, город, сумма)
    ├── Min Amount Badge (10,000 ₽)
    ├── Warning Box (наличные + паспорт)
    └── Info Message (бронирование)

ORDER LAYOUT — КРИПТА → НАЛИЧНЫЕ
├── Order Form (Crypto → Cash)
│   ├── City Section
│   │   ├── City Select
│   │   └── Office Notice (адрес после верификации)
│   ├── Telegram (required)
│   ├── Email
│   ├── Promo Code
│   ├── Agreement Checkbox
│   └── Submit Button ("Забронировать визит")
└── Order Details
    ├── Rate Refresh
    ├── Exchange Direction (BTC → ₽ Наличные)
    ├── Order Info (курс, сеть отдачи, город, сумма)
    ├── Min Amount Badge (10,000 ₽)
    ├── Warning Box (отправка крипты + визит)
    └── Info Message (выдача наличных)

FOOTER (идентичен главной)
```

## HTML структура: exchange-payment-fiat.html

```
HEADER (идентичен главной)

STEPS INDICATOR (6 шагов — фиат поток)
├── Выбор валют [completed]
├── Ввод данных [completed]
├── Верификация [completed]
├── Оплата [active]
├── Обработка
└── Завершено

PAYMENT LAYOUT — ФИАТ → КРИПТА
├── Payment Form (Fiat → Crypto)
│   ├── Payment Header (заголовок, ID заявки)
│   ├── Payment Timer
│   ├── Payment Details
│   │   ├── Recipient Card (номер карты с копированием)
│   │   ├── Recipient Bank
│   │   ├── Recipient Name
│   │   └── Payment Amount (с копированием)
│   ├── Confirm Payment Button
│   └── Warning Box
└── Order Details
    ├── Exchange Direction (RUB → BTC)
    └── Order Info (ID, курс, способ оплаты, сумма)

PAYMENT LAYOUT — КРИПТА → ФИАТ
├── Payment Form (Crypto → Fiat)
│   ├── Payment Header (заголовок, ID заявки)
│   ├── Payment Timer
│   ├── Payment Amount (с копированием)
│   ├── Payment Address (крипто-адрес с копированием)
│   ├── Network (Bitcoin)
│   ├── QR Code
│   ├── Confirm Payment Button
│   ├── Warning Box
│   └── Payout Info (зачисление на карту)
└── Order Details
    ├── Exchange Direction (BTC → RUB)
    └── Order Info (ID, курс, сеть, карта получателя, сумма)

FOOTER (идентичен главной)
```

## HTML структура: exchange-card-verification.html

```
HEADER (идентичен главной)

STEPS INDICATOR (6 шагов, шаг 3 активен)

VERIFICATION LAYOUT (по центру)
└── VERIFICATION CARD
    ├── Заголовок: "Верификация банковской карты"
    ├── Описание процесса
    ├── Card Type Selector (Физическая / Виртуальная)
    ├── Upload Area (drag & drop)
    ├── Verification Requirements (список требований)
    └── Кнопка "Продолжить к оплате"

FOOTER (идентичен главной)
```

## HTML структура: exchange-identity-verification.html

```
HEADER (идентичен главной)

STEPS INDICATOR (6 шагов, шаг 3 активен)

VERIFICATION LAYOUT (по центру)
└── VERIFICATION CARD
    ├── Заголовок: "Верификация личности"
    ├── Sumsub Block (иконка, описание)
    ├── Instruction Steps (3 шага)
    ├── Info Message (безопасность данных)
    ├── Кнопка-ссылка "Перейти к верификации"
    ├── Verification Status (ожидание)
    └── Кнопка "Продолжить к оплате" (disabled)

FOOTER (идентичен главной)
```

## HTML структура: exchange-payment.html

```
HEADER (идентичен главной)

STEPS INDICATOR (5 шагов, шаг 3 активен)

PAYMENT LAYOUT (две колонки)
├── PAYMENT FORM (левая колонка)
│   └── ORDER CARD
│       ├── Payment Header (заголовок + ID заявки)
│       ├── Payment Timer (таймер, прогресс-бар)
│       ├── Payment Amount (сумма + копирование)
│       ├── Payment Address (адрес + копирование + сеть)
│       ├── QR Code (placeholder)
│       ├── Кнопка "Я оплатил"
│       └── Warning Box
│
└── ORDER DETAILS (правая колонка)
    └── ORDER CARD
        ├── Заголовок: "Детали заявки"
        ├── Exchange Direction (BTC → USDT)
        └── Order Info (ID, курс, сети, подтверждения, сумма)

FOOTER (идентичен главной)
```

## HTML структура: exchange-processing.html

```
HEADER (идентичен главной)

STEPS INDICATOR (5 шагов, шаги 1-3 завершены, шаг 4 активен)

PROCESSING LAYOUT (по центру)
└── PROCESSING CARD
    └── ORDER CARD
        ├── Processing Header (заголовок + ID заявки)
        ├── Processing Status (спиннер, текст)
        ├── Exchange Direction (BTC → USDT)
        ├── Order Info (ID, курс, сети, адрес, сумма)
        └── Info Message ("Не закрывайте страницу")

FOOTER (идентичен главной)
```

## HTML структура: exchange-error.html

```
HEADER (идентичен главной)

STEPS INDICATOR (4 шага, шаги 1-3 завершены, шаг 4 "Ошибка" — красный, иконка X)

ERROR LAYOUT (по центру)
└── ERROR CARD
    └── ORDER CARD
        ├── Error Header (заголовок + ID заявки)
        ├── Error Status (красная иконка X, текст)
        ├── Error Reason (причина, красная рамка)
        ├── Exchange Direction (BTC → USDT)
        ├── Order Info (ID, статус "Ошибка")
        ├── Info Message (контакт поддержки)
        └── Error Actions ("Связаться с поддержкой", "Вернуться на главную")

FOOTER (идентичен главной)
```

## HTML структура: exchange-complete.html

```
HEADER (идентичен главной)

STEPS INDICATOR (5 шагов, все завершены, шаг 5 с галочкой)

COMPLETE LAYOUT (по центру)
└── COMPLETE CARD
    └── ORDER CARD
        ├── Complete Header (заголовок + ID заявки)
        ├── Complete Status (зелёная иконка галочки, текст)
        ├── Exchange Direction (BTC → USDT)
        ├── Order Info (ID, статус "Завершено", сумма)
        ├── Info Message (детали на email)
        └── Complete Actions ("Повторить обмен", "Новый обмен", "Вернуться на главную")

FOOTER (идентичен главной)
```

## HTML структура: dashboard.html

```
HEADER (залогиненное состояние: аватар + email + "Выйти")

DASHBOARD LAYOUT (sidebar + контент)
├── SIDEBAR
│   ├── User Card (email)
│   └── Navigation
│       ├── История обменов (active)
│       ├── Промокоды
│       ├── Настройки профиля
│       ├── AML проверки
│       ├── Верификация и безопасность
│       ├── Реферальная программа
│       └── Выйти
│
└── CONTENT
    ├── EXCHANGE HISTORY
    │   ├── Filter Pills (Все, Завершено, В обработке, Ошибка)
    │   ├── Table (ID, Дата, Отдал, Получил, Статус)
    │   └── Pagination
    │
    ├── PROMO CODES
    │   └── Promo Card ×3
    │       ├── Code + Copy Button
    │       ├── Usage Count + Progress Bar
    │       └── Status Badge
    │
    ├── PROFILE SETTINGS
    │   ├── Email (значение + "Изменить")
    │   ├── Telegram (значение + "Изменить")
    │   └── Password Change Form (3 поля + кнопка)
    │
    ├── AML HISTORY
    │   ├── AML Balance (счётчик проверок + кнопка "Купить проверки")
    │   ├── Table (Дата, Адрес, Валюта, Risk Score, Результат, Подробнее)
    │   └── Pagination
    │
    ├── VERIFICATION & SECURITY
    │   ├── Card Verification (статус + кнопка)
    │   ├── Identity Verification / KYC (статус + кнопка)
    │   └── 2FA Setup
    │       ├── Steps (3 шага инструкции)
    │       ├── QR Code (placeholder)
    │       ├── Secret Key + Copy
    │       └── Code Input + Confirm Button
    │
    └── REFERRAL PROGRAM
        ├── Referral Link + Copy Button
        ├── Stats (2 карточки: друзья, заработок)
        └── Withdraw Form (валюта, сеть, сумма, адрес, кнопка)

FOOTER (идентичен главной)
```

## HTML структура: about.html

```
HEADER (идентичен главной, ссылка "О нас" активна)

ABOUT LAYOUT
├── About Hero (заголовок, описание компании)
├── About Stats (4 карточки с цифрами)
│   ├── Лет на рынке
│   ├── Криптовалют
│   ├── Обменов выполнено
│   └── Среднее время обмена
└── About Advantages (6 карточек с иконками)
    ├── Быстрый обмен
    ├── Безопасность
    ├── 200+ криптовалют
    ├── Поддержка 24/7
    ├── Без скрытых комиссий
    └── Фиксация курса

FOOTER (идентичен главной)
```

## HTML структура: faq.html

```
HEADER (идентичен главной, ссылка FAQ активна)

FAQ LAYOUT
├── FAQ Header (заголовок, подзаголовок)
└── FAQ List (аккордеон, 10 вопросов)
    └── FAQ Item ×10
        ├── FAQ Question (текст + стрелка)
        └── FAQ Answer (текст, скрыт по умолчанию)

FOOTER (идентичен главной)
```

## HTML структура: contacts.html

```
HEADER (идентичен главной, ссылка "Контакты" активна)

CONTACTS LAYOUT
├── Contacts Header (заголовок, подзаголовок)
├── Contacts Cards (3 карточки)
│   ├── Telegram (@cryptoexchange_support)
│   ├── Email (support@cryptoexchange.com)
│   └── Режим работы (24/7)
└── Contact Form (форма обратной связи)
    ├── Имя
    ├── Email
    ├── Тема (select)
    ├── Сообщение (textarea)
    └── Кнопка "Отправить сообщение"

FOOTER (идентичен главной)
```

## HTML структура: how-it-works.html

```
HEADER (идентичен главной, ссылка "Как совершить обмен" активна)

HOW IT WORKS LAYOUT
├── How Header (заголовок, подзаголовок)
├── How Steps (5 шагов)
│   ├── 1. Выберите валюту
│   ├── 2. Заполните данные
│   ├── 3. Отправьте средства
│   ├── 4. Дождитесь подтверждений
│   └── 5. Получите средства
└── Info Message (примечание о верификации)

FOOTER (идентичен главной)
```

## HTML структура: terms.html / aml.html / privacy.html

```
HEADER (идентичен главной)

LEGAL LAYOUT
├── Legal Header (заголовок)
└── Legal Content
    └── Legal Section ×N
        ├── Заголовок раздела (h2)
        ├── Текст (p)
        └── Список (ul/li, опционально)

FOOTER (идентичен главной)
```

## HTML структура: blog.html

```
HEADER (идентичен главной)

BLOG LAYOUT
├── Blog Header (заголовок, подзаголовок)
├── Blog Filters (Все, Новости, Гайды, Аналитика, Безопасность)
├── BLOG GRID (сетка 3 колонки)
│   └── Blog Card ×6
│       ├── Image Placeholder
│       ├── Meta (категория, дата)
│       ├── Title
│       ├── Excerpt
│       └── "Читать далее →"
└── Pagination

FOOTER (идентичен главной)
```

## HTML структура: blog-article.html

```
HEADER (идентичен главной)

ARTICLE LAYOUT
├── Breadcrumbs (Главная / Блог / Название)
├── Article Header
│   ├── Meta (категория, дата, время чтения)
│   └── Title
├── Article Image (placeholder 1200×600)
├── Article Content
│   ├── Lead (выделенный первый абзац)
│   ├── H2 + параграфы
│   └── Callout (блок-выделение)
├── Article Tags
├── Article Navigation (← предыдущая / следующая →)
└── Article CTA (призыв к обмену + кнопка)

FOOTER (идентичен главной)
```

## HTML структура: aml-check.html

```
HEADER (идентичен главной, ссылка "Проверить AML" активна)

AML CHECK LAYOUT
├── AML Check Header (иконка, заголовок, подзаголовок)
└── AML CHECK FORM
    ├── Tabs (Адрес / Транзакция)
    ├── Network Select (dropdown)
    ├── Coin Select (dropdown)
    ├── Wallet Address + Paste Button
    ├── Email Field
    ├── Check Price ($1.50)
    └── Submit Button ("Проверить")

FOOTER (идентичен главной)
```

## HTML структура: aml-check-payment.html

```
HEADER (идентичен главной, ссылка "Проверить AML" активна)

AML CHECK PAYMENT
├── Payment Header (← Назад, заголовок)
├── QUANTITY SELECT
│   └── Packages Grid (4 пакета)
│       ├── Package Card (1 проверка — $1.50, active)
│       ├── Package Card (5 проверок — $5.00)
│       ├── Package Card (10 проверок — $8.00, "Популярный")
│       └── Package Card (25 проверок — $17.50, "-40%")
└── PAYMENT METHOD
    ├── Payment Tabs (Криптовалюта | Банковская карта | Баланс проверок)
    │
    ├── Tab: Crypto Payment
    │   ├── Payment Summary (количество + цена)
    │   ├── Payment Network (карточки: Bitcoin, Ethereum, BSC, Tron)
    │   ├── Payment Coin (карточки)
    │   ├── Payment Details
    │   │   ├── QR Code (placeholder)
    │   │   ├── Timer (15:00)
    │   │   ├── Payment Address + Copy
    │   │   └── Payment Amount + Copy
    │   └── Warning Message
    │
    ├── Tab: Fiat Payment
    │   ├── Payment Summary (количество + цена в ₽)
    │   ├── Card Form (номер, срок, CVV, имя, email)
    │   ├── Pay Button
    │   └── Info Message (защищённый шлюз)
    │
    └── Tab: Balance Payment
        ├── Balance Info (доступно проверок: 7)
        ├── Balance Summary (будет списано / останется)
        ├── Use Balance Button
        └── Info Message (мгновенная проверка)

FOOTER (идентичен главной)
```

## HTML структура: aml-check-result.html

```
HEADER (идентичен главной, ссылка "Проверить AML" активна)

AML CHECK RESULT
├── Result Header (иконка, заголовок)
├── Check ID Card (ID + copy, дата)
├── RISK SCORE
│   ├── Score Display (процент, текст уровня)
│   ├── Progress Bar
│   └── Scale Labels (0–100%)
├── CHECK INFO
│   ├── Section Title
│   └── Info Grid (тип, хеш, суммы, отправитель, получатель, блокчейн, дата)
├── FUNDS ORIGIN
│   ├── Section Title
│   ├── Legal Sources (зелёный, 10 строк с прогресс-барами)
│   ├── Medium Risk Sources (жёлтый, 2 строки)
│   └── High Risk Sources (красный, 3 строки)
└── Result Actions ("Скачать отчёт", "Новая проверка")

FOOTER (идентичен главной)
```

## Атрибуты разметки

### Блоки (data-block)

| Атрибут | Страницы | Описание |
|---------|----------|----------|
| header | все | Шапка сайта |
| hero | index | Hero-секция |
| exchange-form | index | Форма обмена |
| seo-text | index | SEO текст |
| steps-indicator | все кроме index | Индикатор шагов |
| order-layout | order | Двухколоночный layout заявки |
| payment-layout | payment | Двухколоночный layout оплаты |
| verification-layout | card-verification, identity-verification | Layout верификации |
| processing-layout | processing | Layout обработки |
| error-layout | error | Layout ошибки |
| complete-layout | complete | Layout завершения |
| dashboard-layout | dashboard | Двухколоночный layout ЛК |
| exchange-history | dashboard | История обменов |
| promo-codes | dashboard | Промокоды |
| profile-settings | dashboard | Настройки профиля |
| referral-program | dashboard | Реферальная программа |
| about-layout | about | Layout страницы "О нас" |
| faq-layout | faq | Layout FAQ |
| contacts-layout | contacts | Layout контактов |
| how-it-works-layout | how-it-works | Layout инструкции |
| legal-layout | terms, aml, privacy | Layout юридических страниц |
| blog-layout | blog | Layout списка статей |
| blog-grid | blog | Сетка карточек статей |
| article-layout | blog-article | Layout страницы статьи |
| aml-check-layout | aml-check | Layout формы AML проверки |
| aml-check-form | aml-check | Форма AML проверки |
| aml-check-payment-layout | aml-check-payment | Layout оплаты AML |
| aml-quantity-select | aml-check-payment | Выбор количества проверок |
| aml-payment-method | aml-check-payment | Способ оплаты (табы) |
| aml-check-result-layout | aml-check-result | Layout результатов AML |
| risk-score-block | aml-check-result | Блок Risk Score |
| check-info | aml-check-result | Информация о проверке |
| funds-origin | aml-check-result | Происхождение средств |
| exchange-form-cash | index-cash | Форма обмена (наличные) |
| popular-directions-cash | index-cash | Популярные направления (наличные) |
| exchange-steps-cash | index-cash | Шаги обмена (наличные) |
| order-layout-cash-buy | exchange-order-cash | Layout заявки наличные → крипта |
| order-layout-cash-sell | exchange-order-cash | Layout заявки крипта → наличные |
| cash-direction-tabs | exchange-order-cash | Табы направления наличного обмена |
| dex-swap-form | index-dex | Виджет DEX обмена (LI.FI) |
| exchange-steps-dex | index-dex | Шаги DEX обмена |
| footer | все | Футер |
| partners | index | Партнёры |
| seo-links | index | SEO-перелинковка |

### Элементы (data-element)

**Общие (header/footer):** logo, navigation, nav-dropdown, header-settings, theme-toggle, language-toggle, header-buttons, footer-column, footer-copyright.

**index.html:** send-field, receive-field, rate-type-selector, network-select, condition-badge, rate-refresh, seo-text-content.

**exchange-order.html:** steps, order-form, order-details, form-field, form-checkbox, rate-refresh, exchange-direction, order-info, warning-box, submit-button.

**exchange-card-verification.html:** verification-card, card-type-selector, upload-area, physical-card-form, virtual-card-form.

**exchange-identity-verification.html:** verification-card, sumsub-block, instruction-steps, verification-status.

**exchange-payment.html:** payment-header, payment-timer, payment-amount, payment-address, qr-code, confirm-payment, order-details, exchange-direction, order-info, warning-box.

**exchange-processing.html:** processing-card, processing-header, processing-status, exchange-direction, order-info, info-message.

**exchange-error.html:** error-card, error-header, error-status, error-reason, exchange-direction, order-info, info-message, error-actions.

**exchange-complete.html:** complete-card, complete-header, complete-status, exchange-direction, order-info, info-message, complete-actions.

**dashboard.html:** header-user, dashboard-sidebar, sidebar-user, sidebar-nav, dashboard-content, section-title, filter-pills, exchange-table, pagination, promo-card, profile-fields, password-section, aml-balance, aml-table, card-verification, identity-verification, two-factor-auth, twofa-qr, referral-link, referral-stats, referral-withdraw.

**about.html:** about-hero, about-stats, about-stat-card, about-advantages, about-advantage-card.

**faq.html:** faq-header, faq-list, faq-item.

**contacts.html:** contacts-header, contacts-grid, contact-card, contact-form.

**how-it-works.html:** how-header, how-steps, how-step, info-message.

**terms.html / aml.html / privacy.html:** legal-header, legal-content.

**blog.html:** blog-header, blog-filters, blog-card, blog-card-image, blog-card-meta, pagination.

**blog-article.html:** breadcrumbs, article-header, article-image, article-content, article-callout, article-tags, article-nav, article-cta.

**aml-check.html:** aml-check-header, aml-check-tabs, network-select, coin-select, wallet-address, email-field, check-price.

**aml-check-payment.html:** aml-payment-header, quantity-select, package-card, payment-tabs, tab-crypto, payment-summary, payment-network, payment-coin, payment-details, payment-qr, payment-timer, payment-address, payment-amount, payment-warning, tab-fiat, payment-summary-fiat, fiat-form, fiat-info, tab-balance, balance-info, balance-summary, balance-info-msg.

**aml-check-result.html:** result-header, result-id, risk-score-display, section-title, check-details, sources-legal, sources-medium, sources-high, result-actions.

**index-cash.html:** hero-text, conditions-badges, condition-badge, cash-form-tabs, send-field-cash, cash-currency-select, city-select, switch-button, receive-field-crypto, network-select, agreement-checkbox, rate-refresh, submit-button, seo-text-content, section-title, directions-grid, direction-card, exchange-steps-grid, step-card, reviews-grid, review-card, partners-grid, partner-logo, seo-links-grid, seo-column.

**exchange-order-cash.html:** steps, order-form-cash-buy, order-form-cash-sell, order-details, cash-city-section, office-notice, form-field, form-checkbox, rate-refresh, exchange-direction, order-info, cash-min-amount, warning-box, cash-info, submit-button.

**index-dex.html:** hero-text, condition-badge, lifi-widget-container, widget-info, step-card, seo-links-grid, seo-column.

## CSS переменные (styles.css, блок :root)

| Группа | Переменные |
|--------|-----------|
| Цвета | primary, secondary, text, background, border, success, error |
| Шрифты | семейства, размеры (xs — 4xl) |
| Отступы | xs — 3xl |
| Радиусы | sm — full |
| Тени | sm — xl |
| Анимации | fast, base, slow |

Тёмная тема: переопределение через `[data-theme="dark"]`.

## Состояния шагов

| Класс | Вид | Использование |
|-------|-----|---------------|
| (без класса) | Серый | Будущий шаг |
| .completed | Зелёный с галочкой | Пройденный шаг |
| .active | Синий с подсветкой | Текущий шаг |
| .error | Красный с иконкой X | Шаг ошибки |

## Layouts

| Класс | Тип | Страницы |
|-------|-----|----------|
| .order-layout | Две колонки (grid 1fr 400px) | order, payment |
| .processing-layout | По центру (max-width 800px) | processing, error, complete |
| .verification-layout | По центру (max-width 800px) | card-verification, identity-verification |
| .dashboard-layout | Sidebar + контент (grid 260px 1fr) | dashboard |
| .blog-layout | По центру (max-width 1100px) | blog |
| .article-layout | По центру (max-width 800px) | blog-article |
| .aml-check-layout | По центру (max-width 600px) | aml-check, aml-check-payment, aml-check-result |
