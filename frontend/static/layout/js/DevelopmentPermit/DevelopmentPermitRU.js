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
    <h2>Лаборатория разработки природных лекарственных препаратов на основе биополимеров</h2>
    <h2>Узбекско-китайская совместная лаборатория «Современные технологии биополимеров»</h2>
    <h3>Заведующей лабораторией</h3>
    <h3>Мирзаахмедов Шарафитдин Яшинович – к.х.н., старший научный сотрудник</h3>

    <p>Лаборатория была организована согласно подписанным соглащениям о научном сотрудничестве между институтом
        Биоорганической химии Академии Наук Республики Узбекистан и и Синьцзянским институтом физико-химических
        технологий Китайской академии наук от 17 марта 2014 года, а также между Институтом биоорганической химии и
        Шанхайским институтом Материи и Медицины Китайской академии наук от 15 ноября 2017 года на тему «Исследования по
        созданию природных лекарств на основе биополимеров».</p>

        
    
    <h4>Финансовые ресурсы лаборатории</h4>
    <ol type="1">
        <li> Научные проекты, полученные от Министерство инновационного развития Республики Узбекистан;</li>
        <li> Научные проекты, полученные от Комитета по науке и технологиям Китайской Народной Республики, и из фонда
            Китайской академии наук;</li>
        <li> Средства, выделенные на тематические научные проекты венчурной компанией «Центральноазиатский
            научно-производственный центр биологически активных соединений» Академии наук Китая;</li>
        <li> Научные заказы ИП ООО «China-Uzbekistan Medicine Technical Park»;</li>
        <li> Хозяйственные договора с разными организациями;</li>
        <li> Доходы от иной деятельности, не запрещенной законом.</li>
    </ol>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Научное направление лаборатории</h3>
    <p>Фундаментальные исследования физико-химических свойств биологически активных белковых и пептидных веществ из ядов
        ядовитых животных Центральной Азии и лекарственных растений, произрастающих в Китае, против рака, диабета,
        витилиго, коронавируса, противовоспалительных, а также антиоксидантных, антирадикальных, различные патогенных
        микробов и грибов,и создание на их основе лекарственных средств.</p>

    <h3>Цель лаборатории:</h3>
    <ol type="1">
        <li> Проведение передовых фундаментальных научных исследований совместно с ведущими научными организациями мира
            и внедрение научных разработок, обладающих инновационным потенциалом.</li>
        <li> Подготовка высококвалифицированных научных кадров с помощью ведущих ученых и престижных научных центров
            Китайской академии наук.</li>
    </ol>

    <h3>Задачи:</h3>
    <ol type="1">
        <li> Широкий скрининг биологически активных веществ в условиях in vitro и in vivo, изучение их
            структурно-функциональной взаимосвязи;</li>
        <li> Получение металлокомплексов пептидов против различных бактерий и диабета;</li>
        <li> Исследование процесса интернализации противораковых пептидов в гликоформы белка Her2 раковых клеток и
            механизмы катаболизма гликанов и понимание этапов проникновения лекарств в раковые клетки;</li>
        <li> Исследование способов создания защитной оболочки от протеаз путем модификации некоторых функциональных
            пептидов гиалуроновой кислотой, а также аспекты доставки их к месту назначения в целости без распада;</li>
        <li> Синтез и модификация веществ, ингибирующих белок IRAK4, сверхэкспрессия которого вызывает развитие раковых
            клеток;</li>
        <li> Осуществление оптического, геометрического и микробиологического синтеза высокоактивных веществ, создание
            наукоемких технологий;</li>
        <li> Внедрение технологий получения рекомбинантных пептидов.</li>
    </ol>

    <h3>Подготовка научных кадров:</h3>
    <ol type="1">
        <li> Дважды в месяц организуются периодические семинары с участием профессоров Китайской академии наук через
            платформу «ZOOM» для одаренных студентов химического и биологического факультетов Национального университета
            Узбекистана и Ташкентского фармацевтического института.</li>
        <li> Студенты будут распределены по научным группам и смогут выполнить дипломные квалификационные и магистерские
            работы;</li>
        <li> В ИП ООО «China-Uzbekistan Medicine Technical Park» зарубежные специалисты обучают сотрудников технологиям
            создания лекарственных форм из фармакологически активных веществ в соответствии с международными
            требованиями GMP;</li>
        <li> Ежегодно 2 студента будут направлен для обучения на магистратуре в вузах-партнерах Китайской академии наук
            за счет фонда UCAS;</li>
        <li> Ежегодно фонд CAS-TWAS (Китайская академия наук и Всемирная академия наук) направляет 1 кандидата в
            институты-партнеры Китайской академии наук для прохождения базовой докторантуры.</li>
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
    <h3>Освоенные биологические тест-системы in vitro в лаборатории:</h3>
    <ol type="1">
        <li> Определение коронавирусной COVID-19 активности</li>
        <li> Ингибирование 3CL протеазной активности (SARS-CoV-2)</li>
        <li> Ингибирование активности АПФ-II (COVID-19)</li>
        <li> Ингибирование активности Лизоцима (Рак молочной железы)</li>
        <li> Ингибитор активности Катепсина H (Простатит Рака)</li>
        <li> Ингибирование N-никотинамидметилтрансферазной активности (Рак и диабет)</li>
        <li> Ингибирование активности фермента p300 (Рак)</li>
        <li> Ингибирование активности ВИЧ-1 обратной транскриптазы (ВИЧ активность)</li>
        <li> Ингибирование аденозил гомоцистеиназы (антивирус и противоопухолевый)</li>
        <li> HRV 3C Protease, Assay Kit (Риновирус человека)</li>
        <li> Исследование тирозиназной активности (Пигментация кожи)</li>
        <li> Исследование DPP4 активности (Диабет)</li>
        <li> Исследование PLTP активности (Диабет)</li>
        <li> Исследование А моноаминооксидазной активности (Антидепрессант)</li>
        <li> Исследование В моноаминооксидазной активности (Паркинсон, Альцгеймер)</li>
        <li> Исследование кальпаиназной активности (Альцгеймер, Ишемия)</li>
        <li> Индолеамин 2,3-диоксигеназной активности (Антинеопластик)</li>
        <li> Исследование АПФ-I активности (Артериальное давление)</li>
        <li> Исследование HMG-CoA редуктазной активности (Снижает холестерин)</li>
        <li> Исследование Неприлизиновой активности (Сердечно-сосудистые заболевания)</li>
        <li> Исследование калликреиновой активности (Сердечно-сосудитые заволевания)</li>
        <li> Определение активности Ренина (Гипертензия)</li>
    </ol>

    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
    <h3>Сотрудники лаборатории:</h3>
    <img src="static/Laboratories/DevelopmentPermit/image/Mirzaakhmedov.png" alt="зав">
    <p>Мирзаахмедов Ш.Я. – заведующей лабораторией, к.х.н., старший научный сотрудник</p>
    <p>Ташмухамедов М.С. - к.ф.д., е.и.х.</p>
    <p>Қаюмов М.Б. - PhD, кат.и.х.</p>
    <p>Мухамедов Н.Р. - PhD, к.и.х.</p>
    <p>Асроров А.М. - PhD, к.и.х.</p>
    <p>Яшинов А.Ш. - к.и.х.</p>
    <p>Пардаев А.У. - к.и.х.</p>
    <p>Олимжонов Ш.С. - к.и.х.</p>
    <p>Хакимов М.С. - к.и.х.</p>
    <p>Нуриддинов З.Ф. - к.и.х.</p>
    <p>Мирзарахметова З. - докторант</p>
    <p>Фазлитдинов Ш.Ж., Ражабов М.Р., Ортиқов С., Азаматхўжаев А - студенты</p>
    <img src="static/Laboratories/DevelopmentPermit/image/staff.png" alt="сотрудники" width="600">
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3>Научные достижения лаборатории в 2022 – 2023 годах</h3>
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
    <h3>Научные проекты, выполнные в лаборатории и реализуемые в настоящее время:</h3>
    <ol type="1">
        <li> Фундаментальный проект, полученный от Центральноазиатским центром исследований лекарственных средств
            Академии наук Китая: «Исследование белково-пептидных компонентов из ядов среднеазиатского каракурта
            Latrodectus tredecimguttatus, среднеазиатской жабы Bufo viridis и синьцзянской жабы Bufo gargarizans». "
            Срок реализации: 2019-2022 гг. Распределение: 130 000 долларов США.</li>
        <li> Фундаментальный проект, получнный от Министерства инновационного развития: «Исследование молекулярных
            механизмов действия новых биологически активных веществ, выделенных из рептилий, паукообразных и амфибий,
            для лечения заболеваний, имеющих социальное значение в Узбекистане»
            Срок реализации: 2021-2025 гг. Выделенные средства: 6 187 000 000 сум сроком на 5 лет.</li>
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