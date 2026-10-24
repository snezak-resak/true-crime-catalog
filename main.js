const CIC = {smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14.5c1 1.5 2.5 2.2 4 2.2s3-.7 4-2.2M9 9.5v.01M15 9.5v.01"/>', scale:'<path d="M12 4v16M7 20h10M5 7h14M5 7 2.5 13.5a3 3 0 0 0 5 0L5 7zM19 7l-2.5 6.5a3 3 0 0 0 5 0L19 7z"/>', bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  car:'<path d="M4 16v-4l2-5h12l2 5v4zM4 12h16M7 16v2M17 16v2M7.5 14.2v.01M16.5 14.2v.01"/>',
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  mask:'<path d="M4 7c5-2 11-2 16 0v4c0 4-3 7-8 8-5-1-8-4-8-8z"/><path d="M8.5 11h2M13.5 11h2M9.5 15c1.5 1 3.5 1 5 0"/>',
  play:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z"/>',
  heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  mark:'<path d="M6 4h12v17l-6-4-6 4z"/>'};
function collIcon(name){
  const n = String(name).toLowerCase();
  const k = /дорог|машин|авто|поезд|путь/.test(n) ? 'car' : /сн[оау]|сон|ноч/.test(n) ? 'moon' : /маньяк|убий|серий|жутк/.test(n) ? 'mask' : /видео|youtube|ютуб/.test(n) ? 'play' : /юмор|комед|смех|весел/.test(n) ? 'smile' : /суд|процесс|право/.test(n) ? 'scale' : /психолог|мозг|мотив/.test(n) ? 'bulb' : /любим|избран|лучш/.test(n) ? 'heart' : 'mark';
  return '<svg class="ci" viewBox="0 0 24 24" aria-hidden="true">' + CIC[k] + '</svg>';
}
const podcasts = [
 {"id": "tut", "title": "Тут такое дело", "author": "Маша Сопкина и Даша Сабурова", "tags": ["Видео", "Комедия", "Нераскрытые дела"], "editor": true, "short": "Страшные дела рассказывают с сарказмом и юмором.", "full": "Ведущие Маша Сопкина и Даша Сабурова говорят о будоражащих и страшных преступлениях с долей сарказма. В выпусках много личных комментариев и шуток.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/ru/podcast/%D1%82%D1%83%D1%82-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D0%BB%D0%BE/id1552776590"}, {"l": "Все ссылки", "h": "https://tyttakoedelo.ru/links"}, {"l": "YouTube", "h": "https://www.youtube.com/channel/UCSjdzCsZFxCyNuUFJM5H4Tg"}, {"l": "Telegram", "h": "https://t.me/tyttakoe_delo"}, {"l": "VK", "h": "https://vk.ru/club211532532"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1552776590"}, {"l": "Boosty", "h": "https://boosty.to/tyttakoedelo"}], "year": 2021},
 {"id": "lora", "title": "Дневники Лоры Палны", "author": "Митя Лебедев и Маша Погребняк · студия «Терменвокс»", "tags": ["Видео", "Серийные убийцы", "Психология", "Комедия"], "editor": true, "short": "Журналисты разбирают дела серийных убийц и других преступников, шутя над страшным.", "full": "Митя Лебедев и Маша Погребняк разбирают криминальные сюжеты от серийных убийц до преступных группировок и аферистов, обсуждают мотивы и психологию. Тон разговорный, с чёрным юмором.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/ru/podcast/%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8-%D0%BB%D0%BE%D1%80%D1%8B-%D0%BF%D0%B0%D0%BB%D0%BD%D1%8B/id1505527741"}, {"l": "YouTube", "h": "https://www.youtube.com/playlist?list=PLOLysiZ_IMc2kFxvibMoSRe0tFgsrfby9"}, {"l": "Telegram", "h": "https://t.me/lorapalnapodcast"}, {"l": "VK", "h": "https://vk.com/lorapalna"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1505527741"}, {"l": "Boosty", "h": "https://boosty.to/lorapalna"}], "year": 2020},
 {"id": "holmy", "title": "У холмов есть подкаст", "author": "Тима и Валя Назаровы", "tags": ["Комедия", "Нераскрытые дела"], "editor": true, "short": "Брат и сестра рассказывают о преступлениях и маньяках с чёрным юмором.", "full": "Тима и Валя Назаровы подробно разбирают новый пугающий случай и разбавляют рассказ чёрным юмором. Авторы позиционируют проект как комедийный.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/ru/podcast/%D1%83-%D1%85%D0%BE%D0%BB%D0%BC%D0%BE%D0%B2-%D0%B5%D1%81%D1%82%D1%8C-%D0%BF%D0%BE%D0%B4%D0%BA%D0%B0%D1%81%D1%82/id1480163149"}, {"l": "YouTube", "h": "https://www.youtube.com/@uholmov"}, {"l": "VK", "h": "https://vk.ru/uholmov"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1480163149/e"}, {"l": "Boosty", "h": "https://boosty.to/uholmov"}], "year": 2019},
 {"id": "kraska", "title": "Красной краской", "author": "«Синхронизация» × «Шторм»", "tags": ["Психология", "Культура"], "editor": true, "short": "О людях, которых преступления вдохновили на картины, симфонии и романы.", "full": "Проект онлайн-лектория «Синхронизация» и студии «Шторм»: почему опасность так часто идёт рядом с вдохновением и какую цену платят за красоту. На сайте проекта есть материалы к выпускам и рассказы о героях.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/ru/podcast/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B9-%D0%BA%D1%80%D0%B0%D1%81%D0%BA%D0%BE%D0%B9/id1711936901"}, {"l": "Telegram", "h": "https://t.me/krasnoykraskoy"}, {"l": "VK", "h": "https://vk.ru/podcasts-98083871"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/27796480"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1711936901"}], "year": 2023},
 {"id": "dela", "title": "Дела", "author": "LABELSMART", "tags": ["Видео", "Судебные процессы", "Расследования"], "editor": true, "short": "Реальные преступления глазами тех, кто вёл расследование и доказывал вину в суде.", "full": "Подкаст исследует реальные преступления и людей, связанных с ними. Главные герои историй — те, кто месяцами и годами шёл по следу преступников и доказывал их вину.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/us/podcast/%D0%B4%D0%B5%D0%BB%D0%B0/id1654665055"}, {"l": "YouTube", "h": "https://www.youtube.com/channel/UCnXA6QSxNGg50k69PaKSS9g"}, {"l": "Telegram", "h": "https://t.me/delatruecrime"}, {"l": "VK", "h": "https://vk.ru/dela_truecrime"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/24080684"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1654665055/e"}], "year": 2022},
 {"id": "ruki", "title": "Руки за голову", "author": "moloko plus", "tags": ["Судебные процессы", "Психология"], "editor": false, "short": "Подкаст контркультурного альманаха о насилии.", "full": "Подкаст контркультурного альманаха о насилии moloko plus. Авторы разбирают устройство криминальной жизни и то, почему она притягивает. Во втором сезоне говорят о преступлениях в интернете, в третьем — о тюремном опыте в России.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/ru/podcast/%D1%80%D1%83%D0%BA%D0%B8-%D0%B7%D0%B0-%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D1%83/id1539777021"}, {"l": "YouTube", "h": "https://www.youtube.com/channel/UCaPIVfQnxL0ziRkKLRpR6Jg"}, {"l": "VK", "h": "https://vk.ru/podcasts-109349721"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/12746799"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1539777021"}], "year": 2020},
 {"id": "osnovano", "title": "Основано на реальных событиях", "author": "студия «Либо/Либо»", "tags": ["Психология", "Судебные процессы", "Расследования"], "editor": false, "short": "Глубокий разбор дел для тех, кому мало хронологии преступления.", "full": "Проект студии «Либо/Либо». Подойдёт тем, кто устал от пересказа хронологии и хочет разобраться глубже: что стоит за делом и как о нём рассказывают.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/ru/podcast/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-%D0%BD%D0%B0-%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F%D1%85/id1687662215"}, {"l": "Telegram", "h": "https://t.me/truestoriesworld"}, {"l": "VK", "h": "https://vk.ru/podcasts-232434373"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/25825516"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1687662215/e"}], "year": 2023},
 {"id": "podval", "title": "Дверь в подвал", "author": "Влада и Миша", "tags": ["Комедия", "Серийные убийцы", "Психология"], "editor": false, "short": "Журналистка и юрист обсуждают серийных убийц с юмором, через кино и сериалы.", "full": "Ведущие Влада и Миша — журналистка и юрист — непрофессионально и с юмором говорят о серийных убийцах и других преступниках, часто проводя параллели с кино и сериалами. До 6-го эпизода 4-го сезона подкаст выходил втроём.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/ru/podcast/%D0%B4%D0%B2%D0%B5%D1%80%D1%8C-%D0%B2-%D0%BF%D0%BE%D0%B4%D0%B2%D0%B0%D0%BB/id1631800113"}, {"l": "Telegram", "h": "https://t.me/etopodcastprokillers"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/22838653"}, {"l": "Boosty", "h": "https://boosty.to/pdvervpodval"}], "year": 2022},
 {"id": "kraims", "title": "Краймсильвания", "author": "Оля, Юля и Саша", "tags": ["Комедия", "Мошенничество", "Городские легенды"], "editor": false, "short": "Лёгкий тру-крайм: мошенники, загадочные убийства, авантюры и городские легенды.", "full": "Оля, Юля и Саша разбирают разные сюжеты: мошенников и аферистов, загадочные убийства, истории необычных авантюр, городские легенды и мистику, а иногда и сложные морально-этические вопросы. Подача лёгкая, с юмором и культурными отсылками.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/us/podcast/%D0%BA%D1%80%D0%B0%D0%B9%D0%BC%D1%81%D0%B8%D0%BB%D1%8C%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/id1625356238"}, {"l": "YouTube", "h": "https://www.youtube.com/playlist?list=PLiiWVogED7ImW8bWwq8R7f9mB2v3I-jZj"}, {"l": "Telegram", "h": "https://t.me/crimesylvania"}, {"l": "VK", "h": "https://vk.ru/crimesylvania"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/22542579"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1625356238"}, {"l": "Boosty", "h": "https://boosty.to/crimesylvania"}], "year": 2022},
 {"id": "kokteyl", "title": "Коктейль \"Тру Крайм\"", "author": "Елена Шапетько", "tags": ["Нераскрытые дела", "Судебные процессы", "Исчезновения"], "editor": false, "short": "Малоизвестные истории о преступлениях, исчезновениях и судебных делах.", "full": "Авторский подкаст Елены Шапетько о необычных и малоизвестных преступлениях, исчезновениях, их расследованиях и судебных делах. Ведущая рассказывает истории неторопливо и камерно, как за столом. Подкаст для взрослых (18+).", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/us/podcast/%D0%BA%D0%BE%D0%BA%D1%82%D0%B5%D0%B9%D0%BB%D1%8C-%D1%82%D1%80%D1%83-%D0%BA%D1%80%D0%B0%D0%B9%D0%BC/id1769584365"}, {"l": "Telegram", "h": "https://t.me/truecrimecocktail"}, {"l": "VK", "h": "https://vk.ru/podcasts-227372026"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/33389648"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1769584365/e"}, {"l": "Boosty", "h": "https://boosty.to/cocktail-truecrime"}], "year": 2024},
 {"id": "nvtp", "title": "Не Все Так Просто", "author": "Алина и Жибек", "tags": ["Нераскрытые дела", "Расследования"], "editor": false, "short": "Каждую неделю реальные преступления шаг за шагом, в формате живого разговора.", "full": "Еженедельный подкаст о реальных преступлениях. Ведущие Алина и Жибек разбирают дела шаг за шагом: с версиями, сомнениями и эмоциями, а не в формате сухого пересказа.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/us/podcast/%D0%BD%D0%B5-%D0%B2%D1%81%D0%B5-%D1%82%D0%B0%D0%BA-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE/id1785004905"}, {"l": "YouTube", "h": "https://www.youtube.com/@podcast_truecrime"}, {"l": "Telegram", "h": "https://t.me/nevsetakprostopodcast"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/34465050"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1785004905"}, {"l": "Boosty", "h": "https://boosty.to/nevsetakprostoo"}], "year": 2024},
 {"id": "kraimtaim", "title": "Крайм Тайм с Кариной и Ирой", "author": "Карина и Ира", "tags": ["Нераскрытые дела", "Психология", "Секты"], "editor": false, "short": "Подруги каждую неделю рассказывают друг другу о реальных преступлениях.", "full": "Карина и Ира — подруги, увлечённые тру-крайм. Каждую неделю они рассказывают друг другу о реальных преступлениях: пропажах, маньяках, сектах и загадочных делах, а заодно делятся реакциями и мыслями.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/us/podcast/%D0%BA%D1%80%D0%B0%D0%B9%D0%BC-%D1%82%D0%B0%D0%B9%D0%BC-%D1%81-%D0%BA%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B9-%D0%B8-%D0%B8%D1%80%D0%BE%D0%B9/id1710758162"}, {"l": "YouTube", "h": "https://www.youtube.com/@DudkaKarina"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/27683111"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1710758162"}], "year": "2023–2025"},
 {"id": "marusya", "title": "Черничный подкаст", "author": "Маруся Черничкина", "tags": ["Видео", "Городские легенды"], "editor": false, "short": "Страшные истории от подписчиков и гости: блогеры и эксперты. 18+.", "full": "Маруся читает страшные истории, которые присылают подписчики. Часто в выпусках бывают гости, другие блогеры или эксперты. Обсуждаются тру-крайм, мистика и личные жуткие истории. Возрастное ограничение 18+.", "links": [{"l": "YouTube", "h": "https://www.youtube.com/channel/UCMiWy2TJ3MckIwuzyyleRcw"}]},
 {"id": "mistika", "title": "Мистика", "author": "Ирина Усачёва", "tags": ["Видео", "Исчезновения", "Секты"], "editor": false, "short": "Подробные разборы исчезновений, убийств и историй с сектами, с уважением к пострадавшим.", "full": "Ведущая Ирина Усачёва разбирает дела об исчезновениях людей, убийствах, а иногда историях, связанных с сектами и культовыми личностями. Она вникает в детали и мотивы, относится к пострадавшим с уважением и сочувствием и даёт зрителям самим составить мнение. Выпуски идут от 40 минут до полутора часов.", "links": [{"l": "YouTube", "h": "https://www.youtube.com/@misstika"}]},
 {"id": "agatha", "title": "Agatha Christie", "tags": ["Видео", "Расследования", "Нераскрытые дела"], "editor": false, "short": "Убийства и трагические случаи, после которых осталось много вопросов. Мрачная атмосфера.", "full": "Автор разбирает реальные криминальные истории: убийства и трагические случаи, которые оставили много вопросов. В роликах используются видеоматериалы из документальных и художественных фильмов, для атмосферы добавляется мрачная музыка, а рассказ ведётся проникновенным голосом.", "links": [{"l": "YouTube", "h": "https://www.youtube.com/channel/UCRv1uDv7I2bv7aavxmkRTtw"}]},
 {"id": "mantro", "title": "Olga Mantro", "author": "Ольга Мантро", "tags": ["Видео", "Культура"], "editor": false, "short": "Художница рассказывает реальные криминальные истории и рисует к ним иллюстрации.", "full": "Ольга Мантро — художница, блогер и писатель. На её канале популярен формат «Криминал арт»: она рассказывает жуткие реальные истории и одновременно рисует к ним иллюстрации в своём стиле (маркеры, акварель, акрил). Этот формат она перенесла в книгу «Криминал Арт. 10 жутких историй, произошедших на самом деле» (АСТ, 2024).", "links": [{"l": "YouTube", "h": "https://www.youtube.com/channel/UCbam_IQ84ZKNN4t59MjOaFA"}]},
 {"id": "faust", "title": "Фауст 21 века", "author": "Василий Бейнарович", "year": 2013, "tags": ["Видео", "Психология", "Серийные убийцы"], "editor": false, "short": "Психиатр разбирает преступления: психологические портреты, мотивы и эмоции.", "full": "Автор и ведущий Василий Бейнарович — врач-психиатр. Особенность канала: психологический разбор преступников. Помимо хронологии событий, он составляет психологические портреты и анализирует мотивы и эмоции. В роликах используются анимированные сцены, реальные кадры допросов и комментарии ведущего. Есть плейлист «Психология серийных убийц».", "links": [{"l": "YouTube", "h": "https://www.youtube.com/channel/UCaURWQGywYueRti9RMt05hA"}]},
 {"id": "richard", "title": "Записки Ричарда", "tags": ["Видео", "Нераскрытые дела"], "editor": false, "short": "Реальные криминальные истории, мистика и неразгаданные тайны. Выпуски подробные, часто длиннее часа.", "full": "Автор разбирает реальные криминальные истории, но не ограничивается ими: в выпусках встречаются сюжеты про мистику, неразгаданные тайны прошлого и необычные социальные явления. Подача детальная, многие ролики идут больше часа.", "links": [{"l": "YouTube", "h": "https://www.youtube.com/channel/UC4II_I6NFMuXLUlb88uNCXQ"}]},
 {"id": "bezsahara", "title": "Истории без сахара", "author": "Елена Погребижская", "tags": ["Видео", "Расследования", "Психология"], "editor": false, "short": "Авторский тру-крайм проект режиссёра документального кино: преступления, необычные происшествия, человеческие судьбы.", "full": "Елена Погребижская, режиссёр документального кино, рассказывает видеоистории о реальных преступлениях, необычных происшествиях и человеческих судьбах. В выпусках разбираются дела из России и других стран, мотивы и психологические детали. Подача без смягчения и лишней драматизации.", "links": [{"l": "YouTube", "h": "https://www.youtube.com/channel/UCjL52c68fne91uuKNgfnfGw"}]},
 {"id": "posledu", "title": "По следу", "year": 2020, "tags": ["Видео", "Серийные убийцы", "Исчезновения"], "editor": false, "short": "Российская история преступлений: дела о маньяках, убийствах и таинственных исчезновениях.", "full": "Автор разбирает реальные криминальные истории, которые произошли в России и других странах бывшего СССР: дела о маньяках, убийцах, похищениях и таинственных исчезновениях. Первый выпуск вышел в августе 2020 года.", "links": [{"l": "YouTube", "h": "https://www.youtube.com/channel/UCjx2Q1BzLhxtIm9JG4YWeHA"}]},
 {"id": "psihushka", "title": "Пролетая над крыльцом психушки", "author": "Крис Картер", "year": 2023, "tags": ["Психология", "Серийные убийцы"], "editor": false, "short": "Истории людей, которые, по версии авторов, утратили связь с реальностью и совершили преступления.", "full": "Подкаст Криса Картера, который называет себя «идеальным true-crime». В выпусках рассказывают истории людей, которые, по версии авторов, утратили связь с реальностью и совершили преступления. Бонусные эпизоды выходят на Бусти.", "links": [{"l": "Apple Podcasts", "h": "https://podcasts.apple.com/us/podcast/%D0%BF%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%8F-%D0%BD%D0%B0%D0%B4-%D0%BA%D1%80%D1%8B%D0%BB%D1%8C%D1%86%D0%BE%D0%BC-%D0%BF%D1%81%D0%B8%D1%85%D1%83%D1%88%D0%BA%D0%B8/id1562024476?l=ru"}, {"l": "Яндекс Музыка", "h": "https://music.yandex.ru/album/14767450"}, {"l": "Podcast.ru", "h": "https://podcast.ru/1562024476/e?page=1"}, {"l": "Сайт", "h": "https://kukuha.mave.digital/"}, {"l": "Telegram", "h": "https://t.me/pzdfm"}, {"l": "VK", "h": "https://m.vk.ru/club217305175"}, {"l": "Boosty", "h": "https://boosty.to/kukuha_carter"}]}
];

