const LEVE_LB_div = document.querySelector(".LEVE_LB_div");
const LEVE_LB_btn = LEVE_LB_div.querySelectorAll(".LEVE_LB_btn");
const Laboratories_content = document.querySelector(".Laboratories_content")



for (let i = 0; i < LEVE_LB_btn.length; i++) {
    LEVE_LB_btn[i].addEventListener("click", () => {
        if (i == 0) {
            History()
        } else if (i == 1) {
            Research()
        } else if (i == 2) {
            results()
        } else if (i == 3) {
            Achievements()
        } else if (i == 4) {
            Employees()
        } else if (i == 5) {
            Publications()
        } else if (i == 6) {
            Projects()
        } else if (i == 7) {
            Services()
        } else if (i == 8) {
            Contacts()
        }

    })
    
}

function History() {
    Laboratories_content.innerHTML = 
    `
    <h2>Биологик фаол макромолекуляр тизимлар лабораторияси</h2>
    <h3>Лаборатория мудири – к.ф.д., ета.и.х. Шомуротов Шавкат Абдуганиевич</h3>
    <h3>+998 (97) 7140639; shsha@mail.ru</h3>

    <h2>Тарихи</h2>

    <p>Пахта целюлозаси кимёси ва техологияси илмий текшириш институти тарқатиб юборилганидан сўнг 1993 йилда “Целлюлоза
        кимёси” лаборатрияси ЎзР ФА Биоорганик кимё институти таркибига киритилди. Лабораторияда қисқа вақт мобайнида,
        к.ф.д., профессор А.С.Тураев раҳбарлигида полисахаридлар ва уларнинг ҳосилаларини кимёвий модификациялаш,
        уларнинг молекуляр ва молекуляр уст структуралари ўрганиш, шунингдек, тибиий ва синтетик гидрофил полимерлар ва
        улар асосида тиббиёт ва қишлоқ хўжалиги учун янги самарали препаратлар, йўналтирилган таъсирга эга дори
        воситалари, белгиланган хусусиятли жарроҳлик воситалари олиш борасида кўплаб тадқиқотлар олиб борилди.
        Лаборатория таркиби кенгайди ва бир қанча фан докторлари ва номзодлари етишиб чиқди. “Целлюлоза кимёси”
        лабораторияси 2012 йилдан бошлаб “Полисахаридлар кимёси” лабораторияси деб номлана бошланди. Ҳозирги кунда
        лаборатория макромолекуляр тизимлар ва уларнинг тузилиши ва биологик фаоллигини ўргиниш, «тузилиш-фаоллик»
        боғлиқликларини аниқлаш, тиббиёт, фармацевтика ва қишлоқ хўжалаги учун макромолекуяр тизимлар яратиш билан
        шуғулланади. Шу боис ҳозирда лаборатория “Биологик фаол макромолекуляр тизимлар” лабораторияси деб номланади.
    </p>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h2>Тадқиқотлар</h2>
    <ul style="list-style-type:disc;">
        <li>Келиб чиқиши турлича бўлган полисахаридларни структура-кимёвий модификация қилиш, уларнинг модификацияланиш
            жараёни (этерификация, алкилланиш, окисдланиш ва бош.) қонуниятларини ўрганиш, терапевтик материаллар яратиш
            мақсадида уларнинг физик-кимёвий ва тиббий-биологик хусусиятларини тадқиқ этиш.</li>
        <li> Ўсмаларга қарши йўналтирилган таъсирли препаратлар яратиш мақсадида бета-D-глюкан, галоктаманнан ва
            уларнинг модификацияланган хосилаларининг хужайра лектинлари билан комплементар таъсирларини тадқиқ этиш.
        </li>
        <li> Йўналтирилган таъсирли макромолекуляр тизимлар яратиш мақсадида полисахарид ва уларнинг хосилаларини
            биомакромолекула ва физиологик фаол қуйи молекуляр бирикмалар билан кимёвий модификациялаш қонуниятларини
            ўрганиш.</li>
        <li>Модификацияланган полисахаридлар асосида йўналтирилган ва пролонгацияланган биологик фаол макромолекуляр
            тизимлар олиш ва уларни ишлаб чиқариш технологиясини яратиш, улани стандартлашнинг замонавий усулларини
            ишлаб чиқиш.</li>
        <li> Полисахарид ва уларнинг ҳосилаларини кимёвий модификациялаш, уларнинг молекуляр ва структуравий
            хусусиятларини ўрганиш ҳамда полисахаридлар ва синтетик гидрофил полимерлар асосида тиббиёт, фармацевтика ва
            қишлоқ хўжалагида қўллаш учун янги самарали дори препаратлар ва тиббий воситалари олиш.</li>
        <li> Табиий ипсимон структурасини сақлаган коллаген ажратиб олиш ва табиий сувда эрувчан полисахаридлар билан
            модификациялаш, улар асосида жарроҳлик, стоматология, кардиология учун воситалар яратиш.</li>
    </ul>
    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
    <h2>Натижалар</h2>
    <ul style="list-style-type:disc;">
        <li>Илк бор полианион типидаги полисахаридлар лейкемия ва гепатита С вирусларини, шунингдек, E. coli ва P.
            aeruginosa бактерияларини ингибирлаши аниқланган. Макромолекулаларнинг патогенлар билан таъсирлашишида
            уларнинг конформацияси, молекуляр массами, алмашиниш даражаси ва макромолекула бўйлаб функционал
            гуруҳларнинг жойланишининг таъсири аниқланган.</li>
        <li> Белгиланган макромолекуляр тузилиш ва молекуляр параметрларга эга модификацияланган сульфат ва фосфат
            полисахаридларини олиш усуллари ишлаб чиқилган. Олинган ҳосилаларнинг мос равишда вирусларга (лейкемия ва
            гепатит C) ва бактерияларга (Staphylococcus aureus) қарши юқори фаолликка эга эканлиги аниқланган. Антивирус
            фаолликни аниқлашда полисахарид конформациясининг аҳамияти кўрсатилган.</li>
        <li> Компьютер моделлаштириш ёрдамида гексоза гидроксил гуруҳлари эфирланиш даражасининг ошиши билан саратон
            ҳужайраларининг оқсил қисмининг дектинлари билан ўзаро таъсири кучайиши аниқланган. β-D-глюкан лигандлари ва
            уларнинг мураккаб эфирларининг молекуляр моделини молекуляр докинг жараёнида улар саратон ҳужайраларининг
            мембранасида жойлашган галактозага хос бўлган галектин-7 ва галектин-3 доменларининг оқсил қисми (мос
            равишда 3ЗХЕ ва 3Т1М) билан ўзаро таъсирлашади. Базидиомицет замбуруғларидан полисахаридлар - β-D-глюканлар
            ва гледичиядан галактоманнан ажратиб олиш усуллари ишлаб чиқилган. Уларнинг тузилиши ва молекуляр
            параметрлари ўрганилган. Базидиомицет замбуруғларидан ажратилган комплекс таркибидан β-D-глюкан ва меланинни
            ажратиш усуллари ишлаб чиқилиб, улар ва галактоманнанларнинг гемцитабин тутган модификацияланган
            ҳосилаларининг ўсмага қарши фаоллиги КМЛ, Hela, Akat саратон ҳужайралари турларида in vitro шароитларида
            текширилган.</li>
        <li> Полигалактурон кислотани ўсмага қарши препарат доксорубицин билан молекуляр конструкциялаш натижасида кам
            заҳарлилик ва саратонга қарши таъсирга эга “Галакторубицин” макромолекуляр дори тизими олинган.
            “Галакторубицин” клиник олди синовлари ўтказили, меъёрий-техник ҳужжатлари тайёрланган.</li>
        <li> Тери саноати чиқиндиларидан ишқорий ва тузли-ишқорий усуллар ёрдамида коллаген ажратиб олиш технологияси
            ишлаб чиқилди. Гидролизнинг оптимал шароитлари ва ажратиб олинган коллагеннинг аминокислоталар таркиби
            аниқланди. Коллаген ва сувда эриувчан полисахаридлардан юқори оқсил сақловчи концентрат олиш бўйича
            тадқиқотлар олиб борилган. Коллаген ва полисахаридлар асосида юқори оқсилли концентрат олишнинг технологик
            схемаси ишлаб чиқилган.</li>
    </ul>
    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `
    <h2>Ютуқлари</h2>
    <ul style="list-style-type:disc;">
        <li>Лицензион шартнома асосида коллагенли “Гемогубка” гемостатик қопламасини ишлаб чиқариш “TURON SILK PHARM”
            МЧЖда ташкил этилган. Республика нейрохирургия илмий маркази, Республика ихтисослаштирилган урология маркази
            ва Тошкент педиатрия тиббиёт институтиларида “Гемогубка” гемостатик қопламасининг клиник синовлари
            ўтказилган. 2016-йил 2-декабрдаги ТВ/М 00104/12/16-сонли рўйхатга олиш гувоҳномасига мувофиқ “Гемогубка”
            гемостатик қопламаси тиббиёт амалиётида қўллнилашга руҳсат этилган. “TURON SILK PHARM” МЧЖда коллагенли
            “Гемогубка” гемостатик қопламасини ишлаб чиқариш технологик линияси ишга туширилиб, ҳозирда ушбу ташкилотда
            ишлаб чиқарилмоқда.</li>
        <li>Лицензион шартнома асосида “Полижель Ультра” ультратовуш диагностикаси учун гел ва ярани даволовчи
            “Тимогель” препаратини ишлаб чиқариш “Торимед Фарм” МЧЖда ташкил этилган. Ушбу ташкилот юмшоқ дори
            шаклларини ишлаб чиқариш бўйича технологик линияда 1 тонна миқдорда ультратовуш диагностикаси учун контакт
            гел «Полижель Ультра» ишлаб чиқарилди. Ярани даволовчи "Тимогель" препарати венерология ва дерматология
            кафедрасида клиник синовлардан ўтказилиб, амалиётда қўллашга руҳсат этилган. "Тимогель" препарати учун барча
            меъёрий техник ҳужжатлар мавжуд.</li>
        <li>Коллаген (Тс 25193402-03:2018) ва “Биоплант” косметик восита (Тс 25193402-04:2018) учун техник шартлар
            ишлаб чиқилган ва ишлаб чиқариш учун руҳсат олиш мақадида Ўзбекистон Республикаси Соғлиқни сақлаш вазирлиги
            Республика санитария-эпидемиология марказига тақдим этилган. Лицензия шартномасига кўра, ишлаб чиқариш
            “Turon Silk Pharm” МЧЖда ташкил этилиб, мазкур ташкилотда коллаген ва “Биоплант” косметик воситасини ишлаб
            чиқариш линиясини ишга туширган.</li>
        <li>Полигалактурон кислотасини силга қарши препаратлар билан молекуляр конструкциялаш натижасида “Биомайрин”
            силга қарши комбинацияланган препарат олинган. Препаратни олиш технологияси ишлаб чиқилди ва илмий-техник
            ҳужжатлари тайёрланган. Препарат уч босқичли клиник синовлардан ўтган ва сил билан касалланган беморларни
            даволаш учун тиббий амалиётда фойдаланиш учун руҳсат этилган.</li>
    </ul>

    <h2>Патентлар:</h2>
    <ul style="list-style-type:none;">
        <li>Патент РУз № I АР 02217 "Кардиогель» ток ўтказувчи гелли композиция, </li>
        <li> Патент РУз № I АР 02311 Жарроҳлик ипининг олиниш усули.</li>
        <li> Патент РУз № I АР 02435 Жарроҳлик тикувчи ип </li>
        <li> Патент РУз № I АР 02506 Коллаген толалари матрица олиш усули </li>
        <li> Патент РУз № I АР 02561 Коллаген кукунини олиш усули </li>
        <li> Патент РУз № I АР 02592 Жарроҳлик тикувчи ип </li>
        <li> Патент РУз № I АР 02724 Елим композиция </li>
        <li> Патент РУз № I АР 03204 Сунъий тиш протезлари учун адгезив кукун </li>
        <li> Патент РУз № I АР 03207 Таблетка учун таркиб </li>
        <li> Патент РУз № I АР 03503 Жарроҳлик ипини олиш усули </li>
        <li> Патент РУз № I АР 04589 Бириктирувчи тўқималар дефекти учун коллаген инъекцион эритмаси</li>
        <li> Патент РУз № I АР 04588 Эндопротезлаш учун коллаген инъекцион эритмаси</li>
        <li> Патент РУз № I АР 04587 Инъекционный раствор коллагена для эндопротезирования </li>
        <li> Патент РУз № I АР 04603 Ўсимлик барклари тамаки вируси ингибитори </li>
        <li> Патент РУз № I АР 04608 Ялиғланишга қарши яра битказувчи восита</li>
        <li> Патент РУз № I АР 04736 коллаген субстанциясини олиш усули </li>
        <li> Патент РУз № I АР 05125 Коллаген асосида ғоваксимон материал олиш</li>
        <li> Патент РУз № I АР 05207 Ярабитказувчи восита </li>
    </ul>

    <h2>Регистрацион сертификат ва гувохномалар </h2>
    <ul style="list-style-type:none;">
        <li>- ТВ/М 00086/09/06 «Полижель Ультра» ультратовуш ташхиси учун полимер гели;</li>
        <li> - DV/M 01574/06/17 «Тимогель» яра битказувчи препарат;</li>
        <li> - ТВ/М 00104/12/16 “Гемогубка” гемостатик қоплама;</li>
        <li> - № 1 А 1730 «Биосольвент» суюқлиги</li>
    </ul>
    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
    <h2>Илмий ходимлар</h2>

    <ul style="list-style-type:disc;">
        <li> Тураев Аббасхан Сабирханович – к.ф.д., академик</li>
        <li> Шомуротов Шавкат Абдуганиевич – к.ф.д., е.и.х.</li>
        <li> Филатова Альбина Васильевна – к.ф.д., е.и.х.</li>
        <li> Сагдуллаева Дилафруз Саидакбаровна – к.ф.д., е.и.х.</li>
        <li> Мухитдинов Бахтиер Икромович – к.ф.д., е.и.х.</li>
        <li> Атаджанов Абдилахад Юлдошевич – т.ф.н., кат.и.х.</li>
        <li> Хайтметова Саидахон Бокижоновна – т.ф.н., кат.и.х.</li>
        <li> Раджабов Отабек Искандарович – PhD, кат.и.х.</li>
        <li> Джурабоев Джалол Тургунбаевич – PhD, кат.и.х.</li>
        <li> Амонова Дилноза Мухторовна – PhD, кат.и.х.</li>
        <li> Халилова Гулноза Абдувохобовна – PhD, кат.и.х.</li>
        <li> Азимова Луиза Бахтияровна – к.и.х.</li>
        <li> Хабибуллаев Жахонгир Асатуллаеви – к.и.х.</li>
        <li> Мехманов Илхом Юсуфжонович – к.и.х.</li>
        <li> Синдаров Бобур Актамович – к.и.х.</li>
        <li> Азизов Шавкат Исматиллаевич – докторант</li>
        <li> Ахмедов Олий Равшанович – докторант</li>
        <li> Бўриев Достон Абдусаматович – базавий докторант</li>
        <li> Бойдадаев Азизбек Анваржонович – базавий докторант</li>
        <li> Суюндиков Мухридин Қобилович – базавий докторант</li>
        <li> Абдурахмонов Жамолидин Абдуғулом ўғли – базавий докторант</li>
        <li> Абдусаломов Жавоҳир Тўлқинович – стажер-тадқиқотчи</li>
        <li> Калонова Мухаббатхон Оқилхон қизи – лаборант</li>
    </ul>
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h2>Чоп этилган илмий ишлар</h2>

    <ol>
        <li> Шомуротов Ш.А., Тураев А.С. Синтез и исследование биологической активности сульфаминовых производных
            полисахаридов // Химия растительного сырья. № 3. С. 18-23.</li>
        <li> Шомуротов Ш.А., Муйдинов Н.Т., Ваили А., Тураев А.С. Cинтез и исследование антимикробной активности
            сульфаминовых производных пектина // Химия в интересах устойчивого развития. 2015. № 4. С. 79-85.</li>
        <li> Шомуротов Ш.А., Муйдинов Н., Тураев А.С. Синтез и антибактериальная активность производных
            полигалактуроновой кислоты // Химико-фармацевтический журнал. 2015. № 4. С. 67-72.</li>
        <li> Шомуротов Ш.А., Мамадуллаев Г., Тураев А.С. Медико-биологические свойства полисахаридных комплексов
            изониазида и этамбутола // Журнал биомедицинской химии. Москва, 2016. №1. С. 45-49.</li>
        <li> Худойназаров И.А., Нормахаматов Н.С., Бойсунов Н.Б., Широкова Ю.И., Азимова Л.Б., Тураев А.С. Исследование
            промывки засоленных земель с использованием полимерной композиция «Биосолвент» // Химия и химическая
            технология. 2016.</li>
        <li> Wondraczek H., Normakhamatov N., Heinze Th., Turaev A.S. Preparation and estimation of the viscosimetric
            constants for sodium cellulose sulfates in varying molecular parameters // Carbohydrate polymers. 2016.</li>
        <li> Хайтметова С.Б., Шомуротов Ш.A., Тураев А.С. Синтез и изучение свойств полимерных комплексов этацизина с
            карбоксиметилцеллюлозой // Химия растительного сырья. 2017. №4. С. 23-30.</li>
        <li> Shomurotov Sh.A., Akhmedov O.R., Mamatmusaeva N.E., Sagdullaev B.T., Turaev A.S. Мodified derivatives of
            polysaccharides having antituberculosis activity // Austrian Journal of Technical and Natural Sciences.
            2017. №1-2. Р.134-138.</li>
        <li> Ахмедов О.Р. Шомуротов Ш.А., Ваили А, Тураев А.С. Синтез и исследование антимикробной активности
            сульфаминовых производных пектина // Химия в интересах устойчивого развития. 2017. Т.25. С.141-145.</li>
        <li> B. Muhitdinov, Th. Heinze, N. Normakhamatov, Turaev A.S. Preparation of sodium cellulose sulfate oligomers
            by free-radical depolymerization // Carbohydrate Polymers. 2017. Vol. 173. pp. 631-637.</li>
        <li> Ахмедов О.Р., Шомуротов Ш.А., Изотова Л.Ю., Тураев А.С. Производные ксантановой камеди. Синтез,
            исследование, фунгицидная активность // Журнал Сибирского Федерального Университета (серия химии). 2017. №2.
            С.14-16.</li>
        <li> Муйдинов Н.Т., Раджабов О.И., Халилова Г.А., Гулямов Т., Атажанов А.Ю., Тураев А.С. Биополимерная
            композиция для лекарственных пленок // Ўзбекистон Республикаси Фанлар академиясининг маърузалари. 2017. № 6.
            С.52-56.</li>
        <li> Худойназаров И.А., Филатова А.В., Азимова Л.Б., Нормахаматов Н.С., Бойсунов Н.Б., Тураев А.С. Исследование
            влияния степени засоления, обработанной препаратом «Биосолвент» почвы на развитие и урожайность
            средневолокнистого хлопчатника // Доклады академии наук Республики Узбекистан. 2017. №6. С. 65-71.</li>
        <li> Филатова А.В., Джурабаев Д.Т., Выпова Н.Л., Азимова Л.Б., Тураев А.С. // Фармако-токсикологические
            исследования препарата наружного действия для лечения аллергии // Инфекция, иммунитет и фармакология. Т.,
            2018. №1. С. 64-68.</li>
        <li> Сагдуллаева Д.С., Тураев А.С., Филатова А.В., Пардаев Г.Э., Абдурахимов А.А. Исследование влияния способа
            получения хлопковых фосфолипидов на их жирнокислотный состав // Химия и химическая технология. 2018. №4. С.
            60-64. </li>
        <li> Азимова Л.Б., Нормахаматов Н.С., Хайтметова С.Б., Мухитдинов Б.И., Амонова Д.М., Халилова Г.А., Киргизбаев
            Х.Х., Тураев А.С. Выделение и изучение физико-химических свойств галактоманнанов из растительного сырья //
            Химия растительного сырья. Барнаул, 2019. №2, С. 35-41. DOI: https://doi.org/10.14258/jcprm.2019024491.</li>
        <li> Albina Filatova, Luiza Azimova, Ulugbek Gayibov, Sabina Gayibova Aesculus Hippocastannum: phitoscreening,
            antiradical activity and anti-inflammatory effect // Advances in Biotechnology and Microbiology. 2019. V.14.
            Issue 5. P.001-002. DOI: 10.19080/AIBM.2019.14.555898 </li>
        <li> Bahtiyor Muhitdinov, Thomas Heinze, Abbaskhan Turaev, Andreas Koschella, Nodirali Normakhamatov. Homogenous
            synthesis of sodium cellulose sulfates with regulable low and high degree of substitutions with SO3/Py in
            N,N-dimethylacetamide/LiCl // European Polymer Journal (Elsevier). 2019. Vol. 119, pp. 181-188. DOI:
            https://doi.org/10.1016/j.eurpolymj.2019.07.030.</li>
        <li> Elova N.A., Kutliyeva G. Dj., Siddikova A., Akhmedov O. R. Production of exopolysaccharide by Lactobacillus
            plantarum EB-2 strain // International Scientific Journal Theoretical & Applied Science.Vol.76. P.80-88.
        </li>
        <li> Шомуротов Ш.А., Султанова Э.М., Салахутдинова М.К., Ишимов У.Ж., Зиявитдинов Ж.Ф., Вешкурова О.Н., Тураев
            А.С. Исследование фармакокинетики протвотубекулезного препарата Биомайрин // Фармакокинетика и
            фармакодинамика. Москва, 2018. №4. С. 50-55.</li>
        <li> Shomuratov Sh.A., Turaev A.S., Mamatmusaeva N.E., Sagdullaev B.T. Рre-clinical studies of the
            anti-tubulative drug “Вiomairin”// World journal of pharmacy and pharmaceutical sciences. 2019. Volume 8,
            Issue 5. Р. 1697-1707.</li>
        <li> Маматмусаева Н.Э., Шомуратов Ш.А., Тураев А.С., Сагдуллаев Б.Т. Исследование стабильности капсул
            «Биомайрин» // Фармация и фармакология. Россия, 2019. </li>
        <li> Азимова Л.Б., Филатова А.В., Тураев А.С., Джурабаев Д.Т. Изучение полисахаридного комплекса, выделенного из
            Aesculus Hippocastanum L. // Химия растительного сырья. Барнаул, 2021. №3. С. 115-122. DOI:
            10.14258/jcprm.2021039173.</li>
        <li> Filatova A.V., Azimova L.B. and Turaev A.S. Biopharmaceutical, toxicological, and morphological assessment
            of an antiallergenic medicine for external application // Pharmaceutical Chemistry Journal. 2022. Vol. 56,
            No. 1. С. 16-21. (Russian Original Vol. 56, No. 1, January, 2022). DOI: 10.1007/s11094-022-02595-1.</li>
        <li> Филатова А.В., Джурабаев Д.Т., Азимова Л.Б., Тураев А.С. Технология выделения полисахаридов из оболочек
            плодов каштана конского (Aesculus hippocastanum l.) и изучение его химического состава // Изв. вузов. Химия
            и хим. технология. Иваново, 2022. Т. 65, Вып. 7. С.88-93. DOI: 10.6060/ivkkt.20226507.6605.</li>
        <li> Филатова А.В., Азимова Л.Б., Тураев А.С. Биофармацевтическая, токсикологическая и морфологическая оценка
            противоаллергенного препарата наружного действия // Химико-фармацевтический журнал.
            2022.Т.56,№1.С.19-23.DOI: 10.30906/0023-1134-2022-56-1-19-24.</li>
        <li> Khaytmetova S.B., Turaev A.S., Khalilova G.A. Isolation and Physicochemical Characteristics of Pectin from
            Inonotus Hispidus // Polymer Science, Series B. 2022. Vol. 64, No. 4. Р. 500–505.© Russian Text © The
            Author(s), 2022, published in Vysokomolekulyarnye Soedineniya, Seriya B, 2022, Vol. 64, No. 4, pp. 283–289.
            DOI: 10.1134/S1560090422700221</li>
        <li> Amonova D.M., Mukhitdinov B.I., Turaev A.S., Kirgizbayev K.K., Boydedayev A.A., Sindarov B.A., Bekmirzayev
            Z.N. Obtaining low-molecular weight galactomannans and studying their physicochemical characteristics //
            Chem. plant raw Mater. 2022. № 2. P. 51–60. DOI: 10.14258/jcprm.202202955.</li>
        <li> Филатова А.В., Джурабаев Д.Т., Азимова Л.Б., Тураев А.С. Технология выделения полисахаридов из оболочек
            плодов каштана конского (Aesculus hippocastanum L.) и изучение его химического состава // Изв. Вузов. Химия
            и химическая технология. 2022. Т.65, вып.7. С. 88-93. DOI: 10.6060/ivkkt.20226507.6605.</li>
        <li> Азимова Л.Б., Филатова А.В., Мухамеджанова М.Ю., Тураев А.С. Получение и реологические свойства пектина,
            выделенного с использованием сверхвысокочастотного излучения // Химия растительного сырья. 2023. №1. С.
            77-86. DOI: jcprm.20230111066.</li>
        <li> Filatova A., Azimova L., Gayibova S., Vypova N., Turaev A., Djyrabaev D. Influence of melanin-containing
            gel on the level of nitric oxide metabolites under local uv irradiation of rats skin // Norwegian Journal of
            development of the International Science. 2023. №109. P. 5 – 9.</li>
        <li> Филатова А.В., Выпова Н.Л., Азимова Л.Б., Тураев А.С. Изучение фотопротекторной активности геля с меланином
            на модели ультрафиолетовой эритемы у крыс // Химико-фармацевтический журнал. 2023.Т.57,№4.
            С.41-45.DOI:10.30906/0023-1134-2023-57-4-41-45.</li>
        <li> Филатова А.В., Азимова Л.Б., Махмудов Л.У. Оценка фармакологической оценки полисахаридов Aesculus
            hippocastanum L. // Химико-фармацевтический журнал. 2023. Т.57, №7. С.13-17. DOI:
            10.30906/0023-1134-2023-57-7-13-17.</li>
        <li> Азимова Л.Б., Филатова А.В., Джурабаев Д.Т., Тураев А.С. Лечебно-профилактическое действие
            фотопротекторного геля на основе меланина // Биофармацевтический журнал. 2023. Т. 15, №3. С. 21-28. DOI:
            10.30906/2073-8099-2023-15-4-21-28.</li>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
        ...
    `
}

function Services() {
    Laboratories_content.innerHTML = 
    `
        ...
    `
}

function Contacts() {
    Laboratories_content.innerHTML = 
    `
        <p>Заведующий лабораторией: Шомуротов Шавкат Абдуганиевич д.х.н., вед.н.с., +998(97)7140639; shsha@mail.ru</p>
    `
}