# The Wild Oasis

## Описание

"The Wild Oasis" - система для бронирования домиков. Приложение предоставляет пользователям возможность управлять бронированиями, просматривать статистику, а также редактировать информацию о домиках. Для доступа к системе требуется авторизация.

## Доступ

Для доступа к системе требуется авторизация. Используйте следующие тестовые учетные данные:

- **Логин:**
  ```
  test@test.com
  ```
- **Пароль:**
  ```
  12345678
  ```

## Страницы приложения

- **Страница статистики**:
  - Отображает общую статистику по бронированиям (графики и текстовые данные).
  - Показана сегодняшняя активность (быстрый доступ к бронированию).

- **Страница бронирований**:
  - Подтверждение брони.
  - Закрытие брони.
  - Удаление брони в зависимости от её статуса.

- **Страница домиков**:
  - Информация о цене, скидке и вместимости домика.
  - Возможность удаления, дублирования, редактирования и создания нового домика.

- **Страница создания нового пользователя**:
  - Форма для создания нового пользователя.

- **Страница настройки бронирования**:
  - Настройки и параметры для бронирования.

## Технологии

- **React** - Библиотека для создания пользовательских интерфейсов.
- **Supabase** - Платформа для управления базой данных и аутентификацией.
- **React Query** - Инструменты для работы с асинхронными запросами и кэшированием данных.
- **React Hook Form** - Библиотека для управления формами и валидацией.
- **Styled Components** - Библиотека для написания стилей в JavaScript.
- **Recharts** - Библиотека для создания графиков и диаграмм.
- **React Icons** - Набор иконок для использования в React приложениях.
- **React Router DOM** - Библиотека для маршрутизации в React приложениях.
- **React Hot Toast** - Библиотека для отображения уведомлений.
- **React Error Boundary** - Библиотека для обработки ошибок в React приложениях.
- **Date-fns** - Библиотека для работы с датами.

## Демо

Вы можете увидеть демо-версию приложения по следующей ссылке:

[Демо-приложение](https://the-wild-oasis-roman-pixel.netlify.app/login)


## Установка


1. Клонируйте репозиторий:
  ```bash
  git clone https://github.com/roman-pixel/the-wild-oasis.git
  ```

2.	Перейдите в каталог проекта

3.	Создайте файлы переменных окружения:
  Для Linux и MacOS
  ```bash
  touch .env .env.development .env.production 
  ```
  Для Windows
  ```bash
  echo. > .env.development
  echo. > .env.production
  echo. > .env
  ```

4.	Настройте переменные окружения:
  В .env
  ```bash
  VITE_SUPABASE_URL=<your-supabase-url>
  VITE_SUPABASE_KEY=<your-supabase-key>
  VITE_CAPTCHA_SITE_KEY=<your-recaptcha-site-key>
  ```
  
  В .env.development добавьте:
  ```bash
  VITE_APP_ENV=development
  ```
  
  .env.production добавьте:
  ```bash
  VITE_APP_ENV=production
  ```
   
5.	Установите зависимости с помощью npm:
  ```bash
  npm install
  ```
6.  Запустите приложение 
  ```bash
  npm run dev
  ```
