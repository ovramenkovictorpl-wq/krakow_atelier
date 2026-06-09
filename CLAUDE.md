# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Atelier Kraków** — статичний багатомовний веб-сайт для ательє з ремонту та реставрації одягу в Кракові.

**Tech Stack:**
- Vanilla HTML5, CSS3, JavaScript (ES6+)
- Custom CSS з CSS-змінними, без фреймворків
- Власна система інтернаціоналізації (UA/PL/EN)
- Google Fonts: Playfair Display (заголовки), DM Sans (основний текст)

## Design System & Rules

### Color Palette
```css
--primary-dark: #1A1A1A    /* Основний темний */
--secondary-bg: #FAF9F6    /* Кремовий фон */
--accent-gold: #D4AF37     /* Золотий акцент */
--accent-gold-dark: #B8941F /* Темний золотий (для тексту на золотому фоні) */
--text-dark: #2C2C2C       /* Темний текст */
--text-light: #666666      /* Світлий текст */
--white: #FFFFFF
```

### Typography Scale
- **Hero Title**: `clamp(40px, 6vw, 72px)` — Playfair Display, 700
- **Section Title**: `clamp(32px, 4vw, 48px)` — Playfair Display, 600
- **Body Text**: 16px / 18px — DM Sans, 400
- **Small Text**: 14px / 15px — DM Sans, 500

### Spacing System
- **Container max-width**: 1200px
- **Section padding**: 80px vertical (60px на мобільних)
- **Card gaps**: 24px (grid), 32px (flex)
- **Internal padding**: 24px (cards), 40px (sections)

### Animation & Transitions
- **Smooth**: `cubic-bezier(0.4, 0, 0.2, 1)` — плавні переходи
- **Ease-out**: `cubic-bezier(0.23, 1, 0.32, 1)` — exponential easing для hover
- **Duration**: 0.3s (hover), 0.4s (menu animations)
- **Performance**: використовуємо `transform` та `opacity` замість layout properties (width, height, max-height)
- **Accordion**: `grid-template-rows` для плавного розгортання без janky performance

### Design Principles
1. **Elegance First** — мінімалістичний, елегантний стиль преміум-сегменту
2. **Mobile-First** — responsive дизайн з адаптацією під всі екрани
3. **Subtle Animations** — плавні, ненав'язливі анімації (hover, scroll)
4. **Visual Hierarchy** — чітка ієрархія через типографіку та spacing
5. **Accessibility** — контрастність, aria-labels, keyboard navigation

### Component Patterns

#### Header
- Fixed position з backdrop-blur
- Прозорість: `rgba(250, 249, 246, 0.95)`
- Burger-меню для мобільних (<768px)
- Золоте підкреслення активної сторінки

#### Hero Section
- Full-viewport height (100vh)
- Темний overlay: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))`
- Центрований контент з двома CTA-кнопками

#### Service Cards
- Grid layout: 3 колонки (desktop) → 2 (tablet) → 1 (mobile)
- Hover effect: `translateY(-8px)` + shadow
- Emoji іконки (👖, 🧵, etc.)

#### Accordion (Prices Page)
- `scroll-margin-top: 100px` — уникнення "стрибків"
- `grid-template-rows: 0fr` / `1fr` для плавної анімації без layout thrash
- Плавна анімація розгортання через transform

#### Buttons
- **Primary**: золотий фон + темний текст (#1A1A1A) для WCAG AA контрасту
- **Secondary**: білий фон + золота обводка
- Hover: `translateY(-2px)` + shadow

## File Structure

```
studio in Krakow/
├── index.html              # Головна (перейменована з index-new.html)
├── prices-new.html         # Ціни
├── portfolio-new.html      # Портфоліо "до/після"
├── contacts-new.html       # Контакти + Google Maps
├── styles-new.css          # Глобальні стилі
├── script-new.js           # JS логіка + переклади (i18n)
└── images/
    └── logo_without_fon.png
