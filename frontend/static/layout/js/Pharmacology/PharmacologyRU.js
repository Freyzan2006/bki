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
    <h2>Лаборатория фармакологии и скрининга биологически активных веществ</h2>
    <h3>Заведующая лабораторией</h3>
    <h3>кандидат биологических наук</h3>
    <h2>Тагайалиева Нигора Абдунабиевна</h2>

    <h2>История лаборатории</h2>
    <p>Лаборатория фармакологии была создана в 1973 году на базе Отдела Биоорганической химии при АН Узбекистана. В
        1977 году отдел был переименован в Институт биоорганической химии. Первым заведующим лабораторией
        фармакологии был профессор Насыров Санжар Хайдарович, который руководил лабораторией до 1994 года. Под его
        руководством были подготовлены более 20 кандидатов наук по специальности фармакология, выпущены 2
        монографии. Сотрудники лаборатории проходили обучение на кафедре «Фармакологии с общей токсикологией»
        Ленинградского санитарно-гигиенического медицинского института России под руководством профессора
        П.П.Денисенко, 2-го Мединститута, под руководством профессора Ефимова С.А., Института эпидемиологии и
        микробиологии им. Н.Ф. Гамалея АМН Россия, Институт хирургии им. А.В. Вишневского АМН и др. С 1994 года
        лабораторией руководил доктор медицинских наук Исанбаев Чингиз Ильдарович, в 2002-2010 года к.м.н. Мирзаев
        Юрий Рахманович, в 2010-2018 - к.х.н. Иногамов Уткир Кудратуллаевич. </p>
    <p> С момента создания по настоящее время лаборатория проводила исследования фармакологической активности
        различных соединений животного и растительного происхождения, полученных сотрудниками Института
        биоорганической химии: алколоидов, полифенолов, детерпеноидов, флавоноидов, белков и пептидов,
        полисахаридов, а также их комплексов, получинтетических аналогов, конъюгатов и др.</p>
    <p> Для полноценной работы лаборатории функционирует виварий, обеспечивающий институт четырьмя видами подопытных
        животных: кролики, морские свинки, крысы, мыши.</p>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Исследования</h3>
    <ol type="I">
        <li>Лаборатория фармакологии ИБОХ АН РУз является единственным в Узбекистане центром, где проводится полное
            доклинические исследования фармако-токсикологии перспективных агентов как лекарственных препаратов и
            БАДов согласно требованиям Фармкомитета ГУП Гос. центр экспертизы и стандартизации лекарственных
            средств, изделий медицинского назначения и медицинской техники Агентства по развитию фармацевтической
            отрасли при МЗ РУз:</li>

        <ul style="list-style-type:disc;">
            <li>Общая токсикология:</li>
            <ol type="1">
                <li> Острая токсичность.</li>
                <li> Подострая токсичность (кумуляция).</li>
                <li> Хроническая токсичность (периферическая кровь, функция печени (АСТ, АЛТ, общий белок, глюкоза),
                    выделительная система (диурез, рН мочи, мочевина крови), фукция ЦНС, ПНС (тест «Открытое поле»),
                    стандартная гистологическая оценка тканей).</li>
            </ol>

            <li>Общая фармакология:</li>
            <ol type="1">
                <li> Влияние на сердечно-сосудистую систему (ЭКГ, давление и ЧСС)</li>
                <li> Влияние на двигательную активность (вращающийся стержень, крестообразный лабиринт).</li>
                <li> Снотворный эффект наркотических средств.</li>
                <li> Судорожное действие.</li>
                <li> Влияние на давление и дыхание.</li>
                <li> Изолированные органы.</li>
            </ol>

            <li>Специфическая токсикология:</li>
            <ol type="1">
                <li> Местно-раздражающее действие (конъюктивальная проба, кожные пробы).</li>
                <li> Аллергенность (гиперчувствительность замедленного типа, накожная аппликация, анафилактический
                    шок).</li>
                <li> Репродуктивная токичность (Эмбриотоксичность и терратогенность).</li>
                <li> Иммунотоксичность антителообразующие клетки, клеточность иммунной органов, фагоцитоз, ГЗТ)</li>
                <li> Генотоксичность (Мутагенность и канцерогенез).</li>
                <li> Пирогенность.</li>
            </ol>

            <li>Специфическая фармакология:</li>
            <ol type="1">
                <li> Изучение стероидных гормонов и НПВС.</li>
                <li> Изучение дерматотропных лекарственных средств: ранозаживляющих, противоожоговых и
                    антиаллергенных.</li>
                <li> Изучение лекарственных средств, влияющих на гемостаз: гемостатики, антикоагулянты,
                    антиагреганты, фибринолитики.</li>
                <li>Изучение гемостимулирующей активности: стимуляторы тромбоцитопоэза и эритропоэза.</li>
                <li>Изучение противоанемических лекарственных средств.</li>
                <li> Изучение иммунотропной активности.</li>
                <li> Изучение антигипоксантной и антиоксидантной активности лекарственных средств.</li>
                <li> Изучение слабительных лекарственных средств.</li>
                <li> Изучение противоязвенной активности.</li>
                <li> Изучение гипотензивных средств.</li>
                <li> Изучение гепатопротекторных препаратов.</li>
                <li> Изучение антимутагенных средств.</li>
            </ol>
        </ul>

        <h3>Используемые модели и тесты</h3>
        <ol type="1">
            <li> Модели анемии: гемолитической (фенилгидразин солянокислый), постгеморрагической и апластической;
            </li>
            <li> Модели острого (ССl4, парацетамол) и хронического (гелиатрин, алкоголь) гепатита;</li>
            <li> Модели стресса: нервно-мышечного напряжения по Селье, «водяная баня», нормобарическая гипоксия и
                другие;</li>
            <li> Модель гипокоагуляции, вызванная гепарином;</li>
            <li> Модель протромбинемии, вызванная фенилином;</li>
            <li> Модель паренхиматозного кровотечения (печеночное);</li>
            <li> Модель остеопороза (кастрация самок крыс);</li>
            <li> Модели сахарного диабета; </li>
            <li> Модели тромбозов: тромбоз левой сонной артерии (железа хлорид); легочной тромбоз у мышей; тромбоз
                полой вены с частичным стенозом;</li>
            <li> Модель миокардита у крыс;</li>
            <li> Модели экссудативного, пролиферативного, альтерративного воспаления, жаропонижающего и
                обезболивающего действия (40 моделей с различными модификациями);</li>
            <li> Модели ран, ожогов и дерматитов;</li>
            <li> Модели оценки слабительных средств;</li>
            <li> Модели язвенных колитов (уксусной кислотой); </li>
            <li> Модели атеросклероза у крыс (твиновая и вызванная витамином Д);</li>
            <li> Модель послеоперационной спаечной болезни;</li>
            <li> Цитогенетические тесты на аберрации хромосом (в клетках костного мозга млекопитающих in vivo и
                лимфоцитах периферической крови человека in vitro) и микроядра в костном мозге in vivo;</li>
            <li> Тест ДНК-кометы in vivo и in vitro;</li>
            <li> Модель артроза.</li>
            <li> Модель мочекаменной болезни (этиленгликоль с оксалатами).</li>
        </ol>
        <p> Модели и тесты позволяют проводить фармакологический скрининг новых исследуемых соединений; изучение их
            фармакологических свойств и механизма действия.</p>
        <li>Составление отчетов по новым фармакологическим препаратам для Фармкомитета;</li>
        <li>Фармаконадзор за новыми лекарственными препаратами, разработанными в Институте.</li>
    </ol>

    <h3>Экспериментальная база лаборатории</h3>
    <ul style="list-style-type:disc;">
        <li> Анализатор поуавтоматический биохимический Rayto RT-1904С (Китай, 2020),</li>
        <li> Автоматический гематологический анализатор Dymind DH36 (Китай, 2022)</li>
        <li> 4-канальный анализатор «Изолированные органы» (4-chаnnel data acgusittion hardware for use with
            Data-TraxTM data recording and analisis software, USA, World Precision Instruments, Inc.-2011)</li>
        <li> Полуавтоматический коагулометр RT-2201C(Китай, 2020),</li>
        <li> Полуавтоматический роторный микротом MICROTOME CUT 5052 (Германия, 2023)</li>
        <li> Система неинвазивного измерения кровяного давления грызунов «Систола» (Россия, 2023)</li>
        <li> Микроскоп Motic BA210E, укомплектованный видеокамерой и компьютером (Испания, 2015)</li>
        <li> Электрокардиограф,ЭКГ Heart Screen 80G-L-2011</li>
        <li> Коагулометр HumaClot (Германия, 2009)</li>
        <li> Манежи «Открытое поле» и «Крестообразный лабиринт» </li>
        <li> Прибор «Вращающийся стержень» и др. стандартные лабораторные приборы</li>
    </ul>
    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
    <h3>Наиболее важные результаты и достижения</h3>
    <ul style="list-style-type:disc;">
        <li> За последние годы проведены доклинические исследования фармако-токсикологии ряда лекарственных
            препаратов, разработанных в Институте совместно с другими лабораториями, в том числе Провидин, Рометин ,
            Госситан, Мегосин, Афлан , Кардин, Тимоптин табл., Седанил, Биомайрин, Фибринолитик, Эуфорбин, Гетасан,
            Глипред, Глилалин, Глицирам Гемогубка, Плантагин, Биоокор, Сояфлан, Коллаген, Кальцитонин таб., Амарант:
            масло и др.</li>
        <li> Внедрен в производство в качестве стимулятора эритропоэза для лечения анемии легкой, средней и тяжелой
            степеней препарат «Эритим раствор 0,001%» (производится Институтом с 2016 года и реализуется в аптеках
            Республики Узбекистан).</li>
        <li> Разрешены к применению в качестве лекарственного средства против заболевания COVID-19 с 30% воспалением
            легких средней степени тяжести, а также против всех штаммов гриппа «Рутан таблетка 100 мг №20» для
            взрослых, «Рутан таблетка 25 мг №20» для пациентов старше 6 лет. Препарат включен в протокол лечения
            больных коронавирусной инфекцией COVID-19.</li>
        <li> Проведен фармакологический надзор и составлены отчеты для ФК по препаратам: Тимоптин, Гозолидон в
            капсулах, Прамипексол БИО.</li>
    </ul>
    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `

    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
    <h3>Сотрудники</h3>
    <ol type="1">
        <li> Тагайалиева Н.А.- заведующая лабораторией, к.б.н., звание с.н.с.</li>
        <li> Выпова Н.Л. - в.н.с., к.б.н., звание с.н.с.</li>
        <li> Якубова Р.А. - с.н.с., к.б.н. (Сертификат НИИ стандартизации, метрологии и сертификации (НИИСМС)
            агентства “Узстандарт” «Сертификат методики выполнения измерений (II часть - цитогенетический анализ
            кариотипа человека)» o’zo’u 0701:2015)</li>
        <li> Баратов К.Р. - с.н.с.</li>
        <li> Рахмонова Г.Г. - м.н.с.</li>
        <li> Махмудов Л.Н. - базовый докторант</li>
        <li> Нурбекова Н.Б. - стажер-исследователь</li>
        <li> Худайкулова М.М.</li>
        <li> Иногамов П.Н.</li>
        <li> Кодирова М.К.</li>
    </ol>
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3> Публикации</h3>
    <ol type="1">
        <li> Махмудов Л. У., Арипов Т. Ф., Выпова Н. Л., Нурбекова Н. Б., Юлдашев Х. А., Эсанов Р. С., Гафуров М.
            Б., Якубова Р. А., Тагайалиева Н.А. Антиоксидантные и гепатопротекторные свойства комплексов
            моноаммонийной соли глицирризиновой кислоты c аминокислотами и фенольными соединениями
            //Экспериментальная и клиническая фармакология. – 2023. – Т. 86. – №. 3. – С. 23-28.
            <a href="http://ekf.folium.ru/index.php/ekf/article/view/3068/2537">ссылка</a></li>
        <li> А. В. Филатова, Выпова Н. Л., Азимова Л. Б. Изучение фотопротекторной активности геля с меланином
            на модели ультрафиолетовой эритемы у крыс // Химико-фармацевтический журнал. Том 57, № 4, 2023. -
            с.41-45. DOI: <a href="https://doi.org/10.30906/0023-1134-2023-57-4-41-45">ссылка</a></li>
        <li> Тўхтаева Ф.Ш., Махмудов Р.Р., Мустафакулов М.A., Рахмонова Г.Г., Баратов К.Р. Ўзбекистон
            республикаси ҳудудида ўсувчи Plantago оиласига мансуб ўсимликлардан ажратиб олинган флавоноидлар
            суммасини тажрибавий қандли диабетда биокимёвий кўрсаткичлар коррекциясида самарадорлигини баҳолаш //
            Хоразм маъмун академияси ахборотномаси. - 2023. - №2/1. – С.62-69.</li>
        <li> Хайтметова, С. Б., Тураев, А. С., Халилова, Г. А., Тагайалиева, Н. А., & Аббосхонова, М. О.
            Изучение активности полисахаридов, выделенных из базидиальных грибов Ganoderma lucidum, на модели
            токсического гепатита //Экспериментальная и клиническая фармакология. – 2022. – Т. 85. – №. 12. – С.
            38-41. <a href="https://doi.org/10.30906/0869-2092-2022-85-12-38-41">ссылка</a></li>
        <li> Mamatmusaeva N.E., Abdugafurova D.G., Vypova N.L., Ziyaev Kh.L., Tagayalieva N.A., Abrekova N.N.,
            Sagdullaev B.T. Anti-ulcer effect of megosin in a model of acute experimental colitis in RATS //
            International Journal of Health Sciences. 2022. - № 6(S7). – р. 47349–47356.
            <a href="https://doi.org/10.53730/ijhs.v6nS7.13227">SCOPUS</a></li>
        <li> Назаров Г.А., Выпова Н.Л., Салихов Ш.И., Баратов К.Р., Тагайалиева Н.А. Изучение влияния субстанции
            препарата сафинол на плазменный гемостаз кроликов // Журнал Инфекция, иммунитет и фармакология.-
            Ташкент, 2022.- №3. – с. 152-156.</li>
        <li> Рахмонова Г.Г., Баратов Қ.Р., Абдугафурова Д. Г., Якубова Р.А., Выпова Н.Л., Зияев Х.Л.,
            Тагайалиева Н.А. Определение острой токсичности производных госсипола // Журнал Инфекция, иммунитет и
            фармакология.- 2022.- №3. – с. 200-208.</li>
        <li> Выпова Н.Л., Фомина М.А., Нурбекова Н.Б., Тагайалиева Н.А., Юлдашев Х.А., Гафуров М.Б., Эсанов Р.
            С., Сайдуллаева Х.Т. Влияние комплексных препаратов на основе МАСГК, карнитина и метионина на
            биохимические показатели крови крыс с парацетамоловым гепатитом //Universum: химия и биология. – 2022. –
            №. 4-1 (94). – С. 34-39. DOI 10.32743/UniChem.2022.94.4.13311</li>
        <li> Abdullaeva B.T., Rakhmonova G.G., Soliev M.I. Detection of acute toxicity of wormwood extract and
            pine conifer extract //Spanish Journal of innovation and integrity. - 2022. -V.5, P.605-610.</li>
        <li> Рахмонова Г. Г., Абдулладжанова Н. Г., Рахимов Р. Н., Баратов К.Р., Якубова Р.А., Тагайалиева Н.А.
            Изучение репродуктивной токсичности суммы полифенолов из растения Rhus glabra на лабораторных крысах //
            «Universum: химия и биология». - 2022. - 6(96).- с.63-70. DOI - 10.32743/UniChem.2022.96.6.13663</li>
        <li> Тоштемирова Ч.Т., Рахмонова Г.Г., Эрназаров А.М., Нормахаматов Н. С. Изучение острой токсичности
            водных экстрактов надземной части растения Gentiana olivieri griseb. Фармацевтический журнал. №5, 2022.
            С. 82-85.</li>
        <li> Акбаралиев М.А., Абдугаффарова Д. Г., Рахманова Г.Г., Камбаров Х.Дж., Иногамов У.К. Изучение
            иммунотропной активности очищеного эриксин- 1 и неочищеного эриксин- 2 субстанции автолизата из биомассы
            змеи Eryx miliaris. Фармация, иммунитет и вакцина. №3, 2022. C. 61-67.</li>
        <li> Sagdiev N.J., Ziyavitdinov J.F., Berdiev N.Sh., Bozorov S.S., Khudoyberdiev T.A., Olimjonov Sh.S.,
            Vypova N. L. Low abundant bovine colostrum proteins in combination with amaranth oil reveal topical
            analgesic activity //Nova Biotechnol Chim (2022x) xx(x): e1246 DOI: 10.36547/nbc.1246</li>
        <li> Zaripova M., Vypova N., Amirsaidova D., Bekmurodova G., Aripov T., Gayibov U., Miralimova S.,
            Gayibova S. (2022) The hypoglycemic potential of endophytic Lactobacillus kunkeei, isolated from
            Dandelion flowers in rats.// Journal of Basic and Applied Pharmacology Vol. 2 No.1 January - June 2022.
            Page: O43-51.</li>
        <li> Еникеева З.М., Юлдашев Ж.А., Выпова Н.Л., Агзамова Н.А /Изучение острой токсичности и
            противоопухолевой активности нового препарата колхаметин //Клиническая и экспериментальная онкология,
            №1(19)–2022. С.25-30.</li>
        <li> Ziyavidenova S. S., Vypova N. L., Enikeeva Z. M., Agzamova N. A., Nishanov D. A., Madaliev A. A.,
            Alimkhodjaeva L. T. /Study of the Toxic Features of the Antitumor Drug Decoglitz //American Journal of
            Medicine and Medical Sciences 2021, 11(10): 705-710 DOI: 10.5923/j.ajmms.20211110.08</li>
        <li> Выпова Н.Л., Еникеева З.М., Зиявиденова С., Холтураева Н., Нишанов Д., Мадалиев А., Маулянов С./
            Изучение токсикологии противоопухолевого препарата «дэкоглиц» //O‘zMU xabarlari Вестник НУУз ACTA NUUz
            BIOLOGIYA 3/1/1 2022.</li>
        <li> Пахтуллаева З.И., Выпова Н.Л., Джаббарова Г.М., Махмудов Л.У., Эсанов Р.С., Юлдашев Х.А./ Изучение
            “острой” токсичности новых производных некоторых природных тритерпеновых кислот, содержащих остатки
            2-алкил (арил)-5-амино-1,3,4-тиадиазола// Инфекция , иммунитет и фармакология 1 /2022,С.178-183.</li>
        <li> Филатова А.В., Выпова Н.Л., Азимова Л.Б., Джурабаев Д.Т, Тураев А. С.. Иммуномодулирующие свойства
            полисахаридов и меланина, выделенных из (helianthus annuus l.), лузги подсолнечника.//. Инфекция
            иммунитет и фармакология №1, 2022 г с.262-268</li>
        <li> Орипова М. Ж., Корабоева Б. Б., Кузиева З. Н., Аманликова Д. А., Абдугафурова Д. Г., Ощепкова Ю.И.
            Выделение и биологическая активность рибосом инактивирующих белков из листьев Nitraria Shoberi.
            Инфекция, иммунитет и фармакология. № 1. 2022. С. 171-176.</li>
        <li> Султанова Э.М., Аманликова Д.А., Абдугафурова Д.Г., Ощепкова Ю.И. Изучение иммунотропной активности
            экстрактов Raphanus sativus // Инфекция, иммунитет и фармакология. 2022. - № 4. - С. 210-216.</li>
        <li> Ашурова Ф.К., Юлдашев Х.А., Тагайалиева Н.А., Азизова З.Ш., Ходжаназарова С.Ж., Махмудов Л.У.,
            Авездурдиева Т.А. Исследование иммунотропной активности полученных комплексов в условиях физиологической
            нормы //Журнал теоретической и клинической медицины. – 2022. - №1. – с. 14-17.</li>
        <li> Ашурова Ф.К., Юлдашев Х.А., Тагайалиева Н.А., Ходжаназарова С.Ж., Азизова З.Ш., Махмудов Л.У.,
            Эргашева В.Ш., Авездурдиева Т.А. Исследование биохимической активности полученных комплексов на модели
            острого токсического гепатита//Журнал теоретической и клинической медицины. – 2022. - №3. – с. 11-14.
        </li>
        <li> Баратов К.Р., Махмудов Л.У., Якубова Р.А., Выпова Н.Л., Абдугафурова Д.Г., Назирова Э.Р.,
            Тагайалиева Н.А. Противовоспалительная активность комплекса рутина с глицирризиновой кислотой //
            Экспериментальная и клиническая фармакология. - 2021.- № 9. – с.29-33.
            <a href="https://doi.org/10.30906/0869-2092-2021-84-9-29-33">ссылка</a></li>
        <li> Рахмонова Г.Г., Р.Р. Махмудов, К.Р. Баратов, Р.А. Якубова, Д.Г. Абдугафурова, Н.Г. Абдулладжанова,
            Тагайалиева Н.А. Исследование острой и субхронической токсичности субстанции ПС-5, полученной на основе
            полифенолов из Rhus glabra // Фармацевтический Вестник Узбекистана. – 2021. – №.1 – с.76-80.
            <a href="https://files.uzpharm-control.uz/index.php?dl=06bc27d8a542ba4402cc79e5a26618a0">ссылка</a></li>
        <li> Выпова Н. Л., Зияев Х.Л., Реджепов Қ.Ж.,Эрматов А. М., Якубова Р.А., Тагайалиева Н. А. Исследование
            острой токсичности фармокологического препарата Рометин с противовирусной активностью //
            Фармацевтический Вестник Узбекистана. – 2021. – №2. – с.50-53.</li>
        <li> Baratov Q., Mustafakulov M., Matchanov A., Vypova N., Yakubova R., Tagayalieva N. Glycyrrhizic acid
            and its derivatives as the carriers for the poorly soluble flavonoids // International Journal of
            Disaster Recovery and Business Continuity. – 2021. - №2 – р. 1-8.(Web of Science)
            <a href="http://sersc.org/journals/index.php/IJDRBC/issue/view/301">ссылка</a></li>
        <li> Enikeeva Z. M. Ibragimov A. A., Agzamova N.A., Vypova N.L., Saidhodjaeva S.S., Kholturaeva N. R.,
            Abdirova A.Ch., Tuychiev O.D., Polatova J. Sh., Kadirova D. A., Salihov F. S. Study of the Antitumor
            Activity of the Drug Dekoglitz on Two Tumors and Some Aspects of Its Mechanism of Action . Journal of
            Oncology Research, Volume №3 | Issue №1 | January 2021, р.11-16 (IF-1.5)</li>
        <li> Ziyavidenova S. S., Vypova N. L., Enikeeva Z. M., Agzamova N. A.,Nishanov D. A., Madaliev A. A.,
            Alimkhodjaeva L. T. Study of the Toxic Features of the Antitumor Drug Decoglitz. American Journal of
            Medicine and Medical Sciences 2021, 11(10): 705-710</li>
        <li> Filatova A.V., Turaev A.S. and Vypova N.L. Experimental study of local anesthetic activity and
            acute toxicity of a combined gel//Pharmacevtical Chemistry Journal, Vol. 55, No.3, June,2021(Russian
            Original Vol. 55, No.3, March,2021)/ DOI 10.1007/s11094-021-02415-y</li>
        <li> Filatova A. V., A. S. Turaev, N. L. Vypova, L. B. Azimova, and D. T. Djurabaev Isolation of
            polysaccharides from horse сhestnut (Aesculus hippocastanum l.) shells and their acute toxicity and
            influence on the immune system // Pharmaceutical Chemistry Journal, Vol. 55, No. 4, July, 2021 (Russian
            Original Vol. 55, No. 4, April, 2021). DOI: 10.1007/s11094-021-02430-z.</li>
        <li> Далимова С.Н. Хамдамова Н.А. Левицкая Ю.В. Кузиев Ш.Н. Гафуров М.Б. Юлдашев Х.А. Умарова Г.Б.
            Мухамаджонова Г.М. Выпова Н.Л. Тагайалиева Н.А. Махмудов Л.У. Хамраев С.Х. Исследования антиоксидантных
            свойств некоторых растворимых форм супрамолекулярных комплексов на основе моноаммониевой соли
            глицирризиновой кислоты // Universum: химия и биология. - 2021.- № 1 (79). – с.16-22.</li>
        <li> Баратов К.Р., Выпова Н.Л., Якубова Р.А. Матчанов А.Д., Тагайалиева Н.А. Изучение острой токсичности
            и кумулятивных свойств новой растворимой формы рутина // Журнал Инфекция, иммунитет и фармакология.-
            Ташкент, 2020.- №. – с. 33-39.</li>
        <li> Баратов К.Р., Махмудов Л.У., Матчанов У.Д., Тагайалиева Н.А.Сравнительная биологическая активность
            супрамолекулярных комплексов рутина // Universum: химия и биология. - 2020.- № 8 (74). - с.15-18.</li>
        <li> Баратов К.Р., Рахмонова Г.Г., Махмудов Л.У. , Кузиев Ш.Н., Матчанов У.Д. Выпова Н.Л., Якубова Р.А.,
            Тагайалиева Н.А. Оценка противовоспалительного и антиоксидантного действия супрамолекулярного комплекса
            рутина // Universum: химия и биология. - 2020.- № 9 (75). – с. 8-14.</li>
        <li> Тагайалиева Н.А., Якубова Р.А., Баратов К.Р., Рахмонова Г.Г. Расовые корни узбекской популяции //
            Вестник ТМА. - 2020. - №1. – с.45-50.</li>
        <li> Тагайалиева Н.А., Якубова Р.А., Баратов К.Р., Рахмонова Г.Г. Биомедицинское значение расы при
            фармакотерапии // Вестник ТМА. - 2020. - №2. – с 36-40.</li>
        <li> Выпова Н. Л., Зияев Х.Л., Эрматов А. М., Реджепов К.Ж., Якубова Р. А., Тагайалиева Н. А. Влияние
            противовирусного препарата рометин на гематологические и патоморфологические показатели лабораторных
            животных при многократном введении // Фармацевтический Вестник Узбекистана. – 2020. – №1. – с.62-67.
        </li>
        <li> Agzamkhujaeva Kh.T., Mirzaakhmedov Sh.Y., Yakubova R.A., Tashmukhamedov M.S. Study of embryotoxic,
            teratogen actions of the drug «bakagin» from the parotid secretes central asian green toad bufo viridis
            Laur and its effect to the reproductive function of rats // European Journal of Biomedical and Life
            Sciences Scientific journal.- 2019. - № 3. – p. 23-29.</li>
        <li> Agzamkhujaeva Kh.T., Mirzaakhmedov Sh.Y., Yakubova R.A., Tashmukhamedov M.S. Investigation of the
            genetoxcity of new drag from the parotid secretes central asian green toad bufo viridis laur // European
            Journal of Technical and Natural Sciences Scientific journal. -2019. - № 4 - p.12-19.</li>
        <li> Исмаилов С.И., Выпова Н.Л., Абрекова Н.Н., Фаттахов А.А., Муталова М.Р., Батырбеков А.А. Изучение
            иммуномодулирующей и гипогликемической активности глюкозара №1 и глюкозара №2 на моделях алиментарной и
            адреналиновой гипергликемии // Журнал теоретической и клинической медицины, №1- 2019-С.6-9.</li>
        <li> Махмудов Л.У. Выпова Н.Л., Далимова С.Н., Матчанов А.Д., Исмаилов А.Х. Филатова А.В Исследование
            кровоостановливающего действия препаратов растительной природы. // Журнал теоритической и клинической
            медицины, №4- 2019-С55-58.</li>
        <li> Raimova G.M., Musaeva M.K., Khoshimov N.N., Vypova N.L., Nasirov K.E. Selection and Study of
            Influence of Preparation <CMC> on the Process of Cooking of Blood // Russian Journal of Biological
                Resеarch, 2019, 6(1), 16-21.</li>
        <li> Matchanov A.D., , Zainutdinov U.N., Islamov A.Kh., Vypova N.L., Tashpulatov F.N., Ecanov R.S.,
            Matchanov U. D. , Sobirova F.A., Khakberdiyev Sh.V. Synthesis and hemostatic activity of supramolecular
            complexes lagochilina // Chemistry of Natural Compounds, Vol. 08, Issu.04 pp. 19812-19814. April. 2018.
        </li>
        <li> Матчанов А, Филатова А.В. Выпова Н.Л Исследование кровоостанвлива ющего действия лекарственного
            средства на гелевой основе // ДАН 2018 г №4 с.75-79.</li>
        <li> Матчанов А, Филатова А.В. Выпова Н.Л Ташпулатов Исследование специфической активности
            кровоостановливающего геля на модели гипокоа гуляции у экспериментальных животных //Фармацевтический
            вестник №4 2018 с.89-93</li>
        <li> Исмаилов С.И., Алимов А.В., Юлдашева Ф.З., Выпова Н.Л. Абрекова Н.Н., Фаттахов А.А., Муталова
            М.Р., Батырбеков А.А. Сравнительное изучение фармакодинамики и иммунотропных свойств водорастворимого
            препарата аквайод в сравнении с йодомарином 200 // Журнал теоритической и клинической медицины, №3-
            2018-С. 9-12.</li>
        <li> Филатова А.В., Джурабаев Д.Т., Выпова Н.Л., Азимова Л.Б., Тураев А.С. Фармако-токсикологические
            исследования препарата наружного действия для лечения аллергии // Инфекция, Иммунитет и фармакология,
            №1- 2018- С.64-68.</li>
        <li> Гафурова Н.Д., Выпова Н.Л., Хамидов Ш. А., Искандерова С.Д., Зияева А.В. Исследования влияния
            антикоагулянтного препарата кардин на модели адреналинового миокардита у крыс // Терапевтический вестник
            Узбекистана, 2018.-№4,-С.169-172.</li>
        <li> Гафурова Н.Д., Выпова Н.Л., Хамидов Ш. А., Искандерова С.Д., Зияева А.В. Влияние препарата кардин
            на уровень оксида азота и процессы свертываемости крови у интактных животных // Терапевтический вестник
            Узбекистана, 2018.-№4,-С.165-168.</li>
        <li> Рахмонова Г.Г., Баратов К.Р., Якубова Р.А., Фомина М.А., Назирова Э.Р., Филатова А.В., Тагайалиева
            Н.А. Исследование генотоксичности фармакологического препарата сульфогель в тесте in vivo
            //Фармацевтический Вестник Узбекистана. – 2018. - №4. – с.12-16.</li>
        <li> Рахмонова Г.Г., Баратов К.Р, Якубова Р.А., Мирзаахмедова К.Т, Аминов С.Д. Доклиническое изучение
            общей токсикологии препарата «Фитин-С» // Инфекция, иммунитет и фармакология. №3. 2017. С. 279-284.</li>
        <li> Рахмонова Г.Г., Баратов К.Р., Якубова Р.А., Фомина М.А., Назирова Э.Р., Филатова А.В., Тагайалиева
            Н.А. Исследование генотоксичности фармакологического препарата сульфогель в тесте in vivo
            //Фармацевтический Вестник Узбекистана. – 2018. - №4. – с.103-106.</li>
    </ol>

    <h3>Монографии</h3>
    <ol type="1">
        <li>Предклиническое изучение нового противоопухолевого и радиосенсибилизирующего препарата Дэкоцин и
            результаты Iфазы его клинического исследования (монография) / Тилляшайхов М.Н., Еникеева З.М., Выпова
            Н.Л., Нишанов Д.А., Агзамова Н.А., Ибрагимов А.А., Усманов Р.Х., Рахматуллаева Д.Т//Ташкент, 2022,
            с.155.</li>
        <li> Каримов Х.Я., Саатов Т.С., Ибрагимов З.З., Алимов Т.Р., Ибрагимова Э.А., Бобоев К.Т., Тагайалиева Н.А.
            Генетические аспекты развития остеопороза // Москва: Издательство Русайнс, 2020. - 112с.
            <a href="https://www.litres.ru/raznoe-4340152/geneticheskie-aspekty-razvitiya-osteoporoza-63362221/">ссылка</a>
        </li>
    </ol>

    <h3>Патенты</h3>
    <ol type="1">
        <li> Матчанов А.Д., Раимова К.В., Абдулладжанова Н.Г., Тагайалиева Н.А., Вьпова Н.Л., Турдиева З.В.
            Биологически активная добавка антианемического действия в капсулах. Агенстсво по интеллектаульной
            собственности при МинЮсте РУз. Патент на полезную модель № FАР 01752 от 31.01.22 (Номер заявки 2021 0114
            от 16.04.2021).</li>
        <li>Салихов Ш.И., Тураев А.С., Сагдуллаев Б.Т., Турабоев Ш.М., Якубова Р.А., Бекназарова Н.С., Атамуратов
            Ф.Н., Абрекова Н.Н., Рахмонова Г.Г., Баратов К.Р., Эргашева С.М., Умаров Д.Б. Способ получения
            противопаркинсонического средства. Агенстсво по интеллектаульной собственности при МинЮсте РУз. Патент
            на полезную модель № FАР 01750 (Номер заявки 2021 01168 от 21.05.2021).</li>
        <li> Исломов А.Х., Выпова Н.Л., Баратов К.Р., Махмудов Л.У./Получение масляного экстракта Lagochilusa//
            Патент на изобретение Регистрационный № 4037 , дата депонирования 28.10.2022 срок депонирования с
            28.10.2022 до 28.10.2027</li>
        <li>Маматмусаева Н.Э., Зияев Х.Л., Эрматов А.Б., Выпова Н.Л., Абдугафурова Д.Г., Абрекова Н.Н., Сагдулаев
            Б.Т. Средство для лечения язвенного колита //Патент на полезную модель № FAP 02156 от 28.08.22 FAP 2022
            0308.</li>
        <li>Сагдуллаев Б.Т., Тураев А.С., Турабоев Ш.М., Махмудов С.Д., Бекназарова Н.С., Якубова Р.А., Абрекова
            Н.Н., Иногамов У.К., Атамурадов Ф.Н., Маматмусаева Н.Э. «Маҳаллий ўсимлик хом ашёси асосида сурги
            хусусиятига эга восита ва уни олиниш усули» 7.06.16 йилда № IAP 20160218 талабнома берилган, 14. 01.19
            йилда ижобий қарор олинди (№IAP 05804 рақамли патент гувоҳномаси).</li>
    </ol>

    <h3>ВФС</h3>
    <ol type="1">
        <li> ВФСы на субстанцию, стандартный образец и таблетки Рутан. Утверждены ГУККЛС и МТ МЗ РУз 25.04.2014г.
        </li>
        <li> Далимов Д.Н.,Салихов Ш.И. , Матчанов А.Д., Выпова Н.Л. и др..ВФСы на субстанцию, и таблетки Инебрин.
            Утверждены ГУККЛС и МТ МЗ РУз 11.07.2014г</li>
        <li> А.С. Тураев , Д.Н. Далимов, А.Д. Матчанов , М.Б. Гафуров, Н.Л. Выпова /Временная фармакопейная статья
            на субстанцию Глилагина // ВФС 42 Уз-3090-2017</li>
        <li> Ш.И. Салихов, Т.Ф Арипов, Д.Н. Далимов, Б.А.Салпхутдинов, М.Б. Гафуров, Н.Л. Выпова, А.Д. Атхамова.,
            Х.А.Юлдашев., А.Д. Матчанов // Временная фармакопейная статья на субстанцию ГЛАС // ВФС 42 Уз-3089-2017.
        </li>
        <li> Ш.И. Салихов, Н.Д. Гафурова., Ш.А. Хамидов, Н.Л. Выпова, Н.Ж. Сагдиев /Фармакопейная статья на
            субстанцию Эритима // ФС 42 Уз – 2759 – 2018.</li>
        <li> Н.Д. Гафурова., Н.Л. Выпова /Временная фармакопейная статья на Эритим раствор 0,001% //ФС 42 Уз – 2760
            – 2018.</li>
        <li> Утверждены ФСы на стандартный образец Рутана (ФС 42 Уз–2514-2018), субстанцию Рутана (ФС 42
            Уз–2515-2018), лекарственную форму Рутана (ВФС 42 Уз–2516- 2015).</li>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
    <h3>Проекты</h3>
    <ol type="1">
        <li> А-ФА-2019-35 (2019-2022) «Создание иммунотропных средств на основе местного растительного сырья»</li>
        <li> ФА-А-10-002 (2017-2018) «Оценка генотоксического действия лекарственных препаратов по цитогенетическому
            тесту и тесту на ДНК-повреждения в ходе доклинических исследований»</li>
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
        <h4>Контакты</h4>
        <p>Тел.: +998 97 723 44 54 </p>
        <p>e-mail: <a href="mailto:tnigora@mail.ru"> tnigora@mail.ru</a></p>
        <p>+998 90 926 83 40 (етакчи илмий ходим Выпова Наталия Леонидовна)</p>
        <p>+998 97 753 81 20 (катта илмий ходим Якубова Рано Абдримовна)</p>
    `
}