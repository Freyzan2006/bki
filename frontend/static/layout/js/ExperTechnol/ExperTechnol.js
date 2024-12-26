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
    <h2>Амалий тажриба технологияси лабораторияси</h2>
    <h3>Лаборатория мудири</h3>
    <h2>Махмудов Сардор Джалилович, т.ф.н. (PhD)</h2>

    <h3>Лаборатория тарихи</h3>
    <p>Амалий тажриба технологияси лабораторияси 1973 йилда ташкил топган. Бу даврлар мобайнида лабораторияга к.ф.н.
        Ишбаев А.И., иқ.ф.д. Кахаров А.К., к.ф.н. Хаитбаев Х.Х., т.ф.д. Саидахмедов У.А., к.ф.д. Ташмухамедов М.С.
        ва к.ф.д., проф. Мавлянов С.М. мудирлик қилганлар. Лаборатория таркибида тажриба ишлаб чиқариш тармоғи мавжуд
        бўлиб, лабораторияда яратилган технологиялар асосида препаратларнинг синов партиялари ишлаб чиқарилади. Тажриба
        ишлаб чиқариш тармоғи 1981 йил ташкил этилган ва 1994 йилдан бошлаб, амалий тажриба технологияси лабораторияси
        таркибига қўшилган. Ушбу тармоқни Юсупов А.Ш. (1980-1987 йй.); Иногамов К. (1987-1989 йй.); Исаев Н.Х.
        (1990-1994 йй.); Абдурахманов Ш.Д. (1994-1996 йй.) бошқарганлар. Тармоқда Ўзбекистон ёғ-мой саноати
        чиқиндиларидан самарали препаратларни ишлаб чиқаришнинг чиқиндисиз технологиялари яратилиб, у асосида «Инверт
        эмульсион эритмалар учун эмульгатор олиш усули» (Исаев Х.И., Абдурахманов А.С.), гудрон олиш жараёни (госсипол
        смоласи) ишлаб чиқилган. Шунингдек, ўргимчак канага қарши суспензион олтингугурт (Исаев Х.И., Юсупов А.Ш.),
        қишлоқ хўжалиги экинлари зараркунандалари учун феромон синтезининг биринчи ва иккинчи босқичи технологияси ишлаб
        чиқарилган (Холбеков О.Х.). Лабораторияда пахта чигитидан госсипол ажратиб олиш ва техник госсипол, фармакопея
        госсиполи, госсипол антранилати, техник госсиполдан госсипол сирка кислотаси олиш технологияларини яратиш бўйича
        кенг кўламли изланишлар олиб борилган (Ибрагимов А.С., Отаргалиев Т., Саидахмедов У.А., Салихов Ш.И.). </p>
    <p> Амалий тажриба технологияси лабораториясида гидролитик ферментларга нисбатан юқори игибирловчи фаолликка ҳамда
        турли типдаги антиаритмик самарага эга бўлган лупинин ҳосилаларини синтез қилиш бўйича ҳам тадқиқотлар
        ўтказилган (Хаитбаев Х.Х., Абдувахабов А.А.). Ҳозирда ҳам лаборатория тиббиёт, қишлоқ ҳўжалиги, озиқ-овқат
        саноати ва бошқа соҳалар учун институт миқёсида яратилган препаратларни ишлаб чиқариш ва саноатга татбиқ этиш
        технологияларини такомиллаштириш каби илмий ишлари билан шуғулланиб келмоқда. Профессор С.М. Мавлянов
        раҳбарлигида 120 дан ортиқ ўсимликларнинг полифеноллари таркиби ва биологик фаоллиги ўрганилиб, улар асосида бир
        қатор вирусларга қарши самарали препаратлар яратилди.</p>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Илмий тадқиқотлар:</h3>
    <ul style="list-style-type:disc;">
        <li> институт лабораторияларида тиббиёт, озиқ-овқат ва қишлоқ хўжалиги учун яратилган препаратлар технологиясини
            ишлаб чиқиш;</li>
        <li> госсиполга бой пахта ёғи ишлаб чиқариш технологиясини ишлаб чиқиш, техник госсиполдан тозаланган госсипол
            субстанцияси ва госсипол сирка кислотаси олиш;</li>
        <li> кўсак қуртига қарши феромон ва феромонли тутқич комплектини ишлаб чиқариш;</li>
        <li> полифенолларга бой, маҳаллий ўсимликларни аниқлаш, улардан полифенол бирикмаларни ажратишнинг оптимал
            усулларини топиш, ажратилган бирикмаларнинг кимёвий тузилиши ҳамда биологик фаоллигини тадқиқ қилиш;</li>
        <li> полифеноллар асосида антивирус, гипогликемик хоссаларга эга оригинал препаратлар яратиш ва уларни ишлаб
            чиқариш;</li>
        <li> субстанциялар (дори воситалари ва биологик фаол қўшимчаларнинг таъсир этувчи асосий моддалари) ва тайёр
            дори шакллари, шунингдек, қишлоқ хўжалиги препаратларининг экспериментал ишлаб чиқарилишини ташкил этиш;
        </li>
        <li> GMP талабларига жавоб берадиган замонавий усуллардан фойдаланган ҳолда субстанциялар ва тайёр дори шакллари
            ишлаб чиқаришнинг саноат технологиясини яратиш;</li>
        <li>субстанциялар ва тайёр дори шаклларининг сифат назорати, барқарорлиги ҳамда яроқлилик муддатини аниқлаш;
        </li>
        <li>самарали дори препаратлари ва биологик фаол қўшимчалар яратиш мақсадида янги биологик фаол бирикмалар
            ажратиш (ёки синтез қилиш) ва уларни тадқиқ этиш. </li>
    </ul>
    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
    <h3>Натижалар:</h3>
    <p>Қуйида келтирилган маҳсулотларнинг саноат технологияси ишлаб чиқилди:
    <ul style="list-style-type:disc;">
        <li> госсиполга бой пахта ёғи олиш;</li>
        <li>пахта ёғидан техник госсипол олиш;</li>
        <li> госсипол субстанцияси ва госсипол сирка кислотаси;</li>
        <li> «Ёғду» савдо белгиси остида ранги бўйича дунё стандартларига жавоб берадиган, тозалик даражаси юқори бўлган
            пахта ёғи;</li>
        <li> антивирус хоссага эга 1% госсипол линименти;</li>
        <li> герпесга қарши «Мегосин» суртмаси;</li>
        <li> гриппга қарши «Рутан» дори воситаси;</li>
        <li> кўсак қурти феромони ва феромонли тутқичлар комплекти;</li>
        <li>таркибида госсипол миқдори камайтирилган пахта шроти.</li>
    </ul>
    </p>

    <p>ДФ XI талаблари бўйича «Рутан», «Госситан», «Гетасан», «Пунитан» ва «Эуфорбин» субстанцияларининг физик-механик
        параметрлари ўрганилди. Субстанцияларнинг стандарт намуналари ва дори шакллари тайёрланди. Клиник синовларгача
        бўлган барча фармако-токсикологик тадқиқотлар ўтказилди. Олинган натижалар асосида препаратларнинг
        субстанциялари ва дори шакллари («Рутан» 0,025, «Госситан» 0,025, «Гетасан» 0,01, «Пунитан» 0,01, «Эуфорбин»
        0,025) учун ВФМ лойиҳалари тайёрланди. «Рутан», «Госситан», «Гетасан» препаратларининг клиник синовларини
        ўтказиш учун ЎзР ССВ ДВ ва ТТ СНҚББ дан рухсат олинди. «Рутан» ва «Госситан» препаратлари учун гриппга қарши
        восита сифатида, «Гетасан» ва «Пунитан» препаратлари учун одам иммун танқислиги вирусига қарши восита сифатида
        Ўзбекистон Республикаси патентлари олинди</p>
    <p>Plantago major L. ўсимлиги асосида яратилган «Плантагин» дори воситасининг яллиғланишга қарши фаоллиги,
        шунингдек, препаратнинг антиэкссудатив фаоллиги назорат препаратига нисбатан 70% эканлиги аниқланди. «Плантагин»
        дори воситасининг гипогликемик хоссаси исботланди. Олинган натижалар асосида «Диабетга қарши восита» (JAP 2016
        0404., 29.09.2016) патентини олиш учун талабнома топширилди. Гипогликемик ва антиэкссудатив хоссаларга эга
        бўлгани учун «Плантагин» дори воситаси негизида янги, самарали, яллиғланишга ва диабетга қарши препаратлар олиш
        мумкин</p>
    <p>Lagochilus inebrians ўсимлиги асосида самарали гемостатик восита ‒ «Инебрин» ишлаб чиқилди. Препарат
        субстанциясининг технологияси ЎзР ФА Ўсимлик моддалари кимёси институти билан ҳамкорликда ишлаб чиқилди.</p>
    <p>Лагохилин дитерпеноиди асосида бир қатор супрамолекуляр комлекслар олинди, улар ҳам самарали гемостатик хоссага
        эга. Субстанциялар ва дори шакллари (шамча, суртма, коллаген плёнка, таблетка, инъекция) учун МТҲ лар ишлаб
        чиқилди. Зарурий клиник синовлар ўтказилиб, ишлаб чиқариш учун рухсат олинди.</p>
    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `
    <h3>Эришилган ютуқлар:</h3>
    <ul style="list-style-type:circle;">
        <li>госсиполга бой ёғ ишлаб чиқариш технологияси «ЦАСК ойл Дивижен» ҚК сида амалиётга татбиқ қилинди;</li>
        <li>кўсак қурти феромонлари ва феромонли тутқичлар Республиканинг пахта плантацияларида кенг қўлланилмоқда;</li>
        <li> таркибидаги госсипол миқдори камайтирилган пахта шроти технологияси Республиканинг 11 та ёғ-мой
            комбинатларига татбиқ этилган;</li>
        <li>вирусларга қарши фаолликка эга ва интерферон индукциясини кучайтирувчи «Рутан» препарати тиббиёт амалиётига
            жорий этилди (01-14-сон ШАҲОДАТНОМА), стандарт намуна (ФМ 42 Уз-2514-2018), субстанция (ФМ 42 Уз–2515-2018)
            ва дори шакли учун (ВФМ 42 Уз–2516-2015) фармакопея мақолалари тасдиқланди. «Рутан» препарати учун
            регистрацион гувоҳнома (DV/M 00339/09/15) олинди. «Рутан» таблеткаларини ишлаб чиқариш учун тажриба-саноат
            регламенти тасдиқланди;</li>
        <li>гриппга қарши «Госситан» ва иммун танқислиги вирусига қарши «Гетасан» препаратларининг клиник синовларини
            ўтказиш учун рухсат олинди;</li>
        <li> иммун танқислиги вирусига қарши «Эуфорбин» ва гипоксияга қарши «Провидин» препаратларининг клиник
            синовларгача бўлган фармако-токсикологик тадқиқотлари тўлиқ якунланиб, олинган натижалар асосида тайёрланган
            ҳужжатлар тўплами Ўзбекистон Республикаси Соғлиқни сақлаш вазирлиги ҳузуридаги «Фармацевтика маҳсулотлари
            хавфсизлиги маркази» Давлат муассасига клиник синовларни ўтказишга рухсат олиш учун топширилди; </li>
        <li>яллиғланишга қарши «Глицирам» препарати ишлаб чиқилди ва унинг субстанциясини олиш технологияси амалиётга
            жорий этилди;</li>
        <li> ўсимлик хом ашёси асосида янги, оригинал гемостатик препаратлар ‒ «Глилагин», «Лаговин», шунингдек, генерик
            «Инебрин» ишлаб чиқилди, уларнинг таблетка ва инъекция кўринишидаги дори шакллари устида клиник синовлар
            ўтказилиб, амалиётда қўллаш учун рухсат олинди;</li>
        <li> сурги хусусиятига эга «Равонол» биологик фаол қўшимчасини ишлаб чиқариш учун рухсатнома (№000335) олинди;
        </li>
        <li> Паркинсон касаллигига қарши «Прамипексол Био» препарати таблеткасининг (0,25 мг №30) оптимал таркиби ва
            олиниш технологияси ишлаб чиқилди (шаҳодатнома R/DV/M 02569/05/19);</li>
        <li> вирусларга қарши оригинал «Рутан» препаратининг таблетка (25 мг №20) дори шаклини ишлаб чиқариш ташкил
            этилди; </li>
        <li> сил касаллигига қарши «Биомайрин» дори воситасининг капсула (600 мг №20) дори шакли технологияси ишлаб
            чиқилди;</li>

        <li> қуйидаги препаратлар дори шаклларининг оптимал таркиби, олиниш технологияси ишлаб чиқилиб, клиник синовлар
            ўтказиш учун етарли миқдорда тайёрланди:
            <ul style="list-style-type:disc;">
                <li> хламидияга қарши «Гозалидон» капсулалари 100 мг №20;</li>
                <li> вирусларга қарши «Рагосин» капсулалари 50 мг №10;</li>
                <li> иммуносупрессив хоссага эга «Мебавин» в капсулалари 100 мг №20;</li>
            </ul>
        </li>

        <li> таъсири узайтирилган, антибактериал, комбинацияланган «Сульфапект» дори воситасининг лаборатория шароитида
            олиш технологияси ишлаб чиқилди;</li>

        <li> ихтиро учун қуйидаги патентлар олинди:
            <ul style="list-style-type:disc;">
                <li> Патент UZ № IАР 2010 0392 от 11.04.2012. Салихов Ш.И., Мавлянов С.М., Карамов Э.В., Абдулладжанова
                    Н.Г., Корнилаева Г.В., Сидорович И.Г., Хаитов Р.М. «Средство, проявляющее анти-ВИЧ-активность».</li>
                <li> Патент UZ № IАР 2010 0393 от 11.04.2012. Салихов Ш.И., Мавлянов С.М., Карамов Э.В., Абдулладжанова
                    Н.Г., Корнилаева Г.В., Сидорович И.Г., Хаитов Р.М. «Средство, проявляющее анти-ВИЧ-активность».</li>
                <li> Патент UZ № IАР 2010 0390 от 16.05.2012. Салихов Ш.И., Мавлянов С.М., Карамов Э.В., Абдулладжанова
                    Н.Г. «Средство, обладающее противогриппозным действием».</li>
                <li> Патент UZ № IАР 2010 0391 от 16.05.2012. Салихов Ш.И., Мавлянов С.М., Карамов Э.В., Абдулладжанова
                    Н.Г. «Средство, обладающее противогриппозным действием».</li>
                <li> Патент UZ № IAP 2010 0563 от 23.07.2012. Мавлянов С.М., Абдулладжанова Н.Г., Шамуратов Б.А.,
                    Д.Н.Далимов, Салихов Ш.И. «Средство, проявляющее противоопухолевую активность».</li>
                <li> Патент UZ № IAP 2010 0477 от 18.06.2012. Мавлянов С.М., Абдулладжанова Н.Г., Пирниязов А.Ж.,
                    Далимов Д.Н., Курмуков А.Г., Салихов Ш.И. «Средство, обладающее антигипоксической активностью».</li>
                <li> Патент UZ № IАР 04666 от 23.03.2013. Салихов Ш.И., Мавлянов С.М., Карамов Э.В. «Средство,
                    проявляющее анти-ВИЧ-активность».</li>
                <li> IAP 06027 от 08.10.2019. «Антидиабетическое средство». Асраров М.И., Мавлянов С.М., Шкинев А.В.,
                    Позилов М.К., Махмудов Р.Р., Абдулладжанова Н.Г., Эргашев Н.А., Абдуллаева Г.Т., Cалихов Ш.И.</li>
                <li> Сагдуллаев Б.Т., Тураев А.С., Турабоев Ш.М., Махмудов С.Д., Бекназарова Н.С., Якубова Р., Абрекова
                    Н.Н., Иногамов У.К., Атамуратов Ф.Н., Маматмусаева Н.Э. Средство на основе местного растительного
                    сырья, обладающего слабительным действием и способ его получения // Патент на изобретение Республики
                    Узбекистан. № IAP 05804 от 05.04.2019 // –Т. –2019. – 11 с.</li>
                <li> Махмудов С.Д., Абрекова Н.Н., Абидова А.Д., Цеомашко Н.Е., Турабоев Ш.М., Бекназарова Н.С.,
                    Атамуратов Ф.Н., Ахмедов О.Р., Мамадрахимов А.А., Тураев А.С., Сагдуллаев Б.Т. Ранозаживляющее
                    покрытие // Патент на изобретение Республики Узбекистан. № IAP 06575 от 21.10.2021 // –Т. –2021. –
                    20 с.</li>
                <li> Салихов Ш.И. , Тураев А.С., Сагдуллаев Б.Т., Шомуротов Ш.А., Ахмедов О.Р., Бекназарова Н.С.,
                    Абрекова Н.Н., Шеримбетов С. Г., Махмудов С.Д., Турабоев Ш.М., Маматмусаева Н.Э., Атамуратов Ф.Н.,
                    Сагдуллаев Б.Б., Аиса Ажи Аикебайер, Абулимити Йили. Фармацевтическая композиция, обладающая
                    антибактериальным действием // Патент на изобретение № IAP 06523 // - Т. – 2021.</li>
                <li> Салихов Ш.И., Тураев А.С., Сагдуллаев Б.Т., Абрекова Н.Н., Ахмедов О.Р., Бекназарова Н.С., Махмудов
                    С.Д., Турабов Ш.М., Атамуратов Ф.Н., Юсупова Н.Ф., Мухамматова С.Ж., Зияев М.А. Полимерный комплекс,
                    обладающий антимикробным и пролонгированным действием // Патент на изобретение № IAP 06622 // - Т. –
                    2021.</li>
            </ul>
        </li>

        <li> қуйидаги меъёрий-техник ҳужжатлар ишлаб чиқилди:
            <ul style="list-style-type:disc;">
                <li> ФМ 42 Уз-2516-2020 «Рутан» таблеткалари 25 мг;</li>
                <li> ФМ 42 Уз-2514-2018 «Рутан» стандарт намунаси;</li>
                <li> ФМ 42 Уз-2515-2018 «Рутан» субстанцияси;</li>
                <li> ВФМ лойиҳаси 42 Уз- 2018 «Эуфорбин» таблетклари 25 мг;</li>
                <li> ВФМ лойиҳаси 42 Уз-2018 «Эуфорбин» субстанцияси;</li>
                <li> Сагдуллаев Б.Т., Турабоев Ш.М., Махмудов С.Д., Бекназарова Н.С., Атамуратов Ф.Н., Маматмусаева
                    Н.Э., Абрекова Н.Н. Стандарт организации Тs 03535693-25:2017 на биологически активную добавку к пище
                    «Равонол» // «O’ZSTANDART AGENTLIGI» №112/007370, 06.10.2017. – Ташкент. – 2017. – 11 с.</li>
                <li> Сагдуллаев Б.Т., Турабоев Ш.М., Бекназарова Н.С., Махмудов С.Д., Атамуратов Ф.Н. Технологическая
                    инструкция по производству биологически активной добавки «Равонол», ТИ 03535693-25:2017, Ташкент
                    2017.</li>
            </ul>
        </li>

        <li> қуйидаги регистрацион гувоҳномалар олинди:
            <ul style="list-style-type:disc;">
                <li> Рўйхатга олиш гувоҳномаси DV/M 00339/09/15 Рутан таблеткалари 25 мг;</li>
                <li> Рўйхатга олиш гувоҳномаси DV/M 03417/07/20 Рутан субстанцияси.</li>
            </ul>
        </li>
    </ul>
    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
    <h3>Ходимлар</h3>
    <ol type="1">
        <li> Махмудов Сардор Джалилович, лаборатория мудири, к.т.н. (PhD)</li>
        <li> Набиев Абдусамад Хамидович, катта илмий ходим, т.ф.н.</li>
        <li> Исамухамедов Арибджан Шукурович, катта илмий ходим, к.ф.н.</li>
        <li> Ибрагимов Абдурахмон Сафиевич, кичик илмий ходим</li>
        <li> Холбеков Оманкул Худаярович, катта илмий ходим, к.ф.н.</li>
        <li> Зияев Хайрулла Лутфуллаевич, бош илмий ходим, к.ф.д.</li>
        <li> Сагдуллаев Баходир Тахирович, бош илмий ходим, т.ф.д., профессор</li>
        <li> Отамуродов Мирмухсин Мансурович, кичик илмий ходим</li>
        <li> Абрекова Наджие Наримановна, кичик илмий ходим</li>
        <li> Турабоев Шухрат Махмадалиевич, катта илмий ходим, т.ф.н. (PhD), докторант (DSc)</li>
        <li> Бекназарова Нурия Сейтбаевна, таянч докторант (PhD)</li>
        <li> Умаров Дониёр Бахтиярович, таянч докторант (PhD)</li>
        <li> Абдулхамидова Одина Абдужаббор қизи, лаборант</li>
        <li> Айтимбетова Дилноза Тозобой қизи, лаборант</li>
    </ol>
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3>Чоп этилган ишлар</h3>
    <ol type="1">
        <li> E. Olchowik-Grabarek , I. Swiecicka, Z. Andreeva-Kovaleskaya, A. Solonin, D. Bonarska-Kujawa , H.
            Kleszczynska, S. Mavlyanov, M. Zamaraeva «Role of Structural Changes Induced in Biological Membranes by
            Hydrolysable Tannins from Sumac Leaves (Rhus typhina L.) in their Antihemolytic and Antibacterial Effects»
            // J Membrane Biol., 2014, Р.533–540.</li>
        <li> А.Ergashev, R.Eshchanov, G.Yakubov,А. Rakhimov, N. Turdieva, N. Turaeva, Kh.Urinova, А. Matchanov.
            Cultivation of drug-dye plant indigofera variety «Feruz -1» for the re-cultivation in degraded lands of Aral
            Sea Region. J. Chem. Chem. Eng. 8 (2014) 707-716.</li>
        <li> А. Ergashev, G. Yakubov, А. Matchanov, N. Turaeva, Development of biotexnology of dye & of drug plant
            indigofera variety «Feruz -1» for the improving of sale lands of the Aral Sea Basin. International Journal
            of Devolopment Resarch Vol.5. issue 12. pp 6213-6218.December. 2015.</li>
        <li> Borisova M.P., Kataev A.A., Mavlyanov S.M., Abdullajanova N.G.Effects of Hydrolysable Tannins on Native and
            Artificial Biological Membranes // Membrane and Cell Biology, 2015, Vol. 9, No. 1, pp. 53–60.</li>
        <li> Кhoshimov N.N., Rakhimov R.N., Nasirov K.E. Research of action of preparat rutan on various sites of
            GABA-receptor at chronic alcoholic intoxication // Eastern European Scientific Journal.Dusseldorf –
            Germany.Ausgabe №3. 2015. P.-32-37.</li>
        <li> Кhoshimov N.N., Rakhimov R.N.,Nasirov K. E. The Research of Action of Preparations Rutan and Gossitan on
            the Glutamate Eksitetoxic Mediated by NMDA-receptor at Chronic Alcoholic Intoxication and Cancellation of
            Ethanol // Russian Journal of Biological Research, 2015. V. 4. P.- 60-65.</li>
        <li> E.Оlchowik-Grabarek, S.Mavlyanov, N.Abdullajanova, R.Gieniusz, M.Zamaraeva. Specificity of hydrolysable
            tannins from Rhus typhina L. to oxidants in сell and cell-free models // Appl Biochem Biotechnol. DOI
            10.1007/s12010-016-2226-1. Published on line 06 September 2016</li>
        <li> S.Sękowski, M.Ionov, A.Dubis, S.Mavlyanov, M.Bryszewska, M.Zamarajewa. Biomolecular Interactions of Tannin
            Isolated from Oenothera gigas with Liposomes// J. Membrane Biol (2016) 249:171-179.</li>
        <li> Sekowski S., Ionov M., Abdullajanova N., Makhmudov R., Mavlyanov S., Milowska K., Bryszewska M. Zamaraeva M.
            Interaction of α-synuclein with Rhus typhina tannin – Implication for Parkinson’s disease Interaction of
            α-synuclein with Rhus typhina tannin – Implication for Parkinson’s disease // Colloids and Surfaces B:
            Biointerfaces 155 (2017) 159–165.</li>
        <li> Оlchowik-Grabarek E., Abdullajanova N., Mavlyanov S., Gieniusz R., Zamaraeva M. Specificity of hydrolysable
            tannins from Rhus typhina L. to oxidants in сell and cell-free models // Appl Biochem Biotechnol. 2017,
            Volume 181, Issue 2, pp 495–510.</li>
        <li> Кhoshimov N.N., Rakhimov R.N., Akhmedova G.B., Azizov V.G. Investigation of the Effect of Polyphenol
            Euphorbin on the Transport of L Glutamate and Calcium Channels to Synaptosomes of Rat Brain// European
            Journal of Medicine. Slovakia. 2018, 6(2): 72-82.</li>
        <li> Mavlyanov S.M., AbdullajanovaN., Salikhov Sh.I., Shamuratov B.A., Rakhimov R.N., Makhmudov R.R. Рolyphenols
            of plantsof Central Asia and their biological activity// Uzbek biological Jornal. 2017. Тashkent. №6. Р.
            3-5.</li>
        <li> Sekowski S., Zamaraeva М., Bitiucki М., Mavlyanov S., AbdullajanovaN., Ionov М., Zdeb M., Bryszewska M.,
            Rakhimov R. Influence of valoneoyl groups on the interactions between Euphorbia tannins and human serum
            albumin // Journal of Luminescence. V.194 (2018) P.170–178.</li>
        <li> Olchowik-Grabarek E. Makarova K., Mavlyanov S., AbdullajanovaN., Zamaraeva M. Comparative analysis of BPA
            and HQ toxic impacts on human erythrocytes, protective effect mechanism of tannins (Rhus typhina)// Environ
            Sci. Pollut. Res. 2018, Volume 25, Issue 2, pp 1200–1209.</li>
        <li> Sekowski S., Terebka M., Veiko A., Lapshina E., Sulkowska U., Zavodnik I.B., Mavlyanov S., Abdullajanova N.,
            Roszkowska A., Zamaraeva M. Epigallocatechin gallate (EGCG) activity against UV light-induced photo damages
            in erythrocytes and serum albumin—theoretical and experimental studies// Journal of Photochemistry and
            Photobiology A: Chemistry 356 (2018) P.379–388.</li>
        <li> Gayibov U.G., Komilov E.J., Rakhimov R.N., AbdullajanovaN.G., Ergashev N.A., Asrorov M.I., Aripov T.F.
            Antioxidant and Membrane-Active Properties of 1,4,6 tri-o-galloyl-2,3-valoneyl-β-d-glucose// European
            Journal of Medicine. Series B, 2018, 5(1).</li>
        <li> Matchanov А.D., Zaynutdinov U.N., Islаmov A.Kh., Vypova N.L, Tashpulatov F.N., Esanov R.S., Matchanov А.D.,
            Sobirova F.A. Khakberdiev Sh. M. Synthesis and hemostatic activity of Supramolecular complexes Lagoсhilin
            International Journal of Defelopment Research. Vol. 08. Issue 04. April. 2018. pp. 19812-19814.</li>
        <li> Gayibov U.G., Komilov E.J., Rakhimov R.N., AbdullajanovaN.G., Ergashev N.A., Asrorov M.I., Aripov T.F.
            Influence of new polyphenol compound from Euphorbia plant on mitochondrial function// J. Microbiol Biotech
            Food Sci. 2019 : 8 (4) 1021-1025</li>
        <li> Ergasheva F.Sh. Kushiev Kh.Kh. Matchanov A.D., Ishimov U.J.Khushmatov Sh.S. Pozilov M.K. Identification
            Chemical Content Fruit and Pee’ls Extract of Some Varieties of Pomegranate (Punica granatum L.)
            International Journal of Current Microbiological and Applied Sciences. 2019. 8(5). P. 734-742.</li>
        <li> Ergasheva F.Sh. Kushiev Kh.Kh. Matchanov A.D., Ishimov U.J., Khushmatov Sh.S.Chemical analysis of
            Pomegranate (Punica granatum L.) Fruit and Pee’ls Extract Materials of the International Conference/
            Scientific Research of the SCO Countries: Synergy and Integration. Beijing, China. 2019. June 14. P.85-88.
        </li>
        <li> Lidiya Izotova, Gulnara Shakirzyanova, Omankul Xolbekov, Shukhrat Turageldiyev, Bahrom Babaev and Bahtiyar
            Ibragimov. Crystal structure and Hirshfeld surface analysis of two organic salts based on 1,3,4-thiadiazole
            derivatives. Acta Crystallographica, Section E, Crystallographic Communications, 2023, E79, p.1-5.
            https//doi.org/10.1107/S2056989022012154;</li>
        <li> Gulnara Shakirzyanova, Abdusamat Nabiev, Omon Xolbekov, Vladimir Abdukakharov. Pheromone Monitoring in the
            Granaries of Uzbekistan. Agricultural Sciences, 2023, v.14, N4, p.499-508.
            https://doi.org/10.4236/as.2023.144033.</li>
        <li> Сагдуллаев Б.Т., Турабоев Ш.М., Зайнутдинова Г.Ф., Махмудов С.Д., Атамуратов Ф.Н., Бекназарова Н.С.
            Исследование процесса выделения полисахаридов из плодов Prunus domestica L. // Фармацевтический журнал.
            – Т. – 2016, №1. –С. 25-29. </li>
        <li> Маматмусаева Н.Э., Турабоев Ш.М., Бекназарова Н.С., Махмудов С.Д., Абрекова Н.Н., Сагдуллаев Б.Т.
            Разработка состава готовой лекарственной формы биологически активной добавки «Рaвoнол» // Фармацевтический
            вестник Узбекистана. – Т. – 2016, №3, – С. 67-71. </li>
        <li> Абрекова Н.Н., Турабоев Ш.М., Махмудов С.Д., Маматмусаева Н.Э., Сагдуллаев Б.Т. The Study of Laxative
            Activity of Polysaccharides from the Fruit of Prunus Domestica L. // European Sciences Review. Austria,
            Vienna. – 2016, № 9-10 (September-October). – P. 52-54.</li>
        <li> Абрекова Н.Н., Турабоев Ш.М., Махмудов С.Д., Сагдуллаев Б.Б., Якубова Р.Я., Сагдуллаев Б.Т.
            Фарматоксикологическое исследование субстанции и капсул слабительного средства Равонола // Журнал Инфекция
            Иммунитет и Фармакология. – Т. – 2017, №2, – С. 20-24.</li>
        <li> Турабоев Ш.М., Отамуродов М.М., Атамуратов Ф.Н., Инногамов У.К., Сагдуллаев Б.Т., Зайнутдинова Г.Ф.,
            Махмудов С.Д. Биологически активная добавка "Равонол" // Журнал Пищевая промышленность. –2015, №2. – С.
            23-25.</li>
        <li> Бекназарова Н.С., Махмудов С.Д., Турабоев Ш.М., Абрекова Н.Н., Атамуратов Ф.Н., Сагдуллаев Б.Т.
            Математическое моделирование и оптимизация параметров процесса экстракции водорастворимых полисахаридов из
            плодов Prunus domestica L. / Научно-технический журнал Ферганского политехнического института, спец.вып.№1,
            2019. С. 129-134. (05.00.00; 20)</li>
        <li> Абрекова Н.Н., Махмудов С.Д., Атамуратов Ф.Н., Турабоев Ш.М., Сагдуллаев Б.Т. Местно-раздражающее
            действие биологически активной добавки «Равонол» при нанесении на кожу и слизистую оболочку глаза //
            Медицинский журнал Узбекистана, №5, 2018г. 94-96 с. (14.00.00; 8) </li>
        <li> Махмудов С.Д., Бекназарова Н.С., Маматмусаева Н. Э., Сагдуллаев Б. Т. Стандартизация дубильных веществ,
            полученных из щавеля конского (Rumex confertus Willd.) / Фармацевтический вестник Узбекистана. 2018й. №1,
            49-53 с. (15.00.00; 4)</li>
        <li> Бекназарова Н.С., Махмудов С. Д., Абрекова Н.Н., Маматмусаева Н.Э., Сагдуллаев Б.Т. Выделение дубильных
            веществ из растения Rumex confertus Willd. / Фармацевтический вестник Узбекистана. 2018й. №1, 44-48 с.
            (15.00.00)</li>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
    <h3>Лойиҳалар</h3>
    <h4>ФА-А12-Т160 «Маҳаллий ўсимлик хом ашёси полифеноллари асосида гриппга қарши («Рутан», «Госситан») ва ОИТСга
        қарши («Гетасан», «Пунитан») дори препаратларини ишлаб чиқиш» (2009-2011 йй.)</h4>
    <p> Ўсимлик хом ашёсини турли эритувчилар билан экстракция қилиш, полифеноллар йиғиндисини ажратиш, хроматография
        усулларида тозалаш йўли билан «Рутан», «Госситан», «Гетасан» ва «Пунитан» препаратларининг субстанциялари дори
        шакли технологиясини ишлаб чиқиш учун етарли миқдорда олинди. Олинган натижалар ўсимлик хом ашёсидан «Рутан»,
        «Госситан», «Гетасан» ва «Пунитан» препаратлари субстанцияларининг тажриба-саноат регламентларини ишлаб чиқишга
        ёрдам берди.</p>

    <h4>ИФА 2012-6-6 «Маҳаллий ўсимлик хом ашёси полифеноллари асосида гриппга қарши («Рутан», «Госситан») ва ОИТСга
        қарши («Гетасан», «Пунитан») дори воситаларини ишлаб чиқаришни ташкил этиш» (2012-2013 йй.)</h4>
    <p> Препаратларнинг дори шакллари технологиясини ишлаб чиқиш учун «Рутан» – 1200 г, «Госситан» – 250 г, «Гетасан» –
        200 г миқдорда субстанциялар олинди. Клиник синовлар учун етарли миқдорда дори шакллари тайёрланди. Таблеткалар
        Ўзбекистон Республикаси Соғлиқни сақлаш вазирлиги Дори воситалари ва тиббий техника сифатини назорат қилиш бош
        бошқармасига физик-кимёвий параметрларининг вақтинчалик фармакопея мақоласига мувофиқлигини текшириш учун
        топширилди ва клиник синовлар ўтказиш учун рухсат олинди. Субстанциялар учун тажриба-саноат регламентларининг
        лойиҳалари ишлаб чиқилди. «Рутан» ва «Госситан» препаратларининг клиник синовларини ўтказиш учун Этика
        қўмитасининг рухсати олинди. «Рутан» препаратининг клиник синовлари муваффақиятли якунланди. «Госситан»
        препаратининг клиник синовларини ўтказиш учун Тошкент тиббиёт академияси, 1-шаҳар клиник касалхонаси ва
        2-Республика клиник касалхонаси билан шартнома тузилди. «Гетасан» препаратининг клиник синовлари ОИТСга қарши
        кураш Республика марказида иммун танқислиги вирусига қарши восита сифатида ўтказишга рухсат олинди.</p>

    <h4>А-11-Т-051 «ОИТСга қарши фаолликка эга «Эуфорбин» дори препаратини ишлаб чиқиш» (2012-2014 йй.)</h4>
    <p>Эуфорбия ўсимлиги илдизидан полифеноллар йиғидисини экстракция қилиш ҳамда экстрактни таркибий қисмларга
        ажратишнинг оптимал усули танланди, ажратилган моддалар орасидан асосий таъсир этувчини аниқлаш учун скрининг
        қилинди. Полифеноллар йиғиндисининг фаоллиги алоҳида ажратилган индивидуал полифенол моддасига нисбатан
        юқорилиги аниқланди. Олинган илмий натижалар асосида «Эуфорбин» субстанциясини олиш лаборатория регламенти ишлаб
        чиқилди. Препарат субстанцияси, стандарт намунаси ва дори шакли учун вақтинчалик фармакопея мақоласининг
        лойиҳаси тайёрланди.</p>

    <h4>А-12-Т-052 «Антигипоксия фаоллигига эга «Провидин» дори препаратини ишлаб чиқиш» (2012-2014 йй.)</h4>
    <p>Узум данагидан полифеноллар ва алоҳида индивидуал моддаларни ажратиш методикаси ишлаб чиқилди. «Провидин»
        препарати фенол табиатига эга 6 та моддадан иборат эканлиги кўрсатиб берилди. Препарат параметрларини аниқлаш
        усули Ўзбекистон Республикаси Дори воситалари ва тиббий техника сифатини назорат қилиш Бош бошқармаси
        талабларига мос равишда ишлаб чиқилди. Олинган натижалар асосида «Провидин» субстанциясини олишнинг лаборатория
        регламенти, препаратнинг субстанцияси, стандарт намунаси ва дори шакли учун вақтинчалик фармакопея мақоласи
        лойиҳаси тайёрланди. Препаратнинг дори шакли клиник синовларни ўтказиш учун етарли миқдорда тайёрланди.</p>

    <h4>И-6-ФА-Т031 «Сурги хусусиятига эга «Равонол» биологик фаол қўшимчасини ишлаб чиқаришни ташкил этиш» (2016-2017
        йй.)</h4>
    <p>Prunus domestica L. мевалари асосида «Равонол» биологик фаол қўшимчаси субстанциясининг олиниш технологияси ишлаб
        чиқилди. Субстанциянинг кимёвий стандартизация усули ишлаб чиқилди. Субстанциянинг технологик параметрлари
        аниқланиб, тайёр маҳсулотни капсула қилиш учун оптимал таркиб танланди. Ўзбекистон Республикаси Интеллектуал
        мулк агентлигига ихтиро учун патент олишга талабнома (№ IAP 20160218, 07.06.2016) топширилди. Товар белгиси ва
        хизмат кўрсатиш белгисига гувоҳнома олиш учун талабнома (№ MGU 20172303, 10.08.2017) топширилди. «Равонол»
        биологик фаол қўшимчасининг ични юмшатиш хоссасини текшириш учун бошқа сурги препаратлари билан қиёсий
        фармакологик тадқиқотлар ўтказилди. «Равонол» биологик фаол қўшимчаси учун халқаро идентификацион рақам олинди.
        Тs 03535693-25:2017 «Озуқага биологик фаол қўшимча «Равонол». Техник шартлар» ташкилот стандарти давлат тили ва
        рус тилида ишлаб чиқилиб, Ўзбекистон Республикаси Соғлиқни сақлаш вазирлиги ҳузуридаги санитария-эпидемиологик
        осойишталик ва жамоат саломатлиги қўмитаси билан келишилди (26.09.2017 й.) ва «Узстандарт» агентлигидан
        рўйхатдан ўтказилди (№112/007370, 06.10.2017 й.). «Равонол» биологик фаол қўшимчасини ишлаб чиқариш учун
        технологик йўриқнома ишлаб чиқилди. «Равонол» биологик фаол қўшимчаси субстанцияси ва капсула шаклининг
        фармако-токсикологик тадқиқотлари ўтказилди. «Равонол» биологик фаол қўшимчасини реализация қилиш учун МЧЖ
        «Лахисам» корхонаси билан лицензион шартнома тузилди. «Равонол» биологик фаол қўшимчаси субстанцияси ва капсула
        шаклининг серияли ишлаб чиқарилиши ташкил этилди.</p>

    <h4>ПЗ-20170919160 «Янги, таъсири узайтирилган, комбинацияланган, антибактериал «Сульфапект» дори воситасини ишлаб
        чиқиш» (2018-2020 йй.)</h4>
    <p>Қуйи молекуляр сульфаметоксазол моддаси полисахаридлар (пектин, альгин кислотаси ва карбоксиметилцеллюлоза)
        ҳосилалари билан кимёвий модификация қилинди. Физик-кимёвий характеристикалари ҳар хил сульфаметоксазолнинг
        полимер ҳосилаларини синтез қилиш имкони бўлган реакцияларнинг оптимал шароитлари аниқланди. Экспериментал йўл
        билан «Сульфапект» субстанциясини олишнинг оптимал шароитлари аниқланди. «Сульфапект» субстанцияси ва унинг
        асосий компонентларини стандартизация қилиш усуллари ишлаб чиқилди. «Сульфапект» препарати хом ашёси ва
        субстанцияси учун вақтинчалик фармакопея мақоласининг лойиҳаси ишлаб чиқилди. «Сульфапект» препаратининг in
        vitro шароитда антибактериал фаоллиги 17 та штамм микроорганизмларда ўрганилди. Препарат субстанцияси учун
        тажриба-саноат регламенти, технологик йўриқнома лойиҳаси ишлаб чиқилди.</p>
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
    <h3>Мурожаат учун</h3>
    <p>Телефон: +99890 167-05-83</p>
    <p>E-mail: s_telecom@mail.ru</p>
    `
}