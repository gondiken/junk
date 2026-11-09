# Remote, software-only engineering services for machine builders, integrators and manufacturers (state as of November 2026)

Reading notes for the report writer:

- Method limit: page fetching was blocked, so every figure below comes from a search-result extract, not from an opened page. All 28 permitted searches were used. Where the extract did not make clear which of several result pages carried a number, the finding says "attribution not confirmed".
- The four variants are referred to as (a) remote PLC/robot programming, (b) simulation and virtual commissioning, (c) compliance documentation (Machinery Regulation, Cyber Resilience Act, manuals), (d) fixed-price feasibility studies.
- Abbreviations used: MR = Machinery Regulation (EU) 2023/1230; CRA = Cyber Resilience Act (EU) 2024/2847; VC = virtual commissioning; OLP = offline programming of robots; SBOM = software bill of materials; EDIH = European Digital Innovation Hub.
- Biggest overall gap: published prices for services (CE files, VC projects, OLP jobs, feasibility studies, manuals per page) are almost never shown in search extracts. Providers quote on request. Price statements below are therefore thin and marked as such.

## 1. Market for freelance and subcontract PLC and robot programmers (Germany, Austria, Czechia): rates, platforms, remote share, shortage

### Takeaway
German-speaking freelance PLC programmers list themselves at roughly 70–110 EUR/hour, but the market in 2026 is soft (machine-building output flat, engineering unemployment at a record) and almost all sources say commissioning and I/O checkout need a person on site. Remote-only work exists mainly as overflow subcontracting for integrators who already trust the programmer.

