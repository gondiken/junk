# Local demand for outsourced electronics test development in Czechia, Slovakia and neighbours (state: November 2026)

Scope: functional test fixtures, end-of-line (EOL) testers and their test software, bought by contract electronics manufacturers (EMS) and product companies. Continues section 6 of `ai_designed_electronics.md`; facts already recorded there (fixture price ranges from vendor blogs, Ingun MA series, OpenHTF, in4ma 2023–2025 market trend, the first list of small Czech assemblers) are not repeated.

Method note (read first): page fetching was blocked, so every statement below comes from search-result extracts, not from full pages. All 14 permitted searches were used; none was refused. The Czech- and Slovak-language supplier searches returned mostly university theses and foreign catalogue pages, so the absence of a supplier here means "did not surface in 14 searches", not "does not exist". Where an extract did not make clear which of several pages a statement came from, that is flagged. Things I know from before this session but could not confirm by search sit under "Gaps" and are marked "unconfirmed prior knowledge".

Terms: EMS = contract electronics manufacturer; ICT = in-circuit test (checks individual components through a bed of spring probes); FCT = functional test (powers the board and checks it works); EOL tester = the final test station on a production line; ATE = automatic test equipment.

## 1. Do Czech and Slovak EMS and product companies outsource test fixtures, functional testers or test software? Who sells this locally?

### Takeaway
The searches did not surface a single Czech or Slovak firm that openly advertises "we build your functional test fixture and software" to small manufacturers with a price or lead time. What surfaced instead were (i) a few system-level suppliers that sell their own tester platforms or bespoke test systems (UNITES Systems, IFTSolution, MACH SYSTEMS, Applied Precision), (ii) manufacturers that build testers in-house and write about it (Ryston), and (iii) a steady stream of master's theses building product-specific testers for named companies. The decisive question is therefore still open, but the visible pattern is "in-house or student-built at the small end, system integrators at the large end".

### Cited Findings

