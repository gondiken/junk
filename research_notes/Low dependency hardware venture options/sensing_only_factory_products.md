# Sensing-only products for small manufacturers (inspection stations, retrofit machine monitoring, camera process monitoring) — state as of November 2026

Method note: page fetching was blocked, so every figure below comes from search-result extracts (28 searches). Where an extract did not say which of several result pages a figure came from, the candidate pages are linked together and marked "attribution uncertain". Vendor and blog figures are marked as such. Items marked "background knowledge" are from the researcher's own training (cutoff mid-2026) and were not confirmed in this session.

Variants: (a) AI visual quality inspection station; (b) retrofit machine monitoring; (c) camera-based process monitoring.

## 1. Regulatory status in the EU (machinery, LVD/EMC/RED/RoHS, CRA, AI Act, GDPR/works council; self-declaration)

### Takeaway
No source found says a camera-plus-edge-PC station or a clamp-on sensor kit is "machinery"; the legal definition turns on a drive system and moving parts, so a pure sensing product should sit under the ordinary self-declared electrical-product rules (EMC, LVD only if mains voltage, RoHS, RED if it has radio, CRA from December 2027). The two real regulatory traps are (1) adding a reject actuator or wiring into a machine's control system, which brings in machinery rules, and (2) pointing AI cameras at workers, which brings in Czech Labour Code § 316, GDPR and possibly AI Act high-risk status.

