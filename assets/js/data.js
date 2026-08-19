/* ═══ Дані прототипу — контент, який використовують інтерактивні секції ═══ */
var PH={hero:{h:'440px',d:'1440×640'},wide:{h:'240px',d:'1440×360'},prod:{ar:'4 / 3',d:'800×600'},
  card:{ar:'16 / 10',d:'640×400'},sq:{ar:'1 / 1',d:'480×480'},av:{ar:'1 / 1',d:'240×240',r:1},
  logo:{h:'56px',d:'200×64'},view:{h:'400px',d:'1440×480'}};
var PRODUCTS=[
 {n:'VINDEX',cat:'Counter-UAS',tag:'Die richtige Konfiguration für jede Mission.',
  d:'Autonomer Counter-UAS-Interceptor mit automatisierter Zielerkennung und Interzeption. Die modulare Plattform passt sich flexibel an unterschiedliche Bedrohungsszenarien an.',
  specs:[['Systemmasse','4–6 kg'],['Max. V (Winglets)','350 km/h'],['Flugdauer','20 min'],['Max. Höhe (Flügel)','5.000 m'],['Max. Höhe (Basis)','3.500 m'],['Nutzlast','500 g']],
  cfg:['Basic','Wing','Winglet']},
 {n:'LOIVI',cat:'Loitering Munition',tag:'Mehr Informationen. Mehr Handlungsspielraum.',
  d:'Erweiterung der VINDEX-Plattform für Loitering-Munition-Anwendungen: Ziele frühzeitig identifizieren, bestätigen und gezielt handeln.',
  specs:[['Systemmasse','2–3 kg'],['Max. V','200 km/h'],['Bereich','7 km'],['Nutzlast','1 kg']],cfg:[]},
 {n:'NAXAS',cat:'Edge AI',tag:'Intelligenz direkt am System.',
  d:'Modulare Edge-AI-Lösung für unbemannte Systeme: Kameras, Wärmebildsensoren und Mikrofone plus KI zur Erkennung, Klassifikation und Freund-Fremd-Unterscheidung in Echtzeit.',
  specs:[['Sensorik','EO / IR / Audio'],['Erkennung','Echtzeit'],['Klassifikation','Freund / Fremd'],['Aufbau','Modular']],cfg:[]}
];
var SERVICES=[
 {n:'Agile Transformation',tag:'Agil. Authentisch. Erfahren.',d:'Wir begleiten Unternehmen durch Veränderung. Mit Menschen, die zuhören und Lösungen, die funktionieren.',
  items:[['Agile Coaching','Menschen begleiten. Teams stärken.'],['Transformation','Veränderung erfolgreich gestalten.'],['Leadership Coaching','Führung befähigen.'],['Scrum & Skalierung','Vom Team zur Organisation.']],tags:['Scrum','Kanban','SAFe','LeSS']},
 {n:'Dynamik & Systemanalyse',tag:'Präzise. Effizient. Zuverlässig.',d:'Wir analysieren komplexe Systeme, bevor Herausforderungen entstehen.',
  items:[['Dynamiksimulation','Lasten verstehen und reduzieren.'],['Schwingungsanalyse','Verhalten präzise erfassen.'],['Stoß- & Impactanalyse','Bauteile robuster auslegen.'],['Systemoptimierung','Performance steigern. Risiken minimieren.']],tags:['Lastmanagement','Dämpfung','Impactanalyse']},
 {n:'Modellbildung & Simulation',tag:'Simulieren. Optimieren. Validieren.',d:'Wir simulieren, bevor gebaut wird. Damit Entscheidungen auf Daten statt Vermutungen basieren.',
  items:[['Digitale Modellbildung','Systeme virtuell abbilden.'],['Simulation & Validierung','Konzepte früh absichern.'],['Virtuelle Entwicklung','Designs testen und vergleichen.'],['Performanceoptimierung','Entwicklung beschleunigen.']],tags:['Digitale Prototypen','Virtuelle Validierung']},
 {n:'Projektmanagement',tag:'Strukturiert. Transparent. Verlässlich.',d:'Wir schaffen Struktur in komplexen Projekten. Mit klaren Zielen und transparenten Prozessen.',
  items:[['Projektplanung','Ziele definieren. Ressourcen einsetzen.'],['Projektsteuerung','Risiken frühzeitig erkennen.'],['Stakeholdermanagement','Alle Beteiligten einbinden.'],['Projekterfolg sichern','Termine und Qualität im Blick.']],tags:['Risikomanagement','Projektcontrolling']},
 {n:'Künstliche Intelligenz',tag:'Sehen. Verstehen. Automatisieren.',d:'Wir entwickeln KI-Lösungen, die Bild- und Videodaten in wertvolle Informationen verwandeln.',
  items:[['Bild- & Videorekonstruktion','Daten optimieren.'],['Bild- & Videoerkennung','Objekte erkennen. Inhalte analysieren.'],['Bewegungsschätzung','Bewegungen präzise erfassen.'],['KI-Modellentwicklung','Intelligente Lösungen entwickeln.']],tags:['Deep Learning','Videodatensätze']},
 {n:'Regelungstechnik',tag:'Exakt. Zuverlässig. Effizient.',d:'Wir optimieren Maschinen und Prozesse. Für Anwendungen, bei denen Präzision entscheidend ist.',
  items:[['Maschinenoptimierung','Leistung gezielt verbessern.'],['Prozessoptimierung','Abläufe stabil gestalten.'],['Prozessanalyse','Potenziale aufdecken.'],['Systemoptimierung','Systeme nachhaltig verbessern.']],tags:['Halbleiterindustrie','Präzisionsfertigung']},
 {n:'Softwareentwicklung',tag:'Entwickeln. Integrieren. Perfektionieren.',d:'Wir verbinden Simulation und Softwareentwicklung. Damit Mechanik und Software perfekt zusammenspielen.',
  items:[['Embedded Software','Software für leistungsfähige Systeme.'],['Softwarearchitektur','Lösungen strukturiert umsetzen.'],['Softwareintegration','Funktionen nahtlos integrieren.'],['Test & Validierung','Software absichern.']],tags:['Embedded Systems','Systemvalidierung']}
];
var PNEXT=[
 ['LOIVI','Scroll to Next Product','LOIVI','Loitering Munition','Handlungsspielraum.Erweiterung der VINDEX-Plattform für Loitering-Munition-Anwendungen: Ziele frühzeitig identifizieren, bestätigen und gezielt handeln.'],
 ['NAXAS','Scroll to Next Product','NAXAS','Loitering Munition','Handlungsspielraum.Erweiterung der VINDEX-Plattform für Loitering-Munition-Anwendungen: Ziele frühzeitig identifizieren, bestätigen und gezielt handeln.'],
 ['NOXIS','It Will be Presented Soon','NOXIS','Loitering Munition','Handlungsspielraum.Erweiterung der NOXIS-Plattform für Loitering-Munition-Anwendungen: Ziele frühzeitig identifizieren, bestätigen und gezielt handeln.']];