### Cited Findings
- Self-declared rates of PLC programmers in the freelancermap directory range from about 70 to 110 EUR/hour (individual profiles, not a market average; date of profiles not shown). — [freelancermap.at SPS-Programmierung directory](https://www.freelancermap.at/freelancer-verzeichnis/sps-programmierung-38464)
- Freelancer-Kompass 2026 (freelancermap): median hourly rate of IT freelancers 95 EUR; the overall average fell for the first time, from 104 to 103 EUR; SAP/ERP specialists 120 EUR. No separate PLC category appeared in the extract. — [freelancermap press release, 23 July 2026](https://www.freelancermap.at/media/press_release/2026-07-23-IT-Freelancer.pdf); [Computerwoche](https://www.computerwoche.de/article/2804188/so-steht-es-um-selbststaendige-entwickler.html) (attribution between the two not confirmed)
- Employed PLC programmers in Germany earn an average of about 28 EUR/hour. — [jobvector](https://www.jobvector.de/gehalt/sps-programmierer/)
- Czechia: gross monthly pay of an employed PLC programmer ranges from 44,208 to 91,860 CZK. — [platy.cz](https://www.platy.cz/en/salaryinfo/electrical-power-engineering/plc-programmer)
- Czechia: an Ostrava job advert offers 40,000–50,000 CZK/month for PLC and HMI programming with Siemens experience. — [jenprace.cz](https://www.jenprace.cz/nabidka/zny0eu/plc-programator-od-40-000-kc)
- Germany, engineering labour market 2026 (VDI/IW Ingenieurmonitor as reported in trade press; quarter attribution not confirmed): 58,392 unemployed in engineering and IT occupations, the highest since the series began in 2011; open positions down 18.2 % year on year in one report; a later report says open positions rose for the first time in three years, by 5.9 % to 105,340; 166 open positions per 100 unemployed; 11,060 open positions in machine and vehicle engineering. — [produktion.de](https://www.produktion.de/wirtschaft/arbeitsmarkt-fuer-ingenieure-unter-druck-fachkraefte-fehlen/2594810); [ingenieur.de](https://www.ingenieur.de/mehr-stellen-mehr-arbeitslose-wie-angespannt-ist-der-ingenieurarbeitsmarkt-23cef83a-517e-4212-ad6a-cbe06bcf9be5/); [Berliner Zeitung](https://www.berliner-zeitung.de/article/fachkraeftemangel-trotz-job-krise-das-paradox-auf-dem-deutschen-ingenieurmarkt-10257549)
- German machine building employed "just over one million" people at the end of 2025, 2.2 % or about 22,000 fewer than in 2024 (firms with more than 50 staff). — [Schwäbische](https://www.schwaebische.de/wirtschaft/maschinenbauer-unter-druck-tausende-jobs-gestrichen-4356019); [produktion.de](https://www.produktion.de/wirtschaft/maschinenbau-2025-personalabbau-setzt-sich-fort/1668988) (attribution not confirmed)
- The VDMA cut its 2026 production forecast to zero growth. — [boerse-express](https://www.boerse-express.com/news/articles/cyber-resilience-act-meldepflicht-ab-11-september-bis-15-mio-euro-bussgeld-930139) (secondary source; attribution among several boerse-express CRA articles not confirmed)
- Remote share: PLC work "traditionally requires on-site presence for commissioning, debugging, and integration"; "final commissioning and I/O checkout typically require on-site presence". — [Industrial Monitor Direct, remote projects guide](https://industrialmonitordirect.com/blogs/knowledgebase/getting-remote-plc-hmi-programming-projects-a-practical-guide); [Industrial Monitor Direct, home-based work guide](https://industrialmonitordirect.com/blogs/knowledgebase/remote-plc-programming-home-based-work-arrangements-guide) (vendor blog that summarises forum discussions; secondary)
- "Many automation companies outsource overflow work to qualified freelancers"; advice is to build relationships with integrators first. — [Industrial Monitor Direct](https://industrialmonitordirect.com/blogs/knowledgebase/getting-remote-plc-hmi-programming-projects-a-practical-guide)
- The market for small after-hours PLC jobs is "extremely niche" and "fraught with practical obstacles primarily related to site access and liability". — [Industrial Monitor Direct, second-job analysis](https://industrialmonitordirect.com/blogs/knowledgebase/plc-programming-as-a-second-job-feasibility-risks-and-career-pathways)
- A guide on entry-level PLC freelancing frames the newcomer problem as a "simulator vs real-world skills gap" and recommends in-person employment first to gain experience on real equipment. — [Industrial Monitor Direct](https://industrialmonitordirect.com/blogs/knowledgebase/entry-level-plc-freelancing-simulator-vs-real-world-skills-gap)
- Buyers of freelance PLC programming worry about protection of know-how and intellectual property. — [Cad Crowd](https://www.cadcrowd.com/manufacturing-services/plc-programming)
- Platforms seen in results: freelancermap (DE/AT), Malt, Cad Crowd, r/PLC monthly job classifieds. — [freelancermap.at](https://www.freelancermap.at/freelancer-verzeichnis/sps-programmierung-38464); [Malt profile example](https://www.malt.com/profile/davidsteigerwald); [Cad Crowd](https://www.cadcrowd.com/manufacturing-services/plc-programming)

### Inferences
- The German freelance rate (70–110 EUR/h) is 2.5–4 times the employed German rate (28 EUR/h) and far above Czech employed pay (44–92k CZK/month is roughly 11–23 EUR/h gross at about 24.5 CZK/EUR). A Czech freelancer selling into Germany has a price advantage, but so does every other Czech, Slovak, Polish and Indian programmer.
- "Shortage" is no longer a safe selling argument in 2026. The ratio of open positions to unemployed still signals a shortfall, but demand fell for three years and the freelance average rate dropped for the first time. An integrator with idle in-house programmers does not subcontract.
- For a person who has never commissioned a machine, variant (a) is the worst fit among the four: the buyer's main risk is exactly the part the newcomer cannot do (bring-up on real I/O), and the only credible entry route named by practitioners is prior on-site experience.
- AI leverage is real for code generation, but the executable check (does the machine run) sits on the customer's shop floor, not on the founder's desk, unless paired with variant (b).

### Gaps
- No GULP, Hays, SOLCOM or Upwork rate data specific to PLC or robot programmers was found; no Czech or Slovak hourly rate for self-employed PLC programmers was found (two searches returned only salary data).
- No figure for the share of PLC freelance projects that are remote versus on site, and no direct statement from a German, Austrian or Czech integrator on accepting remote-only subcontractors.
- No controls-engineer-specific shortage figure (VDMA, ZVEI) was found; the numbers above cover all engineering and IT occupations.
- Legal position of a sole trader in Czechia was not searched. From background knowledge (not verified in this session): writing PLC software falls under the unregulated "free" trade; designing electrical equipment and installing or repairing it are regulated trades, and working on live equipment needs an electrical qualification under Act 250/2021 and Government Regulation 194/2022. Verify before relying on it.

## 2. Virtual commissioning and simulation service providers: who offers it, prices, adoption among small machine builders, standalone sale

### Takeaway
Virtual commissioning is sold as a service by small engineering offices and by tool vendors' partners, but adoption among mid-sized machine builders is still low and no project prices are published. Low adoption is both the opportunity and the warning: the buyer has to be convinced of the method before buying the service.

### Cited Findings
- A Fraunhofer IWU study of mid-sized machine builders in Saxony found that only a few actually use virtual commissioning in day-to-day practice. — [Silicon Saxony / Fraunhofer IWU](https://silicon-saxony.de/fraunhofer-iwu-saechsische-maschinenbauer-nutzen-vorteile-der-virtuellen-inbetriebnahme-oft-noch-nicht/)
- A 2017 VDMA working-group survey found that companies saw the greatest need and development potential for simulation in virtual commissioning (dated). — [Springer chapter, "Nutzen von Digitalen Zwillingen und Virtueller Inbetriebnahme"](https://link.springer.com/chapter/10.1007/978-3-662-66217-5_8); [Bayern Innovativ](https://www.bayern-innovativ.de/emagazin/detail/de/seite/einsatz-und-umfang-von-virtueller-inbetriebnahme) (attribution not confirmed)
- One blog claims that over 60 % of companies have firmly integrated virtual commissioning; it cites no primary study and contradicts the Fraunhofer finding. — [firstaudit blog](https://www.firstaudit.de/blog/allgemein/virtuelle-inbetriebnahme/)
- Vendor-reported benefit (customers of ISG-virtuos): real commissioning time about 75–80 % shorter; in one case from one to two months down to five days. — [produktion.de](https://www.produktion.de/technik/digitalisierung/75-prozent-zeitersparnis-mit-virtueller-inbetriebnahme-875.html)
- A small engineering office (iT Engineering Software Innovations) sells virtual commissioning as a service and, on request, hands over the machine model so the client can commission or run test automation themselves. — [ite-si.de](https://ite-si.de/kompetenzen/virtuelle-inbetriebnahme/)
- A participant at a regional matchmaking event offers "Digital Twin as a Service", simulating applications before physical build. — [b2match, Bodenseegespräche V](https://www.b2match.com/e/bodenseegesprache-v/participants/3081356)
- The VDMA publishes a guide on virtual commissioning that puts cost and benefit at the centre (no figures in the extract). — [VDMA guide (PDF)](https://attachments.vdma.org/attachments/MkedbyJ494FZ885uEYxG)
- Trade press: for special-purpose machines, virtual commissioning reduces planning errors and commissioning time. — [Computer & Automation](https://www.computer-automation.de/engineering/planungsfehler-und-inbetriebnahmezeiten-reduzieren.htm)
- A subsidised EDIH lists a success story titled "Simulation of production process, robotization concept, optimization", i.e. a public hub delivered simulation and concept work to a company (title only; content not seen). — [EDIH network success stories](https://european-digital-innovation-hubs.ec.europa.eu/knowledge-hub/success-stories/simulation-production-process-robotization-concept-optimization)
- Tool cost, RoboDK: permanent licence includes one year of maintenance, then 1,500 USD/year; a reseller lists the professional licence at 3,995 USD; an older forum post gave 2,995 USD; a separate robot-calibration licence is 17,995 USD. — [RoboDK pricing](https://web.robodk.com/pricing); [RoboDK forum](https://robodk.com/forum/Thread-RoboDK-and-ABB-RobotStudio-software) (base price not visible in the extract; reseller figure unconfirmed)
- Tool cost, Visual Components: no public price ("available upon request"); a review aggregator says pricing is opaque, initial licence costs are high, and annual maintenance and per-feature licensing burden small teams. — [Software Advice](https://www.softwareadvice.com/product/449931-Visual-Components); [rfp.wiki](https://www.rfp.wiki/artificial-intelligence/physical-ai-digital-twin-platforms/visual-components) (secondary)

### Inferences
- This variant has the best "text/code with an executable check" profile of the four: a simulated plant that runs the client's real PLC program is a test harness, and building plant models, test sequences and fault-injection scripts is software work where agent harness skills transfer directly.
- It also removes the main weakness of variant (a): the founder can prove code against a model at the desk. A combined offer ("your PLC code tested against a simulated cell before you travel") is more defensible than either half alone.
- Barriers for a newcomer: licence cost of the mainstream tools (not published, believed to be five figures per seat for the high-end packages; unverified), need for the client's CAD and control project (trust and IP), and the fact that the model builder must understand real machine behaviour to model it faithfully.
- Low adoption among small machine builders means a long educational sale. The quicker route is probably integrators and special-machine builders who already believe in the method but lack capacity.

### Gaps
- No published project price for a virtual-commissioning job or a reach/cycle-time study was found, in any country.
- No partner lists or prices for machineering iPhysics, ISG-virtuos or Siemens simulation tools appeared in the extracts.
- No Czech or Slovak provider was identified.
- No recent (2024–2026) adoption percentage from a named survey; the only quantitative claim (over 60 %) is unsourced.

## 3. Offline programming as a service for welding, machining or palletizing robots: prices and demand

### Takeaway
Offline programming is offered as a service by software distributors and by many Indian bureaus, and its economic case (program at the desk instead of blocking the robot) is well documented, but no European service price was found. The realistic benchmark is an in-house cost of about 60 EUR/hour against 150 EUR/hour for teaching on the robot.

### Cited Findings
- Cost model from a software vendor: teaching on the robot costs about 150 EUR/hour (programmer wages plus the occupied system), offline programming about 60 EUR/hour (programmer wages, workstation, licence and maintenance). This is an in-house cost comparison, not a service price. — [CENIT / DFS infographic](https://cenit.com/fileadmin/Media/cenit/blog/pdf/DFS_Infografik_OLP_1500x2235_en.pdf)
- A distributor of Delfoi welding software lets the customer either buy the software or contract its programming service without buying the software, and claims programming time shrinks to about one tenth of the downtime needed for teaching. — [Sumig](https://sumig.com/en/product/detail/offline-programming-for-welding-robots)
- Vendor claim: about one hour per program offline versus a day on the robot. — [Almacam](https://almacam.com/?p=2986)
- Multiple Indian suppliers list arc-welding and spot-welding offline robot programming as a service on IndiaMART (no hourly prices shown). — [IndiaMART, arc welding OLP](https://m.indiamart.com/proddetail/arc-welding-offline-robot-programming-services-13997781173.html); [IndiaMART, spot welding OLP](https://m.indiamart.com/proddetail/spot-welding-offline-robot-programming-services-20185407473.html)
- Employers also hire in-house "robotic welding programmer, offline simulation" staff. — [Red Seal Recruiting](https://redsealrecruiting.com/job/robotic-welding-programmer-advanced-automation-offline-simulation/)
- RoboDK licence cost is in the low thousands of USD (see section 2). — [RoboDK pricing](https://web.robodk.com/pricing)

### Inferences
- The tool cost for an OLP bureau built on RoboDK is the lowest entry ticket in this whole research area (a few thousand USD), so a first paid job is financially within reach in weeks.
- The hard part is not the software: offline programs for welding need touch-up on the real cell (calibration, seam position, process parameters). Without welding or machining process knowledge and without access to the client's robot, a remote newcomer delivers a program the client must still fix. Palletizing is simpler geometrically, but robot vendors now ship palletizing wizards that remove most of the programming.
- Price ceiling: a client can rationally pay up to the avoided downtime (about 150 EUR per robot hour saved by the vendor's own model), but competing Indian bureaus set a floor well below European rates.

### Gaps
- No European price per program, per part or per hour for an OLP service was found; no demand figure (number of buyers, order volumes).
- No RoboDK-based service office in Czechia, Slovakia, Germany or Austria was identified.
- No evidence either way on whether high-mix welding job shops outsource OLP regularly or only at system purchase.

## 4. Compliance documentation: Machinery Regulation changeover, Cyber Resilience Act, prices, tools, qualifications

### Takeaway
The changeover date stands (20 January 2027, no postponement found) and it forces machine builders to revisit risk assessments, technical files and declarations, with new cybersecurity and AI-related requirements. Many small offices already sell risk assessments at fixed prices, software tools cost roughly 100–400 EUR/month, and the only price range found for external CE work is about 1,500–5,000 EUR for a simple machine up to 20,000 EUR or more for complex systems. The Cyber Resilience Act adds a second, later wave (reporting since 11 September 2026, full application December 2027) for which awareness is low.

### Cited Findings

Machinery Regulation: dates and what changes
- Regulation (EU) 2023/1230 replaces Directive 2006/42/EC on 20 January 2027 (a corrigendum of 4 July 2023 moved the date from 14 to 20 January); the Directive is repealed on that date. — [TÜV NORD](https://www.tuev-nord.de/de/dienstleistungen/auditierung-und-zertifizierung/produktzertifizierung/maschinenverordnung/); [IBF Solutions](https://www.ibf-solutions.com/fachbeitraege/aenderungen-zur-maschinenverordnung-eu-2023/1230)
- The new regulation applies only to machines placed on the market from 20 January 2027; machines placed on the market earlier under the Directive may continue to be made available. The transition period was 42 months. — [ABB (Czech page)](https://new.abb.com/low-voltage/cs/nizke-napeti/produkty/bezpecnostni-systemy/narizeni-eu); [Siemens CZ, changes in the new regulation (PDF)](https://assets.new.siemens.com/siemens/assets/api/uuid:f724d4e7-fd4f-4e6b-8d4b-ac302ef54e21/zmeny-v-novem-strojnim-narizeni-2023-1230.pdf); [IHK Erfurt](https://www.ihk.de/erfurt/service/innovationen/produktsicherheit-und-ce-kennzeichnung/neue-eu-maschinenverordnung-6695412)
- New requirements cover protection against external attacks (cybersecurity) and autonomous systems such as AI; manufacturers must consider digital risks and self-learning functions. — [TÜV NORD (English)](https://www.tuev-nord.de/en/services/audit-and-expertise/product-certification/maschinenverordnung/); [produktion.de](https://www.produktion.de/technik/maschinenverordnung-was-sich-ab-2027-aendert/2737781)
- Conformity assessment follows a new categorisation (Annex I Part A and Part B); the old Annex I of the Directive becomes Annex III. For selected machinery the manufacturer's self-assessment alone is no longer enough and a notified body is needed. — [TÜV NORD](https://www.tuev-nord.de/en/services/audit-and-expertise/product-certification/maschinenverordnung/); [TÜV SÜD Czechia, May 2026](https://www.tuvsud.com/cs-cz/tisk-a-media/2026/may/audit-cia-k-novemu-strojnimu-narizeni)
- Modification of existing machines ("substantial modification") is now addressed explicitly in recitals and definitions. — [Forum Media Austria](https://www.forum-media.at/maschinensicherheit/inhalt/Zukuenftige-Aenderungen-bei-einem-Umbau-bzw-einer-Aenderung-im-Zusammenhang-mit-der-Maschinenverordnung-MVO-20231230/2069482)
- Trade press: many machine builders are experts in mechanics and electrics, but the regulation now requires "security by design"; insurers will cover damage only if the builder can show it was not grossly negligent on security. — [produktion.de, why the regulation unsettles machine builders](https://www.produktion.de/wirtschaft/warum-die-maschinenverordnung-den-maschinenbau-verunsichert/2669902); [produktion.de, cybersecurity changes](https://www.produktion.de/wirtschaft/cybersecurity-was-sich-durch-die-maschinenverordnung-aendert/1760837)
- Contrasting vendor view (Indu-Sol): many firms are better prepared than the uncertainty suggests, and the cyber requirement does not affect most machine builders. — [SPS-Magazin 7/2024 "Nachgefragt"](https://sps-magazin.de/wp-content/uploads/2024/07/Nachgefragt_SPS-MAGAZIN_7_2024.pdf) (opinion, 2024)
- Omnibus IV proposal: per a joint press release of machinery associations, machinery is the only sector excluded from the 24-month transition that the proposal gives other sectors for digital documentation rules, so digital provision rules bite from January 2027 without an adaptation period. — [FEM joint press release](https://fem-eur.com/joint-press-release-machinery-sector-only-industry-excluded-from-transition-period-in-omnibus-iv/) (industry lobbying text; exact legal effect and current legislative status not confirmed)
- AI omnibus: Regulation (EU) 2026/1744, provisionally agreed 7 May 2026 and in force 27 July 2026, amends the Machinery Regulation so that the main technical requirements for high-risk AI in machinery sit in the Machinery Regulation instead of applying through the AI Act. A 2026 consolidated text of the Machinery Regulation exists. — [KAN](https://www.kan.de/en/service/news/detailansicht-en/rat-und-parlament-einigen-sich-zur-digital-omnibus-verordnung-zur-ki/); [EUROGIP, 30 July 2026](https://eurogip.fr/en/?p=36451); [Certifico](https://certifico.com/component/acym/archive/4149-regulation-on-machinery-regulation-eu-2023-1230-consolidated-text-2026) (secondary sources; details not verified against EUR-Lex)
- No source found reports a postponement of the 20 January 2027 date. — [Noerr](https://www.noerr.com/en/insights/regulation-eu-2023-1230-on-machinery-a-legal-regime-for-machinery-in-europe); [TÜV NORD](https://www.tuev-nord.de/de/dienstleistungen/auditierung-und-zertifizierung/produktzertifizierung/maschinenverordnung/)

Who is responsible, liability
- The manufacturer or its authorised representative must ensure the risk assessment is carried out; outsourcing is possible, but responsibility stays with the manufacturer. — [IBF Solutions](https://www.ibf-solutions.com/fachbeitraege/nein-zu-nachtraeglicher-ce-kennzeichnung); [Schmersal tec.nicum white paper](https://products.schmersal.com/upload/orig/10/00/86/56/DOC_MAR_BRO_tecnicum-whitepaper-risikobeurteilung_SDE_AIN_V1.pdf)
- Consultants and staff functions in CE work are treated as "guarantors" for their advisory task, and the boundary of that role is hard to draw. — [IBF Solutions, responsibility and liability](https://www.ibf-solutions.com/fachbeitraege/verantwortung-haftung-einfluss-von-funktion-position)
- A contract for work does not legitimise a breach of the law. — [Machinery Directive presentation (PDF)](https://cms.dextermedia.de/dcmpro/documents/20210682420/Maschinenrichtlinie.pdf)
- Czech consultancies state that without a risk assessment no valid declaration of conformity can be issued; they prepare the draft EU/EC declaration and CE marking documents as part of the service. — [posouzenirizik.cz](https://www.posouzenirizik.cz/component/sppagebuilder/page/8); [CPS industrial services FAQ](https://www.cpsis.cz/casto-kladene-otazky/)
- Fines for missing documentation in Germany can reach 30,000 EUR (provider's statement). — [ce-koordination.de](https://www.ce-koordination.de/leistungen/risikobeurteilung-maschinen/)

Prices and providers
- The only price range found: about 1,500–5,000 EUR for a simple machine when CE work is done in-house, up to 20,000 EUR or more for complex systems with an external provider (a provider's estimate, not a quote). — [dswerk.de](https://dswerk.de/maschinensicherheit-ce/)
- Small German offices advertise risk assessments and CE documents at a fixed price (amounts not shown). — [Dirk Leitsch](https://www.dirkleitsch.de/risikobeurteilung-maschinen/); [TD CE](https://td-ce.de/leistung/risikobeurteilung-fuer-maschinen/)
- One consultancy sells an initial CE consultation at a day rate and credits it against a later CE commission (amount not shown). — [midok](https://www.midok.de/ce-beratung-fuer-maschinen-und-anlagen/)
- Directories of providers exist: a dedicated directory of machine-safety and CE service providers, the supplier search "wlw", and a chamber-of-commerce list of CE consultants. — [ce-koordination.de directory](https://www.ce-koordination.de/dienstleister/); [wlw](https://www.wlw.de/de/suche/risikobeurteilung-fuer-die-sicherheit-von-maschinenanlagen); [IHK consultant list (PDF)](https://www.ihk.de/blueprint/servlet/resource/blob/5528314/3cabcb96040337942692edb173757f5e/beraterliste-zum-thema-ce-kennzeichen-1--data.pdf)
- Larger players in the same space: TÜV NORD, TÜV SÜD (accredited in Czechia for the new regulation after an audit in March 2026), Fraunhofer IPT (CE conformity for special machines under 2023/1230), component makers' service arms (Schmersal tec.nicum, Euchner, Axelent). — [TÜV SÜD Czechia](https://www.tuvsud.com/cs-cz/tisk-a-media/2026/may/audit-cia-k-novemu-strojnimu-narizeni); [Fraunhofer IPT](https://www.ipt.fraunhofer.de/en/offer/special-machines/ce-conformity.html); [Schmersal tec.nicum](https://products.schmersal.com/upload/orig/10/00/86/56/DOC_MAR_BRO_tecnicum-whitepaper-risikobeurteilung_SDE_AIN_V1.pdf)
- TÜV SÜD Slovakia published "the biggest challenges in implementing the machinery regulation" in July 2026 (content not seen). — [TÜV SÜD Slovakia](https://www.tuvsud.com/sk-sk/tlac-a-media/2026/july/najvacsie-vyzvy-pri-implementacii-nariadenia-o-strojovych-zariadeniach)

Software tools and their prices
- Safexpert (IBF Solutions): subscription tiers from 99 EUR (Starter), 199 EUR (Pro) and 264 EUR (Enterprise) per month; a separate price list shows purchase packages from 544 to 8,010 EUR (date of the list unclear). — [IBF prices and subscription](https://www.ibf-solutions.com/preise-und-abo); [Safexpert price list (PDF)](https://www.ibf-solutions.com/fileadmin/Dateidownloads/safexpert-preisliste-de.pdf)
- CE-Copilot (as of October 2026): 119, 229 and 399 EUR/month with three-month prepayment; the 229 EUR tier includes test protocols, Safexpert import and high AI quotas; the top tier covers five user profiles. — [OMR Reviews](https://omr.com/de/reviews/product/ce-copilot-de/pricing)
- WEKA Manager CE: single-seat licence 2,677 EUR/year plus VAT (listing updated October 2025). — [Softguide](https://www.softguide.de/programm/musterbetriebsanweisungen/vorschau)
- Docufy Machine Safety is another risk-assessment tool (no price found). — [industrial-production.de](https://www.industrial-production.de/steuerungstechnik/maschinensicherheit---risikobeurteilungen-fuer-die-fertigung.htm)

Qualifications
- Pilz CMSE (Certified Machinery Safety Expert): four-day course; UK price 1,950 GBP plus VAT, with the 14–17 September 2026 session listed as fully booked; a City & Guilds-assured variant costs 1,625 GBP; an Irish 2024 session cost 1,449 EUR; one-day recertification in Australia 1,145 AUD. — [Scattergood & Johnson (UK)](https://www.scatts.co.uk/info/news/pilz-cmse–certified-machinery-safety-expert-training-course); [Ibec (Ireland, 2024)](https://www.ibec.ie/connect-and-learn/events/upcoming-events/2024/certified-machinery-safety-expert-training-with-pilz); [roboausnet](https://www.roboausnet.com.au/event/pilz-cmse-r-recertification) (no German or Czech price found)
- Alternatives: TÜV "CE-Koordinator" seminars; a four-day CE coordinator course starting March 2027; a chamber-of-commerce practice seminar on risk assessment for 450 EUR per person. — [TÜV NORD](https://www.tuev-nord.de/de/weiterbildung/seminare/ce-koordinator-tuev); [ce-safety.de](https://www.ce-safety.de/); [IHK, Wirtschaft im Südwesten](https://www.wirtschaft-im-suedwesten.de/?p=20095)

Size of the affected population
- The VDMA represents about 3,600 German and European machine and plant builders (membership, not a census). — [VDMA](https://www.vdma.org/ja/automated-solutions)
- EU subsector counts (Eurostat via Statista, dated): 894 makers of paper-production machinery (2014) and 2,350 makers of plastics and rubber machinery (2015). — [Statista, paper machinery](https://statista.com/statistics/874253/number-of-enterprises-manufacturing-paper-production-machinery-in-the-european-union); [Statista, plastics and rubber machinery](https://www-statista-com.ezproxy.canberra.edu.au/statistics/874334/number-of-enterprises-manufacturing-plastic-and-rubber-machinery-in-the-european-union)
- Austria: about 500 enterprises under "machinery and equipment" in an industry-association table (column meaning unclear). — [Metalltechnische Industrie](https://metalltechnischeindustrie.at/fileadmin/content/Dokumente/Zahlen_Daten_Fakten/Englisch/Number_of_Companies/companies_march24.pdf)

Cyber Resilience Act
- Reporting duties apply from 11 September 2026: actively exploited vulnerabilities and severe incidents must be reported, with a 24-hour early warning; full application follows in December 2027. — [IHK Nürnberg](https://www.ihk-nuernberg.de/meldungen/details/cyber-resilience-act-cra-meldepflichten-ab-11-september-2026); [boerse-express](https://www.boerse-express.com/news/articles/cyber-resilience-act-neue-meldepflicht-ab-11-september-2026-927484)
- Fines up to 15 million EUR or 2.5 % of worldwide annual turnover. — [boerse-express](https://www.boerse-express.com/news/articles/cyber-resilience-act-meldepflicht-ab-11-september-bis-15-mio-euro-bussgeld-930139)
- The reporting platform started without automated interfaces, so processes run manually at first. — [boerse-express](https://www.boerse-express.com/news/articles/cyber-resilience-act-ab-september-24-stunden-meldepflicht-fuer-sicherheitsluecken-935284) (attribution among several similar articles not confirmed)
- Awareness: in a Bitkom survey of 1,003 companies only 29 % know what the Act means for their own business; another study finds a considerable share unprepared for the 24-hour reporting duty. — [it-daily](https://www.it-daily.net/?p=186948); [boerse-express](https://www.boerse-express.com/news/articles/cyber-resilience-act-meldepflicht-in-24-stunden-ab-september-934075) (attribution not confirmed; survey covers all sectors)
- Affected: manufacturers of machinery, equipment, components and software with digital elements and connectivity. Recommended first steps: identify which products fall in scope, decide who receives vulnerability notifications, set up an internal reporting procedure. — [amec (Spanish machinery exporters' association)](https://amec.es/en/?p=65317)
- Documentation: manufacturers must provide an SBOM as part of the technical documentation and carry out a cyber risk assessment before placing a product on the market. — [BearingPoint](https://bearingpoint.services/foss/en/newsblogs/eu-cyber-resilience-act-how-sboms-move-from-nice-to-have-to-must-have-by-2027/); [ENISA technical advisory on SBOM v1.10, October 2026](https://www.enisa.europa.eu/sites/default/files/2026-10/ENISA%20Technical%20Advisory%20-%20Software%20Bill%20of%20Materials%20-%20v1.10.pdf); [BSI TR-03183](https://bsi.bund.de/dok/TR-03183-en)
- Machine building specifically: large groups and small firms face different problems, standards are partly still missing, and the legal text leaves some questions without a direct answer. — [produktion.de](https://www.produktion.de/technik/cyber-resilience-act-warum-firmen-investieren-muessen/2637153)
- Who sells help: Fraunhofer IEM developed a threat and risk analysis method with industry partners including a machine builder and applied it in workshops; firmware-analysis vendor ONEKEY, BearingPoint and SBOM tool vendors market CRA offerings. — [Fraunhofer IEM via idw](https://idw-online.de/de/pdfnews841094); [ONEKEY](https://www.onekey.com/press-release/eu-cyber-resilience-act-becomes-a-tour-de-force-for-the-industry); [SafeDep](https://safedep.io/category/compliance-sbom)

### Inferences
- Legally one person can do this alone. No licence is required to draft a risk assessment or technical file; the client signs the declaration of conformity and stays the responsible manufacturer. The consultant still carries contractual and advisory liability ("guarantor" role), so professional indemnity insurance and a contract that defines the deliverable as a draft for the manufacturer's review are needed. No source on insurance cost or availability was found.
- This is the most text-heavy variant, so AI drafting leverage is high, but the check is not executable: correctness is judged by a human expert against harmonised standards. A newcomer cannot tell whether an AI-drafted hazard list is complete. This is the opposite of the reader's strength (agent harness with executable verification).
- A tool already occupies the obvious AI position: CE-Copilot sells AI-assisted risk assessment at 119–399 EUR/month and imports Safexpert data. A solo founder would compete with a product priced below one consulting day, or use it and sell the labour and judgement around it.
- Timing is awkward as of November 2026: about ten weeks remain before 20 January 2027. Demand tied to the deadline peaks now, when a newcomer has no references. After the date, steady demand continues (every new machine type needs a file), and substantial-modification cases at factories become a new recurring source, but those need on-site inspection.
- The Cyber Resilience Act is the better-timed wave for someone with a software background: full application is 13 months away, awareness is low (29 %), standards are incomplete, and SBOM generation, vulnerability-handling process documents and threat models are closer to software work with partly executable checks (SBOM tooling, firmware scans). Machine builders who are "experts in mechanics and electrics" are the natural buyers.
- From background knowledge, not verified in this session: most machinery falls into the Act's default category with self-assessment; the Machinery Regulation's own cyber clauses (protection against corruption, safety of control systems) are separate and apply from January 2027; the Regulation allows digital instructions by default with paper on request. Verify against EUR-Lex.
- Durable assets are plausible here: a hazard library per machine type, clause-by-clause checklists for both regulations, and templates in Czech and German. The barrier is that clients ask for a recognised credential (CMSE or TÜV CE coordinator, about 1,500–2,500 EUR and four days) and for references on similar machines.

### Gaps
- No day rate for CE consultants in Germany or Czechia, and no Czech price for a risk assessment or CE file, despite three targeted searches (one extended, one in Czech).
- No count of machine builders (NACE 28) for Czechia, Germany or the EU was retrieved; Eurostat structural business statistics would have it.
- No survey on readiness for the Machinery Regulation and no evidence of consultant or notified-body capacity shortages was found; the "fully booked" CMSE session in the UK is the only (weak) signal.
- Successor of Pilz PASrisk and current Docufy pricing not found.
- No price for Cyber Resilience Act consulting packages for small machine builders; no VDMA survey on SBOM readiness in machine building.
- Current legislative status of the Omnibus IV digital-documentation proposal for machinery is unconfirmed.
- Professional indemnity cover for safety-documentation consultants (availability, premium, exclusions) was not found.

## 5. Technical documentation and translation services for machinery: prices, AI disruption, tekom data

### Takeaway
No per-page market prices or tekom fee data were retrievable. The one set of figures found (from an AI-documentation vendor) shows where the market is heading: AI translation with human review at a quarter or less of the traditional agency price.

### Cited Findings
- Vendor estimate: technical writing ties up 20–40 hours (elsewhere on the same site 20–60 hours) per product version, more for special machines. — [KI-Syndikat use case](https://www.ki-syndikat.de/usecases/maschinenbau/03-technische-dokumentation-generator/) (seller of AI documentation tooling)
- Vendor estimate: external translation costs 3,000–6,000 EUR per target language; AI translation with human review 500–1,500 EUR. — [KI-Syndikat use case](https://www.ki-syndikat.de/usecases/maschinenbau/03-technische-dokumentation-generator/)
- Employed technical writers in Germany earn around 46,100 EUR/year (Frankfurt), about 16 EUR/hour by the portal's calculation. — [StepStone](https://www.stepstone.de/gehalt/Technische-r-Redakteur-in/city/Frankfurt-am-Main.html)
- A UK freelance technical writer publishes a rate of 420 GBP/day excluding VAT. — [Straygoat](https://www.straygoat.co.uk/technical-writing-prices)
- The tekom annual conference 2026 programme has sessions on assessing AI translation quality and running AI translation workflows. — [tekom Jahrestagung 2026 programme (PDF)](https://jahrestagung.tekom.de/fileadmin/tagungen.tekom.de/H26/Programm/Program_2026.pdf)
- The Machinery Directive, and from 2027 the Regulation, require a complete, standards-compliant instruction manual. — [KI-Syndikat use case](https://www.ki-syndikat.de/usecases/maschinenbau/03-technische-dokumentation-generator/)
- Documentation agencies bundle manuals with CE marking support. — [kern (Austria)](https://e-kern.com/at/technische-dokumentation/ce-kennzeichnung)

### Inferences
- Manuals and translations alone are the most commoditised slice: AI tooling vendors already quote 75–90 % price cuts on translation, and the profession's own conference is about operating AI workflows. A newcomer selling pure writing or translation competes on price with tools.
- The slice keeps value when bundled with the compliance check (does the manual contain what the Regulation's annex requires, in each language of the market) because that is the part buyers cannot judge themselves.
- Using the vendor's 20–60 hours per product version and a freelance rate of roughly 50–60 EUR/hour (UK day rate converted; rough), a manual is a job of about 1,000–3,500 EUR. This is an estimate built from two weak sources.

### Gaps
- No price per page for manuals and no price per word or standard page for Czech/German technical translation was found (two searches).
- No tekom salary, fee or AI-adoption survey figures were retrieved.
- No evidence on how many small machine builders outsource manuals versus write them in-house.

## 6. Fixed-price feasibility and concept studies: do manufacturers pay, do subsidised hubs crowd them out, examples

### Takeaway
No evidence was found that manufacturers pay small independent firms for standalone automation feasibility reports at a published price. Integrators give feasibility checks away as pre-sales, research institutes sell them as projects, and EU-funded hubs in Czechia offer "test before invest" for robotics, so the paid middle ground is narrow.

### Cited Findings
- Free as pre-sales: igus RBTXpert gives a free consultation that ends with certainty on feasibility and a fixed-price offer for the automation itself. — [Computer & Automation](https://www.computer-automation.de/robotik/roboter-fuer-kmu.htm)
- Free as lead generation: a small firm offers a free "Automatisierungs-Check" (16-question form plus free consultation). — [Kommtronik](https://kommtronik.com/automatisierungs-check/)
- Integrator process: needs analysis, feasibility study with 3D simulation, then a modular quote; basic robot cell from about 90,000 EUR; rule of thumb is bare robot price times 3–5. — [Momac Robotics](https://momac-robotics.de/was-kostet-eine-roboteranlagen/)
- Research institutes sell the study as a method: Fraunhofer IPA's Automation Potential Analysis (assembly, now also welding and mobile robots), done jointly with the customer and ending in a recommendation for full or partial automation. — [Fraunhofer IPA product sheet](https://www.ipa.fraunhofer.de/content/dam/ipa/en/documents/Expertises/Roboter--und-Assistenzsysteme/300_400_en_Automation-Potential-Analysis.pdf); [Silicon Saxony / Fraunhofer IPA](https://silicon-saxony.de/fraunhofer-ipa-schweissen-mit-robotern-automatisierungspotenziale-systematisch-ermitteln/)
- JOANNEUM RESEARCH (Austria) offers technical and economic feasibility studies for automation tasks. — [JOANNEUM RESEARCH Robotics](https://www.joanneum.at/robotics/en/products/technische-und-wirtschaftliche-machbarkeitsstudien/)
- A productised example exists: EVIA runs an online shop described as "your systematic start to automation" and exhibits an "automation planning" use case at regional automation fairs (prices not visible). — [EVIA shop](https://shop.evia.de/en/); [all about automation Heilbronn](https://www.heilbronn.allaboutautomation.de/en/products/use-case-automation-planning-315304/)
- Czech hubs: EDIH Northeast Bohemia offers "Test before invest" for firms, with robotics, cloud robotics and collaborative robots among the listed areas; its model lets clients verify a technology in practice before committing to a larger investment. — [Liberec Region, EDIH info day presentation (PDF)](https://www.kraj-lbc.cz/getFile/id:470025/07_přednáška_eDIH_Infoden.pdf); [BusinessInfo.cz](https://www.businessinfo.cz/clanky/v-jablonci-pomaha-hendikepovanym-lidem-robot-prvni-sveho-druhu-v-evrope/)
- EDIH CTU (Czech Technical University) won support for three more years of AI and digitalisation services (December 2025). — [CTU news](https://aktualne.cvut.cz/en/reports/20251217-edih-ctu-succeeded-in-a-european-competition-and-gained-support-for-another-three); [BusinessInfo.cz](https://www.businessinfo.cz/clanky/cvut-edih-ctu-ziskal-podporu-na-dalsi-tri-roky-pro-poskytovani-sluzeb-v-oblasti-ai-a-digitalizace/)
- RICAIP Testbed Brno (CEITEC) markets itself as a way to "try out digitalisation of production without financial risk". — [CEITEC](https://www.ceitec.cz/vyzkouset-si-digitalizaci-vyroby-bez-financnich-rizik-to-je-ricaip-testbed-brno/t11287)
- An EDIH success story covers "simulation of production process, robotization concept, optimization". — [EDIH network](https://european-digital-innovation-hubs.ec.europa.eu/knowledge-hub/success-stories/simulation-production-process-robotization-concept-optimization)
- Price anchors a study would be judged against: removal robot at an injection-moulding machine about 15,000–40,000 EUR, fully integrated 50,000–80,000 EUR; palletizing cell 40,000–120,000 EUR; some integrators offer simple applications under 15,000 EUR. — [digioneer](https://digioneer.pro/meine-fabrik-der-roboter-und-ich/); [roboterautomation24](https://roboterautomation24.de/)

### Inferences
- The buyer's alternatives are free (integrator pre-sales, vendor configurators) or subsidised (hubs, institutes). A paid independent report has to sell on neutrality ("we do not sell you the cell") and on speed. That is a real but thin argument for a firm with no machine-building track record.
- For a founder with little hardware experience this variant has a credibility problem similar to (c): the report's value is the judgement that a concept will work on the shop floor, which is the experience the founder lacks. The simulation part (reach, cycle time) is checkable; cost and risk estimates are not.
- A cheap demand test is possible within weeks (landing page with a fixed price, outreach to 50 Czech manufacturers). The likely result, given the free alternatives, is interest without payment unless the price is low (hundreds of EUR) or the report unlocks a subsidy application.
- A study bundled with a subsidy or grant application is a known pattern in Czechia, but that becomes grant consulting, a different business.

### Gaps
- No price for any feasibility study (Fraunhofer, JOANNEUM, EVIA shop, integrators) was found, despite two searches (one extended).
- Whether Czech hub services are free or co-paid for small firms was not confirmed in the extracts. From background knowledge (unverified): hub services are typically subsidised up to 100 % for small and medium-sized firms under state-aid limits.
- No example of an independent firm in Czechia, Slovakia, Germany or Austria that lives from fixed-price automation assessments was identified.

## 7. How a newcomer gets the first client in each variant, how long it takes, what proof clients want

### Takeaway
Sources agree on one pattern: the first client comes through an existing relationship or a low-risk entry product (fixed price, credited initial consultation), and the proof asked for is prior work on similar machines. No source gave a time-to-first-client figure.

### Cited Findings
- (a) Subcontracting overflow for integrators is the usual entry to remote work; advice is to build relationships with integrators and to get in-person experience on real equipment first. — [Industrial Monitor Direct](https://industrialmonitordirect.com/blogs/knowledgebase/getting-remote-plc-hmi-programming-projects-a-practical-guide); [Industrial Monitor Direct, skills gap](https://industrialmonitordirect.com/blogs/knowledgebase/entry-level-plc-freelancing-simulator-vs-real-world-skills-gap)
- (a) Channels: freelance directories with visible hourly rates, r/PLC monthly classifieds, engineering marketplaces. — [freelancermap.at](https://www.freelancermap.at/freelancer-verzeichnis/sps-programmierung-38464); [Cad Crowd](https://www.cadcrowd.com/manufacturing-services/plc-programming)
- (b) Providers lower the entry barrier by delivering the model so the client can continue alone, and by selling "digital twin as a service" per application. — [ite-si.de](https://ite-si.de/kompetenzen/virtuelle-inbetriebnahme/); [b2match](https://www.b2match.com/e/bodenseegesprache-v/participants/3081356)
- (b)/(olp) Software distributors convert software prospects into service clients ("buy the software or contract our programming service"). — [Sumig](https://sumig.com/en/product/detail/offline-programming-for-welding-robots)
- (c) Entry offers used by incumbents: fixed-price risk assessment; a one-day paid consultation credited against the later commission; listing in provider directories and chamber-of-commerce consultant lists. — [TD CE](https://td-ce.de/leistung/risikobeurteilung-fuer-maschinen/); [midok](https://www.midok.de/ce-beratung-fuer-maschinen-und-anlagen/); [ce-koordination.de directory](https://www.ce-koordination.de/dienstleister/); [IHK consultant list](https://www.ihk.de/blueprint/servlet/resource/blob/5528314/3cabcb96040337942692edb173757f5e/beraterliste-zum-thema-ce-kennzeichen-1--data.pdf)
- (c) Credentials on offer as proof: CMSE (four days), TÜV CE coordinator, chamber seminars. — [Scattergood & Johnson](https://www.scatts.co.uk/info/news/pilz-cmse–certified-machinery-safety-expert-training-course); [TÜV NORD](https://www.tuev-nord.de/de/weiterbildung/seminare/ce-koordinator-tuev)
- (c) Chambers of commerce run webinars on the 2027 regulation, which are venues where affected machine builders gather. — [IHK Heilbronn-Franken](https://www.ihk.de/heilbronn-franken/produktmarken/branchen/aktuelles/webinar-die-eu-maschinenverordnung-2027-am-26-juni-7044922)
- (d) Free questionnaire-plus-consultation is the standard lead magnet. — [Kommtronik](https://kommtronik.com/automatisierungs-check/)

### Inferences
- Estimated time to a first paid job for this founder (judgement, no source): (a) months, because integrators want proof of commissioning experience; (b) 1–3 months if aimed at integrators who already use simulation and need capacity, longer if the method must be sold; OLP on RoboDK 1–2 months but only with a client willing to touch up on site; (c) Machinery Regulation files: a credential first (about one week and 1,500–2,500 EUR), then weeks to months, with the deadline rush already under way; Cyber Resilience Act documentation: a hard demand signal is testable within weeks because the software credentials are the founder's own; (d) a demand signal in 2–4 weeks, payment uncertain.
- Minimum competence for someone who programs well but has never commissioned a machine (judgement): the Cyber Resilience Act slice and simulation model building are closest to existing skills; machine-safety risk assessment needs standards knowledge and exposure to real machines that a four-day course does not replace; PLC programming for real machines is learnable in months on a simulator but not provable without site work.
- In every variant, the first reference is the bottleneck, not the tooling. A subcontract under an established office (CE consultancy, simulation office) is the common way to get one, which partly reintroduces the "outside partner" dependency the reader wanted to avoid, although as a customer relationship, not as a co-liable partner.

### Gaps
- No data on time to first client or on conversion rates for any variant.
- No interviews or forum threads (SPS-Forum, r/PLC) with first-hand accounts were retrievable through search extracts; the practitioner view rests on one vendor blog that summarises forum discussions.

## 8. Failure modes: liability, on-site expectation, rate pressure, vendor AI tools, licence costs

### Takeaway
The main threats are structural: the customer's risk sits on the shop floor where a remote newcomer is absent, the control-system vendors shipped AI engineering agents inside their own tools in 2026, and the market is in a weak phase. Liability for safety documents is real but manageable; licence costs matter mainly for simulation.

### Cited Findings
- Vendor AI, Siemens: an engineering AI agent ("Eigen Engineering Agent") launched around Hannover Messe 2026, integrated in TIA Portal and tested with over 100 companies. It reads the project structure, generates structured-text and ladder code, fixes compile and syntax errors, generates test logic, applies bulk changes, enforces style guides, writes project documentation, and reads electrical schematics (XML/AML) to generate PLC data. — [Siemens press release](https://news.siemens.com/en-us/the-new-ai-agent-doesnt-just-make-suggestions/); [Computer & Automation](https://computer-automation.de/engineering/hannover-messe-2026--siemens-stellt-neuen-ki-agenten-vor.htm); [E&M blog](https://blog.eandm.com/engineering-copilot-tia-eigen-engineering-agent) (release timeline differs between sources)
- An integrator (Prism Systems) is presented by Siemens as a reference user of AI in automation engineering. — [Siemens](https://www.siemens.com/en-us/company/insights/prism-systems-automation-engineering-ai/)
- Vendor AI, Beckhoff: TwinCAT CoAgent for Engineering (TE1700) works inside the engineering environment, supports multiple language models including locally hosted ones, and gives code suggestions, I/O configuration, HMI support and documentation updates; Beckhoff reports productivity gains of 20–30 % from internal tests and pilots. — [Beckhoff (Czech site)](https://www.beckhoff.com/cs-cz/products/automation/twincat-projects-with-ai-supported-engineering/); [Control Engineering](https://www.controleng.com/?p=135140); [Industrial Machinery Digest](https://www.industrialmachinerydigest.com/software/software-general/twincat-coagent-accelerates-automation-programming-with-built-in-ai-tools)
- AI in compliance: an AI-assisted risk-assessment tool sells from 119 EUR/month. — [OMR Reviews, CE-Copilot](https://omr.com/de/reviews/product/ce-copilot-de/pricing)
- AI in documentation: AI translation with review quoted at 500–1,500 EUR against 3,000–6,000 EUR per language traditionally. — [KI-Syndikat](https://www.ki-syndikat.de/usecases/maschinenbau/03-technische-dokumentation-generator/)
- On-site expectation: commissioning, debugging and I/O checkout need presence; site access and liability block small remote jobs. — [Industrial Monitor Direct](https://industrialmonitordirect.com/blogs/knowledgebase/remote-plc-programming-home-based-work-arrangements-guide); [Industrial Monitor Direct, second job](https://industrialmonitordirect.com/blogs/knowledgebase/plc-programming-as-a-second-job-feasibility-risks-and-career-pathways)
- Rate pressure: Indian bureaus list robot offline programming services; the German freelance average rate fell in 2026 for the first time. — [IndiaMART](https://m.indiamart.com/proddetail/arc-welding-offline-robot-programming-services-13997781173.html); [freelancermap press release](https://www.freelancermap.at/media/press_release/2026-07-23-IT-Freelancer.pdf)
- Weak cycle: machine-building employment down 2.2 % in 2025, zero production growth forecast for 2026, record engineering unemployment. — [Schwäbische](https://www.schwaebische.de/wirtschaft/maschinenbauer-unter-druck-tausende-jobs-gestrichen-4356019); [produktion.de](https://www.produktion.de/wirtschaft/arbeitsmarkt-fuer-ingenieure-unter-druck-fachkraefte-fehlen/2594810)
- Liability: advisers count as guarantors for their advisory task; a late or wrong risk assessment forces expensive retrofits when hazards surface at commissioning. — [IBF Solutions, liability](https://www.ibf-solutions.com/fachbeitraege/verantwortung-haftung-einfluss-von-funktion-position); [IBF Solutions, reducing CE cost](https://www.ibf-solutions.com/fachbeitraege/ce-kennzeichnung-kosten-reduzieren)
- Client-side IP concern about handing projects to freelancers. — [Cad Crowd](https://www.cadcrowd.com/manufacturing-services/plc-programming)
- Licence and tool lock-in: Visual Components pricing is opaque with high initial cost and per-feature licensing; RoboDK is in the low thousands of USD plus 1,500 USD/year. — [rfp.wiki](https://www.rfp.wiki/artificial-intelligence/physical-ai-digital-twin-platforms/visual-components); [RoboDK pricing](https://web.robodk.com/pricing)

### Inferences
- Vendor agents attack exactly the leverage a software founder would bring to variant (a): generating and fixing PLC code inside the vendor's tool, with the vendor's project context. An outside programmer's edge shrinks to judgement and testing, which again points to simulation-based verification as the defensible part.
- The same pattern holds in (c): the drafting is being absorbed by tools at about 100–400 EUR/month, so durable value lies in review, sign-off support and domain libraries, where a newcomer is weakest at the start.
- "Is this just freelancing?": (a) is freelancing with no accumulating asset unless verified function-block libraries and test models are kept and reused across clients (often blocked by client IP terms). (b) accumulates component models and test harnesses and can become a product. (c) accumulates hazard and clause libraries and templates and recurring clients (every new machine type, every software update under the Cyber Resilience Act), and is the closest to a repeatable productised service. (d) accumulates benchmarks and cost data but little else.
- Typical failure paths by variant (judgement): (a) no references, so no orders, then drift into on-site commissioning; (b) long unpaid modelling effort per client and licence cost before the first invoice; (c) an error in a hazard list discovered after an accident or market-surveillance check, or commoditisation by AI tools; (d) prospects accept the free alternative.

### Gaps
- No prices for TIA Portal, EPLAN, iPhysics, ISG-virtuos or Siemens simulation tools were retrieved (the single licence search returned only RoboDK and Visual Components).
- Nothing was found on AI features from CODESYS.
- No documented court case or insurance claim against an external CE consultant was found.
- No measured effect of vendor AI tools on demand for outside programmers; Beckhoff's 20–30 % is a vendor figure.

## 9. Summary judgement per variant against the seven criteria (objective of the assignment)

### Takeaway
On the evidence found, no variant is a clean fit. The two that match a software founder best are simulation-based testing of control code (strongest executable check, weakest demand evidence) and Cyber Resilience Act documentation for machine and component makers (best timing and closest to existing skills). Machinery Regulation files and feasibility reports depend on machine experience the founder lacks, and remote PLC programming depends on commissioning references.

### Cited Findings
- Remote PLC programming: rates 70–110 EUR/hour for German-speaking freelancers; on-site presence expected for commissioning. — [freelancermap.at](https://www.freelancermap.at/freelancer-verzeichnis/sps-programmierung-38464); [Industrial Monitor Direct](https://industrialmonitordirect.com/blogs/knowledgebase/getting-remote-plc-hmi-programming-projects-a-practical-guide)
- Virtual commissioning: low adoption among mid-sized machine builders; sold as a service by small offices. — [Silicon Saxony / Fraunhofer IWU](https://silicon-saxony.de/fraunhofer-iwu-saechsische-maschinenbauer-nutzen-vorteile-der-virtuellen-inbetriebnahme-oft-noch-nicht/); [ite-si.de](https://ite-si.de/kompetenzen/virtuelle-inbetriebnahme/)
- Compliance: external CE work estimated at 1,500–5,000 EUR (simple) to 20,000 EUR or more (complex); AI tool competition from 119 EUR/month; Cyber Resilience Act awareness 29 %. — [dswerk.de](https://dswerk.de/maschinensicherheit-ce/); [OMR Reviews](https://omr.com/de/reviews/product/ce-copilot-de/pricing); [it-daily](https://www.it-daily.net/?p=186948)
- Feasibility: free and subsidised alternatives exist. — [Computer & Automation](https://www.computer-automation.de/robotik/roboter-fuer-kmu.htm); [Liberec Region EDIH presentation](https://www.kraj-lbc.cz/getFile/id:470025/07_přednáška_eDIH_Infoden.pdf)

### Inferences
Scores are the researcher's judgement from the sections above (high / medium / low; "high" is favourable to the founder).

| Criterion | (a) Remote PLC / OLP | (b) Simulation / VC | (c) MR files and manuals | (c) CRA documentation | (d) Feasibility reports |
|---|---|---|---|---|---|
| 1. Doable alone, low liability | high legally; liability low while client commissions | high | medium: no licence needed, advisory liability, insurance needed | medium-high: same structure, less physical-harm exposure | high |
| 2. Speed and cost to first proof | low: references needed | medium: licence cost, 1–3 months | medium: credential first, deadline rush now | medium-high: demand test in weeks | medium: signal fast, payment doubtful |
| 3. Text/code with executable check | medium: check is on the real machine | high: simulated plant is the check | low: text without executable check | medium: SBOM and scans are checkable, process documents are not | low-medium: reach and cycle time checkable, cost is not |
| 4. Demand evidence and prices | medium: visible rates, soft market | low: no prices, low adoption | medium: many providers, one price range | medium: low awareness, law in force, no prices | low: no paid examples |
| 5. Newcomer barrier | high barrier (on-site, references) | medium-high (trust, CAD and code access) | high (credential, references) | medium (few established specialists for machinery) | medium (free alternatives) |
| 6. Durable advantage | low: freelancing | medium-high: model and test libraries | medium: hazard libraries, recurring files | medium-high: recurring per release, tooling | low |
| 7. Main failure mode | vendor AI agents, no site experience | long sale, licence cost | liability, AI tools, missing experience | standards still moving, small firms delay | free substitutes |

- A combination worth testing: cybersecurity documentation for both regulations (Machinery Regulation cyber clauses from January 2027 and the Cyber Resilience Act from December 2027) sold to small machine and component makers in Czechia and Germany, with simulation-based code testing as a second line once a client relationship exists. This is an inference, not a finding; demand and price are unproven.

### Gaps
- Every row of the table rests on thin price and demand evidence; the report writer should treat it as a structured hypothesis, not a result.
- A proper test would need 10–20 direct conversations with Czech and German machine builders; desk research could not establish willingness to pay for any variant.
