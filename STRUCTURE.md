# Структура проекта

## Файлы

| Файл | Тип |
|------|-----|
| index.html | Главная страница |
| exchange-order.html | Оформление заявки |
| exchange-card-verification.html | Верификация карты |
| exchange-identity-verification.html | Верификация личности |
| exchange-payment.html | Оплата заявки |
| exchange-processing.html | Обработка заявки |
| exchange-error.html | Ошибка обмена |
| exchange-complete.html | Обмен завершён |
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
        ├── Exchange Direction (BTC → USDT)
        ├── Order Info (курс, сети, подтверждения, сумма)
        └── Warning Box

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
        ├── Order Info (ID, статус "Завершено", TX Hash, сумма)
        ├── Info Message (детали на email)
        └── Complete Actions ("Новый обмен", "Вернуться на главную")

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
| footer | все | Футер |
| partners | index | Партнёры |
| seo-links | index | SEO-перелинковка |

### Элементы (data-element)

**Общие (header/footer):** logo, navigation, nav-dropdown, header-settings, theme-toggle, language-toggle, header-buttons, footer-column, footer-copyright.

**index.html:** send-field, receive-field, rate-type-selector, network-select, condition-badge, seo-text-content.

**exchange-order.html:** steps, order-form, order-details, form-field, form-checkbox, exchange-direction, order-info, warning-box, submit-button.

**exchange-card-verification.html:** verification-card, card-type-selector, upload-area, physical-card-form, virtual-card-form.

**exchange-identity-verification.html:** verification-card, sumsub-block, instruction-steps, verification-status.

**exchange-payment.html:** payment-header, payment-timer, payment-amount, payment-address, qr-code, confirm-payment, order-details, exchange-direction, order-info, warning-box.

**exchange-processing.html:** processing-card, processing-header, processing-status, exchange-direction, order-info, info-message.

**exchange-error.html:** error-card, error-header, error-status, error-reason, exchange-direction, order-info, info-message, error-actions.

**exchange-complete.html:** complete-card, complete-header, complete-status, exchange-direction, order-info, info-message, complete-actions.

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
