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
    <h2>Laboratory for the development of natural medicines based on biopolymers</h2>
    <h2>Uzbek-China Joint Laboratory «Modern Technologies of Biopolymers»</h2>
    <h3>Head of Laboratory</h3>
    <h3>Sharafitdin Mirzaakhmedov – PhD, Senior Research Associate</h3>

    <p>The laboratory was organized according to agreements on scientific cooperation between the Institute of
        Bioorganic Chemistry of the Academy of Sciences of the Republic of Uzbekistan and the Xinjiang Technical
        Institute of Physics and Chemistry of the Chinese Academy of Sciences dated March 17, 2014, as well as between
        the Institute of Bioorganic Chemistry and the Shanghai Institute of Materia Medica of the Chinese Academy of
        Sciences from November 15, 2017 on the topic “Research and development of natural medicines, based on
        biopolymers.”</p>

    
    <h4>Financial Resources of the Laboratory</h4>
    <ol type="1">
        <li> Scientific projects, obtained from the Ministry of Innovative Development of the Republic of Uzbekistan;
        </li>
        <li> Scientific projects obtained from the Science and Technology Committee of the People's Republic of China
            and from the Chinese Academy of Sciences Foundation;</li>
        <li> Funds allocated for thematic scientific projects by the venture company “Central Asian Research and
            Production Center of Biologically Active Compounds” of the Chinese Academy of Sciences;</li>
        <li> Scientific orders of FC LLC “China-Uzbekistan Medicine Technical Park”;</li>
        <li> Business agreements with various organizations;</li>
        <li> Income from other activities not prohibited by law.</li>
    </ol>
    `
}

function Research() {
    Laboratories_content.innerHTML = 
    `
    <h3>Scientific direction of the laboratory</h3>
    <p>Fundamental studies of physical and chemical properties of the biologically active protein and peptide compounds
        from the venoms of the Central Asian animals and medicinal plants growing in China, against cancer, diabetes,
        vitiligo, coronavirus, anti-inflammatory, as well as antioxidant, antiradical, various pathogenic microbes and
        fungi, and creation of medicines based on them.</p>

    <h3>Goal of the laboratory:</h3>
    <ol type="1">
        <li> Conducting advanced fundamental scientific research, jointly with the world's leading scientific
            organizations and implementation of scientific developments which having innovative potential.</li>
        <li> Training of highly qualified scientific personnel with the participation of leading scientists and
            prestigious research centers of the Chinese Academy of Sciences.</li>
    </ol>

    <h3>Tasks:</h3>
    <ol type="1">
        <li> Wide screening of biologically active compounds in vitro and in vivo, study of their structure and function
            relationship;</li>
        <li> Obtaining metal complexes of peptides against to various bacteria and diabetes;</li>
        <li> Study of the internalization process of anti-cancer peptides into glycol-forms of the Her2 protein of
            cancer cells and the mechanisms of glycan catabolism and understanding the stages of drug penetration into
            cancer cells;</li>
        <li> Investigation on ways to create a protective shell against proteases by modifying some functional peptides
            with hyaluronic acid, as well as aspects of delivering them to their destination intact without decay;</li>
        <li> Synthesis and modification of substances that inhibit the IRAK4 protein, the overexpression of which causes
            the development of cancer cells;</li>
        <li> Implementation of optical, geometric and microbiological synthesis of highly active compounds, creation of
            high-tech technologies;</li>
        <li> Introduction of technologies for the production of recombinant peptides.</li>
    </ol>

    <h3>Training of scientific personnel</h3>
    <ol type="1">
        <li> Periodic seminars will be organized twice a month, with the participation of professors of the Chinese
            Academy of Sciences through the ZOOM platform for talanted students of the chemical and biological faculties
            of the National University of Uzbekistan and the Tashkent Pharmaceutical Institute.</li>
        <li> Students will be divided into scientific groups and will be able to complete qualification and master's
            theses;</li>
        <li> At the FC LLC “China-Uzbekistan Medicine Technical Park”, foreign specialists will train employees in the
            technologies of creating dosage forms from pharmacologically active substances in accordance with
            international GMP standard;</li>
        <li> 2 students will be sent every year, to study for a master's degree at the partner universities of the
            Chinese Academy of Sciences at the expense of the UCAS fund;</li>
        <li> CAS-TWAS (Chinese Academy of Sciences and World Academy of Sciences) Foundation send every year 1 candidate
            to the partner institutions of the Chinese Academy of Sciences for PhD fellowship.</li>
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
    <h3>Implemented in vitro biological test systems in the laboratory</h3>
    <ol type="1">
        <li> Determination of coronavirus COVID-19 activity</li>
        <li> Inhibition of 3CL protease activity (SARS-CoV-2)</li>
        <li> Inhibition of ACE-II activity (COVID-19)</li>
        <li> Inhibition of Lysozyme activity (Breast cancer)</li>
        <li> Cathepsin H activity inhibitor (Prostatitis Cancer)</li>
        <li> Inhibition of N-nicotinamide methyltransferase activity (Cancer and diabetes)</li>
        <li> Inhibition of p300 enzyme activity (Cancer)</li>
        <li> Inhibition of HIV-1 reverse transcriptase activity (HIV activity)</li>
        <li> Inhibition of adenosyl homocysteinase (antiviral and antitumor)</li>
        <li> HRV 3C Protease, Assay Kit (Human Rhinovirus)</li>
        <li> Study of tyrosinase activity (Skin pigmentation)</li>
        <li> Study of DPP4 activity (Diabetes)</li>
        <li> Study of PLTP activity (Diabetes)</li>
        <li> Study A of monoamine oxidase activity (Antidepressant)</li>
        <li> Study of monoamine oxidase activity (Parkinson, Alzheimer)</li>
        <li> Study of calpainase activity (Alzheimer, Ischemia)</li>
        <li> Indoleamine 2,3-dioxygenase activity (Antineoplastik)</li>
    </ol>

    `
}

function Employees() {
    Laboratories_content.innerHTML = 
    `
        <h3>Scientific Staff:</h3>
        <img src="{% static '/Laboratories/DevelopmentPermit/image/Mirzaakhmedov.png' %}" alt="зав">
        <p>Sharafitdin Mirzaakhmedov – PhD, Senior Research Associate, Head of Laboratory</p>
        <p>Tashmukhamedov M.S. - DSci</p>
        <p>Kayumov M.B. - PhD</p>
        <p>Mukhamedov N.R. - PhD</p>
        <p>Asrorov А.М. - PhD</p>
        <p>Yashinov A.Sh.</p>
        <p>Pardaev A.U.</p>
        <p>Olimjonov Sh.S.</p>
        <p>Khakimov М.S.</p>
        <p>Nuriddinov Z.F.</p>
        <p>Mirzarakhmetova Z. - PhD Student</p>
        <p>Fazlitdinov Sh.J., Rajabov М.R., Ortiqov S., Azamatkhodjaev А. - students</p>
        <img src="staff.png" alt="сотрудники" width="600">
    `
}

function Publications() {
    Laboratories_content.innerHTML = 
    `
    <h3>Scientific achievements of the laboratory during 2022 – 2023 years</h3>
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

    <h3>Monography</h3>
    <ol type="1">
        <li> Akmal M. Asrorov, Fang Yuefei, Wang Huiyuan, Sharafitdin Ya. Mirzaakhmedov, Yongzhuo Huang /
            STIMULI-RESPONSIVE SYSTEMS FOR SMART DRUG DELIVERY SYSTEMS (Chapter No 14, page 389-420 in the Book
            «Advanced and Modern Approaches for Drug Delivery» Publisher: Stacy Masucci; Acquisitions Editor: Andre G.
            Wolff; Editorial Project Manager: Sam Young; Production Project Manager: Omer Mukthar; Cover Designer:
            Christian Bilbow). For information on all Academic Press publications visit our website at
            <a href="http://www.elsevier.com/books-and-journals">www.elsevier.com/books-and-journals</a>
    </ol>
    `
}

function Projects() {
    Laboratories_content.innerHTML = 
    `
        <h3>Scientific projects completed in the laboratory and currently being implemented</h3>
        <ol type="1">
            <li> Fundamental project, obtained from the Central Asian Center for Drug Research of the Chinese Academy of
                Sciences: “Investigation of protein-peptide components from the venoms of the Central Asian black widow
                Latrodectus tredecimguttatus, the Central Asian toad Bufo viridis and the Xinjiang toad Bufo gargarizans.”
                Implementation period: 2019-2022 years. Funding: $ 130,000.</li>
            <li> Fundamental project, obtained from the Ministry of Innovative Development: “Study of the molecular
                mechanisms of action of new biologically active compounds, isolated from reptiles, arachnids and amphibians
                for the treatment of diseases of social significance in Uzbekistan”
                Implementation period: 2021-2025 years. Funding: 6,187,000,000 soums for a period of 5 years.</li>
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
        <h3>Contacts</h3>
    `
}