const META = {
  tut:{h:4,w:'средний'}, lora:{h:4,w:'тяжёлый'}, holmy:{h:5,w:'средний'},
  kraska:{h:1,w:'средний'}, dela:{h:1,w:'тяжёлый'}, ruki:{h:2,w:'тяжёлый'},
  osnovano:{h:1,w:'средний'}, podval:{h:4,w:'лёгкий'}, kraims:{h:5,w:'лёгкий'},
  kokteyl:{h:1,w:'тяжёлый'}, nvtp:{h:2,w:'тяжёлый'}, kraimtaim:{h:3,w:'средний'}
};

podcasts.forEach(x => { if (!META[x.id]) META[x.id] = {h: 2, w: 'средний'}; });
const $ = id => document.getElementById(id);
const state = {q:'', tags:new Set(), fav:false, unheard:false};
let done = new Set();
try { done = new Set(JSON.parse(localStorage.getItem('tc-done') || '[]')); } catch {}

function toggleDone(id){
  done.has(id) ? done.delete(id) : done.add(id);
  try { localStorage.setItem('tc-done', JSON.stringify([...done])); } catch {}
  render();
}

let lastRnd = null;
let rndOnlyUnheard = false;
function randomId(){
  const source = rndOnlyUnheard ? podcasts.filter(p => !done.has(p.id)) : podcasts.slice();
  if (!source.length) return null;
  let pool = source.length > 1 ? source.filter(p => p.id !== lastRnd) : source;
  if (!pool.length) pool = source;
  return (lastRnd = pool[Math.floor(Math.random() * pool.length)].id);
}

let favs = new Set();
try { favs = new Set(JSON.parse(localStorage.getItem('tc-favs') || '[]')); } catch {}
function toggleFav(id){
  favs.has(id) ? favs.delete(id) : favs.add(id);
  try { localStorage.setItem('tc-favs', JSON.stringify([...favs])); } catch {}
  render();
}

