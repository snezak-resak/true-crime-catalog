# True Crime Catalog

[

![Deploy static site](https://github.com/snezak-resak/true-crime-catalog/actions/workflows/deploy.yml/badge.svg)

](https://github.com/snezak-resak/true-crime-catalog/actions/workflows/deploy.yml)

Каталог русскоязычных тру-крайм подкастов: о чём они, в каком тоне и где слушать.
Статический сайт (HTML, CSS, JavaScript) с автодеплоем через GitHub Actions.

Сайт: https://snezak-resak.github.io/true-crime-catalog/

## Как работает автодеплой

При каждом `push` в ветку `main` запускается workflow `.github/workflows/deploy.yml`:

1. **check** — проверяет, что в репозитории есть `index.html`, `style.css` и `main.js`;
2. **deploy** — если проверка пройдена, сайт публикуется на GitHub Pages, а ссылка на него записывается в сводку запуска.

Если проверка не пройдена, публикация не запускается, и на сайте остаётся предыдущая рабочая версия.
Правка одного только `README.md` публикацию не запускает.
