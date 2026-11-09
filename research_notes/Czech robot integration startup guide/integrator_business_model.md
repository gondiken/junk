# Business model of a small robot system integrator (EU, late 2026)

*Method note for the report writer: page fetching was blocked in this session (hosts outside the network allowlist), and the shared web-search budget ran out before the last batch of queries. Every finding below therefore comes from search-result extracts, not from a full read of the page. Quotes are as the search tool returned them. Treat figures as leads to verify, especially prices, and check legal points against EUR-Lex. Most price data found is in USD from US resellers; this is flagged per item. No Czech-specific data was collected.*

## 1. Which application types are the easiest entry points, which can be productized, and what do kits cost?

### Takeaway
Cobot palletizing and CNC machine tending are the two applications that vendors have already turned into kits, so they are the most accessible first projects: the application hardware kit costs roughly USD 15k-65k on top of the robot, and a complete cobot cell lands at roughly USD 40k-160k. Welding is sold mostly as vendor-built CE-marked cells, which leaves less room for a new integrator; screwdriving and vision inspection have no comparable kit pricing in the sources found.

### Cited Findings
**Palletizing (kits and complete units)**
- Robotiq PE20 palletizing solution for the UR20 with vacuum gripper: USD 57,712.50 at a US reseller, excluding the cobot (US price, 2026 listing) — [Automation Distribution](https://automationdistribution.com/robotiq-palletizing-solution-pe-series-for-ur20-with-vacuum-gripper)
- Vention "UR Medium Payload Fixed Cobot Palletizer [Hardware Kit, No Software]": about USD 65,147; the heavy-payload version about USD 78,229 (US list prices; whether the robot arm is included was not verified) — [Vention design 258250](https://vention.io/designs/258250), [Vention design 264624](https://vention.io/designs/264624)
- Vention vertical palletizer frames without robot: about USD 14,935 (ball-screw lift) and about USD 12,594 (UR10e version with OnRobot grippers, controller included) — [Vention ball-screw palletizer](https://vention.io/designs/vertical-cobot-palletizer-ballscrew-84577), [Vention UR10e/OnRobot palletizer](https://vention.io/designs/vertical-palletizer-for-universal-robots-ur10e-with-onrobot-grippers-66940)
- OnRobot's palletizing offer is a set of parts (Lift100 seventh axis, grippers, pallet station); no published price found — [Automation Distribution, OnRobot palletizing](https://automationdistribution.com/onrobot-collaborative-automation-tools/palletizing-slip-sheet-handling/)
- EUR reference points from European machine marketplaces: an Impuls Packaging 20 kg cobot palletizer listed at EUR 59,000 plus VAT on one mirror and EUR 49,000 net on another mirror of the same listing (conflicting figures, same listing ID); an Inno-Way cobot palletizer at EUR 34,999 plus VAT — [Machineseeker listing](https://www.machineseeker.ie/impuls+packaging-cobot+20kg+%2F+1200/i-21555163), [Maschinensucher listing](https://www.maschinensucher.de/impuls+packaging-cobot+20kg+%2F+1200+d/i-21555163), [Werktuigen listing](https://www.werktuigen.com/inno-way-m/wt-193-11671)
- A vendor guide puts a cobot palletizer at roughly USD 60,000-160,000 and an industrial palletizing system at USD 175,000-500,000+ (US, vendor source, 2026) — [Standard Bots palletizing cost guide](https://standardbots.com/guides/robotic-palletizing-cost)
- Vendors sell standardized cobot palletizers with the stated aim of "minimal modifications to your production environment" — [Wired Workers Plug & Produce](https://wiredworkers.io/services/plug-produce-solutions)

**CNC machine tending (kits and complete cells)**
- Robotiq Machine Tending Solution: USD 14,989 at a US reseller; Robotiq Machine Tending Kit: USD 20,395 (both exclude the robot; US prices) — [Automation Distribution, Machine Tending Solution](https://automationdistribution.com/robotiq-machine-tending-solution/), [Automation Distribution, Machine Tending Kit](https://automationdistribution.com/robotiq-machine-tending-kit)
- Robotiq MT-100 cell including UR cobot, Robotiq gripper and WAGO control package: USD 74,399 (US price) — [Automation Distribution, MT-100](https://automationdistribution.com/machine-tending-cell-mt-100-ur-cobot-robotiq-gripper-wago-control-package)
- Vention machine tending kit (robot pedestal plus conveyor, for UR): about USD 15,700-16,000, robot excluded — [Vention design 74614](https://vention.io/designs/robot-pedestal-conveyor-system-with-versabuilt-communication-kit-for-machine-tending-74614), [Vention design 71125](https://vention.io/de/designs/machine-tending-kit-pedestal-conveyor-71125)
- Vention's CNC machine tending kit is sold through the Universal Robots marketplace as a plug-and-play option for UR cobots — [UR Marketplace](https://www.universal-robots.com/marketplace/products/01tP40000071NjcIAE)
- Standard Bots advertises machine tending robots "starting at $37,000" (US) — [Standard Bots](https://standardbots.com/machine-tending)
- Universal Robots' own guidance: the more tightly the cobot is connected to the machine, the more complex the process is to automate — [UR "10 steps" e-book](https://media.vanmeterinc.com/image/upload/v1588948929/marketing/blog/2020/UR_USA_Ebook_10steps_Cobots_final_B.pdf)
- Omron calls machine tending one of the top cobot applications and claims its cobots can be set up to operate multiple machines within a few hours (vendor claim) — [Omron blog](https://automation.omron.com/en/ca/blog/collaborative-robots-boost-productivity)

**Welding**
- Welding is sold largely as vendor-built turnkey cells: ABB markets a GoFa "Plug-&-Play" cobot welding cell with CE certification that it says saves development time and cost; Fronius sells CWC-S, CWC-D and CWC-mobile cobot welding cells; Yaskawa's Weld4Me cell bundles cobot, controller, welding table and glare shield. No prices published in these results — [ABB GoFa welding cell](https://new.abb.com/at/ueber-uns/geschaeftsfelder/robotik-und-fertigungsautomation/robotics/gofa-schweißzelle), [Fronius cobot welding](https://www.fronius.com/de/schweisstechnik/produkt-informationen/welding-automation/cobot-welding), [Produktion.de user report](https://www.produktion.de/technik/so-erleichtert-der-cobot-den-einstieg-in-die-robotik/1743126)
- Only EUR welding price found: a German dealer lists a conventional robot welding cell (ABB IRB 2400L) at EUR 103,800 basic configuration without safety enclosure; this is an industrial robot, not a cobot — [Maschinensucher dealer page](https://www.maschinensucher.de/Haendler/124429/aut-tech-koeln)
- A US lean integrator, Vectis Automation, was founded in 2019 by a small team of engineers with traditional robotic welding experience and built a business on cobot welding — [Automation World, lean integrators](https://automationworld.com/factory/robotics/article/21195925/cobots-and-the-rise-of-lean-integrators)

**Screwdriving, vision inspection, general cobot costs**
- Omron positions screwdriving as part of "complex assembly" — [Omron blog](https://automation.omron.com/en/ca/blog/collaborative-robots-boost-productivity)
- Cobot arm prices: roughly USD 25,000-60,000 before tooling and integration; accessories (gripper, vision, integration) add USD 5,000-30,000 (US, vendor guide, 2026) — [Standard Bots cobot price guide](https://standardbots.com/guides/collaborative-robot-prices-the-ultimate-guide)
- A Robotiq 2F-85 gripper is listed around USD 9,271 (US, 2026) — [Grabarobot price guide](https://grabarobot.com/blog/robotiq-palletizing-price-guide-2026/)
- The UR+ ecosystem is described as components, software and application kits validated and certified to be mechanically, electrically and digitally compatible with UR cobots; this is what lets small integrators work "menu driven" — [The Robot Report, lean integrators](https://www.therobotreport.com/how-cobots-lean-integrators-automation-smes/), [Automation World, lean integrators](https://automationworld.com/factory/robotics/article/21195925/cobots-and-the-rise-of-lean-integrators)
- KPI GmbH, a certified UR integrator in Germany, markets standardized, modular robot systems ("V & Q line") optimized for UR lightweight robots: an example of a European integrator productizing — [Plant Automation Technology profile](https://plantautomation-technology.com/suppliers/kpi-gmbh)

### Inferences
- Palletizing is the most productizable application: the product (boxes) is regular, the kits include the lift axis, pallet sensors and pattern software, and the same design repeats across customers. Machine tending is second, but each job still needs part-specific gripper fingers, part presentation (trays, drawers, conveyors) and a signal interface to the particular CNC control, so it standardizes less well.
- Kit pricing implies the kit vendor captures much of the engineering value. An integrator reselling a Robotiq or Vention kit is left with resale margin plus installation, safety validation, training and support, which is a thin base unless volume is high or the integrator adds something of its own.
- For a founder strong in software and weak in hardware, a kit-based palletizer or tending cell limits mechanical and electrical design risk on the first projects. Vision inspection is closer to the founder's skills but no source here gives kit prices or evidence that it is an easy entry; it tends to be bespoke per part.
- Welding entry is harder for a newcomer because the torch, power-source and process know-how sit with welding vendors (Fronius, Lorch, ABB, Yaskawa) who already ship CE-marked cells.

### Gaps
- No EUR list prices for Robotiq, OnRobot or Vention kits; European distributor quotes are needed. USD prices above are US reseller listings.
- No market-share ranking of cobot applications (IFR or analyst) was found, and no independent difficulty ranking.
- No price data for screwdriving kits, vision inspection systems or cobot welding packages in the EU (the planned search on Lorch/Demmeler welding packages could not be run).
- Current EU street prices for cobot arms (UR, FANUC CRX, ABB GoFa, and lower-cost Chinese brands) were not found.

## 2. Project sizes, integration-to-hardware ratio, margins, payment terms, duration and payback

### Takeaway
Rules of thumb put the total system at about 3x the robot price for a simple cell and 4-5x for a typical industrial robot system, with a standard cobot application installed for roughly USD 50k-100k. Payment is normally milestone-based (about 30-35% down, a large payment at delivery or FAT, 10% at commissioning, up to 10% retention), and cobot payback is quoted at 6-18 months, though that figure comes from vendors. No reliable public gross-margin benchmark for robot integrators was found.

### Cited Findings
**Ratio of system cost to robot cost**
- Automation World: the robot "will be about a third of the cost of the total system"; multiply robot cost by the number of robots and triple it for a basic drop-in operator replacement (US) — [Automation World, How to Determine Robot ROI](https://www.automationworld.com/factory/robotics/blog/13315044/how-to-determine-robot-roi)
- A Fraunhofer IPA analysis of its past projects reports total system cost at roughly 4-5 times the robot price for typical industrial robot systems, and says a significant part of the cost comes from design and integration (Germany; paper date not confirmed) — [Fraunhofer Publica](https://publica-rest.fraunhofer.de/server/api/core/bitstreams/e67034b7-332b-4d87-aa2e-2bf26b3d84c7/content)
- Industrial Robot journal (2010): various studies conclude the robot is around 25% of total implementation cost — [Emerald Insight](https://www.emeraldinsight.com/insight/content/doi/10.1108/ir.2010.04937aaa.002/full/html)
- For a first cobot cell, integration and engineering typically run 50-100% of hardware cost (vendor guide) — [EVS cobot ROI guide](https://www.evsint.com/cobot-roi-calculator-sme-manufacturing/)
- Another breakdown puts the arm at 40-50% of total, with tooling, sensors and integration together matching or exceeding the arm price; complete cobot systems land at about USD 40,000-100,000 — [MFG Robots](https://www.mfgrobots.com/Article/equipment/robot/49977.html)

**Project sizes**
- Total installed cost of a standard cobot application including gripper, integration, programming and training: typically USD 50,000-100,000 (vendor estimate) — [EVS cobot ROI guide](https://www.evsint.com/cobot-roi-calculator-sme-manufacturing/)
- Cobot palletizer USD 60,000-160,000; industrial palletizing system USD 175,000-500,000+ (US vendor guide, 2026) — [Standard Bots](https://standardbots.com/guides/robotic-palletizing-cost)
- EUR reference: complete cobot palletizers offered at about EUR 35,000-59,000 net on European marketplaces (see section 1) — [Werktuigen](https://www.werktuigen.com/inno-way-m/wt-193-11671), [Machineseeker](https://www.machineseeker.ie/impuls+packaging-cobot+20kg+%2F+1200/i-21555163)

**Margins and rates (weak evidence)**
- A low-authority source cites 15-30% hardware resale margins and USD 100-125/hour programming rates for automation contractors (US; unverified) — [Industrial Monitor Direct](https://industrialmonitordirect.com/blogs/knowledgebase/plc-programming-cost-estimation-for-water-treatment-projects)
- In the adjacent AV/commercial integration industry (not industrial robotics), 57.3% of surveyed integrators reported hardware margins of 20% or less and 8.8% under 5%; NSCA describes hardware margin as slim and shrinking (US, about 2019-2023) — [Commercial Integrator, Jan 2023](https://www.nxtbook.com/emerald/commercialintegrator/january_2023/index.php?startid=26), [NSCA](https://www.nsca.org/nsca-news/whats-the-right-hardware-margin-for-integrators/)
- Markup is not margin: a 20% markup yields only about 16.7% gross margin; a 25% markup is needed for a true 20% margin — [CE Pro](https://www.cepro.com/cep/big_industry_problem_miscalculating_gross_margin_vs_markup)
- CSIA runs financial and operational benchmarking for control system integrators (one study covered 26 integrators over four years; advice covers billing rates, utilization and cash flow), but the numbers are members-only and none surfaced publicly — [Control Engineering](https://www.controleng.com/articles/great-engineering-includes-more-than-engineering/), [CSIA member brochure](https://controlsys.org/wp-content/uploads/2026/07/Why-Leading-System-Integrators-Belong-at-CSIA.pdf)
- A sale prospectus for a small southern-German special-machine builder projects EBIT margin rising from 16% to 41% over 2024-2029; this is a seller's forecast, not a benchmark — [nexxt-change exposé](https://nexxt-change.org/cae/servlet/pdfs/67650/expose.pdf)

**Payment terms**
- Typical turnkey structure cited: 30% at contract signing, 50% at equipment delivery, 10% on successful commissioning, 10% retention released after 30 days of stable operation — [Industrial Monitor Direct, turnkey projects](https://industrialmonitordirect.com/blogs/knowledgebase/turnkey-automation-projects-contract-specifications-and-scope-management)
- A US integrator (Lozier+CASI) invoices a 35% down payment payable on receipt, then offers the customer a Factory Acceptance Test at the integrator's site or a FAT video — [CASI customer journey](https://www.casiusa.com/about/the-customer-sales-journey/)
- Solutions360 (AV integration, adjacent industry) notes that the lack of deposits is a surprising and damaging habit among integrators — [Solutions360](https://solutions360.com/cash-flow-management-for-integrators/)

**Payback**
- Cobot payback "typically" 8-18 months depending on application, utilization and displaced labor cost (vendor guide) — [EVS cobot ROI guide](https://www.evsint.com/cobot-roi-calculator-sme-manufacturing/)
- A compiled benchmark gives 6-18 months for cobots and 12-36 months for six-axis industrial arms — [dev.to ROI article](https://dev.to/damon_bb9e4bba1285afe2fcd/how-fast-does-a-robot-pay-for-itself-real-roi-numbers-for-2026-3kam)
- A sales calculator advertises 6-12 months (vendor tool) — [iFactory](https://ifactoryapp.com/greenfield-consulting/cobot-roi-calculator-greenfield-plant-payback)
- An SME guide recommends showing customers a conservative case at 70% of projected benefits alongside the base case — [EVS cobot ROI guide](https://www.evsint.com/cobot-roi-calculator-sme-manufacturing/)
- Across eight European countries (2,174 professionals), 29% named initial investment as the primary obstacle to automation — [Industrial News](https://industrialnews.co.uk/european-workers-embrace-automation-as-cobot-optimism-rises/)
- Polish trade press (2025) reports a trend toward fast, scalable deployments with relatively short payback, with SMEs that had postponed decisions returning to robotisation talks — [Plastech](https://www.plastech.biz/en/news/Collaborative-robots-and-AI-in-Polish-industry-in-2025-21673)

**Market context**
- EU operational robot stock passed a record 700,000 units; EU installations fell about 11% in 2025 to roughly 60,500 units; Germany installed about 24,800 (41% of the EU); Spain about 4,300; automotive remained the largest customer (IFR World Robotics 2026) — [IFR press release, Sept 2026](https://ifr.org/downloads/press_docs/EN-2026-SEP-14-IFR_Press_Release_WR-EU-27.pdf), [Computer & Automation](https://www.industrial-production.de/industrieroboter/world-robotics-2026-report-41-prozent-aller-industrie-roboter-in-der-eu-deutschland-installiert-971355.htm)
- Cobots were close to 12% of all industrial robots installed globally in 2024, up from about 10.5% in 2023 (global, not EU; attributed to IFR data in a secondary article, exact page not verified) — [RoboticsTomorrow](https://www.roboticstomorrow.com/content.php?post=25933)

### Inferences
- Combining the 3x rule with the kit prices in section 1: a cobot of roughly 30-50k plus a 15-60k kit plus installation gives a first-project size in the range of roughly EUR 60k-150k. The integrator's own value added (engineering, commissioning, safety, training) on a kit-based cell is then likely in the low tens of thousands of euros per project. This is an estimate derived from the cited figures, not a sourced number.
- With a 30/50/10/10 schedule, the integrator has paid for robot and kit before receiving the delivery payment, and the last 20% (often about equal to the whole profit) depends on acceptance. Cash flow is tight unless the down payment covers the hardware purchase.
- Vendor payback claims (6-18 months) assume multi-shift use. A single-shift SME at Central European wages will see longer payback, so the 70% conservative case is the prudent one to quote.
- The 11% fall in EU installations in 2025 suggests a soft market in which customers scrutinize ROI closely.

### Gaps
- No public, current gross or net margin benchmark for robot system integrators (CSIA data is members-only; searches for German special-machine-builder margins returned nothing usable). A planned follow-up search could not run.
- No sourced figures for typical project duration (order to SAT) for small cobot cells.
- No survey measuring the payback period EU SMEs actually require (the commonly quoted "under two years" could not be sourced).
- No EU hourly or day rates for integrator engineering, robot programming or commissioning (search budget exhausted).
- The Fraunhofer IPA 4-5x figure should be checked in the full paper, including its date and sample.

## 3. How small integrators win first customers; distributors versus integrators

### Takeaway
Robot makers certify integrators and route end customers to them, usually via the national distributor, and most small integrators succeed by specializing in one or two applications in one region. The sources found describe the structure of these partner programs but not how leads are shared; first customers otherwise come from personal networks and former employers.

### Cited Findings
- Distributors sell components (for example a cobot arm without grippers, safety validation or programming) and know individual products; integrators make the equipment functional in the customer's plant and usually buy parts through a distributor — [Hesco](https://hesconet.com/blog/distributors-vs-system-integrators-in-industrial-automation/)
- "The value-adds of engineering and commissioning services are the differentiator between a distributor and the integrator" — [Automation Canada, robotic integration issue](https://nxtbook.com/kerrwil/AutomationCanada/automation-canada-robotic-integration-issue/index.php?startid=14)
- The line between distributors and integrators keeps blurring; some firms hold both roles (for example Cross Company integrates and also distributes Doosan cobots) — [Control Design](https://controldesign.com/21545759), [Control.com](https://control.com/news/cross-company-and-doosan-team-up-to-ship-out-cobot-technology/)
- Universal Robots runs a Certified System Integrator (CSI) status and has repeatedly added CSIs in Germany, Austria and Switzerland, stating it wants integration partners close to customers; some are small engineering firms aimed at helping smaller companies start automating — [UR Germany news](https://www.universal-robots.com/de/nachrichten-und-medien/news-center/universal-robots-erweitert-sein-vertriebsnetz-in-deutschland/), [Reinraum.de](https://www.reinraum.de/en/news/new-partner-universal-robots-expands-its-sales-network-in-germany.html)
- In Denmark, UR named its first certified integrator together with the national distributor (Technicon), showing the distributor's role in selecting integrators — [UR Denmark news](https://www.universal-robots.com/da/nyheder-og-multimedia/nyheder/universal-robots-udnaevner-kjaergaard-a-s-som-forste-certificerede-integrator-i-danmark/)
- UR publishes a partner-program page in Central European languages (Polish page found) — [UR partner program (PL)](https://www.universal-robots.com/pl/partner/program-partnerski/)
- "Lean integrators" differ from traditional ones in size and speed; they "typically focus on mastering one or two end applications within a regional market and often employ no more than 10 people" — [Automation Canada, robotic integration issue](https://nxtbook.com/kerrwil/AutomationCanada/automation-canada-robotic-integration-issue/index.php?startid=15), [Automation World](https://automationworld.com/factory/robotics/article/21195925/cobots-and-the-rise-of-lean-integrators)
- Fusion Cobotics (US) says the UR ecosystem lets everything it does be "menu driven", offering four UR models tailored to customer applications — [The Robot Report](https://www.therobotreport.com/how-cobots-lean-integrators-automation-smes/)
- The big four robot makers (KUKA, FANUC, ABB, Yaskawa) each license hundreds of integrators, and hundreds more are hardware-agnostic; The Robot Report's own directory lists 450+ integrators — [The Robot Report, "Integrators are dead; long live the integrator"](https://www.therobotreport.com/integrators-are-dead-long-live-the-integrator/), [The Robot Report integrator map](https://www.therobotreport.com/map/integrators)
- A 2024 study headline credits small firms with 68% of robotics integration (headline only; study details not retrieved) — [Robotics & Automation News](https://roboticsandautomationnews.com/2024/04/26/small-firms-drive-68-percent-of-robotics-integration-according-to-study/82551)
- A 2026 Robot Report article on integrator-layer data (credited to STIELER and RSI Market Intelligence) says the partner layer is still hard to map and that even "simple" robots need application expertise, peripheral integration, risk assessments and process know-how — [The Robot Report](https://www.therobotreport.com/over-500k-robots-installed-last-year-integrator-layer-still-hard-map/)
- ABI Research headline: Universal Robots struggles to find system integrators to support growth (headline only) — [ABI Research](https://www.abiresearch.com/market-research/insight/7785091-universal-robots-struggles-to-find-system-)
- One vendor program (Lincoln Electric cobots) gives distributors an extra 5% discount on subsequent cobot system orders but requires two or more trained subject-matter experts per 35 store locations: channel margin is tied to demonstrated capability — [Lincoln Electric partner document](https://ch-delivery.lincolnelectric.com/api/public/content/d9dd3d6a624449cdb5d4961521d2a5a2)
- Practitioner advice (forum, 2003): the primary need is customers; "no customers, no living" — [MrPLC forum](https://mrplc.com/forums/topic/1258-need-info-on-starting-an-integration-business/)
- IEEE Spectrum: robotics founders underestimate integrators, who handle selection, procurement and maintenance for manufacturers — [IEEE Spectrum](https://spectrum.ieee.org/five-dos-and-donts-on-building-your-robotics-startup)
- A former integrator founder published business and marketing tips, including keyword research for customers searching for systems like yours (2016; content not retrieved) — [RoboticsTomorrow](https://roboticstomorrow.com/article/2016/03/my-business-and-marketing-tips-for-robot-integrators/7845)
- The all about automation regional fairs (Düsseldorf, Chemnitz, Zürich) list small integrators and special-machine builders as exhibitors — [all about automation Düsseldorf](https://duesseldorf.allaboutautomation.de/en/?p=329206)

### Inferences
- If robot makers struggle to find enough integrators (ABI headline) and keep adding CSIs in DACH, a competent new integrator has bargaining power with a robot brand or its national distributor. Approaching the distributor is the most direct route to referred leads, since the distributor sells arms but cannot deliver finished cells.
- Certification programs demand trained staff, so the realistic sequence is: vendor training, one or two reference cells, then certified status and listing in the vendor's partner locator.
- Specializing in one application in one region matches both the lean-integrator pattern and the founder's limited hardware experience.

### Gaps
- No source describes how UR, FANUC, ABB or their distributors actually pass leads to integrators, what discount an integrator gets off list price, or the entry requirements for CSI status.
- No sourced evidence on subcontracting for larger integrators as an entry route, or on results from trade fairs (Automatica, MSV Brno, all about automation).
- No recent first-hand practitioner accounts (r/PLC, PLCtalk) of starting an integrator were retrieved; searches returned off-topic results and the forum hit is from 2003.
- Details of the "68% small firms" study and the 2026 STIELER/RSI integrator data were not retrieved.

## 4. Common failure modes for new integrators

### Takeaway
The failures the sources describe are contractual more than technical: vague acceptance criteria, a FAT that tests too little, fixed-price contracts with a short SAT allowance, and no deposits. Hazards found only at commissioning are the main technical cost driver.

### Cited Findings
- When the owner sets no clear acceptance criteria, the contractor defines them to minimize its own risk rather than to ensure operational success — [Control Design, acceptance testing](https://www.controldesign.com/sensing/sensors/article/55366750/patrick-bunn-explains-why-functional-intent-is-critical-in-acceptance-testing)
- Case: a controls upgrade without a functional specification passed a FAT that covered only wiring, I/O and communications; problems appeared at SAT, the contract covered only one week of SAT support, and "the overrun resulted in a significant number of change orders" — [Control Design, acceptance testing](https://www.controldesign.com/sensing/sensors/article/55366750/patrick-bunn-explains-why-functional-intent-is-critical-in-acceptance-testing)
- Some organizations count startup and commissioning as part of SAT while others treat them as separate billable phases, which causes disputes — [Control Design, acceptance testing](https://www.controldesign.com/sensing/sensors/article/55366750/patrick-bunn-explains-why-functional-intent-is-critical-in-acceptance-testing)
- Fixed-price contracts need acceptance milestones with defined performance metrics; payment terms without milestone releases and acceptance criteria let contractors declare completion prematurely — [Industrial Monitor Direct, turnkey projects](https://industrialmonitordirect.com/blogs/knowledgebase/turnkey-automation-projects-contract-specifications-and-scope-management)
- Case: an operator nobody had met before rejected the design at FAT, attributed to the lack of a well-circulated functional design specification and late operator involvement — [Control Engineering, avoid thrashing](https://www.controleng.com/articles/engineering-project-management-avoid-thrashing)
- Scope creep from fuzzy requirements is a major budget driver; the remedy is to lock requirements before design and price every change against cost and schedule — [SCADA consultant blog](https://scadaintel.pages.dev/blog/common-scada-consultant-mistakes/)
- Hazards discovered only at commissioning force design changes or added guards, raising cost and effort — [IBF Solutions](https://www.ibf-solutions.com/fachbeitraege/ce-kennzeichnung-kosten-reduzieren)
- Businesses fail for lack of positive cash flow more than anything else; integrators must invoice promptly and take deposits (adjacent AV integration industry) — [Solutions360](https://solutions360.com/cash-flow-management-for-integrators/)
- The customer should name an in-house champion who learns the system after installation; this supports ROI and reduces support load (NIST-authored) — [IndustryWeek](https://industryweek.com/sponsored/article/22028362/how-to-make-your-first-robot-integration-a-success)
- Automation World argues many integrators learned through hard experience and that CSIA best practices are a way to avoid repeating others' mistakes — [Automation World](https://www.automationworld.com/home/blog/13318060/dont-cut-off-your-thumb)
- A robotics-startup commentary notes lead engineers hired for innovation end up in firefighting mode as deployments scale — [Applied Engineering blog](https://appliedengineering.squarespace.com/blog/reasons-robotics-startups-fail-to-scale)

### Inferences
- The countermeasures follow directly: a written functional specification signed before design; acceptance criteria stated as numbers (cycle time, availability over a defined run, defined part range); a FAT that runs real customer parts rather than I/O checks; a stated number of on-site commissioning days with extra days billed; a deposit that covers hardware.
- Part variability is the usual reason a cell that passed FAT fails at SAT: FAT parts are selected samples, while production parts vary. The contract should define the part and packaging tolerances the cell is accepted against.
- For a 1-5 person firm, every support call takes an engineer off a paid project, so a trained customer champion, remote access and a paid service contract matter more than for a large integrator.

### Gaps
- No failure-rate statistics for automation projects or for new integrators were found; all evidence is anecdotal and mostly from US controls/SCADA integration rather than EU robot cells.
- No sourced data on after-sales support burden (hours per installed cell, share of revenue from service contracts).
- No sourced discussion of part variability specifically; the point above is an inference.

## 5. EU legal obligations: Machinery Directive, Machinery Regulation, CE marking, standards, cost

### Takeaway
A robot is partly completed machinery supplied with a declaration of incorporation; whoever builds the cell, or has it built, becomes the manufacturer of the complete machine and must do the risk assessment, compile the technical file, issue the declaration of conformity and affix the CE mark. Directive 2006/42/EC governs until 19 January 2027; Regulation (EU) 2023/1230 applies from 20 January 2027 with no grace period for new placements, and it requires a notified body only for six high-risk categories, one of which is safety functions based on machine learning.

### Cited Findings
**Who is the manufacturer**
- "A robot is a partly completed machine, as it has to be integrated into other machinery to carry out its functions. The hazards need to be addressed by the integrator, rather than by the robot manufacturer." — [Engineers Ireland](https://engineersireland.ie/Engineers-Journal/Mechanical/partly-completed-equipment-when-machines-arent-quite-machines)
- Universal Robots' declaration of incorporation: "When this partly completed machine is integrated and becomes a complete machine, the integrator is responsible for the completed machine fulfilling all applicable Directives, applying the CE mark and providing the Declaration of Conformity (DOC)." UR also states robots are not eligible for CE marking under the machinery rules because a declaration of conformity can only be given for a complete machine — [UR Declaration of Incorporation, e-Series](https://universal-robots.com/download/certifications-and-declarations-e-series/declaration-of-incorporation-e-series), [UR DoI 2025 (OEM)](https://www.universal-robots.com/manuals/EN/HTML/SW5_24/Content/prod_oem_cb_all/DOI_2025_OEM_0623.pdf)
- A declaration of incorporation lists the essential health and safety requirements that have been addressed, plus the name and address of the responsible person; partly completed machinery carries no CE mark under the machinery rules — [Engineers Ireland](https://engineersireland.ie/Engineers-Journal/Mechanical/partly-completed-equipment-when-machines-arent-quite-machines)
- Pilz on assemblies of machinery: the person who builds the assembly from individual or partly completed machinery, "or has it built", is the manufacturer; this may be a machine manufacturer or the operator of the resulting assembly — [Pilz FAQ](https://www.pilz.com/en-INT/support/faq/standards/articles/167659)
- The Commission's Guide to the Machinery Directive treats assemblies of machinery in §38 and assemblies of new and existing machinery in §39 (Edition 2.3, April 2024, is current); the Guide is interpretive, only the Directive is binding — [European Commission Guide (PDF)](https://ec.europa.eu/docsroom/documents/60145/attachments/1/translations/en/renditions/pdf), [Certifico on Ed. 2.3](https://www.certifico.com/newsletter/archive/view/listid-65-impianti/mailid-95298-guida-direttiva-macchine-2006-42-ce-ed-2-3-aprile-2024)
- The integrator is responsible for the risk assessment of the complete robot system; a compliant robot in a non-compliant installation invalidates the CE marking of the workcell — [EVS safety standards guide](https://www.evsint.com/industrial-robot-safety-standards-iso-10218-ce-marking-2026/)
- Technical documentation, including risk assessment and protective measures, must be kept for at least ten years and produced to authorities on request — [Computer & Automation, eight steps to CE](https://www.computer-automation.de/safety-und-security/acht-schritte-von-der-risikobeurteilung-bis-zur-ce-kennzeichnung.htm)

**Machinery Regulation (EU) 2023/1230**
- Applies from 20 January 2027 and replaces Directive 2006/42/EC; machinery placed on the market from that date must conform, with no transition period, and the EU declaration of conformity must then reference the Regulation. Machinery lawfully placed on the market earlier stays lawful and need not be re-CE-marked solely because of the new Regulation — [EU-OSHA](https://osha.europa.eu/it/legislation/directive/regulation-20231230eu-machinery), [Certivo](https://www.certivo.com/frameworks/eu-machinery-regulation), [Unchained Robotics blog](https://blog.unchainedrobotics.de/en/eu-machinery-regulation-2027-robot-cells)
- Substantial modification (Article 3(16)): a modification by physical or digital means, after placing on the market or putting into service, not foreseen by the manufacturer; software changes can qualify — [Fabrico](https://www.fabrico.io/blog/eu-machinery-regulation-2023-1230/), [Euronorm](https://www.euronorm.net/en/pages/wijzigingen-machineverordening-eu-2023-1230)
- Article 18: whoever makes a substantial modification is treated as a manufacturer and takes on the Article 10 manufacturer obligations; this applies to users and integrators alike — [SIPA Solutions](https://sipasolutions.com/blog/old-and-new-machinery-regulations-focus-on-maintenance-and-modifications-to-machinery-and-lines), [Fabrico](https://www.fabrico.io/blog/eu-machinery-regulation-2023-1230/)
- An operator of a compliant cell is not a manufacturer unless it makes a substantial modification or builds a machine or assembly for its own use; advice is to agree in writing who takes the manufacturer role before a retrofit starts — [Unchained Robotics blog](https://blog.unchainedrobotics.de/en/eu-machinery-regulation-2027-robot-cells)
- Conformity assessment: self-assessment remains the general rule; third-party (notified body) involvement is mandatory for six "high-risk" categories in Annex I Part A, and the 19 Part B categories can be self-assessed — [Baker McKenzie](https://www.bakermckenzie.com/en/insight/publications/resources/product-risk-radar-articles/machinery-regulation), [Taylor Wessing](https://taylorwessing.com/-/media/taylor-wessing/files/germany/2025/tw24_eu_machinery_regulation.pdf)
- Annex I Part A includes safety components with fully or partially self-evolving behaviour using machine learning that ensure safety functions, and machinery embedding such systems; these need a notified body — [UL Solutions](https://www.ul.com/resources/navigating-new-eu-machinery-regulation-eu-20231230), [Taylor Wessing](https://taylorwessing.com/-/media/taylor-wessing/files/germany/2025/tw24_eu_machinery_regulation.pdf)
- One low-reliability page describes the Part A/Part B split differently (23 categories in Part A); it conflicts with the law-firm sources and should be disregarded pending a check of the text — [cecheck](https://cecheck-com.pages.dev/machinery-regulation/); contradicted by [Taylor Wessing](https://taylorwessing.com/-/media/taylor-wessing/files/germany/2025/tw24_eu_machinery_regulation.pdf)
- Digital safety components are explicitly in scope; cybersecurity and AI are assessed where they affect safety rather than as standalone topics — [DWF](https://dwfgroup.com/en/news-and-insights/insights/2023/7/new-machinery-regulation), [UL Solutions](https://www.ul.com/resources/navigating-new-eu-machinery-regulation-eu-20231230)
- Under the Regulation the declaration of incorporation for partly completed machinery is an Annex V Part B document — [HEBI Robotics DoI, March 2026](https://docs.hebi.us/resources/compliance/HEBI_EU_Machinery_Directive_DOI-Mar2026.pdf)
- Notified body capacity may be tight; early application is advised — [HSM Search](https://www.hsmsearch.com/?p=19726)

**Robot safety standards**
- ISO 10218-1 and -2 were revised in 2025, replacing the 2011 editions: Part 1 addresses robot manufacturers, Part 2 addresses integrators of robot applications and robot cells — [A3 FAQ](https://www.automate.org/robotics/blogs/updated-iso-10218-faq), [Manufacturing.net](https://www.manufacturing.net/operations/news/22933643/a3-announces-revises-standard-for-industrial-robot-safety)
- The safety requirements for collaborative applications formerly in ISO/TS 15066 are incorporated into ISO 10218-2:2025 — [A3 FAQ](https://www.automate.org/robotics/blogs/updated-iso-10218-faq), [SICK blog](https://www.sick.com/jp/ja/w/blog-robotic-norm-iso10218)
- A Teradyne/UR-authored article says the 2025 edition makes explicit what the 2011 text only implied; one commentator says the 2011 edition required a few safety functions and the 2025 edition more than 20 (single source) — [Machine Design](https://www.machinedesign.com/markets/robotics/article/55289249/teradyne-warning-explicit-content-robot-safety-standards-get-a-makeover), [SME Advanced Manufacturing](https://www.advancedmanufacturing.org/technologies/automation/major-industrial-robot-safety-standard-gets-overhaul/article_5db49df2-ed6a-11ef-affd-3759a33a1f74.html)
- SICK: integrators should treat the new Part 2 as the state of the art when modifying systems; significant changes may require a new conformity assessment — [SICK blog](https://www.sick.com/jp/ja/w/blog-robotic-norm-iso10218)
- EN ISO 10218-1:2025 and EN ISO 10218-2:2025 were adopted in Europe without changes; one source states their references were published in the Official Journal on 7 September 2026 by Commission Implementing Decision (EU) 2026/2015, making them harmonised under Directive 2006/42/EC with presumption of conformity (single vendor source; the OJ entry itself was not checked) — [IBF Solutions](https://www.ibf-solutions.com/en/seminars-and-news/news/new-standards-for-industrial-robots-en-iso-10218-1-and-2), [EVS Estonia listing](https://www.evs.ee/en/evs-en-iso-10218-2-2025)
- One vendor page states ISO 10218-1 is still at the 2011 edition with the 2025 update pending; this conflicts with the other sources and appears outdated — [EVS safety standards guide](https://www.evsint.com/industrial-robot-safety-standards-iso-10218-ce-marking-2026/); contradicted by [A3 FAQ](https://www.automate.org/robotics/blogs/updated-iso-10218-faq)
- ISO/PAS 5672:2023 gives test methods for measuring forces and pressures in human-robot contacts in collaborative applications — [Fraunhofer IFF](https://www.iff.fraunhofer.de/en/press/2024/new-iso-standard-for-testing-the-forces-of-cobot-collisions.html)

**Cost and use of external help**
- Pilz rents its PROBms force and pressure measurement system worldwide; the rental includes maintenance, calibration and updates (no price given) — [Automation Magazine](https://www.automationmagazine.co.uk/force-and-pressure-measurement-system-checks-cobot-safety/)
- A CoboSafe measurement item is listed at EUR 5,811 plus VAT in the Unchained Robotics shop, with financing "from EUR 600 per month"; which components that price covers was not verified — [Unchained Robotics shop](https://unchainedrobotics.de/en/products/safety/cobosafe?limit=all)
- Omron offers a Cobot Safety Validation service (price on request) — [Drives and Controls](https://drivesandcontrols.ca/?p=57032)
- CE work is sold as a fixed-scope package by engineering offices: Unchained Robotics lists an "Ingenieurbüro Köckemann CE package" for robots up to 80 kg in a cell with conveyor and light curtain, covering design and verification of protective measures for the conformity procedure (price not retrieved) — [Unchained Robotics, CE package](https://unchainedrobotics.de/en/products/service/ingenieurbüro-köckemann-ce-package-robot-up-to-80-kg-in-cell-with-conveyor)
- Safety service providers offer risk analyses, conformity assessments and CE marking alongside safety concept design and safety controller programming — [Industrial Production](https://www.industrial-production.de/wirtschaft---unternehmen/displayaction-848330.htm)
- Self-built risk assessments are often too costly in effort, pushing machine builders toward dedicated software (vendor-authored) — [Industrial Production](https://www.industrial-production.de/wirtschaft---unternehmen/indat-sorgt-sich-um-die-robotersicherheit.htm)
- A one-day seminar on human-robot collaboration safety cost EUR 635 per person (2019 price) — [Axelent seminar brochure](https://www.axelent.de/media/6766/fachseminare_axelent-profiservices_safetyweek-ma-rz-2019.pdf)

### Inferences
- For a standard robot cell with conventional (non-ML) safety functions, the sources indicate self-certification: the integrator signs the declaration of conformity without a notified body. External safety consultants are optional and commonly used, as shown by CE packages sold off the shelf. This reading should be confirmed against the Annex I text.
- The ML rule matters for an AI-focused founder. Using machine learning for perception or path planning is unaffected, but if an ML system performs a safety function (for example AI vision replacing a safety scanner to detect people), the cell falls into Annex I Part A and needs a notified body. The practical design rule is to keep AI out of the safety chain and use certified safety devices for protection.
- Cells delivered after 20 January 2027 fall under the Regulation, so any project quoted now with delivery in 2027 should be designed and documented to the Regulation and to EN ISO 10218-2:2025.
- A customer who buys a cobot and a kit and assembles the cell itself becomes the manufacturer. That is a sales argument for the integrator (it takes on the CE responsibility) and a reason to state in every contract who signs the declaration of conformity.
- Because the software-change rule can turn a later program or parameter change into a substantial modification, an integrator offering remote updates should define in advance which changes are foreseen and documented.
- "Collaborative" cells still need validation of contact forces and pressures; the measurement equipment is rented or bought for several thousand euros, so power-and-force-limited applications carry a validation cost that fenced or scanner-protected cells avoid.

### Gaps
- No prices found for external risk assessments, CE consulting day rates or the Köckemann CE packages; the specific search could not be completed.
- The EN ISO 12100 risk assessment methodology was not covered by any retrieved source, though it is the standard normally used for this step; treat it as unsourced background to be confirmed.
- The Regulation's provisions on digital instructions and the exact cybersecurity requirements (Annex III) were not confirmed; the search could not run.
- The exact text of Guide §38 on robots and of Articles 3(16), 10 and 18 was not read; all statements come from secondary summaries.
- Whether ISO/TS 15066 has been withdrawn or continues as a separate document is unclear: one source calls it legacy, another says it will become its own standard — [EVS guide](https://www.evsint.com/industrial-robot-safety-standards-iso-10218-ce-marking-2026/), [A3 FAQ](https://www.automate.org/robotics/blogs/updated-iso-10218-faq)
- Other legislation that applies to a cell (Low Voltage, EMC, the Cyber Resilience Act, the AI Act) was not researched.

## 6. Liability, insurance, contract terms and warranty

### Takeaway
The revised Product Liability Directive (EU) 2024/2853 applies to products placed on the market after 9 December 2026, treats software as a product and is expected to reach system integrators under strict liability. Standard European contract terms (Orgalim S 2022) exclude consequential loss and limit defect liability, and warranty periods of 12 to 24 months are the norm; no figures for insurance limits or premiums for integrators were found.

### Cited Findings
- Directive (EU) 2024/2853 applies to products placed on the market or put into service after 9 December 2026; earlier products stay under Directive 85/374/EEC — [Clyde & Co](https://www.clydeco.com/en/insights/2024/11/navigating-the-new-eu-product-liability-directive), [24hour-AR](https://www.24hour-ar.com/authorised-representative/eu-product-liability-directive)
- Software is expressly a product, whether embedded, cloud-delivered or SaaS, along with AI systems and digital manufacturing files — [Xictron](https://www.xictron.com/en/blog/new-product-liability-law-software-december-2026/), [Keystone Law](https://keystonelaw.com/keynotes/how-will-the-new-product-liability-directive-eu-2024-2853-impact-businesses/)
- Liability is strict: the injured party proves defect, damage and causal link, not negligence — [Zurich Nordic](https://www.nordic.zurich.com/en/news-and-risk-insights/articles/product-liability-directive)
- A Taylor Wessing note on logistics and plant engineering lists system integrators among those exposed to the broader strict-liability regime, with manufacturers, importers and logistics operators — [Taylor Wessing, May 2026](https://www.taylorwessing.com/zh-hant/insights-and-events/insights/2026/05/new-eu-product-liability-directive-in-logistics-plant-engineering)
- Insurers are expected to reprice and add software governance and cyber-safety controls to traditional rating factors; product liability cover historically focused on manufacturing defects — [Howden Re](https://www.howdenre.com/news-insights/casualty-focus-new-eu-product-liability-directive), [Sompo](https://www.sompo-intl.com/media-center/insights/preparing-for-the-eu-product-liability-directive/)
- As of late 2025 only some member states (Netherlands, Sweden, Germany) had published draft implementing measures, so national detail may vary — [Howden Re report, April 2026](https://www.howdenre.com/sites/howdenre.howdenprod.com/files/2026-04/Howden%20Re%20Casualty%20in%20focus%20%234%20-%20%20the%20new%20EU%20product%20liability%20directive%20%26%20AI%20April212026.pdf)
- Insurance packages for machine and plant builders typically combine public and products liability (with product recall or product protection cover where needed) with property, business interruption, technical and transport insurance — [Funk Gruppe](https://www.funk-gruppe.de/en/industries/industry/machine-and-plant-construction)
- A German case shows the gap between product and planning cover: an insurer first refused a claim over a machine-specification error, and planning-error damages were partly excluded; the claim was later reframed as product liability — [Leinemann Partner](https://leinemann-partner.de/en/credentials/how-is-your-insurance-cover)
- UK reference (general businesses, not machinery): most product liability policies cover GBP 1-5 million — [Designing Buildings wiki](https://www.designingbuildings.co.uk/wiki/Product_liability_insurance)
- Orgalim S 2022 (issued October 2022; earlier editions 1992, 2000, 2012) is the current European model contract for supply of mechanical and electrical products; its commentary covers defect liability in clauses 24-39 and consequential losses in clause 50 — [VDMA shop, Orgalim S 2022 guide](https://www.vdmashop.de/Orgalim-General-Condition-S-2022-Guide-on-their-use-and-interpretation/orgalime.112125)
- A Finnish manufacturer contracting on Orgalim S 2022 grants 24 months' warranty limited to defects in materials and workmanship; Nordic suppliers frequently offer two years instead of the one year in the NL 01 conditions — [Kolmeks terms](https://kolmeks.com/en/company/terms-of-delivery-and-warranty-conditions/), [Chambers on Orgalime S 2012](https://chambers.com/articles/orgalime-s2012)
- Early advice from practitioners: incorporate to shield personal assets (forum, 2003) — [MrPLC forum](https://mrplc.com/forums/topic/1258-need-info-on-starting-an-integration-business/)

### Inferences
- An integrator that signs the declaration of conformity is the manufacturer for product liability purposes too, and its own software (robot programs, vision, AI) is now itself a product. A software-led integrator therefore carries more product liability exposure from December 2026 than under the old directive.
- The Leinemann case implies an integrator needs both product liability cover and cover for design or planning errors (professional indemnity), and should check that pure financial loss from a cell that underperforms is not excluded.
- Strict liability to injured persons cannot be contracted away, but liability to the customer can be limited: Orgalim-style terms that cap liability and exclude consequential loss (lost production) are the standard tool and should be the integrator's default.

### Gaps
- No figures for insurance limits or premiums for small integrators in the EU or the Czech Republic; a broker quote is needed.
- The Orgalim S 2022 default warranty period and liability cap were not confirmed from the text (the 12-month default is commonly cited but unsourced here).
- No source on whether a software update after 9 December 2026 to an earlier-delivered cell counts as a new placing on the market.
- No data on typical liquidated damages for late delivery or on performance guarantees in integrator contracts.

## 7. Minimum viable team, skills and what can be subcontracted

### Takeaway
A robot cell needs mechanical design, electrical and control-cabinet design, PLC and robot programming, safety engineering and commissioning; successful small integrators cover this with fewer than ten people by sticking to one or two applications and buying pre-validated kits. The sources found describe roles but give no direct evidence on which functions small integrators subcontract.

### Cited Findings
- Lean integrators focus on one or two end applications in a regional market and often employ no more than 10 people — [Automation Canada, robotic integration issue](https://nxtbook.com/kerrwil/AutomationCanada/automation-canada-robotic-integration-issue/index.php?startid=15)
- The integrator's job: study feasibility (cost, labor, time, suitable robot types), design the system and obtain components from robot manufacturers and suppliers — [Vault, robotics integrators](https://legacy.vault.com/industries-professions/professions/r/robotics-integrators/the-job)
- A controls integrator role covers programming, motion, communication, electrical design, vision and robot integration, working with electrical designers and mechanical engineers — [RoadDog Jobs posting](https://roaddogjobs.com/job/xapp4j/controls-integrator-tech/sioux-falls/sd)
- Even "simple" robots require application expertise, peripheral integration, risk assessments and process-specific know-how — [The Robot Report](https://www.therobotreport.com/over-500k-robots-installed-last-year-integrator-layer-still-hard-map/)
- Kit vendors supply the mechanical structure, lift axis, sensors and application software as one validated package (Robotiq, Vention, OnRobot; see section 1) — [Automation Distribution, Robotiq PE](https://automationdistribution.com/robotiq-palletizing-solution-pe-series-for-ur20-with-vacuum-gripper), [UR Marketplace, Vention CNC tending](https://www.universal-robots.com/marketplace/products/01tP40000071NjcIAE)
- Safety and CE work can be bought externally as a package or service (engineering office CE packages, Omron validation service, Pilz measurement rental) — [Unchained Robotics, CE package](https://unchainedrobotics.de/en/products/service/ingenieurbüro-köckemann-ce-package-robot-up-to-80-kg-in-cell-with-conveyor), [Automation Magazine](https://www.automationmagazine.co.uk/force-and-pressure-measurement-system-checks-cobot-safety/)
- Vendor programs require trained people: Lincoln Electric requires two or more subject-matter experts fully trained to program and troubleshoot cobot systems — [Lincoln Electric partner document](https://ch-delivery.lincolnelectric.com/api/public/content/d9dd3d6a624449cdb5d4961521d2a5a2)
- Robot makers report difficulty finding enough integrators (headline only) — [ABI Research](https://www.abiresearch.com/market-research/insight/7785091-universal-robots-struggles-to-find-system-)

### Inferences
- A kit-based first project removes most mechanical and electrical design: the kit covers frame, axis and application software, the cobot controller covers motion and basic safety I/O. What remains in-house is application setup, gripper adaptation, the interface to the customer's machine, risk assessment, validation, documentation and training.
- The skills hardest to buy in and most tied to liability are safety (risk assessment, safety function design and validation) and commissioning. A founder without hardware experience should either hire or partner with an experienced controls and commissioning engineer early, or buy a CE package for the first cells and learn from it.
- Control cabinet building and mechanical fabrication are generally bought from specialist panel shops and machine shops against the integrator's drawings; this is common practice but no retrieved source confirms it, so it should be treated as unsourced.
- The founder's software and AI skills add most in vision-guided picking, quick changeover and programming speed, which are layered on top of a standard cell, rather than in the cell's base engineering.

### Gaps
- No source directly addresses which functions small EU integrators subcontract (cabinet building, fabrication, on-site electrical installation) or what these cost.
- No data on salaries or freelance day rates for robot programmers, PLC programmers or commissioning engineers in the EU or Czech Republic (search could not run).
- No sourced description of the training and certification path (robot vendor courses, functional safety qualifications such as TÜV-certified machinery safety training) and its cost.