let want = new Set();
try { want = new Set(JSON.parse(localStorage.getItem('tc-want') || '[]')); } catch {}
const saveWant = () => { try { localStorage.setItem('tc-want', JSON.stringify([...want])); } catch {} };
function toggleWant(id){ want.has(id) ? want.delete(id) : want.add(id); saveWant(); render(); }
/* «Новое»: id подкаста и дата добавления (метка видна 30 дней) */
const ADDED = {kokteyl:'2026-10-10', nvtp:'2026-10-10', kraimtaim:'2026-10-10', marusya:'2026-10-11', mistika:'2026-10-11', agatha:'2026-10-11', mantro:'2026-10-11', faust:'2026-10-11', richard:'2026-10-11', bezsahara:'2026-10-11', posledu:'2026-10-11', psihushka:'2026-10-14'};
const isNew = id => ADDED[id] && (Date.now() - Date.parse(ADDED[id])) < 30 * 864e5;
const listenWord = p => !p.links.length ? 'Найти' : (p.links[0].l.includes('YouTube') ? 'Смотреть' : 'Слушать');
let notes = {}, colls = [], recent = [];
try { notes = JSON.parse(localStorage.getItem('tc-notes') || '{}'); } catch {}
try { colls = JSON.parse(localStorage.getItem('tc-colls') || '[]'); } catch {}
try { recent = JSON.parse(localStorage.getItem('tc-recent') || '[]'); } catch {}
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const noteBox = id => `<div class="nbox"><label for="note-${id}">Заметка (видна только вам)</label><textarea id="note-${id}" data-note="${id}" rows="3" maxlength="600" placeholder="Например: дослушала до 15-й минуты, начать со 2-го сезона">${esc(notes[id] || '')}</textarea></div>`;
const collChips = id => colls.length ? `<h4>Мои коллекции</h4><div class="filters mcoll">${colls.map(c => `<button type="button" class="chip" data-coll="${c.id}" data-pid="${id}" aria-pressed="${c.ids.includes(id)}">${esc(c.name)}</button>`).join('')}</div>` : '<p class="gl-note">Коллекций пока нет: создайте её в разделе «Мои коллекции».</p>';
const toneRow = p => { const m = META[p.id]; return m ? `<div class="tone" title="Субъективная оценка редакции. Критерии — в разделе «Как мы оцениваем тяжесть»"><span>Юмор</span><i class="dots" role="img" aria-label="юмор: ${m.h} из 5">${'●'.repeat(m.h)}<u>${'●'.repeat(5-m.h)}</u></i><span class="wt">материал: ${m.w}</span></div>` : '<div class="tone"><span>Тон не оценён</span></div>'; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const initials = t => t.replace(/[^A-Za-zА-Яа-яЁё0-9]/g,'').slice(0,2).toUpperCase();
const searchUrl = t => 'https://podcasts.apple.com/search?term=' + encodeURIComponent(t);
const hue = p => [...p.id].reduce((s,c) => s + c.charCodeAt(0) * 7, 0) % 360;
const IMG = {"tut": {"c": "images/img-28.jpg"}, "lora": {"c": "images/img-29.jpg"}, "holmy": {"c": "images/img-30.jpg"}, "kraska": {"c": "images/img-31.jpg"}, "dela": {"c": "images/img-32.jpg"}, "ruki": {"c": "images/img-33.jpg"}, "osnovano": {"c": "images/img-34.jpg"}, "podval": {"c": "images/img-35.jpg"}, "kraims": {"c": "images/img-36.jpg"}, "nvtp": {"c": "images/img-37.jpg"}, "kraimtaim": {"c": "images/img-38.jpg"}, "kokteyl": {"c": "images/img-39.jpg"}, "richard": {"c": "images/img-40.jpg", "p": ["images/img-41.jpg"]}, "bezsahara": {"c": "images/img-42.jpg"}, "mistika": {"c": "images/img-43.jpg", "p": ["images/img-44.jpg"]}, "posledu": {"c": "images/img-45.jpg", "p": ["images/img-46.jpg"]}, "marusya": {"c": "images/img-47.jpg", "p": ["images/img-48.jpg"]}, "agatha": {"c": "images/img-49.jpg", "p": ["images/img-50.jpg"]}, "faust": {"c": "images/img-51.jpg", "p": ["images/img-52.jpg"]}, "mantro": {"c": "images/img-53.jpg", "p": ["images/img-54.jpg", "images/img-55.jpg"]}, "psihushka": {"c": "images/img-56.jpg", "p": ["images/img-57.jpg", "images/img-58.jpg"]}};
const cover = p => { const m = IMG[p.id] || {}; return `<div class="cover" style="--h:${hue(p)}" aria-hidden="true"><b>${esc(initials(p.title))}</b><img src="${m.c || `covers/${p.id}.jpg`}" alt="" loading="lazy" onerror="this.remove()"></div>`; };
const tile = p => `<button type="button" class="tile${isNew(p.id) ? ' is-new' : ''}" data-open="${p.id}" aria-label="${esc(p.title)}: подробнее">${cover(p)}<span>${esc(p.title)}</span></button>`;
const listenLink = p => p.links[0] || {l:'Найти в Apple Podcasts', h:searchUrl(p.title)};

const favChip = document.createElement('button');
favChip.type='button'; favChip.className='chip'; favChip.textContent='♥ Избранное'; favChip.setAttribute('aria-pressed','false');
favChip.onclick = () => { state.fav = !state.fav; favChip.setAttribute('aria-pressed', state.fav); render(); };
$('tagFilters').appendChild(favChip);

const newChip = document.createElement('button');
newChip.type='button'; newChip.className='chip'; newChip.textContent='Не прослушано'; newChip.setAttribute('aria-pressed','false');
newChip.onclick = () => { state.unheard = !state.unheard; newChip.setAttribute('aria-pressed', state.unheard); render(); };
$('tagFilters').appendChild(newChip);

[...new Set(podcasts.flatMap(p => p.tags))].sort((a,b)=>a.localeCompare(b,'ru')).forEach(t => {
  const b = document.createElement('button');
  b.type='button'; b.className='chip'; b.textContent=t; b.setAttribute('aria-pressed','false');
  b.onclick = () => {
    state.tags.has(t) ? state.tags.delete(t) : state.tags.add(t);
    b.setAttribute('aria-pressed', state.tags.has(t));
    render();
  };
  $('tagFilters').appendChild(b);
});

function filtered(){
  const q = state.q.trim().toLowerCase().replace(/ё/g,'е');
  return podcasts.filter(p => {
    const hay = (p.title+' '+(p.author||'')+' '+p.short+' '+p.full).toLowerCase().replace(/ё/g,'е');
    return (!q || hay.includes(q)) && (!state.tags.size || p.tags.some(t => state.tags.has(t))) && (!state.fav || favs.has(p.id)) && (!state.unheard || !done.has(p.id));
  }).sort((a,b) => a.title.localeCompare(b.title,'ru'));
}

function card(p){
  const l = listenLink(p);
  return `<article class="card${done.has(p.id)?' done':''}${isNew(p.id)?' is-new':''}">${want.has(p.id) ? `<span class="qnum" title="Место в очереди" aria-label="Место в очереди: ${[...want].indexOf(p.id) + 1}">${[...want].indexOf(p.id) + 1}</span>` : ''}
    <button type="button" class="fav" data-fav="${p.id}" aria-pressed="${favs.has(p.id)}" aria-label="В избранное: ${esc(p.title)}">♥</button><span class="eq" aria-hidden="true"><i></i><i></i><i></i></span>
    <div class="top">${cover(p)}
    <div>
      <h3>${esc(p.title)}</h3>
      ${p.author?`<p class="author">${esc(p.author)}</p>`:''}
      ${p.editor?'<span class="badge">Выбор редакции</span>':''}${isNew(p.id)?'<span class="badge new">Новое</span>':''}${notes[p.id] ? '<span class="has-note" title="Есть заметка" aria-label="Есть заметка">📝</span>' : ''}
    </div></div>
    <p class="desc">${esc(p.short)}</p>
    ${toneRow(p)}
    <div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
    <div class="peek" aria-hidden="true">
      ${notes[p.id] ? `<div class="peek-note">📝 ${esc(notes[p.id])}</div>` : ''}<h4>${esc(p.title)}</h4>
      <p>${esc(p.full)}</p>
      <small>«Подробнее» откроет полную карточку со ссылками</small>
    </div>
    <div class="actions"><button class="btn" data-open="${p.id}">Подробнее</button>
    <a class="btn btn--p" href="${l.h}" target="_blank" rel="noopener">${listenWord(p)}</a>
    <button type="button" class="done-btn want-btn" data-want="${p.id}" aria-pressed="${want.has(p.id)}" aria-label="Хочу послушать: ${esc(p.title)}" title="Хочу послушать"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg></button>
    <button type="button" class="done-btn" data-done="${p.id}" aria-pressed="${done.has(p.id)}" aria-label="Прослушано: ${esc(p.title)}" title="Отметить как прослушанное">✓</button></div></article>`;
}

function render(){
  const list = filtered();
  $('gallery').innerHTML = list.map(tile).join('');
  const n = podcasts.filter(p => done.has(p.id)).length, tot = podcasts.length;
  $('headStats').innerHTML = `Прослушано: <b>${n}</b> из ${tot}`;
  $('pfill').style.width = (n / tot * 100) + '\%';$('pbar').setAttribute('aria-valuenow', n); $('pbar').setAttribute('aria-valuemax', tot);$('ptext').textContent = n === tot ? 'Каталог пройден!' : `Прослушано подкастов: ${n} из ${tot}`;
  $('status').textContent = list.length ? `Найдено: ${list.length}` : '';
  $('grid').innerHTML = list.length ? list.map(card).join('')
    : '<div class="empty">Ничего не найдено. Сбросьте темы или измените запрос.</div>';
}

let lastFocus = null;
function getSimilarHTML(p) {
    if (!p.tags || !p.tags.length) return '';
    const similar = podcasts
        .filter(x => x.id !== p.id)
        .map(x => {
            const common = x.tags.filter(t => p.tags.includes(t)).length;
            return { p: x, score: common };
        })
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score || a.p.title.localeCompare(b.p.title, 'ru'))
        .slice(0, 3)
        .map(x => x.p);

    if (!similar.length) return '';

    return `<h4>Похожие подкасты</h4>
    <div class="similar-row">
        ${similar.map(s => `
            <button type="button" class="similar-card" onclick="openModal('${s.id}')">
                ${cover(s)}
                <span>${esc(s.title)}</span>
                <small>${s.tags.filter(t => p.tags.includes(t)).slice(0,2).map(esc).join(', ')}</small>
            </button>
        `).join('')}
    </div>`;
}
function openModal(id, rnd = false){
  const p = podcasts.find(x => x.id === id); if (!p) return;
  if (!$('modal').classList.contains('open')) lastFocus = document.activeElement;
  const links = p.links.length ? p.links : [];
  $('mbox').innerHTML = `${rnd?'<p class="rndtag">🎲 Случайный выбор</p>':''}<div class="mhead">${cover(p)}
    <div><h3 id="mtitle">${esc(p.title)}</h3>${p.author?`<p class="author">${esc(p.author)}</p>`:''}${p.year?`<p class="author">${typeof p.year==='number'?`Запущен в ${p.year} году`:`Годы выхода: ${esc(p.year)}`}</p>`:''}</div>
    <button class="mclose" aria-label="Закрыть" data-close>&times;</button></div>
  <div id="mp-info">${noteBox(p.id)}<p>${esc(p.full)}</p>${((IMG[p.id] || {}).p || []).length ? `<div class="mph">${IMG[p.id].p.map(u => `<img src="${u}" alt="" loading="lazy">`).join('')}</div>` : ''}${toneRow(p)}
    <h4>Темы</h4><div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
    <h4>Где искать</h4><div class="mlinks">${links.map(x=>`<a class="btn" href="${x.h}" target="_blank" rel="noopener">${esc(x.l)}</a>`).join('')}
    ${p.links.length ? '' : `<a class="btn" href="${searchUrl(p.title)}" target="_blank" rel="noopener">Поиск в Apple Podcasts</a>`}</div></div>
  ${collChips(p.id)}${getSimilarHTML(p)}<div class="mfoot"><button type="button" class="btn" data-done="${p.id}" aria-pressed="${done.has(p.id)}">Прослушано</button> <button type="button" class="btn" data-want="${p.id}" aria-pressed="${want.has(p.id)}">Хочу послушать</button>${rnd?'<button type="button" class="btn btn--p" id="again">🎲 Другой подкаст</button>':''}</div>`;
  $('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  $('mbox').querySelector('[data-close]').focus();
}
function closeModal(){
  $('modal').classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

document.addEventListener('mouseup', e => {
  const btn = e.target.closest('button, a');
  if (btn) btn.blur();
});

document.addEventListener('click', e => {
  const f = e.target.closest('[data-fav]');
  if (f) { toggleFav(f.dataset.fav); return; }
  const c = e.target.closest('[data-collect]');
  if (c) {
    state.tags = new Set([c.dataset.collect]); state.fav = false; state.unheard = false;
    favChip.setAttribute('aria-pressed','false');
    newChip.setAttribute('aria-pressed','false');
    [...$('tagFilters').querySelectorAll('.chip')].forEach(b => { if (b !== favChip && b !== newChip) b.setAttribute('aria-pressed', b.textContent === c.dataset.collect); });
    render(); $('catalog').scrollIntoView({behavior:'smooth'});
  }
  const d = e.target.closest('[data-done]');
  if (d) { toggleDone(d.dataset.done); return; }
  if (e.target.closest('#random') || e.target.closest('#again')) {
    const btn = e.target.closest('#random') || e.target.closest('#again');
    const id = randomId();
    if (!id) {
      const orig = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Все прослушаны ✓';
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 1500);
      return;
    }
    openModal(id, true);
    return;
  }
  const o = e.target.closest('[data-open]');
  if (o) openModal(o.dataset.open);
  if (e.target === $('modal') || e.target.closest('[data-close]')) closeModal();
});

document.addEventListener('keydown', e => {
  if (!$('modal').classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Tab') {   /* фокус не уходит за пределы окна */
    const f = [...$('mbox').querySelectorAll('a,button')].filter(x => !x.closest('[hidden]'));
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

$('search').addEventListener('input', e => { state.q = e.target.value; render(); });

$('randomUnheard').onclick = () => {
  rndOnlyUnheard = !rndOnlyUnheard;
  $('randomUnheard').setAttribute('aria-pressed', rndOnlyUnheard);
};

const burger = $('burger'), mmenu =$('mmenu');
function setMenu(open){
  mmenu.classList.toggle('open', open);
  mmenu.inert = !open;
  burger.setAttribute('aria-expanded', open);
}
burger.onclick = () => setMenu(!mmenu.classList.contains('open'));
mmenu.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });

const tabs = [...document.querySelectorAll('.tab')];
function setTab(name){
  tabs.forEach(t => {
    const on = t.dataset.tab === name;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
  });
  $('grid').hidden = name !== 'list';$('gallery').hidden = name !== 'gallery';
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => setTab(t.dataset.tab));
});

const root = document.documentElement;
let savedTheme; try { savedTheme = localStorage.getItem('tc-theme'); } catch {}
root.dataset.theme = savedTheme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
$('theme').onclick = () => {
  const t = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = t; try { localStorage.setItem('tc-theme', t); } catch {}
};

const nTags = new Set(podcasts.flatMap(p => p.tags)).size;
$('stats').innerHTML = `<span><b data-n="${podcasts.length}">${podcasts.length}</b>подкастов</span> <span><b data-n="${nTags}">${nTags}</b>тем</span>`;

$('year').textContent = new Date().getFullYear();
render();

/* ── Глоссарий ── */
const GROUPS = ['Люди в деле','Доказательства','Закон и суд','Расследование'];
const GLOSS = [
  {t:'Подозреваемый', g:'Люди в деле', d:'Человек, которого подозревают в преступлении, но обвинение ему ещё не предъявлено. Подозрение ещё не означает вину.'},
  {t:'Обвиняемый', g:'Люди в деле', d:'Человек, которому следователь официально предъявил обвинение. Расследование продолжается, а виновным его может признать только суд.'},
  {t:'Подсудимый', g:'Люди в деле', d:'Обвиняемый, дело которого передано в суд. Пока приговор не вступил в законную силу, он считается невиновным.'},
  {t:'Серийный убийца', g:'Люди в деле', d:'Человек, совершивший несколько убийств с паузами между ними. Сколько именно жертв считать «серией», разные источники определяют по-разному.'},
  {t:'Алиби', g:'Доказательства', d:'Утверждение, что человека не было на месте преступления в момент события. Его проверяют: сверяют с записями камер, показаниями свидетелей, перепиской и звонками.'},
  {t:'Улики и вещдоки', g:'Доказательства', d:'Улика — любой факт, указывающий на событие и его участников. Вещественные доказательства — предметы, приобщённые к делу: орудие, одежда, следы, записи.'},
  {t:'Косвенные улики', g:'Доказательства', d:'Факты, которые не доказывают вину напрямую, а работают только в цепочке с другими. Например, у человека был мотив и не было алиби, но самого преступления никто не видел.'},
  {t:'Судмедэкспертиза', g:'Доказательства', d:'Исследование, которое устанавливает причину смерти, характер травм и другие медицинские обстоятельства. Время смерти обычно оценивают приблизительно.'},
  {t:'Эксгумация', g:'Доказательства', d:'Извлечение тела из захоронения для дополнительного исследования. Обычно по решению следователя, а если родственники против, нужно разрешение суда.'},
  {t:'Следственный эксперимент', g:'Доказательства', d:'Воспроизведение обстоятельств события на месте, чтобы проверить, могло ли оно произойти так, как рассказывают участники.'},
  {t:'Опознание', g:'Доказательства', d:'Процедура, при которой свидетель или потерпевший должен узнать человека или предмет среди нескольких похожих.'},
  {t:'Презумпция невиновности', g:'Закон и суд', d:'Принцип: человек считается невиновным, пока его вину не докажут в суде и приговор не вступит в законную силу. Доказывать вину должна сторона обвинения.'},
  {t:'Состав преступления', g:'Закон и суд', d:'Набор признаков, по которым поступок признают конкретным преступлением: что произошло, кто это сделал и с каким умыслом. Нет хотя бы одного признака — нет состава.'},
  {t:'Явка с повинной', g:'Закон и суд', d:'Добровольное сообщение человека о том, что он совершил преступление. В российском праве это смягчающее обстоятельство.'},
  {t:'Срок давности', g:'Закон и суд', d:'Срок, по истечении которого человека, как правило, уже нельзя привлечь к ответственности. В России он зависит от тяжести преступления: от двух до пятнадцати лет. Для самых тяжких составов вопрос решает суд.'},
  {t:'Мотив', g:'Расследование', d:'Причина, по которой человек мог совершить преступление: деньги, ревность, месть, страх. Мотив нужен для версии, но сам по себе вину не доказывает.'},
  {t:'Профайлинг', g:'Расследование', d:'Попытка составить психологический и поведенческий портрет неизвестного преступника по обстоятельствам дела. Точность метода оценивают по-разному, и доказательством он обычно не считается.'},
  {t:'Холодное дело', g:'Расследование', d:'Старое нераскрытое дело, по которому активная работа остановилась. К нему возвращаются, когда появляются новые данные или методы, например ДНК-анализ.'}
];
const SLANG = [
  {t:'Крайм', d:'Сокращение от английского crime, «преступление». Отсюда «тру-крайм» (реальные преступления) и «крайм-подкаст».'},
  {t:'Колд-кейс', d:'Калька с английского cold case, то есть «холодное дело».'},
  {t:'Глухарь, висяк', d:'Полицейский жаргон: нераскрытое дело, по которому долго нет результата.'},
  {t:'Серийник', d:'Разговорное «серийный убийца». Ведущие используют для краткости.'},
  {t:'Маньяк', d:'Разговорное слово для преступника, который действует по навязчивой внутренней потребности. Юридического термина нет, в подкастах так часто называют серийных преступников.'},
  {t:'Мокрое дело', d:'Жаргон: дело об убийстве.'},
  {t:'Скам', d:'От английского scam, «мошенничество, обман». Чаще так говорят об интернет- и финансовых схемах.'},
  {t:'Диванные детективы', d:'Люди, которые разбирают дело дома по открытым материалам, без доступа к расследованию. Их версии бывают интересны, но это не расследование, и без проверки они могут навредить.'},
  {t:'Триггер-ворнинг', d:'Предупреждение в начале выпуска о тяжёлых темах: насилии, смерти, преступлениях против детей. Ещё говорят «контент-ворнинг».'},
  {t:'Многосерийное дело', d:'Дело, которому посвящено несколько выпусков подряд, как мини-сериалу.'}
];

