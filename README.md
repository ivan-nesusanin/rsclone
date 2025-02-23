Имя проекта: [Clone Kinopoisk](https://rs-kp.herokuapp.com/)
=======
![Screen Main Page](https://github.com/ivan-nesusanin/rsschool-cv/blob/cv-html-css/Assets/kinopoisk.JPG?raw=true)

## Краткое описание проекта
Первый опыт командной разработки во время обучения в RS School.

В качестве аналога проекта было выбрано [одноименное приложение Кинопоиск](https://www.kinopoisk.ru/).

В силу временных ограничений, было решено не тратить время на разработку дизайна, поэтому Frontend приложения основан на Bootstrap.

Изначально запланированный функционал должен был содержать: каталог фильмов, сериалов, информацию об актерах и создателях, событиях из мира киноиндустрии, различные виды поисков и фильтров, аутентификация, авторизация, личный кабинет пользователя, рецензии и различные статистические графики.

В силу различных обстоятельств реализована лишь малая часть задуманного функционала.

На главной странице отображаются блоки с фильмами по различным категориям: “Топ 100 по рейтингу Кинопоиска”, “Смотреть всей семьей”, “Новинки” и “Для детей”. Пагинация в блоках реализована с помощью библиотеки ngx-pagination.

При клике на любой фильм появляется страница с детальной информацией.

При клике на вкладку “Фильмы” появляются все фильмы базы с реализацией стратегии ленивой загрузки (lazy-loading). В верхней части страницы находятся поля фильтров, в которых реализована динамическая подгрузка пунктов из базы данных. К сожалению сами фильтры не реализованы.

В приложении реализована функция поиска. В строку поиска необходимо ввести полное название искомого фильма или его часть и нажать на кнопку с лупой. Результаты поиска отобразятся на отдельной странице.

На странице с расширенным поиском работает только строка простого поиска.

## Обзоры приложения
- Видео обзор работы приложения можно посмотреть по [ссылке на YouTube](https://youtu.be/l9Yd8aZGBvQ).

- О проекте и ходе его разработки можно прочитать в [статье на Medium](https://medium.com/@ivanku82/rs-clone-kinopoisk-учебный-проект-7046c37e4d2f).

## Технологии использованные при Frontend разработке
- ***HTML***, ***SCSS***, ***TypeScript***, ***Bootstrap***, ***Angular***, ***NX***, ***REST API***, ***RXJS***
