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
    <h2>Сабзавотлар ва ўсимликлар ҳужайра технологияси лабораторияси</h2>
    <h3>Мудир</h3>
    <h2>кимё фанлари доктори, профессор Зиявитдинов Жамолитдин Фазлитдинович</h2>

    <h3>Лабораториянинг тарихи</h3>
    <p>Лаборатория Институтдаги энг ёш лабораториялардан бири бўлиб, у 2018 йилда, институт таркибидаги “Ҳужайра
        технологияси лабораторияси” асосида ташкил этилган.</p>
    <p>Лабораториянинг асосий илмий йўналиши Стрессга чидамли истиқболли ўсимликлардаги метаболитик йўлларининг
        молекуляр-биокимёвий механизмларини тадқиқ қилиш, стрессга чидамлиликнинг молекуляр биокимёвий хусусиятларини
        аниқлаш, уларнинг генетик материаллари банкини яратиш, истиқболли ўсимликларни in vitro культурасига киритиш ва
        стессларга адаптация қилишдан иборат. </p>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Тадқиқотлар</h3>
    <ul style="list-style-type:none;">
        <li> Орол денгизининг қуриган ҳудудларида тарқалган ўсимликларнинг тузга чидамлилик генларини тавсифлаш; </li>
        <li> Орол денгизининг қуриган туби ўсимлик қопламини чуқур тадқиқ этиш асосида ҳудуд флорасининг замонавий
            рўйхатини шакллантириш, рақамли маълумотлар базаси ва генофонд коллекцияларини яратиш.</li>
    </ul>
    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
    <h3>Олинган натижалар</h3>
    <p>Жанубий Оролқум ҳудудида 3 бўлим, 4 аждод (синф), 10 аждодча (синфча), 18 катта қабила, 30 қабила, 41 оила, 124
        туркумга мансуб 220 юксак ўсимлик турлари ўсиши аниқланган. Шундан 130 тур илк бор аниқланган; ҳудудда 5 та ноёб
        тур – Rosa majalis, Tulipa biflora, T. buhseana, Crambe edentula, Artemisia austriaca ва битта эндем – Atriplex
        pratovii ўсимлик учраши қайд этилган. Жанубий Оролқум флорасининг Эрон-Турон флораси замирида пайдо бўлганлиги
        исботланган.</p>
    <p>Жанубий Оролқум худудига кўплаб экспедициялар уюштирилган ва юзлаб эндемик ўсимликлар коллекциялари йиғилган. 150
        та тупроқ кесмалари амалга оширилиб турли чуқурликларда 1000 дан ортиқ тупроқ намуналари олинган. Худудларнинг
        тупрок қатламлари, уларда ўсадиган ўсимлик турлари ва оилалари аниқланган. 50 дан ортиқ тупроқ кесмаларидан
        олинган 750 та тупроқ намуналарининг механик таркиби, рН мухити, шўрланиш тури ва даражаси, туз таркиби, гумус
        билан таъминланганлиги аниқланган.</p>
    <p>Илк бор Atriplex pratovii ўсимлигининг ДНК баркоди учун маркер генларининг қисмлари секвенс қилинган: rbcL
        генининг 488, 537 ва 811 жуфт нуклеотиддан, matK генининг 283, 403 ва 804 жуфт нуклеотиддан, psbB-psbH
        регионининг 577 жуфт нуклеотиддан иборат кетма-кетлиги аниқланган. Илк бор Atriplex pratovii тури Atriplex
        туркуми бошқа турларидан фарқ қилиши молекуляр-генетик жиҳатдан исботланган. Илк бор Atriplex pratovii
        ўсимлигининг rbcL, matK генлари бўйича турлараро ва туркумлараро молекуляр филогенияси ишлаб чиқилган. Salsola
        micranthera ва Climacoptera aralensis ўсимлик турларининг рДНК ITS қисми 18s-5.8s регионлари полимераза занжир
        реакцияси илк бор амалга оширилган: мазкур регион 710 жуфт нуклеотидни ташкил қилиши аниқланган. Halocnemum
        strobilaceum, Atriplex pratovii, Atriplex tatarica, Climocoptera aralensis, Haloxylon aphyllum, Haraninova
        ulicina ўсимликларини Жанубий Оролқум популяцияларининг абиотик (қирғоқчилик ва шўрланиш) стрессларга жавоб
        берувчи NAC, BADH ва DREB генларининг транскрипция омиллари ўрганилган. Олинган натижалар National Center for
        Biotechnology Information <a href="http://www.ncbi.nlm.nih.gov">havola</a> (GenBank: OQ373010, GenBank:
        OR371504, GenBank: OR188086.1).</p>
    <p>Шу худудда тарқалган 6 турдаги T.hispida, S.dendriedes, A.tatarica, A.pratovii, N.schoberi, L.ruthenicum
        ўсимликлари таркибидаги оқсил, эркин ва боғланган аминокислоталар миқдори, С, РР ва В группа витаминлари (В1,
        В2, В6 ва В9), углеводлари ва полифенолларининг таркиби аниқланган. Ўсиликлардан ажратиб олинган полифеноллар
        таркибида вирусларга қарши фаолликка эга бўлган моддалар мавжудлиги аниқланган. </p>
    <p>Илк бор L.ruthenicum ўсимлигининг Оролқум ва Устюрт популяциялари ўсадиган тупроқ намуналари ва илдиз
        тизиминининг элемент таркиблари қиёсий тадқиқ қилинган. Оролқум популяциясининг илдизи таркибида ош тузи ва
        микроэлементлар миқдори Устюрт популяциясига нисбатан 10 баробар юқори эканлиги кўрсатилдиган. </p>
    <p>Илк бор Haloxylon aphyllum, Lycium ruthenicum, Nitraria schoberi, Calligonum aphyllum, Atriplex tatarica,
        Atriplex pratovi, Salsola dendriedes ва Halogeton glomeratus ўсимликлари in vitro шароитида культурага
        киритилган. Ниҳолларни in vitro шароитида кўпайтириш ва уларни қайта культуралашнинг самарали усуллари ишлаб
        чиқилган. Оролқум худуд тупроқлари таркибидан ажратилган тузларни озиқа муҳитига қушиб In vitro шароитида
        ўсимликларининг унувчанлиги аниқланган ва бирламчи ҳамда иккиламчи эксплантатлар олинган. Адаптацияланган
        ўсимликларнинг биокимёвий таркиблари, осмолитлар ва фитогормонлар миқдорининг ўзгариш динамикаси аниқланган.</p>
    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `
    <h3>Ютуқлар</h3>
    <p>Atriplex pratovii ўсимлигининг rbcL, matK генлари, psbB-psbH региони секвенси бўйича олинган натижалар Европа
        нуклеотид архиви (Буюк Британия, Кембридж) EMBL-EBI маълумотлар базасида LT604458, LT604459, LT604460, LT628367
        ва улар оқсиллари мос равишда SCB66075.1, SCB66076.1, SCB66077.1, SCZ84109.1 ID рақамлари орқали рўйхатдан
        ўтказилган <a href="http://www.ebi.ac.uk">havola</a></p>
    <p>Halocnemum strobilaceum, Atriplex pratovii, Atriplex tatarica, Climocoptera aralensis, Haloxylon aphyllum,
        Haraninova ulicina ўсимликларини Жанубий Оролқум популяцияларининг абиотик (қирғоқчилик ва шўрланиш) стрессларга
        жавоб берувчи NAC, BADH ва DREB генларининг транскрипция омиллари ўрганилган. Олинган натижалар National Center
        for Biotechnology Information <a href="http://www.ncbi.nlm.nih.gov">havola</a> баъзасидан рўйхатдан ўтказилган.
        (GenBank ID: OQ373010, GenBank ID: OR371504, GenBank ID:OR188086.1).</p>
    <p>Оролқумда олиб борилган тадқиқотлар натижаларида янгидан шаклланаётган флора таркибида 39 оила, 156 туркумга оид
        278 тури рўйхатга олиниган. Шундан 58 та турни Қорақалпоғистон флораси учун Allium caesium Schrenk турини янги
        эканлиги аниқланди. ҚДУ гербарий фондида 31 оила, 98 туркумга оид 110 турнинг 800 га яқин намунасидан иборат
        Оролқум коллекцияси ташкил этилди ва Биоорганик кимё институти доривор ўсимлик биоматериаллар базаси 64 тур
        билан тўлдирилди.</p>
    <p>Оролнинг қуриган тубида “0” нуқтанинг тажриба майдонида 1,5 га ҳудудга илк маротаба 15 тур бир ва кўп йиллик
        галофит ўсимликлар уруғлари ва кўчатлик материаллари экилган. Олиб борилган тадқиқотлар натижасида илк маротаба
        бир йиллик хаётий шаклга эга галофитлар Climacoptera lanata, C. longistylosa, C. intricatа, Suaeda altissima ва
        Atriplex auсheri турлари уруғлари ёрдамида тўлиқ фенологик ривожланиш босқичларини амалга оширган. </p>
    <p>“Инъекция учун Тимоптин” технологияси “Jurabek Laboratories Ltd” МЧЖ га трансфер қилинди ва “ТАЙМУН” савдо
        белгиси остида ишлаб чиқариш учун DV/M 04068/03/22 рақамли гувохнома олинди.</p>
    <p>“CHINA-UZBEKISTAN MEDICINE TECHNICAL PARK” MChJ билан препаратининг янги дори шакли “Тимоптин таблеткалар, 0.1
        мг” ишлаб чиқариш учун лицензион шартнома имзоланди. Сублингвал таблеткаларнинг 2 та экспериментал сериялари
        ишлаб чиқарилди.</p>
    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
    <h3>Ходимлар</h3>
    <p>Зиявитдинов Ж.Ф. - лаборатория мудири, к.ф.д. проф. </p>
    <p>Олимжонов Ш.С. - катта илмий ходим, к.ф.н.</p>
    <p>Абдурахимова С.Ш. - катта илмий ходим, к.х.н.</p>
    <p>Холмуратов Э.Г. - катта илмий ходим, б.ф.н</p>
    <p>Насирова Г.Б. - кичик илмий ходим</p>
    <p>Шеримбетова Г.Г. - лаборант</p>
    <p>Ишимов У.Ж. - докторант, к.х.н.</p>
    <p>Халбекова Х.У. - докторант, б.ф.н</p>
    <p>Аманова Г.И. - таянч докторант</p>
    <p>Ризаев Д.М. - таянч докторант</p>
    <p>Қўчқоров К.Ч. - стажер тадқиқотчи</p>
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3>Монография</h3>
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

    <h3>Дарслик ва ўқув қўлланмалар</h3>
    <ol type="1">
        <li> Sherimbetov S.G., Eshmurodova N.Sh., Otaboyev Sh.Т., Xatamov А.А., Sherimbetov A.G. Ekologik talim va
            tarbiya //Oliy oquv yurtlari talabalari uchun o quv qollanma. “Adabiyot uchqumlari” nashriyoti: Toshkent,
            2018. 200 b.</li>
        <li> Xo jamshukurov N.A., Sherimbetov S.G., Nazarov K.K., Ishimov U.J., Mirzayeva D.A., Fermentlar ingeneriyasi
            //Oliy o quv yurtlari talabalari uchun darslik. “Tafakkur qanoti” nashriyoti: Toshkent, 2018. 174 b.</li>
        <li> Pratov O .P., Sherimbetov S.G., Sherimbetov A.G., Matniyazova H.H., Narimanov A.A. Botanika. Akademik
            litsey oquvchilari uchun o quv qo llanma. – Toshkent: «Navro z» nashriyoti, 2020. – 248 bet.</li>
        <li> Абдулов И.А., Халбекова Х.У. Ҳужайра биологияси. Дарслик: “Донишманд зиёси”. Тошкент, 2021. 203 б.</li>
        <li> Sherimbetov S.G., Tolipova J.O., Umaralieva M.T., Ibodova M.N. Biologiya. Biologiya fani chuqurlashtirilgan
            tartibda o‘qitiladigan maktablar 7-sinf o‘quvchilari uchun o‘quv qo‘llanma. – Toshkent, 2021. – 242 bet.
        </li>
    </ol>

    <h3>“Web of Science Core Collection” ёки “Scopus” маълумотлар базасида индексланган нашрларда чоп этилган мақолалар
    </h3>
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
                href="https://www.scirp.org/journal/abb">havola</a></li>
        <li> K.M. Kuldoshova, A.A. Akhunov, N.R. Khashimova and J.F. Ziyavitdinov. Eff ects of exogenous abscisic acid
            on antioxidant system of salt tolerant and salt sensitive cotton cultivars. Hellenic Plant Protection
            Journal 16: 40-49, 2023. DOI 10.2478/hppj-2023-0006</li>
    </ol>

    <h3>Импакт факторга эга халқаро журналлардаги мақолалар</h3>
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
                href="https://doi.org/10.35410/IJAEB.2020.5568">havola</a> (Journal impact factor IF=4.083;
            DIIRJ-Citefactor, IF=0,26).</li>
        <li> S. Sherimbetov and H. Khalbekova. Taxonomical and chemical elements ecological groups in plants of the Aral
            Sea// Clay research. Vol.4. №1. pp. 12-18. 2021.</li>
        <li> Khalbekova Kh., Nikitina E. Biochemical processes of Climacoptera intricate, Suaeda altissima, Atriplex
            aucheri under salt conditions. The scientific heritage. № 110 (110) (2023). P. 4-9. (РИНЦ, ResearchGate).
        </li>
    </ol>

    <h3>РИНЦ маълумотлар базасида индексланган журналлардаги мақолалар</h3>
    <ol type="1">
        <li> Седун Е.А., Абдирахимова С.Ш., Зубарев А.В., Спиридович Е.В., Решетников В.Н., Шеримбетов С.Г., Назирова
            Э.Р. Особенности прорастания семян и развития проростков дерезы русской (Lycium ruthenicum Murr.) в
            лабораторных условиях и в культуре in vitro // Proceedings of the National Academy of Sciences of Belarus.
            Biological series. 2021. Vol. 66. # 2. Pp. 176–185.</li>
    </ol>

    <h3>ОАК рўйхатидаги журналлардаги мақолалар</h3>
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
            омилларининг таъсири // Agro kimyo himoya va o simliklar karantini. Илмий-амалий журнал. 2019. № 2. Б.
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

    <h3>NCBI. Халқаро маълумотлар базаси учун олинган ID</h3>
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
            carboxylase/oxygenase, partial 'Atriplex pratovii'. NCBI GenBank: SCB66075.1</li>
        <li> Rizayev,D.M., Sherimbetov,S.G., Adilov,B., Kurganov,S. and Ziyovutdinov,J.F. Halocnemum strobilaceum DREB2A
            (DREB2A) mRNA, partial cds. GenBank: OQ373010.1 <a href="https://www.ncbi.nlm.nih.gov/nuccore/OQ373010">ссылка</a>
        </li>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
    <h3>Лойиҳалар</h3>
    <h4>№ М-ФА-2020-2 «Тимоптин субстанциясини олишнинг такомиллаштирилган технологиясини ва янги дори шаклини ишлаб
        чиқиш».</h4>
    <p>Тимоптин субстанцияси ва дори шаклини технологияси масштаблаштирилди. Натижада субстанция олиш 10 баробарга
        оширилди. Қоракўл қўзиларининг тимусида Тимоптин субстанциясининг 3 та саноат партияси олинди. Олинган
        субстанцияниниг сифат кўрсаткичларини мавжуд стандартга (ФС 42 Уз-0286-2017) мувофиқлиги аниқланди.</p>
    <p>ЮССХ ва хромато-масс-спектрометрия усули ёрдамида Тимоптин субстанцияси таркибидаги мажор пептидларининг бирламчи
        тузилиши аниқланиб, улар α1 –тимозин, β4 –тимозин ва Тимопоэтин эканлиги кўрсатилди.</p>
    <p>“Инъекция учун Тимоптин” технологияси “Jurabek Laboratories Ltd” МЧЖ га трансфер қилинди ва “ТАЙМУН” савдо
        белгиси остида ишлаб чиқариш учун DV/M 04068/03/22 рақамли гувохнома олинди.</p>
    <p>“CHINA-UZBEKISTAN MEDICINE TECHNICAL PARK” MChJ билан препаратининг янги дори шакли “Тимоптин таблеткалар, 0.1
        мг” ишлаб чиқилди. “Тимоптин таблеткалар, 0.1 мг” сублингвал дори шаклининг фармако-токсикологик хусусиятлари
        ўрганилди. Тимоптин таблеткаларнинг иммуномодуляторлик хусусиятини Таймун препаратига биоэквивалент эканлиги ва
        самарадорлиги жихатидан Тактивин дори воситасидан устунлиги кўрсатилди. Препакратнинг клиник синовлари амалга
        оширилмоқда.</p>

    <h4>№ AL-632204150 “Орол денгизининг қуриган туби ўсимлик қопламини чуқур тадқиқ этиш асосида ҳудуд флорасининг
        замонавий рўйхатини шакллантириш, рақамли маълумотлар базаси ва генофонд коллекцияларини яратиш”</h4>
    <p>Оролнинг қуриган тубида олиб борилаётган тадқиқотлар натижасида янгидан шаклланаётган флора таркибида 39 оила,
        156 туркумга оид 278 тур рўйхатга олинди. Шундан 58 та тур тадқиқот ҳудуди учун ва Allium caesium Schrenk тури
        Қорақалпоғистон флораси учун янги ҳисобланади. 50 га яқин ўсимлик жамоларининг ҳозирги ҳолати баҳоланиб таҳлил
        қилиш натижасида илк маротаба ковулли-шувоқзор жамоаси (Capparis spinosa–Artemisia halophila) учраши аниқланди.
    </p>
    <p>Лаборатория шароитида ўсимлик баркод генини ПЗР амплифилация қилиш натижасида Haloxylon ammodendron ўсимлигада
        rbcL, 680 жуфт ҳамда матК 710 жуфт нуклеотидлар мавжуд эканлиги аниқланди.</p>
    <p>ҚДУ гербарий фондида 31 оила, 98 туркумга оид 110 турнинг 800 га яқин намунасидан иборат Оролқум коллексияси
        ташкил этилди ва Биоорганик кимё институти доривор ўсимлик биоматериаллар базаси 64 тур билан тўлдирилди.</p>
    <p>Айрим биологик фаол моддаларга бой доривор ва қумларни мустақкамловчи фитомелиорант ўсимлик турларини Оролнинг
        Шимоли-Ғарбий ва Жанубий ҳудудларида тарқалиш нуқталари аниқланди ва GAT харитаси яратилди.</p>

    <h4>№ A-ФА-2021-539 «Жанубий Оролқум ҳудуди экологик шароитига мослашган ўсимликларнинг ҳужайра технологияси асосида
        янги формаларини яратиш»</h4>
    <p>Орол денгизининг қуриган ҳудудларида тарқалган истиқболли ўсимлик турларидан биоматериаллар йиғилди ва уларидан
        РНК ажратилиб лаборатория генбанки яратилди.</p>
    <p>Илк бор лаборатория шароитида Lycium ruthenicum ва Nitriaria schoberi ўсимликлари in vitro шароитида культурага
        киритиди ва хлоридли тузларини озуқа муҳитга қўшиш орқали турли хил концентрацияда ўсиш кўрсаткичлари таҳлил
        қилинди. </p>
    <p>Lycium ruthenicum ва Nitriaria schoberi ўсимликларининг шўрхоклик стрессига жавоб берувчи WRKY, DREB, NAC, ва
        Na+/H+ генларнинг полимераза занжир реакциясини амалга ошириш учун турли биоинформатик дастурлар ва NCBI
        маълумотлар баъзасидан фойдаланиб махсус праймерлар дизайни илк бор яратилди.</p>
    <p>Жанубий Оролқум худудларининг 11 худудидан тупроқ намуналари таркибидаги 31 та кимёвий элементлари миқдори
        аниқланди.</p>

    <h4>№ АЛ-632204135 «Оролбўйи ҳудудидаги туз ва қурғоқчиликка чидамли ноанъанавий экинларнинг истиқболли
        галофитларини экиш ва кенгайтириш».</h4>
    <p>Қорақалпоғистон Республикаси Мўйноқ туманига қарашли Оролнинг қуриган туби N 44.131765, E 58.793773 “0” нуқтада
        1,5 га майдонга галофит ўсимликлар контрол ва тажриба вариантларида экилди.</p>
    <p>Натижада олиб борилган тадқиқотлар асосида илк маротаба бир йиллик хаётий шаклга галофит турлар Climacoptera
        lanata, C. longistylosa, C. intricatа, Suaeda altissima ва Atriplex auсheri турлари уруғлари ёрдамида тўлиқ
        фенологик ривожланиш босқичларини амалга оширди. Haloxylon aphyllum, Yucca - юкка ўсимлик турлари кўчатлари
        ёрдамида кўпайиши ва ушбу ҳудудга мослашганлиги, вегетация жараёнларини тўлиқ ўтаганлиги тадсиқланди ва
        дастлабки ўсимликлар плантацияси шаклланишида истиқболли галофитлар бўлиб хизмат қилиши таъкидланди.</p>
    <p>Кимёвий таҳлиллар асосида Оролнинг тубига ўсимликларнинг мослашувида ноқулай шароитни енгишда углеводлар ва
        витаминларнинг кучли биосинтези амалга ошиши, хусусан аминокислоталардан Аспарагин, Лейцин, Гистидин, Аргинин
        аминокислоталар миқдори юқори бўлиши ўсимликларнинг оғир стресс шароитга чидамлилигини таъминлаши аниқланди.</p>
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
         <h3>Kontaktlar</h3>
    `
}