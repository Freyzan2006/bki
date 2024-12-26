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
    <h2>Laboratory of pharmacology and screening of biologically active substances</h2>
    <h3>Head of the laboratory</h3>
    <h2>Tagayalieva Nigora Abdunabievna</h2>

    <h2>History of the laboratory</h2>
    <p>The Pharmacology Laboratory was established in 1973 on the basis of the Department of Bioorganic Chemistry at the
        Academy of Sciences of Uzbekistan. In 1977, the department was renamed the Institute of Bioorganic Chemistry.
        The first head of the pharmacology laboratory was Professor Nosyrov Sanjar Haidarovich, who led the laboratory
        until 1994. Under his leadership, more than 20 candidates of sciences in the specialty of pharmacology were
        prepared, 2 monographs were published. Laboratory staff were trained at the Department of "Pharmacology and
        General Toxicology" of the Leningrad Sanitary and Hygienic Medical Institute of Russia under the guidance of
        Professor P.P.Denisenko, 2nd Medical Institute, under the guidance of Professor Efimov S.A., Institute of
        Epidemiology and Microbiology named after N.F. Gamalei AMS Russia, Institute of Surgery named after A.V.
        Vishnevsky AMS et al . Since 1994, the laboratory was headed by Dr Isanbayev Chingiz Ildarovich, DS, in
        2002-2010, by Dr Mirzaev Yuri Rakhmanovich, in 2010-2018 – by Dr Inogamov Utkir Kudratullayevich.</p>
    <p> From the moment of its organization to the present, the laboratory has been conducting studies of the
        pharmacological activity of various compounds of animal and plant origin obtained by the staff of the Institute
        of Bioorganic Chemistry: alkaloids, polyphenols, deterpenoids, flavonoids, proteins and peptides,
        polysaccharides, as well as their complexes, semi-synthetic analogues, conjugates, etc.</p>
    <p> A vivarium providing the institute with four types of experimental animals (rabbits, guinea pigs, rats, mice)
        operates for the full-fledged work of the laboratory.</p>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Research</h3>
    <ol type="I">
        <li>Our Laboratory is the only center in Uzbekistan where full preclinical studies of pharmaco-toxicology of
            promising agents as medicines and dietary supplements are carried out according to the requirements of the
            Pharmaceutical Committee of the State center for expertise and standardization of medicines, medical
            applications and medical equipment state unitary enterprise of agency for the development of the
            pharmaceutical industry under the Ministry of Health of The Republic of Uzbekistan:</li>

        <ul style="list-style-type:disc;">
            <li>General toxicology:</li>
            <ol type="1">
                <li> Acute toxicity.</li>
                <li> Subacute toxicity (cumulation).</li>
                <li> Chronic toxicity (peripheral blood, liver function (AST, ALT, total protein, glucose), excretory
                    system (diuresis, urine pH, blood urea), CNS fuction, PNS (Open Field test), standard histological
                    evaluation of tissues).</li>
            </ol>

            <li>General pharmacology:</li>
            <ol type="1">
                <li> Effect on the cardiovascular system (ECG, blood pressure and heart rate).</li>
                <li> Influence on motor activity (rotating rod, cruciform labyrinth).</li>
                <li> The hypnotic effect of narcotic drugs.</li>
                <li> Convulsive action.</li>
                <li> Influence on pressure and respiration.</li>
                <li> Isolated organs.</li>
            </ol>

            <li>Specific toxicology:</li>
            <ol type="1">
                <li> Local irritant effect (conjunctival test, skin tests).</li>
                <li> Allergenicity (delayed hypersensitivity, cutaneous application, anaphylactic shock).</li>
                <li> Reproductive toxicity (Embryotoxicity and teratogenicity).</li>
                <li> Immunotoxicity of antibody-forming cells, cellularity of immune organs, phagocytosis, HRT.</li>
                <li> Genotoxicity (Mutagenicity and carcinogenesis).</li>
                <li> Pyrogenicity.</li>
            </ol>

            <li>Specific pharmacology:</li>
            <ol type="1">
                <li> The study of steroid hormones and NSAIDs.</li>
                <li> Study of dermatotropic medicines: wound-healing, anti-burn and anti-allergenic.</li>
                <li> Study of drugs affecting hemostasis: hemostatics, anticoagulants, antiplatelet agents,
                    fibrinolytics.</li>
                <li> Study of hemostimulating activity: stimulator of thrombocytopoiesis and erythropoiesis.</li>
                <li> Study of antianemic drugs.</li>
                <li> Study of immunotropic activity.</li>
                <li> Study of antihypoxant and antioxidant activity of drugs.</li>
                <li> Study of laxative medicines.</li>
                <li> Study of anti-ulcer activity.</li>
                <li> Study of antihypertensive agents.</li>
                <li> Study of hepatoprotective drugs.</li>
                <li> Study of antimutagenic agents.</li>
            </ol>
        </ul>

        <h3>Models and tests used</h3>
        <ol type="1">
            <li> Models of anemia: hemolytic (phenylhydrazine hydrochloric acid), posthemorrhagic and aplastic;</li>
            <li> Models of acute (CCl4, paracetamol) and chronic (heliatrin, alcohol) hepatitis</li>
            <li> Stress patterns: neuromuscular tension according to Selya, "water bath", normobaric hypoxia and others;
            </li>
            <li> Heparin-induced hypocoagulation model;</li>
            <li> Phenylin-induced prothrombinemia model;</li>
            <li> Model of parenchymal bleeding (hepatic);</li>
            <li> Model of osteoporosis (castration of female rats);</li>
            <li> Models of diabetes mellitus;</li>
            <li> Models of thrombosis: thrombosis of the left carotid artery (iron chloride); pulmonary thrombosis in
                mice; vena cava thrombosis with partial stenosis;</li>
            <li> Model of myocarditis in rats;</li>
            <li> Models of exudative, proliferative, alterative inflammation, antipyretic and analgesic effects (40
                models with various modifications);</li>
            <li> Models of wounds, burns and dermatitis;</li>
            <li> Laxative evaluation models;</li>
            <li> Models of ulcerative colitis (acetic acid);</li>
            <li> Models of atherosclerosis in rats (twin and vitamin D induced);</li>
            <li> Model of postoperative adhesive disease;</li>
            <li> Cytogenetic tests for chromosome aberrations (in mammalian bone marrow cells in vivo and human
                peripheral blood lymphocytes in vitro) and micronuclei in bone marrow in vivo;</li>
            <li> DNA comet test in vivo and in vitro;</li>
            <li> Model of arthrosis.</li>
            <li> Model of urolithiasis (ethylene glycol with oxalates).</li>
        </ol>
        <p> Models and tests allow for pharmacological screening of new compounds under study; the study of their
            pharmacological properties and mechanism of action.</p>
        <li>Preparation of reports on new pharmacological preparations for the Pharmaceutical Committee;</li>
        <li>Pharmacovigilance for new medicines developed at the Institute.</li>
    </ol>

    <h3>Experimental base of the laboratory</h3>
    <ul style="list-style-type:disc;">
        <li> Semi-automatic biochemical analyzer Raito RT-1904C (China, 2020)</li>
        <li> Automatic hematology Analyzer Dymind DH36 (China, 2022)</li>
        <li> 4-channel analyzer "Isolated organs" (4-channel data acgusittion hardware for use with Data-TraxTM data
            recording and analysis software, USA, World Precision Instruments, Inc.-2011)</li>
        <li> Semi-automatic coagulometer RT-2201C (China, 2020)</li>
        <li> Semi-automatic rotary microtome MICROTOME CUT 5052 (Germany, 2023)</li>
        <li> Non-invasive rodent blood pressure measurement system "Systola" (Russia, 2023)</li>
        <li> Motic BA 210 E microscope equipped with a video camera and a computer (Spain, 2015)</li>
        <li> Electrocardiograph,ECG Heart Screen 80G-L-2011</li>
        <li> HumaClot Coagulometer (Germany, 2009)</li>
        <li> Open Field and Cruciform Maze playpens</li>
        <li> Device "Rotating rod" and other standard laboratory devices</li>
    </ul>
    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
    <h3>The most important results and achievements</h3>
    <ul style="list-style-type:disc;">
        <li> In recent years, preclinical studies of pharmaco-toxicology of a number of drugs developed at the Institute
            together with other laboratories have been carried out, including Providin, Rometin, Gossitan, Megosin,
            Aflan, Cardin, Timoptin tab., Sedanil, Biomairin, Fibrinolytic, Euphorbine, Getasan, Glipred, Glylalin,
            Glycyram Hemogubka, Plantagin, Bioocor, Soyaflan, Collagen, Calcitonin tab., Amaranth oil, etc.</li>
        <li> The drug "Erythim solution 0.001%" (produced by the Institute since 2016 and sold in pharmacies of the
            Republic of Uzbekistan) introduced into production as an erythropoiesis stimulator for the treatment of
            anemia of mild, moderate and severe degrees.</li>
        <li> The drug against COVID-19 disease with 30% moderate lung inflammation, as well as against all strains of
            influenza "Rutan tablet 100 mg No. 20" for adults, "Rutan tablet 25 mg No. 20" for patients older than 6
            years allowed for use as. The drug is included in the protocol for the treatment of patients with COVID-19
            coronavirus infection.</li>
        <li> The pharmacological supervision on drugs Thymoptin, Gozolidone in capsules, Pramipexol BIO was carried out
            and reports were compiled for the Pharmaceutical Committee.</li>
    </ul>
    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `
        ...
    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
    <h3>Staff:</h3>
    <ol type="1">
        <li> Tagayalieva N.A. - Head of the laboratory, Candidate of Biological Sciences</li>
        <li> Vypova N.L. - leading researcher, PhD in Biological Sciences</li>
        <li> Yakubova R.A. – senior researcher, PhD in Biological Sciences (Certificate of the Institute of
            Standardization, Metrology and Certification (NIISMS) of the agency "Uzstandart" "Certificate of measurement
            methodology (Part II - cytogenetic analysis of human karyotype)" o'zo'u 0701:2015)</li>
        <li> Baratov K.R. - senior researcher, PhD in Biological Sciences</li>
        <li> Rakhmanova G.G. - researcher, PhD in Biological Sciences</li>
        <li> Makhmudov L.N. - basic doctoral student</li>
        <li> Nurbekova N.B. - research assistant</li>
        <li> Khudaikulova M.M.</li>
        <li> Inogamov P.N.</li>
        <li> Kodirova M.K.</li>
    </ol>
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3>Staff:</h3>
    <ol type="1">
        <li> Tagayalieva N.A. - Head of the laboratory, Candidate of Biological Sciences</li>
        <li> Vypova N.L. - leading researcher, PhD in Biological Sciences</li>
        <li> Yakubova R.A. – senior researcher, PhD in Biological Sciences (Certificate of the Institute of
            Standardization, Metrology and Certification (NIISMS) of the agency "Uzstandart" "Certificate of measurement
            methodology (Part II - cytogenetic analysis of human karyotype)" o'zo'u 0701:2015)</li>
        <li> Baratov K.R. - senior researcher, PhD in Biological Sciences</li>
        <li> Rakhmanova G.G. - researcher, PhD in Biological Sciences</li>
        <li> Makhmudov L.N. - basic doctoral student</li>
        <li> Nurbekova N.B. - research assistant</li>
        <li> Khudaikulova M.M.</li>
        <li> Inogamov P.N.</li>
        <li> Kodirova M.K.</li>
    </ol>

    <h3>Publications</h3>
    <ol type="1">
        <li> Makhmudov L. U., Aripov T. F., Vypova N. L., Nurbekova N. B., Yuldashev H. A., Esanov R. S., Gafurov M. B.,
            Yakubova R. A., Tagayalieva N.A. Antioxidant and hepatoprotective properties of complexes of monoammonium
            salt of glycyrrhizic acid with amino acids and phenolic compounds //Experimental and clinical pharmacology.
            – 2023. – Vol. 86. – No. 3. – pp. 23-28.
            <a href="http://ekf.folium.ru/index.php/ekf/article/view/3068/2537">link</a>
        </li>
        <li> A.V. Filatova, Vypova N. L., Azimova L. B. Studying the photoprotective activity of a gel with melanin on a
            model of ultraviolet erythema in rats // Chemico-pharmaceutical journal. Volume 57, No. 4, 2023. - pp.41-45.
            DOI: <a href="https://doi.org/10.30906/0023-1134-2023-57-4-41-45">link</a></li>
        <li> Tykhtaeva F.Sh., Makhmudov R.R., Mustafakulov M.A., Rakhmonova G.G., Baratov K.R. Yzbekiston
            republikasiудududida ysuvchi Plantago oilasiga mansub ysimliklardan azhratib olingan flavonoidlar summasini
            tazhribaviy kandli diabetda biokimeviy kyrsatkichlar correctionsida samaradorligini baҳolash // Khorazm
            mamun akademiyasi akhborotnomasi. - 2023. - No.2/1. – pp.62-69.</li>
        <li> Khaytmetova, S. B., Turaev, A. S., Khalilova, G. A., Tagayalieva, N. A., & Abboskhonova, M. O. Study of the
            activity of polysaccharides isolated from basidial fungi Ganoderma lucidum on a model of toxic hepatitis
            //Experimental and clinical pharmacology. – 2022. – Vol. 85. – no. 12. – pp. 38-41.
            <a href="https://doi.org/10.30906/0869-2092-2022-85-12-38-41">link</a>
        </li>
        <li> Mamatmusaeva N.E., Abdugafurova D.G., Vypova N.L., Ziyaev Kh.L., Tagayalieva N.A., Abrekova N.N.,
            Sagdullaev B.T. Anti-ulcer effect of megosin in a model of acute experimental colitis in RATS //
            International Journal of Health Sciences. 2022. - № 6(S7). – р. 47349–47356.
            <a href="https://doi.org/10.53730/ijhs.v6nS7.13227">link</a>
        </li>
        <li> Nazarov G.A., Vypova N.L., Salikhov Sh.I., Baratov K.R., Tagayalieva N.A. Studying the effect of the
            substance of the drug safinol on plasma hemostasis of rabbits // Journal Infection, immunity and
            pharmacology.- Tashkent, 2022. - No. 3. – pp. 152-156.</li>
        <li> Rakhmonova G.G., Baratov K.R., Abdugafurova D.G., Yakubova R.A., Vypova N.L., Ziyaev H.L., Tagayalieva N.A.
            Determination of acute toxicity of gossypol derivatives // Journal Infection, immunity and Pharmacology.-
            2022.- No.3. – pp. 200-208.</li>
        <li> Vypova N.L., Fomina M.A., Nurbekova N.B., Tagayalieva N.A., Yuldashev H.A., Gafurov M.B., Esanov R. S.,
            Saidullayeva H.T. The effect of complex preparations based on HCG, carnitine and methionine on biochemical
            blood parameters of rats with paracetamol hepatitis //Universum: chemistry and biology. – 2022. – №. 4-1
            (94). – Pp. 34-39. DOI 10.32743/UniChem.2022.94.4.13311</li>
        <li> Abdullayeva B.T., Rakhmonova G.G., Soliev M.I. Detection of acute toxicity of wormwood extract and pine
            conifer extract //Spanish Journal of innovation and integrity. - 2022. -V.5, P.605-610.</li>
        <li> Rakhmonova G. G., Abdullajanova N. G., Rakhimov R. N., Baratov K.R., Yakubova R.A., Tagayalieva N.A. Study
            of reproductive toxicity of the sum of polyphenols from the Rhus glabra plant on laboratory rats //
            "Universum: chemistry and biology". - 2022. - 6(96).- pp.63-70. DOI - 10.32743/UniChem.2022.96.6.13663</li>
        <li> Toshtemirova Ch.T., Rakhmonova G.G., Ernazarov A.M., Normakhamatov N. S. Study of acute toxicity of aqueous
            extracts of the aboveground part of the Gentiana olivieri griseb plant. Pharmaceutical magazine. No.5, 2022.
            pp. 82-85.</li>
        <li> Akbaraliev M.A., Abdugaffarova D. G., Rakhmanova G.G., Kambarov H.J., Inogamov U.K. Study of immunotropic
            activity of purified erixin-1 and crude erixin-2 substances of autolysate from biomass of snake Eryx
            miliaris. Pharmacy, immunity and vaccine. №3, 2022. C. 61-67.</li>
        <li> Sagdiev N.J., Ziyavitdinov J.F., Berdiev N.Sh., Bozorov S.S., Khudoyberdiev T.A., Olimjonov Sh.S., Vypova
            N. L. Low abundant bovine colostrum proteins in combination with amaranth oil reveal topical analgesic
            activity //Nova Biotechnol Chim (2022x) xx(x): e1246 DOI: 10.36547/nbc.1246</li>
        <li> Zaripova M., Vypova N., Amirsaidova D., Bekmurodova G., Aripov T., Gayibov U., Miralimova S., Gayibova S.
            (2022) The hypoglycemic potential of endophytic Lactobacillus kunkeei, isolated from Dandelion flowers in
            rats.// Journal of Basic and Applied Pharmacology Vol. 2 No.1 January - June 2022. Page: O43-51.</li>
        <li> Enikeeva Z.M., Yuldashev Zh.A., Vypova N.L., Agzamova N.A. /Study of acute toxicity and antitumor activity
            of a new drug kolkhametin //Clinical and Experimental Oncology, No. 1(19)-2022. pp.25-30.</li>
        <li> Ziyavidenova S. S., Vypova N. L., Enikeeva Z. M., Agzamova N. A., Nishanov D. A., Madaliev A. A.,
            Alimkhodjaeva L. T. /Study of the Toxic Features of the Antitumor Drug Decoglitz //American Journal of
            Medicine and Medical Sciences 2021, 11(10): 705-710 DOI: 10.5923/j.ajmms.20211110.08</li>
        <li> Vypova N.L., Enikeeva Z.M., Ziyavidenova S., Kholturaeva N., Nishanov D., Madaliev A., Maulyanov S./ The
            study of toxicology of antitumor drug "decoglitz" // O'ZMU xabarlari Bulletin of NUUz ACTA NUUz BIOLOGIYA
            3/1/1 2022.</li>
        <li> Pakhtullayeva Z.I., Vypova N.L., Jabbarova G.M., Makhmudov L.U., Esanov R.S., Yuldashev H.A./ Study of the
            “acute” toxicity of new derivatives of some natural triterpene acids containing residues of 2-alkyl
            (aryl)-5-amino-1,3,4-thiadiazole// Infection, immunity and pharmacology 1 /2022, pp.178-183.</li>
        <li> Filatova A.V., Vypova N.L., Azimova L.B., Jurabaev D.T., Turaev A. S. Immunomodulatory properties of
            polysaccharides and melanin isolated from (helianthus annuus L.), sunflower husks.//. Infection immunity and
            Pharmacology No. 1, 2022 p.262-268</li>
        <li> Oripova M. Zh., Koraboeva B. B., Kuzieva Z. N., Amanlikova D. A., Abdugafurova D. G., Oschepkova Yu.I.
            Isolation and biological activity of ribosomes of inactivating proteins from the leaves of Nitraria Shoberi.
            Infection, immunity and pharmacology. No. 1. 2022. pp. 171-176.</li>
        <li> Sultanova E.M., Amanlikova D.A., Abdugafurova D.G., Oshchepkova Yu.I. The study of the immunotropic
            activity of Raphanus sativus extracts // Infection, immunity and pharmacology. 2022. - No. 4. - pp. 210-216.
        </li>
        <li> Ashurova F.K., Yuldashev H.A., Tagayalieva N.A., Azizova Z.Sh., Khodzhanazarova S.Zh., Mahmudov L.U.,
            Avezdurdieva T.A. Investigation of the immunotropic activity of the obtained complexes in conditions of
            physiological norm //Journal of Theoretical and Clinical Medicine. – 2022. - No. 1. – pp. 14-17.</li>
        <li> Ashurova F.K., Yuldashev H.A., Tagayalieva N.A., Khodzhanazarova S.Zh., Azizova Z.Sh., Makhmudov L.U.,
            Ergasheva V.Sh., Avezdurdieva T.A. Investigation of the biochemical activity of the obtained complexes on
            the model of acute toxic hepatitis//Journal of Theoretical and Clinical Medicine. – 2022. - No. 3. – pp.
            11-14.</li>
        <li> Baratov K.R., Makhmudov L.U., Yakubova R.A., Vypova N.L., Abdugafurova D.G., Nazirova E.R., Tagayalieva
            N.A. Anti-inflammatory activity of the rutin complex with glycyrrhizic acid // Experimental and clinical
            pharmacology. - 2021.- No. 9. – pp.29-33.
            <a href="https://doi.org/10.30906/0869-2092-2021-84-9-29-33">link</a>
        </li>
        <li> Rakhmonova G.G., R.R. Makhmudov, K.R. Baratov, R.A. Yakubova, D.G. Abdugafurova, N.G. Abdullajanova,
            Tagayalieva N.A. Investigation of acute and subchronic toxicity of PS-5 substance obtained on the basis of
            polyphenols from Rhus glabra // Pharmaceutical Bulletin of Uzbekistan. – 2021. – No. 1 – pp.76-80.
            <a href="https://files.uzpharm-control.uz/index.php?dl=06bc27d8a542ba4402cc79e5a26618a0">link</a>
        </li>
        <li> Vypova N. L., Ziyaev H.L., Rejepov K.Zh., Ermatov A.M., Yakubova R.A., Tagayalieva N. A. Investigation of
            acute toxicity of the pharmacological drug Rometin with antiviral activity // Pharmaceutical Bulletin of
            Uzbekistan. – 2021. – No.2. – pp.50-53.</li>
        <li> Baratov Q., Mustafakulov M., Matchanov A., Vypova N., Yakubova R., Tagayalieva N. Glycyrrhizic acid and its
            derivatives as the carriers for the poorly soluble flavonoids // International Journal of Disaster Recovery
            and Business Continuity. – 2021. - No. 2 – p. 1-8.(Web of Science)
            <a href="http://sersc.org/journals/index.php/IJDRBC/issue/view/301">link</a>
        </li>
        <li> Enikeeva Z. M. Ibragimov A. A., Agzamova N.A., Vypova N.L., Saidhodjaeva S.S., Kholturaeva N. R., Abdirova
            A.Ch., Tuychiev O.D., Polatova J. Sh., Kadirova D. A., Salihov F. S. Study of the Antitumor Activity of the
            Drug Dekoglitz on Two Tumors and Some Aspects of Its Mechanism of Action . Journal of Oncology Research,
            Volume No. 3 | Issue No. 1 | January 2021, p.11-16 (IF-1.5)</li>
        <li> Ziyavidenova S. S., Vypova N. L., Enikeeva Z. M., Agzamova N. A.,Nishanov D. A., Madaliev A. A.,
            Alimkhodjaeva L. T. Study of the Toxic Features of the Antitumor Drug Decoglitz. American Journal of
            Medicine and Medical Sciences 2021, 11(10): 705-710</li>
        <li> Filatova A.V., Turaev A.S. and Vypova N.L. Experimental study of local anesthetic activity and acute
            toxicity of a combined gel//Pharmacevtical Chemistry Journal, Vol. 55, No.3, June,2021(Russian Original Vol.
            55, No.3, March,2021)/ DOI 10.1007/s11094-021-02415-y</li>
        <li> Filatova A.V., A. S. Turaev, N. L. Vypova, L. B. Azimova, and D. T. Djurabaev Isolation of polysaccharides
            from horse chestnut (Aesculus hippocastanum L.) shells and their acute toxicity and influence on the immune
            system // Pharmaceutical Chemistry Journal, Vol. 55, No. 4, July, 2021 (Russian Original Vol. 55, No. 4,
            April, 2021). DOI: 10.1007/s11094-021-02430-z.</li>
        <li> Dalimova S.N. Khamdamova N.A. Levitskaya Yu.V. Kuziev Sh.N. Gafurov M.B. Yuldashev H.A. Umarova G.B.
            Mukhamadzhonova G.M. Vypova N.L. Tagayalieva N.A. Mahmudov L.U. Khamraev S.H. Studies of antioxidant
            properties of some soluble forms of supramolecular complexes based on the monoammonium salt of glycyrrhizic
            acid // Universum: Chemistry and Biology. - 2021.- № 1 (79). – pp.16-22.</li>
        <li> Baratov K.R., Vypova N.L., Yakubova R.A. Matchanov A.D., Tagayalieva N.A. Study of acute toxicity and
            cumulative properties of a new soluble form of rutin // Journal Infection, immunity and pharmacology.-
            Tashkent, 2020.- no. - pp. 33-39.</li>
        <li> Baratov K.R., Mahmudov L.U., Matchanov U.D., Tagayalieva N.A. Comparative biological activity of
            supramolecular complexes of rutin // Universum: chemistry and biology. - 2020.- № 8 (74). - pp.15-18.</li>
        <li> Baratov K.R., Rakhmonova G.G., Makhmudov L.U. , Kuziev Sh.N., Matchanov U.D. Vypova N.L., Yakubova R.A.,
            Tagayalieva N.A. Evaluation of the anti-inflammatory and antioxidant action of the supramolecular complex
            rutin // Universum: chemistry and biology. - 2020.- № 9 (75). – pp. 8-14.</li>
        <li> Tagayalieva N.A., Yakubova R.A., Baratov K.R., Rakhmonova G.G. Racial roots of the Uzbek population //
            Vestnik TMA. - 2020. - No. 1. – pp.45-50.</li>
        <li> Tagayalieva N.A., Yakubova R.A., Baratov K.R., Rakhmonova G.G. Biomedical significance of race in
            pharmacotherapy // Vestnik TMA. - 2020. - No. 2. – from 36-40.</li>
        <li> Vypova N. L., Ziyaev H.L., Ermatov A.M., Rejepov K.Zh., Yakubova R. A., Tagayalieva N. A. The effect of the
            antiviral drug rometin on hematological and pathomorphological parameters of laboratory animals with
            repeated administration // Pharmaceutical Bulletin of Uzbekistan. – 2020. – No. 1. – pp.62-67.</li>
        <li> Agzamkhujaeva Kh.T., Mirzaakhmedov Sh.Y., Yakubova R.A., Tashmukhamedov M.S. Study of embryotoxic,
            teratogen actions of the drug «bakagin» from the parotid secretes central asian green toad bufo viridis Laur
            and its effect to the reproductive function of rats // European Journal of Biomedical and Life Sciences
            Scientific journal.- 2019. - № 3. – p. 23-29.</li>
        <li> Agzamkhujaeva Kh.T., Mirzaakhmedov Sh.Y., Yakubova R.A., Tashmukhamedov M.S. Investigation of the
            genetoxcity of new drag from the parotid secretes central asian green toad bufo viridis laur // European
            Journal of Technical and Natural Sciences Scientific journal. -2019. - № 4 - p.12-19.</li>
        <li> Ismailov S.I., Vypova N.L., Abrekova N.N., Fattakhov A.A., Mutalova M.R., Batyrbekov A.A. Study of
            immunomodulatory and hypoglycemic activity of glucosar No. 1 and glucosar No. 2 on models of alimentary and
            adrenaline hyperglycemia // Journal of Theoretical and Clinical Medicine, No. 1- 2019-Pp.6-9.</li>
        <li> Makhmudov L.U. Vypova N.L., Dalimova S.N., Matchanov A.D., Ismailov A.H. Filatova A.In The study of the
            hemostatic effect of herbal preparations. // Journal of Theoretical and Clinical Medicine, No.4-
            2019-C55-58.</li>
        <li> Raimova G.M., Musaeva M.K., Khoshimov N.N., Vypova N.L., Nasirov K.E. Selection and Study of Influence of
            Preparation 'СМС' on the Process of Cooking of Blood // Russian Journal of Biological Research, 2019, 6(1),
                16-21.</li>
        <li> Matchanov A.D., , Zainutdinov U.N., Islamov A.Kh., Vypova N.L., Tashpulatov F.N., Ecanov R.S., Matchanov U.
            D. , Sobirova F.A., Khakberdiyev Sh.V. Synthesis and hemostatic activity of supramolecular complexes
            lagochilina // Chemistry of Natural Compounds, Vol. 08, Issu.04 pp. 19812-19814. April. 2018.</li>
        <li> Matchanov A, Filatova A.V. Vypova N.L. Investigation of the blood-healing effect of a gel-based drug // DAN
            2018 No.4 pp.75-79.</li>
        <li> Matchanov A, Filatova A.V. Vypova N.L. Tashpulatov Investigation of the specific activity of a hemostatic
            gel on a hypocoagulation model in experimental animals //Pharmaceutical
            Bulletin No. 4 2018 pp.89-93</li>
        <li> Ismailov S.I., Alimov A.V., Yuldasheva F.Z., Vypova N.L. Abrekova N.N., Fattakhov A.A., Mutalova M.R.,
            Batyrbekov A.A. Comparative study of pharmacodynamics and immunotropic properties of the water-soluble drug
            aquayod in comparison with iodomarin 200 // Journal of Theoretical and Clinical Medicine, No. 3- 2018-pp.
            9-12.</li>
        <li> Filatova A.V., Dzhurabaev D.T., Vypova N.L., Azimova L.B., Turaev A.S. Pharmaco-toxicological studies of an
            external drug for the treatment of allergies // Infection, Immunity and pharmacology, No. 1- 2018- pp.64-68.
        </li>
        <li> Gafurova N.D., Vypova N.L., Khamidov Sh. A., Iskanderova S.D., Ziyaeva A.V. Studies of the effect of the
            anticoagulant drug cardin on models of adrenal myocarditis in rats // Therapeutic Bulletin of Uzbekistan,
            2018.-No.4,-pp.169-172.</li>
        <li> Gafurova N.D., Vypova N.L., Khamidov S. A., Iskanderova S.D., Ziyaeva A.V. The effect of the drug cardin on
            the level of nitric oxide and blood clotting processes in intact animals // Therapeutic Bulletin of
            Uzbekistan, 2018.-No.4,-pp.165-168.</li>
        <li> Rakhmonova G.G., Baratov K.R., Yakubova R.A., Fomina M.A., Nazirova E.R., Filatova A.V., Tagayalieva N.A.
            Study of genotoxicity of the pharmacological drug sulfogel in an in vivo test //Pharmaceutical Bulletin of
            Uzbekistan. – 2018. - No. 4. – pp.12-16.</li>
        <li> Rakhmonova G.G., Baratov K.R, Yakubova R.A., Mirzaakhmedova K.T., Aminov S.D. Preclinical study of the
            general toxicology of the drug "Fitin-S" // Infection, immunity and pharmacology. No.3. 2017. pp. 279-284.
        <li> Rakhmonova G.G., Baratov K.R., Yakubova R.A., Fomina M.A., Nazirova E.R., Filatova A.V., Tagayalieva N.A.
            Study of genotoxicity of the pharmacological drug sulfogel in an in vivo test //Pharmaceutical Bulletin of
            Uzbekistan. – 2018. - No. 4. – pp.103-106.</li>
    </ol>

    <h3>Monographs</h3>
    <ol type="1">
        <li>Preclinical study of a new antitumor and radiosensitizing drug Decocin and the results of Phase I of its
            clinical study (monograph) / Tillyashaykhov M.N., Enikeeva Z.M., Vypova N.L., Nishanov D.A., Agzamova N.A.,
            Ibragimov A.A., Usmanov R.H., Rakhmatullayeva D.T.//Tashkent, 2022, p.155.</li>
        <li> Karimov H.Ya., Saatov T.S., Ibragimov Z.Z., Alimov T.R., Ibragimova E.A., Boboev K.T., Tagayalieva N.A.
            Genetic aspects of osteoporosis development // Moscow: Rusains Publishing House, 2020. - 112s.
            <a
                href="https://www.litres.ru/raznoe-4340152/geneticheskie-aspekty-razvitiya-osteoporoza-63362221/">link</a>
        </li>
    </ol>

    <h3>Patents</h3>
    <ol type="1">
        <li> Matchanov A.D., Raimova K.V., Abdullajanova N.G., Tagayalieva N.A., Vypova N.L., Turdieva Z.V. Biologically
            active additive of antianemic action in capsules. Agency for Intellectual Property under the Ministry of
            Justice of the Republic of Uzbekistan. Utility model patent No. FAR 01752 dated 31.01.22 (Application number
            2021 0114 dated 16.04.2021).</li>
        <li> Salikhov Sh.I., Turaev A.S., Sagdullaev B.T., Turaboev Sh.M., Yakubova R.A., Beknazarova N.S., Atamuratov
            F.N., Abrekova N.N., Rakhmonova G.G., Baratov K.R., Ergasheva S.M., Umarov D.B. Method of obtaining an
            antiparkinsonian agent. Agency for Intellectual Property under the Ministry of Justice of the Republic of
            Uzbekistan. Utility model patent No. FAR 01750 (Application number 2021 01168 dated 05/21/2021).</li>
        <li> Islomov A.H., Vypova N.L., Baratov K.R., Makhmudov L.U./Obtaining Lagochilusa Oil Extract// Patent for
            invention Registration No. 4037 , date of deposit 28.10.2022 term of deposit from 28.10.2022 to 28.10.2027
        </li>
        <li> Mamatmusayeva N.E., Ziyaev H.L., Ermatov A.B., Vypova N.L., Abdugafurova D.G., Abrekova N.N., Sagdulaev
            B.T. A remedy for the treatment of ulcerative colitis //Utility model patent No. FAP 02156 dated 28.08.22
            FAP 2022 0308.</li>
        <li> Sagdullaev B.T., Turaev A.S., Turaboev Sh.M., Makhmudov S.D., Beknazarova N.S., Yakubova R.A., Abrekova
            N.N., Inogamov U.K., Atamuradov F.N., Mamatmusayeva N.E. "Mahalliy usimlik hom ashesi asosida surgi
            hususiyatiga ega vosita va uni olinish usuli" 7.06.16 yilda no. IAP 20160218 talabnoma berilgan, 14. 01.19
            yilda izhobiy karor olindi (no. IAP 05804 rakamli patent guvoҳnomasi).</li>
    </ol>

    <h3>Temoprary pharmacopoeial monograph (TPM)</h3>
    <ol type="1">
        <li> TPM for the substance, standard sample and Rutan tablets. Approved by GUKCLS and MT of the Ministry of
            Health of the Republic of Uzbekistan on 25.04.2014.</li>
        <li> Dalimov D.N., Salikhov Sh.I., Matchanov A.D., Vypova N.L., etc.. TPM for the substance, and Inebrin
            tablets. Approved by GUKCLS and MT of the Ministry of Health of the Republic of Uzbekistan on 11.07.2014
        </li>
        <li> A.S. Turaev, D.N. Dalimov, A.D. Matchanov, M.B. Gafurov, N.L. Vypova /Temporary pharmacopoeia article on
            the substance of Glilagin // TPM 42 Uz-3090-2017</li>
        <li> Sh.I. Salikhov, T.F. Aripov, D.N. Dalimov, B.A.Salphutdinov, M.B. Gafurov, N.L. Vypova, A.D. Athamova, H.A.
            Yuldashev, A.D. Matchanov // Temporary pharmacopoeia article on the substance GLAS // TPM 42 Uz-3089-2017.
        </li>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
    <h3>Projects:</h3>
    <ol type="1">
        <li> A-FA-2019-35 (2019-2022) "Development of immunotropic agents based on local plant raw materials"</li>
        <li> FA-A-10-002 (2017-2018) "Assessment of the genotoxic effect of drugs by cytogenetic test and DNA damage
            test during preclinical studies"</li>
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
    <h4>Contacts</h4>
    <p>Tel.: +998 97 723 44 54 </p>
    <p>e-mail: <a href="mailto:tnigora@mail.ru"> tnigora@mail.ru</a></p>
    <p>+998 90 926 83 40 (leading researcher Natalia Leonidovna Vypova)</p>
    <p>+998 97 753 81 20 (senior researcher Yakubova Rano Abdrimovna)</p>
    `
}