```

**Важливо:** Головна сторінка має назву `index.html` для коректного деплою. Інші сторінки мають суфікс `-new`.

## Internationalization (i18n)

### Система перекладів
- **Переклади зберігаються** в `script-new.js` у об'єкті `translations`
- **Структура**: `translations[lang][key]`
- **Атрибут для перекладу**: `data-i18n="translation-key"`

### Додавання нового перекладу
1. Додай ключ у всі три мови (ua, pl, en) в `translations`
2. Додай атрибут `data-i18n="твій-ключ"` до HTML-елемента
3. Переклад застосується автоматично при зміні мови

### Збереження стану
- Вибрана мова зберігається в `localStorage.getItem('selectedLanguage')`
- За замовчуванням: `'ua'`

## Common Tasks

### Запуск локального сервера
```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# Або просто відкрити index.html у браузері
```

### Додавання нової сторінки
1. Створи файл `page-new.html`
2. Скопіюй header та footer з `index.html`
3. Додай навігаційний лінк у всі сторінки:
   ```html
   <a href="page-new.html" class="nav-link" data-i18n="nav-page">Page</a>
   ```
4. Додай переклади для `nav-page` у `script-new.js`

### Оновлення контактів
- **Телефон**: +48 573 243 791
- **Telegram**: https://t.me/Karacheban
- **Instagram**: https://www.instagram.com/atelier_w_krakowie?igsh=amZuOWxjbWwzbDJ6
- **WhatsApp**: https://wa.me/48573243791

Контакти вказані у:
- Header (всі сторінки)
- Footer (всі сторінки)
- `contacts-new.html` (детально)

### Графік роботи
- **Пн-Пт**: 8:00-14:00, 17:00-20:00
- **Сб-Нд**: Вихідні

## CSS Architecture

### Responsive Breakpoints
```css
/* Mobile: default (до 768px) */
/* Tablet: 768px+ */
/* Desktop: 1024px+ */
```

### Naming Conventions
- **BEM-inspired**: `.service-card`, `.hero-content`, `.nav-link`
- **State classes**: `.active`, `.open`
- **Utility classes**: `.container`

### Layout Strategy
- **Flexbox** для header, навігації, кнопок
- **CSS Grid** для service-cards, portfolio gallery
- **Clamp()** для fluid typography

## JavaScript Architecture

### Модульна структура
```javascript
// 1. Translations object
const translations = { ua: {...}, pl: {...}, en: {...} };

// 2. DOM references
const langBtns = document.querySelectorAll('.lang-btn');
const burgerMenu = document.getElementById('burger-menu');

// 3. Functions
function setLanguage(lang) { ... }
function updateTranslations() { ... }
function toggleMobileMenu() { ... }

// 4. Event listeners
langBtns.forEach(btn => btn.addEventListener('click', ...));
```

### Key Functions
- **`setLanguage(lang)`** — зміна мови + оновлення UI
- **`updateTranslations()`** — прохід по всіх `[data-i18n]` елементах
- **`toggleMobileMenu()`** — відкриття/закриття burger-menu

## Portfolio Page

### Структура галереї
```javascript
const portfolioItems = [
    {
        category: 'jeans',
        before: 'images/jeans_1_before.jpg',
        after: 'images/jeans_1_after.jpg',
        titleKey: 'portfolio-jeans-1-title' // переклад з script-new.js
    }
];
```

### Фільтрація за категоріями
- Категорії: `'all'`, `'jeans'`, `'dresses'`, `'jackets'`, `'coats'`, `'leather'`
- При кліку на фільтр — перемальовується `.portfolio-grid`

### Modal для зображень
- При кліку на картку — відкривається modal з full-size зображенням
- ESC / клік на overlay — закриття modal

## Prices Page

### Accordion Structure
```html
<div class="accordion">
    <div class="accordion-item">
        <button class="accordion-header">
            <h3 data-i18n="prices-cat-1">Категорія 1</h3>
            <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-content">
            <!-- Підкатегорії та прайс-лист -->
        </div>
    </div>