/* Крок 1 — реальний контент з макета. Кроки 2–4 у Figma не намальовані:
   структура та сама, текст у квадратних дужках чекає на контент від клієнта. */
var PSOLS=[
 {k:'Solution 1',t:'Interception in Challenging Conditions',
  p:'The drone is capable of intercepting any targets and striking them under extremely challenging conditions, including adverse weather, poor visibility, and limited communication.',
  tech:['Thermal Imaging Systems','Artificial Intelligence','Starlink, 3G, 4G, 5G','Detecting a nearby signal for correction']},
 {k:'Solution 2',t:'[Titel der zweiten Fähigkeit]',
  p:'[Ein bis zwei Sätze über die zweite Fähigkeit des Systems — gleiche Länge wie oben.]',
  tech:['[Technologie 1]','[Technologie 2]','[Technologie 3]','[Technologie 4]']},
 {k:'Solution 3',t:'[Titel der dritten Fähigkeit]',
  p:'[Ein bis zwei Sätze über die dritte Fähigkeit des Systems — gleiche Länge wie oben.]',
  tech:['[Technologie 1]','[Technologie 2]','[Technologie 3]','[Technologie 4]']},
 {k:'Solution 4',t:'[Titel der vierten Fähigkeit]',
  p:'[Ein bis zwei Sätze über die vierte Fähigkeit des Systems — gleiche Länge wie oben.]',
  tech:['[Technologie 1]','[Technologie 2]','[Technologie 3]','[Technologie 4]']}];
var PFEAT=[
 ['5G','5G Mobile Communications','In addition to the Starlink system, it operates on the widespread and ultra-fast fifth-generation 5G network. This ensures uninterrupted connectivity even if the Starlink system is shut down in a combat zone.'],
 ['P19','Optionally Piloted by Design','Unlike conventional aircraft adapted for unmanned use, PULSE P19 is engineered from the ground up with autonomous capability at its core – natively supporting crewed, remotely controlled and uncrewed operations within a single platform.'],
 ['UXS','One Platform. One Ecosystem','A networked mission platform where sensors, flight controls, AI systems, communication links and effectors are integrated through MOSAIC UXS to enable coordinated operations across air, ground and networked domains.'],
 ['ISR','Multi-role by Design','Counter-UxS, ISR, maritime and border patrol, training, and manned-unmanned teaming are supported through flexible payload integration and open-system architecture.']];
var PTRUST={t:'Trusted by Hyperscalers.',
 p:'VINDEX™ is deployed by the world’s leading AI and cloud operators to endure uninterrupted compute and perfect power quality. By integrating directly with grid infrastructure, it keeps data flowing, cooling online, and uptime absolute, even under extreme volatility.',
 col:'Counter-UxS, ISR, maritime and border patrol, training, and manned-unmanned teaming are supported through flexible payload integration and open-system architecture.'};
