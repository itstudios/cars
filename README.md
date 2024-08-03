# cars
Cars Button

Данный файл может быть скачан и сохранен на сервер непосредственно Автодиллера, так-же может находится и на стороне нашего сервера.

Этот код выполняет следующие действия:

Ждет загрузки страницы:

Использует document.addEventListener('DOMContentLoaded', function() {...});, чтобы дождаться полной загрузки страницы перед выполнением.
Настраивает стили кнопки:

Получает элемент кнопки по ID sendDataButton и устанавливает для него стили (цвет фона, цвет текста, отсутствие границ, отступы, курсор, радиус границ, размер шрифта, шрифт и текст кнопки).
Определяет переменную для хранения данных страницы:

Объявляет переменную pageData для хранения данных, которые будут собраны со страницы.
Обработчик нажатия на кнопку:

При нажатии на кнопку:
Ищет элемент с классом price без дополнительных классов.
Ищет элемент с классом title без дополнительных классов.
Проверяет, что оба элемента найдены.
Получает и очищает содержимое этих элементов.
Ищет таблицу на странице и собирает данные из всех ячеек таблицы, если она найдена.
Ищет элемент с классом owl-stage и собирает ссылки на все изображения внутри этого элемента, если он найден.
Собирает данные страницы (URL, заголовок страницы, дата последнего изменения, URL реферера, содержимое элементов price и title, данные таблицы, ссылки на изображения).
Логирует URL сервера для отправки данных.
Отправляет собранные данные на сервер методом POST с использованием fetch, преобразовав их в JSON.
Обрабатывает ответ сервера, логирует успешную отправку данных и открывает новую страницу с параметрами, полученными из содержимого элементов price и title, и текущим URL.
Ловит и логирует ошибки при отправке данных, а также выводит сообщения об ошибках, если элементы не найдены или произошли ошибки при отправке.
Кратко: код собирает данные с веб-страницы (цена, заголовок, данные таблицы, изображения) при нажатии кнопки и отправляет их на сервер, затем открывает новую страницу с параметрами.

-----------------------------------------------------------

This code performs the following actions:

Waits for the page to load:

Uses document.addEventListener('DOMContentLoaded', function() {...}); to ensure the script runs after the page has fully loaded.
Sets button styles:

Retrieves the button element by its ID sendDataButton and applies various styles to it (background color, text color, no border, padding, cursor style, border radius, font size, font family, and button text).
Defines a variable to store page data:

Declares a variable pageData to hold the data collected from the page.
Button click event handler:

On button click:
Searches for an element with the class price without additional classes.
Searches for an element with the class title without additional classes.
Checks if both elements are found.
Retrieves and trims the content of these elements.
Searches for a table on the page and collects data from all table cells if the table is found.
Searches for an element with the class owl-stage and collects sources of all images inside this element if it is found.
Collects page data (current URL, page title, last modified date, referrer URL, content of price and title elements, table data, and image sources).
Logs the server URL for data submission.
Sends the collected data to the server via a POST request using fetch, converting the data to JSON.
Processes the server response, logs successful data submission, and opens a new page with parameters extracted from the price and title elements and the current URL.
Catches and logs errors during data submission and logs errors if elements are not found or there are issues with sending the data.
In summary: the code collects data from a web page (price, title, table data, images) upon a button click, sends this data to a server, and then opens a new page with parameters derived from the collected data.
