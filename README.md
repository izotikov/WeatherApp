# WeatherApp

В этом проекте реализована работа с бесплатным WeatherAPI, которое позволяет получать актуальную информацию о погоде.

Для запуска:

### `npm start`

Для перехода на сайт (проект должен быть локально запущен): 

[http://localhost:3000/home](http://localhost:3000/home)

В данном проекте представлены:
1. Типизация (Typescript)
2. React на хуках
3. Работа с RestAPI
4. Препроцессор SCSS

Реализовано:
1. Возможность ввести свой город/регион/координаты, и получить результат в виде погоды в населенном пункте.
2. Последние три запроса сохраняются в области под поиском. При клике на них также отобразится погода.
3. Замыливание части картинки.

Не удалось реализовать идею, чтобы при вводе города на фоне появлялась первая картинка из гугла по причине того, что все API, что реализовывали эту функцию, делали это на бэкенде, дабы не показывать в строке API_KEY.

<img width="1440" alt="Снимок экрана 2022-07-08 в 8 09 54 PM" src="https://user-images.githubusercontent.com/91781655/178038792-6c8f3f94-2326-4684-9219-e8c6a2bc5c99.png">