/* Текст вступу — реальний, з v2.naxcon.com. У макеті для всіх трьох продуктів
   продубльований абзац VINDEX; тут кожен продукт має власний (див. анотацію). */
var PINTRO={
 VINDEX:'VINDEX ist in drei Konfigurationen verfügbar. Die Basic-Variante bietet eine kosteneffiziente Lösung für die schnelle Interzeption unbemannter Bedrohungen. Die Wing-Variante erweitert Reichweite und Einsatzhöhe für anspruchsvollere Missionsanforderungen. Die Winglet-Variante wurde für maximale Manövrierfähigkeit und hohe Agilität entwickelt. Alle drei Varianten basieren auf derselben Plattform und können an unterschiedliche Missionsanforderungen angepasst werden.',
 LOIVI:'LOIVI unterstützt unterschiedliche Missionsprofile – von Counter-UAV-Anwendungen über Decoy-Tests bis hin zu Multi-Strike- und urbanen Präzisionsszenarien. Durch die Kombination aus Zielbestätigung und Wirkanwendung können Ressourcen effizienter genutzt und Einsatzmittel gezielter eingesetzt werden.',
 NAXAS:'NAXAS nutzt Kameras, Wärmebildsensoren und Mikrofone, um seine Umgebung kontinuierlich zu analysieren. Durch die Kombination dieser Sensordaten mit künstlicher Intelligenz kann das System andere Drohnen erkennen, klassifizieren und zwischen eigenen sowie fremden Einheiten unterscheiden.'};
var MICON={
 a:"https://www.figma.com/api/mcp/asset/750be87a-6e3c-4711-bd63-3137076775be.svg",
 b:"https://www.figma.com/api/mcp/asset/bbeda07d-0862-4780-a4ee-6dfcdddbba15.svg",
 c:"https://www.figma.com/api/mcp/asset/368ad2f1-9b66-49c6-b350-32684bd65cd1.svg"};
/* Таби Leistungsbereiche · Figma 47:6909. У макеті шість табів, у SERVICES сім:
   Softwareentwicklung у таб-бар не потрапила (розбіжність зафіксована в анотації).
   i — індекс у SERVICES, s — короткий підпис таба, h — заголовок картки за зразком макета. */
var SVFIG=[
 {i:0,s:'Agile Transformation',h:'Agile Transformation. Authentisch. Erfahren.',
  tags:['Scrum','Kanban','SAFe','LeSS','Nexus','Agile Transformation','Team Coaching','Leadership Coaching']},
 {i:1,s:'Dynamik &amp; Systemanalyse',h:'Dynamik &amp; Systemanalyse. Effizient. Zuverlässig.'},
 {i:2,s:'Modellbildung &amp; Simulation',h:'Modellbildung &amp; Simulation. Optimieren. Validieren.'},
 {i:3,s:'Projektmanagement',h:'Projektmanagement. Transparent. Verlässlich.'},
 {i:4,s:'KI',h:'Künstliche Intelligenz. Verstehen. Automatisieren.'},
 {i:5,s:'Regelungstechnik',h:'Regelungstechnik. Zuverlässig. Effizient.'}];
/* Іконки підпослуг · Figma 51:7093 / 51:7129 / 51:7165 — 33×27.
   У макеті четвертий пункт повторно використовує третю іконку. */
var SVICON=[
 "https://www.figma.com/api/mcp/asset/a1148551-90e6-4c61-950d-1a74f783df8f.svg",
 "https://www.figma.com/api/mcp/asset/c232ae97-0f49-4b55-8f6e-ea87df6e06f1.svg",
 "https://www.figma.com/api/mcp/asset/8070f427-e7cf-4c56-a02f-ae3c148642ae.svg",
 "https://www.figma.com/api/mcp/asset/8070f427-e7cf-4c56-a02f-ae3c148642ae.svg"];
var MARKETS=[
 ['Verteidigung / Luft- &amp; Raumfahrt','Die Verteidigung/ Luft- und Raumfa steht vor der Herausforderung, Innovation, Sicherheit und Effizienz miteinander zu verbinden.',MICON.a],
 ['Automobilindustrie','Mobilität entsteht heute nicht mehr nur auf der Straße. Sie entsteht in Software, Daten und intelligent vernetzten Systemen.',MICON.b],
 ['Halbleiterindustrie','Die Halbleiterindustrie entwickelt sich mit hoher Geschwindigkeit. Neue Technologien, steigende Leistungsanforderungen.',MICON.c],
 ['KI-Lösungen','Künstliche Intelligenz verändert die Art und Weise, wie Unternehmen Wissen verwalten, Prozesse gestalten und Entscheidungen.',MICON.c]];
