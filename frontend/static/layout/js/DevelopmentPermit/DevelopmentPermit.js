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
    <h2>Биополимерлар асосида табийи дори воситаларини ишлаб чикиш лабораторияси</h2>
    <h2>Ўзбекистон-Хитой қўшма лабораторияси «Биополимерларнинг замонавий технологиялари»</h2>
    <h3>Лаборатория мудири</h3>
    <h3>Мирзаахмедов Шарафитдин Яшинович - кимё фанлари номзоди, катта илмий ходим</h3>

    <p>Лаборатория Ўзбекистон Фанлар Академиясининг Биоорганик кимё институти ва Хитой Фанлар Академиясининг Шинжон
        физик кимёвий техника институти ўртасида 2014 йилнинг 17 март санасида, хамда Биоорганик кимё институти ва
        Шанхай Материа ва Медика институти ўртасида 2017 йилнинг 15 ноябрь санасида “Биополимерлар асосида табиий
        дорилар яратишни тадқиқ қилиш” бўйича имзоланган келишувга мувофиқ ташкиллаштирилган.</p>

    

    <h4>Лабораториянинг молиявий манбаалари</h4>
    <ol type="1">
        <li> Ўзбекистон Республикаси Инновацион ривожланиш вазирлиги томонидан эълон қилинган танловларда қанташиб ғолиб
            бўлган илмий лойиҳалардан тушадиган маблағлар;</li>
        <li> Хитой Ҳалқ Республикаси Фан ва Технологиялар қўмитаси, Хитой Фанлар Академиясининг фондлари томонидан эълон
            қилинган танловларда қанташиб ғолиб бўлган илмий лойиҳалардан тушадиган маблағлар;</li>
        <li> Хитой Фанлар Академиясининг “Central Asian Research and Production Centre of Biologically Active Compounds”
            венчур компанияси томонидан тематик илмий лойиҳаларга ажратиладиган маблағлар;</li>
        <li> “China-Uzbekistan Medicine Technical Park” МЧЖ ХК томонидан берилган илмий буюртмалар;</li>
        <li> Турли ташкилотлар билан тузиладиган хўжалик шартномалари;</li>
        <li> Қонунда тақиқланмаган бошқа фаолият турларидан келиб тушадиган даромадлар.</li>
    </ol>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Лабораториянинг илмий йўналиши</h3>
    <p>Марказий Осиё заҳарли хайвонлари заҳарларидан ва Хитойда ўсадиган доривор ўсимликлардан рак, диабет, витилиго,
        коронавирус, шамоллашга қарши ва шунингдек, антиоксидант, антирадикал, турли патоген микроб ва замбуруғларга
        қарши биологик фаол оқсил ва пептид моддаларнинг, физик-кимёвий хоссаларини фундаментал тадқиқ қилиш ва уларнинг
        дори шаклларини яратиш.</p>

    <h3>Лабораториянинг мақсади</h3>
    <ol type="1">
        <li> Жаҳоннинг етакчи илмий ташкилотлари билан илғор фундаментал илмий-тадқиқотларни бажариш ва инновацион
            салоҳиятга эга илмий ишланмаларни амалиётга жорий этиш.</li>
        <li> Хитой Фанлар Академиясининг нуфузли илмий марказлари, етакчи олимларнинг ёрдамида юқори малакали илмий
            кадрларни тарбиялаш.</li>
    </ol>

    <h3>Вазифалар</h3>
    <ol type="1">
        <li> Биологик фаол моддаларни in vitro ва in vivo шароитларда кенг скрининг қилиш, уларнинг структура-функционал
            ўзаро боғлиқлик хусусиятларини ўрганиш;</li>
        <li> Пептидларнинг турли бактерияларга ва диабетга қарши металлкомплексларни олиш;</li>
        <li> Ракка қарши пептидларнинг рак хужайраларида Her2 оқсилининг гликоформаларига интернализация бўлиш ва
            гликанларнинг катаболизми механизмларини ўрганиш ва унинг натижасида дори воситаларининг рак хужайрасининг
            ичига кириш босқичларини англаш;</li>
        <li> Маълум функцияли пептидларни гиалурон кислотаси билан модификациялаш орқали протеазалардан ҳимояловчи қобиқ
            яратиш йўлларини, хамда уларни белгиланган манзилга парчаланмасдан бутун ҳолда етказиш аспектларини тадқиқ
            қилиш;</li>
        <li> Оверэкспрессияси рак хужайраларини ривожланишига сабаб бўлувчи IRAK4 оқсилни ингибирловчи моддаларни
            синтезлаш ва модификациялаш;</li>
        <li> Юқори фаол моддаларни оптик, геометрик ва микробиологик синтезларини амалга ошириш, илмий сиғимдор
            технологияларини яратиш;</li>
        <li> Рекомбинант пептидларни олишнинг технологияларини йўлга қўйиш.</li>

    </ol>

    <h3>Илмий кадрларни тарбиялаш</h3>
    <ol type="1">
        <li> Хар ойда 2 марта Ўзбекистон Миллий Университети ва Тошкент фармацевтика институтининг “Кимё”, “Биология”,
            факультетларининг бакалавриат 2-босқичда ўқиётган танланган талабалар учун “ZOOM” платформаси орқали Хитой
            Фанлар Академиясининг профессорлари иштирокида даврий семинарлар уюштирилади;</li>
        <li> Талабаларни илмий гуруҳларга бириктириб, битирув-малакавий иши ва магистрлик диссертацияларини бажаришга
            имкон яратилади;</li>
        <li> “China-Uzbekistan Medicine Technical Park” МЧЖ ХК да хорижий мутахассислар томонидан фармакологик фаол
            субстанциялардан ҳалқаро GMP талабларига мувофиқ дори шаклларини яратиш технологияларини ходимларга
            ўргатилади; </li>
        <li> Ҳар йили 2 та номзодни UCAS фонди ҳисобидан Хитой Фанлар Академиясининг ҳамкор институтларида
            магистратурада таълим олиши ташкиллаштирилади;</li>
        <li> Ҳар йили CAS-TWAS (Хитой Фанлар Академияси ва Жаҳон Фанлар Академияси) фонди томонидан 1 та талабгорни
            Хитой Фанлар Академиясининг ҳамкор институтларига таянч докторантурага юборилади.</li>
    </ol>
    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
        ...
    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `
    <h3>Лабораторияда ўзлаштирилган in vitro биологик тест тизимлар:</h3>
    <ol type="1">
        <li> Коронавирус COVID-19 фаолликни аниқлаш</li>
        <li> 3CL протеаза фаолликни ингибирлаш (SARS-CoV-2)</li>
        <li> АПФ-II фаолликни ингибирлаш (COVID-19)</li>
        <li> Лизоцим фаолликни ингибирлаш (Кўкрак бези саратони)</li>
        <li> Катепсин H (Простата саратони) фаоллигини ингибирлаш</li>
        <li> N-никотинамидметилтрансфераза фаоллигини ингибирлаш (Саратон ва диабет)</li>
        <li> p300 ферментининг фаоллигини ингибирлаш (Саратон)</li>
        <li> ВИЧ-1 тескари транскриптаза ферментининг фаоллигини ингибирлаш (ВИЧ фаоллик)</li>
        <li> Аденозил гомоцистеиназа (вирусга ва саратонга қарши) фаоллигини ингибирлаш</li>
        <li> HRV 3C протеаза (Одам риновируси) фаоллигини аниқлаш</li>
        <li> Тирозиназа фаолликни (терининг пигментацияси) аниқлаш</li>
        <li>DPP4 фаолликни аниқлаш (Диабет)</li>
        <li> PLTP фаолликни аниқлаш (Диабет)</li>
        <li> А моноаминооксидаза фаолликни аниқлаш (Антидепрессант)</li>
        <li> В моноаминооксидаза фаолликни аниқлаш (Паркинсон, Альцгеймер)</li>
        <li> Кальпаиназа фаолликни аниқлаш (Альцгеймер, Ишемия)</li>
        <li> Индолеамин 2,3-диоксигеназа фаолликни аниқлаш (Антинеопластик)</li>
        <li> АПФ-I фаолликни аниқлаш (Артериал қон босими)</li>
        <li> HMG-CoA редуктаза фаолликни аниқлаш (Холестеринга қарши)</li>
        <li> Неприлизин фаолликни аниқлаш (Юрак қон-томир касалликлари)</li>
        <li> Калликреин фаолликни аниқлаш (Юрак қон-томир касалликлари)</li>
    </ol>
    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
    <h3>Лаборатория ходимлари:</h3>
    <img src='static/Laboratories/DevelopmentPermit/image/Mirzaakhmedov.png' alt="зав">
    <p>Мирзаахмедов Ш.Я. – лаборатория мудири, к.ф.н., катта илмий ходим</p>
    <p>Ташмухамедов М.С. - к.ф.д., е.и.х.</p>
    <p>Қаюмов М.Б. - PhD, к.и.х.</p>
    <p>Мухамедов Н.Р. - PhD, к.и.х.</p>
    <p>Асроров А.М. - PhD, к.и.х.</p>
    <p>Яшинов А.Ш. - к.и.х.</p>
    <p>Пардаев А.У. - к.и.х.</p>
    <p>Олимжонов Ш.С. - к.и.х.</p>
    <p>Хакимов М.С. - к.и.х.</p>
    <p>Нуриддинов З.Ф. - к.и.х.</p>
    <p>Мирзарахметова З. - докторант</p>
    <p>Фазлитдинов Ш.Ж., Ражабов М.Р., Ортиқов С., Азаматхўжаев А - талабалар</p>
    <img src='static/Laboratories/DevelopmentPermit/image/staff.png' alt="сотрудники" width="600">
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3>Лабораториянинг 2022 – 2023 йиллардаги илмий ютуқлари</h3>
    <ol type="1">
        <li> Muzaffar Kayumov; Li Jia; Azizbek Pardaev; Shan-Shan Song; Sharafitdin Mirzaakhmedov; Chunyong Ding;
            Yong-Jun Cheng; Xubin Bao; Ze-Hong Miao; Jin-Xue He; Ao Zhang / Design, synthesis and pharmacological
            evaluation of new PARP1 inhibitors by merging pharmacophores of olaparib and the natural product
            alantolactone // European Journal of Medicinal Chemistry, 2022, 240, 114574
            https://doi.org/10.1016/j.ejmech.2022.114574 (Q1, IF 6.514)</li>
        <li> Yongxin Ye, Jaloliddin Khushvakov, Akmaljon Boboev, Rano Akramova, Obidjon Yunusov, Dilbar Dalimova, Shahlo
            Turdikulova, Sharafitdin Mirzaakhmedov, Søren Balling Engelsen, Bekzod Khakimov / Effect of refinement and
            production technology on the molecular composition of edible cottonseed oils from a large industrial scale
            production // Journal of Functional Foods, DOI 10.1016/j.jff.2022.105326 (Q1, IF 4.451)</li>
        <li> Akmal M. Asrorov, Bahtiyor Muhitdinov, Bin Tu, Sharafitdin Mirzaakhmedov, Huiyuan Wang, Yongzhuo Huang /
            Advances on Delivery of Cytotoxic Enzymes as Anticancer Agents // Molecules 2022, 27, р.3836.
            https://doi.org/10.3390/molecules27123836 (Q1, IF 4.148)</li>
        <li> Dong, Qiang; Liu, Liu; Yuan, Yue; Turdu, Gulmira; Mirzaakhmedov, Sharafitdin; Aisa, Haji Akber; Yili,
            Abulimiti; / Two new polyamine alkaloids from the Bufo viridis toad venom // Natural Product Research 2022,
            Jun 8, 1-5. https://doi.org/10.1080/14786419.2022.2086545 (Q2, IF 2.861)</li>
        <li> Shovkat Olimjonov, Xiaojun Yang, Yongjian Liu, Abdullajon Odilov, Hongjian Qin, Tianwen Hu, Sharafitdin
            Mirzaakhmedov, Yuanchao Xie, Fuqiang Zhu, Jingshan Shen / An Improved and Practical Synthesis of Rivaroxaban
            // Heterocycles DOI: 10.3987/COM-22-14707 (Q4, IF 0.831)</li>
        <li> N. Mukhamedov, Sh. Ya. Mirzaakhmedov, Y. H. Gao, A. Waili, Zh. F. Ziyavitdinov, S. S. Bozorov, H. A. Aisa,
            A. Yili. / Zinc-Binding Peptides from Protein of Cicer arietinum. // Chemistry of Natural Compounds 2022, 58
            (1), 86-89. https://doi.org/10.1007/s10600-022-03602-3 (Q3, IF 0.809)</li>
        <li> Ziyoda Zh. Mirakhmetova, Natalya L. Vypova, Akmal M. Asrorov, Ansor Sh. Yashinov, Sharafitdin Ya.
            Mirzaakhmedov, Mugrajitdin S. Tashmukhamedov, Abulimiti Yili, Haji A. Aisa, Shavkat I. Salikhov / Effects of
            bufadienolides from Bufo viridis toad venom on blood biochemical compositions and thromboelastographic
            parameters // Journal of Research in Pharmacy 2023; 27(3): 995-1003. https://doi.org/10.12991/jrp.2019.00
            (Q3, IF 0.420)</li>
        <li> Akmal M. Asrorov, Muzaffar Kayumov, Nurkhodja Mukhamedov, Ansor Yashinov, Ziyoda Mirakhmetova, Yongzhuo
            Huang, Abulimiti Yili, Haji Akber Aisa, Mugrajitdin Tashmukhamedov, Shavkat Salikhov, Sharafitdin
            Mirzaakhmedov. / Toad Venom Bufadienolides and Bufotoxins: An Updated Review. // Drug development research
            2023;1–24. https://doi: 10.1002/ddr.22072 (Q2, IF 5.00)</li>
        <li> Nurkhodja Mukhamedov, Akmal Asrorov, Ansor Yashinov, Muzaffar Kayumov, Ahmidin Wali, Sharafitdin
            Mirzaakhmedov, Haji Akber Aisa, Abulimiti Yili. / Synthesis and Characterisation of Chickpea Peptides-Zinc
            Chelates Having ACE2 Inhibitory Activity. // Protein Journal. Принят к печати https://doi:
            10.1007/s10930-023-10133-5 (Q1, IF 4.00)</li>
        <li> Muzaffar Kayumov, Ziyoda Mirakhmetova, Jamoliddin Razzokov, Mukhriddin Makhkamov, Sharafitdin
            Mirzaakhmedov, Nurkhodja Mukhamedov, Ansor Yashinov, Abulimiti Yili, Haji Akber Aisa, Mugrajitdin
            Tashmukhamedov, Shavkat Salikhov. Computational Study and Prediction of ADME/Drug-Likeness Properties of
            Potentially Active SARS-CoV-2 3CL Protease Inhibitors of Bufadienolides Isolated from Central Asian Bufo
            viridis venom. // Journal of Computational Chemistry. Принят к печати Manuscript Number: JCC-23-0235 (Q1, IF
            3.57)</li>
    </ol>

    <h3>Монография:</h3>
    <ol type="1">
        <li> Akmal M. Asrorov, Fang Yuefei, Wang Huiyuan, Sharafitdin Ya. Mirzaakhmedov, Yongzhuo Huang /
            STIMULI-RESPONSIVE SYSTEMS FOR SMART DRUG DELIVERY SYSTEMS (Chapter No 14, page 389-420 in the Book
            «Advanced and Modern Approaches for Drug Delivery» Publisher: Stacy Masucci; Acquisitions Editor: Andre G.
            Wolff; Editorial Project Manager: Sam Young; Production Project Manager: Omer Mukthar; Cover Designer:
            Christian Bilbow). For information on all Academic Press publications visit our website at
            <a href="http://www.elsevier.com/books-and-journals">www.elsevier.com/books-and-journals</a>
        </li>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
    <h3>Лабораторияда бажарилган ва хозирда бажарилаётган илмий лойиҳалар</h3>
    <ol type="1">
        <li> Хитой Фанлар Академиясининг Марказий Осиё дори тадқиқотлари маркази томонидан ажратилган фундаментал
            лойиҳа: «Марказий Осиё қорақурти Latrodectus tredecimguttatus, Марказий Осиё бақаси Bufo viridis ва Шинжон
            ўлкаси бақаси Bufo gargarizans заҳарларидаги оқсил-пептид компонентларни тадқиқ қилиш”. Бажарилиш муддати:
            2019 – 2022 йиллар. Ажратилган маблағ: 130 000 АҚШ доллари.</li>
        <li> Инновацион ривожланиш вазирлиги томонидан ажратилган фундаментал лойиҳа: «Ўзбекистонда ижтимоий аҳамиятга
            эга бўлган касалликларни даволаш учун рептилиялар, ўргимчаксимонлар ва амфибиялардан ажратилган янги
            биологик фаол моддаларнинг молекуляр таъсир механизмларини тадқиқ қилиш». Бажарилиш муддати: 2021 – 2025
            йиллар. Ажратилган маблағ: 5 йилга 6 187 000 000 сўм.</li>
    </ol>
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
        <h3>Контакты</h3>
    `
}