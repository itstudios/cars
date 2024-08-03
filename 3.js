// Ждем загрузки всего содержимого страницы
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элемент кнопки по его ID
    const button = document.getElementById('sendDataButton');

    // Устанавливаем стили кнопки с использованием переменных
    button.style.backgroundColor = '#ff8800';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.padding = '11px 55px';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '20px';
    button.style.fontSize = '18px';
    button.style.fontFamily = 'Verdana, sans-serif';
    button.textContent = 'BUY CAR';

    // Переменная для хранения данных страницы
    let pageData;

    // Обработчик события нажатия на кнопку
    button.onclick = function() {
        // Ищем элемент с классом 'price' без дополнительных классов
        const priceElement = document.querySelector('div.price:not([class*=" "])');
        // Ищем элемент с классом 'title' без дополнительных классов
        const titleElement = document.querySelector('h1.title:not([class*=" "])');

        // Проверяем, что оба элемента найдены
        if (priceElement && titleElement) {
            // Получаем содержимое элементов
            const priceContent = priceElement.innerHTML.trim();
            const titleContent = titleElement.innerHTML.trim();

            // Ищем таблицу на странице
            const table = document.querySelector('table');
            let tableData = [];
            if (table) {
                // Собираем данные из всех ячеек таблицы
                const tdElements = table.querySelectorAll('td');
                tdElements.forEach(td => {
                    const cellContent = td.innerHTML.trim();
                    tableData.push(cellContent);
                });
            } else {
                // Выводим ошибку, если таблица не найдена
                console.error('Таблица не найдена на странице.');
            }

            // Ищем элемент с классом 'owl-stage'
            const owlStage = document.querySelector('div.owl-stage');
            const imageSources = [];
            if (owlStage) {
                // Собираем источники всех изображений внутри элемента 'owl-stage'
                const images = owlStage.querySelectorAll('img');
                images.forEach(img => {
                    imageSources.push(img.src);
                });
            } else {
                // Выводим ошибку, если элемент не найден
                console.error('Элемент с классом "owl-stage" не найден на странице.');
            }

            // Собираем данные страницы
            pageData = {
                url: window.location.href, // URL текущей страницы
                title: document.title, // Заголовок страницы
                lastModified: document.lastModified, // Дата последнего изменения страницы
                referrer: document.referrer, // URL реферера
                priceContent: priceContent, // Содержимое элемента 'price'
                titleContent: titleContent, // Содержимое элемента 'title'
                tableData: tableData, // Данные таблицы
                images: imageSources // Источники изображений
            };

            // URL сервера для отправки данных
            const serverUrl = 'https://car1.site/post/receiveData.php';

            // Логируем отправку данных
            console.log(`Отправка данных на сервер: ${serverUrl}`);

            // Отправка данных на сервер методом POST
            fetch(serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pageData) // Преобразуем данные в JSON
            })
            .then(response => {
                // Проверяем успешность ответа
                if (!response.ok) {
                    throw new Error(`Ошибка сервера: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                // Логируем успешную отправку данных
                console.log('Данные успешно отправлены:', data);
                // Открываем новую страницу с параметрами
                window.open(`https://car1.site/newcustomer/listing/add?price=${encodeURIComponent(priceContent)}&title=${encodeURIComponent(titleContent)}&url=${encodeURIComponent(window.location.href)}`);
            })
            .catch(error => {
                // Логируем ошибки при отправке данных
                console.error('Ошибка при отправке данных:', error);
            });
        } else {
            // Логируем ошибку, если элементы не найдены
            console.error('Элемент с классом "price" или "title" не найден на странице или содержит другие классы.');
        }
    };
});