var CLIENTS=['Rheinmetall','Bosch','Valeo','Knorr-Bremse','Daimler Truck','Dürr','Schunk','Motherson','Eberspächer','Swoboda','BWI','Bundesbank'];
var CERTS=['TÜV SÜD ISO 9001','Innovation Prize 2026','Great Place to Work 2025','Charta der Vielfalt','GVP'];
var HERO_CERTS=['TÜV SÜD · ISO 9001','Great Place to Work 2025','Charta der Vielfalt','GVP · Mitglied'];
/* Плоскі SVG-експорти вузлів-ілюстрацій (download_assets → export). Векторні, не растр. */
var KILLU={
 karriere:"https://www.figma.com/api/mcp/asset/e2b04f30-89ea-4820-8e6c-9f88ac1c5992.svg",
 kontakt:"https://www.figma.com/api/mcp/asset/355bd89c-1700-4ec1-99fe-da91ab981f52.svg"};
var WILLU={
 arm:"https://www.figma.com/api/mcp/asset/6e9efaf1-c4a9-4a65-b398-5365c38c2f3e.svg",
 mach:"https://www.figma.com/api/mcp/asset/a17384e7-319f-4137-9727-9b27abea3318.svg",
 turb:"https://www.figma.com/api/mcp/asset/bb1e4ae0-2c93-4c88-8d53-4a8367628cda.svg"};
var WARUM=[
 ['Edge-AI','',WILLU.arm,'Disruptive Innovation','Lösungen, die andere für unmöglich halten. Von Embedded AI bis zu autonomen Systemen.'],
 ['ISO9001','',WILLU.mach,'Engineering Excellence','Defence-Grade-Engineering. Entwickelt und gefertigt in Deutschland.'],
 ['[0→1]','',WILLU.turb,'Speed','Von der Idee zur Serie – ohne Umwege. [client figure: time to prototype]'],
 ['[99,9%]','lt',WILLU.arm,'Reliability','Missionskritisch heißt: es muss funktionieren. [client figure: uptime / series quality]']];
var NUMS=[['2020','Gründung'],['42','Nationalitäten'],['5','Standorte in 4 Ländern'],['4','Märkte · eine Disziplin']];
var TEAM=[['Robîn Delipalta','CEO'],['Karsten Eggert','VP Global Operations'],['Dr. Johannes Martin','Head of Technology Development & New Ventures']];
var LOCS=[['Weil am Rhein','Deutschland · HQ','Am Kesselhaus 3'],['Stuttgart','Deutschland','Schelmenwasenstr. 32'],['Eindhoven','Niederlande','High Tech Campus 5'],['Basel / Füllinsdorf','Schweiz','Wölferstrasse 5'],['Zug / Cham','Schweiz','Niederwil 12a']];
var LOGO="https://www.figma.com/api/mcp/asset/265be04c-3236-480b-a0a6-c55cfb0dddd9.svg"; /* експорт Figma 1:1254 Imprint_Logo 113×24 · URL живе ~7 днів: попросити .svg у папку проєкту для інлайну */
var FLOGO="https://www.figma.com/api/mcp/asset/8507dfc1-9340-41d8-af9d-9bebca4bd13d.svg";
var FMARK="https://www.figma.com/api/mcp/asset/8994e604-0779-4471-8cb9-38d44b2735ab.svg";
var FCERTS=['TÜV SÜD ISO 9001','Charta der Vielfalt','Innovation Prize 2026','Great Place to Work 2025','GVP'];
/* Четверте поле — місто. Використовує тільки Standorte на Company (Figma 59:9083),
   де воно намальоване окремим накресленням; у футері й далі читаються лише a[0..2]. */
var ADDR=[
 ['Germany','HQ','Am Kesselhaus 3<br>79576 Weil am Rhein',''],
 ['Germany','','Schelmenwasenstr. 32<br>70567 Stuttgart','Stuttgart'],
 ['Switzerland','','Wölferstrasse 5<br>4414 Füllinsdorf','Füllinsdorf'],
 ['Switzerland','','Niederwil 12a<br>6330 Cham','Zug'],
 ['Netherlands','','AI Innovation Center High Tech Campus 5 5656 AE Eindhoven','Eindhoven']
];
var NEWS=[
 {t:'VINDEX besteht Truppenversuch: Interzeption in 5.000 Metern Höhe',d:'06.08.2026',k:'Pressemitteilung',r:'4'},
 {t:'NAXCON und Rheinmetall vereinbaren Zusammenarbeit bei Counter-UAS-Effektoren',d:'22.07.2026',k:'Pressemitteilung',r:'3'},
 {t:'LOIVI: Zielbestätigung und Wirkung in einem System',d:'09.07.2026',k:'Produkt',r:'6'},
 {t:'Edge-AI im Feldtest – wie NAXAS Freund und Feind in Echtzeit unterscheidet',d:'24.06.2026',k:'Engineering',r:'7'},
 {t:'Eurosatory 2026: NAXCON zeigt VINDEX in drei Konfigurationen',d:'11.06.2026',k:'Presse',r:'2'},
 {t:'Innovation Prize 2026 für die VINDEX-Plattform',d:'28.05.2026',k:'Unternehmen',r:'3'},
 {t:'Neue Fertigungslinie in Weil am Rhein nimmt den Betrieb auf',d:'14.05.2026',k:'Unternehmen',r:'5'},
 {t:'Warum wir simulieren, bevor gebaut wird',d:'30.04.2026',k:'Engineering',r:'8'},
 {t:'42 Nationalitäten, ein Team: NAXCON wächst auf fünf Standorte',d:'16.04.2026',k:'Unternehmen',r:'4'}
];
var ART_TOC=['Der Versuchsaufbau','Autonome Zielerkennung in der Höhe','Was die Wing-Konfiguration leistet','Nächste Schritte'];
var TRACKS=[['Studierende:r','Einstieg über Praktikum und Abschlussarbeit'],['Berufseinsteiger:in','Der erste Schritt in missionskritische Projekte'],['Expert:in','Verantwortung vom ersten Tag']];