Local suppliers found (Czechia, Slovakia)
- UNITES Systems a.s. (Valašské Meziříčí, Czechia): "development and production of dedicated test and measurement systems – ATE solutions for semiconductor devices [and] various kinds of industrial sectors". Catalogue products: Effitest E50 production tester (described as flexible and low-cost with simple programming and debugging of test programs); CMT system with quick-change fixtures and control software "SCADUS" on Windows, test programs written in Delphi; DMT modular system for electrical and non-electrical measurement of functional units, basic ICT possible with optional accessories — [etesters catalogue entry](https://columbia.etesters.com/catalog/B6741A88-1422-08DF-AA5D-3808DB1BA9B1/unites-systems-a-s/); also listed in the Czech aerospace supplier directory — [czech-aerospace.cz](https://czech-aerospace.cz/en/firma/unites-systems-a-s)
- UNITES "Desktop Modular Tester", described in the Czech trade magazine DPS Elektronika od A do Z: a building-block tester controlled from Windows; cards can be stacked in a rack or built directly into the clamping fixture; combining ICT and FCT in one fixture is presented as suitable — [dps-az.cz, "Budoucnost funkčního testování: modulární testery"](https://www.dps-az.cz/clanky/id:42553/budoucnost-funkcniho-testovani-modularni-testery) (article date not visible)
- IFTSolution s.r.o. (Czechia): the managing director's profile lists functional and production testers for household refrigeration compressors and instrument-driver development — [LinkedIn profile](https://cz.linkedin.com/in/martin-koutny) (profile extract only; company size and current offer not confirmed)
- MACH SYSTEMS s.r.o. (Czechia): listed in the CzechTrade exporter directory as designing embedded and electronic systems, software and test systems — [CzechTrade directory](https://exporters.czechtrade.gov.cz/en/automotive-industry/279?page=5) (fixtures not named)
- Applied Precision Ltd. (Bratislava, Slovakia): "innovative ISO 9001 certified company in field of measurement and testing" — [etesters catalogue entry](https://6tl.etesters.com/catalog/9ECA49E8-1422-08DF-AA93-6E8D39E24A27/applied-precision-ltd) (no detail on custom board testers in the extract)
- No prices, lead times or headcounts for any of these appeared in the extracts.

Manufacturers that build testers in-house (substitute for outsourcing)
- Ryston Electronics (Czech developer and manufacturer) developed its own ATE that uses a spring-probe fixture for tests of soldered boards, components and functional tests, with adapters for electromechanical, pneumatic and power circuits; the know-how came from building fixtures for board bring-up and small series — [dps-az.cz, "Vývoj nové generace ATE"](https://www.dps-az.cz/clanky/id:71917/vyvoj-nove-generace-ate-automatickeho-testovaciho-systemu-pro-osazene-desky-plosnych-spoju)
- Ryston designed the ATE to connect to company quality systems, in line with ISO 9001 and ISO 13485 as required by automotive and medical customers; it cites its largest production run as about 750,000 vehicle units for the new road-toll system and, in another article, a series of over 30,000 units with a failure rate below 0.3% — [dps-az.cz, "Integrace vývoje, testovacích postupů a výroby"](https://www.dps-az.cz/clanky/id:95144/integrace-vyvoje-testovacich-postupu-a-vyroby); [dps-az.cz, "Nové zkušenosti z vývoje … testery v Rystonu, 2. díl"](https://www.dps-az.cz/clanky/id:80198/nove-zkusenosti-z-vyvoje-embedded-radio-bateriove-a-bezdratove-systemy-a-testery-v-rystonu-2-dil) (which article carries which figure is not certain from the extract)
- Hokami CZ (Liberec), an EMS provider, lists functional testing and ICT among its own services (see section 2) — [a-leads profile](https://a-leads.co/company/927674_0e7ec3cd)
- NAM system (Czech product company): an EU-subsidy project record describes board testing and bring-up as manual to date, with a plan to buy automated testers that load firmware and apply settings — [RISY project database](https://www.risy.cz/en/vyhledavace/projekty-eu?page=1435) (record already cited in the earlier notes; the company name is new)

Student-built testers for companies (substitute for outsourcing)
- CTU Prague master's thesis: design and build of an in-circuit tester for modems made by RACOM, including the measurement program and an assessment of the benefit of introducing ICT into production — [CTU repository](https://dspace.cvut.cz/entities/publication/93677dba-c3d0-4809-9797-409052a1b066)
- CTU Prague master's thesis, 2024 (F. Beránek): automatic functional test system for boards built on a Raspberry Pi 4B with a custom expansion module, tests run in Robot Framework — [CTU repository PDF](https://dspace.cvut.cz/bitstream/handle/10467/115855/F3-DP-2024-Beranek-Frantisek-System_pro_funkcni_testovani_desek_plosnych_spoju.pdf)
- CTU Prague master's thesis, 2016 (A. Tomasy): functional tester for boards including an economic analysis — [CTU repository PDF](https://dspace.cvut.cz/bitstream/handle/10467/64743/F3-DP-2016-Tomasy-Adrian-Adrian%20Tomasy.pdf) (mapping of this description to this file inferred from the extract)
- VUT Brno master's thesis: design and assembly of a fixture that programs and functionally tests an assembled board, covering electrical and mechanical construction, aimed at small-series production — [VUT repository](https://dspace.vut.cz/bitstreams/08af8d36-98a1-46cb-bd98-e106ecd83072/download) (which of two VUT files carries this description is not certain)
- Further theses on the same subject surfaced by title only — [theses.cz, DP Žaludek](https://theses.cz/id/ctosk1/DP-Zaludek.pdf); [theses.cz, BP Tlustoš](https://theses.cz/id/vrhzwh/BP-tlustos-240458.pdf)

Trade-press view
- A DPS Elektronika article states that functional test suits one-off and small-series production because the cost of a functional tester is usually low, and that in higher-end testers operators are replaced by robots and single-purpose machines — [dps-az.cz, "Testování při výrobě aneb DFT, 3. díl"](https://www.dps-az.cz/clanky/id:42798/testovani-pri-vyrobe-aneb-dft-3-dil) (attribution to this article among several dps-az results is inferred)
- The same magazine carries design-for-test, flying-probe and electrical-safety-test articles, i.e. the topic is covered for a manufacturing readership — [DfT article](https://www.dps-az.cz/clanky/id:77704/jemne-umeni-dft-navrh-dps-pro-testovani-ve-vyrobe); [flying probe article](https://www.dps-az.cz/clanky/id:26117/z-aktualniho-vydani-casopisu-elektricky-nbsp-test-nbsp-osazenych-desek-metodou-flying-probe); [electrical safety testing](https://www.dps-az.cz/clanky/id:10753/testovani-elektricke-bezpecnosti)

### Inferences
- Six searches in Czech, Slovak and English found no local firm selling small, fast, fixed-price functional fixtures. Either such firms exist but market by word of mouth (likely for one- to five-person engineering shops), or the small end of the market is served in-house. Both readings mean there is no visible, price-transparent local competitor for a "fixture plus Python software in three weeks" offer — and also no proof that anyone buys it.
- The thesis evidence cuts both ways. It shows real companies (RACOM, the firms behind the VUT/CTU assignments) have an unmet need they are willing to hand to an outsider; it also shows they are used to getting it for close to nothing and waiting an academic year. A paid offer has to win on speed, on being maintained afterwards, and on documentation — not on capability.
- Local suppliers that did surface sell a proprietary platform (UNITES: own hardware, Delphi-based software). An open stack (Python, OpenHTF, off-the-shelf instruments, client owns the code) is a differentiator against them, particularly for product companies that fear lock-in.
- Firms like Ryston and Hokami that already do test in-house are unlikely first customers but are the best people to ask who else they have seen struggle.

### Gaps
- Not answered: whether small Czech/Slovak EMS firms pay outside parties for test development, how often, and how much. Web search does not reach this; it needs calls. Suggested call list from both note files: SAFIRAL, ELO+, MARPOS, ADDAT, ELITRONIC, ATM Elektro, ELSO Ostrava, Hokami CZ (EMS); NAM system, RACOM (product companies with documented test pain).
- Unconfirmed prior knowledge (verify before relying): other Czech test-system integrators exist that did not surface, notably ATEsystem (Ostrava; custom testers and machine vision) and ELCOM (Ostrava; National Instruments based test systems); H TEST is the Czech distributor for Keysight instruments. These work mainly for automotive Tier-1 plants at prices far above a small-firm budget.
- No Slovak supplier of custom board testers was confirmed beyond the Applied Precision catalogue line.
- No prices or lead times from any Czech or Slovak supplier.

## 2. How many EMS and electronics manufacturers operate in Czechia and Slovakia, who are they, and where?

### Takeaway
The only countable figure found is old: about 61 Czech EMS legal entities in 2017, against 424 in Germany. Czechia ranks high in European EMS revenue because of a few very large foreign-owned plants, while the domestic firms are small; no current census, ranking or Slovak count was visible in extracts.

### Cited Findings
- Dieter Weiss (in4ma), September 2017: about 61 EMS companies in Czechia versus 424 in Germany, counting each legal entity; the Czech count had grown 27% over the previous decade — [iConnect007, "The past and the future of the European EMS industry"](https://iconnect007.com/article/106217/the-past-and-the-future-of-the-european-ems-industry/106220/smt)
- A Weiss/in4ma article states that Czechia ranks second behind Germany in European EMS revenue while employing far fewer people in EMS — fewer than Swedish EMS firms — [EMSNOW, "It's the Electronics, Stupid"](https://emsnow.com/?p=4244) or [iConnect007, European EMS volume 2016](https://iconnect007.com/article/107466/european-ems-production-volume-valued-at-346b-in-2016/107469/smt) (which of the two carries the statement is not certain; date around 2017)
- Evertiq published a "Top 30 EMS providers in CEE" list of locally headquartered firms; the extract says Poland, Slovenia and Czechia have several domestic EMS champions, but names and revenues were not visible — [Evertiq](https://evertiq.com/news/56615) (date not visible)
- Europe holds about 6% of the global EMS market and only one European company is in the global top 30 (Evertiq, April 2026, relayed) — [pulse.bot relay](https://www.pulse.bot/manufacturing/news/only-one-european-company-in-global-ems-top-30-7d96090d-ca52-4777-9cd7-a7bae601740e/)
- Named firms from extracts (a sample, not a census):
  - Hokami CZ (Liberec): EMS with over 30 years' history; SMT and through-hole assembly, board manufacture, functional test and ICT; ISO 9001, ISO 14001, IATF 16949; 41 employees per an aggregator — [a-leads profile](https://a-leads.co/company/927674_0e7ec3cd) (aggregator; unverified)
  - CEMS Holding a.s. (Brno): automotive electronics, home appliances, industrial automation, telecom — [electronica exhibitor brochure](https://exhibitors.electronica.de/download/1121_11_1_11489_1_1_809/electronica_cems_prospekt_06_enpdf.pdf) (appears to date from 2006; current status unknown)
  - JJS Electronics s.r.o. (Chomutov): 4,500 m² plant, prototype to volume (2010) — [Escatec blog, June 2010](https://www.escatec.com/blog/expert-cost-effective-ems-services-from-jjs-electronics-in-central-europe)
  - Connect Group Czech Republic s.r.o.: listed in a Czech defence/security industry association directory — [AOBP](https://aobp.cz/en/companies/4/connect-group-czech-republic-sro/)
  - Slovakia: Semecs (Dutch-headquartered EMS, plant in Vráble) — [profesia.sk company profile](https://dobrovolnici.profesia.sk:443/en/work/semecs/C15195); ZTS Elektronika in Nová Dubnica sold assets to Enics (old news item) — [Evertiq](https://evertiq.com/news/6281) (which Evertiq item is not certain)
- Wider sector size: revenue of Czech manufacturers of electrical equipment rose 12% to CZK 323 billion (headline dated 30 July 2026; period not visible; this is electrical equipment, a broader category than electronics assembly) — [oenergetice.cz](https://oenergetice.cz/rychle-zpravy/trzby-vyrobcu-elektrickych-zarizeni-v-cr-vzrostly-o-12-na-323-mld-kc)
- Paid market reports on Czech and Slovak electronics manufacturing exist (Frost & Sullivan) — [Slovak report](https://store.frost.com/slovakian-electronics-manufacturing-markets.html)

### Inferences
- Order of magnitude for the addressable EMS list in Czechia: several dozen legal entities (61 in 2017; the trend was upward until the 2024–2025 downturn recorded in the earlier notes). Slovakia is likely a fraction of that. Adding product companies that assemble or test their own electronics multiplies the list several times, but I found no count.
- A market of roughly 60–100 EMS firms in the home country is small enough to contact in full within a month and too small to support a business on EMS alone; Germany (424 EMS entities in 2017), Austria and Poland have to be in range from the start, and remote delivery (ship the fixture, commission by video) matters.
- The revenue-versus-headcount statement implies Czech EMS revenue is dominated by a handful of high-volume foreign plants. Those have test departments and global suppliers. The realistic targets are the domestic firms of 20–200 people like Hokami.

### Gaps
- No current (2024–2026) count of EMS firms in Czechia or Slovakia; no Slovak count at all; in4ma and Reed figures are paywalled.
- The Evertiq CEE top-30 names were not visible — worth opening directly.
- Regional clusters (Brno, Pardubice, Rožnov, Plzeň) were not confirmed by any extract. Unconfirmed prior knowledge: Foxconn in Pardubice and Kutná Hora; a semiconductor and electronics cluster around Rožnov pod Radhoštěm; many small design and assembly firms around Brno; in Slovakia, Foxconn in Nitra and the former Enics plant (now GPV) in Nová Dubnica.
- No business-register (ARES, Finstat) extraction by activity code was possible with search only. A count by NACE 26.1/26.12 (electronic components and loaded boards) from the Czech Statistical Office or a paid register export would close this gap in an hour.

## 3. Signals of shortage: test-engineer vacancies, salaries, bottleneck statements

### Takeaway
Hardware test-engineer roles are advertised in Brno, Prague and Bratislava at roughly CZK 50,000–80,000 gross per month, including jig-specific roles, but I could not count vacancies and found no EMS statement about test being a bottleneck. The salary level matters more than the shortage: an in-house test engineer is cheap, which caps what a small firm will pay an outsider.

### Cited Findings
- "Test Engineer – HW / FW", Brno, permanent, CZK 50,000–80,000 gross per month, via the agency Jobs Contact Personal; vocational secondary education given as the minimum — [pracomat.cz listing](https://www.pracomat.cz/prace/4_2016977-test-engineer-hw-fw-50-80-000-kc); a second listing of the same role — [pracomat.cz](https://www.pracomat.cz/prace/4_2012962-test-engineer-hw-fw-50-80-000-kc) (posting dates not visible)
- Same agency, Brno: R&D Hardware Engineer CZK 40,000–60,000 (juniors welcome); Electronic Design Engineer CZK 60,000–80,000 — [pracomat.cz](https://www.pracomat.cz/prace/4_1997568-rampd-hardware-engineer-raj-pro-bastlire-i-juniory-40-60-000-kc); [pracomat.cz](https://www.pracomat.cz/prace/4_2000124-electronic-design-engineer-ktereho-bavi-vyvoj-her-brno-60-80-000-kc)
- Operator-level testing: "Tester v elektrotechnice", Brno (Adecco), CZK 37,000 per month plus a CZK 40,000 signing bonus, posted June 2026; temp work testing switchboards at CZK 220 per hour — [pracomat.cz](https://www.pracomat.cz/prace/4_2001579-tester-v-elektrotechnice-naborovy-bonus-40-000-kc-pod-kmen); [jenprace.cz](https://www.jenprace.cz/brigada/67q9c/tester-elektrorozvadecu-brno-220-kc-hod-vyplata-ihned)
- Congatec (Brno) advertises a permanent Test Engineer for its own processor modules and single-board computers, including EMC measurement; no salary shown — [Congatec careers](https://jobs.congatec.com/congatec_CzechRepublic/job/congatec-Czech-Republic-Test-Engineer-(mfd)-Brno-1/1352591157)
- Other open or recent roles seen by title: "Test Engineer – electronic automotive systems, Prague" — [jenprace.cz](https://www.jenprace.cz/nabidka/72jum7/test-engineer-electronic-automotive-systems-prague); "LabVIEW Testplatform – Test Designer, Prague" — [Grafton](https://www.grafton.cz/en/jobs/labview-testplatform-test-designer-prague); Valeo "SW Tool Developer", Prague — [Welcome to the Jungle](https://www.welcometothejungle.com/en/companies/valeo-cz/jobs/sw-tool-developer_praha)
- Slovakia: Kistler Bratislava advertised "Electronics Test Engineer (Jig Engineer)" at least twice — [profesia.sk](https://www.profesia.sk/en/work/kistler-bratislava/O3333837); [profesia.sk](https://www.profesia.sk/en/work/kistler-bratislava/O3264925); Siemens Mobility (Bratislava/Žilina) advertised a test engineer for electronic systems development who designs test strategies and plans for microprocessor-based equipment — [Siemens careers](https://jobs.siemens.com/cs_CZ/externaljobs/JobDetail/515862)
- Aggregator averages (weak): average offered pay for "elektrotechnik" in Brno CZK 41,085 from 17 full-time ads — [pracomat.cz](https://www.pracomat.cz/nabidky-prace/hledani/region-brno/profese-elektrotechnik/); Jooble's CZK 76,301 average for "tester" is dominated by software testers and not usable here — [Jooble](https://cz.jooble.org/práce-tester)

### Inferences
- Cost of the in-house alternative (my arithmetic; assumes Czech employer contributions of about 34% on top of gross pay and roughly CZK 24–25 per euro, both unconfirmed here): CZK 50,000–80,000 gross is about CZK 67,000–107,000 per month to the employer, roughly €2,700–4,400. A fixture job priced at €3,000–8,000 therefore equals one to two months of an employed test engineer. A small firm that already has such a person will build in-house; the buyer is the firm that has none, or whose one engineer is overloaded during a new-product introduction.
- Repeated advertising of a "jig engineer" role (Kistler) and LabVIEW test-designer roles shows the function is normally staffed, not bought, at mid-sized and large firms.
- The price ceiling for outside work in Czechia is likely well below German freelance rates of €80–110 per hour recorded in the earlier notes; a fixed price per station is easier to sell than hours.

### Gaps
- No vacancy counts (jobs.cz, LinkedIn, profesia.sk were not directly searchable), so "shortage" is not demonstrated.
- No statement by any Czech or Slovak EMS about test bottlenecks or new-product-introduction lead times was found. The earlier notes record SAFIRAL's assembly lead times only.
- No Czech freelance or contractor day rates for test or LabVIEW engineers were found.

## 4. What European test-engineering firms and fixture houses charge, how they sell, and what standard platforms cost

### Takeaway
No European price appeared in any extract: fixture houses, test integrators and kit makers in Germany, Poland and Czechia all sell by quotation. The only new numbers are non-European vendor ranges (a simple custom functional jig "a few hundred to a few thousand dollars" in China; ICT fixtures from a few thousand to over $50,000), which bracket rather than replace the $2,000–20,000 range in the earlier notes.

### Cited Findings
- Poland: Fitech (Kraków) designs, assembles and validates fixtures for ICT testers from Agilent/Keysight/HP, Checksum and Spea, and prepares and debugs ICT programs — [etesters catalogue entry](https://www.etesters.com/catalog/59690B12-DC20-E3E7-8BDE-AD2C85B97DEC/fitech-ltd); SOFTEST makes test solutions for industrial-electronics manufacturers, chiefly functional testers for boards and finished devices, and exhibits at Polish trade fairs — [Targi Kielce](https://targikielce.pl/en/about-us/news/softest-exibits-at-teia,22878)
- Germany: GOEPEL electronic offers customer-specific functional test from single systems to end-of-line test systems — [GOEPEL](https://www.goepel.com/index.php?id=59&L=3); Konrad Technologies appears in test-system catalogues — [etesters](https://dft.etesters.com/catalog/CF1AD40B-0F49-6E10-72A7-8BCD6294742E/konrad-technologies-gmbh/?page=3)
- Design houses bundle it: Promwad lists design and manufacture of test benches for firmware loading and ICT/JTAG testing as a service — [Promwad](https://promwad.com/services/manufacturing-testing)
- EMS firms sell it separately: Escatec announced a standalone functional-tester design service (headline only; date not visible) — [iConnect007](https://iconnect007.com/article/90903/escatec-debuts-standalone-functional-tester-design-service/90906/smt)
- Price points from non-European vendor material:
  - a custom functional test jig built at a Chinese factory "commonly runs from a few hundred to a few thousand dollars depending on complexity" — [DEV Community post by a sourcing agent](https://dev.to/china-sourcing-agents/functional-test-jigs-end-of-line-testing-at-china-factories-51cn)
  - an assembler contrasts $50,000 for a full ICT fixture with $2,000 for a "smart functional test setup" (illustrative) — [Bester PCBA](https://www.besterpcba.com/low-volume-hardware-flexible-testing)
  - ICT fixture manufacture "from a few thousand dollars to more than $50,000" — [Electronics For You](https://www.electronicsforu.com/tech-zone/test-measurement/testing-in-manufacture/2) (attribution among several results inferred)
- Lead time example: a maker sent design files to a fixture company and received a semi-custom test jig in about a month — [Hackaday, January 2025](https://hackaday.com/2025/01/28/testing-at-scale)
- Cost drivers stated by Altium (German-language resources): testing the finished board can reach 25–30% of total production cost; a comprehensive functional test often needs a purpose-built fixture that "can be expensive"; later changes add cost, modifying an existing fixture is usually cheaper than a new one, double-sided fixtures cost more — [Altium, PCB-Funktionstest](https://resources.altium.com/de/p/pcb-functional-testing-and-role-manufacturer-collaboration); [Altium, DFT](https://resources.altium.com/de/p/designing-for-testability-dft) (which article carries which statement not certain)
- Kits: Ingun's MA 260/F (item 40600) is a manual fixture with parallel closing and an exchangeable kit for small quantities; Ingun lists 93 product series of fixture kits; no prices are published — [Ingun datasheet](https://mx.ingun.com/media/92/59/04/1752223443/INGUN_MA_260_F_40600_EN_Datasheet.pdf); [Ingun kit catalogue](https://ingun.com/en/products/test-fixture-kits). Merifix kits are described as "inexpensive enough to be used in low-volume production and in engineering labs" — [etesters listing](https://etesters.com/see/341/test%20fixtures/?page=4)
- Local platform competing with custom work: UNITES Effitest E50, DMT and Desktop Modular Tester (section 1); prices not published — [etesters catalogue entry](https://columbia.etesters.com/catalog/B6741A88-1422-08DF-AA5D-3808DB1BA9B1/unites-systems-a-s/)
- Platform approach in general: LabVIEW plus PXI functional test systems are the established integrator stack — [CN Rood article](https://cnrood.com/news-articles/developing-a-functional-circuit-test-system-using-labview-and-pxi/)

### Inferences
- Everyone in this trade sells per project by quotation. Publishing a fixed price list (for example three tiers by probe count and instrument set) would by itself be unusual in the region and suits buyers who have never bought a fixture.
- The floor is set by Chinese factories that build a functional jig for a few hundred to a few thousand dollars as part of an assembly order. A local supplier cannot beat that price; it can beat it on software quality, data logging, ownership of the test code, speed of changes and the ability to stand next to the line. The sourcing-agent advice to "own the jig and the test scripts and the right to move it" is the argument to use with product companies.
- The ceiling is set by integrators using LabVIEW/PXI or proprietary platforms, where an EOL station costs tens of thousands of euros. Between a few hundred dollars and tens of thousands is the gap the reader would occupy; the earlier $2,000–20,000 estimate still looks right for it, at the lower half for Czech customers.

### Gaps
- No European fixture or tester prices, no day rates of test-engineering firms, no prices for Ingun/Merifix kits, National Instruments based systems, 6TL or similar platforms. All require a quotation request; asking Ingun's Czech distributor and one Polish fixture house for a quote on a sample board is the quickest fix.
- No information on Hungarian or Austrian suppliers.
- Unconfirmed prior knowledge: Ingun MA-series manual fixtures cost on the order of €1,000–3,000 before probes and wiring; lever-type Chinese fixture kits cost under €200; a PXI-based functional test rack typically starts in the tens of thousands of euros.

## 5. Who else needs testers besides EMS, and how do they handle production test today?

### Takeaway
The clearest documented non-EMS buyers are small Czech product companies that still test by hand (NAM system) or hand the tester to a student (RACOM and the firms behind the VUT/CTU theses). One international case shows the same pattern turning into a business: FixturFab grew out of a contractor who kept needing fixtures while doing embedded work for startups. No data on Czech IoT, lighting, charger or automotive-supplier firms was retrieved.

### Cited Findings
- NAM system: manual testing and bring-up of boards, plan to buy automated testers that load firmware and configure the product, with EU subsidy support — [RISY project database](https://www.risy.cz/en/vyhledavace/projekty-eu?page=1435)
- RACOM (Czech maker of radio modems): its in-circuit tester was designed and built as a CTU master's thesis — [CTU repository](https://dspace.cvut.cz/entities/publication/93677dba-c3d0-4809-9797-409052a1b066)
- Congatec's Brno site tests its own embedded computer modules with employed test engineers — [Congatec careers](https://jobs.congatec.com/congatec_CzechRepublic/job/congatec-Czech-Republic-Test-Engineer-(mfd)-Brno-1/1352591157)
- Division of labour described in practitioner material: product design and fixture building are "often done by completely different teams working for different companies", i.e. a design house and a contract manufacturer — [Hackaday, "Testing at scale"](https://hackaday.com/2025/01/28/testing-at-scale) (attribution among several results inferred)
- Contract manufacturers with in-house design and machining build load boards and ICT or functional fixtures for their customers — [Riverside Electronics engineering brief](https://www.globalspec.com/RiversideElectronics/ref/RiverSide_EngBrief.pdf)
- FixturFab (US) designs and makes custom test fixtures and turnkey test systems, from low-volume development fixtures to high-volume production; it began when its founder needed fixtures for manufacturing while doing embedded work for startups — [CircuitHub podcast write-up](https://circuithub.com/post/ep-41-how-to-develop-a-pcba-functional-test-system-w-fixturfab); [CB Insights profile](https://www.cbinsights.com/company/fixturfab)
- A sourcing-agent guide advises hardware companies to own the functional jig and its scripts and keep the right to move it between factories — [DEV Community](https://dev.to/china-sourcing-agents/functional-test-jigs-end-of-line-testing-at-china-factories-51cn)

### Inferences
- Product companies are a better first target than EMS firms. They own the product knowledge the test needs, they decide the test specification, they carry the cost of field failures, and they want a tester they can take to another assembler. EMS firms mostly test what the customer specifies and often ask the customer to supply the tester.
- EU and national subsidy records are a usable lead source: a company that wrote "we test manually and want automated testers" into a grant application has budget and intent. Searching the Czech project databases for "tester" would produce a named prospect list.
- University supervisors of the theses above (VUT FEKT, CTU FEL) know which companies ask for testers every year; they are both a channel and the incumbent.

### Gaps
- Nothing retrieved on Czech hardware startups, IoT firms, lighting makers, charger makers or automotive sub-suppliers and how they test. Unconfirmed prior knowledge: Czechia has a sizeable set of domestic electronics product companies (security systems, building automation, intercoms, industrial sensors, chargers) that assemble in-house or with local EMS partners; names should be collected from trade-fair exhibitor lists (Amper Brno) rather than from memory.
- No forum thread (EEVblog, Reddit) on outsourcing fixtures surfaced.

## 6. What a credible first offer looks like, how fast a first job is won, what skills clients expect

### Takeaway
No source gave a time-to-first-customer for a freelance test engineer or small test house. The one origin story (FixturFab) and the one EMS example (Escatec's standalone tester-design service) both started from existing manufacturing relationships, not cold outreach. Job ads show the skills clients screen for: test strategy for microprocessor boards, jig building, LabVIEW or similar, EMC and measurement practice, and links to quality systems.

### Cited Findings
- Origin of a fixture house: founder needed fixtures while doing embedded contract work for startups, then productised it — [CircuitHub podcast write-up](https://circuithub.com/post/ep-41-how-to-develop-a-pcba-functional-test-system-w-fixturfab)
- An EMS turned its internal capability into a separately sold functional-tester design service — [iConnect007 on Escatec](https://iconnect007.com/article/90903/escatec-debuts-standalone-functional-tester-design-service/90906/smt)
- A minimal production tester described by a practitioner: OpenHTF, a laptop, a USB cable and about 150 lines of Python written with spec-driven prompting — [EmbeddedRelated abstract](https://www.embeddedrelated.com/showabstract/632.php) (abstract only)
- Skills named in regional job ads: designing test strategies and plans for microprocessor-based devices (Siemens Mobility) — [Siemens careers](https://jobs.siemens.com/cs_CZ/externaljobs/JobDetail/515862); jig engineering for electronics test (Kistler) — [profesia.sk](https://www.profesia.sk/en/work/kistler-bratislava/O3333837); LabVIEW test-platform design (Prague) — [Grafton](https://www.grafton.cz/en/jobs/labview-testplatform-test-designer-prague); EMC measurement alongside functional test of computer modules (Congatec) — [Congatec careers](https://jobs.congatec.com/congatec_CzechRepublic/job/congatec-Czech-Republic-Test-Engineer-(mfd)-Brno-1/1352591157)
- Expectations stated by a Czech manufacturer: testers must feed company quality systems under ISO 9001 and, for medical customers, ISO 13485; adapters may have to handle electromechanical, pneumatic and power circuits — [dps-az.cz on Ryston](https://www.dps-az.cz/clanky/id:95144/integrace-vyvoje-testovacich-postupu-a-vyroby); [dps-az.cz on Ryston ATE](https://www.dps-az.cz/clanky/id:71917/vyvoj-nove-generace-ate-automatickeho-testovaciho-systemu-pro-osazene-desky-plosnych-spoju)
- Electrical-safety testing of products is treated as its own topic in the Czech trade press — [dps-az.cz](https://www.dps-az.cz/clanky/id:10753/testovani-elektricke-bezpecnosti)
- Over-specification risk: a full-coverage fixture for a low-volume product is "the $40,000 paperweight"; a $2,000 functional setup is the alternative an assembler recommends — [Bester PCBA](https://www.besterpcba.com/low-volume-hardware-flexible-testing)

### Inferences
- A credible first offer for this founder (my synthesis, not sourced): one fixed-price "programming and functional test station" for low-voltage boards — manual fixture on a bought-in kit, firmware flashing, power-rail and current checks, communication-bus checks, serial-number and result logging to a database, a pass/fail label, source code handed over — delivered in three to four weeks, with the first one done at cost for a reference customer. Exclude mains-powered units under test, high-voltage and pneumatic presses at the start; those bring equipment-safety duties and the kind of mistakes that are not cheap.
- Missing hardware skills that clients will probe: measurement practice (grounding, loading, settling time, tolerance stack-up), programming and debug interfaces of common microcontrollers, and probe/fixture mechanics. Boundary scan is a specialist niche with its own vendor tools and can be left out. These gaps are narrower than the gaps for circuit design, and each is learnable on one's own boards.
- Time to first paid job depends on having a warm contact at one manufacturer. With none, the realistic path is: build a demonstration station for an open-source board, show it to ten firms from the call list, and offer the first station at cost. Weeks to a first conversation; whether weeks to a first invoice is not supported by any evidence found.
- The quality-system link Ryston describes is where a software specialist can outshine a traditional fixture builder: traceability, yield statistics, and integration with the customer's production records.

### Gaps
- No documented case of a freelance test engineer's first months, pricing or client acquisition in Europe.
- No evidence on contract terms (acceptance tests, warranty, liability caps, on-site support expectations) for supplied testers.
- Safety and regulatory duties for custom test equipment (Low Voltage Directive, Machinery Regulation for pneumatic fixtures, employer's work-equipment rules) remain unresearched, as in the earlier notes.

## 7. AI for test development in 2026

### Takeaway
No mature tool was found that turns a schematic and requirements into production test code; the nearest product (TestFlow AI) is early-stage and unvalidated, and published research targets chip-level verification or datacenter validation plans. Generating production test software with a general coding agent is therefore still a do-it-yourself advantage, not a commodity.

### Cited Findings
- TestFlow AI claims to read a datasheet and schematic, derive specifications and test conditions, and generate a validation plan, lab-automation scripts and instrument control; its listing shows only a handful of upvotes and one review, and the company describes itself as early — [hunted.space listing](https://www.hunted.space/product/testflow-ai) (vendor claim; no independent test)
- A practitioner article describes building a production test with OpenHTF and about 150 lines of Python using "spec-driven prompting" — [EmbeddedRelated abstract](https://www.embeddedrelated.com/showabstract/632.php) (abstract only)
- TofuPilot is a test-data platform, not a generator: stations upload results from Python scripts and it reports yield, process capability and traceability; it has an OpenHTF handler and imports history from WATS, TestStand, STDF and CSV — [Capterra listing](https://www.capterra.co.uk/software/1169862/TofuPilot)
- Research, chip level (January 2026): LLM-based hardware test-plan generation for RTL verification; state-of-the-art models including DeepSeek-R1 and Claude 4.0 Sonnet reached only 15.7–21.7% success at generating stimuli that pass golden designs — [arXiv 2601.07593](https://arxiv.org/abs/2601.07593v1)
- Research, system level (July 2026): a multi-agent system generating hardware validation test plans for AI datacenter platforms from bills of materials and related documents reports coverage expansion of 74.2% and 51.4% on two production platforms and authoring time cut from days to hours — [arXiv 2607.16388](https://arxiv.org/pdf/2607.16388) (authors' own evaluation)
- Earlier notes already record Tomachie's AI test-point insertion (April 2026); not repeated here.

### Inferences
- The task the reader would automate — read schematic and test specification, propose test points and limits, write OpenHTF phases and instrument drivers, generate the probe-plate drawing from board coordinates — has no visible packaged competitor in November 2026. That window will not stay open; test-data vendors such as TofuPilot are the obvious ones to add generation.
- The low success rates in chip-verification research are a caution against trusting generated test limits without a bench run on known-good and deliberately faulted boards. The bench loop is the check; it is cheap and fast for board-level test.
- An agent harness that produces a reviewed test plan within a day of receiving design files is a sales tool as well as a production tool: a prospect can be sent a draft test plan for their own board before any contract.

### Gaps
- No vendor offering from National Instruments/Emerson, Keysight, Göpel or Spea on AI-generated test programs surfaced; not searched specifically.
- No independent evaluation of any schematic-to-test-code tool, and no benchmark of frontier models on writing instrument-control or OpenHTF code.
- The DATE 2026 conference paper in the results could not be identified from the extract — [DATE 2026 proceedings file](https://past.date-conference.com/proceedings-archive/2026/DATA/7108.pdf)