/* Иконки терминов (линейные, 24×24) и фото. Фото: GL_IMG['Термин'] = 'images/img-59.jpg' */
const GL_IMG = {"Алиби": ["images/img-60.jpg", "images/img-61.jpg"], "Улики и вещдоки": ["images/img-62.jpg", "images/img-63.jpg", "images/img-64.jpg"], "Косвенные улики": ["images/img-65.jpg", "images/img-66.jpg", "images/img-67.jpg"], "Мотив": ["images/img-68.jpg"]};
Object.assign(GL_IMG, {"Обвиняемый": ["images/img-69.jpg"], "Опознание": ["images/img-70.jpg"], "Подозреваемый": ["images/img-71.jpg", "images/img-72.jpg"], "Подсудимый": ["images/img-73.jpg"], "Презумпция невиновности": ["images/img-74.jpg"], "Профайлинг": ["images/img-75.jpg", "images/img-76.jpg"], "Серийный убийца": ["images/img-77.jpg", "images/img-78.jpg", "images/img-79.jpg"], "Следственный эксперимент": ["images/img-80.jpg", "images/img-81.jpg", "images/img-82.jpg"], "Состав преступления": ["images/img-83.jpg"], "Срок давности": ["images/img-84.jpg", "images/img-85.jpg"], "Судмедэкспертиза": ["images/img-86.jpg", "images/img-87.jpg"], "Холодное дело": ["images/img-88.jpg"]});
Object.assign(GL_IMG, {"Эксгумация": ["images/img-89.jpg", "images/img-90.jpg"], "Явка с повинной": ["images/img-91.jpg", "images/img-92.jpg"]});
const GL_CAP = {"Серийный убийца": ["Андрей Чикатило", "Тед Банди", "Джеффри Дамер"]};
const ICONS = {
  _: '<path d="M4 5h16v11H10l-5 4v-4H4z"/>',
  'Подозреваемый': '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6"/>',
  'Обвиняемый': '<circle cx="10" cy="8" r="3.5"/><path d="M3.5 20c0-4 3-6 6.5-6"/><path d="M18 7v5M18 16v.01"/>',
  'Подсудимый': '<path d="M3 9l9-5 9 5"/><path d="M5 9v9M10 9v9M14 9v9M19 9v9"/><path d="M3 20h18"/>',
  'Серийный убийца': '<circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 12h3M14 12h3"/>',
  'Алиби': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  'Улики и вещдоки': '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
  'Косвенные улики': '<circle cx="5" cy="18" r="1.5"/><circle cx="12" cy="9" r="1.5"/><circle cx="19" cy="15" r="1.5"/><path d="M6.3 16.8l4.4-6.4M13.4 9.7l4.2 4.3" stroke-dasharray="2 2"/>',
  'Судмедэкспертиза': '<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/>',
  'Эксгумация': '<path d="M6 21V10a6 6 0 0 1 12 0v11"/><path d="M3 21h18"/><path d="M12 8v6M9.5 10.5h5"/>',
  'Следственный эксперимент': '<path d="M8 5l11 7-11 7z"/>',
  'Опознание': '<circle cx="6" cy="8" r="2.2"/><circle cx="12" cy="8" r="2.2"/><circle cx="18" cy="8" r="2.2"/><path d="M3 18c0-2.5 1.5-4 3-4s3 1.5 3 4M9 18c0-2.5 1.5-4 3-4s3 1.5 3 4M15 18c0-2.5 1.5-4 3-4s3 1.5 3 4"/>',
  'Презумпция невиновности': '<path d="M12 4v16M7 20h10M5 8h14"/><path d="M5 8l-3 6a3 3 0 0 0 6 0zM19 8l-3 6a3 3 0 0 0 6 0z"/>',
  'Состав преступления': '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 14l2 2 4-4"/>',
  'Явка с повинной': '<path d="M4 5h16v11H10l-5 4v-4H4z"/>',
  'Срок давности': '<path d="M7 3h10M7 21h10"/><path d="M8 3c0 5 4 5 4 9s-4 4-4 9M16 3c0 5-4 5-4 9s4 4 4 9"/>',
  'Мотив': '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12v.01"/>',
  'Профайлинг': '<path d="M6 18c0-8 3-13 6-13s6 5 6 13"/><path d="M9 18c0-5 1.2-9 3-9s3 4 3 9"/><path d="M12 18v-5"/>',
  'Холодное дело': '<path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"/>',
  'Глухарь, висяк': '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  'Маньяк': '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  'Мокрое дело': '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  'Скам': '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>',
  'Диванные детективы': '<path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/><path d="M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3z"/><path d="M6 20v1M18 20v1"/>',
  'Триггер-ворнинг': '<path d="M12 3l9 17H3z"/><path d="M12 10v4M12 17v.01"/>',
  'Многосерийное дело': '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'
};
ICONS['Колд-кейс'] = ICONS['Холодное дело'];
ICONS['Серийник'] = ICONS['Серийный убийца'];
ICONS['Крайм'] = ICONS['Триггер-ворнинг'];
const gs = {tab:'terms', q:'', group:''};
const glNorm = x => x.toLowerCase().replace(/ё/g,'е');

function renderGloss(){
  const q = glNorm(gs.q.trim());
  const list = (gs.tab === 'terms' ? GLOSS : SLANG)
    .filter(x => (!q || glNorm(x.t + ' ' + x.d).includes(q)) && (gs.tab !== 'terms' || !gs.group || x.g === gs.group))
    .sort((a,b) => a.t.localeCompare(b.t,'ru'));
  $('glList').innerHTML = list.length
    ? list.map(x => { const ims = [].concat(GL_IMG[x.t] || []), caps = GL_CAP[x.t] || [], ic = ICONS[x.t] || ICONS._; return `<article class="gl-item${ims.length ? ' has-ph' : ''}">${ims.length ? '<svg class="gl-cam" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>' : ''}${ims.length ? `<div class="gl-ph"${ims.length > 1 ? ` data-n="${ims.length}"` : ''}>${ims.map((u, i) => `<img src="${u}" alt="${esc(caps[i] || '')}" data-cap="${esc(caps[i] || '')}" loading="lazy"${i ? '' : ' class="on"'}>`).join('')}${caps.length ? `<span class="gl-cap" aria-hidden="true">${esc(caps[0])}</span>` : ''}${ims.length > 1 ? `<span class="gl-dots" aria-hidden="true">${ims.map((_, i) => `<i${i ? '' : ' class="on"'}></i>`).join('')}</span>` : ''}</div>` : ''}<div class="gl-head"><span class="gl-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ic}</svg></span><h3>${esc(x.t)}</h3></div><p>${esc(x.d)}</p>${x.g ? `<span class="tag">${esc(x.g)}</span>` : ''}</article>`; }).join('')
    : '<div class="empty">Ничего не найдено. Сбросьте группу или измените запрос.</div>';
  $('glStatus').textContent = list.length ? `Найдено: ${list.length}` : '';
}

GROUPS.forEach(g => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'chip'; b.textContent = g; b.setAttribute('aria-pressed','false');
  b.onclick = () => {
    gs.group = gs.group === g ? '' : g;
    [...$('glChips').children].forEach(c => c.setAttribute('aria-pressed', c.textContent === gs.group));
    renderGloss();
  };
  $('glChips').appendChild(b);
});

const gtabs = [...document.querySelectorAll('.gtab')];
function setGTab(name, focus){
  gs.tab = name;
  gtabs.forEach(t => {
    const on = t.dataset.g === name;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    if (on) { $('glList').setAttribute('aria-labelledby', t.id); if (focus) t.focus(); }
  });
  $('glChips').hidden = name !== 'terms';
  $('glSlangNote').hidden = name !== 'slang';
  renderGloss();
}
gtabs.forEach((t, i) => {
  t.addEventListener('click', () => setGTab(t.dataset.g));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); setGTab(gtabs[(i + 1) % gtabs.length].dataset.g, true); }
  });
});
$('glSearch').addEventListener('input', e => { gs.q = e.target.value; renderGloss(); });
renderGloss();

