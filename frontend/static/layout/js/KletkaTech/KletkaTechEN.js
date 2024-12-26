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
    <h2>Laboratory of Cell Technologies of Vegetable and Plant Crops</h2>
    <h3>Head of the laboratory</h3>
    <h2>Doctor of Chemical Sciences, Professor Ziyavitdinov Jamolitdin Fazlitdinovich</h2>

    <h3>History of the laboratory</h3>
    <p>The laboratory is one of the youngest laboratories in the Institute, which was established in 2018 on the basis
        of the "Laboratory of Cell Technology" within the institute.</p>
    <p>The main scientific direction of the laboratory is the research of molecular-biochemical mechanisms of metabolic
        pathways in stress-resistant prospective plants, determination of molecular biochemical features of stress
        resistance, creation of a bank of their genetic material, introduction of prospective plants into in vitro
        culture and adaptation to stress.</p>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Studies</h3>
    <ul style="list-style-type:none;">
        <li> Characterization of salt tolerance genes of plants distributed in the dry areas of the Aral Sea;</li>
        <li> Forming a modern list of the flora of the area, creating a digital database and gene pool collections based
            on a deep study of the vegetation cover of the dry bottom of the Aral Sea.</li>
    </ul>
    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
    <h3>Obtained results</h3>
    <p>220 species of higher plants belonging to 3 sections, 4 ancestors (classes), 10 ancestors (classes), 18 large
        tribes, 30 tribes, 41 families, 124 genera were found to grow in the Southern Orolkum region. Of these, 130
        species were identified for the first time; 5 rare species - Rosa majalis, Tulipa biflora, T. buhseana, Crambe
        edentula, Artemisia austriaca and one endemic plant - Atriplex pratovii were recorded in the area. It has been
        proven that the flora of the South Orolqum originated from the Iranian-Turonian flora.</p>
    <p>Many expeditions were organized to the Southern Archipelago and hundreds of collections of endemic plants were
        collected. 150 soil sections were made and more than 1000 soil samples were taken at different depths. The soil
        layers of the territories, the types and families of plants growing in them have been determined. Mechanical
        composition of 750 soil samples taken from more than 50 soil sections, pH environment, type and level of
        salinity, salt content, humus supply were determined.</p>
    <p>For the first time, parts of the marker genes for the DNA barcode of the Atriplex pratovii plant were sequenced:
        the sequence of the rbcL gene consisting of 488, 537 and 811 pairs of nucleotides, the sequence of the matK gene
        consisting of 283, 403 and 804 pairs of nucleotides, and the psbB-psbH region of 577 pairs of nucleotides was
        determined. For the first time, parts of the marker genes for the DNA barcode of the Atriplex pratovii plant
        were sequenced: the sequence of the rbcL gene consisting of 488, 537 and 811 pairs of nucleotides, the sequence
        of the matK gene consisting of 283, 403 and 804 pairs of nucleotides, and the psbB-psbH region of 577 pairs of
        nucleotides was determined. For the first time, Atriplex pratovii has been molecularly and genetically proven to
        be different from other Atriplex species. For the first time, an interspecific and intergeneric molecular
        phylogeny of Atriplex pratovii was developed based on rbcL, matK genes. The polymerase chain reaction of rDNA
        ITS regions 18s-5.8s of Salsola micranthera and Climacoptera aralensis plant species was performed for the first
        time: this region was found to be 710 pairs of nucleotides. Transcription factors of NAC, BADH and DREB genes
        responding to abiotic stresses (drought and salinity) of South Island populations of Halocnemum strobilaceum,
        Atriplex pratovii, Atriplex tatarica, Climocoptera aralensis, Haloxylon aphyllum, Haraninova ulicina were
        studied. The obtained results were registered from the National Center for Biotechnology Information
        <a href="http://www.ncbi.nlm.nih.gov">link</a> (GenBank: OQ373010, GenBank: OR371504, GenBank: OR188086.1).
    </p>
    <p>The amount of protein, free and bound amino acids, C, RR and V group vitamins (V1, V2, V6 and V9), the content of
        carbohydrates and polyphenols was determined. Polyphenols extracted from plants have been found to have
        antiviral activity.</p>
    <p>For the first time, the elemental composition of the root system and soil samples of Orolqum and Ustyurt
        populations of L. ruthenicum plant were comparatively studied. It was shown that the content of table salt and
        trace elements in the roots of the Orolkum population is 10 times higher than that of the Ustyurt population.
    </p>
    <p>For the first time, Haloxylon aphyllum, Lycium ruthenicum, Nitraria schoberi, Calligonum aphyllum, Atriplex
        tatarica, Atriplex pratovi, Salsola dendriedes and Halogeton glomeratus were cultured in vitro. Effective
        methods of in vitro reproduction and reculturing of sprouts have been developed. Fertilization of plants under
        in vitro conditions was determined by adding salts isolated from the soil of Orolqum territory to the nutrient
        medium, and primary and secondary explants were obtained. Biochemical composition of adapted plants, dynamics of
        changes in osmolytes and phytohormones amount were determined.</p>
    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `
    <h3>Achievements</h3>
    <p>The sequence results of rbcL, matK genes, psbB-psbH region of Atriplex pratovii are available in European
        Nucleotide Archive (UK, Cambridge) EMBL-EBI database LT604458, LT604459, LT604460, LT628367 and their proteins
        SCB66075.1, SCB66076.1, respectively. Registered through ID numbers SCB66077.1, SCZ84109.1
        <a href="http://www.ebi.ac.uk">link</a>. Transcription factors of NAC, BADH and DREB genes responding to abiotic
        stresses (drought and salinity) of South Island populations of Halocnemum strobilaceum, Atriplex pratovii,
        Atriplex tatarica, Climocoptera aralensis, Haloxylon aphyllum, Haraninova ulicina were studied. The obtained
        results were registered from the National Center for Biotechnology Information.
        <a href="http://www.ncbi.nlm.nih.gov">link</a> (GenBank ID: OQ373010, GenBank ID: OR371504, GenBank
        ID:OR188086.1).
    </p>
    <p>As a result of the research conducted on the island, 278 species belonging to 39 families and 156 genera were
        registered in the composition of newly formed flora. Among them, 58 species of Allium caesium Schrenk were found
        to be new for the flora of Karakalpakstan. The Orolqum collection consisting of about 800 samples of 110 species
        belonging to 31 families, 98 genera was established in the herbarium fund of QSU, and the database of medicinal
        plant biomaterials of the Institute of Bioorganic Chemistry was filled with 64 species.</p>
    <p>For the first time, 15 types of annual and perennial halophyte seeds and planting material were planted in the
        experimental area of point "0" in the dry bottom of the island. As a result of the conducted research, for the
        first time, halophytes with an annual life form performed full phenological development stages using the seeds
        of Climacoptera lanata, C. longistylosa, C. intricata, Suaeda altissima and Atriplex ausheri species.</p>
    <p>The technology of "Timoptin for injection" was transferred to "Jurabek Laboratories Ltd" LLC and the certificate
        number DV/M 04068/03/22 was obtained for production under the trademark "TAYMUN".</p>
    <p>A license agreement was signed with "CHINA-UZBEKISTAN MEDICINE TECHNICAL PARK" LLC for the production of a new
        drug form of the drug "Timoptin tablets, 0.1 mg". 2 experimental series of sublingual tablets were produced.</p>
    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
        <h3>Staff</h3>
        <p>Ziyavitdinov Zh.F. - Head of Laboratory, Doctor of Chemical Sciences, Prof.</p>
        <p>Olimjonov Sh.S. - senior researcher, Ph.D.</p>
        <p>Abdurakhimova S.Sh. - senior researcher, Ph.D.</p>
        <p>Kholmuratov E.G. - junior researcher</p>
        <p>Nasirova G.B. - junior researcher</p>
        <p>Sherimbetova G.G. - laboratory assistant</p>
        <p>Ishimov U.Zh. - doctoral student, candidate of chemical sciences</p>
        <p>Khalbekova Kh.U. - doctoral student, candidate of biological sciences</p>
        <p>Amanova G.I. - graduate student</p>
        <p>Rizaev D.M. - graduate student</p>
        <p>Kuchkorov K.Ch. - trainee researcher</p>
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3>Monograph</h3>
    <ol type="1">
        <li> Sherimbetov S.G. Atriplex pratovii Sukhor. (biogeography, ecology, molecular-phylogeny). Monograph. "Fan"
            publishing house of the UzR FA: Tashkent, 2019. 104 p.
        <li> Dukhovnyi V., Stulina G., Eshchanov O., Kenjabaev Sh., Zaitov Sh., Ruziev I., Kurbanova K., Ganiev M.,
            Idirisov K., Sherimbetov S., Abdirakhimova S., Esenbaev G., Kozhenkova I., Norkulova M., Liu F. Monitoring
            Osushennogo Dna Aralskogo Morya. Joint project of PROON and UNESCO. 2020. S.256
        <li> Dukhovny V., Stulina G., Eshchanov O., Kenjabaev Sh., Zaitov Sh., Ruziev I., Kurbanova K., Ganiev M.,
            Idirisov K., Sherimbetov S., Abdirakhimova S., Esenbaev G., Kozhenkova I., Norkulova M., Löw F. Monitoring
            the Dried Seabed of the Aral Sea. Joint UNDP and UNESCO Program. 2021. P. 242.
        <li> Sherimbetov S.G. Plants of the South Archipelago (flora, systematics, geobotany, geography, ecology and
            conservation). Monograph. Tashkent, 2023.</li>
    </ol>

    <h3>Textbooks and Study Guides</h3>
    <ol type="1">
        <li> Sherimbetov S.G., Eshmurodova N.Sh., Otaboyev Sh.Т., Xatamov А.А., Sherimbetov A.G. Ekologik ta'lim va
            tarbiya //Oliy o'quv yurtlari talabalari uchun o'quv qo'llanma. “Adabiyot uchqumlari” nashriyoti: Toshkent,
            2018. 200 p.</li>
        <li> Xo'jamshukurov N.A., Sherimbetov S.G., Nazarov K.K., Ishimov U.J., Mirzayeva D.A., Fermentlar ingeneriyasi
            //Oliy o'quv yurtlari talabalari uchun darslik. “Tafakkur qanoti” nashriyoti: Toshkent, 2018. 174 p.</li>
        <li> Pratov O'.P., Sherimbetov S.G., Sherimbetov A.G., Matniyazova H.H., Narimanov A.A. Botanika. Akademik
            litsey o'quvchilari uchun o'quv qo'llanma. – Toshkent: «Navro'z» nashriyoti, 2020. – 248 p.</li>
        <li> Абдулов И.А., Халбекова Х.У. Ҳужайра биологияси. Дарслик: “Донишманд зиёси”. Тошкент, 2021. 203 б.</li>
        <li> Sherimbetov S.G., Tolipova J.O., Umaralieva M.T., Ibodova M.N. Biologiya. Biologiya fani chuqurlashtirilgan
            tartibda o‘qitiladigan maktablar 7-sinf o‘quvchilari uchun o‘quv qo‘llanma. – Toshkent, 2021. – 242 p.</li>
    </ol>

    <h3>Articles published in publications indexed in the Web of Science Core Collection or Scopus database</h3>
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
                href="https://www.scirp.org/journal/abb">link</a></li>
        <li> K.M. Kuldoshova, A.A. Akhunov, N.R. Khashimova and J.F. Ziyavitdinov. Eff ects of exogenous abscisic acid
            on antioxidant system of salt tolerant and salt sensitive cotton cultivars. Hellenic Plant Protection
            Journal 16: 40-49, 2023. DOI 10.2478/hppj-2023-0006</li>
    </ol>

    <h3>Articles in international journals with an impact factor</h3>
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
                href="https://doi.org/10.35410/IJAEB.2020.5568">link</a>
            (Journal impact factor IF=4.083; DIIRJ-Citefactor, IF=0,26).</li>
        <li> S. Sherimbetov and H. Khalbekova. Taxonomical and chemical elements ecological groups in plants of the Aral
            Sea// Clay research. Vol.4. №1. pp. 12-18. 2021.</li>
        <li> Khalbekova Kh., Nikitina E. Biochemical processes of Climacoptera intricate, Suaeda altissima, Atriplex
            aucheri under salt conditions. The scientific heritage. № 110 (110) (2023). P. 4-9. (РИНЦ, ResearchGate).
        </li>
    </ol>

    <h3>Journal articles indexed in the RINTs database</h3>
    <ol type="1">
        <li> Sedun E.A., Abdirakhimova S.Sh., Zubarev A.V., Spiridovich E.V., Reshetnikov V.N., Sherimbetov S.G.,
            Nazirova E.R. Osobennosti prorastaniya semyan i razvitiya prorostkov derezy russkoy (Lycium ruthenicum
            Murr.) v laboratornykh usloviyax i v kulture in vitro // Proceedings of the National Academy of Sciences of
            Belarus. Biological series. 2021. Vol. 66. # 2. Pp. 176–185.</li>
    </ol>

    <h3>Articles from OAC-listed journals</h3>
    <ol type="1">
        <li> Abdirahimova S.Sh., Sherimbetov S.G., Ishimov U.J., Mirzaeva L.A., Saidaliev Q.S., Qurbanalieva Z.A. Total
            proteins in Lycium ruthenicum (Salonaceae) plant and its anti-bacterial properties // News of UzMU. No. 3/1.
            Natural sciences. 2018. B. 10-13.</li>
        <li> Sherimbetov A.G., Omonov B.A., Sherimbetov S.G. Izuchenie nekotoryx biomorfologicheskix osobennostey
            gribov Alternaria tenuissima (Kunze) Wiltshire, vydelennyx iz rasteniy Tamarix hispida Willd. // OZMU
            messages. No. 3/1. Natural sciences. 2018. B. 306-308.</li>
        <li> Abdirahimova S.Sh., Sherimbetov S.G., Kholbekova H., Amanova G., Matchanova D., Shadjanova G. Nucleotide
            sequence of the rbcl gene of the plant Atriplex pratovii // UzMU reports. #3/2 Natural sciences. 2018. B.
            5-10.</li>
        <li> Abdirahimova S.Sh., Ishimov U.J., Sherimbetov S.G. Lekarstvennye svoystva rasteniya Lycuim rethenicum
            Murr. // Vestnik Karakalpakskogo otdeleniya Akademii nauk Respubliki Uzbekistan. 2018. No. 3. S. 55-58.</li>
        <li> Sherimbetov S.G., Samatov I.M. The influence of external environmental factors on agricultural plants of
            the northern districts of Surkhandarya region // Bulletin of Agrarian Science of Uzbekistan. Tashkent, 2018.
            No. 4 (74). B. 151-153.</li>
        <li> Nikitina E.V., Karimov F.I., Pulatov S.O. Khalbekova Kh. Uzb.biol.journ. No. 4. 2019. – S. 29-33.</li>
        <li> Abdirahimova S.Sh., Sherimbetov S.G., Kholbekova H., Amanova G., Matchanova D., Shadjanova G. Nucleotide
            sequence of the plant rbcl gene of Atriplex pratovii. // UzMU Khabarlari #3/2 Natural sciences, 2018. B.4-9
        </li>
        <li> Sherimbetov S.G., Samatov I.M. The influence of fluorine compounds on the content of vitamin R in
            agricultural crops of Sariosiyo district, Surkhandarya region // Ecology bulletin. Tashkent, 2019. No. 4
            (216). B. 20-21.</li>
        <li> Samatov I.M., Sherimbetov S.G. The influence of external environmental factors on agricultural crops of
            the northern districts of Surkhandarya region // Agrochemical protection and plant quarantine. Scientific
            and practical magazine. 2019. No. 2. B. 24-25.</li>
        <li> Berdiev N.Sh., Ziyavitdinov J.F., Fazliddinov Sh.J., Sadullaev Sh.T., Sherimbetov S.G. Biodiesel is an
            alternative fuel energy // Scientific journal "Universe: Chemistry and Biology". No. 6 (60) June, 2019. S.
            21-26.</li>
        <li> Sherimbetov S.G., Samatov I.M. Vliyanie mangantsa na rost i razvitie rasteniy pod vliyaniem ftoristyx
            soedineniy // Vestnik Karakalpakskogo otdeleniya Akademii nauk Respubliki Uzbekistan. Tashkent, 2019. No. 3.
            S. 68-72</li>
        <li> Kakhorova K.A., Khashimova G.Ya., Sherimbetov S.G., Khashimova Z.S. Izuchenie tsitotoksicheskoy
            activitie ekstratov rastenii s vysokshego dna Aralskogo morya // Vestnik Karakalpakskogo otdeleniya Akademii
            nauk Respubliki Uzbekistan. 2019. - #3. S. 54-57.</li>
        <li> Amanova G.I., Sherimbetov S.G., Abdurakhimova C.Sh., Akhmedzhanov G.G. Nematova M. Element content of
            Nitraria schoberi plant distributed in the dry southern regions of the Aral Sea // Reports of the National
            University of Uzbekistan. Biology. 2019, No. 3/1. 3-9 p.</li>
        <li> Sherimbetov S.G., Abdirahimova S., Eshmurodova N.Sh., Nazarov K.K., Amanova G.I. Lycuim rethenicum Murr,
            distributed in the archipelago. (Salonaceae) plant chemical composition and biological characteristics. //
            UzMU Khabarlari #3/1 Natural sciences, 2019. B.61-67</li>
        <li> Khalbekova H.U., Sherimbetov S.G. Analysis of chemical elements of some species of the Salsola family
            distributed in the Southern Islands. Doklady ANRUz. - Tashkent, 2020. - No. 5. - S. 76-80.</li>
        <li> Amanova G.I., Sherimbetov S.G. Free amino acid composition of Nitraria schoberi. //Journal "Doklady
            Akademii nauk Respubliki Uzbekistan" №1. 2020 year. B 64-68.</li>
        <li> Amanova G.I., Eshmurodova N.Sh. Soderjanie uglevodov v rastenii Nitraria schoberi. // Vestnik
            Karakalpakskogo otdeleniya Akademii nauk Respubliki Uzbekistan. #4. 2020 year. B. 53-55.</li>
        <li> Amanova G.I., Kha.A.Abdullaev Vodorostovorimye vitaminy vegetativenykh i generativnykh organov plantenia
            Nitraria schoberi. //Uzbekskiy biologicheskiy zurnal» Academy of Sciences of the Republic of Uzbekistan. No.
            5. 2020 year. B. 17-20.</li>
        <li> Rizaev D.M., Sherimbetov S.G., Nazirova I.R. // Regarding the study of genes responding to abiotic
            stress in xerophytic plants growing in the desert area // Tashkent 2020. 5(83)191-193 p.</li>
        <li> Amanova G.I., Tojiboev G'., Sherimbetov S.G. Comparative analysis of the amount of free amino acids in
            the stem and leaves of the plant Nitraria schoberi L. distributed in Orolqum regions // News of UzMU. No.
            3/1. Natural sciences. 2021 year. B.27-29.</li>
        <li> Imomova D.A., Sherimbetov S.G., Danilova E.A. Composition of chemical elements of some water samples of
            the Aydar-Arnasoy lakes system // Lectures of the Faculty of Arts of the Republic of Uzbekistan. Tashkent,
            2021. #1. B.</li>
        <li> Imomova D.A., Sherimbetov S.G., Danilova E.A. Amount of macro- and micronutrients in the soils around
            the Aydar-Arnasoy lake system // Bulletin of the Agricultural Science of Uzbekistan. Tashkent, 2021. No. 1
            (85). B. 119-121.</li>
        <li> Khalbekova H.U., Sherimbetov S.G. Vliyanie soley na prorastanie semyan lekarstvennogo vida Salicornia
            europaea L. // Uzbekskiy biologicheskiy zurnal. Tashkent, 2021. #1. S. 29-34.</li>
        <li> Yuldasheva S.Sh., Sherimbetov S.G., Tulaganov A.A. Determination of heavy metals that can be found in
            the raw materials of Taraxacum officinale Wigg and Taraxacum kok-saghyz Rodin by modern physicochemical
            analysis methods // Pharmaceutical Bulletin of Uzbekistan. No. 4 2021. B.50-53.</li>
        <li> Sherimbetov A., Sherimbetov S.G., Ruzmetov D., Adilov B. Microbiological analyzes of newly established
            forest and pasture plants from diseases in the dry part of the Aral Sea // News of UzMU. #3/1/1. Natural
            sciences. 2021. B. 134-137.</li>
        <li> Mardanov R., Abdullaeva M., Sherimbetov S.G. Changes in the amount of amino acids and vitamins in wheat
            grain as a result of atmospheric pollution // News of UzMU. #3/1/1. Natural sciences. 2021.</li>
        <li> Rizaev D.M., Khalbekova H.U., Amanova G.I., Sherimbetov S.G. Optimization method izuchenii genov matK i
            rbcL nekotoryx pustynnyx rasteniy // Uzbekskiy biologicheskiy journal. Tashkent, 2021.</li>
        <li> Rizaev D. M., Sherimbetov S. G., Adilov B. Sh. Study of drought stress-responsive DREB2A gene in some
            desert plants belonging to Chenopodiaceae family using polymerase chain reaction method // Proceedings of
            the Academy of Sciences of the Republic of Uzbekistan. 2021. 5 issues. S. 53-57.</li>
        <li> Rizaev D.M., Adilov B., Sherimbetov S.G. The results of the study of the drought stress transcription
            factor NAC1 gene in some plants belonging to the Chenopodiaceae family using the polymerase chain reaction
            method // U'zMU Khabarlari № 3/1/1. 2022 B. 130-133</li>
        <li> Rizaev D.M., Khalbekova H.U., Amanova G.I., Sherimbetov S.G. Optimizing the method of polymerase chain
            reaction genov rbcL i matK nekotryx pustynnyx rasteniy // Uzbekskiy biologicheskiy zurnal №1. 2022 g. S.
            72-74</li>
        <li> Abdirahimova S.Sh., Mirazizov B., Amanova G.I., Kurbanov K.Ch., Sherimbetov S.G. Issues of microclonal
            reproduction of promising plants in vitro and their use in biotechnological production // Agrochemical
            protection and plant quarantine. Scientific and practical magazine #2. 2022 B. 141-146</li>
        <li> Gayibov U., Khalbekova H., Amanova G., Abdurahimova S., Sherimbetov S., Abdulladjanova N. Preliminary
            results of antioxidant activity of total polyphenols isolated from promising plant species of desert regions
            of Uzbekistan. // News of UzMU No. 3/1/1. 2022 B. 44-47</li>
        <li> Abdullaeva G.T., Eshmurodova N.Sh., Abdirakhimova S.Sh., Rizaev D.M., Matchanova D., Zokhidova Sh. G.,
            Khalbekova H.U., Amanova G.I., Sherimbetov S.G. Analysis of medicinal properties of plant substances based
            on biotechnological processes// News of UzMU. #3/2. Natural sciences. 2022 year. B. 15-18.</li>
        <li> Rizaev D.M., Matchanova D., Adilov B., Sherimbetov S.G. Izuchenie kharakteristiki soleustoychivosti gena
            BADH u vidov roda Atriplex, proizrastayushchikh na vysokshem dne Aralskogo Morya// UzMU reports. #3/2.
            Natural sciences. 2022 year. B.103-105.</li>
        <li> Khalbekova H.U., Kholmuratov E.G., Nasyrova G.B., Sabirova M.Sh., Sherimbetov S.G. Vvedenie v culture in
            vitro i poluchenie pervichnyx explantov Climacoptera longistylosa dlya mikrorazmnogeniya// Uzb. biol.
            Journal. - Tashkent, 2022. - No. 2. - S. 49-53.</li>
        <li> D. M. Rizaev, J. F. Ziyavitdinov, S. G. Sherimbetov, B. Sh. Adilov, S. K. Kurganov // Faktor
            transcriptsii HsDREB2A hyperhalophyte Halocnemum strobilaceum proizrastayushchego v priarale // Uzbekskiy
            biologicheskiy zurnal №3. 2023 g.</li>
        <li> Halbekova H.U. Vyrashchivanie perspectivnyx halofitov dlya ozleneniya pustyni Arala. Vestnik Khorezmskoy
            Academy Ma'muna//Khiva, 2023. 4/1. S. 92-95.</li>
        <li> Halbekova H.U. Polymorphism Semyan Vidov Roda Atriplex l. - chance vyzhivaniya v usloviyax pustyn//
            Vestnik NUUz. Tashkent, 2023. 3/1. S. 194-197.</li>
    </ol>

    <h3>NCBI. The ID obtained for the international database</h3>
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
                href="https://www.ncbi.nlm.nih.gov/nuccore/OQ373010">link</a></li>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
    <h3>Projects</h3>
    <h4>No. M-FA-2020-2 "Development of an improved technology for obtaining the substance Timoptin and a new drug
        form."</h4>
    <p>Timoptin substance and dosage form technology scaled. As a result, the intake of the substance increased 10
        times. 3 industrial batches of Timoptin substance were obtained in the thymus of Karakol lambs. The quality
        indicators of the obtained substance were determined to be in accordance with the existing standard (FS 42
        Uz-0286-2017).</p>
    <p> Using YuSSX and chromato-mass spectrometry method, the primary structure of the major peptides in the Thymoptin
        substance was determined, and it was shown that they are α1-thymosin, β4-thymosin and Thymopoietin.</p>
    <p> The technology of "Timoptin for injection" was transferred to "Jurabek Laboratories Ltd" LLC and the certificate
        number DV/M 04068/03/22 was obtained for production under the trademark "TAYMUN".</p>
    <p> With "CHINA-UZBEKISTAN MEDICINE TECHNICAL PARK" LLC, a new drug form of the drug "Timoptin tablets, 0.1 mg" was
        developed. The pharmaco-toxicological properties of the sublingual drug form "Timoptin tablets, 0.1 mg" were
        studied. Timoptin tablets have been shown to be bioequivalent to Taimun and superior to Tactivin in terms of
        their immunomodulatory properties. Clinical trials of the drug are underway.</p>

    <h4>No. AL-632204150 "Formation of a modern list of flora of the area, creation of a digital database and gene pool
        collections based on in-depth research of the dry bottom vegetation of the Aral Sea"</h4>
    <p>As a result of research conducted in the dry bottom of the island, 278 species belonging to 39 families and 156
        genera were registered in the composition of newly formed flora. Of these, 58 species are new for the study area
        and Allium caesium Schrenk is new for the flora of Karakalpakstan. As a result of the evaluation and analysis of
        the current state of about 50 plant communities, it was found that the hollow-wormwood community (Capparis
        spinosa–Artemisia halophila) met for the first time.</p>
    <p> As a result of PCR amplification of the plant barcode gene in laboratory conditions, it was found that rbcL, 680
        pairs and matK 710 pairs of nucleotides are present in Haloxylon ammodendron plant.</p>
    <p> The Orolqum collection consisting of about 800 samples of 110 species belonging to 31 families, 98 genera was
        established in the herbarium fund of the State University, and the database of medicinal plant biomaterials of
        the Institute of Bioorganic Chemistry was filled with 64 species.</p>
    <p> Distribution points of some medicinal and sand-fortifying phytomeliorant plant species rich in biologically
        active substances were determined in the North-West and South regions of the island, and a GAT map was created.
    </p>

    <h4>No. A-FA-2021-539 "Creation of new forms of plants adapted to the ecological conditions of the South Island
        region based on cell technology"</h4>
    <p>Biomaterials were collected from promising plant species distributed in the dry areas of the Aral Sea, and RNA
        was isolated from them to create a laboratory gene bank.</p>
    <p> For the first time in laboratory conditions, Lycium ruthenicum and Nitriaria schoberi plants were cultured in
        vitro and their growth performance was analyzed by adding chloride salts to the nutrient medium.</p>
    <p> Specific primers were first designed using different bioinformatics programs and NCBI database to perform
        polymerase chain reaction of WRKY, DREB, NAC, and Na+/H+ genes responsive to salinity stress in Lycium
        ruthenicum and Nitriaria schoberi plants.</p>
    <p> Quantities of 31 chemical elements in soil samples from 11 regions of the Southern Orelkum regions were
        determined.</p>

    <h4>No. AL-632204135 "Planting and expansion of promising halophytes of non-traditional crops resistant to salt and
        drought in the coastal region".</h4>
    <p>Halophytic plants were planted on an area of 1.5 ha in control and experimental options at point "0" N 44.131765,
        E 58.793773 "0" of the dry bottom of the island belonging to Moynaq district of the Republic of Karakalpakstan.
    </p>
    <p> Based on the results of the research, for the first time, halophyte species Climacoptera lanata, C.
        longistylosa, C. intricata, Suaeda altissima, and Atriplex ausheri have completed the full phenological stages
        of their development. Haloxylon aphyllum, yucca - yucca plant species are propagated by seedlings and are
        adapted to this area. It has been confirmed that they have fully undergone vegetation processes and serve as
        promising halophytes in the formation of initial plant plantations.</p>
    <p> On the basis of chemical analysis, it was found that in the adaptation of plants to the bottom of the island,
        strong biosynthesis of carbohydrates and vitamins is carried out, in particular, the high content of amino acids
        Asparagine, Leucine, Histidine, Arginine ensures resistance of plants to severe stress conditions.</p>
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
        <h3>Contacts</h3>
    `
}