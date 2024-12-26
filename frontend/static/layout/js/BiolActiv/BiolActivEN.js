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
    <h2>Laboratory of Biologically Active Macromolecular Systems</h2>
    <h3>(Chemistry of polysaccharides)</h3>
    <h3>Head of the laboratory - Doctor of Chemical Sciences, Leading Researcher Shomurotov Shavkat Abduganievich</h3>
    <h3>+998(97)7140639; shsha@mail.ru</h3>

    <h2>History</h2>

    <p>After the dissolution of the Research Institute of Chemistry and Technology of Cotton Pulp, in 1993
        The Laboratory of Cellulose Chemistry became part of the Institute of Bioorganic Chemistry of the Academy of
        Sciences of the Republic of Uzbekistan. In the laboratory under leadership of Doctor of Chemical Sciences,
        Academician A.S. Turaev conducted research to study the characteristics of the chemical
        transformation of polysaccharides and their derivatives, molecular and supramolecular structure, synthetic
        hydrophilic polymers, to create new effective drugs, targeted drugs and surgical products with specified
        properties based on them for use in medical practice and agriculture farm. In 2012, the “Cellulose Chemistry”
        laboratory was renamed into the “Polysaccharide Chemistry” laboratory. In the laboratory is currently studying
        macromolecular systems, their structure and biological activity, establishing the structure-activity
        relationship, creating macromolecular systems for medicine, pharmaceuticals and agriculture. In this regard, the
        laboratory was renamed into the laboratory of “Biological active macromolecular systems".</p>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h2>Research</h2>
    <ul style="list-style-type:disc;">
        <li> Structural and chemical modification of polysaccharides of various origins, study of the patterns of their
            modification processes (esterification, alkylation and oxidation), study of the physicochemical and
            medico-biological properties of modified polysaccharides with the aim of creating materials for therapeutic
            purposes.</li>
        <li> Study of complementary interactions of beta-D-glucans, galactomannans and their modified analogues with
            cell lectins, with the aim of creating targeted antitumor drugs.</li>
        <li> Studying the patterns of chemical modification of polysaccharides and their derivatives with
            biomacromolecules and low-molecular physiologically active substances to create systems for targeted
            delivery of chemotherapy drugs.</li>
        <li> Creation of biologically active macromolecular systems of targeted and prolonged action based on modified
            polysaccharides, development and implementation of technological processes for their production, development
            of modern methods for their standardization.</li>
        <li> Study of the structuring features of macromolecular systems based on polysaccharides and their derivatives,
            synthetic hydrophilic polymers, creation of gel systems and development of highly effective soft dosage
            forms for external use for dentistry, dermatology, surgery, cosmetology, as well as compositions for
            agriculture.</li>
        <li> Isolation of collagen from cattle hides while preserving the original native fibrous structure, their
            modification and production of a composition with polysaccharides, with the aim of creating on their basis
            medicines and surgical products for medicine and cosmetology.</li>
    </ul>
    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
    <h2>Results</h2>
    <ul style="list-style-type:disc;">
        <li> For the first time, inhibition of the leukemia and hepatitis C virus, as well as the bacteria E. coli and
            P. aeruginosa, by modified polysaccharides of a polyanionic structure was established. The influence of
            conformation, molecular weight, degree of substitution and location of functional groups in the
            macromolecule in interaction with pathogens has been established.</li>
        <li> Methods have been developed for the production of modified sulfate and phosphate polysaccharides with a
            predetermined macromolecular structure and molecular parameters. It has been established that the resulting
            derivatives have high antiviral and antibacterial activity against viruses (leukemia and hepatitis C) and
            bacteria (Staphylococcus aureus), respectively. The role of polysaccharide conformation in determining
            antiviral activity has been established.</li>
        <li> Using computer modeling, it was established that with an increase in the degree of esterification of the
            free hydroxyl groups of hexosane, the interaction with the dectins of the protein part of tumor cells
            increases. During molecular docking of the molecular model of β-D-glucan ligands and their esters, they
            interact with the protein part (3ZXE and 3T1M, respectively) of galactose specific domains galectin-7 and
            galectin-3 located in the membrane of cancer cells. Methods have been developed for the isolation of
            polysaccharides - β-D-glucans from basidiomycete mushrooms and galactomannan from honey locust. Their
            structure and molecular parameters have been studied. Methods have been developed for separating the complex
            isolated from basidiomycete fungi into β-D-glucan and melanin. The antitumor activity of β-D-glucans,
            galactomannans and their modified derivatives containing gemcitabine was screened in vitro on cultures of
            BML, Hela, and Akat cancer cells.</li>
        <li> By molecularly designing polygalacturonic acid with the antitumor drug doxorubicin, the macromolecular drug
            system “Galactorubicin” was obtained, which has low toxicity and a pronounced antitumor effect. The drug has
            passed preclinical tests and its scientific and technical documentation has been prepared.</li>
        <li> A technology has been developed for isolating protein from raw hide production waste using alkaline and
            alkali-salt methods. The optimal conditions for hydrolysis and the amino acid composition of the resulting
            protein were determined. Research has been carried out to obtain a high-protein concentrate from the
            resulting protein and water-soluble polysaccharides. A technological scheme for producing a high-protein
            concentrate based on collagen and polysaccharides has been developed.</li>
    </ul>
    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `
    <h2>Achievements</h2>
    <ul style="list-style-type:disc;">
        <li> Under the license agreement, the production of the hemostatic material “Collagen Hemosponge” was
            transferred to TURON SILK PHARM LLC. Clinical trials of the hemostatic material “Hemosponge” were carried
            out at the Republican Scientific Center for Neurosurgery, the Republican Specialized Center for Urology and
            the Tashkent Pediatric Medical Institute. Registration certificate TV/M 00104/12/16 dated December 2, 2016
            was received and approved for use in medical practice. A line for the production of collagen hemostatic
            material “Hemosponge” was released at TURON SILK PHARM LLC and is currently being produced in this
            organization.</li>
        <li> Under a license agreement, the production of the gel for ultrasound diagnostics "Poligel Ultra" and the
            wound-healing drug "Timogel" was transferred to Torimed Pharm LLC. This organization has launched a
            technological line for the production of soft dosage forms. 1000 kg of Polizhel Ultra gel for ultrasound
            diagnostics were produced. The wound-healing drug "Timogel" passed clinical trials at the Department of
            Venereology and Dermatology, a clinical trial report was received and permission to use the drug was
            received. All NDs for the drug “Timogel” have been approved.</li>
        <li> Technical specifications for collagen substance (Ts 25193402-03:2018) and for the cosmetic product
            “Bioplant” (Ts 25193402-04:2018) have been developed. RD for collagen substance and cosmetic product
            “Bioplant” was developed and submitted to the Republican Sanitary and Epidemiological Center of the Ministry
            of Health of the Republic of Uzbekistan to obtain a production permit. According to the license agreement,
            production was transferred to Turon Silk Pharm LLC, and this organization launched a production line for
            collagen substance and Bioplant cosmetic product.</li>
        <li> By molecularly designing polygalacturonic acid with anti-tuberculosis drugs, the combined anti-tuberculosis
            drug “Biomayrin” was obtained. A production technology has been developed and scientific and technical
            documentation of the drug has been prepared. The therapeutic dose was determined and the technology for
            obtaining the dosage form of the combined anti-tuberculosis drug “Biomayrin” in the form of a 600 mg capsule
            was developed. The drug has passed three-stage clinical trials and is approved for use in medical practice
            for the treatment of patients with tuberculosis.</li>
    </ul>

    <h2>Patents</h2>
    <ul style="list-style-type:none;">
        <li>Patent of the Republic of Uzbekistan No. I AR 02100 Torsion-reed device</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 02099 Melting and forming unit for a device for the
            production of chemical threads</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 02217 Electrically conductive gel composition "Cardiogel"
        </li>
        <li> Patent of the Republic of Uzbekistan No. I AR 02311 Method for producing surgical thread</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 02435 Surgical suture thread</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 02506 Method for producing a matrix from collagen fibers</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 02561 Method for producing collagen powder</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 02592 Surgical suture thread</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 02724 Adhesive composition</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 03204 Adhesive powder for fixing removable dentures</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 03207 Composition for tableting</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 03503 Method for producing surgical thread</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 04589 Injectable solution of collagen for the treatment of
            connective tissue defects</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 04588 Collagen injection solution for endoprosthetics</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 04587 Collagen injection solution for endoprosthetics</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 04603 Inhibitor of tobacco mosaic virus on plant leaves</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 04608 Anti-inflammatory wound healing agent</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 04665 Injectable solution of collagen for the treatment of
            connective tissue defects</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 04736 Method for obtaining collagen substance</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 05125 Method for producing collagen sponge material</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 05207 Wound healing agent</li>
        <li> Patent of the Republic of Uzbekistan No. I AR 05327 Gel with antiallergic, antifungal, immunomodulatory and
            anesthetic effects</li>
    </ul>

    <h2>Registration certificates and certificates</h2>
    <ul style="list-style-type:none;">
        <li> - TV/M 00086/09/06 Polymer gel for ultrasound diagnostics “Poligel Ultra”;</li>
        <li> - DV/M 01574/06/17 Wound healing drug “Timogel”;</li>
        <li> - TV/M 00104/12/16 Collagen hemosponge;</li>
        <li> - No. 1 A 1730 Liquid “Biosolvent”;</li>
        <li> - DV/M 04312/11/22 Anti-tuberculosis drug “Biomayrin”.</li>
    </ul>
    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
    <h2>Employees</h2>

    <ul style="list-style-type:disc;">
        <li> Turaev Abbaskhan Sabirkhanovich – Doctor of Chemical Sciences, Academician</li>
        <li> Shomurotov Shavkat Abduganievich – Doctor of Chemical Sciences, Leading Researcher</li>
        <li> Filatova Albina Vasilievna – Doctor of Technical Sciences, Leading Researcher</li>
        <li> Sagdullaeva Dilafruz Saidakbarovna – Doctor of Technical Sciences, Leading Researcher</li>
        <li> Mukhitdinov Bakhtier Ikromovich – Doctor of Technical Sciences, Leading Researcher</li>
        <li> Atadzhanov Abdilahad Yuldoshevich – Ph.D., senior researcher</li>
        <li> Khaitmetova Saidakhon Bokizhonovna – Ph.D., senior researcher</li>
        <li> Radjabov Otabek Iskandarovich – PhD, senior researcher</li>
        <li> Juraboev Jalol Turgunbaevich – PhD, senior researcher</li>
        <li> Amonova Dilnoza Mukhtorovna – PhD, senior researcher</li>
        <li> Khalilova Gulnoza Abduvokhobovna – PhD, senior researcher</li>
        <li> Azimova Luiza Bakhtiyarovna – junior researcher</li>
        <li> Khabibullaev Jahongir Asatullaevi – junior researcher</li>
        <li> Mekhmanov Ilkhom Yusufzhonovich – junior researcher</li>
        <li> Sindarov Bobur Aktamovich – junior researcher</li>
        <li> Azizov Shavkat Ismatillaevich – doctoral student</li>
        <li> Akhmedov Oliy Ravshanovich – doctoral student</li>
        <li> Buriev Doston Abdusamatovich – basic doctoral student</li>
        <li> Boydadaev Azizbek Anvarzhonovich – basic doctoral student</li>
        <li> Suyundikov Mukhridin Kobilovich – basic doctoral student</li>
        <li> Abdurakhmonov Zhamolidin Abdugulom ugli – basic doctoral student</li>
        <li> Abdusalomov Zhavohir Tulkinovich – trainee researcher</li>
        <li> Tazhibaeva Khilola Omonboy kizi – laboratory assistant</li>
    </ul>
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h2>Publications</h2>

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
        
    `
}

function Services() {
    Laboratories_content.innerHTML = 
    `
        
    `
}

function Contacts() {
    Laboratories_content.innerHTML = 
    `
        <p>Head of the laboratory: Shavkat Abduganievich Shomurotov, Doctor of Chemical Sciences, Leading Researcher, +998 (97) 7140639; shsha@mail.ru</p>
    `
}