/* ═════════ ХРОМ САЙТУ ═════════ */
var CFLAG="https://www.figma.com/api/mcp/asset/4f6edbe5-7480-4110-b0fb-c298cad779c9.png";
/* Три цифри · Figma 54:8534. Ширини колонок задані в макеті поіменно. */
var CNUMS=[['2020','Gründung','cn1'],['42','Nationalitäten','cn2'],['5','Standorte in 4 Ländern','cn3']];
var CENTRY=[
 ['Vertrieb &amp; Projekte','Produkte, Services, RFQ','info@naxcon.com'],
 ['Lieferanten','Beschaffung, Partnerschaft','[email]'],
 ['Presse &amp; Medien','Press Kit, Anfragen','media@naxcon.com'],
 ['Karriere','Stellen, Bewerbungen','[email]']];
/* Вакансії. Напрями й локації справжні — з SERVICES і ADDR; назви посад і рівні
   лишаються в дужках, доки клієнт не дасть реальний список. */
var JOBS=[
 ['UX/UI Designer:in (m/w/d)','Produktentwicklung','Weil am Rhein','Vollzeit'],
 ['[Position]','Künstliche Intelligenz','Stuttgart','Vollzeit'],
 ['[Position]','Regelungstechnik','Füllinsdorf','Vollzeit'],
 ['[Position]','Softwareentwicklung','Eindhoven','Vollzeit'],
 ['[Position]','Projektmanagement','Weil am Rhein','Teilzeit']];
/* Юридичні документи — чотири вкладки однієї сторінки.
   Текст написаний як робочий шаблон німецькою; конкретні реєстрові дані лишились
   у квадратних дужках. Перед публікацією документи має вичитати юрист —
   особливо розділи про експортний контроль і обробку даних кандидатів. */
