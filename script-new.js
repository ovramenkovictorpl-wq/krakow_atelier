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
        'prices-cat-1': 'Джинси та Штани',
        'price-1-1': 'Вкоротити джинси зі збереженням потертого низу',
        'price-1-2': 'Вшити джинси по шву сидіння',
        'price-1-3': 'Штопання джинсів (один фрагмент)',
        'price-1-4': 'Замінити блискавку в джинсах',
        'price-1-5': 'Вкоротити штани швом із прихованим зрізом',
        'price-1-6': 'Вкоротити класичні штани зі стрічкою',
        'price-1-7': 'Вкоротити лижні штани з перенесенням манжета',
        'prices-cat-2': 'Сукні, Спідниці та Сорочки',
        'price-2-1': 'Ремонт розрізу на спідниці',
        'price-2-2': 'Вкоротити низ прямої сукні',
        'price-2-3': 'Замінити застібку-блискавку в сукні на підкладці',
        'price-2-4': 'Вкоротити низ сорочки фігурний',
        'price-2-5': 'Вкоротити рукав сорочки з манжетом',
        'price-2-6': 'Вшити сорочку витачками',
        'prices-cat-3': 'Піджаки та Трикотаж',
        'price-3-1': 'Вкоротити рукава піджака з двома петельками',
        'price-3-2': 'Вкоротити рукава піджака підняттям за округлістю',
        'price-3-3': 'Вшити піджак по рельєфах зі шліцами',
        'price-3-4': 'Ремонт розриву трикотажу з набором петель',
        'price-3-5': 'Ремонт кетельного шва на трикотажі (до 3 см)',
        'price-3-6': 'Вкоротити рукава з перенесенням манжета на трикотажі',
        'price-3-7': 'Зашити дірку на кофті вручну',
        'prices-cat-4': 'Верхній одяг (Пальта, Куртки, Пуховики)',
        'price-4-1': 'Вкоротити низ пальто на підкладці',
        'price-4-2': 'Вшити пальто за середнім швом без шлиці',
        'price-4-3': 'Ремонт розриву з підсиленням у пальто "дабл-фейс"',
        'price-4-4': 'Замінити блискавку в лижній куртці',
        'price-4-5': 'Замінити блискавку в пуховику',
        'price-4-6': 'Ремонт розриву пуховика витачкою',
        'price-4-7': 'Наповнити пухом один фрагмент куртки',
        'prices-cat-5': 'Шкіра та Хутро',
        'price-5-1': 'Пофарбувати шкіряну куртку',
        'price-5-2': 'Ремонт розриву шкіряної куртки рідкою шкірою',
        'price-5-3': 'Замінити блискавку в шкіряній куртці',
        'price-5-4': 'Вкоротити низ шуби прямого силуету',
        'price-5-5': 'Реставрація невеликого розриву шуби',
        'price-5-6': 'Замінити підкладку в шубі',
        'price-5-7': 'Вкоротити довжину дублянки',
        'prices-cat-6': 'Інше (Футболки, Білизна, Сумки)',
        'price-6-1': 'Вкоротити низ футболки розпошивом',
        'price-6-2': 'Вшити трусики купальника з боків',
        'price-6-3': 'Вшити чашку поролонового бюста',
        'price-6-4': 'Перестрочити скатертину, штору (1 метр)',
        'price-6-5': 'Замінити блискавку в рюкзаку',
        'price-6-6': 'Пофарбувати шкіряну сумку',
        'price-6-7': 'Пришити ґудзик',
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
        'contact-hours': 'Пн-Пт: 10:00 - 19:00<br>Сб: 10:00 - 15:00',
        'contact-location-label': 'Адреса',
        'contact-address': 'Aleja Juliusza Słowackiego 10/7<br>30-037 Kraków, Poland',
        'contact-whatsapp': 'Написати в WhatsApp',
        'contact-telegram': 'Написати в Telegram',
        'contact-instagram': 'Написати в Instagram',
        'contact-advice': 'Для вашої зручності рекомендуємо попередньо зателефонувати або написати нам, щоб записатися на консультацію. Найшвидший спосіб дізнатися можливість та орієнтовну вартість ремонту — надіслати нам у месенджер фото вашого виробу та короткий опис того, що потрібно зробити.'
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
        'prices-cat-1': 'Dżinsy i spodnie',
        'price-1-1': 'Skracanie dżinsów z zachowaniem przetartego dołu',
        'price-1-2': 'Zwężanie dżinsów w szwie siedzenia',
        'price-1-3': 'Cerowanie dżinsów (jeden fragment)',
        'price-1-4': 'Wymiana zamka w dżinsach',
        'price-1-5': 'Skracanie spodni ściegiem krytym',
        'price-1-6': 'Skracanie klasycznych spodni z taśmą',
        'price-1-7': 'Skracanie spodni narciarskich z przeniesieniem mankietu',
        'prices-cat-2': 'Suknie, spódnice i koszule',
        'price-2-1': 'Naprawa rozcięcia spódnicy',
        'price-2-2': 'Skracanie dołu sukni prostej',
        'price-2-3': 'Wymiana zamka błyskawicznego w sukni na podszewce',
        'price-2-4': 'Skracanie dołu koszuli z zaokrągleniem',
        'price-2-5': 'Skracanie rękawa koszuli z mankietem',
        'price-2-6': 'Wstawianie zaszewek w koszuli',
        'prices-cat-3': 'Marynarki i dzianiny',
        'price-3-1': 'Skracanie rękawów marynarki z dziurkami',
        'price-3-2': 'Skracanie rękawów marynarki z podniesieniem',
        'price-3-3': 'Zwężanie marynarki w reliefach',
        'price-3-4': 'Naprawa rozdarcia dzianiny z nabieraniem oczek',
        'price-3-5': 'Naprawa ściegu kettlowego (do 3 cm)',
        'price-3-6': 'Skracanie rękawów z przeniesieniem mankietu',
        'price-3-7': 'Ręczne zaszycie dziury w swetrze',
        'prices-cat-4': 'Odzież wierzchnia',
        'price-4-1': 'Skracanie dołu płaszcza na podszewce',
        'price-4-2': 'Zwężanie płaszcza w szwie środkowym',
        'price-4-3': 'Naprawa rozdarcia płaszcza "double face"',
        'price-4-4': 'Wymiana zamka w kurtce narciarskiej',
        'price-4-5': 'Wymiana zamka w kurtce puchowej',
        'price-4-6': 'Naprawa rozdarcia kurtki puchowej',
        'price-4-7': 'Uzupełnienie puchu w jednym fragmencie kurtki',
        'prices-cat-5': 'Skóra i futra',
        'price-5-1': 'Farbowanie kurtki skórzanej',
        'price-5-2': 'Naprawa rozdarcia skóry skórą w płynie',
        'price-5-3': 'Wymiana zamka w kurtce skórzanej',
        'price-5-4': 'Skracanie dołu futra',
        'price-5-5': 'Renowacja niewielkiego rozdarcia futra',
        'price-5-6': 'Wymiana podszewki w futrze',
        'price-5-7': 'Skracanie długości kożucha',
        'prices-cat-6': 'Inne',
        'price-6-1': 'Skracanie dołu T-shirtu ściegiem drabinkowym',
        'price-6-2': 'Zwężanie dołu stroju kąpielowego',
        'price-6-3': 'Wstawianie miseczki stanika',
        'price-6-4': 'Przeszycie obrusu, zasłony (1 metr)',
        'price-6-5': 'Wymiana zamka w plecaku',
        'price-6-6': 'Farbowanie torebki skórzanej',
        'price-6-7': 'Przyszycie guzika',
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
        'contact-hours': 'Pn-Pt: 10:00 - 19:00<br>Sb: 10:00 - 15:00',
        'contact-location-label': 'Adres',
        'contact-address': 'Aleja Juliusza Słowackiego 10/7<br>30-037 Kraków, Poland',
        'contact-whatsapp': 'Napisz na WhatsApp',
        'contact-telegram': 'Napisz na Telegram',
        'contact-instagram': 'Napisz na Instagram',
        'contact-advice': 'Dla Twojej wygody zalecamy wcześniejszy kontakt telefoniczny lub mailowy w celu umówienia się na konsultację. Najszybszym sposobem na poznanie możliwości i orientacyjnego kosztu naprawy jest przesłanie nam w komunikatorze zdjęcia produktu oraz krótkiego opisu, co należy zrobić.'
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
        'prices-cat-1': 'Jeans and Trousers',
        'price-1-1': 'Shortening jeans keeping the frayed hem',
        'price-1-2': 'Taking in jeans at the seat seam',
        'price-1-3': 'Darning jeans (one fragment)',
        'price-1-4': 'Zipper replacement in jeans',
        'price-1-5': 'Shortening trousers with blind stitch',
        'price-1-6': 'Shortening classic trousers with tape',
        'price-1-7': 'Shortening ski trousers with cuff transfer',
        'prices-cat-2': 'Dresses, Skirts and Shirts',
        'price-2-1': 'Skirt slit repair',
        'price-2-2': 'Shortening the hem of a straight dress',
        'price-2-3': 'Zipper replacement in a lined dress',
        'price-2-4': 'Shortening a curved shirt hem',
        'price-2-5': 'Shortening shirt sleeve with cuff',
        'price-2-6': 'Taking in a shirt with darts',
        'prices-cat-3': 'Jackets and Knitwear',
        'price-3-1': 'Shortening jacket sleeves with buttonholes',
        'price-3-2': 'Shortening jacket sleeves from the shoulder',
        'price-3-3': 'Taking in a jacket at the relief seams',
        'price-3-4': 'Repairing knitwear tear with stitch picking',
        'price-3-5': 'Repairing kettle stitch on knitwear',
        'price-3-6': 'Shortening sleeves with cuff transfer',
        'price-3-7': 'Manual darning of a hole in a sweater',
        'prices-cat-4': 'Outerwear',
        'price-4-1': 'Shortening the hem of a lined coat',
        'price-4-2': 'Taking in a coat at the center seam',
        'price-4-3': 'Repairing a tear in a double-face coat',
        'price-4-4': 'Zipper replacement in a ski jacket',
        'price-4-5': 'Zipper replacement in a down jacket',
        'price-4-6': 'Repairing a down jacket tear with a dart',
        'price-4-7': 'Filling a jacket section with down',
        'prices-cat-5': 'Leather and Fur',
        'price-5-1': 'Dyeing a leather jacket',
        'price-5-2': 'Repairing a leather jacket tear with liquid leather',
        'price-5-3': 'Zipper replacement in a leather jacket',
        'price-5-4': 'Shortening the hem of a fur coat',
        'price-5-5': 'Repairing a small tear in fur',
        'price-5-6': 'Lining replacement in a fur coat',
        'price-5-7': 'Shortening a sheepskin coat',
        'prices-cat-6': 'Other',
        'price-6-1': 'Shortening T-shirt hem with coverstitch',
        'price-6-2': 'Taking in swimsuit bottoms',
        'price-6-3': 'Inserting a bra cup',
        'price-6-4': 'Hemming a tablecloth or curtain (1 meter)',
        'price-6-5': 'Zipper replacement in a backpack',
        'price-6-6': 'Dyeing a leather bag',
        'price-6-7': 'Sewing on a button',
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
        'contact-hours': 'Mon-Fri: 10:00 - 19:00<br>Sat: 10:00 - 15:00',
        'contact-location-label': 'Address',
        'contact-address': 'Aleja Juliusza Słowackiego 10/7<br>30-037 Kraków, Poland',
        'contact-whatsapp': 'Message on WhatsApp',
        'contact-telegram': 'Message on Telegram',
        'contact-instagram': 'Message on Instagram',
        'contact-advice': 'For your convenience, we recommend calling or messaging us in advance to book a consultation. The fastest way to find out the possibility and approximate cost of the repair is to send us a photo of your item and a short description of what needs to be done via messenger.'
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