</div>
```

### Структура прайсу
- **3 основні категорії**:
  1. Ремонт і підгонка одягу (4 підкатегорії)
  2. Пошиття на замовлення (4 послуги)
  3. Домашній текстиль (2 підкатегорії)
- Ціни у форматі: "від X zł"
- Disclaimer внизу про варіативність цін

## Contacts Page

### Секції
1. **Контактна інформація** — телефон, email, адреса
2. **Як зробити замовлення?**
   - Офлайн (візит в ательє — 4 кроки)
   - Онлайн (поштою — 4 кроки з реквізитами пачкомату InPost)
3. **Соціальні мережі** — кнопки WhatsApp, Telegram, Instagram
4. **Google Maps** — embed карта (квадратна, `aspect-ratio: 1/1`)

### InPost Пачкомат
- **Код**: KRA06APP
- **Адреса**: Mazowiecka 14, 30-015 Kraków

## Deployment

### Netlify (Поточний хостинг)
- **Entry point**: `index.html` (не `index-new.html`)
- Інші сторінки: `prices-new.html`, `portfolio-new.html`, `contacts-new.html`
- Deploy автоматично при push в репозиторій

### SEO
- Meta tags у `<head>` кожної сторінки
- Open Graph для соцмереж
- Favicon: `images/logo_without_fon.png`

## Change Log (Recent Updates)

### 2026-06-09 (Impeccable Design Fixes)
- **Виправлено 10 anti-patterns за стандартами Impeccable Design**:
  - ✅ Контраст тексту: білий → темний (#1A1A1A) на золотих кнопках та lang-switcher для WCAG AA (4.5:1)
  - ✅ Side-tab borders: замінено товсті `border-left: 4px` на тонкі рамки `border: 1px` (3 місця: disclaimer, services-list, inpost-info)
  - ✅ Overused font: Inter → **DM Sans** у всіх файлах (більш унікальний шрифт)
  - ✅ Bounce easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` → `cubic-bezier(0.23, 1, 0.32, 1)` (exponential ease-out)
  - ✅ Layout transitions: `width` → `transform: scaleX()` для nav-link підкреслення
  - ✅ Layout transitions: `max-height` → `grid-template-rows` для accordion (уникнення janky performance)
  - ✅ Clipped overflow: виправлено `overflow-x: hidden` на body
- **Оновлено дизайн-систему**:
  - Додано `--accent-gold-dark: #B8941F` для тексту на золотому фоні
  - Додано `--transition-ease-out` замість `--transition-spring`
  - Оновлено Google Fonts посилання на всіх сторінках (index.html, prices-new.html, portfolio-new.html, contacts-new.html)
- **Результат**: 0 anti-patterns — повна відповідність стандартам Impeccable Design

### 2026-06-09
- Оновлено всі контакти (телефон, Telegram, Instagram, WhatsApp)
- Змінено графік роботи (Пн-Пт, Сб-Нд: вихідні)
- Повністю перероблено прайс-лист (3 категорії замість 6)
- Виправлено UI проблеми: "стрибання" accordion, відступи, центрування
- Додано `scroll-margin-top: 100px` для accordion

### 2026-06-01
- Уніфіковано header/footer на всіх сторінках
- Виправлено перемикання мов (preventDefault)
- Мобільна сітка портфоліо (2 картинки в ряд)
- Додано секцію "Як зробити замовлення?" на contacts-new.html
- Перейменовано index-new.html → index.html для деплою

## Design Review Guidelines (Impeccable)

При роботі з дизайном використовуй Impeccable skills:

- **`/shape`** — планування UX/UI перед кодом
- **`/critique`** — оцінка дизайну з UX-перспективи
- **`/polish`** — фінальний прохід (alignment, spacing, consistency)
- **`/adapt`** — адаптація під різні екрани/девайси
- **`/clarify`** — покращення UX-текстів та мікрокопі
- **`/audit`** — перевірка accessibility, performance, theming
- **`/document`** — генерація DESIGN.md з поточною системою дизайну

### Quality Checklist
- [ ] Всі hover-стани працюють коректно
- [ ] Responsive на mobile/tablet/desktop
- [ ] Переклади на UA/PL/EN заповнені
- [ ] Контрастність тексту відповідає WCAG AA
- [ ] Burger-меню працює на мобільних
- [ ] Active стан для поточної сторінки в навігації
- [ ] Всі зображення мають `alt` атрибути
- [ ] Social links ведуть на реальні сторінки
- [ ] Google Maps embed працює

## Notes

- Всі файли (крім `index.html`) мають суфікс `-new` — це робоча конвенція
- Placeholder зображення в `images/` потрібно замінити на реальні фото робіт
- Форма зворотного зв'язку поки не реалізована (опціонально)
- Google Maps можна додати через iframe embed з Google Maps

## Contact Information (for updates)

Якщо потрібно оновити контакти — шукай у файлах:
- Header: `index.html`, `prices-new.html`, `portfolio-new.html`, `contacts-new.html`
- Footer: ті ж самі файли
- Переклади: `script-new.js` (об'єкт `translations`)