var LEGAL=[
{tab:'Impressum',title:'Impressum',sub:'Angaben gemäß § 5 DDG',upd:'[00.00.2026]',blocks:[
 {h:'Diensteanbieter',p:['Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz), das seit Mai 2024 an die Stelle des TMG getreten ist.'],kv:[
   ['Firma','NAXCON GmbH'],
   ['Anschrift','Am Kesselhaus 3, 79576 Weil am Rhein, Deutschland'],
   ['Vertretungsberechtigt','[Vor- und Nachname der Geschäftsführung]'],
   ['Registergericht','[Amtsgericht Freiburg i. Br.]'],
   ['Handelsregisternummer','[HRB 000000]'],
   ['Umsatzsteuer-IdNr.','[DE000000000] gemäß § 27a UStG'],
   ['Telefon','+49 762 1916 4800'],
   ['E-Mail','info@naxcon.com']]},
 {h:'Verantwortlich für den Inhalt',p:[
   'Verantwortlich für journalistisch-redaktionelle Inhalte nach § 18 Abs. 2 MStV: [Vor- und Nachname], Am Kesselhaus 3, 79576 Weil am Rhein.']},
 {h:'Aufsicht und Genehmigungen',p:[
   'Die Herstellung und der Vertrieb bestimmter Erzeugnisse unterliegen dem Außenwirtschaftsrecht und dem Kriegswaffenkontrollgesetz. Zuständige Behörde: [Bundesamt für Wirtschaft und Ausfuhrkontrolle, Eschborn]. Erteilte Genehmigungen und Registrierungen: [Angabe].']},
 {h:'Streitbeilegung',p:[
   'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben.',
   'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.']},
 {h:'Haftung für Inhalte',p:[
   'Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
   'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt. Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.']},
 {h:'Haftung für Links',p:[
   'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar.',
   'Eine dauerhafte inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.']},
 {h:'Urheberrecht',p:[
   'Die durch uns erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors oder Erstellers.',
   'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Produktbezeichnungen und Logos sind Marken der NAXCON GmbH oder der jeweiligen Rechteinhaber.']}
]},

{tab:'Datenschutz',title:'Datenschutzerklärung',sub:'Verarbeitung personenbezogener Daten nach DSGVO',upd:'[00.00.2026]',blocks:[
 {h:'Verantwortlicher und Kontakt',kv:[
   ['Verantwortlicher','NAXCON GmbH, Am Kesselhaus 3, 79576 Weil am Rhein'],
   ['Vertreten durch','[Geschäftsführung]'],
   ['Datenschutzbeauftragte:r','[Name] · datenschutz@naxcon.com'],
   ['Aufsichtsbehörde','[Landesbeauftragte für den Datenschutz Baden-Württemberg]']]},
 {h:'Grundsätze',p:[
   'Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung dieser Website und unserer Leistungen erforderlich ist oder Sie eingewilligt haben. Eine Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a, b, c und f DSGVO.',
   'Wir geben Daten nicht an Dritte weiter, außer an Auftragsverarbeiter, die für uns tätig werden, oder wenn wir gesetzlich dazu verpflichtet sind.']},
 {h:'Server-Logfiles',p:[
   'Beim Aufruf dieser Website erhebt unser Hoster automatisch Daten, die Ihr Browser übermittelt: aufgerufene Seite, Datum und Uhrzeit, übertragene Datenmenge, Referrer, Browsertyp und Betriebssystem sowie die IP-Adresse in gekürzter Form.',
   'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und störungsfreien Betrieb. Die Daten werden nach [7] Tagen gelöscht.']},
 {h:'Kontaktaufnahme',p:[
   'Wenn Sie uns über das Formular oder per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage und für Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen Anfragen, sonst Art. 6 Abs. 1 lit. f DSGVO.',
   'Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.']},
 {h:'Bewerbungen',p:[
   'Übermittelte Bewerbungsunterlagen verarbeiten wir ausschließlich zur Durchführung des Bewerbungsverfahrens. Rechtsgrundlage ist § 26 Abs. 1 BDSG in Verbindung mit Art. 6 Abs. 1 lit. b DSGVO.',
   'Nach Abschluss des Verfahrens löschen wir die Unterlagen nach [sechs] Monaten. Haben Sie in die Aufnahme in unseren Bewerberpool eingewilligt, speichern wir Ihr Profil für [zwölf] Monate; diese Einwilligung können Sie jederzeit widerrufen.']},
 {h:'Einwilligung und Cookies',p:[
   'Technisch notwendige Cookies setzen wir auf Grundlage von § 25 Abs. 2 TDDDG ohne Einwilligung. Alle übrigen Cookies und vergleichbaren Technologien setzen wir erst nach Ihrer Einwilligung nach § 25 Abs. 1 TDDDG und Art. 6 Abs. 1 lit. a DSGVO.',
   'Details zu den einzelnen Cookies und den Widerruf finden Sie im Dokument Cookie-Einstellungen.']},
 {h:'Karten und externe Medien',p:[
   'Die Standortkarte auf der Kontaktseite wird erst geladen, nachdem Sie zugestimmt haben. Vorher wird keine Verbindung zum Anbieter aufgebaut und keine IP-Adresse übertragen. Anbieter: [Anbieter, Sitz].']},
 {h:'Empfänger und Drittland',p:[
   'Auftragsverarbeiter setzen wir nur nach Art. 28 DSGVO auf Grundlage eines Vertrags ein. Dazu zählen [Hosting], [E-Mail], [Bewerbermanagement].',
   'Sofern Daten in ein Drittland übermittelt werden, erfolgt dies nur bei Vorliegen eines Angemessenheitsbeschlusses oder auf Grundlage der Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c DSGVO.']},
 {h:'Ihre Rechte',list:[
   'Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)',
   'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
   'Löschung, soweit keine Aufbewahrungspflicht entgegensteht (Art. 17 DSGVO)',
   'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
   'Datenübertragbarkeit in einem gängigen Format (Art. 20 DSGVO)',
   'Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)',
   'Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)',
   'Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)']},
 {h:'Änderungen',p:[
   'Wir passen diese Erklärung an, wenn sich die Rechtslage oder unsere Verarbeitung ändert. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung; das Datum der letzten Änderung ist oben ausgewiesen.']}
]},

{tab:'Nutzungsbedingungen',title:'Nutzungsbedingungen',sub:'Bedingungen für die Nutzung dieser Website',upd:'[00.00.2026]',blocks:[
 {h:'Geltungsbereich',p:[
   'Diese Bedingungen gelten für die Nutzung der Website naxcon.com und aller darüber bereitgestellten Inhalte. Mit dem Aufruf der Seiten erkennen Sie diese Bedingungen an.',
   'Für Lieferungen und Leistungen gelten ausschließlich unsere gesonderten Vertragsbedingungen. Diese Website begründet kein Vertragsverhältnis.']},
 {h:'Kein Angebot',p:[
   'Die Darstellung von Produkten, Konfigurationen und Leistungen ist unverbindlich und stellt kein Angebot im Rechtssinne dar. Technische Angaben sind Richtwerte und können sich ohne Ankündigung ändern.',
   'Verbindlich sind ausschließlich schriftliche Angebote und Auftragsbestätigungen.']},
 {h:'Exportkontrolle',p:[
   'Teile unseres Portfolios unterliegen der Ausfuhrkontrolle nach der Verordnung (EU) 2021/821, dem Außenwirtschaftsgesetz und dem Kriegswaffenkontrollgesetz. Anfragen und Lieferungen setzen die Prüfung von Endverbleib, Endverwendung und Empfänger voraus.',
   'Informationen auf dieser Website richten sich nicht an Personen oder Stellen, denen die Nutzung nach anwendbarem Recht untersagt ist, insbesondere bei Sanktions- oder Embargolisten.']},
 {h:'Erlaubte Nutzung',list:[
   'Abruf und Anzeige der Inhalte zu Informationszwecken',
   'Speicherung und Ausdruck einzelner Seiten für den nicht kommerziellen Gebrauch',
   'Zitieren einzelner Passagen mit Quellenangabe']},
 {h:'Untersagte Nutzung',list:[
   'Automatisiertes Auslesen, Scraping oder Vervielfältigen ganzer Seitenbereiche',
   'Umgehung technischer Schutzmaßnahmen und Zugangsbeschränkungen',
   'Einsatz von Inhalten für Trainingszwecke maschineller Lernverfahren ohne unsere schriftliche Zustimmung',
   'Handlungen, die den Betrieb der Website beeinträchtigen oder die Sicherheit gefährden',
   'Nutzung der Kontaktwege für Werbung ohne vorherige Aufforderung']},
 {h:'Verfügbarkeit',p:[
   'Wir bemühen uns um einen störungsfreien Betrieb, schulden jedoch keine bestimmte Verfügbarkeit. Wartungsarbeiten, Weiterentwicklungen und Störungen können den Zugang zeitweise einschränken.']},
 {h:'Haftung',p:[
   'Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper und Gesundheit. Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht und begrenzt auf den vorhersehbaren, vertragstypischen Schaden.',
   'Eine weitergehende Haftung ist ausgeschlossen. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.']},
 {h:'Änderungen',p:[
   'Wir können diese Bedingungen anpassen. Maßgeblich ist die zum Zeitpunkt der Nutzung veröffentlichte Fassung.']},
 {h:'Recht und Gerichtsstand',p:[
   'Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand für Kaufleute ist [Freiburg i. Br.]. Zwingende Verbraucherschutzvorschriften des Aufenthaltsstaates bleiben unberührt.']}
]},

{tab:'Cookies',title:'Cookie-Einstellungen',sub:'Auswahl jederzeit widerrufbar',upd:'[00.00.2026]',blocks:[
 {h:'Was wir einsetzen',p:[
   'Cookies sind kleine Textdateien, die Ihr Browser speichert. Wir nutzen sie, damit die Seite funktioniert, und — nach Ihrer Einwilligung — um zu verstehen, welche Inhalte gelesen werden.',
   'Rechtsgrundlage für notwendige Cookies ist § 25 Abs. 2 Nr. 2 TDDDG. Alle übrigen setzen wir erst nach Ihrer Einwilligung nach § 25 Abs. 1 TDDDG.']},
 {h:'Kategorien',table:{
   head:['Kategorie','Zweck','Anbieter','Speicherdauer'],
   rows:[
    ['Notwendig','Sitzung, Sicherheit, Spracheinstellung, Speicherung Ihrer Cookie-Auswahl','NAXCON','[Sitzung bis 12 Monate]'],
    ['Statistik','Aggregierte Reichweitenmessung ohne Personenbezug','[Anbieter]','[14 Monate]'],
    ['Karten','Laden der Standortkarte auf der Kontaktseite','[Anbieter]','[6 Monate]'],
    ['Externe Medien','Eingebettete Videos und Datenblätter','[Anbieter]','[6 Monate]']]}},
 {h:'Einwilligung widerrufen',list:[
   'Über die Schaltfläche Cookie-Einstellungen im Seitenfuß — die Auswahl lässt sich jederzeit ändern',
   'Durch Löschen der Cookies in den Einstellungen Ihres Browsers',
   'Durch eine formlose Nachricht an datenschutz@naxcon.com']},
 {h:'Browser-Einstellungen',p:[
   'Sie können Cookies in Ihrem Browser generell blockieren oder nach jedem Schließen löschen. Notwendige Cookies sind davon ebenfalls betroffen; Teile der Seite funktionieren dann eingeschränkt.']},
 {h:'Keine Weitergabe',p:[
   'Wir verkaufen keine Daten und binden keine Werbenetzwerke ein. Statistikdaten werden ausschließlich in aggregierter Form ausgewertet.']}
]}];