### Cited Findings
**Machinery**
- Directive 2006/42/EC defines machinery as an assembly fitted with (or intended for) a drive system other than directly applied human or animal effort, with linked parts of which at least one moves, joined for a specific application (definition quoted from the researcher's memory of Art. 2(a); the text is at the linked EUR-Lex PDF, not re-read in this session) — [EUR-Lex, Directive 2006/42/EC](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2006:157:0024:0086:en:PDF); application guide: [CEN-CENELEC copy of the Commission Guide, ed. 2.1](https://www.cencenelec.eu/media/CEN-CENELEC/Areas%20of%20Work/CEN%20sectors/Mechanical%20and%20Machines/Mechanical%20engineering/Doc%20and%20materials/edition-2-1-of-the-md-guide.pdf)
- Regulation (EU) 2023/1230 replaces the Directive and applies from 20 January 2027 — [iSAX blog, Dec 2024](https://isax.com/en/about/blog/machinery-regulation-2023-1230); [EU-OSHA summary](https://osha.europa.eu/en/legislation/directive/regulation-20231230eu-machinery)
- The new Regulation's definition also captures machinery that is missing only the upload of its application software, and "safety component" now covers digital components including software — [DWF law-firm note, July 2023](https://dwfgroup.com/pl-pl/news-and-insights/insights/2023/7/new-machinery-regulation)
- A party that substantially modifies machinery, including by software changes, becomes its manufacturer — [Noerr](https://www.noerr.com/en/insights/regulation-eu-2023-1230-on-machinery-a-legal-regime-for-machinery-in-europe); [all-for-pack](https://www.all-for-pack.com/news/Regulation-machinery)
- Partly completed machinery gets a Declaration of Incorporation and assembly instructions, not a CE mark; whoever integrates an assembly is treated as its manufacturer and takes CE responsibility (vendor/consultancy explanations) — [GT Engineering](https://www.gt-engineering.it/en/insights/machinery-directive/datoredilavoro-marcatura-ce/); [Tecnosida](https://www.tecnosida.com/machinery-directive-2006-42-ec)
- A modified machine can be treated as a new machine requiring the full CE process if the change is a "substantial modification" (German ministry position as relayed by a vendor) — [Leuze](https://www.leuze.com/en-int/contact-and-support/specialist-knowledge/safety-at-work/directives-laws-and-standards/machine-safety-in-europe)
- Standard pneumatic cylinders are themselves outside the Machinery Directive (supplied with a manual, not a CE mark), per a component supplier — [SMC EU Directives Q&A](https://www.smcworld.com/overseas/international/en-jp/ce/ce_qa.html)

**Low Voltage / EMC**
- LVD 2014/35/EU covers equipment rated 50–1000 V AC and 75–1500 V DC; equipment outside those limits is not covered — [Wikipedia](https://en.wikipedia.org/wiki/Low_Voltage_Directive); [BAuA scope page](https://www.baua.de/EN/Topics/Work-design/Safe-products/Electrical-products/Requirements/Application-field)
- A sub-50 V device that runs from mains through an accompanying power supply can still bring the LVD into play for that supply; LVD compliance can be self-certified without a notified body (attribution uncertain among the secondary pages returned) — [Element summary of the Commission LVD guide](https://www.element.com/resources/articles/the-european-commissions-guide-to-the-low-voltage-directive); [Conformance](https://www.conformance.co.uk/ce-directives-information/low-voltage-directive); [Certification Experts](https://certification-experts.com/knowledgebase/summary-low-voltage-directive-2014-35-eu/)

**Cyber Resilience Act (Regulation (EU) 2024/2847)**
- Reporting duties (Art. 14: actively exploited vulnerabilities and severe incidents, 24-hour early warning to ENISA/CSIRT) apply since 11 September 2026 and reach products already on the market — [McCann FitzGerald](https://www.mccannfitzgerald.com/knowledge/data-privacy-and-cyber-risk/cyber-resilience-act-reporting-obligations-apply-from-11-september-2026); [Jones Day, July 2026](https://www.jonesday.com/en/insights/2026/07/eu-cyber-resilience-act-24hour-reporting-duties-start-september-11-2026)
- Essential requirements, conformity assessment and the security-update duty apply from 11 December 2027 — [CMS](https://cms.law/en/bel/legal-updates/ready-respond-report-the-cyber-resilience-act-s-reporting-regime-is-here); [NCSC Ireland](https://ncsc.gov.ie/cra/)
- The default product category (commentary says about 90% of products) can use internal-control self-assessment; "Important Class I" can self-assess only if harmonised standards are fully applied; Class II and Critical need third parties; the Commission can move categories by delegated act — [FOSSA](https://fossa.com/blog/cra-product-classification/); [Finite State](https://finitestate.io/blog/conformity-assessments-eu-cra-requirements); [DataGuard](https://www.dataguard.com/cyber-resilience-act/certification/)

**AI Act**
- The Digital Omnibus on AI moved high-risk application dates: stand-alone Annex III systems to 2 December 2027, and AI embedded in Annex I regulated products (machinery included) to 2 August 2028 — [OneTrust](https://www.onetrust.com/blog/eu-digital-omnibus-proposes-delay-of-ai-compliance-deadlines/); [CADE](https://cadeproject.org/updates/eus-digital-omnibus-proposes-major-delay-to-ai-act-high-risk-rules/). One source gives the final act as Regulation (EU) 2026/1744, in force 27 July 2026 (single-source; not confirmed against the Official Journal) — [ComplianceHub](https://compliancehub.wiki/blog/eu-digital-omnibus-ai-act-deadline-deferral-annex-iii-2027); [FutureAGI](https://futureagi.com/blog/eu-ai-act-timeline-digital-omnibus-2027)
- Annex III point 4 makes AI "intended to monitor and evaluate the performance and behaviour of persons in work-related relationships" high-risk; draft Commission guidelines (June 2026) read this broadly: high-risk if the output systematically evaluates workers even without affecting pay or hours — [Faegre Drinker, 15 June 2026](https://www.faegredrinker.com/en/insights/publications/2026/6/draft-commission-guidelines-on-high-risk-ai-implications-for-the-workplace)
- Art. 6(3) lets an Annex III system escape high-risk status if it poses no significant risk and does not materially influence decisions, but not if it profiles natural persons — [Learnsignal guide](https://www.learnsignal.com/blog/ai-act-deployer-obligations-article-26-human-oversight-employers-ireland-guide/)

**Cameras that see workers (Czechia)**
- Governing rules are § 316 of the Labour Code (262/2006 Sb.), GDPR, and Act 110/2019 Sb.; the employer needs a "serious reason based on the special nature of its activity" to intrude on privacy, must inform employees in advance of scope and method, and covert monitoring is unlawful — [muj-pravnik.cz, 2026 overview](https://muj-pravnik.cz/sledovani-zamestnancu/); [epravo.cz](https://www.epravo.cz/top/clanky/monitoring-cinnosti-zamestnancu-ze-strany-zamestnavatele-1-cast-109563.html)
- A simplified table in the same overview treats cameras in a production hall or warehouse as permissible subject to: serious reason, information duty, and a DPIA — [muj-pravnik.cz](https://muj-pravnik.cz/sledovani-zamestnancu/)
- Czech DPA (ÚOOÚ) practice distinguishes recording systems (personal-data processing, under ÚOOÚ supervision) from live-view-only systems (historically not treated as processing, but still under § 316(2)); the labour inspectorate supervises workplace monitoring — [epravo.cz, camera systems at work](https://www.epravo.cz/top/clanky/problematika-kameroveho-systemu-na-pracovisti-107905.html); [pravniprostor.cz](https://pravniprostor.cz/clanky/pracovni-pravo/sledovani-zamestnancu-na-pracovisti-jak-ho-delat-pravne-spravne)

### Inferences
- Variants (a) and (b) as pure sensing products do not meet the machinery definition (no drive system, no moving parts for an application), so the founder is not a "machine manufacturer". This is the researcher's reading of the definition; no source in this session states it explicitly for vision stations.
- The founder is still a "manufacturer" in the product-law sense when selling a station or kit under their own name: an EU Declaration of Conformity and technical file for EMC, RoHS, LVD (only if any part is mains-rated; using a bought-in CE-marked external 24 V power supply keeps the founder's own build at extra-low voltage) and, from 11 December 2027, CRA. All of these are self-declaration routes for this product type; no notified body. EMC testing of an assembly of CE-marked parts is not automatically waived (background knowledge) — a pre-compliance lab day is a likely real cost.
- Radio (Wi-Fi/LTE/LoRa in a monitoring kit) adds the Radio Equipment Directive, including its cybersecurity requirements in force since August 2025 (background knowledge, not confirmed here). Wired Ethernet/PoE avoids this.
- Reject actuator: an air-blast nozzle or diverter driven by the station is a moving, powered function. Either the station-plus-ejector becomes partly completed machinery, or fitting it to the customer's line is a modification the customer or integrator must assess. Safest solo design: output only a pass/fail signal (stack light, screen, 24 V digital output, or fieldbus message) and let the customer's maintenance team or their integrator own any actuation and its risk assessment.
- Clamp-on current sensors are non-invasive electrically, but they clip around a conductor that normally sits inside the machine's electrical cabinet. In Czechia opening and working in a cabinet requires an electrically qualified person (background knowledge: Act 250/2021 Sb. and Government Regulation 194/2022 Sb.). Practical answer used by US vendors is self-install by the customer's own maintenance electrician.
- AI Act: product quality inspection is not listed in Annex III and is not a safety component unless its failure endangers people, so variant (a) and (b) should be minimal-risk (researcher's reading; the search found no source stating this directly). Variant (c) splits: counting parts and machine states = minimal risk; step verification, per-operator cycle times, 5S or PPE checks that score identifiable workers = plausibly Annex III(4) high-risk from 2 December 2027, plus § 316 and DPIA today.
- Works councils are a German/Austrian co-determination issue; in Czechia the equivalent friction is § 316, trade-union consultation where a union exists, and the DPIA. Selling variant (c) into DACH adds Betriebsrat sign-off (background knowledge).

### Gaps
- No authoritative source found that explicitly classifies stand-alone vision inspection stations or sensor kits under machinery law; confirm with a CE consultant before selling anything with an actuator or a hard-wired stop signal.
- EMC Directive self-declaration route, RED details, and RoHS duties were not confirmed in this session (background knowledge only).
- CRA relief for micro-enterprises (simplified technical documentation) was searched for and not found in extracts.
- AI Act classification of industrial quality inspection: no direct source found. Whether the Omnibus changed the Art. 4 AI-literacy duty was not checked.
- New Product Liability Directive (EU) 2024/2853 (software as product, applies to products placed on the market from December 2026 — background knowledge) was not researched; it matters for liability if an inspection station lets defects escape.
- One source mentioned a 2025 Czech Labour Code amendment possibly affecting monitoring; not verified.

## 2. Bill of materials and prices (inspection station, monitoring kit, smart cameras, startup pricing)

### Takeaway
A bench-grade inspection rig is a €2–5k parts problem, but incumbents already sell self-contained AI smart cameras for roughly £2–8k (Keyence IV3, Cognex In-Sight 2800) and about €9–10k (Overview.ai OV20i), so the founder cannot win on hardware price. In machine monitoring the visible price anchors are about $15k/year for 10 machines (Guidewheel) and about £144/month (FourJaw tier), i.e. roughly €100–150 per machine per month.

### Cited Findings
**Components**
- Basler ace 2 Pro listed at about €1,629 on Basler's shop (2026 blog); another guide budgets a basic Basler ace 2 at £450 in an "entry industrial £100–500" band (different models; attribution uncertain between the two pages) — [detectdefects pricing guide, Mar 2026](https://detectdefectsjekyll.pages.dev/blog/2026/03/20/machine-vision-system-cost-pricing-guide); [Enao Vision blog](https://enaovision.com/blog/real-cost-machine-vision)
- C-mount lens €250–900; precise mount with adjusters €150–400; telecentric lens above €2,500; premium bundle (telecentric lens, dome light, fanless PC with RTX A2000) €18,000–26,000; non-camera items are 70–85% of first-year cost of a station (same two pages, attribution uncertain) — [Enao Vision blog](https://enaovision.com/blog/real-cost-machine-vision); [detectdefects pricing guide](https://detectdefectsjekyll.pages.dev/blog/2026/03/20/machine-vision-system-cost-pricing-guide)
- Single-camera example budget totals £6,550 including mini PC £1,200, vision software £1,500 and integration £2,000 (blog) — [detectdefects pricing guide](https://detectdefectsjekyll.pages.dev/blog/2026/03/20/machine-vision-system-cost-pricing-guide)
- Lighting: $100 to over $500 per one source; $1,000–5,000 per camera per another (conflict; attribution uncertain) — [Syron Optics](https://syronoptics.com/blogs/technical-article/how-much-does-machine-vision-cost); [SmartDev](https://smartdev.com/computer-vision-cost-manufacturing-complete-cv-system-pricing-breakdown/)
- Jetson Orin Nano Super developer kit: $634.99 at Waveshare and ¥59,950 at Switch Science (2026 listings); a March 2025 Reddit post reported €295 incl. VAT — [Waveshare](https://www.waveshare.com/product/ai/boards-kits.htm?mode=list&p=4); [Switch Science](https://www.switch-science.com/collections/jetson?page=2); [Reddit mirror](https://reddit.birdcat.cafe/r/JetsonNano/comments/1j21e0g/orin_nano_availability)
- Luxonis OAK 4 D (48 MP stereo, on-device inference): $1,209 at Waveshare — [Waveshare](https://www.waveshare.com/product/ai.htm?mode=grid&p=4)
- IDS NXT malibu exists as an AI camera on an Ambarella SoC; no price found — [DirectIndustry](https://directindustry.com/prod/ids-imaging-development-systems-gmbh/product-34515-2663058.html)

**Smart cameras**
- Keyence IV3: quote-only officially; third-party estimates about £2,000–4,000; marketplace sensor heads $500–1,500; forum users cite about $1,000 for older IV — [Keyence](https://www.keyence.com/products/vision/vision-sensor/iv3/get-pricing/); [detectdefects comparison, Feb 2026](https://detectdefectsjekyll.pages.dev/blog/2026/02/23/keyence-vs-cognex-machine-vision-comparison); [PLCtalk](https://www.plctalk.net/threads/keyence-iv-series-vision-sensor-vs-cognex-insight-series.110248/)
- Cognex In-Sight 2800: one listing at $4,500; UK estimate £4,000–8,000 for In-Sight 2800/3800; Keyence CV-X AI £5,000–15,000 — [Robotomated](https://robotomated.com/explore/manufacturing/cognex-insight-2800); [detectdefects comparison](https://detectdefectsjekyll.pages.dev/blog/2026/02/23/keyence-vs-cognex-machine-vision-comparison)
- Overview.ai OV20i (all-in-one AI camera with ring light): AU$17,165 incl. GST (AU$15,605 ex GST) at an Australian retailer; official pricing is by quote; newer OV10i is advertised with a "transparent one-time price" (figure not retrieved) — [PB Tech](https://www.pbtech.com/au/product/IPCOVA20001/Overview-AI-OV20i-Smart-Camera-Compact-All-in-One); [Overview launch note](https://www.overview.ai/news/overview-launches-ov10i-ov80i-smart-cameras/)
- Siemens Inspekto S70: no list price; marketed as about one tenth of the cost of traditional machine vision and 30–60 minutes to install; fixed-price offer after application review — [IMVEurope press release](https://www.imveurope.com/press-releases/s70-autonomous-machine-vision-system); [RBTX listing](https://rbtx.de/en-GB/components/vision-sensors/inspekto-s70)
- Vendor estimate: a 6-camera, 3-line AI vision deployment costs $72,000–132,000 in camera hardware alone — [iFactory](https://ifactoryapp.com/ai-vision-camera/ai-vision-cameras-cost-breakdown-total-cost-ownership)

**Machine monitoring**
- Guidewheel (clip-on current sensors): from $15,000/year including the first 10 machines (vendor's own comparison page) — [Guidewheel](https://www.guidewheel.com/compare/machinemetrics-pricing-real-cost-2026)
- MachineMetrics: per-machine-per-month subscription, quote-based; one reseller listing shows from $150/machine/month (unverified); Guidewheel claims its Digital I/O install takes 2–4 hours per machine — [Gartner Peer Insights](https://www.gartner.com/reviews/product/machinemetrics-production-intelligence-platform); [Techjockey](https://www.techjockey.com/ae/detail/machinemetrics); [Guidewheel](https://www.guidewheel.com/compare/machinemetrics-pricing-real-cost-2026)
- FourJaw (UK, aimed at small manufacturers): Pro plan £144/month on Capterra (unit unclear), three tiers, discounts from 10 machines — [Capterra](https://www.capterra.com/p/231138/FourJaw/pricing/); [Capterra UK](https://www.capterra.co.uk/reviews/1013892/fourjaw)
- HARDWARIO CHESTER Current: clamp-on current device, NB-IoT/LTE-M/LoRaWAN, feeds own cloud, API or third-party OEE dashboard; no price in extract — [HARDWARIO](https://www.hardwario.com/products/chester/catalog/current/)

### Inferences
- Parts for a first inspection demo rig (industrial camera €450–1,600, lens €250–900, light €100–500, Jetson-class computer €300–600, stand and enclosure) come to roughly €1.5–4k; a customer-ready station with enclosure, HMI and spares is closer to €5–8k in parts. The founder's price must sit above an Overview/Keyence/Cognex unit only if the service (lighting design, model upkeep, Czech-language support) is the product.
- Jetson pricing appears to have risen sharply from the 2024 launch price of $249 (background knowledge) to the $635 listing above; budget on current distributor prices, not launch prices.
- A solo monitoring kit built on a bought-in device such as CHESTER Current plus own software must price near €100–150 per machine per month to match visible anchors, which means dozens of machines per customer before it pays a salary.

### Gaps
- No verified per-station subscription prices for Maddox AI, 36ZERO Vision, Elementary, Neurala, Instrumental, Landing AI, Zetamotion, Robovision or Relimetrics.
- No prices found for IDS NXT, Zebra, SICK or Basler AI cameras; no Amper or Datanomix pricing; no Czech-vendor monitoring prices.
- Most component figures come from low-authority 2026 blogs; verify on Basler, IDS, Edmund Optics and distributor shops.

## 3. State of the technology (few-shot anomaly detection, VLMs, real-world accuracy, PoC duration)

### Takeaway
Good-parts-only models now work from 1–16 reference images on clean benchmarks, but the harder MVTec AD 2 benchmark shows the same class of methods dropping from over 90% to under 60% on localisation, and general vision-language models score about 75% on industrial anomaly questions. The technology shortens the demo, not the path to a station a quality manager will sign off.

### Cited Findings
- AnomalyDINO (training-free, DINOv2 patch features, no text prompts) reports 96.6% image-level AUROC on MVTec AD from one normal image, versus 93.1% for WinCLIP+; gains hold for 1–16 shots; VisA results are weaker — [arXiv 2405.14529](https://arxiv.org/abs/2405.14529v3); [WACV 2025](https://openaccess.thecvf.com/content/WACV2025/html/Damm_AnomalyDINO_Boosting_Patch-Based_Few-Shot_Anomaly_Detection_with_DINOv2_WACV_2025_paper.html)
- The AnomalyDINO authors note near-saturated benchmark scores "make it seem" the problem is solved — [arXiv 2405.14529](https://arxiv.org/html/2405.14529v3)
- MVTec AD 2 (2025; transparent/overlapping objects, dark-field and backlight, lighting-shift test sets): state-of-the-art methods stay below 60% average AU-PRO; methods above 90% on the original MVTec AD reach at most 58.7% — [arXiv 2503.21622](https://arxiv.org/abs/2503.21622v1); [IJCV version, 2026](https://link.springer.com/article/10.1007/s11263-026-02743-0)
- MMAD benchmark (ICLR 2025; 8,366 samples, 38 product classes, 39,672 questions): GPT-4o averaged 74.9% accuracy; authors call this "far from" industrial requirements — [ICLR 2025 proceedings](https://proceedings.iclr.cc/paper_files/paper/2025/hash/d91ffbe9c126765755ff52d36b715683-Abstract-Conference.html); [arXiv 2410.09453](https://arxiv.org/html/2410.09453v3)
- Typical vendor project phases: feasibility 2–4 weeks, proof of concept about 6 weeks, shadow mode alongside human inspectors 4–8 weeks; other vendors quote 1–3 weeks for a simple PoC and 4–6 weeks concept-to-validation for SMEs (vendor pages; attribution uncertain among them) — [Volvsoft guide](https://www.volvsoft.com/blogs/ai-quality-inspection-for-manufacturers); [Indus Vision](https://indusvision.ai/ai-visual-inspection-small-medium-manufacturers-sme-quality-automation/); [Opsio](https://opsiocloud.com/automated-visual-inspection/)
- Practitioner consensus: spend on lighting first, optics second, sensor third; poor lighting causes more failures than weak models — [Edge AI and Vision Alliance, June 2026](https://www.edge-ai-vision.com/2026/06/top-challenges-when-implementing-ai-inspection-and-how-to-outcome-them/); [Overview.ai](https://www.overview.ai/blog/implement-ai-vision-systems-production/)

### Inferences
- Minimum competence for variant (a) is mostly optics and illumination (dark-field vs. bright-field, diffuse dome, backlight, polarisation), part presentation and takt time, not model training. A software engineer can reach a convincing bench demo on easy parts in 2–4 weeks; reliable judgement on shiny, transparent or textured parts takes months of hands-on trials.
- Frontier VLMs are useful as a labelling aid, for natural-language defect descriptions, and for slow checks (presence, assembly completeness, label text), but latency and about 75% accuracy rule them out as the in-line decision maker; a small local model must decide in-line.

### Gaps
- No independent field data on false-reject rates of deployed few-shot systems, or on achievable cycle times on Jetson-class hardware.
- MMAD figure is for 2024-era models; no 2026 re-evaluation was found.

## 4. Competitors and positioning toward small manufacturers

### Takeaway
Both markets are populated by funded specialists and by hardware incumbents; monitoring has started to consolidate (Amper bought by an ERP vendor in December 2025) and Czechia already has a credible local AI-inspection company (Sanezoo) and a local acoustic-monitoring company (Neuron Soundware) whose trajectory after about ten years looks modest.

### Cited Findings
**AI inspection**
- Sanezoo (Brno, founded about 2019): SmartCube stand-alone inspection station and coating inspection; references Bosch, Škoda Auto, ZF; about CZK 140 million raised in total per one report, near break-even, planning US expansion (round details differ between reports) — [CzechCrunch](https://cc.cz/uci-stroje-vnimat-pro-lidi-neviditelne-brnensky-startup-uz-pomohl-i-ve-skodovce-ted-chce-do-ameriky/); [Forbes.cz](https://forbes.cz/oci-na-neviditelnost-unikatni-produkt-firmy-sanezoo-se-prosazuje-i-v-usa/)
- A Czech AI/machine-vision production-monitoring project raised CZK 50 million (company not identified in extract) — [CzechCrunch](https://cc.cz/s-umelou-inteligenci-a-strojovym-videnim-hlida-vyrobu-cesky-projekt-na-to-ziskal-50-milionu/)
- 36ZERO Vision (Munich): €3.6M round in July 2025; investors include Vanagon Ventures, Bayern Kapital, Join Capital — [Tech.eu](https://tech.eu/2025/07/15/36zero-vision-raises-eur36m-to-expand-ai-visual-inspection-platform/); [Munich Startup](https://www.munich-startup.de/en/news/36zero-vision-secures-e3-6-million)
- Maddox AI (Tübingen, founded 2018): cloud annotation and training platform; investors include Atlantic Labs and Susa Ventures; amounts not in extract — [CB Insights](https://www.cbinsights.com/company/maddox-ai)
- Inspekto: sold by its VC owner D11Z Ventures to Siemens in February 2024 for an undisclosed sum; customers included Bosch, BMW, Bentley, Toyota; one database lists it as having "ceased to operate" while trade press says it continued under Siemens — [Drives and Controls](https://m.drivesncontrols.com/news/fullstory.php/aid/7593/Siemens_buys_visual_inspection_start-up_offering__91instant_QA_92.html); [IMVEurope](https://www.imveurope.com/article/siemens-purchases-ai-machine-vision-firm-inspekto); [Startupim](https://startupim.com/company/inspekto)
- Overview.ai publishes a "why choose us over Siemens Inspekto" page, i.e. all-in-one AI cameras now compete on ease of setup — [Overview.ai](https://www.overview.ai/compare/overview-vs-siemens-inspekto/)
- Landing AI (LandingLens), Neurala and Instrumental are still listed as active products in 2026 buyer guides; no failure or acquisition news surfaced — [SourceForge](https://www.sourceforge.net/software/product/LandingLens/alternatives); [Toolradar guide, Jan 2026](https://toolradar.com/guides/best-ai-visual-inspection-tools)

**Machine monitoring**
- Guidewheel: $31M Series B in August 2024; about $52M total — [SiliconANGLE](https://siliconangle.com/?p=667039); [CB Insights](https://www.cbinsights.com/company/guidewheel/financials)
- MachineMetrics: $20M Series B June 2021; about $34M total — [CB Insights](https://www.cbinsights.com/company/machinemetrics/financials)
- Datanomix: $12M Series B May 2023; totals conflict ($21M vs $9M) — [CB Insights compare page](https://www.cbinsights.com/compare/fourjaw-vs-lets-all-do-good); [Caplight](https://www.caplight.com/company/datanomix)
- Amper was acquired by ECI Software Solutions in December 2025 (from an aggregator extract; not confirmed in trade press) — [CB Insights compare page](https://www.cbinsights.com/compare/amper-technologies-vs-machinemetrics)
- FourJaw (Sheffield): £1M in 2022 "for small manufacturers"; a further $310K listed April 2025 — [Tech.eu](https://tech.eu/2022/04/25/sheffeilds-fourjaw-unlocks-ps1-million-to-help-develop-next-level-data-analytics-tools-for-small-manufacturers/); [CB Insights compare page](https://www.cbinsights.com/compare/fourjaw-vs-lets-all-do-good)
- Neuron Soundware (Prague): acoustic predictive maintenance (nEdge hardware, nGuard software); €7M from the European Innovation Council (undated in extract); €120,000 debt financing from Repsol Foundation reported October 2025; self-reported customers Škoda Auto, AGC, Siemens, E.ON, ABB, Volkswagen, Bosch; listed active May 2026 — [EIT Manufacturing](https://eitmanufacturing.eu/news-events/news/revolutionising-machine-monitoring-and-maintenance-neuron-soundware-raises-7-million-euros); [AI World story](https://aiworld.eu/story/neuron-soundware-uses-ai-powered-audio-analysis-for-industrial-predictive-maintenance); [StartupHub](https://www.startuphub.ai/startups/neuron-soundware)
- Sensor makers sell their own retrofit OEE kits (Balluff CMTK, ifm) and Siemens sells Opcenter Foundation OEE in Czech — [Balluff](https://innovate.balluff.com/cmtk_oee); [Siemens CZ](https://www.siemens.com/cs-cz/products/opcenter/execution/foundation-oee/)
- Other retrofit OEE vendors targeting legacy machines: TeepTrak, Fabrico, WatchMen (vibration/acoustic) — [TeepTrak](https://teeptrak.com/en/?p=96991); [Fabrico review, 2026](https://www.fabrico.io/blog/best-oee-software-legacy-equipment-retrofit-2026-review); [Capterra](https://www.capterra.com/p/10038814/WatchMen/)

**Camera process monitoring**
- Invisible AI: $15M raised in 2022; sells its own camera unit (Intel RealSense depth camera plus NVIDIA compute and storage); decomposes cycles into work/walk/wait/pick; pricing not public; customers are automotive OEMs; now trialling "Studio" (upload shop-floor video, AI drafts standard work) — [TechCrunch 2022](https://techcrunch.com/2022/09/28/invisible-ai-raises-15m-to-stick-worker-monitoring-cameras-in-factories); [TechCrunch 2020](https://techcrunch.com/2020/05/06/invisible-ai-uses-computer-vision-to-help-but-hopefully-not-nag-assembly-line-workers/); [Edge AI Vision 2025 slides](https://www.edge-ai-vision.com/wp-content/uploads/2025/09/T1W07_Danziger_InvisibleAI_2025.pdf)
- Spot AI sells per-camera-feed subscriptions on existing cameras with no mandatory hardware (competitor's own comparison page) — [Spot AI](https://www.spot.ai/compare/vs/spot-ai-vs-invisible-ai)
- Roboflow markets production-line monitoring on generic cameras, i.e. the tooling for in-house builds is itself a product — [Roboflow](https://roboflow.com/ai-cameras/production-line-monitoring-cameras)

### Inferences
- Funded competitors mostly chase automotive tier-1s and OEM plants; references in every extract are large firms. Shops with 10–250 employees are served mainly by distributor-sold smart cameras (Keyence/Cognex direct sales) and by local integrators, which is where a solo operator would be compared.
- Neuron Soundware taking a €120k loan roughly nine years after founding, after a €7M EIC round, suggests acoustic predictive maintenance has not scaled easily even with marquee Czech customers (inference from two data points).
- What stops a newcomer in (b) is not technology but price transparency and consolidation into ERP/MES suites; in (a) it is application know-how and the customer's trust in a one-person supplier for a quality gate; in (c) it is legal friction plus the ease of in-house builds.

### Gaps
- Nothing retrieved on Visitech (Slovakia), Robovision, Relimetrics, Zetamotion, Elementary, Drishti, Deltia, Retrocausal, Intenseye or Protex AI (funding, pricing, customer counts, pivots).
- Background knowledge, unverified here: Landing AI shifted its emphasis in 2025 toward document-extraction products; treat as a lead, not a finding.
- No customer counts found for any vendor; no Czech OEE/MES vendor list or prices found.

## 5. Demand among small manufacturers (triggers, budgets, sales cycle, pilot purgatory)

### Takeaway
Hard demand data for 10–250-employee shops was not found; what exists is indirect: a visible Czech industry of manual sorting firms serving automotive suppliers, EU manufacturing AI adoption of about 17% in 2024, and repeated survey evidence that most industrial AI pilots do not reach scale.

### Cited Findings
- Czech third-party sorting/rework firms for automotive suppliers exist and recruit continuously: 100% REWORK (visual inspection, sorting, measuring, minor repairs, plants across Czechia), Enter-Prise Sorting s.r.o., Automotive Quality Company; advertised inspector wages 150–180 CZK/hour (2026 job ads) — [jenprace.cz ad](https://www.jenprace.cz/nabidka/3ggqg9/kontrolor-ka-kvality-novy-jicin-nastup-mozny-ihned-od-150-kc-hod-2930); [Enter-Prise Sorting profile](https://www.pracomat.cz/firma/03680134-enter-prise-sorting-s-r-o); [shift-lead ad](https://www.jenprace.cz/nabidka/oohnlf/pridejte-se-k-nam-jako-vedouci-smeny-hranice-na-morave)
- 17.3% of EU manufacturing enterprises used AI in 2024 versus 13.5% across all sectors; EU all-sector figure about 20% in 2025 — [Eurostat Statistics Explained](https://ec.europa.eu/eurostat/statistics-explained/index.php/Use_of_artificial_intelligence_in_enterprises); [CNB article on AI in European firms](https://www.cnb.cz/en/monetary-policy/monetary-policy-reports/boxes-and-articles/AI-in-European-firms-where-is-it-used-and-how-is-it-changing-business-processes)
- Czechia: an aggregator gives 17.6% of firms with 10+ staff using AI in 2025 (below EU average), while the EIB Investment Survey headline says Czech firms outpace EU peers in AI adoption (different measures; neither read in full) — [Inzonex](https://inzonex.co.uk/ai/data/eu-enterprises-using-ai); [EIB press release 2025-499](https://www.eib.org/en/press/all/2025-499-czech-firms-outpace-eu-peers-in-ai-adoption-and-innovation-eib-survey-finds)
- Deloitte's 2025 Smart Manufacturing survey: only 29% of manufacturers have AI/ML deployed at scale across facilities (secondary citation; attribution uncertain) — [Industry Today](https://industrytoday.com/?p=59536); [TechRadar](https://techradar.com/pro/ai-hype-is-real-in-manufacturing-successful-adoption-journeys-are-scarce)
- McKinsey/WEF Lighthouse work: more than 70% of companies stuck in "pilot purgatory" on advanced manufacturing technology (older, via a glossary page) — [UnifyApps](https://www.unifyapps.com/resources/glossary/pilot-purgatory)
- Omdia survey (reported November 2025): only 9% of firms saw more than half of their AI proofs of concept accepted into production — [The Register](https://www.theregister.com/2025/11/13/survey_ai_projects_failure_no_prepare/)
- Typical paid PoC prices quoted by vendors/consultancies (USD): $12–20k over about six weeks; $15–30k for a 1–2 week feasibility-plus-PoC on product samples; $15–40k basic; $25–75k multi-defect with limited integration; about $50k for a full single station; one SME-oriented source recommends a 30-day paid pilot measured against manual inspection (attribution uncertain among pages) — [Abbacus](https://www.abbacustechnologies.com/manufacturing-defect-detection-ai-budget-implementation-schedule-and-quality-gains/); [Volvsoft](https://www.volvsoft.com/blogs/ai-quality-inspection-for-manufacturers); [iFactory SME page](https://ifactoryapp.com/ai-vision-camera/ai-vision-smes-enterprise-inspection-accessible-prices); [IdeasGPT](https://www.ideasgpt.io/ideas/ai-visual-quality-inspection-for-small-factories)

### Inferences
- Sorting wages of 150–180 CZK/hour imply a billed rate somewhat above that; a supplier under a containment action running two sorters over two shifts spends on the order of CZK 100–200k per month. That is the clearest budget an inspection station can be priced against, and it has a named owner (the quality manager) and a deadline (the customer complaint). This arithmetic is the researcher's, not sourced.
- Monitoring (b) lacks an equivalent forcing event; purchase is discretionary and competes with doing nothing or a spreadsheet.
- Pilot statistics imply a paid pilot is weak evidence of a business; conversion to a second station or site is the meaningful signal.

### Gaps
- No data on who signs, sales-cycle length or budgets for small Czech/DACH manufacturers; no B2B hourly rates for sorting firms (only wages); no Czech small-manufacturer AI/monitoring adoption figures by size class (Eurostat tables isoc_eb_ai / isoc_eb_ain2 would hold them).
- Czech/EU subsidy programmes for SME digitalisation (a common purchase trigger) were not researched.
- No evidence found for or against automotive customers formally requiring automated inspection from small suppliers.

## 6. How a solo operator would run a first test (pilot design, partnerships, reject/PLC integration)

### Takeaway
The lowest-dependency first test is a signal-only inspection or counting setup on one part number, sold as a fixed-price paid PoC in the low thousands of euros and run in shadow mode beside the existing manual check; the moment the system drives a reject mechanism or stops a machine, an integrator and machinery assessment re-enter.

### Cited Findings
- Recommended deployment practice is to run the vision system in parallel with existing inspection before go-live and to track false rejects as a KPI alongside escapes — [Overview.ai](https://www.overview.ai/blog/implement-ai-vision-systems-production/); [Edge AI and Vision Alliance](https://www.edge-ai-vision.com/2026/06/top-challenges-when-implementing-ai-inspection-and-how-to-outcome-them/)
- When real defects are rare, photograph deliberately created defects on scrap parts; evaluate on a held-out, time-split image set (vendor guidance; attribution uncertain) — [Volvsoft](https://www.volvsoft.com/blogs/ai-quality-inspection-for-manufacturers); [Vocso](https://www.vocso.com/blog/ai-visual-inspection-guide/)
- Inspekto's commercial pattern was a fixed-price offer after an application review of the customer's part — [RBTX listing](https://rbtx.de/en-GB/components/vision-sensors/inspekto-s70)
- Whoever integrates an assembly into a line takes CE responsibility for it; an end user can also assume the manufacturer role for its own line — [GT Engineering](https://www.gt-engineering.it/en/insights/machinery-directive/datoredilavoro-marcatura-ce/)
- Clamp-on current monitoring is marketed as needing no PLC integration, rewiring or production stop — [TeepTrak](https://teeptrak.com/en/?p=96991); [HARDWARIO](https://www.hardwario.com/products/chester/catalog/current/)
- Sorting firms already hold the customer relationship at the moment of pain (containment for automotive suppliers) — [Enter-Prise Sorting profile](https://www.pracomat.cz/firma/03680134-enter-prise-sorting-s-r-o)

### Inferences
**Suggested test sequence (researcher's proposal)**
- Week 0–1: buy a bench rig (about €2–4k). Week 1–3: free "image day" at two or three shops on parts that are currently 100% manually sorted; return a written feasibility result with detection and false-reject numbers. Week 3–8: one paid PoC at €2–5k (well under the $12–30k vendor anchors, deliberately) in shadow mode with a stack light or screen only. Hard demand signal = customer pays for month two or asks for a second part number.
- A sorting firm is a plausible channel or first customer: it bills by the hour, struggles to hire at 150–180 CZK/hour, and could deploy a portable station at its own tables, which keeps the station off the production line entirely (no line integration, no machinery question). It is also a possible opponent, since automation cuts its billable hours. Untested.
- Integration ladder, in order of rising dependency: (1) screen/stack light, operator removes the part; (2) 24 V digital output or OPC UA/MQTT message the customer's PLC programmer consumes; (3) founder-supplied ejector. Stop at (2) to stay solo.

**Per-variant scorecard against the seven criteria (researcher's judgement from the evidence above)**
- (a) Inspection station. 1) Solo-legal: yes while signal-only; self-declared CE; liability is contractual for escapes, so cap it and never be the sole release gate at first. 2) Proof: 4–8 weeks, €3–6k outlay; competence in lighting takes 3–6 months of trials. 3) Leverage: roughly half software (data pipeline, training, evaluation, UI, fleet updates — agent-friendly) and half physical (lighting, fixtures, site visits). 4) Demand: sharpest trigger of the three (complaints, containment, sorter labour). 5) Competition: heavy, but incumbents sell boxes, not outcomes for small shops. 6) Durable asset: per-part defect datasets, lighting recipes, quality-manager relationships; this is a product-plus-service business, not pure SaaS. 7) Failure: see section 7.
- (b) Machine monitoring. 1) Solo-legal: yes; cabinet access needs the customer's electrician; radio adds RED. 2) Proof: 2–4 weeks, under €1–2k using bought-in sensors. 3) Leverage: about 80–90% software. 4) Demand: discretionary, no forcing event. 5) Competition: commoditised, transparent pricing, consolidation. 6) Durable asset: weak; this is SaaS with a sensor, and switching cost is low. 7) Failure: dashboards nobody opens, churn after novelty, low revenue per machine.
- (c) Camera process monitoring. 1) Solo-legal: yes for object/machine-only views; worker-facing use triggers § 316, DPIA and likely AI Act high-risk from December 2027. 2) Proof: 1–3 weeks using a commodity IP camera and a general vision model. 3) Leverage: about 90% software, best fit for agent tooling. 4) Demand: unclear for small shops; references are OEM plants. 5) Competition: Invisible AI, Spot AI, Roboflow-enabled in-house builds. 6) Durable asset: little unless tied to a specific process niche. 7) Failure: privacy objections, in-house replication, unclear ROI owner.

### Gaps
- No documented case of a solo operator or micro-firm running this playbook was found; the sequence above is untested reasoning.
- No evidence on whether Czech sorting firms have adopted or resisted automated inspection.
- Contract terms that limit liability for escapes under Czech law were not researched.

## 7. Failure modes

### Takeaway
Vision projects fail on physics and acceptance rather than on models: lighting, part presentation, false rejects that make operators switch the system off, and every new variant breaking the model. For monitoring and process cameras the failure is commercial: low perceived value, commoditisation and in-house replication.

### Cited Findings
- Poor lighting causes more project failures than weak AI; no model compensates for inconsistent illumination; waiting weeks for the right lighting hardware stalls projects — [Edge AI and Vision Alliance, June 2026](https://www.edge-ai-vision.com/2026/06/top-challenges-when-implementing-ai-inspection-and-how-to-outcome-them/); [Overview.ai](https://www.overview.ai/blog/implement-ai-vision-systems-production/)
- False rejects trace to inconsistent lighting, part-position variation, or thresholds tighter than normal part variation — [Keyence troubleshooting guide](https://www.keyence.com/blog/machine-vision-troubleshooting-guide.jsp)
- Repeatedly loosening tolerances to stop false rejects is a temporary fix that makes the system less reliable — [Adams Corp](https://adamscorp.com/our-blog/why-machine-vision-systems-give-false-readings)
- New colours, surfaces or profiles can each break a model trained on older data; model drift is commonly overlooked; some models "completely collapsed" because of training data rather than algorithm (vendor blog) — [Enao Vision](https://enaovision.com/blog/ai-visual-inspection-fails-easy-fixes)
- The false positive ("pseudo-defect") is described by one vendor executive as the most common reason AI vision fails to gain shop-floor acceptance; projects stall at acceptance because expectations were never aligned, not because of resolution or frame rate — [Automotive Manufacturing Solutions](https://www.automotivemanufacturingsolutions.com/smart-factory/ai-vision-finds-its-footing-on-the-factory-floor/2644253); [MindVision](https://www.mindvision.ltd/sys-nd/330.html)
- Benchmarks confirm the robustness problem: under harder materials and lighting shift, leading anomaly detectors fall below 60% AU-PRO — [arXiv 2503.21622](https://arxiv.org/abs/2503.21622v1)
- Commoditisation by camera vendors is already visible: Keyence IV3 and Cognex In-Sight 2800 ship built-in AI at a few thousand pounds; Siemens absorbed Inspekto — [detectdefects comparison](https://detectdefectsjekyll.pages.dev/blog/2026/02/23/keyence-vs-cognex-machine-vision-comparison); [IMVEurope](https://www.imveurope.com/article/siemens-purchases-ai-machine-vision-firm-inspekto)
- Independent monitoring vendors are being folded into larger suites (Amper into ECI, December 2025; unconfirmed aggregator extract) — [CB Insights compare page](https://www.cbinsights.com/compare/amper-technologies-vs-machinemetrics)
- Only 9% of firms saw most AI proofs of concept reach production (Omdia) — [The Register](https://www.theregister.com/2025/11/13/survey_ai_projects_failure_no_prepare/)

### Inferences
- For a solo operator the specific risk is support load: every installed station is a site that can call when a lamp ages, a fixture is knocked, or a new part colour arrives. Remote re-training pipelines and a spare-parts kit left on site are the mitigation; installed base beyond about 10–20 stations within driving distance probably caps a one-person business.
- In-house replication risk is highest for (c) and (b), where a maintenance engineer with a general AI model and an IP camera or a €30 current clamp can reproduce the core; it is lowest for (a) on difficult surfaces, where lighting know-how is the barrier.
- The durable advantage, where one exists, is physical-application knowledge and local trust, which is the opposite of what the founder's software skills supply on day one.

### Gaps
- No quantified field data on maintenance visits per station per year, churn rates of monitoring subscriptions, or documented shutdowns among the named startups.
- Figures such as "60% of stalled projects" and "payback in 4.2 months" appeared in vendor pages without traceable sources and were excluded.