/* ── Викторина, значки, статистика ── */
let qbest = 0, qplayed = 0;
try { const o = JSON.parse(localStorage.getItem('tc-quiz') || '{}'); qbest = o.best || 0; qplayed = o.played || 0; } catch {}
const QN = 5;
const qs = {i:0, score:0, list:[], answered:false, res:[], pick:[], rec:false};
const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const QKIND = {case:'Ситуация', term:'Угадай термин', myth:'Миф или факт', dilemma:'Что делать?'};
/* case/term: o[0] — верный ответ (порядок перемешивается). myth: a — верно ли утверждение. */
const QBANK = [
  {kind:'case', term:'Подозреваемый', q:'В какой последовательности меняется статус человека, если дело дошло до суда?',
   o:['Подозреваемый → обвиняемый → подсудимый','Обвиняемый → подозреваемый → подсудимый','Подсудимый → обвиняемый → подозреваемый','Подозреваемый → подсудимый → обвиняемый'],
   exp:'Сначала человека подозревают (обвинения ещё нет), потом ему предъявляют обвинение, а когда дело передано в суд, он становится подсудимым. Виновным его может признать только суд.'},
  {kind:'case', term:'Алиби', q:'Подозреваемый уверяет, что в ночь убийства был в другом городе. Что сделают следователи с этим заявлением?',
   o:['Проверят по записям камер, показаниям свидетелей, переписке и звонкам','Сразу признают его доказательством невиновности','Не будут проверять, пока не найдут орудие','Передадут в суд без проверки'],
   exp:'Алиби — это утверждение, а не готовое доказательство. Его сверяют с записями камер, показаниями свидетелей, перепиской и звонками.'},
  {kind:'case', term:'Улики и вещдоки', q:'Что из перечисленного относится к вещественным доказательствам?',
   o:['Куртка с пятнами крови, приобщённая к делу','Показания свидетеля','Версия ведущего подкаста','Слухи среди соседей'],
   exp:'Вещественные доказательства — предметы, приобщённые к делу: орудие, одежда, следы, записи. Показания свидетелей относятся к другому виду доказательств, а версии и слухи доказательствами не являются.'},
  {kind:'case', term:'Косвенные улики', q:'У подозреваемого был мотив и нет алиби, но самого преступления никто не видел. Как называют такие факты по отдельности?',
   o:['Косвенные улики','Прямые доказательства','Вещественные доказательства','Опознание'],
   exp:'Косвенные улики вину напрямую не доказывают и работают только в цепочке с другими фактами.'},
  {kind:'myth', term:'Судмедэкспертиза', a:false, q:'Судмедэксперт может назвать время смерти с точностью до минуты.',
   exp:'Нет. Судмедэкспертиза устанавливает причину смерти и характер травм, а время смерти обычно оценивают только приблизительно.'},
  {kind:'case', term:'Эксгумация', q:'Следователь решил провести эксгумацию, но родственники погибшего против. Что нужно, чтобы её всё-таки провести?',
   o:['Разрешение суда','Ничего: решения следователя всегда достаточно','Согласие администрации кладбища','Заключение судмедэксперта'],
   exp:'Обычно эксгумацию назначает следователь, но если родственники против, нужно разрешение суда.'},
  {kind:'term', term:'Следственный эксперимент', q:'Следователь со свидетелем идёт на место события и воспроизводит происходившее, чтобы проверить, могло ли всё случиться так, как тот рассказывает. Как называется эта процедура?',
   o:['Следственный эксперимент','Опознание','Судмедэкспертиза','Профайлинг'],
   exp:'Следственный эксперимент проверяет версию на месте: могло ли событие произойти так, как рассказывают участники.'},
  {kind:'myth', term:'Опознание', a:false, q:'При опознании свидетелю показывают одного человека и спрашивают: «Это он?»',
   exp:'Нет. При опознании свидетель должен узнать человека или предмет среди нескольких похожих.'},
  {kind:'case', term:'Презумпция невиновности', q:'Кто в суде должен доказывать вину подсудимого?',
   o:['Сторона обвинения','Сам подсудимый','Судья','Адвокат защиты'],
   exp:'По презумпции невиновности вину доказывает сторона обвинения. Подсудимому не нужно доказывать, что он невиновен.'},
  {kind:'myth', term:'Подсудимый', a:true, q:'Суд вынес приговор, но он ещё не вступил в законную силу. Человека по-прежнему считают невиновным.',
   exp:'Верно. Пока приговор не вступил в законную силу, человек считается невиновным.'},
  {kind:'case', term:'Состав преступления', q:'Что значит фраза «в деянии нет состава преступления»?',
   o:['Не хватает хотя бы одного признака, по которому поступок считают преступлением','Преступника так и не нашли','Дело закрыли из-за срока давности','У подозреваемого железное алиби'],
   exp:'Состав преступления — набор признаков: что произошло, кто это сделал и с каким умыслом. Нет хотя бы одного признака — нет состава.'},
  {kind:'case', term:'Явка с повинной', q:'Человек сам пришёл в полицию и рассказал, что совершил преступление. Как это учитывает российское право?',
   o:['Как смягчающее обстоятельство','Как основание полностью освободить от ответственности','Как отягчающее обстоятельство','Никак не учитывает'],
   exp:'Явка с повинной — добровольное сообщение о преступлении. Это смягчающее обстоятельство, но само по себе от ответственности оно не освобождает.'},
  {kind:'myth', term:'Срок давности', a:false, q:'Для самых тяжких преступлений срок давности истекает так же автоматически, как для остальных.',
   exp:'Нет. Срок давности в России зависит от тяжести преступления (от двух до пятнадцати лет), а для самых тяжких составов вопрос решает суд.'},
  {kind:'case', term:'Мотив', q:'У подозреваемого был мотив: долг перед погибшей. Что это значит для дела?',
   o:['Можно строить версию, но вину сам по себе мотив не доказывает','Дело можно передавать в суд: мотив — достаточное доказательство','Подозреваемого нужно задерживать: мотив доказывает умысел','Мотив значения не имеет, версии строят только по уликам'],
   exp:'Мотив нужен для версии, но сам по себе вину не доказывает.'},
  {kind:'case', term:'Профайлинг', q:'Профайлер составил психологический портрет неизвестного преступника. Примет ли суд этот портрет как доказательство вины?',
   o:['Обычно нет: это ориентир для поиска, а не доказательство','Да, это одно из главных доказательств','Да, если портрет составил врач-психиатр','Да, если портрет совпал с внешностью подозреваемого'],
   exp:'Точность профайлинга оценивают по-разному, и доказательством он обычно не считается.'},
  {kind:'case', term:'Серийный убийца', q:'Сколько жертв должно быть, чтобы убийцу назвали серийным?',
   o:['Единого числа нет: источники определяют по-разному','Ровно три','Не меньше пяти','Не меньше десяти'],
   exp:'Главное — несколько убийств с паузами между ними. Сколько жертв считать «серией», источники определяют по-разному.'},
  {kind:'case', term:'Холодное дело', q:'Дело не раскрыто, активная работа по нему остановилась. Когда к такому делу обычно возвращаются?',
   o:['Когда появляются новые данные или методы, например ДНК-анализ','Когда истекает срок давности','Когда подозреваемый сам просит о суде','Когда дело попадает в подкаст'],
   exp:'Такие дела называют холодными. К ним возвращаются, когда появляются новые данные или методы, например ДНК-анализ.'},
  {kind:'dilemma', term:'Диванные детективы', tab:'slang', q:'В комментариях под выпуском все уверены, что нашли убийцу по старому делу, и уже выкладывают его фото и адрес. Что делать вам?',
   o:['Не участвовать и не распространять данные; если есть настоящие сведения, передать их в полицию','Репостнуть: пусть люди знают, раз все так считают','Написать этому человеку, что о нём думают','Выложить ещё найденные в сети подробности о нём'],
   exp:'Версии «диванных детективов» не проверены. Травля может ударить по невиновному человеку, а реальные сведения нужно нести тем, кто может их проверить.'},
  {kind:'dilemma', term:'Презумпция невиновности', q:'Вашего знакомого задержали по подозрению в краже. В общем чате его уже называют вором. Как правильно?',
   o:['Подождать решения суда: подозрение ещё не доказанная вина','Согласиться: раз задержали, значит виноват','Исключить его из всех чатов и компаний','Пересказывать всем подробности, которые вы слышали'],
   exp:'Пока вину не доказал суд, человек считается невиновным. Задержание и подозрение не равны приговору.'},
  {kind:'dilemma', term:'Холодное дело', q:'Слушая выпуск о нераскрытом деле двадцатилетней давности, вы вспомнили, что видели тогда что-то важное. Что делать?',
   o:['Сообщить в полицию или следователю, лучше с точными датами и деталями','Написать только в комментариях под выпуском: ведущая прочтёт','Ничего не делать: за столько лет всё равно не проверить','Самому найти человека и спросить его'],
   exp:'К холодным делам возвращаются, когда появляются новые данные. Такие сведения нужно передавать тем, кто может их проверить, а не оставлять в комментариях.'},
  {kind:'dilemma', term:'Улики и вещдоки', q:'Гуляя в парке, вы заметили на земле предмет со следами, похожими на кровь. Что делать?',
   o:['Не трогать, запомнить место и сообщить в полицию','Поднять и отнести в отделение, чтобы ничего не потерялось','Вытереть предмет и убрать подальше, чтобы никто не поранился','Выложить фото в соцсети и спросить, что это'],
   exp:'Если трогать предмет, можно уничтожить следы и испортить будущие улики. Лучше сообщить о находке и показать, где она лежит.'},
  {kind:'dilemma', term:'Явка с повинной', q:'Следователь говорит подозреваемому: «Признайся, и тебя точно не посадят». Какой выход надёжный?',
   o:['Ни один из быстрых вариантов не гарантирует исход: решение принимает суд, поэтому сначала нужно поговорить с адвокатом','Признаться: раз обещают, значит так и будет','Ничего не говорить и не отвечать ни на какие вопросы','Подписать протокол, не читая, чтобы быстрее закончить'],
   exp:'Следователь не решает, какое наказание назначат, это делает суд. Признание учитывают как смягчающее обстоятельство, но гарантий оно не даёт. Это упрощённое объяснение, а не юридическая консультация.'},
  {kind:'dilemma', term:'Профайлинг', q:'По психологическому портрету преступника в районе подходят около двух тысяч человек. Как быстро найти нужного?',
   o:['Быстрого безошибочного способа нет: портрет только сужает круг, дальше нужны улики','Задержать всех подходящих и допросить','Выбрать того, кто больше всех похож на портрет','Опубликовать список подходящих людей, пусть жители сами разберутся'],
   exp:'Портрет профайлера ориентир для поиска, но не доказательство. Даже совпадение с ним не значит, что человек виноват.'},
  {kind:'myth', term:'Маньяк', tab:'slang', a:false, q:'«Маньяк» — юридический термин, который используют в приговорах.',
   exp:'Нет. Это разговорное слово: юридического термина нет, а в подкастах так часто называют серийных преступников.'},
  {kind:'term', term:'Диванные детективы', tab:'slang', q:'Кого в подкастах называют «диванными детективами»?',
   o:['Людей, которые разбирают дело дома по открытым материалам, без доступа к расследованию','Следователей, которые работают только в кабинете','Ведущих, которые записывают выпуски дома','Свидетелей, которые молчат до последнего'],
   exp:'Их версии бывают интересны, но это не расследование, и без проверки они могут навредить.'}
];
QBANK.forEach((x, i) => x.id = i);
let qLast = [];
function qPick(){
  const pool = shuffle(QBANK).sort((a, b) => qLast.includes(a.id) - qLast.includes(b.id));
  const out = [], terms = new Set(); let myths = 0;
  const first = pool.filter(x => x.kind === 'dilemma').slice(0, 2);
  for (const x of [...first, ...pool]) {
    if (out.length >= QN || out.includes(x)) continue;
    if (terms.has(x.term) || (x.kind === 'myth' && myths >= 2)) continue;
    out.push(x); terms.add(x.term); if (x.kind === 'myth') myths++;
  }
  qLast = out.map(x => x.id);
  return shuffle(out).map(x => {
    if (x.kind === 'myth') return {...x, opts:['Верно', 'Неверно'], ans: x.a ? 0 : 1};
    const o = shuffle(x.o.map((t, i) => ({t, ok: i === 0})));
    return {...x, opts: o.map(y => y.t), ans: o.findIndex(y => y.ok)};
  });
}
function qStart(){
  qs.list = qPick(); qs.i = 0; qs.score = 0; qs.answered = false; qs.res = []; qs.pick = []; qs.rec = false;
  renderQuiz();
}
function qFinish(){
  const prev = qbest, had = qplayed;
  qplayed++; qbest = Math.max(qbest, qs.score); qs.rec = had > 0 && qs.score > prev;
  try { localStorage.setItem('tc-quiz', JSON.stringify({best:qbest, played:qplayed})); } catch {}
  renderMy();
}
const qLet = ['А', 'Б', 'В', 'Г'];
function qSteps(){
  return `<div class="qsteps" aria-hidden="true">${qs.list.map((_, i) => `<i class="${i < qs.res.length ? (qs.res[i] ? 'ok' : 'bad') : i === qs.i ? 'cur' : ''}"></i>`).join('')}</div>`;
}
function renderQuiz(){
  const q = $('quiz-box'), n = qs.list.length;
  if (!n) {
    q.innerHTML = `<div class="qpane qstart"><div class="qemblem" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.5-4.5M9.5 9.5a1.8 1.8 0 1 1 2.6 1.6c-.5.3-.7.6-.7 1.2M11.4 14v.01"/></svg></div><h3 class="qtext">Проверьте себя на деле из жизни</h3><p>${QN} случайных вопросов из ${QBANK.length}: термины, мифы и ситуации, в которых нужно выбрать выход (иногда простого выхода нет). Подсказок нет, но после каждого ответа будет короткое объяснение.</p><div class="qmeta"><span><b>${qplayed ? qbest + ' из ' + QN : '—'}</b> лучший результат</span><span><b>${qplayed}</b> прохождений</span></div><button type="button" class="btn btn--p" data-qstart>Начать</button></div>`;
    return;
  }
  if (qs.i >= n) {
    const m = qs.score === n ? 'Отлично, вы разбираетесь в терминах.' : qs.score >= 3 ? 'Хороший результат. Ошибки удобно разобрать ниже.' : 'Загляните в глоссарий и попробуйте ещё раз: вопросы каждый раз немного другие.';
    const C = 377;
    q.innerHTML = `<div class="qpane qres"><div class="qring${qs.score === n ? ' full' : ''}"><svg viewBox="0 0 140 140" aria-hidden="true"><circle class="bg" cx="70" cy="70" r="60"/><circle class="fg" cx="70" cy="70" r="60" stroke-dasharray="${C}" stroke-dashoffset="${C}"/></svg><b>${qs.score}/${n}</b></div><h3 class="qtext" tabindex="-1">Результат: ${qs.score} из ${n}</h3><p>${m}${qs.rec ? ' Новый личный рекорд!' : ''} Лучший результат: ${qbest} из ${QN}.</p><ul class="qrev">${qs.list.map((c, i) => `<li class="${qs.res[i] ? 'ok' : 'bad'}"><i aria-hidden="true">${qs.res[i] ? '✓' : '✕'}</i><span>${esc(c.q)}<small>${qs.res[i] ? 'Верно' : 'Правильный ответ: ' + esc(c.opts[c.ans])}</small></span></li>`).join('')}</ul><div class="qacts"><button type="button" class="btn btn--p" data-qstart>Ещё раз</button> <a class="btn" href="#glossary">К глоссарию</a></div></div>`;
    const fg = q.querySelector('.fg');
    requestAnimationFrame(() => requestAnimationFrame(() => fg.setAttribute('stroke-dashoffset', C * (1 - qs.score / n))));
    q.querySelector('.qtext').focus({preventScroll:true});
    return;
  }
  const c = qs.list[qs.i], tf = c.kind === 'myth';
  q.innerHTML = `<div class="qpane"><div class="qtop">${qSteps()}<span class="qcount">Вопрос ${qs.i + 1} из ${n}</span><span class="qkind">${QKIND[c.kind]}</span></div><h3 class="qtext" tabindex="-1">${esc(c.q)}</h3><div class="qopts${tf ? ' tf' : ''}" role="group" aria-label="Варианты ответа">${c.opts.map((o, i) => `<button type="button" class="qopt" data-qo="${i}">${tf ? '' : `<span class="k" aria-hidden="true">${qLet[i]}</span>`}<span>${esc(o)}</span></button>`).join('')}</div><div id="qfb" role="status" aria-live="polite"></div><p class="qhint">Клавиши 1–${c.opts.length} выбирают вариант</p></div>`;
  q.querySelector('.qtext').focus({preventScroll:true});
  const r = q.getBoundingClientRect();
  if (r.top < 70) window.scrollTo({top: window.scrollY + r.top - 80});
}
function qAnswer(i){
  qs.answered = true;
  const c = qs.list[qs.i], ok = i === c.ans, last = qs.i + 1 >= qs.list.length;
  if (ok) qs.score++;
  qs.res.push(ok); qs.pick.push(i);
  const box = $('quiz-box');
  box.querySelectorAll('.qopt').forEach((b, j) => { b.disabled = true; if (j === c.ans) b.classList.add('ok'); else if (j === i) b.classList.add('bad'); });
  box.querySelectorAll('.qsteps i')[qs.i].className = ok ? 'ok' : 'bad';
  $('qfb').innerHTML = `<div class="qfb ${ok ? 'ok' : 'bad'}"><strong>${ok ? 'Верно!' : 'Не совсем.'}</strong><p>${ok ? '' : `Правильный ответ: ${esc(c.opts[c.ans])}. `}${esc(c.exp)}</p><div class="qacts"><button type="button" class="btn btn--p" data-qnext>${last ? 'Результат' : 'Дальше'}</button><button type="button" class="btn" data-qgloss="${esc(c.term)}" data-qtab="${c.tab || 'terms'}">В глоссарии: ${esc(c.term)}</button></div></div>`;
  box.querySelector('[data-qnext]').focus({preventScroll:true});
}
function qGloss(term, tab){
  gs.group = ''; gs.q = ''; $('glSearch').value = '';
  [...$('glChips').children].forEach(c => c.setAttribute('aria-pressed', 'false'));
  setGTab(tab || 'terms');
  go('glossary');
  const h = [...$('glList').querySelectorAll('.gl-item h3')].find(x => x.textContent === term);
  if (h) { const a = h.closest('.gl-item'); a.scrollIntoView({block:'center'}); a.classList.add('flash'); setTimeout(() => a.classList.remove('flash'), 1900); }
}
$('quiz-box').addEventListener('click', e => {
  if (e.target.closest('[data-qstart]')) { qStart(); return; }
  const g = e.target.closest('[data-qgloss]');
  if (g) { qGloss(g.dataset.qgloss, g.dataset.qtab); return; }
  const o = e.target.closest('[data-qo]');
  if (o && !qs.answered) { qAnswer(+o.dataset.qo); return; }
  if (e.target.closest('[data-qnext]')) { qs.i++; qs.answered = false; if (qs.i >= qs.list.length) qFinish(); renderQuiz(); }
});
$('quiz-box').addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey || !/^Digit[1-4]$/.test(e.code)) return;
  e.stopPropagation();   /* цифры внутри викторины не должны переключать темы каталога */
  if (qs.list.length && qs.i < qs.list.length && !qs.answered) { const b = $('quiz-box').querySelectorAll('.qopt')[+e.code.slice(5) - 1]; if (b) b.click(); }
});

const BI = {
  check: '<path d="M5 12l4 4 10-10"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  cup: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H4v1a3 3 0 0 0 4 3M16 6h4v1a3 3 0 0 1-4 3"/><path d="M12 13v4M8 20h8"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
  ask: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17v.01"/>',
  medal: '<circle cx="12" cy="9" r="5"/><path d="M9 13.5L7.5 21 12 18.5 16.5 21 15 13.5"/>'
};
const BADGES = [
  {t:'Первый выпуск', d:'Отметьте первый подкаст прослушанным', i:'check', ok: c => c.n >= 1},
  {t:'Пятёрка', d:'Прослушайте 5 подкастов', i:'star', ok: c => c.n >= 5},
  {t:'Каталог пройден', d:'Прослушайте все подкасты', i:'cup', ok: c => c.n >= podcasts.length},
  {t:'Коллекционер', d:'Добавьте 3 подкаста в избранное', i:'heart', ok: () => favs.size >= 3},
  {t:'Разные темы', d:'Прослушайте подкасты из 4 разных тем', i:'grid', ok: c => c.nt >= 4},
  {t:'Новичок викторины', d:'Пройдите викторину один раз', i:'ask', ok: () => qplayed >= 1},
  {t:'Знаток терминов', d:'Ответьте верно на все 5 вопросов', i:'medal', ok: () => qbest >= 5}
];

