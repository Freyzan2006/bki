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
        <h2>Лаборатория клеточных технологий овощных и растительных культур</h2>
        <h3>Заведующий лабораторией</h3>
        <h2>доктор химических наук, профессор Зиявитдинов Жамолитдин Фазлитдинович</h2>

        <h3>История лаборатории</h3>
        <p>Лаборатория является одной из самых молодых лабораторий института, которая была создана в 2018 году на базе
            «Лаборатории клеточных технологий» в составе института.</p>
        <p>Основное научное направление лаборатории является исследование молекулярно-биохимических механизмов
            метаболических путей стресс устойчивых перспективных растений, определение молекулярно-биохимических
            особенностей стрессоустойчивости, создание банка их генетического материала, внедрение перспективных растений в
            in vitro культуру и адаптация их к абиотическим стрессам.</p>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Исследования</h3>
    <ul style="list-style-type:none;">
        <li> Характеристика генов солеустойчивости растений, распространенных в высохшем дне Аральского моря;</li>
        <li> Формирование современного списка флоры территории, создание цифровой базы данных и коллекции генофонда на
            основе глубокого изучения растительного покрова высохшего дна Аральского моря.</li>
    </ul>
    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
    <h3>Полученные результаты</h3>
    <p>В Южном Оролкуме обнаружено 220 видов высших растений, относящихся к 3 секциям, 4 предкам (классам), 10 под
        предкам (подклассам), 18 крупным племен, 30 мельким племен, 41 семейству, 124 родам, среды которых 130 видов
        идентифицированы впервые. На территории отмечено 5 редких видов - Rosa majalis, Tulipa biflora, T. buhseana,
        Crambe edentula, Artemisia austriaca и одно эндемичное растение - Atriplex pratovii. Доказано, что флора Южного
        Оролкума произошла от Ирано-Туронской флоры.</p>
    <p>На Южный Аралкум было организовано множество экспедиций и собраны сотни коллекций эндемичных растений. Было
        сделано 150 почвенных срезов и отобрано более 1000 проб почвы из различных глубин. Описаны состояния почвенного
        покров территорий, виды и семейства произрастающих на них растений. Определен механический состав, рН почвы, тип
        и уровень засоления, содержание солей и обеспеченность гумусом 750 проб почвы взятых из 50 почвенных срезов.</p>
    <p>Впервые секвенированы части маркерных генов ДНК баркода растения Atriplex pratovii: последовательность гена rbcL,
        состоящая из 488, 537 и 811 пар нуклеотидов, последовательность гена matK, состоящая из 283, 403 и 804 пары
        нуклеотидов, и была определена область psbB-psbH состоящая из 577 пар нуклеотидов. Впервые было доказано, что
        Atriplex pratovii молекулярно и генетически отличается от других видов Atriplex. Впервые разработана межвидовая
        и межродовая молекулярная филогения Atriplex pratovii на основе генов rbcL, matK. Впервые проведена полимеразная
        цепная реакция участков 18s-5.8s ITS рДНК видов растений Salsola micranthera и Climacoptera aralensis.
        Обнаружено, что этот участок состоит из 710 пар нуклеотидов. Изучены факторы транскрипции генов NAC, BADH и
        DREB, реагирующих на абиотические стрессы (засуха и засоление) популяции растений Halocnemum strobilaceum,
        Atriplex pratovii, Atriplex tatarica, Climocoptera aralensis, Haloxylon aphyllum, Haraninova ulicina Южнего
        Аралкуми. Полученные результаты были зарегистрированы в National Center for Biotechnology Information
        <a href="http://www.ncbi.nlm.nih.gov">ссылка</a> (GenBank: OQ373010, GenBank: OR371504, GenBank: OR188086.1).
    </p>
    <p>Определяли количество белка, свободных и связанных аминокислот, витаминов группы С, РР и В (В1, В2, В6 и В9),
        содержание углеводов и полифенолов. Было обнаружено, что полифенолы, извлеченные из растений, обладают
        противовирусной активностью.</p>
    <p>Впервые сравнительно изучен элементный состав корневой системы и почвенных образцов оролкумской и устюртской
        популяций растения L. ruthenicum. Показано, что содержание поваренной соли и микроэлементов в корнях оролкумской
        популяции в 10 раз выше, чем у устюртской популяции.</p>
    <p>Количество белка, свободных и связанных аминокислот, витаминов С, РР и групп В (В1, В2, В6 и В9), углеводов и
        полифенолов в 6 видах растений T.hispida, S.dendrides, A.tatarica, A.pratovii, N.schoberi и L.ruthenicum,
        распространенных в этом регионе. Было обнаружено, что полифенолы, извлеченные из растений, обладают
        противовирусной активностью.</p>
    <p>Впервые сравнительно изучен элементный состав корневой системы и почвенных образцов оролкумской и устюртской
        популяций растения L. ruthenicum. Показано, что содержание NaCl и микроэлементов в корнях оролкумской популяции
        в 10 раз выше, чем у устюртской популяции.</p>
    <p>Впервые введены в in vitro культуру галофиты Haloxylon aphyllum, Lycium ruthenicum, Nitraria schoberi, Calligonum
        aphyllum, Atriplex tatarica, Atriplex pratovi, Salsola dendriedes и Halogeton glomeratus. Разработаны
        эффективные методы размножения растений в in vitro условиях и повторного культивирования. Определено всхожесть
        семян галофитов в in vitro условиях путем внесения в питательную среду солей, выделенных из почвы Аралкума,
        получены первичные и вторичные экспланты. Определена динамика изменения биохимического состава, осмолитов и
        фитогормонов адаптированных растений.</p>

    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `
    <h3>Достижения:</h3>
    <p>Результаты секвенирования генов rbcL, matK, региона psbB-psbH Atriplex pratovii зарегистрировано в базе данных
        Европейского нуклеотидного архива (Великобритания, Кембридж) EMBL-EBI с ID номерами LT604458, LT604459,
        LT604460, LT628367 и их белков SCB66075.1, SCB66076.1, SCB66077.1, SCZ84109.1 соответственно
        <a href="http://www.ebi.ac.uk">ссылка</a>.
    </p>
    <p>Последовательность изученных структур транскрипционных фактора генов NAC, BADH и DREB, реагирующих на
        абиотические стрессы (засуха и засоление) аралкумской популяций Halocnemum strobilaceum, Atriplex pratovii,
        Atriplex tatarica, Climocoptera aralensis, Haloxylon aphyllum и Haraninova ulicina зарегистрированы в
        Национальном центре биотехнологической информации GenBank <a href="http://www.ncbi.nlm.nih.gov">ссылка</a> под
        номерами ID: OQ373010, OR371504, OR188086.1.</p>
    <p>В результате проведенных исследований в Аралкуме зарегистрировано 278 видов новообразованной флоры, относящихся к
        39 семействам и 156 родам. Из них 58 видов признаны новыми видами Allium cesium Schrenk для флоры
        Каракалпакстана. В фонде коллекции гербариума Каракалпакского государственного университета создана коллекция
        Аралкума, состоящая из 800 образцов 110 видов, относящихся к 31 семейству, 98 родам, а база данных биоматериалов
        лекарственных растений Института биоорганической химии пополнилась 64 видами.</p>
    <p>На опытном участке точки «0» высохшего дна Аральского моря впервые высажено семена и посадочный материал 15 видов
        однолетних и многолетних галофитов. Высаженные семена галофитов однолетней жизненной формой Climacoptera lanata,
        C. longistylosa, C. intricata, Suaeda altissima и Atriplex ausheri впервые прошли полные фенологические стадии
        развития.</p>
    <p>Проведен трансфер технологии препарата «Тимоптин для инъекций» на ООО «Jurabek Laboratories Ltd» и получен
        сертификат № ДВ/М 04068/03/22 на производство под торговой маркой «ТАЙМУН». Подписан лицензионный договор с ООО
        “CHINA-UZBEKISTAN MEDICINE TECHNICAL PARK” на производство новой лекарственной формы препарата «Тимоптин
        таблетки, 0,1 мг». Выпущены 2 экспериментальные серии сублингвальных таблеток.</p>
    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
        <h3>Сотрудники</h3>
        <p>Зиявитдинов Ж.Ф. - заведующий лабораторией , д.х.н., проф.</p>
        <p>Олимжонов Ш.С. - старший научный сотрудник, к.х.н.</p>
        <p>Абдурахимова С.Ш. - старший научный сотрудник, к.х.н.</p>
        <p>Холмуратов Э.Г. - младший научный сотрудник</p>
        <p>Насирова Г.Б. - младший научный сотрудник</p>
        <p>Шеримбетова Г.Г. - лаборант</p>
        <p>Ишимов У.Ж. - докторант, к.х.н.</p>
        <p>Халбекова Х.У. - докторант, к.б.н.</p>
        <p>Аманова Г.И. - аспирант</p>
        <p>Ризаев Д.М. - аспирант</p>
        <p>Қўчқоров К.Ч. - стажер исследователь</p>
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3>Монографии</h3>
    <ol type="1">
        <li> Шеримбетов С.Г. Atriplex pratovii Sukhor. (биогеография, экология, молекуляр-филогения). Монография. ЎзР ФА
            “Фан” нашриёти: Тошкент, 2019. 104 б.k</li>
        <li> Духовный В., Стулина Г., Эшчанов О., Кенжабаев Ш., Заитов Ш., Рузиев И., Курбанова К., Ганиев М., Идирисов
            К., Шеримбетов С., Aбдирахимова С., Есенбаев Г., Коженкова И., Норкулова М., Лёу Ф. Мониторинг Осушенного
            Дна Аральского Моря. Совместный проект ПРООН и ЮНЕСКО. 2020. С.256k</li>
        <li> Dukhovny V., Stulina G., Eshchanov O., Kenjabaev Sh., Zaitov Sh., Ruziev I., Kurbanova K., Ganiev M.,
            Idirisov K., Sherimbetov S., Abdirakhimova S., Esenbaev G., Kojenkova I., Norkulova M., Löw F. Monitoring
            the Dried Seabed of The Aral Sea. Joint UNDP and UNESCO Programme. 2021. P. 242.k</li>
        <li> Шеримбетов С.Г. Жанубий Оролқум ўсимликлари (флора, систематика, геоботаника, география, экология ва
            муҳофаза қилиш). Монография. Тошкент, 2023.</li>
    </ol>

    <h3>Учебники и учебные пособия</h3>
    <ol type="1">
        <li> Sherimbetov S.G., Eshmurodova N.Sh., Otaboyev Sh.Т., Xatamov А.А., Sherimbetov A.G. Ekologik ta'lim va
            tarbiya //Oliy o'quv yurtlari talabalari uchun o'quv qo'llanma. “Adabiyot uchqumlari” nashriyoti: Toshkent,
            2018. 200 b.</li>
        <li> Xo'jamshukurov N.A., Sherimbetov S.G., Nazarov K.K., Ishimov U.J., Mirzayeva D.A., Fermentlar ingeneriyasi
            //Oliy o'quv yurtlari talabalari uchun darslik. “Tafakkur qanoti” nashriyoti: Toshkent, 2018. 174 b.</li>
        <li> Pratov O'.P., Sherimbetov S.G., Sherimbetov A.G., Matniyazova H.H., Narimanov A.A. Botanika. Akademik
            litsey o'quvchilari uchun o'quv qo'llanma. – Toshkent: «Navro'z» nashriyoti, 2020. – 248 bet.</li>
        <li> Абдулов И.А., Халбекова Х.У. Ҳужайра биологияси. Дарслик: “Донишманд зиёси”. Тошкент, 2021. 203 б.</li>
        <li> Sherimbetov S.G., Tolipova J.O., Umaralieva M.T., Ibodova M.N. Biologiya. Biologiya fani chuqurlashtirilgan
            tartibda o‘qitiladigan maktablar 7-sinf o‘quvchilari uchun o‘quv qo‘llanma. – Toshkent, 2021. – 242 bet.
        </li>
    </ol>

    <h3>Статьи, опубликованные в журналах, индексируемых в базе данных Web of Science Core Collection или Scopus</h3>
    <ol type="1">
        <li> Abdirakhimova S.Sh., Sherimbetov S.G. Lycium ruthenicum Murr. dated in the southern Aral and Aral sea
            regions. The amount of chemical elements contained in the vegetative and generative organs of the plant //
            Journal of Critical Reviews. Vol 7, Issue 9, 2020. Pp. 153-156. (Scopus).</li>
        <li> Amanova G.I., Eshmuradova N.Sh., Khalbekova Kh.U., Sherimbetov S.G., Nazirova E.R. // Biological active
            substances in the plant Nitraria schoberi, distributed in the dry Southern regions of the Aral Sea //
            Journal of Natural Remedies. ISSN: 0972-5547. Vol 21, Issue 6, 2020. Pp.154-162. (Scopus).</li>
        <li> Sherimbetov S., Khalbekova Kh., Matchanova D., Nurmuxamedova V. Molecular phylogeny of the endemic species
            Atriplex pratovii Sukhor. (Chenopodiaceae). Plant Cell Biotechnology and Molecular Biology. ISSN: 0972-2025.
            21(71&72). 2020. Pp. 41-49. (Scopus).</li>
        <li> Maria N. Lomonosova, Janna A. Akopian, Orzimat T. Turginov, Ridha El Mokni & Tatyana V. An’kova, Xalbekova
            X.U Study of chromosome numbers and karyotypes of plants. A Taxonomic revision, Phylogeny, Karyosystematics
            and Geography TAXON 69 (6) Scopus journal. December 2020. – P. 1394–1405.</li>
        <li> Yuldasheva S., Sherimbetov S.G., Tulaganov A., Khaydarova K. Detection of heavy metals and pesticides in
            the raw materials of Araxacum Officinale Wigg and Taraxacum Kok-saghyz Rodin plants. E3S Web of Conferences,
            2021. Volume 244, 02035. Pp. 1-9.</li>
        <li> Nail J. Sagdiev, Jamolitdin F. Ziyavitdinov, Nodir Sh. Berdiev, Soyib S. Bozorov, Tohir A. Khudoyberdiev,
            Shukhratjon S. Olimjonov, Natalya L. Vypova, Akmal M. Asrorov. Low abundant bovine colostrum proteins in
            combination with amaranth oil reveal topical analgesic activity. Nova Biotechnol Chim (2022) 21(1): e1246
            DOI: 10.36547/nbc.1246</li>
        <li> R.N.Rakhimov, N.G.Abdulladjanova, J.F.Ziyavitdinov, Sh.O.Kadirova, A.Dj.Kurbanova. CHEMICAL COMPOSITION OF
            EUPHORBIA SEQUIERIANA NECK. International Journal of Education, Social Science & Humanities. Finland
            Academic Research Science Publishers. 2023. Volume-11. 931-940.</li>
        <li> Amanova G. I., Abdirahimova S. Sh., Saitova A. Q., Ziavitdinov J.F.., Sherimbetov S. G., Comparative
            analysis of chemical elements contained in various organs of the nitrebush (Nitraria schoberi L.) growing in
            the Aralkum Areas//Eur. Chem. Bull. 2023, 12 (S3), 4280 – 4290</li>
        <li> Khulkar Khalbekova, Jamoliddin Ziyavitdinov. Biotechnological Assessment of Suaeda arcuate under in Vitro
            Conditions. Advances in Bioscience and Biotechnology, 2023, 14, 359-367 <a
                href="https://www.scirp.org/journal/abb">ссылка</a></li>
        <li> K.M. Kuldoshova, A.A. Akhunov, N.R. Khashimova and J.F. Ziyavitdinov. Eff ects of exogenous abscisic acid
            on antioxidant system of salt tolerant and salt sensitive cotton cultivars. Hellenic Plant Protection
            Journal 16: 40-49, 2023. DOI 10.2478/hppj-2023-0006</li>
    </ol>

    <h3>Статьи в зарубежных журналах с импакт фактором</h3>
    <ol type="1">
        <li> E.V. Nikitina, Kh.U. Khalbekova, F.I. Karimov, R. X. Esemuratova. Strategies to produce selectable
            marker-free high plants. International Journal of Bio-Science and Bio-Technology (IJBSBT). ISSN: 2233-7849.
            Vol-11-Issue-9-September-2019. – P. 144-156. IF-6.</li>
        <li> E.V. Nikitina, K. Tojibaev, Kh.U. Khalbekova. Effect of nutrient media and phytohormones on in vitro
            culture initiation of Juno Tratt. species. International Journal of Engineering and Advanced Technology
            (IJEAT) Scopus journal. ISSN: 2249 – 8958, Volume-9 Issue-1, October 2019. – P. 4840-4844. IF-5.97.
            Retrieval Number: DOI: 10.35940/ijeat.A2939109119A2939.109119/2019 ©BEIESP</li>
        <li> Sherimbetov S.G., Samatov I.M. The Quantity of Free Amino Acids in the Agricultural Crops Cultivated in the
            Northern Areas of Surkhandarya Region and Impact of Fluorides on them // International Journal of Science
            and Research (IJSR). Volume 8 Issue 4, April 2019. Pp. 1913-1916. ResearchGate Impact Factor: 0.28.</li>
        <li> Sherimbetov S.G., Sagdiev X.T., Eshmurodova N.Sh. Study on Some Biomorphological Peculiarities of
            Alternaria Tenuissima (Kunze) Fungi Isolated from Tamarix Hispida Willd. // International Journal of Science
            and Research (IJSR). Volume 8 Issue 5, May 2019. Pp. 1732-1734. ResearchGate Impact Factor: 0.28.</li>
        <li> Sherimbetov S.G., Samatov I.M. The Quantity of Free Amino Acids in the Agricultural Crops Cultivated in the
            Northern Areas of Surkhandarya Region and Impact of Fluorides on them // International Journal of Science
            and Research (IJSR). Volume 8 Issue 4, April 2019. Pp. 1913-1916. (ResearchGate Impact Factor: 0.28).</li>
        <li> Sherimbetov S.G., Sagdiev X.T., Eshmurodova N.Sh. Study on Some Biomorphological Peculiarities of
            Alternaria Tenuissima (Kunze) Fungi Isolated from Tamarix Hispida Willd. // International Journal of Science
            and Research (IJSR). Volume 8 Issue 5, May 2019. Pp. 1732-1734. (ResearchGate Impact Factor: 0.28).</li>
        <li> Amanova G.I., Khalbekova Kh. U., Nazirova E. Ra., Sherimbetov S. G. Biological active substances in the
            plant Nitraria schoberi, distributed in the dry southern regions of the Aral Sea. JNROnline Journal ISSN:
            2320-3358 (e) ISSN: 0972-5547(p). Journal of Natural Remedies Vol. 21, No. 6, (2020).</li>
        <li> Kaypov K.P., Sherimbetov S.G., Abdraximova S.Sh. Classification of the Kyzyl Kum Plants around Nukus City
            //International Journal of Science and Research. - India. - Volume 9. - Issue 10. 2020. - Р. 299-303.
            (ResearchGate Impact Factor – 0,28).</li>
        <li> Amanova G. I., Eshmuradova N.Sh, Toshtemirova M.J . Analysis of free amino acids, vitamins, and
            carbohydrates in the stems, leaves and fruits of Nitraria schoberi //Journal of Critical Reviews ISSN-
            2394-5125 VOL 7, ISSUE 10, 2020.</li>
        <li> Yuldasheva S.Sh., Sherimbetov S.G., Khaydarova Kh.N., Atabaev M.M. Comparative study of seed germination of
            Taraxacum koksaghуz Rodin and Taraxacum officinalе Wigg. plants in laboratory condition. International
            Journal of Agriculture, Environment and Bioresearch. 2021, Vol. 5. #5. Pp. 236-248 <a
                href="https://doi.org/10.35410/IJAEB.2020.5568">ссылка</a>
            (Journal impact factor IF=4.083; DIIRJ-Citefactor, IF=0,26).</li>
        <li> S. Sherimbetov and H. Khalbekova. Taxonomical and chemical elements ecological groups in plants of the Aral
            Sea// Clay research. Vol.4. №1. pp. 12-18. 2021.</li>
        <li> Khalbekova Kh., Nikitina E. Biochemical processes of Climacoptera intricate, Suaeda altissima, Atriplex
            aucheri under salt conditions. The scientific heritage. № 110 (110) (2023). P. 4-9. (РИНЦ, ResearchGate).
        </li>
    </ol>

    <h3>Журнальные статьи, индексируемые в базе данных РИНЦ</h3>
    <ol type="1">
        <li> Седун Е.А., Абдирахимова С.Ш., Зубарев А.В., Спиридович Е.В., Решетников В.Н., Шеримбетов С.Г., Назирова
            Э.Р. Особенности прорастания семян и развития проростков дерезы русской (Lycium ruthenicum Murr.) в
            лабораторных условиях и в культуре in vitro // Proceedings of the National Academy of Sciences of Belarus.
            Biological series. 2021. Vol. 66. # 2. Pp. 176–185.</li>
    </ol>

    <h3>Статьи в местных журналах</h3>
    <ol type="1">
        <li> Абдираҳимова С.Ш., Шеримбетов С.Г., Ишимов У.Ж., Мирзаева Л.А., Саидалиев Қ.С., Қурбоналиева З.А. Lycium
            ruthenicum (Salonaceae) ўсимлиги таркибидаги умумий оқсиллар ва унинг бактерияларга қарши хусусияти // ЎзМУ
            хабарлари. №3/1. Табиий фанлар. 2018. Б. 10-13.</li>
        <li> Шеримбетов А.Г., Омонов Б.А., Шеримбетов С.Г. Изучение некоторых биоморфологических особенностей грибов
            Alternaria tenuissima (Kunze) Wiltshire, выделенных из растений Tamarix hispida Willd. // ЎзМУ хабарлари.
            №3/1. Табиий фанлар. 2018. Б. 306-308.</li>
        <li> Абдираҳимова С.Ш., Шеримбетов С.Г., Холбекова Х., Аманова Г., Матчанова Д., Шаджанова Г. Atriplex pratovii
            ўсимлиги rbcl генининг нуклеотидлар кетма-кетлиги // ЎзМУ хабарлари. №3/2 Табиий фанлар. 2018. Б. 5-10.</li>
        <li> Абдираҳимова С.Ш., Ишимов У.Ж., Шеримбетов С.Г. Лекарственные свойства растения Lycuim rethenicum Murr. //
            Вестник Каракалпакского отделения Академии наук Республики Узбекистан. 2018. №3. С. 55-58.</li>
        <li> Шеримбетов С.Г., Саматов И.М. Сурхондарё вилояти шимолий туманлари қишлоқ хўжалик ўсимликларига ташқи муҳит
            омилларининг таъсири // Ўзбекистон аграр фани хабарномаси. Тошкент, 2018. №4 (74). Б. 151-153.</li>
        <li> Никитина Е.В., Каримов Ф.И., Пулатов С.О. Халбекова Х.У Использование молекулярных маркеров в изучении
            филогении растений. Узб.биол.журн. № 4. 2019. – С. 29-33.</li>
        <li> Абдираҳимова С.Ш., Шеримбетов С.Г., Холбекова Х., Аманова Г., Матчанова Д., Шаджанова Г. Atriplex pratovii
            ўсимлиги rbcl генининг нуклеотидлар кетма-кетлиги. // ЎзМУ Хабарлари №3/2 Табиий фанлар, 2018 й. Б.4-9</li>
        <li> Шеримбетов С.Г., Саматов И.М. Сурхондарё вилояти Сариосиё тумани қишлоқ хўжалиги экинлари таркибидаги Р
            витамини миқдорига фторли бирикмаларнинг таъсири // Ekologiya xabarnomasi. Тошкент, 2019. № 4 (216). Б.
            20-21.</li>
        <li> Саматов И.М., Шеримбетов С.Г. Сурхандарё вилояти шимолий туманлари қишлоқ хўжалиги экинларига ташқи муҳит
            омилларининг таъсири // Agro kimyo himoya va o'simliklar karantini. Илмий-амалий журнал. 2019. № 2. Б.
            24-25.</li>
        <li> Бердиев Н.Ш., Зиявитдинов Ж.Ф., Фазлиддинов Ш.Ж., Саъдуллаев Ш.Т., Шеримбетов С.Г. Биодизель –
            альтернативный источник энергии // Научный журнал «Universum: Химия и биология». № 6 (60) июнь, 2019. С.
            21-26.</li>
        <li> Шеримбетов С.Г., Саматов И.М. Влияние марганца на рост и развитие растений под влиянием фтористых
            соединений // Вестник Каракалпакского отделения Академии наук Республики Узбекистан. Тошкент, 2019. №3. С.
            68-72</li>
        <li> Кахорова К.А., Хашимова Г.Я., Шеримбетов С.Г., Хашимова З.С. Изучение цитотоксической активности экстрактов
            растений с высохшего дна Аральского моря // Вестник Каракалпакского отделения Академии наук Республики
            Узбекистан. 2019. - №3. С. 54-57.</li>
        <li> Аманова Г.И., Шеримбетов С.Г., Абдурахимова C.Ш., Ахмеджанов Г.Г. Неъматова М. Орол денгизининг қуриган
            жанубий ҳудудларида тарқалган Nitraria schoberi ўсимлигининг элементлар миқдори // O‘zbekiston Milliy
            universiteti xabarlari. Biologiya. 2019, № 3/1. 3-9 б.</li>
        <li> Шеримбетов С.Г., Абдираҳимова С., Эшмуродова Н.Ш., Назаров К.К.,Аманова Г.И. Оролқум ҳудудида тарқалган
            Lycuim rethenicum Murr. (Salonaceae) ўсимлигининг кимёвий таркиби ва биологиу ҳусусиятлари. // ЎзМУ
            Хабарлари №3/1 Табиий фанлар, 2019 й. Б.61-67</li>
        <li> Халбекова Х.У., Шеримбетов С.Г. Жанубий Оролқумда тарқалган Salsola туркуми айрим турларининг кимёвий
            элементлар таҳлили. Доклады АНРУз. – Ташкент, 2020. – № 5. – С. 76-80.</li>
        <li> Аманова Г.И., Шеримбетов С.Г. Nitraria schoberi ўсимлигининг эркин аминокислоталар таркиби. //Журнал
            «Доклады Академии наук Республики Узбекистан» №1. 2020 йил. Б 64-68.</li>
        <li> Аманова Г.И., Эшмуродова Н.Ш. Содержание углеводов в растении Nitraria schoberi. // Вестник Каракалпакского
            отделения Академии наук Республики Узбекистан. №4. 2020 йил. Б. 53-55.</li>
        <li> Аманова Г.И., Х.А.Абдуллаев Водорастворимые витамины вегетативных и генеративных органов растения Nitraria
            schoberi. //Узбекский биологический журнал» Академии наук Республики Узбекистан. №5. 2020 йил. Б. 17-20.
        </li>
        <li> Ризаев Д.М., Шеримбетов С.Г., Назирова И.Р. // Чўл ҳудудида ўсувчи ксерофит ўсимликлардаги абиотик
            стрессларга жавоб берувчи генларнинг ўрганилиши хусусида // Тошкент 2020 й. 5(83)191 -193 б.</li>
        <li> Аманова Г.И., Тожибоев Ғ., Шеримбетов С.Г. Оролқум ҳудудларида тарқалган Nitraria schoberi L. ўсимлиги поя
            ва барглари таркибидаги эркин аминокислоталар миқдорининг қиёсий таҳлили // ЎзМУ хабарлари. №3/1. Табиий
            фанлар. 2021йил. Б.27-29.</li>
        <li> Имомова Д.А., Шеримбетов С.Г., Данилова Е.А. Айдар-Арнасой кўллар тизими айрим сув намуналари кимёвий
            элементлар таркиби // ЎзР ФА Маърузалари. Тошкент, 2021. №1. Б. 47-50.</li>
        <li> Имомова Д.А., Шеримбетов С.Г., Данилова Е.А. Айдар-Арнасой кўллар тизими атрофи тупроқларининг макро-ва
            микроэлементлар миқдори // Ўзбекистон Аграр фани хабарномаси. Тошкент, 2021. №1 (85). Б. 119-121.
        <li> Халбекова Х.У., Шеримбетов С.Г. Влияние солей на прорастание семян лекарственного вида Salicornia europaea
            L. //Узбекский биологический журнал. Ташкент, 2021. №1. С. 29-34.</li>
        <li> Юлдашева С.Ш., Шеримбетов С.Г., Тулаганов А.А. Taraxacum officinale Wigg va Taraxacum kok-saghyz Rodin
            хом-ашёси таркибида учраши мумкин бўлган оғир металларни замонавий физик-кимёвий тахлил усуллари билан
            аниқлаш //Ўзбекистон фармацевтика хабарномаси. №4 2021. Б.50-53.</li>
        <li> Шеримбетов А., Шеримбетов С.Г., Рузметов Д., Адилов Б. Орол денгизининг қуриган қисмида янгидан барпо
            этилган ўрмон ва яйлов ўсимликларини касалликлардан микробиологик таҳлиллари // ЎзМУ хабарлари. №3/1/1.
            Табиий фанлар. 2021. Б. 134-137.</li>
        <li> Марданов Р., Абдуллаева М., Шеримбетов С.Г. Атмосфера ифлосланиши натижасида буғдой дони таркибидаги
            аминокислоталар ва витаминлар миқдорининг ўзгариши // ЎзМУ хабарлари. №3/1/1. Табиий фанлар. 2021.
        <li> Ризаев Д.М., Халбекова Х.У., Аманова Г.И., Шеримбетов С.Г. Оптимизация метода изучении генов matK и rbcL
            некоторых пустынных растений // Узбекский биологический журнал. Ташкент, 2021.</li>
        <li> Ризаев Д. М., Шеримбетов С. Г., Адилов Б. Ш. Chenopodiaceae оиласига мансуб баъзи чўл ўсимликларидаги
            қурғоқчилик стрессига жавоб берувчи DREB2A генини полимераза занжир реакцияси усули ёрдамида ўрганиш //
            Ўзбекистон Республикаси Фанлар академияси Маърузалари. 2021. 5 сон. С. 53-57.</li>
        <li> Ризаев Д.М., Адилов Б., Шеримбетов С.Г. Chenopodiaceae оиласига мансуб айрим ўсимликлардаги қурғоқчилик
            стресси транскрипция омили NAC1 генини полимераза занжир реакцияси усули ёрдамида тадқиқ қилиш натижалари //
            ЎзМУ Хабарлари № 31/1. 2022 й. Б. 130-133</li>
        <li> Ризаев Д.М., Халбекова Х.У., Аманова Г.И., Шеримбетов С.Г. Оптимизация метода полимеразной ценной рекции
            генов rbcL и matK некотрых пустынных растений // Узбекский биологический журнал №1. 2022 г. С. 72-74</li>
        <li> Абдираҳимова С.Ш., Миразизов Б., Аманова Г.И., Қурбонов К.Ч., Шеримбетов С.Г. Истиқболли ўсимликлaрни in
            vitro шароитида микроклонaл кўпайтириш ва улардан биотехнологик ишлаб чиқаришда фойдаланиш масалалари //
            Агро кимё ҳимоя ва ўсимликлар карантини. Илмий амалий журнал №2. 2022 й. Б. 141-146</li>
        <li> Гайибов У., Халбекова Х., Аманова Г., Абдураҳимова С., Шеримбетов С., Абдулладжанова Н. Ўзбекистон чўл
            ҳудудларининг истиқболли ўсимлик турларидан ажратиб олинган умумий полифенолларнинг антиоксидант
            фаоллигининг бирламчи натижалари. // ЎзМУ Хабарлари № 31/1. 2022 й. Б. 44-47</li>
        <li> Абдуллаева Г.Т., Эшмуродова Н.Ш., Абдирахимова С.Ш, Ризаев Д.М., Матчанова Д., Зохидова Ш. Г., Халбекова
            Х.У., Аманова Г.И., Шеримбетов С.Г. Биотехнологик жараёнлар асосида ўсимлик моддаларининг дориворлик
            хусусиятлари таҳлили// ЎзМУ хабарлари. №3/2. Табиий фанлар. 2022 йил. Б.15-18.</li>
        <li> Ризаев Д.М., Матчанова Д., Адилов Б., Шеримбетов С.Г. Изучение характеристики солеустойчивости гена BADH у
            видов рода Atriplex, произрастающих на высохшем дне Аральского Моря// ЎзМУ хабарлари. №3/2. Табиий фанлар.
            2022 йил. Б.103-105.</li>
        <li> Халбекова Х.У., Холмуратов Э.Г., Насырова Г.Б., Сабирова М.Ш., Шеримбетов С.Г. Введение в культуру in vitro
            и получение первичных эксплантов Climacoptera longistylosa для микроразмножения// Узб. биол. журн. –
            Ташкент, 2022. – № 2. – С. 49-53.</li>
        <li> Д. М. Ризаев, Ж. Ф. Зиявитдинов, С. Г. Шеримбетов, Б. Ш. Адилов, С. К. Курганов // Фактор транскрипции
            HsDREB2A гипергалофита Halocnemum strobilaceum произрастающего в приаралье // Узбекский биологический журнал
            №3. 2023 г.</li>
        <li> Халбекова Х.У. Выращивание перспективных галофитов для озленения пустыни Арала. Вестник Хорезмской академии
            Маъмуна//Хива, 2023. 4/1. С. 92-95.</li>
        <li> Халбекова Х.У. Полиморфизм семян видов рода Atriplex l. - шанс выживания в условиях пустынь// Вестник НУУз.
            Тошкент, 2023. 3/1. С. 194-197.</li>
    </ol>

    <h3>Регистрации в международной базе данных (NCBI)</h3>
    <ol type="1">
        <li> Sherimbetov S., Davletchurin D., Mukhamedov R. Atriplex pratovii chromoplast partial rbcL gene for code for
            the large subunit of ribulose 1, 5 bisphosphate carboxylase/oxygenase. NCBI GenBank: LT604460.1</li>
        <li> Sherimbetov S., Davletchurin D., Mukhamedov R. Code for the large subunit of ribulose 1, 5 bisphosphate
            carboxylase/oxygenase, partial (chromoplast) [Atriplex pratovii]. NCBI GenBank: SCB66077.1</li>
        <li> Sherimbetov S., Mukhamedov R. Atriplex pratovii mitochondrial partial rcbL gene, specimen voucher living
            specimen. NCBI GenBank: LT628367.1</li>
        <li> Sherimbetov S., Mukhamedov R. rcbL, partial (mitochondrion) [Atriplex pratovii]. NCBI GenBank: SCZ84109.1
        <li> Sherimbetov S., Davletchurin D., Mukhamedov R. Atriplex pratovii chloroplast psbT gene for photosystem II
            protein T. NCBI GenBank: LT604459.1</li>
        <li> Sherimbetov S., Davletchurin D., Mukhamedov R. Photosystem II protein T (chloroplast) [Atriplex pratovii].
            NCBI GenBank: SCB66076.1</li>
        <li> Sherimbetov S., Davletchurin D., Adilov B., Mukhamedov R. Atriplex pratovii partial rbcL gene for large
            subunit of ribulose 1, 5 bisphosphate carboxylase/oxygenase. NCBI GenBank: LT604458.1</li>
        <li> Sherimbetov S., Davletchurin D., Adilov B., Mukhamedov R. large subunit of ribulose 1, 5 bisphosphate
            carboxylase/oxygenase, partial [Atriplex pratovii]. NCBI GenBank: SCB66075.1</li>
        <li> Rizayev,D.M., Sherimbetov,S.G., Adilov,B., Kurganov,S. and Ziyovutdinov,J.F. Halocnemum strobilaceum DREB2A
            (DREB2A) mRNA, partial cds. GenBank: OQ373010.1 <a
                href="https://www.ncbi.nlm.nih.gov/nuccore/OQ373010">ссылка</a></li>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
    <h3>Проекты</h3>
    <h4>№ М-ФА-2020-2 «Разработка усовершенствованной технологии получения субстанции Тимоптин и новой лекарственной
        формы»</h4>
    <p>Масштабирована технология субстанции и лекарственной формы Тимоптина. В результате производство субстанции
        увеличилось в 10 раз. Из тимуса каракольских ягнят получены 3 промышленные партии субстанции Тимоптин. Показано
        соответствия качества полученной субстанции действующему стандарту (ФС 42 Уз-0286-2017).</p>
    <p>С помощью методов ЮССХ и хромато-масс-спектрометрии определена первичная структура основных пептидов субстанции
        тимоптина: α1-тимозин, β4-тимозин и тимопоэтин.</p>
    <p>Проведен трансфер технологии препарата «Тимоптин для инъекций» в ООО «Jurabek Laboratories Ltd» и получен
        сертификат № ДВ/М 04068/03/22 на производство под торговой маркой «ТАЙМУН».</p>
    <p>Совместно с ООО «“CHINA-UZBEKISTAN MEDICINE TECHNICAL PARK”» разработана новая лекарственная форма препарата
        «Тимоптин таблетки, 0,1 мг». Изучены фармако-токсикологические свойства сублингвальной лекарственной формы
        «Тимоптин таблетки 0,1 мг». Показано, что таблетки Тимоптин биоэквивалентны препарату Таймун и превосходят
        Тактивин по иммуномодулирующим свойствам. Клинические испытания препарата продолжаются.</p>

    <h4>№ AL-632204150 «Формирование современного списка флоры территории, создание цифровой базы данных и генофондных
        коллекций на основе углубленных исследований растительного покрова осушённого дна Аральского моря»</h4>
    <p>В составе новообразованной флоры в осушённом дне Аральского моря зарегистрировано 278 видов, относящихся к 39
        семействам и 156 родам. Из них 58 видов являются новыми для исследуемой территории, а Allium cesium Schrenk –
        новым для флоры Каракалпакстана. В результате оценки и анализа современного состояния около 50 растительных
        сообществ установлено, что группа Capparis spinosa–Artemisia halophila обнаружено впервые.</p>
    <p>В результате ПЦР-амплификации баркод гена растения Haloxylon ammodendron установлено, что в растении присутствуют
        680 пар нуклеотидов для гена rbcL и 710 пар нуклеотидов для matK.</p>
    <p>В гербарием фонде КГУ создана коллекция Аралкума, состоящая из 800 образцов 110 видов, относящихся к 31
        семейству, 98 родам, а база данных биоматериалов лекарственных растений Института биоорганической химии
        пополнилась 64 видами.</p>
    <p>В северо-западном и южном районах Арала определены точки распространения некоторых видов лекарственных и
        пескоукрепляющих фитомелиорантных растений, богатых биологически активными веществами, и создана карта GAT.</p>

    <h4>№ А-ФА-2021-539 «На основе клеточной технологии создание новых форм растений, адаптированных к экологическим
        условиям региона Южного Аралкума»</h4>
    <p>Из перспективных видов растений, распространенных в засушливых районах Аральского моря, были собраны
        биоматериалы, выделены их РНК и создан лабораторный банк генов.</p>
    <p>Впервые в лабораторных условиях растения Lycium ruthenicum и Nitriaria schoberi введены в in vitro культуру и
        анализировали их ростовые характеристики путем добавления в питательную среду хлоридных солей в различных
        концентрациях.</p>
    <p>Впервые для растений Lycium ruthenicum и Nitriaria schoberi разработаны специфические праймеры для проведения ПЦР
        генов WRKY, DREB, NAC и Na+/H+, реагирующих на засоленный стресс с использованием различных программ
        биоинформатики и базы данных NCBI.</p>
    <p>Определены количества 31 химического элемента в пробах почв из 11 районов Южного Аралкума.</p>

    <h4>№ AL -632204135 «Посадка и размножение перспективных галофитов нетрадиционных культур, устойчивых к засолению и
        засухе в Приаралия»</h4>
    <p>Галофитные растения высаживали на площади 1,5 га в контрольном и опытном вариантах в точке «0» - N 44.131765, E
        58.793773 осушенного дна Аральского моря, принадлежащего Мойнакскому району Республики Каракалпакстан.</p>
    <p>По результатам исследований впервые прошли полные фенологические стадии своего развития галофитные виды
        Climacoptera lanata, C. longistylosa, C. intricata, Suaeda altissima и Atriplex ausheri. Виды растений Haloxylon
        aphyllum и Yucca размножаются рассадным способом и адаптированы к данной местности. Подтверждено, что они
        полностью прошли вегетационные процессы и служат перспективными галофитами при формировании исходных
        растительных насаждений.</p>
    <p>На основании химического анализа установлено, что при адаптации растений осуществляется сильный биосинтез
        углеводов и витаминов, в частности, высокое содержание аминокислот Аспарагин, Лейцин, Гистидин, Аргинин
        обеспечивает устойчивость растений к тяжелым стрессовым условиям.</p>
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