/* ── KARRIERE · Figma 125:16674 ── */
var JOB={
  t:'UX/UI Designer:in (m/w/d)',
  dep:'Produktentwicklung', loc:'Weil am Rhein · hybrid', typ:'Vollzeit · unbefristet',
  start:'ab sofort oder nach Vereinbarung', ref:'NAX-PD-024', team:'Produktentwicklung · 9 Personen',
  lead:'Du gestaltest die Bedienoberflächen für Systeme, bei denen eine Fehlbedienung keine Option ist. Bodenkontrollstation, Missionsplanung, Telemetrie — dort, wo unter Zeitdruck entschieden wird.',
  about:['In der Produktentwicklung sitzt Design nicht am Ende der Kette, sondern zwischen Systems Engineering und den Menschen, die unsere Systeme im Feld bedienen. Du arbeitest an Oberflächen, die bei Sonnenlicht, mit Handschuhen und bei knapper Bandbreite funktionieren müssen.',
         'Wir suchen niemanden, der Screens hübsch macht. Wir suchen jemanden, der Zustände, Fehlerfälle und Entscheidungswege durchdenkt und sie so aufschreibt, dass ein Team sie bauen kann.'],
  tasks:[
   ['Oberflächen entwerfen','Bodenkontrollstation, Missionsplanung und Telemetrie — vom Konzept bis zum abnahmefertigen Design.'],
   ['Nutzerforschung','Interviews und Beobachtung mit Operator:innen; deine Erkenntnisse landen im Backlog, nicht in einer Schublade.'],
   ['Design-System','Aufbau und Pflege unserer Bibliothek in Figma, gemeinsam mit dem Frontend-Team.'],
   ['Usability-Tests','Unter realistischen Bedingungen: Handschuhe, Sonnenlicht, Zeitdruck, unterbrochene Verbindung.'],
   ['Zusammenarbeit','Enge Abstimmung mit Systems Engineering, Software und Produktmanagement.'],
   ['Dokumentation','Interaktionsmuster und Zustandslogik für sicherheitskritische Abläufe nachvollziehbar festhalten.']],
  profile:[
   'Mindestens drei Jahre UX/UI für komplexe Anwendungen — Industrie, Medizin, Luftfahrt oder Leitstände',
   'Sicherer Umgang mit Figma inklusive Komponenten, Varianten und Variablen',
   'Erfahrung mit datendichten Oberflächen und vielen Systemzuständen',
   'Deutsch und Englisch verhandlungssicher',
   'Bereitschaft zu gelegentlichen Feldtests an unseren Standorten'],
  nice:['Design-Systeme','Motion Design','HTML/CSS-Grundlagen','ISO 9241','Prototyping in Code','Luft- und Raumfahrt','Sicherheitsüberprüfung'],
  offer:[
   ['Verantwortung ab Tag eins','Deine Entscheidungen gehen in Serie, nicht in eine Präsentation.'],
   ['Hybrid, nicht auf dem Papier','Zwei Tage vor Ort, der Rest frei einteilbar innerhalb DE, CH und NL.'],
   ['Ausstattung und Weiterbildung','Geräte nach Wahl, jährliches Budget für Konferenzen und Kurse.'],
   ['Absicherung','30 Tage Urlaub, betriebliche Altersvorsorge, Zuschuss zur Mobilität.']],
  steps:[
   ['Bewerbung','Lebenslauf und Portfolio genügen. Anschreiben ist optional — wir lesen lieber deine Arbeit.'],
   ['Kennenlernen','30 Minuten mit dem Recruiting: Rolle, Rahmen, offene Fragen.'],
   ['Fachgespräch','90 Minuten Portfolio-Review mit dem Produktteam. Zwei Projekte im Detail.'],
   ['Team-Tag','Ein halber Tag vor Ort in Weil am Rhein. Danach entscheiden beide Seiten.']]
};
var NFILT=[['Alle',69],['News',12],['Pressemitteilung',4],['Auszeichnungen',33],
           ['Einblicke',16],['Technologien',2],['Entwicklung',4]];
/* Дві картки «Im Fokus» · Figma 59:13193 — перші дві новини з анонсами */
var NLEAD=[
 'Im Truppenversuch hat der autonome Counter-UAS-Interceptor VINDEX Ziele in 5.000 Metern Höhe erkannt und abgefangen. Getestet wurde die Wing-Konfiguration der modularen Plattform.',
 'Beide Unternehmen prüfen die gemeinsame Integration von Counter-UAS-Effektoren in bestehende Wirkketten.'];
/* rel=true — варіант для «Ähnliche Artikel» (Figma 73:15285): мета йде рядком
   над заголовком, стрілки немає; у «Im Fokus» мета стоїть збоку і є стрілка. */
var FACTS=[
 ['2020','Gegründet aus dem Anspruch, Lösungen zu bauen, die andere für unmöglich halten.'],
 ['42','42 Nationalitäten. Unterschiedliche Menschen. Gemeinsame Ziele.'],
 ['5','5 Standorte in 4 Ländern. Von Deutschland für die Welt.'],
 ['4','Vier Branchen. Eine Disziplin: Verteidigung, Automotive, Halbleiter, KI.']];
var factIdx=-1;