function renderMy(){
  const dn = podcasts.filter(p => done.has(p.id)), n = dn.length, tot = podcasts.length;
  const hs = dn.map(p => META[p.id] && META[p.id].h).filter(Number.isFinite);
  const avg = hs.length ? (hs.reduce((a, b) => a + b, 0) / hs.length).toFixed(1).replace('.', ',') + ' из 5' : '—';
  $('pstats').innerHTML = [[`${n} из ${tot}`, 'прослушано'], [favs.size, 'в избранном'], [avg, 'средний уровень юмора'], [qplayed ? `${qbest} из 5` : '—', 'лучший результат викторины']]
    .map(([b, l]) => `<div class="pstat"><b>${b}</b><span>${l}</span></div>`).join('');
  const tc = {};
  dn.forEach(p => p.tags.forEach(t => tc[t] = (tc[t] || 0) + 1));
  const top = Object.entries(tc).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ru')).slice(0, 4);
  $('ptags').innerHTML = top.length
    ? '<h3 class="mt">Любимые темы</h3>' + top.map(([t, c]) => `<div class="trow"><span>${esc(t)}</span><div class="ttrack"><i style="width:${c / top[0][1] * 100}%"></i></div><b>${c}</b></div>`).join('')
    : '<p class="gl-note mt">Отметьте прослушанные подкасты, и здесь появятся любимые темы.</p>';
  const ctx = {n, nt: Object.keys(tc).length};
  const got = BADGES.filter(b => b.ok(ctx)).length;
  $('bcount').textContent = `${got} из ${BADGES.length}`;
  $('badges').innerHTML = BADGES.map(b => `<div class="bdg${b.ok(ctx) ? ' on' : ''}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${BI[b.i]}</svg><div><b>${esc(b.t)}</b><small>${esc(b.d)}. ${b.ok(ctx) ? 'Получен' : 'Пока закрыт'}</small></div></div>`).join('');
}
const baseRender = render;
render = () => { baseRender(); renderMy(); };
renderMy();
renderQuiz();

/* Фото эпох: HIST_IMG['1966'] = 'images/img-59.jpg' (ключи общей ленты: XVIII–XIX века, 1930-е, 1966, 1987–1988, 2014, 2015–2016, Сегодня; российской: 1860-е, 1971, Конец 1980-х — 1990-е, 1995, 2006, Конец 2010-х — сегодня) */
const HIST_IMG = {};
document.querySelectorAll('.tl li[data-era]').forEach(li => {
  const im = HIST_IMG[li.dataset.era];
  if (im) li.insertAdjacentHTML('afterbegin', `<div class="gl-ph"><img src="${im}" alt="" loading="lazy"></div>`);
});

/* ── Хочу послушать, подкаст и термин дня ── */
const wantChip = document.createElement('button');
wantChip.type = 'button'; wantChip.className = 'chip'; wantChip.textContent = 'Хочу послушать'; wantChip.setAttribute('aria-pressed', 'false');
wantChip.onclick = () => { state.want = !state.want; wantChip.setAttribute('aria-pressed', state.want); render(); };
newChip.after(wantChip);

const baseToggleDone = toggleDone;
toggleDone = id => {
  if (!done.has(id) && want.has(id)) { want.delete(id); saveWant(); }
  baseToggleDone(id);
  document.querySelectorAll('.btn[data-want]').forEach(b => b.setAttribute('aria-pressed', want.has(b.dataset.want)));
  document.querySelectorAll('#mbox [data-done]').forEach(b => b.setAttribute('aria-pressed', done.has(b.dataset.done)));
};
const baseFiltered = filtered;
filtered = () => baseFiltered().filter(x => !state.want || want.has(x.id));

document.addEventListener('click', e => {
  const w = e.target.closest('[data-want]');
  if (w) {
    toggleWant(w.dataset.want);
    if (w.classList.contains('btn')) w.setAttribute('aria-pressed', want.has(w.dataset.want));
    return;
  }
  if (e.target.closest('[data-collect]')) { state.want = false; wantChip.setAttribute('aria-pressed', 'false'); render(); }
});

function renderToday(){
  const day = Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5);
  const pool = podcasts.filter(x => !x.short.startsWith('Видеоподкаст.'));
  const p = pool[(day * 5 + 2) % pool.length], t = GLOSS[(day * 5 + 3) % GLOSS.length], l = listenLink(p);
  $('todayBox').innerHTML = `<article class="tbox"><span class="tlabel">Подкаст дня</span><div class="thead">${cover(p)}<div><h3>${esc(p.title)}</h3>${p.author ? `<p class="author">${esc(p.author)}</p>` : ''}</div></div><p>${esc(p.short)}</p><div class="tact"><button type="button" class="btn" data-open="${p.id}">Подробнее</button><a class="btn btn--p" href="${l.h}" target="_blank" rel="noopener">${listenWord(p)}</a></div></article><article class="tbox"><span class="tlabel">Термин дня</span><h3>${esc(t.t)}</h3><p>${esc(t.d)}</p><div class="tact"><a class="btn" href="#glossary">Весь глоссарий</a></div></article>`;
}
renderToday();
render();

/* ── Фонарик в шапке ── */
const hero = document.querySelector('.hero');
const spot = document.createElement('div');
spot.className = 'spot'; spot.setAttribute('aria-hidden', 'true');
hero.appendChild(spot);
let flashOn = true;
try { flashOn = localStorage.getItem('tc-flash') !== 'off'; } catch {}
const flashBtn = $('flashToggle');
const glow = document.createElement('div');
glow.className = 'glow'; glow.setAttribute('aria-hidden', 'true');
document.body.appendChild(glow);
const flashFab = document.createElement('button');
flashFab.type = 'button'; flashFab.className = 'chip fl-fab'; flashFab.textContent = '🔦';
document.body.appendChild(flashFab);
function setFlash(on){
  flashOn = on;
  flashBtn.setAttribute('aria-pressed', on);
  flashBtn.textContent = on ? 'Фонарик: вкл' : 'Фонарик: выкл';
  flashFab.setAttribute('aria-pressed', on);
  flashFab.title = flashFab.ariaLabel = on ? 'Выключить фонарик' : 'Включить фонарик';
  if (!on) { hero.classList.remove('lit'); glow.classList.remove('on'); }
  try { localStorage.setItem('tc-flash', on ? 'on' : 'off'); } catch {}
}
flashBtn.onclick = () => setFlash(!flashOn);
flashFab.onclick = () => setFlash(!flashOn);
let glowBusy = false;
document.addEventListener('pointermove', e => {
  if (!flashOn || e.pointerType === 'touch' || glowBusy) return;
  glowBusy = true;
  requestAnimationFrame(() => {
    glowBusy = false;
    glow.style.setProperty('--gx', e.clientX + 'px'); glow.style.setProperty('--gy', e.clientY + 'px');
    glow.classList.add('on');
  });
});
document.documentElement.addEventListener('pointerleave', () => glow.classList.remove('on'));
hero.addEventListener('pointermove', e => {
  if (!flashOn || e.pointerType === 'touch') return;
  const r = spot.getBoundingClientRect();
  spot.style.setProperty('--mx', (e.clientX - r.left) + 'px');
  spot.style.setProperty('--my', (e.clientY - r.top) + 'px');
  hero.classList.add('lit');
});
hero.addEventListener('pointerleave', () => hero.classList.remove('lit'));
setFlash(flashOn);

/* ── Формат: все / аудио / видео ── */
state.fmt = 'all';
const hasAudio = x => x.links.some(l => !l.l.includes('YouTube'));
const filteredNoFmt = filtered;
filtered = () => filteredNoFmt().filter(x => state.fmt === 'all' || (state.fmt === 'video' ? x.tags.includes('Видео') : hasAudio(x)));
document.querySelectorAll('.seg').forEach(b => b.onclick = () => {
  state.fmt = b.dataset.fmt;
  document.querySelectorAll('.seg').forEach(x => x.setAttribute('aria-pressed', x === b));
  render();
});
[...$('tagFilters').children].filter(c => c.textContent === 'Видео').forEach(c => c.remove());
render();

/* ── Разделы: «Подкасты» и «Узнать больше» ── */
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
function viewAnim(){
  if (REDUCED) return;
  const b = document.body; b.classList.remove('view-anim'); void b.offsetWidth; b.classList.add('view-anim');
  setTimeout(() => b.classList.remove('view-anim'), 650);
}
function setView(v){
  const changed = document.body.dataset.view !== v;
  document.body.dataset.view = v;
  document.querySelectorAll('.vsw a').forEach(a => {
    const h = a.getAttribute('href');
    if ((h === '#top' && v === 'podcasts') || (h === '#learn' && v === 'learn') || (h === '#mine' && v === 'mine')) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  if (changed) viewAnim();
  if (window.spy) spy();
}
function go(id){
  const jump = {top:0, behavior:'instant'};
  if (!id || id === 'top') { setView('podcasts'); window.scrollTo(jump); return; }
  if (id === 'learn') { setView('learn'); window.scrollTo(jump); return; }
  if (id === 'mine') { setView('mine'); window.scrollTo(jump); return; }
  const el = document.getElementById(id), sec = el && el.closest('[data-view]');
  if (sec) {
    const changed = document.body.dataset.view !== sec.dataset.view;
    setView(sec.dataset.view);
    const rv = el.closest('.rv2'); if (rv) rv.classList.add('in');
    el.scrollIntoView({behavior: changed ? 'instant' : 'auto'});
  }
}
function route(){ go(decodeURIComponent(location.hash.slice(1))); }
/* Переключаем раздел сами по нажатию: так работает и там, где адресная строка не меняется (приложения, встроенные просмотрщики) */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const id = decodeURIComponent(a.getAttribute('href').slice(1));
  if (!id) return;
  e.preventDefault();
  if (a.closest('#mmenu') && $('burger').getAttribute('aria-expanded') === 'true') $('burger').click();
  go(id);
  try { history.replaceState(null, '', '#' + id); } catch {}
});
window.addEventListener('hashchange', route);
route();
/* ── Предложить подкаст: письмо или Telegram без сервера. Заполните контакты ниже ── */
(() => {
  const SUGGEST_EMAIL = 'kalibaevasnezana7@gmail.com';
  const SUGGEST_TG = 'SnezoKl';
  const WEB3FORMS_KEY = '';                     /* ← ключ с web3forms.com (приходит на почту); пока пусто, работает отправка письмом */
  const f = document.getElementById('suggestForm'); if (!f) return;
  const st = document.getElementById('sgStatus'), tg = document.getElementById('sgTg');
  const v = id => document.getElementById(id).value.trim();
  const say = (t, bad) => { st.textContent = t; st.style.color = bad ? 'var(--ac)' : ''; };
  const validUrl = u => { try { const x = new URL(u); return x.protocol === 'http:' || x.protocol === 'https:'; } catch { return false; } };
  const text = () => 'Предлагаю добавить подкаст в каталог.\n\nНазвание: ' + v('sgName') + '\nСсылка: ' + v('sgUrl') + (v('sgNote') ? '\nКомментарий: ' + v('sgNote') : '');
  const check = () => {
    if (!v('sgName')) { say('Укажите название подкаста.', true); document.getElementById('sgName').focus(); return false; }
    if (!validUrl(v('sgUrl'))) { say('Нужна ссылка, начинающаяся с http:// или https://.', true); document.getElementById('sgUrl').focus(); return false; }
    return true;
  };
  if (SUGGEST_TG) { tg.hidden = false; tg.href = 'https://t.me/' + SUGGEST_TG.replace(/^@/, ''); tg.addEventListener('click', () => { navigator.clipboard && navigator.clipboard.writeText(text()).catch(() => {}); }); tg.addEventListener('click', e => { if (!check()) e.preventDefault(); else say('Текст скопирован: вставьте его в чат.'); }); }
  const mailFallback = () => {
    location.href = 'mailto:' + SUGGEST_EMAIL + '?subject=' + encodeURIComponent('Предложение подкаста: ' + v('sgName')) + '&body=' + encodeURIComponent(text());
  };
  const btn = document.getElementById('sgMail'), priv = f.querySelector('.sg-priv');
  if (WEB3FORMS_KEY) {
    btn.textContent = 'Отправить';
    priv.textContent = 'Предложение уходит напрямую редакции каталога. Мы используем его только для рассмотрения подкаста.';
  }
  f.addEventListener('submit', async e => {
    e.preventDefault();
    if (!check()) return;
    if (!WEB3FORMS_KEY) { mailFallback(); say('Открываем почтовое приложение. Если ничего не произошло, скопируйте текст и отправьте на ' + SUGGEST_EMAIL + '.'); return; }
    if (f.elements.botcheck && f.elements.botcheck.checked) return;
    btn.disabled = true; say('Отправляем…');
    try {
      const r = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({access_key: WEB3FORMS_KEY, subject: 'Предложение подкаста: ' + v('sgName'), from_name: 'True Crime Catalog', name: v('sgName'), url: v('sgUrl'), comment: v('sgNote') || '—', message: text()})
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || 'fail');
      f.reset(); say('Спасибо! Предложение отправлено, мы его рассмотрим.');
    } catch (err) {
      say('Не получилось отправить. Откройте письмо вручную или скопируйте текст.', true);
      mailFallback();
    } finally { btn.disabled = false; }
  });
  document.getElementById('sgCopy').addEventListener('click', async () => {
    if (!check()) return;
    try { await navigator.clipboard.writeText(text()); say('Текст скопирован.'); }
    catch { say('Не удалось скопировать автоматически. Выделите текст вручную.', true); }
  });
})();


/* ── Листание фото в карточках глоссария: при наведении само, по нажатию вручную ── */
let phTimer;
function phSet(ph, k){
  const imgs = ph.querySelectorAll('img'), dots = ph.querySelectorAll('.gl-dots i');
  imgs.forEach((im, i) => im.classList.toggle('on', i === k));
  dots.forEach((d, i) => d.classList.toggle('on', i === k));
  const cap = ph.querySelector('.gl-cap');
  if (cap) cap.textContent = imgs[k].dataset.cap || '';
}
function phStep(ph){
  if (!ph.isConnected) { clearInterval(phTimer); return; }
  const imgs = [...ph.querySelectorAll('img')];
  phSet(ph, (imgs.findIndex(im => im.classList.contains('on')) + 1) % imgs.length);
}
$('glList').addEventListener('pointerenter', e => {
  if (e.pointerType === 'touch' || !e.target.classList || !e.target.classList.contains('gl-item')) return;
  const ph = e.target.querySelector('.gl-ph[data-n]');
  if (!ph) return;
  clearInterval(phTimer);
  phTimer = setInterval(() => phStep(ph), 1400);
}, true);
$('glList').addEventListener('pointerleave', e => {
  if (!e.target.classList || !e.target.classList.contains('gl-item')) return;
  clearInterval(phTimer);
  const ph = e.target.querySelector('.gl-ph[data-n]');
  if (ph) phSet(ph, 0);
}, true);
$('glList').addEventListener('click', e => {
  const ph = e.target.closest('.gl-ph[data-n]');
  if (ph) { clearInterval(phTimer); phStep(ph); }
});

