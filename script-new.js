// Translation dictionary
const translations = {
    ua: {
        'logo': 'Atelier Kraków',
        'nav-home': 'Головна',
        'nav-prices': 'Ціни',
        'nav-portfolio': 'Наші роботи',
        'nav-contacts': 'Контакти',
        'hero-title': 'Професійний ремонт одягу в Кракові',
        'hero-subtitle': 'Якісна підгонка, реставрація та ремонт будь-якого типу одягу. Повертаємо речам ідеальний вигляд та посадку.',
        'hero-btn-prices': 'Дивитись ціни',
        'hero-btn-portfolio': 'Наші роботи',
        'about-title': 'Про нас',
        'about-text-1': 'Ми віримо, що кожна річ заслуговує на друге життя. Наше ательє в серці Кракова спеціалізується на професійному ремонті та реставрації одягу будь-якої складності.',
        'about-text-2': 'Від простого підшивання до складної реставрації преміум-виробів — ми працюємо з усіма типами тканин та матеріалів, зберігаючи оригінальний вигляд та якість вашого одягу.',
        'about-text-3': 'Наш досвід, увага до деталей та любов до ремесла гарантують, що ваші улюблені речі служитимуть вам ще довгі роки.',
        'services-title': 'Популярні послуги',
        'service-1-title': 'Підгонка одягу',
        'service-1-desc': 'Ідеальна посадка по фігурі для будь-якого типу одягу',
        'service-2-title': 'Реставрація трикотажу',
        'service-2-desc': 'Ювелірна робота з набором петель та відновленням плетіння',
        'service-3-title': 'Ремонт шкіри',
        'service-3-desc': 'Професійна робота з шкіряними виробами та хутром',
        'service-4-title': 'Заміна блискавок',
        'service-4-desc': 'Якісна фурнітура та надійна установка',
        'service-5-title': 'Ремонт суконь',
        'service-5-desc': 'Від повсякденних до весільних та вечірніх',
        'service-6-title': 'Експрес-ремонт',
        'service-6-desc': 'Термінові замовлення за 24 години',
        'prices-page-title': 'Ціни на послуги',
        'prices-disclaimer': 'Ви бачите стартові ціни на популярні послуги. Точну вартість майстер називає під час огляду виробу.',
        'prices-cat-1': 'Ремонт і підгонка одягу',
        'prices-subcat-1-1': 'Брюки / Джинси',
        'price-1-1-1': 'Вкоротити брюки',
        'price-1-1-1-val': 'від 30 zł',
        'price-1-1-2': 'Підшив оригінального низу джинсів',
        'price-1-1-2-val': 'від 35 zł',
        'price-1-1-3': 'Звузити брюки',
        'price-1-1-3-val': 'від 40 zł',
        'price-1-1-4': 'Вшити в талії',
        'price-1-1-4-val': 'від 35 zł',
        'price-1-1-5': 'Заміна блискавки',
        'price-1-1-5-val': 'від 35 zł',
        'price-1-1-6': 'Ремонт джинсів / дірок',
        'price-1-1-6-val': 'від 30 zł',
        'prices-subcat-1-2': 'Сукні / Спідниці',
        'price-1-2-1': 'Вкоротити сукню',
        'price-1-2-1-val': 'від 60 zł',
        'price-1-2-2': 'Вшити сукню',
        'price-1-2-2-val': 'від 60 zł',
        'price-1-2-3': 'Заміна блискавки',
        'price-1-2-3-val': 'від 50 zł',
        'price-1-2-4': 'Вкоротити вечірню сукню',
        'price-1-2-4-val': 'від 120 zł',
        'prices-subcat-1-3': 'Піджаки / Жакети',
        'price-1-3-1': 'Вкоротити рукави',
        'price-1-3-1-val': 'від 60 zł',
        'price-1-3-2': 'Вкоротити довжину',
        'price-1-3-2-val': 'від 70 zł',
        'price-1-3-3': 'Вшити піджак',
        'price-1-3-3-val': 'від 70 zł',
        'price-1-3-4': 'Заміна підкладки',
        'price-1-3-4-val': 'від 120 zł',
        'prices-subcat-1-4': 'Куртки',
        'price-1-4-1': 'Заміна блискавки',
        'price-1-4-1-val': 'від 100 zł',
        'price-1-4-2': 'Вшити куртку',
        'price-1-4-2-val': 'від 100 zł',
        'price-1-4-3': 'Заміна підкладки',
        'price-1-4-3-val': 'від 150 zł',
        'price-1-4-4': 'Дрібний ремонт',
        'price-1-4-4-val': 'від 20 zł',
        'prices-cat-2': 'Пошиття на замовлення',
        'price-2-1': 'Пошиття брюк',
        'price-2-1-val': 'від 200 zł',
        'price-2-2': 'Пошиття сукні',
        'price-2-2-val': 'від 200 zł',
        'price-2-3': 'Дитячі костюми / вбрання',
        'price-2-3-val': 'від 250 zł',
        'price-2-4': 'Чохли / домашній текстиль',
        'price-2-4-val': 'від 55 zł',
        'prices-cat-3': 'Домашній текстиль',
        'prices-subcat-3-1': 'Штори та гардини',
        'price-3-1-1': 'Вкоротити штори / гардини',
        'price-3-1-1-val': 'від 40 zł',
        'price-3-1-2': 'Вшивання стрічки',
        'price-3-1-2-val': 'від 10 zł / пог. м',
        'price-3-1-3': 'Обробка краю',
        'price-3-1-3-val': 'від 10 zł / пог. м',
        'prices-subcat-3-2': 'Постільна білизна / Подушки',
        'price-3-2-1': 'Вшивання блискавки',
        'price-3-2-1-val': 'від 30 zł',
        'price-3-2-2': 'Пошиття наволочки',
        'price-3-2-2-val': 'від 35 zł',
        'prices-note-1': 'Ціни можуть відрізнятися залежно від матеріалу та складності роботи.',
        'prices-note-2': 'Для складніших переробок вартість розраховується індивідуально.',
        'prices-cta-title': 'Не знайшли потрібну послугу?',
        'prices-cta-text': 'Якщо в переліку немає послуги, яку ви шукаєте — напишіть нам.',
        'before': 'До',
        'after': 'Після',
        'cat-jeans': 'Джинси',
        'cat-trousers': 'Штани',
        'cat-shirts': 'Сорочки',
        'cat-knitwear': 'Трикотаж',
        'cat-tshirts': 'Футболки',
        'cat-coats': 'Пальто',
        'cat-jackets': 'Куртки',
        'cat-dresses': 'Сукні',
        'port-jeans-title': 'Ремонт джинсів',
        'port-jeans-desc': 'Відновлюємо початкову обробку та оригінальний стібок, маємо великий вибір джинсових ниток.',
        'port-pants-title': 'Ремонт штанів',
        'port-pants-desc': 'Робота з усіма видами тканин: від класичних костюмних до специфічних.',
        'port-shirts-title': 'Ремонт сорочок та блуз',
        'port-shirts-desc': 'Робота з бавовняними, шовковими, трикотажними та декорованими сорочками.',
        'port-knit-title': 'Ремонт трикотажу',
        'port-knit-desc': 'Складна ювелірна реставрація з набором петель.',
        'port-jackets-title': 'Ремонт курток',
        'port-jackets-desc': 'Від вітрівок до пуховиків. Підбираємо найкращу фурнітуру.',
        'port-coats-title': 'Ремонт пальто',
        'port-coats-desc': 'Заміна підкладки та професійна підгонка.',
        'port-tshirts-title': 'Ремонт футболок',
        'port-tshirts-desc': 'Відновлення швів та вкорочення.',
        'port-dresses-title': 'Ремонт суконь',
        'port-dresses-desc': 'Вкорочення та підгонка по фігурі.',
        'contacts-page-title': 'Контакти',
        'contact-phone-label': 'Телефон',
        'contact-hours-label': 'Години роботи',
        'contact-hours': 'Пн-Пт: 8:00 - 14:00, 17:00 - 20:00<br>Сб-Нд: Вихідні',
        'contact-location-label': 'Адреса',
        'contact-address': 'Aleja Juliusza Słowackiego 10/7<br>30-037 Kraków, Poland',
        'contact-whatsapp': 'Написати в WhatsApp',
        'contact-telegram': 'Написати в Telegram',
        'contact-instagram': 'Написати в Instagram',
        'contact-advice': 'Для вашої зручності рекомендуємо попередньо зателефонувати або написати нам, щоб записатися на консультацію. Найшвидший спосіб дізнатися можливість та орієнтовну вартість ремонту — надіслати нам у месенджер фото вашого виробу та короткий опис того, що потрібно зробити.',
        'order-steps-title': 'Як зробити замовлення?',
        'order-offline-title': 'Офлайн в ательє',
        'order-offline-step1': 'Принесіть виріб в ательє в Кракові, а ми запропонуємо рішення і ціну.',
        'order-offline-step2': 'Оформіть замовлення і не хвилюйтеся.',
        'order-offline-step3': 'Ми акуратно відновимо речі і потурбуємось про гарний результат.',
        'order-offline-step4': 'Отримайте ідеально відремонтовані речі чітко в строк.',
        'order-online-title': 'Онлайн поштою',
        'order-online-step1': 'Надішліть фото виробу, а ми запропонуємо рішення і ціну.',
        'order-online-step2': 'Надішліть виріб до нас (наприклад, через Paczkomat InPost).',
        'order-online-step3': 'Ми акуратно відновимо речі і потурбуємось про гарний результат.',
        'order-online-step4': 'Отримайте ідеально відремонтовані речі у найближчому пачкоматі.',
        'order-inpost-info': 'Дані для посилки: InPost Paczkomat KRA06APP | Mazowiecka 14, 30-015 Kraków | Одержувач: Atelier Krakow | Телефон: +48 573 243 791'
    },
    pl: {
        'logo': 'Atelier Kraków',
        'nav-home': 'Strona główna',
        'nav-prices': 'Cennik',
        'nav-portfolio': 'Nasze prace',
        'nav-contacts': 'Kontakt',
        'hero-title': 'Profesjonalna naprawa odzieży w Krakowie',
        'hero-subtitle': 'Wysokiej jakości dopasowanie, renowacja i naprawa każdego rodzaju odzieży. Przywracamy ubraniom idealny wygląd i dopasowanie.',
        'hero-btn-prices': 'Zobacz cennik',
        'hero-btn-portfolio': 'Nasze prace',
        'about-title': 'O nas',
        'about-text-1': 'Wierzymy, że każda rzecz zasługuje na drugie życie. Nasza pracownia w sercu Krakowa specjalizuje się w profesjonalnej naprawie i renowacji odzieży o dowolnej złożoności.',
        'about-text-2': 'Od prostego podszywania po skomplikowaną renowację produktów premium — pracujemy ze wszystkimi rodzajami tkanin i materiałów, zachowując oryginalny wygląd i jakość Twojej odzieży.',
        'about-text-3': 'Nasze doświadczenie, dbałość o szczegóły i miłość do rzemiosła gwarantują, że Twoje ulubione rzeczy będą Ci służyć przez wiele lat.',
        'services-title': 'Popularne usługi',
        'service-1-title': 'Dopasowanie odzieży',
        'service-1-desc': 'Idealne dopasowanie do sylwetki dla każdego rodzaju odzieży',
        'service-2-title': 'Renowacja dzianin',
        'service-2-desc': 'Precyzyjna praca z nabieraniem oczek i odtwarzaniem splotu',
        'service-3-title': 'Naprawa skóry',
        'service-3-desc': 'Profesjonalna praca z wyrobami skórzanymi i futrem',
        'service-4-title': 'Wymiana zamków',
        'service-4-desc': 'Wysokiej jakości akcesoria i niezawodny montaż',
        'service-5-title': 'Naprawa sukienek',
        'service-5-desc': 'Od codziennych po ślubne i wieczorowe',
        'service-6-title': 'Naprawa ekspresowa',
        'service-6-desc': 'Pilne zamówienia w 24 godziny',
        'prices-page-title': 'Cennik usług',
        'prices-disclaimer': 'Widzisz ceny startowe popularnych usług. Dokładną cenę mistrz podaje podczas oględzin produktu.',
        'prices-cat-1': 'Naprawa i dopasowanie odzieży',
        'prices-subcat-1-1': 'Spodnie / Dżinsy',
        'price-1-1-1': 'Skrócić spodnie',
        'price-1-1-1-val': 'od 30 zł',
        'price-1-1-2': 'Podszywanie oryginalnego dołu dżinsów',
        'price-1-1-2-val': 'od 35 zł',
        'price-1-1-3': 'Zwęzić spodnie',
        'price-1-1-3-val': 'od 40 zł',
        'price-1-1-4': 'Wstawić w pasie',
        'price-1-1-4-val': 'od 35 zł',
        'price-1-1-5': 'Wymiana zamka',
        'price-1-1-5-val': 'od 35 zł',
        'price-1-1-6': 'Naprawa dżinsów / dziur',
        'price-1-1-6-val': 'od 30 zł',
        'prices-subcat-1-2': 'Sukienki / Spódnice',
        'price-1-2-1': 'Skrócić sukienkę',
        'price-1-2-1-val': 'od 60 zł',
        'price-1-2-2': 'Zwęzić sukienkę',
        'price-1-2-2-val': 'od 60 zł',
        'price-1-2-3': 'Wymiana zamka',
        'price-1-2-3-val': 'od 50 zł',
        'price-1-2-4': 'Skrócić sukienkę wieczorową',
        'price-1-2-4-val': 'od 120 zł',
        'prices-subcat-1-3': 'Marynarki / Żakiety',
        'price-1-3-1': 'Skrócić rękawy',
        'price-1-3-1-val': 'od 60 zł',
        'price-1-3-2': 'Skrócić długość',
        'price-1-3-2-val': 'od 70 zł',
        'price-1-3-3': 'Zwęzić marynarkę',
        'price-1-3-3-val': 'od 70 zł',
        'price-1-3-4': 'Wymiana podszewki',
        'price-1-3-4-val': 'od 120 zł',
        'prices-subcat-1-4': 'Kurtki',
        'price-1-4-1': 'Wymiana zamka',
        'price-1-4-1-val': 'od 100 zł',
        'price-1-4-2': 'Zwęzić kurtkę',
        'price-1-4-2-val': 'od 100 zł',
        'price-1-4-3': 'Wymiana podszewki',
        'price-1-4-3-val': 'od 150 zł',
        'price-1-4-4': 'Drobna naprawa',
        'price-1-4-4-val': 'od 20 zł',
        'prices-cat-2': 'Szycie na zamówienie',
        'price-2-1': 'Szycie spodni',
        'price-2-1-val': 'od 200 zł',
        'price-2-2': 'Szycie sukienki',
        'price-2-2-val': 'od 200 zł',
        'price-2-3': 'Kostiumy dziecięce / odzież',
        'price-2-3-val': 'od 250 zł',
        'price-2-4': 'Pokrowce / tekstylia domowe',
        'price-2-4-val': 'od 55 zł',
        'prices-cat-3': 'Tekstylia domowe',
        'prices-subcat-3-1': 'Zasłony i firany',
        'price-3-1-1': 'Skrócić zasłony / firany',
        'price-3-1-1-val': 'od 40 zł',
        'price-3-1-2': 'Wszywanie taśmy',
        'price-3-1-2-val': 'od 10 zł / mb',
        'price-3-1-3': 'Obróbka brzegu',
        'price-3-1-3-val': 'od 10 zł / mb',
        'prices-subcat-3-2': 'Pościel / Poduszki',
        'price-3-2-1': 'Wszywanie zamka',
        'price-3-2-1-val': 'od 30 zł',
        'price-3-2-2': 'Szycie poszewki',
        'price-3-2-2-val': 'od 35 zł',
        'prices-note-1': 'Ceny mogą się różnić w zależności od materiału i stopnia skomplikowania pracy.',
        'prices-note-2': 'Dla bardziej złożonych przeróbek koszt jest ustalany indywidualnie.',
        'prices-cta-title': 'Nie znalazłeś potrzebnej usługi?',
        'prices-cta-text': 'Jeśli na liście nie ma usługi, której szukasz — napisz do nas.',
        'before': 'Przed',
        'after': 'Po',
        'cat-jeans': 'Dżinsy',
        'cat-trousers': 'Spodnie',
        'cat-shirts': 'Koszule',
        'cat-knitwear': 'Dzianina',
        'cat-tshirts': 'T-shirty',
        'cat-coats': 'Płaszcze',
        'cat-jackets': 'Kurtki',
        'cat-dresses': 'Sukienki',
        'port-jeans-title': 'Naprawa dżinsów',
        'port-jeans-desc': 'Odtwarzamy oryginalne wykończenie i ścieg.',
        'port-pants-title': 'Naprawa spodni',
        'port-pants-desc': 'Praca ze wszystkimi rodzajami tkanin.',
        'port-shirts-title': 'Naprawa koszul i bluzek',
        'port-shirts-desc': 'Praca z bawełną, jedwabiem i dzianiną.',
        'port-knit-title': 'Naprawa dzianin',
        'port-knit-desc': 'Precyzyjna renowacja z nabieraniem oczek.',
        'port-jackets-title': 'Naprawa kurtek',
        'port-jackets-desc': 'Od wiatrówek po kurtki puchowe.',
        'port-coats-title': 'Naprawa płaszczy',
        'port-coats-desc': 'Wymiana podszewki i profesjonalne dopasowanie.',
        'port-tshirts-title': 'Naprawa T-shirtów',
        'port-tshirts-desc': 'Odtwarzanie szwów i skracanie.',
        'port-dresses-title': 'Naprawa sukienek',
        'port-dresses-desc': 'Skracanie i dopasowanie do sylwetki.',
        'contacts-page-title': 'Kontakt',
        'contact-phone-label': 'Telefon',
        'contact-hours-label': 'Godziny otwarcia',
        'contact-hours': 'Pn-Pt: 8:00 - 14:00, 17:00 - 20:00<br>Sb-Nd: Zamknięte',
        'contact-location-label': 'Adres',
        'contact-address': 'Aleja Juliusza Słowackiego 10/7<br>30-037 Kraków, Poland',
        'contact-whatsapp': 'Napisz na WhatsApp',
        'contact-telegram': 'Napisz na Telegram',
        'contact-instagram': 'Napisz na Instagram',
        'contact-advice': 'Dla Twojej wygody zalecamy wcześniejszy kontakt telefoniczny lub mailowy w celu umówienia się na konsultację. Najszybszym sposobem na poznanie możliwości i orientacyjnego kosztu naprawy jest przesłanie nam w komunikatorze zdjęcia produktu oraz krótkiego opisu, co należy zrobić.',
        'order-steps-title': 'Jak złożyć zamówienie?',
        'order-offline-title': 'Offline w pracowni',
        'order-offline-step1': 'Przynieś produkt do pracowni w Krakowie, a my zaproponujemy rozwiązanie i cenę.',
        'order-offline-step2': 'Złóż zamówienie i nie martw się.',
        'order-offline-step3': 'Starannie odnowimy rzeczy i zadbamy o doskonały rezultat.',
        'order-offline-step4': 'Odbierz idealnie naprawione rzeczy dokładnie na czas.',
        'order-online-title': 'Online pocztą',
        'order-online-step1': 'Wyślij zdjęcie produktu, a my zaproponujemy rozwiązanie i cenę.',
        'order-online-step2': 'Wyślij produkt do nas (np. przez Paczkomat InPost).',
        'order-online-step3': 'Starannie odnowimy rzeczy i zadbamy o doskonały rezultat.',
        'order-online-step4': 'Odbierz idealnie naprawione rzeczy w najbliższym paczkomacie.',
        'order-inpost-info': 'Dane do wysyłki: InPost Paczkomat KRA06APP | Mazowiecka 14, 30-015 Kraków | Odbiorca: Atelier Krakow | Telefon: +48 573 243 791'
    },
    en: {
        'logo': 'Atelier Kraków',
        'nav-home': 'Home',
        'nav-prices': 'Prices',
        'nav-portfolio': 'Our Work',
        'nav-contacts': 'Contact',
        'hero-title': 'Professional Clothing Repair in Kraków',
        'hero-subtitle': 'Quality alterations, restoration and repair of any type of clothing. Giving your clothes their perfect look and fit back.',
        'hero-btn-prices': 'View Prices',
        'hero-btn-portfolio': 'Our Work',
        'about-title': 'About Us',
        'about-text-1': 'We believe every garment deserves a second life. Our atelier in the heart of Kraków specializes in professional repair and restoration of clothing of any complexity.',
        'about-text-2': 'From simple hemming to complex restoration of premium items — we work with all types of fabrics and materials, preserving the original look and quality of your clothing.',
        'about-text-3': 'Our experience, attention to detail and love for the craft guarantee that your favorite items will serve you for many years to come.',
        'services-title': 'Popular Services',
        'service-1-title': 'Clothing Alterations',
        'service-1-desc': 'Perfect fit for any type of clothing',
        'service-2-title': 'Knitwear Restoration',
        'service-2-desc': 'Precision work with stitch picking and weave restoration',
        'service-3-title': 'Leather Repair',
        'service-3-desc': 'Professional work with leather goods and fur',
        'service-4-title': 'Zipper Replacement',
        'service-4-desc': 'Quality hardware and reliable installation',
        'service-5-title': 'Dress Repair',
        'service-5-desc': 'From everyday to wedding and evening dresses',
        'service-6-title': 'Express Repair',
        'service-6-desc': 'Urgent orders within 24 hours',
        'prices-page-title': 'Service Prices',
        'prices-disclaimer': 'You see starting prices for popular services. The exact cost is determined by the master during inspection of the item.',
        'prices-cat-1': 'Clothing Repair & Alterations',
        'prices-subcat-1-1': 'Trousers / Jeans',
        'price-1-1-1': 'Shorten trousers',
        'price-1-1-1-val': 'from 30 zł',
        'price-1-1-2': 'Original hem preservation on jeans',
        'price-1-1-2-val': 'from 35 zł',
        'price-1-1-3': 'Taper trousers',
        'price-1-1-3-val': 'from 40 zł',
        'price-1-1-4': 'Take in at waist',
        'price-1-1-4-val': 'from 35 zł',
        'price-1-1-5': 'Zipper replacement',
        'price-1-1-5-val': 'from 35 zł',
        'price-1-1-6': 'Jeans repair / holes',
        'price-1-1-6-val': 'from 30 zł',
        'prices-subcat-1-2': 'Dresses / Skirts',
        'price-1-2-1': 'Shorten dress',
        'price-1-2-1-val': 'from 60 zł',
        'price-1-2-2': 'Take in dress',
        'price-1-2-2-val': 'from 60 zł',
        'price-1-2-3': 'Zipper replacement',
        'price-1-2-3-val': 'from 50 zł',
        'price-1-2-4': 'Shorten evening dress',
        'price-1-2-4-val': 'from 120 zł',
        'prices-subcat-1-3': 'Blazers / Jackets',
        'price-1-3-1': 'Shorten sleeves',
        'price-1-3-1-val': 'from 60 zł',
        'price-1-3-2': 'Shorten length',
        'price-1-3-2-val': 'from 70 zł',
        'price-1-3-3': 'Take in blazer',
        'price-1-3-3-val': 'from 70 zł',
        'price-1-3-4': 'Lining replacement',
        'price-1-3-4-val': 'from 120 zł',
        'prices-subcat-1-4': 'Jackets',
        'price-1-4-1': 'Zipper replacement',
        'price-1-4-1-val': 'from 100 zł',
        'price-1-4-2': 'Take in jacket',
        'price-1-4-2-val': 'from 100 zł',
        'price-1-4-3': 'Lining replacement',
        'price-1-4-3-val': 'from 150 zł',
        'price-1-4-4': 'Minor repair',
        'price-1-4-4-val': 'from 20 zł',
        'prices-cat-2': 'Custom Tailoring',
        'price-2-1': 'Tailoring trousers',
        'price-2-1-val': 'from 200 zł',
        'price-2-2': 'Tailoring dress',
        'price-2-2-val': 'from 200 zł',
        'price-2-3': 'Children\'s costumes / clothing',
        'price-2-3-val': 'from 250 zł',
        'price-2-4': 'Covers / home textiles',
        'price-2-4-val': 'from 55 zł',
        'prices-cat-3': 'Home Textiles',
        'prices-subcat-3-1': 'Curtains & Drapes',
        'price-3-1-1': 'Shorten curtains / drapes',
        'price-3-1-1-val': 'from 40 zł',
        'price-3-1-2': 'Tape insertion',
        'price-3-1-2-val': 'from 10 zł / linear meter',
        'price-3-1-3': 'Edge finishing',
        'price-3-1-3-val': 'from 10 zł / linear meter',
        'prices-subcat-3-2': 'Bedding / Pillows',
        'price-3-2-1': 'Zipper insertion',
        'price-3-2-1-val': 'from 30 zł',
        'price-3-2-2': 'Pillowcase tailoring',
        'price-3-2-2-val': 'from 35 zł',
        'prices-note-1': 'Prices may vary depending on material and complexity of work.',
        'prices-note-2': 'For more complex alterations, the cost is calculated individually.',
        'prices-cta-title': 'Didn\'t find the service you need?',
        'prices-cta-text': 'If the list doesn\'t have the service you\'re looking for — write to us.',
        'before': 'Before',
        'after': 'After',
        'cat-jeans': 'Jeans',
        'cat-trousers': 'Trousers',
        'cat-shirts': 'Shirts',
        'cat-knitwear': 'Knitwear',
        'cat-tshirts': 'T-shirts',
        'cat-coats': 'Coats',
        'cat-jackets': 'Jackets',
        'cat-dresses': 'Dresses',
        'port-jeans-title': 'Jeans repair',
        'port-jeans-desc': 'We restore the original finish and stitch.',
        'port-pants-title': 'Trousers repair',
        'port-pants-desc': 'Working with all types of fabrics.',
        'port-shirts-title': 'Shirt and blouse repair',
        'port-shirts-desc': 'Working with cotton, silk and knitwear.',
        'port-knit-title': 'Knitwear repair',
        'port-knit-desc': 'Precision restoration with stitch picking.',
        'port-jackets-title': 'Jacket repair',
        'port-jackets-desc': 'From windbreakers to down jackets.',
        'port-coats-title': 'Coat repair',
        'port-coats-desc': 'Lining replacement and professional alterations.',
        'port-tshirts-title': 'T-shirt repair',
        'port-tshirts-desc': 'Seam restoration and hemming.',
        'port-dresses-title': 'Dress repair',
        'port-dresses-desc': 'Hemming and tailoring to fit.',
        'contacts-page-title': 'Contact',
        'contact-phone-label': 'Phone',
        'contact-hours-label': 'Working Hours',
        'contact-hours': 'Mon-Fri: 8:00 - 14:00, 17:00 - 20:00<br>Sat-Sun: Closed',
        'contact-location-label': 'Address',
        'contact-address': 'Aleja Juliusza Słowackiego 10/7<br>30-037 Kraków, Poland',
        'contact-whatsapp': 'Message on WhatsApp',
        'contact-telegram': 'Message on Telegram',
        'contact-instagram': 'Message on Instagram',
        'contact-advice': 'For your convenience, we recommend calling or messaging us in advance to book a consultation. The fastest way to find out the possibility and approximate cost of the repair is to send us a photo of your item and a short description of what needs to be done via messenger.',
        'order-steps-title': 'How to place an order?',
        'order-offline-title': 'Offline at the atelier',
        'order-offline-step1': 'Bring your item to the atelier in Kraków, and we will suggest a solution and price.',
        'order-offline-step2': 'Place your order and don\'t worry.',
        'order-offline-step3': 'We will carefully restore your items and ensure excellent results.',
        'order-offline-step4': 'Receive perfectly repaired items right on time.',
        'order-online-title': 'Online by mail',
        'order-online-step1': 'Send a photo of your item, and we will suggest a solution and price.',
        'order-online-step2': 'Send your item to us (e.g., via InPost Paczkomat).',
        'order-online-step3': 'We will carefully restore your items and ensure excellent results.',
        'order-online-step4': 'Receive perfectly repaired items at the nearest parcel locker.',
        'order-inpost-info': 'Shipping details: InPost Paczkomat KRA06APP | Mazowiecka 14, 30-015 Kraków | Recipient: Atelier Krakow | Phone: +48 573 243 791'
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
    localStorage.setItem('preferredLanguage', lang);
}

function initBurgerMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const header = document.getElementById('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initHeaderScroll() {
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ua';
    switchLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault(); 
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    initBurgerMenu();
    initAccordion();
    initSmoothScroll();
    initHeaderScroll();
});