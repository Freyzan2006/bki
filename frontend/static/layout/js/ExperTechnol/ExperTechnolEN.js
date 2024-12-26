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
    <h2>Experimental and production laboratory</h2>
    <h3>Head</h3>
    <h2>Makhmudov Sardor Dzhalilovich, (PhD)</h2>

    <h3>Laboratory history</h3>
    <p>The experimental and production laboratory was created in 1973. During the existence of the laboratory, it was
        headed by Ph.D. Ishbaev A.I., Doctor of Economics Kakharov A.K., Ph.D. Khaitbaev H.Kh., Doctor of Technical
        Sciences Saidakhmedov U.A., Doctor of Chemical Sciences Tashmukhamedov M.S., and Doctor of Chemical Sciences
        prof. Mavlyanov S.M. The laboratory operates a pilot production facility, where pilot batches of drugs are
        produced using the technology developed in the laboratory on semi-industrial installations.</p>
    <p>The pilot production enterprise (PPE) was organized in 1981, and since 1994 it has been operating as part of ETL.
        The leaders of the PPE were Yusupov A.Sh. (from 1980 to 1987); Inogamov K. (from 1987-1989); Isaev N.H.
        (from 1990 to 1994); Abdurakhmanov Sh.D. (from 1994 to 1996). This division of the institute developed a
        waste-free technology for producing effective drugs from waste from the oil and fat industry of Uzbekistan. As a
        result of this research, a “Method for obtaining an emulsifier for invert emulsion solutions” was developed
        (Isaev Kh.I., Abdurakhmanov A.S.), a process for producing tar (gossypol resin) was developed, which was the
        basis for the creation of preparations OGS-5 and IKM-1, which have antiviral activity against potato and tomato
        viruses. Ph.D. Isaev Kh.I. and Ph.D. Yusupov A.Sh. A method has been developed for producing suspended sulfur
        against spider mites. A large amount of work has been carried out to develop a technology for isolating gossypol
        from cotton family plants and obtaining technical gossypol, pharmacopeial gossypol, anthranilate gossypol,
        gossypoacetic acid (GAA) from technical gossypol by cold pressing (Ibragimov A.S., Otargaliev T., Saidakhmedov
        U.A., Salikhov Sh.I.). ETL has developed methods for the synthesis of several lupinin derivatives with high
        inhibitory activity towards hydrolytic enzymes and antiarrhythmic effects of distinct types of action (Khaitbaev
        Kh.Kh., Abduvakhabov A.A.).</p>
    <p>A simplified technology for obtaining the substances gossypol, batridene, and megosin has been developed
        (Saidakhmedov U.A., Ibragimov A.S.), as well as the first and second stages of the technology for the synthesis
        of winter and cotton bollworm pheromones ( Kholbekov O. Kh.). In its research, the laboratory traditionally
        deals with the development and implementation into production of the technology of drugs created at the
        institute - for medicine, the food industry, etc. Under the leadership of Doctor of Chemical Sciences.
        Mavlyanova S.M. conducted studies of the chemical composition of polyphenols in over 120 plants. The chemical
        composition and biological activity of the isolated compounds have been studied, and several effective antiviral
        drugs have been created based on these compounds.</p>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Research:</h3>
    <ul style="list-style-type:disc;">
        <li> development of technology to produce drugs created at the Institute for medicine, agriculture, and the food
            industry;
        <li> development of technology to produce high-grade cottonseed oil, production of pharmacopeial gossypol and
            GAA (gossypol acetic acid) from technical gossypol;
        </li>
        <li> production of bollworm pheromone and sets of pheromone traps;

        </li>
        <li> search for local promising polyphenol-containing plants. Search for optimal methods for isolating
            polyphenolic compounds. Study of the chemical structure and biological activity of isolated compounds;
        </li>
        <li> creation and production of original antiviral, hypoglycemic drugs from plant polyphenols;

        </li>
        <li>development of original effective hemostatic agents based on local plant materials;

        </li>
        <li> organization of experimental production of substances (active ingredients of medicines and biologically
            active additives) and finished dosage forms, as well as preparations for use in agriculture;
        </li>
        <li>development of industrial technologies to produce substances and finished dosage forms using modern methods
            in accordance with GMP requirements;
        </li>
        <li> quality control, determination of stability, shelf life of substances and finished dosage forms;</li>
        <li>obtaining and researching new biologically active compounds to create effective medicines and dietary
            supplements.
        </li>
    </ul>

    `
}

function results() {
    Laboratories_content.innerHTML = 
    `
    <h3>Results:</h3>
    <p>Technologies have been developed for the production of: high-sispol cottonseed oil in industrial conditions;
        technical gossypol from industrially produced high-gossypol cotton oil; pharmacopeial gossypol and gossypoacetic
        acid; highly purified cottonseed oil under the trade name "Yogdu", which meets the requirements of the world
        standard for color; antiviral agent liniment gossypol 1%; antiherpetic agent - Megosin ointment; anti-influenza
        drug - Rutan; bollworm pheromone and production of pheromone trap sets; low gypsum cotton meal (LGCM).</p>
    <p> In accordance with the requirements of the State pharmacopoeia XI, the physicochemical parameters of the
        substances Rutan, Gossitan, Getasan, Punitan and Euphorbin were studied. Standard samples and dosage forms have
        been selected. Full preclinical pharmaco-toxicological studies were carried out. Based on the data obtained, TPM
        projects were drawn up for substances, standard samples, and dosage forms of drugs: Rutan 0.025, Gossitan 0.025,
        Getasan 0.01, Punitan 0.01, Euphorbin 0.025. Permission was received from Main Directorate for Quality Control
        of Medicines and Medical Equipment of the Ministry of Health of the Republic of Uzbekistan to conduct clinical
        trials of Rutan a, Gossitan a, Getasan a. Patents were received from the Republic of Uzbekistan for Rutan and
        Gossitan as anti - influenza drugs, Getasan and Punitan as drugs with anti-HIV activity.</p>
    <p> The anti-inflammatory activity of the drug “Plantagin”, isolated from the plant P lantago major L., was
        determined, as well as the anti-exudative activity of which was 70% compared to the control. It has been proven
        that the drug "Plantagin" has a hypoglycemic effect. Based on the results obtained, an application was submitted
        to the Intellectual Property Agency of the Republic of Uzbekistan for patenting “Antidiabetic drug” (JAP 2016
        0404., 09.29.2016). The drug "Plantagin", having hypoglycemic and antiexudative properties, makes it possible to
        create new effective anti-inflammatory and antidiabetic drugs based on it.</p>
    <p> Based on the Lagoch ilus in e brians plant an effective hemostatic agent Inebrin has been developed. The
        substance was developed jointly with the Institute of Chemistry of Plant Substances of the Academy of Sciences
        of the Republic of Uzbekistan.</p>
    <p> Based on the diterpenoid lagoquilin, a number of supramolecular complexes have been obtained that have an
        effective hemostatic effect. Appropriate technical specifications have been developed for substances and
        hemostatic dosage forms in the form of tablets, solutions for intravenous use, collagen films, ointments and
        suppositories. Clinical trials have been conducted and production permits have been obtained.</p>
    `
}

function Achievements() {
    Laboratories_content.innerHTML = 
    `
    <h3>Achievements:</h3>
    <ul style="list-style-type:none;">
        <li>The technology to produce high-grade oil was introduced into the production of the joint venture "TsASK Oil"
            Division ". At the Institute's pilot plant, the following are produced: pharmacopeial gossypol and
            gossypoacetic acid;</li>
        <li> The produced bollworm pheromones and sets of pheromone traps are widely used on cotton plantations of the
            Republic;</li>
        <li> The technology to produce low-grade cotton meal has been introduced into industry (in 11 oil and fat
            enterprises of the Republic);</li>
        <li> Antiviral and interferon-inducing drug RUTAN introduced into medical practice (permission for production,
            wide medical use (№ 01-14 CERTIFICATE) was obtained, PhMs for a standard sample (PhM 42 Uz–2514-201 8),
            substance (PhM 42 Uz–2515-201 8), medicinal Rutan form (TPhM 42 Uz–2516-201 5). The Registration Certificate
            for Rutan was received (DV/M 00339/09/15). The pilot project for Rutan tablet production was approved.</li>
        <li> For drugs with anti-influenza activity - GOSSITAN and anti-HIV actions - Getasan received permission to
            conduct clinical trials;</li>
        <li> Preclinical pharmaco-toxicological studies have been completed, a package of documents has been submitted
            to the State Institution “Center for the Safety of Pharmaceutical Products” under the Ministry of Health of
            the Republic of Uzbekistan to obtain permission to conduct clinical trials of the antihypoxic drug PROVIDIN
            and the anti-HIV drug EUFORBIN.</li>
        <li> The substance of the anti-inflammatory drug Glyciram was developed and introduced into production.</li>
        <li> New original hemostatic preparations based on plant raw materials Glilagin and Lagovin have been developed,
            as well as generic Inebrin. Clinical trials of dosage forms in the form of tablets and injections were
            conducted and permission for use was obtained;</li>
        <li> Permission was received to produce the dietary supplement “Ravonol”, which has a laxative effect (Permit
            No. 000335);</li>
        <li> Optimal composition and technology have been developed receiving the antiparkinsonian drug "Pramipexole"
            Bio "in tablets of 0.25 mg No. 30 (Certificate R/DV/M 02569/05/19);</li>
        <li> Production of the original antiviral drug “Rutan” in 25 mg tablets No. 20 was organized;</li>
        <li> Anti-tuberculosis drug “Biomayrin” in capsules 600 mg each No. 20; </li>

        <li> Optimal compositions, production technologies have been developed and pilot batches have been produced for
            clinical trials of the following drugs:
            <ul style="list-style-type:disc;">
                <li> and the anti-lamydial drug "Gozalidon" in capsules 100 mg each No. 20;</li>
                <li> antiviral drug "Ragosin" in capsules of 50 mg No. 10;</li>
                <li> immunosuppressive drug " Mebavin " in capsules of 100 mg No. 20.</li>
            </ul>
        </li>
        <li> A laboratory technology has been developed for producing the original combined antibacterial agent
            “Sulfapect”, which has a prolonged effect.</li>

        <li> The following patents for the invention have been received:
            <ol type="1">
                <li> Patent Uz №. IAP 2010 0392 dated 04/11/2012. Salikhov Sh.I., Mavlyanov S.M., Karamov E.V.,
                    Abdulladzhanova N.G., Kornilaeva G.V., Sidorovich I.G., Khaitov R.M. “A drug exhibiting anti-HIV
                    activity.”</li>
                <li> Patent Uz №. IAP 2010 0393 dated 04/11/2012. Salikhov Sh.I., Mavlyanov S.M., Karamov E.V.,
                    Abdulladzhanova N.G., Kornilaeva G.V., Sidorovich I.G., Khaitov R.M. “A drug exhibiting anti-HIV
                    activity.”</li>
                <li> Patent Uz №. IAP 2010 0390 dated May 16, 2012. Salikhov Sh.I., Mavlyanov S.M., Karamov E.V.,
                    Abdulladzhanova N.G. “A drug that has an anti-influenza effect.”</li>
                <li> Patent Uz №. IAP 2010 0391 dated May 16, 2012. Salikhov Sh.I., Mavlyanov S.M., Karamov E.V.,
                    Abdulladzhanova N.G. “A drug that has an anti-influenza effect.”</li>
                <li> Patent Uz №. IAP 2010 0563 dated July 23, 2012. Mavlyanov S.M., Abdulladzhanova N.G., Shamuratov
                    B.A., D.N. Dalimov, Salikhov Sh.I. "A drug exhibiting antitumor activity."</li>
                <li> Patent Uz №. IAP 2010 0477 dated June 18, 2012. Mavlyanov S.M., Abdulladzhanova N.G., Pirniyazov
                    A.Zh., Dalimov D.N., Kurmukov A.G., Salikhov Sh.I. "A drug with antihypoxic activity."</li>
                <li> Patent Uz №. IAP 04666 dated March 23, 2013. Salikhov Sh.I., Mavlyanov S.M., Karamov E.V. “A drug
                    exhibiting anti-HIV activity.”</li>
                <li> IAP 06027 dated 10/08/2019. "Antidiabetic drug." Asrarov M.I., Mavlyanov S.M., Shkinev A.V.,
                    Pozilov M.K., Makhmudov R.R., Abdulladzhanova N.G., Ergashev N.A., Abdullaeva G.T., Salikhov Sh.I,
                    Sagdullaev B.T., Turaev A.S., Turaboev Sh.M., Makhmudov S.D.</li>
                <li> Beknazarova N.S., Yakubova R., Abrekova N.N., Inogamov U.K., Atamuratov F.N., Mamatmusaeva N.E. A
                    product based on local plant raw materials with a laxative effect and a method for its preparation /
                    / Patent for invention of the Republic of Uzbekistan. №. IAP 05804 dated 04/05/2019 // –T. –2019. –
                    11 s.</li>
                <li> Makhmudov S.D., Abrekova N.N., Abidova A.D., Tseomashko N.E., Turaboev Sh.M., Beknazarova N.S.,
                    Atamuratov F.N., Akhmedov O.R., Mamadrakhimov A.A., Turaev A.S., Sagdullaev B.T. Wound healing
                    coating // Patent for an invention of the Republic of Uzbekistan. №. IAP 06575 dated 10.21.2021 //
                    –T. –2021. – 20 s.</li>
                <li> Salikhov Sh.I., Turaev A.S., Sagdullaev B.T., Shomurotov Sh.A., Akhmedov O.R., Beknazarova N.S.,
                    Abrekova N.N., Sherimbetov S.G., Makhmudov S.D., Turaboev Sh.M., Mamatmusaeva N.E., Atamuratov F.N.,
                    Sagdullaev B.B., Aisa Azhi Aikebayer, Abulimiti Yili. Pharmaceutical composition with antibacterial
                    effect // Patent for invention №. IAP 06523 // - T. - 2021.</li>
                <li> Salikhov Sh.I., Turaev A.S., Sagdullaev B.T., Abrekova N.N., Akhmedov O.R., Beknazarova N.S.,
                    Makhmudov S.D., Turabov Sh.M., Atamuratov F.N., Yusupova N.F., Mukhammatova S.Zh., Ziyaev M.A.
                    Polymer complex with antimicrobial and prolonged action // Patent for invention №. IAP 06622 // - T.
                    - 2021.</li>
            </ol>
        </li>

        <li> The following regulatory and technical documents have been developed:
            <ol type="1">
                <li> PhM 42 Uz-2516-2020 “Rutan” tablets 25 mg</li>
                <li> PhM 42 Uz-2514-2018 “Rutan” standard sample</li>
                <li> PhM 42 Uz-2515-2018 “Rutan” substance</li>
                <li> TPhM project 42 Uz - 2018 “Euphorbin” tablets 25 mg</li>
                <li> TPhM project 42 Uz - 2018 “Euphorbin” substance</li>
                <li> Sagdullaev B.T., Turaboev Sh.M., Makhmudov S.D., Beknazarova N.S., Atamuratov F.N., Mamatmusaeva
                    N.E., Abrekova N.N. Organization standard Ts 03535693-25:2017 for the biologically active food
                    additive "Ravonol" // registered in "O'ZSTANDART AGENTLIGI" under number 112/007370 dated
                    10/06/2017. -Tashkent. –2017. –11 s.</li>
                <li> Sagdullaev B.T., Turaboev Sh. M., Beknazarova N.S., Makhmudov S.D., Atamuratov F.N. Technological
                    instructions for the production of dietary supplement “Ravonol”, TI 03535693-25:2017, Tashkent 2017.
                </li>
            </ol>
        </li>

        <li> Registration certificates received:
            <ol type="1">
                <li> Registration certificate DV/M 00339/09/15 Rutan tablets 25 mg</li>
                <li> Registration certificate DV/M 03417/07/20 Rutan substance</li>
            </ol>
        </li>
    </ul>
    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
    <h3>Employees</h3>
    <ol type="1">
        <li> Makhmudov Sardor Djalilovich, head of the laboratory, c.t.s. (PhD)</li>
        <li> Nabiev Abdusamad Khamidovich, senior researcher, c.t.s.</li>
        <li> Isamukhamedov Aribjan Shukurovich, senior researcher, c.ch.s.</li>
        <li> Ibragimov Abdurakhmon Safievich, junior researcher</li>
        <li> Kholbekov Omankul Khudayarovich, senior researcher, c.ch.s.</li>
        <li> Ziyaev Khairullah Lutfullaevich, chief researcher, Doctor of Chemical Sciences</li>
        <li> Sagdullaev Bakhodir Takhirovich, chief researcher, doctor of technical sciences, professor</li>
        <li> Otamurodov Mirmukhsin Mansurovich, junior researcher</li>
        <li> Abrekova Najie Narimanovna, junior researcher</li>
        <li> Turaboev Shukhrat Makhmadalievich, senior researcher, c.t.s. (PhD), doctoral student (DSc)</li>
        <li> Beknazarova Nuria Seitbaevna, basic doctoral student (PhD)</li>
        <li> Umarov Doniyor Bakhtiyarovich , basic doctoral student (PhD)</li>
        <li> Abdulkhamidova Odinakhon Abdujabbor kizi, laboratory assistant</li>
        <li> Aytimbetova Dilnoza Tozoboy kizi, laboratory assistant</li>
    </ol>
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3>Publications</h3>
    <ol type="1">
        <li> E. Olchowik-Grabarek, I. Swieckicka, Z. Andreeva-Kovaleskaya, A. Solonin, D. Bonarska-Kujawa, H.
            Kleszczynska, S. Mavlyanov, M. Zamaraeva “Role of Structural Changes Induced in Biological Membranes by
            Hydrolysable Tannins from Sumac Leaves (Rhus typhina L.) in their Antihemolytic and Antibacterial Effects”
            // J Membrane Biol., 2014, pp. 533–540.</li>
        <li> A. Ergashev, R. Eshchanov, G. Yakubov, A. Rakhimov, N. Turdieva, N. Turaeva, Kh. Urinova, A. Matchanov.
            Cultivation of drug-dye plant indigofera variety “Feruz -1” for the re-cultivation in degraded lands of Aral
            Sea Region. J. Chem. Chem. Eng. 8 (2014) 707-716.</li>
        <li> A. Ergashev, G. Yakubov, A. Matchanov , N. Turaeva, Development of biotechnology of dye & of drug plant
            indigofera variety “Feruz -1” for the improving of sale lands of the Aral Sea Basin. International Journal
            of Development Research Vol.5. issue 12. pp 6213-6218.December. 2015.</li>
        <li> Borisova M.P., Kataev A.A., Mavlyanov S.M., Abdullajanova N.G. Effects of Hydrolysable Tannins on Native
            and Artificial Biological Membranes // Membrane and Cell Biology, 2015, Vol. 9, No. 1, pp. 53–60.</li>
        <li> Khoshimov N.N., Rakhimov R.N., Nasirov K.E. Research of action of drug Rutan on various sites of
            GABA-receptor at chronic alcoholic intoxication // Eastern European Scientific Journal.Dusseldorf –
            Germany.Ausgabe No. 3. 2015. P. - 32 -37.</li>
        <li> Khoshimov N.N., Rakhimov R.N., Nasirov K.E. The Research of Action of Preparations Rutan and Gossitan on
            the Glutamate Excitotoxic Mediated by NMDA-receptor at Chronic Alcoholic Intoxication and Cancellation of
            Ethanol // Russian Journal of Biological Research, 2015. V. 4. P .- 60-65.</li>
        <li> E. Olchowik-Grabarek, S. Mavlyanov, N. Abdullajanova, R. Gieniusz, M.Zamaraeva. Specificity of
            hydrolysable tannins from Rhus typhina L. to oxidants in cell and cell-free models // Appl Biochem
            Biotechnol. DOI 10.1007/s12010-016-2226-1. Published online 06 September 2016</li>
        <li> S. Sękowski, M. Ionov, A. Dubis, S. Mavlyanov, M. Bryszewska, M. Zamarajewa. Biomolecular Interactions
            of Tannin Isolated from Oenothera gigas with Liposomes // J. Membrane Biol (2016) 249:171-179.</li>
        <li> Sekowski S., Ionov M., Abdullajanova N., Makhmudov R., Mavlyanov S., Milowska K., Bryszewska M. Zamaraeva
            M. Interaction of α-synuclein with Rhus typhina tannin – Implication for Parkinson's disease Interaction of
            α-synuclein with Rhus typhina tannin – Implication for Parkinson's disease // Colloids and Surfaces B:
            Biointerfaces 155 (2017) 159–165.</li>
        <li> Olchowik-Grabarek E., Abdullajanova N., Mavlyanov S., Gieniusz R., Zamaraeva M. Specificity of hydrolysable
            tannins from Rhus typhina L. to oxidants in ell and cell-free models // Appl BioChem Biotechnology. 2017,
            Volume 181, Issue 2, pp. 495–510.</li>
        <li> Khoshimov N. N., Rakhimov R.N., Akhmedova GB, Azizov VG. Investigation of the Effect of Polyphenol
            Euphorbin on the Transport of L Glutamate and Calcium Channels to Synaptosomes of Rat Brain // European
            Journal of Medicine. Slovakia. 2018, 6(2): 72-82.</li>
        <li> Mavlyanov S.M., Abdullajanova N., Salikhov Sh.I., Shamuratov B.A., Rakhimov R.N., Makhmudov R.R.
            Polyphenols of plants of Central Asia and theirbiological activity// Uzbek biological Jornal. 2017.
            Tashkent. No. 6. R. 3-5.</li>
        <li> Sekowski S., Zamaraeva M., Bitiucki M., Mavlyanov S., Abdullajanova N., Ionov M., Zdeb M., Bryszewska M.,
            Rakhimov R. Influence of valoneoyl groups on the interactions between Euphorbia tannins and human serum
            albumin // Journal of Luminescence. V.194 (2018) P.170–178.</li>
        <li> Olchowik-Grabarek E., Makarova K., Mavlyanov S., Abdullajanova N., Zamaraeva M. Comparative analysis of BPA
            and HQ toxic impacts on human erythrocytes, protective effect mechanism of tannins (Rhus typhina) // Environ
            Sci. Pollut. Res. 2018, Volume 25, Issue 2, pp. 1200–1209.</li>
        <li> Sekowski S., Terebka M., Veiko A., Lapshina E., Sulkowska U., Zavodnik I.B., Mavlyanov S., Abdullajanova
            N., Roszkowska A., Zamaraeva M. Epigallocatechin gallate (EGCG) activity against UV light-induced photo
            damage in erythrocytes and serum albumin—theoretical and experimental studies// Journal of Photochemistry
            and Photobiology A: Chemistry 356 (2018) P.379–388.</li>
        <li> Gayibov U.G., Komilov E.J., Rakhimov R.N., Abdullajanova N.G., Ergashev N.A., Asrorov M.I., Aripov T.F.
            Antioxidant and Membrane-Active Properties of 1,4,6 tri-o-galloyl-2,3-valoneyl- β -d- glucose // European
            Journal of Medicine. Series B, 2018, 5(1).</li>
        <li> Matchanov A.D., Zaynutdinov U.N., Islamov A.Kh., Vypova N.L., Tashpulatov F.N., Esanov R.S., Matchanov
            U.D., Sobirova F.A., Khakberdiev Sh.M. Synthesis and hemostatic activity of Supramolecular complexes Lago
            with Hillin International Journal of Development Research. Vol. 08. Issue 04. April. 2018. pp. 19812-19814.
        </li>
        <li> Gayibov U.G., Komilov E.J., Rakhimov R.N, Abdullajanova N.G., Ergashev N.A., Asrorov M.I., Aripov T.F
            Influence of new polyphenol compound from Euphorbia plant on mitochondrial function// J. Microbiol Biotech
            Food Sci. 2019: 8 (4) 1021-1025</li>
        <li> Ergasheva F.Sh. Kushiev Kh.Kh. Matchanov A.D, Ishimov U.J., Khushmatov Sh.S. Pozilov M.K. Identification of
            Chemical Content of Fruit and Peel's Extract of Some Varieties of Pomegranate (Punica granatum L.)
            International Journal of Current Microbiological and Applied Sciences. 2019. 8(5). P. 734-742.</li>
        <li> Ergasheva F.Sh. Kushiev Kh.Kh. Matchanov A.D., Ishimov U.J., Khushmatov Sh.S. Chemical analysis of
            Pomegranate (Punica granatum L.) Fruit and Peel's Extract Materials of the International Conference/
            Scientific Research of the SCO Countries: Synergy and Integration. Beijing, China. 2019. June 14. P.85-88.
        </li>
        <li> Lidiya Izotova, Gulnara Shakirzyanova, Omankul Kholbekov, Shukhrat Turageldiyev, Bahrom Babaev and Bahtiyar
            Ibragimov. Crystal structure and Hirshfeld surface analysis of two organic salts based on 1,3,4-thiadiazole
            derivatives. Acta Crystallographic, Section E, Crystallographic Communications, 2023, E79, p.1-5.
            https//doi.org/10.1107/S2056989022012154;</li>
        <li> Gulnara Shakirzyanova, Abdusamat Nabiev, Omon Kholbekov, Vladimir Abdukakharov. Pheromone Monitoring in the
            Granaries of Uzbekistan. Agricultural Sciences, 2023, v.14, N4, p.499-508. https :// doi . org /10.4236/ as
            .2023.144033 . </li>
        <li> Sagdullaev B.T., Turaboev Sh.M., Zainutdinova G.F., Makhmudov S.D., Atamuratov F.N., Beknazarova N.S. Study
            of the process of isolation of polysaccharides from Prunus fruits domestica L. // Pharmaceutical journal.–
            T. – 2016, No. 1. – S. 25-29.</li>
        <li> Mamatmusaeva N.E., Turaboev Sh.M., Beknazarova N.S., Makhmudov S.D., Abrekova N.N., Sagdullaev B.T.
            Development of the composition of the finished dosage form of the dietary supplement “Ravonol” //
            Pharmaceutical Bulletin of Uzbekistan. – T. – 2016, No. 3, – S. 67-71. </li>
        <li> Abrekova N.N., Turaboev Sh.M., Makhmudov S.D., Mamatmusaeva N.E., Sagdullaev B.T. The Study of Laxative
            Activity of Polysaccharides from the Fruit of Prunus Domestica L. // European Sciences Review . Austria ,
            Vienna . – 2016, No. 9-10 ( September-October ). – P. 52-54.</li>
        <li> Abrekova N.N., Turaboev Sh.M., Makhmudov S.D., Sagdullaev B.B., Yakubova R.Ya., Sagdullaev B.T.
            Pharmatoxicological study laxative substances and capsules facilities Ravonola // Journal of Infection
            Immunity and Pharmacology . – T. – 2017, No. 2, – pp. 20-24.</li>
        <li> Turaboev Sh.M., Otamurodov M.M., Atamuratov F.N., Innogamov U.K., Sagdullaev B.T., Zainutdinova G.F.,
            Makhmudov S.D. Dietary supplement "Ravonol" // Journal of Food Industry. – 2015, No. 2. – pp. 23-25.</li>
        <li> Beknazarova N.S., Makhmudov S.D., Turaboev Sh.M., Abrekova N.N., Atamuratov F.N., Sagdullaev B.T.
            Mathematical modeling and optimization of parameters for the extraction process of water-soluble
            polysaccharides from Prunus fruits domestica L. / Scientific and technical journal of the Fergana
            Polytechnic Institute, special issue No. 1, 2019. pp. 129-134. (05.00.00; 20)</li>
        <li> Abrekova N.N., Makhmudov S.D., Atamuratov F.N., Turaboev Sh.M., Sagdullaev B. T. Local irritant effect of
            the dietary supplement " Ravonol " when applied to the skin and mucous membrane of the eye // Medical
            Journal of Uzbekistan, No. 5, 2018. 94-96 pp. (14.00.00; 8)</li>
        <li> Makhmudo in S.D., Beknazarova N.S., Mamatmusaeva N.E., Sagdullaev B.T. Standardization of tannins obtained
            from horse sorrel (Rumex confertus Willd.) / Pharmaceutical Bulletin of Uzbekistan. 2018 No. 1, 49-53 p.
            (15.00.00; 4)</li>
        <li> Beknazarova N.S., Makhmudov S.D., Abrekova N.N., Mamatmusaeva N.E., Sagdullaev B.T. Isolation of tannins
            from the Rumex plant confertus Willd. / Pharmaceutical Bulletin of Uzbekistan. 2018 No. 1, 44-48 p.
            (15.00.00; 4)</li>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
    <h3>Projects</h3>
    <h4>AS-A12-T160 “Development of anti - flu (Rutan, Gossitan ) and anti-HIV ( Getasan , Punitan) drugs based on
        polyphenols of local plant materials” ( 2009-2011 yy.)</h4>
    <p> Rutan, Gossitan, Getasan and Punitan were isolated in quantities necessary to produce dosage forms of the drugs.
        The data obtained served as the basis for drawing up pilot industrial regulations for the isolation of
        substances of the drugs Rutan, Gossitan, Punitan and Getasan from plant materials.</p>

    <h4>ИФА 2012-6-6 “Organization of production of medicines, anti-influenza (Rutan, Gossitan ), anti-HIV ( Getasan )
        actions based on polyphenols of local plant raw materials” ( 2012-2012 yy.)</h4>
    <p> The isolation of drug substances was carried out in quantities sufficient to produce dosage forms (Rutana -
        1200g, Gossitana - 250 г, Getasan - 200 г.)
        Dosage forms were obtained in quantities sufficient to conduct clinical studies. The tablets were given to the
        State University of Clinical Medicine and the Ministry of Health of the Republic of Uzbekistan for analysis of
        compliance with the physicochemical parameters described in the TPhM and are approved for clinical trials. Draft
        pilot industrial regulations for drug production have been drawn up.
        Permission was received from the Ethical Commission to conduct clinical trials of Rutan, Gossitan. Clinical
        trials of Rutan have been successfully completed. Agreements have been drawn up with the Tashkent Medical
        Academy, 1 city clinical hospital, 2 Republican clinical hospital to conduct clinical trials of Gossitan. The
        drug Getasan is recommended for clinical trials as an anti-HIV drug at the Republican AIDS Center
        .</p>

    <h4>A-11-T-051 “Development of the drug Euforbin, which has anti-AIDS activity” (2012-2014 yy.)</h4>
    <p>The choice of the best method for isolating the sum of polyphenols from the roots of euphorbia, dividing it into
        its constituent components and giving them for screening to find the active principle of the sum of polyphenols
        has been done. It was revealed that the sum of polyphenols has greater activity than individual compounds. Based
        on the data obtained, laboratory regulations for obtaining the substance Euphorbin were developed.
        Draft TPhM for the substance of the drug, Standard Sample and dosage form have been drawn up.</p>

    <h4>A-12-T-052 “Development of the drug Providin, which has antihypoxic activity” (2012-2014 yy.)</h4>
    <p>The best method for isolating polyphenols from grape seeds and a method for isolating individual compounds have
        been developed. It has been shown that the drug Providin consists of 6 substances of phenolic nature.
        The choice of a method for figuring out the parameters of the drug was carried out following the requirements of
        Pharm. committee of the Republic of Uzbekistan.
        Based on the data obtained, laboratory regulations for obtaining the substance Providin, TPhM for the substance
        and dosage form were developed.
        A dosage form of the drug has been developed in quantities sufficient for clinical trials.</p>

    <h4>I-6-AS-T031 Organization of mass production of the dietary supplement "Ravonol" with laxative properties
        (2016-2017 yy.)</h4>
    <p>A technology has been developed for obtaining the substance of the dietary supplement “Ravonol” from the fruits
        of the plum Prunus domestica L.
        A method for chemical standardization of the substance of the dietary supplement “Ravonol” has been developed.
        The technological properties of the substance were studied and the best composition for encapsulating the
        finished product was selected. A patent application has been filed with the Intellectual Property Agency (No.
        IAP 20160218 dated 06/07/2016). An application for a trademark and service mark has been filed with the
        Intellectual Property Agency (No. MGU 20172303 dated 08/10/2017). Comparative pharmacological studies of the
        laxative effect of Ravonol with other laxatives have been conducted medicines. An international identification
        number has been obtained for the biologically active food additive “Ravonol”.</p>
    <p> An organization standard Ts 03535693-25:2017 for the “Dietary active food additive “Ravonol” has been developed,
        approved (dated 09/26/2017 by the Republican Center for State Sanitary and Epidemiology of the Ministry of
        Health of the Republic of Uzbekistan) and registered (No. 112/007370 dated 10/06/2017 by the Uzstandart Agency).
        Technical conditions" in the state and Russian languages.</p>
    <p>Technological instructions for the production of the biologically active food additive “Ravonol” have been
        developed. Pharmaco-toxicological studies of the substance and the finished capsule form of the food supplement
        “Ravonol” were carried out. A limited license agreement has been drawn up for the sale of the biologically
        active food additive “Ravonol” with LLC “Lakhisam”.</p>
    <p> Serial production of the biologically active food additive “Ravonol” was organized in the form of a substance
        and a finished capsule form.</p>

    <h4>PZ-20170919160 Development of a new combined antibacterial drug “Sulfapect” with prolonged action (2018-2020
        yy.)</h4>
    <p>Chemical modification of low molecular weight sulfamethoxazole with polysaccharide derivatives (pectin, alginic
        acid and carboxymethylcellulose) was carried out. Optimal reaction conditions have been identified that make it
        possible to synthesize polymeric sulfamethoxazole derivatives with various physicochemical characteristics.
        Optimal conditions for obtaining the substance “Sulfapect” were experimentally found. Methods have been
        developed to standardize the main components and substance “Sulfapect”. A TPhM project has been developed for
        the raw materials and substance of the new long-acting combination drug “Sulfapect”.</p>
    <p>A preclinical study of the antibacterial activity of the “Sulfapect” agent was carried out under in vitro (on 17
        strains). A draft pilot industrial regulations and technological instructions for the substance of the new
        long-acting combination drug “Sulfapect” have been developed.</p>
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
    <p>Phone: +99890 167-05-83</p>
    <p>E-mail: s_telecom@mail.ru</p>
    `
}