/* ── Листание фото при наведении: обложки подкастов и постеры ── */
let cvTimer;
function cvStep(box){
  if (!box.isConnected) { clearInterval(cvTimer); return; }
  const im = [...box.querySelectorAll('img')]; if (im.length < 2) return;
  const k = im.findIndex(i => i.classList.contains('on'));
  im.forEach((i, j) => i.classList.toggle('on', j === (k + 1) % im.length));
}
function cvReset(box){ box.querySelectorAll('img').forEach((i, j) => i.classList.toggle('on', j === 0)); }
document.addEventListener('pointerenter', e => {
  if (e.pointerType === 'touch' || !e.target.matches) return;
  const box = e.target.matches('.card, .tile') ? e.target.querySelector('.cover.multi') : e.target.matches('.bk') ? e.target.querySelector('.bk-ph[data-n]') : null;
  if (!box) return;
  clearInterval(cvTimer); cvTimer = setInterval(() => cvStep(box), 1300);
}, true);
document.addEventListener('pointerleave', e => {
  if (!e.target.matches || !e.target.matches('.card, .tile, .bk')) return;
  clearInterval(cvTimer);
  const box = e.target.querySelector('.cover.multi, .bk-ph[data-n]'); if (box) cvReset(box);
}, true);
document.addEventListener('click', e => {
  const box = e.target.closest('.bk-ph[data-n]'); if (box) { clearInterval(cvTimer); cvStep(box); }
});
render();

/* ── Всплывающие сообщения при действиях ── */
const toastEl = document.createElement('div');
toastEl.id = 'toast'; toastEl.setAttribute('role', 'status'); toastEl.setAttribute('aria-live', 'polite');
document.body.appendChild(toastEl);
let toastTimer;
function toast(msg){
  toastEl.textContent = msg; toastEl.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800);
}
const nameOf = id => { const x = podcasts.find(y => y.id === id); return x ? '«' + x.title + '»' : 'Подкаст'; };
const _toggleDone = toggleDone;
toggleDone = id => {
  const was = done.has(id), inQueue = want.has(id);
  _toggleDone(id);
  toast(was ? `${nameOf(id)}: убрано из прослушанного` : `${nameOf(id)}: добавлено в прослушанное${inQueue ? ', убрано из очереди' : ''}`);
};
const _toggleWant = toggleWant;
toggleWant = id => {
  const was = want.has(id);
  _toggleWant(id);
  toast(was ? `${nameOf(id)}: убрано из очереди` : `${nameOf(id)}: в очереди на прослушивание`);
};
const _toggleFav = toggleFav;
toggleFav = id => {
  const was = favs.has(id);
  _toggleFav(id);
  toast(was ? `${nameOf(id)}: убрано из избранного` : `${nameOf(id)}: добавлено в избранное`);
};

/* ── Заметки, недавние, очередь, коллекции, подбор, клавиши ── */
document.addEventListener('input', e => {
  const t = e.target.closest && e.target.closest('[data-note]'); if (!t) return;
  t.value.trim() ? notes[t.dataset.note] = t.value : delete notes[t.dataset.note]; save('tc-notes', notes);
});
document.addEventListener('change', e => { if (e.target.matches && e.target.matches('[data-note]')) render(); });

const _openModal = openModal;
openModal = (id, rnd) => { recent = [id, ...recent.filter(x => x !== id)].slice(0, 8); save('tc-recent', recent); _openModal(id, rnd); renderRecent(); };
function renderRecent(){
  const list = recent.map(id => podcasts.find(x => x.id === id)).filter(Boolean);
  $('recent').hidden = !list.length; $('recentRow').innerHTML = list.map(tile).join('');
}

function renderQueue(){
  const ids = [...want].filter(id => podcasts.some(x => x.id === id));
  $('queueBox').innerHTML = !ids.length ? '<p class="gl-note">Очередь пуста. Нажмите закладку на карточке подкаста.</p>'
    : `<button type="button" class="btn btn--p" data-open="${ids[0]}">Открыть первое в очереди</button><ol class="queue">${ids.map((id, i) => `<li draggable="true" data-qid="${id}"><span class="qn">${i + 1}</span><span class="qt">${esc(podcasts.find(x => x.id === id).title)}</span><span class="qb"><button type="button" data-qup="${id}" aria-label="Выше" ${i ? '' : 'disabled'}>↑</button><button type="button" data-qdown="${id}" aria-label="Ниже" ${i < ids.length - 1 ? '' : 'disabled'}>↓</button><button type="button" data-want="${id}" aria-label="Убрать из очереди">✕</button></span></li>`).join('')}</ol>`;
}
function qMove(id, to){ const a = [...want], i = a.indexOf(id); a.splice(i, 1); a.splice(Math.max(0, Math.min(a.length, to)), 0, id); want = new Set(a); saveWant(); render(); }
let qDrag = null;
const qb = $('queueBox');
qb.addEventListener('click', e => {
  const u = e.target.closest('[data-qup]'), d = e.target.closest('[data-qdown]');
  if (u) qMove(u.dataset.qup, [...want].indexOf(u.dataset.qup) - 1);
  if (d) qMove(d.dataset.qdown, [...want].indexOf(d.dataset.qdown) + 1);
});
qb.addEventListener('dragstart', e => { const li = e.target.closest('[data-qid]'); if (li) { qDrag = li.dataset.qid; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', qDrag); li.classList.add('drag'); } });
qb.addEventListener('dragover', e => { if (qDrag && e.target.closest('[data-qid]')) e.preventDefault(); });
qb.addEventListener('drop', e => { const li = e.target.closest('[data-qid]'); if (!qDrag || !li) return; e.preventDefault(); qMove(qDrag, [...want].indexOf(li.dataset.qid)); qDrag = null; });
qb.addEventListener('dragend', () => { qDrag = null; renderQueue(); });

function renderColls(){
  $('collList').innerHTML = colls.length ? colls.map(c => {
    const items = c.ids.map(id => podcasts.find(x => x.id === id)).filter(Boolean);
    return `<details class="ucoll" open><summary>${esc(c.name)} <small>(${items.length})</small><button type="button" class="btn uc-del" data-uc-del="${c.id}">Удалить</button></summary><div class="uc-items">${items.length ? items.map(x => `<div class="uc-item">${tile(x)}<button type="button" class="rm" data-uc-rm="${c.id}:${x.id}" aria-label="Убрать из коллекции">✕</button></div>`).join('') : '<p class="gl-note">Пусто. Добавьте подкасты через окно «Подробнее».</p>'}</div></details>`;
  }).join('') : '<p class="gl-note">Коллекций пока нет. Создайте первую.</p>';
}
const addColl = () => {
  const n = $('collName').value.trim(); if (!n) return;
  colls.push({id: 'c' + Date.now().toString(36), name: n.slice(0, 40), ids: []}); save('tc-colls', colls);
  $('collName').value = ''; renderColls(); toast(`Коллекция «${n}» создана`);
};
$('collAdd').addEventListener('click', addColl);
$('collName').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); addColl(); } });
$('collList').addEventListener('click', e => {
  const rm = e.target.closest('[data-uc-rm]'), del = e.target.closest('[data-uc-del]');
  if (rm) { const [cid, pid] = rm.dataset.ucRm.split(':'), c = colls.find(x => x.id === cid); c.ids = c.ids.filter(i => i !== pid); save('tc-colls', colls); renderColls(); toast(`${nameOf(pid)}: убрано из коллекции «${c.name}»`); }
  if (del) { e.preventDefault(); const c = colls.find(x => x.id === del.dataset.ucDel); colls = colls.filter(x => x !== c); save('tc-colls', colls); renderColls(); toast(`Коллекция «${c.name}» удалена`); }
});
document.addEventListener('click', e => {
  const b = e.target.closest('[data-coll]');
  if (b) {
    const c = colls.find(x => x.id === b.dataset.coll), pid = b.dataset.pid, has = c.ids.includes(pid);
    c.ids = has ? c.ids.filter(i => i !== pid) : [...c.ids, pid]; save('tc-colls', colls);
    b.setAttribute('aria-pressed', !has); renderColls(); toast(`${nameOf(pid)}: ${has ? 'убрано из' : 'добавлено в'} коллекцию «${c.name}»`);
  }
  const f = e.target.closest('[data-fq]');
  if (f) { fa[f.dataset.fq] = f.dataset.v; renderFinder(); }
  if (e.target.closest('[data-fq-reset]')) { fa.tone = fa.wt = fa.fmt = ''; renderFinder(); }
});

const FQ = [
  {k:'tone', t:'Какой тон?', o:[['humor','С юмором'], ['serious','Серьёзно'], ['any','Не важно']]},
  {k:'wt', t:'Насколько тяжёлый материал?', o:[['soft','Полегче'], ['any','Можно тяжёлое']]},
  {k:'fmt', t:'Слушать или смотреть?', o:[['audio','Слушать'], ['video','Смотреть'], ['any','Не важно']]}
];
const fa = {tone:'', wt:'', fmt:''};
function renderFinder(){
  $('finderQ').innerHTML = FQ.map(q => `<div class="fq-row"><span>${q.t}</span><div class="tabs" role="group" aria-label="${q.t}">${q.o.map(([v, l]) => `<button type="button" class="fq" data-fq="${q.k}" data-v="${v}" aria-pressed="${fa[q.k] === v}">${l}</button>`).join('')}</div></div>`).join('') + (fa.tone || fa.wt || fa.fmt ? '<button type="button" class="chip" data-fq-reset>Сбросить ответы</button>' : '');
  if (!fa.tone && !fa.wt && !fa.fmt) { $('finderRes').innerHTML = '<p class="gl-note">Выберите хотя бы один ответ: подборка появится сразу и будет уточняться.</p>'; return; }
  const tone = fa.tone || 'any', wt = fa.wt || 'any', fmt = fa.fmt || 'any';
  const sc = x => {
    const m = META[x.id]; let n = 0;
    if (m) {
      n += tone === 'humor' ? (m.h >= 4 ? 2 : m.h === 3 ? 1 : 0) : tone === 'serious' ? (m.h <= 2 ? 2 : m.h === 3 ? 1 : 0) : 1;
      n += wt === 'soft' ? {'лёгкий':2, 'средний':1, 'тяжёлый':0}[m.w] : 1;
    } else n += 1.5;
    return done.has(x.id) ? n - 1.5 : n;
  };
  const pool = podcasts.filter(x => !x.short.startsWith('Видеоподкаст.') && (fmt === 'any' || (fmt === 'video' ? x.tags.includes('Видео') : hasAudio(x))));
  const top = pool.map(x => [x, sc(x)]).sort((a, b) => b[1] - a[1]).slice(0, 3).map(a => a[0]);
  $('finderRes').innerHTML = top.length ? top.map(card).join('') : '<div class="empty">Ничего не нашлось. Попробуйте другие ответы.</div>';
}

let dbuf = '', dtimer;
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey || $('modal').classList.contains('open')) return;
  if (e.target.matches && e.target.matches('input, textarea, select, [contenteditable]')) return;
  const k = e.key.toLowerCase();
  if (e.key === '/') { e.preventDefault(); go('catalog'); $('search').focus(); }
  else if (k === 'r' || k === 'к') $('random').click();
  else if (k === 't' || k === 'е') $('theme').click();
  else if (k === 'f' || k === 'а') favChip.click();
  else if (/^Digit[0-9]$/.test(e.code)) {
    const tags = [...$('tagFilters').children].filter(c => ![favChip, newChip, wantChip].includes(c));
    const n = e.code.slice(5); if (n === '0' && !dbuf) return;
    clearTimeout(dtimer); dbuf += n;
    const act = () => { const t = tags[+dbuf - 1]; dbuf = ''; if (t) t.click(); };
    if (dbuf.length >= 2 || +dbuf * 10 > tags.length) act(); else dtimer = setTimeout(act, 700);
  }
});

const _render3 = render;
render = () => { _render3(); renderQueue(); renderColls(); renderRecent(); renderFinder(); };
render();

/* ── Календарь прогресса и «Какой у меня вкус» ── */
let dlog = []; try { dlog = JSON.parse(localStorage.getItem('tc-donelog') || '[]'); } catch {}
const ymd = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const _td2 = toggleDone;
toggleDone = id => {
  _td2(id);
  dlog = dlog.filter(x => x[0] !== id); if (done.has(id)) dlog.push([id, ymd(new Date())]);
  save('tc-donelog', dlog); renderHeat();
};
function renderHeat(){
  if(!$('heatBox')) return;
  const WEEKS = 26, cnt = {}; dlog.forEach(x => cnt[x[1]] = (cnt[x[1]] || 0) + 1);
  const end = new Date(); end.setHours(0, 0, 0, 0);
  const start = new Date(end); start.setDate(end.getDate() - ((end.getDay() + 6) % 7) - (WEEKS - 1) * 7);
  let cols = '';
  for (let w = 0; w < WEEKS; w++) {
    let c = '';
    for (let d = 0; d < 7; d++) {
      const t = new Date(start); t.setDate(start.getDate() + w * 7 + d);
      if (t > end) { c += '<i class="hc off"></i>'; continue; }
      const n = cnt[ymd(t)] || 0; c += `<i class="hc l${Math.min(n, 4)}" title="${t.toLocaleDateString('ru-RU')}: ${n}"></i>`;
    }
    cols += `<div class="hw">${c}</div>`;
  }
  $('heatBox').innerHTML = `<div class="heat" role="img" aria-label="Календарь отметок «прослушано» за полгода">${cols}</div><p class="gl-note">Каждый квадрат — день, чем темнее, тем больше отметок «прослушано». Всего отметок: ${dlog.length}. Календарь заполняется с момента, когда вы начали отмечать подкасты после этого обновления.</p>`;
}
function renderTaste(){
  const wv = {'лёгкий': 1, 'средний': 2, 'тяжёлый': 3}, pk = {};
  [...done].forEach(id => pk[id] = (pk[id] || 0) + 1); [...favs].forEach(id => pk[id] = (pk[id] || 0) + 1); [...want].forEach(id => pk[id] = (pk[id] || 0) + .5);
  const ids = Object.keys(pk).filter(id => podcasts.some(x => x.id === id));
  if (!ids.length) { $('tasteBox').innerHTML = '<p class="gl-note">Отметьте несколько подкастов прослушанными, добавьте в избранное или в очередь, и здесь появится ваш вкус.</p>'; return; }
  let sw = 0, sh = 0, sy = 0, nr = 0;
  ids.filter(id => META[id]).forEach(id => { const m = META[id], k = pk[id]; sw += k; sh += m.h * k; sy += wv[m.w] * k; nr++; });
  const H = sw ? sh / sw : 0, T = sw ? sy / sw : 0;
  const tg = {}; ids.forEach(id => podcasts.find(x => x.id === id).tags.forEach(t => tg[t] = (tg[t] || 0) + pk[id]));
  const top = Object.entries(tg).sort((a, b) => b[1] - a[1]).slice(0, 3).map(a => a[0]);
  const X = h => 60 + (h - 1) / 4 * 460, Y = w => 250 - (w - 1) / 2 * 190;
  const jit = (id, n) => ([...id].reduce((a, c) => a + c.charCodeAt(0) * n, 0) % 100 / 100 - .5) * .45;
  const dots = Object.keys(META).filter(id => podcasts.some(x => x.id === id)).map(id => { const m = META[id], on = pk[id]; return `<circle cx="${X(m.h + jit(id, 7))}" cy="${Y(wv[m.w] + jit(id, 13))}" r="${on ? 8 : 5}" class="pt${on ? ' on' : ''}"><title>${esc(podcasts.find(x => x.id === id).title)}</title></circle>`; }).join('');
  const you = nr ? `<circle cx="${X(H)}" cy="${Y(T)}" r="14" class="you"/><text x="${X(H)}" y="${Y(T) - 20}" text-anchor="middle" class="yt">вы</text>` : '';
  const svg = `<svg viewBox="0 0 560 300" class="taste" role="img" aria-label="График: юмор по горизонтали, тяжесть материала по вертикали"><line x1="50" y1="262" x2="540" y2="262" class="ax"/><line x1="50" y1="40" x2="50" y2="262" class="ax"/><text x="60" y="284" class="al">меньше юмора</text><text x="520" y="284" text-anchor="end" class="al">больше юмора</text><text x="44" y="${Y(1) + 4}" text-anchor="end" class="al">лёгкий</text><text x="44" y="${Y(2) + 4}" text-anchor="end" class="al">средний</text><text x="44" y="${Y(3) + 4}" text-anchor="end" class="al">тяжёлый</text>${dots}${you}</svg>`;
  const wl = T < 1.67 ? 'лёгкая' : T < 2.34 ? 'средняя' : 'тяжёлая';
  $('tasteBox').innerHTML = (nr ? `<p><b>Ваш вкус:</b> юмор ${H.toFixed(1).replace('.', ',')}/5, тяжесть ${wl}.</p>` : '<p class="gl-note">Среди выбранных пока нет подкастов с оценкой тона.</p>') + `<p><b>Чаще всего выбираете:</b> ${top.map(esc).join(', ')}.</p>${svg}<p class="gl-note">Серые точки — подкасты каталога с оценкой тона, красные — ваши. Это статистика только по вашим отметкам, её видите только вы. Учтено подкастов с оценкой: ${nr} из ${ids.length}.</p>`;
}

/* ── Коллекции: цвет, мозаика обложек, переименование, случайный выбор, быстрые шаблоны ── */
var editC = '';
function renderColls(){
  const PAL = ['#e63946', '#f0a030', '#2e8b57', '#3a86c8', '#9b59b6', '#d6628b'];
  const QUICK = ['Слушать в дороге', 'Перед сном', 'Про маньяков', 'Видеоподкасты'];
  colls.forEach((c, i) => { if (!c.color) c.color = PAL[i % PAL.length]; }); save('tc-colls', colls);
  const quick = `<div class="filters">${QUICK.filter(n => !colls.some(c => c.name === n)).map(n => `<button type="button" class="chip" data-preset="${n}">${collIcon(n)}+ ${n}</button>`).join('')}</div>`;
  $('collList').innerHTML = quick + (colls.length ? colls.map(c => {
    const items = c.ids.map(id => podcasts.find(x => x.id === id)).filter(Boolean);
    const mos = [0, 1, 2, 3].map(i => items[i] ? cover(items[i]) : '<span class="cover empty-c"></span>').join('');
    const name = editC === c.id ? `<input class="uc-ren" id="ren-${c.id}" value="${esc(c.name)}" maxlength="40" aria-label="Новое название"><button type="button" class="btn" data-uc-ok="${c.id}">OK</button>` : `<span class="uc-name">${esc(c.name)}</span> <small>(${items.length})</small>`;
    return `<details class="ucoll" style="--cc:${c.color}" open><summary><span class="mosaic" aria-hidden="true">${mos}</span><span class="cic" aria-hidden="true">${collIcon(c.name)}</span>${name}<span class="uc-act">${items.length ? `<button type="button" class="btn" data-uc-rand="${c.id}">Случайный</button>` : ''}<button type="button" class="btn" data-uc-ren="${c.id}">Переименовать</button><button type="button" class="btn uc-del" data-uc-del="${c.id}">Удалить</button></span></summary><div class="uc-items">${items.length ? items.map(x => `<div class="uc-item">${tile(x)}<button type="button" class="rm" data-uc-rm="${c.id}:${x.id}" aria-label="Убрать из коллекции">✕</button></div>`).join('') : '<p class="gl-note">Пусто. Добавьте подкасты через окно «Подробнее».</p>'}</div></details>`;
  }).join('') : '<p class="gl-note">Коллекций пока нет. Создайте первую или выберите шаблон выше.</p>');
}
$('collList').addEventListener('click', e => {
  const pr = e.target.closest('[data-preset]'), rn = e.target.closest('[data-uc-ren]'), ok = e.target.closest('[data-uc-ok]'), rd = e.target.closest('[data-uc-rand]');
  if (pr) { colls.push({id: 'c' + Date.now().toString(36), name: pr.dataset.preset, ids: []}); save('tc-colls', colls); renderColls(); toast(`Коллекция «${pr.dataset.preset}» создана`); }
  if (rn) { e.preventDefault(); editC = rn.dataset.ucRen; renderColls(); const i = $('ren-' + editC); if (i) i.focus(); }
  if (ok) { e.preventDefault(); const c = colls.find(x => x.id === ok.dataset.ucOk), v = $('ren-' + c.id).value.trim(); if (v) c.name = v; editC = ''; save('tc-colls', colls); renderColls(); }
  if (rd) { e.preventDefault(); const c = colls.find(x => x.id === rd.dataset.ucRand); if (c.ids.length) openModal(c.ids[Math.floor(Math.random() * c.ids.length)]); }
});
$('collList').addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.classList.contains('uc-ren')) { e.preventDefault(); e.target.nextElementSibling.click(); } });

const _render4 = render;
render = () => { _render4(); renderHeat(); renderTaste(); };
[...$('tagFilters').children].filter(c => ![favChip, newChip, wantChip].includes(c)).forEach((c, i) => { c.title = 'Клавиша: ' + (i + 1) + (i > 8 ? ' (цифры подряд)' : ''); });
render();

/* ── История: появление карточек при прокрутке (для обеих лент) ── */
(() => {
  const lists = [...document.querySelectorAll('.tl')]; if (!lists.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), {threshold: .15});
  lists.forEach(tl => { tl.classList.add('rv'); tl.querySelectorAll('li').forEach(li => io.observe(li)); });
  let busy = false;
  const upd = () => { busy = false; lists.forEach(tl => { const r = tl.getBoundingClientRect(); if (r.height) tl.style.setProperty('--p', Math.max(0, Math.min(1, (innerHeight * .65 - r.top) / r.height)).toFixed(3)); }); };
  addEventListener('scroll', () => { if (!busy) { busy = true; requestAnimationFrame(upd); } }, {passive: true});
  upd();
})();

/* ── Сброс фильтров каталога ── */
$('resetAll').addEventListener('click', () => {
  $('search').value = ''; $('search').dispatchEvent(new Event('input', {bubbles: true}));
  document.querySelectorAll('#tagFilters .chip[aria-pressed="true"]').forEach(c => c.click());
  document.querySelector('.seg[data-fmt="all"]').click();
  toast('Фильтры и поиск сброшены');
});

(function(){
  'use strict';
  var btnE = document.getElementById('btnExport'),
      btnI = document.getElementById('btnImport'),
      fileI = document.getElementById('fileImport'),
      st   = document.getElementById('ioStatus');
  if(!btnE || !btnI || !fileI) return;

  function say(msg, ok){
    if(st){ st.textContent = msg; st.className = ok === false ? 'io-bad' : 'io-ok'; }
    try { if (typeof window.toast === 'function') window.toast(msg); } catch(e){}
  }

  btnE.addEventListener('click', function(){
    try{
      var data = {};
      for (var i = 0; i < localStorage.length; i++){
        var k = localStorage.key(i);
        if (k.indexOf('tc-') !== 0) continue;
        try { data[k] = JSON.parse(localStorage.getItem(k)); }
        catch(e){ data[k] = localStorage.getItem(k); }
      }
      var payload = {
        app: 'true-crime-catalog',
        version: 1,
        exportedAt: new Date().toISOString(),
        data: data
      };
      var blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'true-crime-catalog-' + new Date().toISOString().slice(0,10) + '.json';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
      say('Готово: файл сохранён', true);
    }catch(e){ say('Не удалось экспортировать: ' + e.message, false); }
  });

  btnI.addEventListener('click', function(){ fileI.click(); });

  fileI.addEventListener('change', function(e){
    var f = e.target.files && e.target.files[0];
    if(!f) return;
    var r = new FileReader();
    r.onload = function(ev){
      try{
        var parsed = JSON.parse(ev.target.result);
        var data = (parsed && parsed.data && typeof parsed.data === 'object') ? parsed.data : parsed;
        if(!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('не тот формат файла');
        var SHAPE = {'tc-done':'a','tc-favs':'a','tc-want':'a','tc-recent':'a','tc-colls':'a','tc-donelog':'a','tc-notes':'o','tc-quiz':'o'};
        var keys = Object.keys(data).filter(function(k){
          if (k.indexOf('tc-') !== 0) return false;
          var s = SHAPE[k], v = data[k];
          if (s === 'a') return Array.isArray(v);
          if (s === 'o') return v && typeof v === 'object' && !Array.isArray(v);
          return true;
        });
        if(!keys.length) throw new Error('в файле нет данных этого сайта');
        if(!confirm('Импортировать ' + keys.length + ' записей из «' + f.name + '»?\n\nТекущие коллекции, очередь и прогресс будут заменены.')){
          say('Отменено', false); fileI.value = ''; return;
        }
        // ВАЖНО: без localStorage.clear() — перезаписываем только то, что в файле
        keys.forEach(function(k){
          var v = data[k];
          localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
        });
        say('Импорт завершён, перезагрузка…', true);
        setTimeout(function(){ location.reload(); }, 900);
      }catch(err){ say('Ошибка: ' + err.message, false); }
    };
    r.onerror = function(){ say('Не удалось прочитать файл', false); };
    r.readAsText(f);
  });
})();

/* Подсветка раздела, автосмена фото, плавное появление секций */
(() => {
  const $ = id => document.getElementById(id);
  const hdr = document.querySelector('.header');
  const setHH = () => document.documentElement.style.setProperty('--hh', hdr.offsetHeight + 'px');
  setHH(); addEventListener('resize', setHH);
  const SPY = {
    podcasts: [['top','top'],['today','catalog'],['finder','catalog'],['catalog','catalog'],['recent','catalog'],['collections','catalog'],['progress','progress'],['care','faq'],['about','faq'],['faq','faq']],
    learn: [['learn','learn'],['what','what'],['history','history'],['media','media'],['glossary','glossary'],['quiz','quiz'],['ethics','ethics']],
    mine: [['mine','mine'],['mycolls','mine']]
  };
  const heroEl = id => id === 'top' ? document.querySelector('section.hero[data-view="podcasts"]') : $(id);
  let lastKey = '';
  window.spy = function(){
    const v = document.body.dataset.view, list = SPY[v]; if (!list) return;
    const vis = list.filter(([id]) => { const e = heroEl(id); return e && e.offsetParent; });
    if (!vis.length) return;
    const lim = (hdr.offsetHeight || 64) + (v === 'learn' ? 70 : 40);
    let key = vis[0][1];
    for (const [id, k] of vis) if (heroEl(id).getBoundingClientRect().top <= lim) key = k;
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) key = vis[vis.length - 1][1];
    const sig = v + ':' + key; if (sig === lastKey) return; lastKey = sig;
    const mark = (a, on) => { a.classList.toggle('is-here', on); if (on) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); };
    document.querySelectorAll('.nav a').forEach(a => {
      const h = a.getAttribute('href').slice(1);
      mark(a, (h === 'learn' && v === 'learn') || (h === 'mine' && v === 'mine') || (v === 'podcasts' && h === key));
    });
    document.querySelectorAll('.mmenu a').forEach(a => mark(a, a.getAttribute('href').slice(1) === key));
    document.querySelectorAll('.subnav a').forEach(a => {
      const on = a.getAttribute('href').slice(1) === key; mark(a, on);
      if (on) { const row = a.parentElement; row.scrollTo({left: a.offsetLeft - row.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth'}); }
    });
  };
  let tk = false;
  addEventListener('scroll', () => { if (tk) return; tk = true; requestAnimationFrame(() => { tk = false; spy(); }); }, {passive: true});
  addEventListener('resize', () => { lastKey = ''; spy(); });
  spy();

  /* плавное появление секций */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-rv');
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .06, rootMargin: '0px 0px -6% 0px'});
    document.querySelectorAll('.section').forEach(s => { s.classList.add('rv2'); io.observe(s); });
  }

  /* автосмена фото: обложки, постеры книг и фильмов, фото терминов (где они видны) */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const SEL = '.cover.multi, .bk-ph[data-n], .gl-ph[data-n]';
    const seen = new Set(), inView = new Set();
    const vio = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? inView.add(e.target) : inView.delete(e.target)), {threshold: .4});
    let pend = false;
    const watch = () => { pend = false; document.querySelectorAll(SEL).forEach(el => { if (!seen.has(el)) { seen.add(el); el.__ph = Math.floor(Math.random() * 3); vio.observe(el); } }); };
    new MutationObserver(() => { if (!pend) { pend = true; requestAnimationFrame(watch); } }).observe(document.body, {childList: true, subtree: true});
    watch();
    let n = 0;
    setInterval(() => {
      if (document.hidden) return; n++;
      inView.forEach(el => {
        if (!el.isConnected) { inView.delete(el); seen.delete(el); return; }
        const hv = el.closest('.card, .tile, .bk, .gl-item') || el;
        if (n % 3 !== el.__ph || hv.matches(':hover')) return;
        if (el.matches('.gl-ph')) { if (getComputedStyle(el).opacity === '0') return; phStep(el); }
        else cvStep(el);
      });
    }, 1300);
  }
})();