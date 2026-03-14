export interface Category {
  id: string;
  name: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
}

export interface Dependency {
  sourceId: string;
  targetId: string;
}

export interface GraphData {
  categories: Category[];
  technologies: Technology[];
  dependencies: Dependency[];
}

const rawData = `
1. Grundlagenwissenschaft (40)
Mathematik Grundlagen
Fortgeschrittene Mathematik
Numerische Simulation
Statistik
Physik Grundlagen
Klassische Mechanik
Festkörperphysik
Thermodynamik
Quantenmechanik
Elektromagnetismus
Optik Grundlagen
Chemie Grundlagen
Organische Chemie
Anorganische Chemie
Physikalische Chemie
Biologie Grundlagen
Molekularbiologie
Genetik Grundlagen
Materialwissenschaft Grundlagen
Werkstoffprüfung
Strukturmechanik
Fluidmechanik
Strömungsmechanik
Geologie Grundlagen
Rohstoffanalyse
Metallurgie Grundlagen
Legierungsdesign
Korrosionswissenschaft
Hochtemperaturmaterialien
Nanomaterialien Grundlagen
Computational Science
Algorithmen Grundlagen
Informationssysteme
Signalverarbeitung Grundlagen
Elektronik Grundlagen
Digitale Systeme
Automatisierung Grundlagen
Systemtheorie
Technische Modellierung
Komplexe Systeme

2. Materialien (60)
Stahlproduktion
Hochfester Stahl
Titanlegierungen
Aluminiumlegierungen
Magnesiumlegierungen
Superlegierungen
Keramikmaterialien
Verbundstoffe Grundlagen
Carbonfaserverbund
Kevlarverbund
Radarabsorbierende Materialien
Hitzeschilde
Ablative Materialien
Stealth Beschichtungen
Strukturverbundflugzeugmaterial
Panzerstahl
Reaktive Panzerung
Verbundpanzerung
Keramikpanzerung
Explosivreaktive Panzerung
Nanokomposite
Metallmatrixkomposite
Selbstheilende Materialien
Hochtemperaturkeramik
Graphenmaterialien
Elektrische Leiterwerkstoffe
Supraleiter Grundlagen
Supraleiter Hochtemperatur
Batteriematerialien
Festkörperbatterien
Lithiumtechnologie
Wasserstoffspeicher
Kryogene Materialien
Hochdruckbehälter
Strukturverbund Schiffbau
Leichtbau Fahrzeugbau
Strukturverstärkung
Materialermüdung Analyse
Hochgeschwindigkeitsmaterialien
Hochdruckturbinenmaterial
Wärmeisolationsmaterial
Strahlungsresistente Materialien
Uranmetallurgie
Plutoniumverarbeitung
Satellitenstrukturmaterial
Weltraumresistente Beschichtung
Mikroelektronikmaterialien
Halbleiterfertigung
Siliziumprozesse
Photonische Materialien
Laseroptische Materialien
Sensoroptiken
Akustikmaterialien
Schallabsorption Materialien
Hydrophobe Beschichtungen
Korrosionsschutz Marine
Extremdruckmaterialien
Raketentankmaterialien

3. Energie (50)
Dampfmaschinen
Verbrennungsmotoren
Dieselmotoren
Gasturbinen
Hochleistungsturbinen
Jettriebwerke Grundlagen
Nachbrennertechnologie
Elektrische Energieerzeugung
Generatoren
Hochspannungssysteme
Stromverteilung
Batterietechnologie
Festkörperbatterien
Superkondensatoren
Brennstoffzellen
Wasserstoffenergie
Solarenergie
Windenergie
Nuklearenergie Grundlagen
Kernspaltung
Urananreicherung
Reaktordesign
Nuklearer Schiffsantrieb
Nuklearer Flugzeugträgerantrieb
Thoriumreaktoren
Fusionsforschung
Antimaterieforschung
Elektromagnetische Energie
Railgun Energieversorgung
Laserenergieversorgung
Hochleistungskühlung
Thermisches Management
Kryotechnik
Induktionsenergie
Mikrowellenenergie
Plasmaenergie
Energiespeichersysteme
Netzstabilisierung
Energieeffizienzsysteme
Smart Grid Systeme
Industrielle Energieoptimierung
Notstromsysteme
Militärische Energiesysteme
Raumfahrtsolarzellen
Satellitenenergieversorgung
Orbitalenergieübertragung
Laserenergieübertragung
Weltraumreaktoren
Deep Space Energie

4. Informatik (60)
Computerarchitektur
Mikroprozessoren
Parallelrechner
Hochleistungsrechner
Cloud Computing
Verteilte Systeme
Echtzeitbetriebssysteme
Embedded Systeme
Signalverarbeitung
Maschinelles Lernen
Neuronale Netze
Computer Vision
Spracherkennung
Autonome Systeme
Entscheidungssysteme
Simulation KI
Strategische KI
Datenanalyse
Big Data Systeme
Cybersecurity Grundlagen
Kryptographie Grundlagen
Militärkryptographie
Quantenkryptographie
Netzwerkarchitektur
Satellitennetzwerke
Militärische Kommunikationsnetze
Datensicherungssysteme
Informationsfusion
Zielerkennung KI
Autonome Steuerung
Robotiksteuerung
Schwarmalgorithmen
Navigationsalgorithmen
Ballistikberechnung
Radarverarbeitung
Sonarverarbeitung
Bildverarbeitung
Sensordatenfusion
Cockpitassistenz KI
Pilotenassistenzsysteme
Missionsplanungssysteme
Kampfmanagementsysteme
Logistik KI
Industrieautomatisierung KI
Produktionsoptimierung KI
Predictive Maintenance
Autonome Drohnensteuerung
Autonome Fahrzeugsteuerung
Autonome U-Boote
Schwarmdrohnensteuerung
Militärische Entscheidungs KI
Kriegsführung Simulation
Strategische Simulation
Orbitalmechanik Simulation
Raketenflug Simulation
Flugzeugdesign Simulation
Schiffdesign Simulation

5. Landfahrzeuge (80)
Fahrzeugchassis
Federungssysteme
Geländefahrwerke
Raupenfahrwerke
Radfahrwerke
Panzergetriebe
Dieselantriebe Militär
Hybridantriebe Militär
Elektroantrieb Fahrzeuge
Panzerkanonen
Autolader Systeme
Feuerleitsysteme
Panzeroptiken
Stabilisierte Geschütze
Panzerzielsysteme
Aktive Schutzsysteme
Hardkill Systeme
Softkill Systeme
Panzerabwehrsysteme
Reaktive Panzerung
Verbundpanzerung
Schwerer Kampfpanzer
Mittlerer Kampfpanzer
Leichter Panzer
Infanteriekampffahrzeug
Radpanzer
Artilleriesysteme
Selbstfahrlafetten
Raketenartillerie
Militärlogistikfahrzeuge
Militärbrückenleger
Minenräumfahrzeuge
Pionierfahrzeuge
Aufklärungsfahrzeuge
Militärdrohnenfahrzeuge
Autonome Panzer
Unbemannte Bodenfahrzeuge
Fahrzeugkommunikation
Gefechtsnetzwerke
Panzerbataillonsteuerung
Militärnavigation Fahrzeuge
Geländeanalyse Systeme
Militärische Fahrzeugdiagnose
Fahrzeugwartungssysteme
Modulare Fahrzeugplattform
Amphibische Fahrzeuge
Arktisfahrzeuge
Wüstenfahrzeuge
Tarnfahrzeuge
Stealthfahrzeuge Land
Schwere Transportfahrzeuge
Raketenfahrzeuge
Mobile Radarsysteme
Mobile Raketenwerfer
Fahrzeugabwehrsysteme
Fahrzeuglaserabwehr
Elektronische Panzerabwehr
Panzerabwehrraketenplattform
Drohnenabwehrfahrzeuge
Elektromagnetische Panzerabwehr
Panzerkampf KI
Fahrzeugformationssteuerung
Militärkonvoisteuerung
Fahrzeugtarnsysteme
Aktive Tarnsysteme
Infrarottarnung Fahrzeuge
Radarabsorption Fahrzeuge
Signaturreduktion Fahrzeuge
Panzerakustikreduktion
Panzerthermische Tarnung
Panzerüberlebenssysteme
Notfallreparatursysteme
Panzerüberwachungssysteme
Fahrzeugfernsteuerung
Panzertrainingssimulation

6. Luftfahrt (120)
Aerodynamik Grundlagen
Flugzeugstruktur
Flügelkonstruktion
Hochleistungsflügel
Deltaflügel
Canardkonfiguration
Schwenkflügel
Laminarflügel
Winglets
Boundary Layer Control
STOL Technologie
VTOL Technologie
VSTOL Systeme
Flugsteuerung
Fly by Wire
Digitale Flugsteuerung
Autopilot Systeme
Flugstabilitätssysteme
Schubvektorsteuerung
Supermanövrierbarkeit
Überschallflug
Hyperschallflug
Stealth Aerodynamik
Geometrische Tarnung
Infrarottarnung Flugzeuge
Radarabsorbierende Beschichtung
Luftbetankung
Trägerstartsysteme
Katapultstart
Fangseilsysteme
EMALS Katapult
Carrier Landing Systeme
Schleudersitze
Pilotenschutzsysteme
Druckkabinen
Sauerstoffsysteme
Helikopterrotoren
Koaxialrotoren
Tiltrotor Technologie
Schwere Transportflugzeuge
Strategische Bomber
Taktische Bomber
Jagdflugzeuge Generation 3
Jagdflugzeuge Generation 4
Jagdflugzeuge Generation 4.5
Jagdflugzeuge Generation 5
Stealthbomber
AWACS Systeme
Tankflugzeuge
Transportflugzeuge
Seeüberwachungsflugzeuge
Elektronische Kampfflugzeuge
Drohnenflugzeuge
Langstreckendrohnen
Stealthdrohnen
Hyperschalldrohnen
Luftkampfradar
AESA Radar
Luftkampf KI
BVR Luftkampf
WVR Luftkampf
Raketenabwehr Flugzeuge
Laserabwehr Flugzeuge
Flugzeug Selbstschutz
Cockpitdigitalisierung
Helmvisiersysteme
Pilotassistenz
Missioncomputer
Sensorfusion
Zielerkennung Systeme
Datenlink Systeme
Satellitenkommunikation Flugzeuge
Flugzeugwartungssysteme
Predictive Wartung Flugzeuge
Flugzeugdiagnose
Struktursensorik
Flugzeuggesundheitsmonitor
Flottenmanagementsysteme
Luftkampfsimulation
Flugtrainingssysteme
Virtuelle Pilotenausbildung
Autonome Kampfflugzeuge
Schwarmkampfflugzeuge
Unbemannte Bomber
Unbemannte Tanker
Hyperschallbomber
Orbitalflugzeuge
Weltraumflugzeuge
Raketenflugzeuge
Atmosphärischer Wiedereintritt
Hitzeschilde Flugzeuge
Hyperschallmaterialien
Strahltriebwerk Optimierung
Adaptive Triebwerke
Variable Cycle Engines
Scramjettriebwerke
Ramjettriebwerke
Luftatmende Raketen
Langstreckenflugzeuge
Ultralangstreckenflugzeuge
Langstreckenüberwachung
Elektronische Aufklärung
SIGINT Flugzeuge
ELINT Flugzeuge
COMINT Flugzeuge
MASINT Flugzeuge
Multispektralsensoren
Hyperspektralsensoren
Zielverfolgungssysteme
Zielpriorisierungssysteme
Autonome Zielwahl
KI Luftkampfsteuerung
Strategische Luftkriegsführung

7. Marine (90)
Schiffbau Grundlagen
Hydrodynamik
Schiffsstruktur
Stahlschiffbau
Verbundschiffbau
Korrosionsschutz Marine
Dieselantrieb Schiffe
Gasturbinen Schiffe
Nuklearantrieb Schiffe
Propellerdesign
Pumpjet Antrieb
U Boot Hydrodynamik
U Boot Tarnung
Akustische Signaturreduktion
Sonarsysteme
Aktives Sonar
Passives Sonar
Sonarbojen
Magnetdetektion
U Boot Jagd Systeme
Torpedos
Schwere Torpedos
Leichte Torpedos
Antischiffsraketen
Schiffsabwehrraketen
CIWS Systeme
Schiffslaserabwehr
Schiffsraketenabwehr
Aegis Kampfsystem
Marine Radar
Phased Array Radar
AESA Marine Radar
Marine Kommunikationssysteme
Schiffsdatennetzwerke
Flugdecksysteme
Trägeroperationen
Trägerflugzeuge Integration
Marine Drohnen
U Boot Drohnen
Unterwasserfahrzeuge
Autonome U Boote
Schwarm Unterwasserdrohnen
Marine Aufklärungssysteme
Maritime Satellitenüberwachung
Flottenmanagementsysteme
Marine Logistik
Marine Reparatursysteme
Modulare Kriegsschiffe
Stealth Kriegsschiffe
Signaturreduktion Schiffe
Infrarottarnung Schiffe
Radarabsorption Schiffe
Schiffsakustikoptimierung
Marine KI Gefechtsführung
U Boot KI Navigation
Torpedosteuerung KI
Schiffsverteidigung KI
Flottenkoordinierung KI
Seeschlacht Simulation
U Boot Krieg Simulation
Trägerkampf Simulation
Strategische Seemacht
Amphibische Kriegführung
Landungsboote
Amphibische Fahrzeuge
Marine Infanterie Systeme
Küstenverteidigungssysteme
Seeminen
Minenabwehrsysteme
Marine Sensorfusion
Unterwasserkommunikation
Laserkommunikation Unterwasser
Satellitenkommunikation Marine
Globales Flottennetzwerk
Maritime Überwachungsnetzwerke
Ozeanische Sensornetzwerke
Unterwasserüberwachungsnetze
Strategische Marineplanung
Globale Seelogistik
Militärische Seeherrschaft

8. Raketen (70)
Ballistik Grundlagen
Raketentriebwerke
Feststoffraketen
Flüssigtreibstoffraketen
Hybridraketen
Mehrstufenraketen
ICBM Systeme
SLBM Systeme
Marschflugkörper
Hyperschallraketen
Antischiffsraketen
Luftabwehrraketen
Raketenlenkung
Trägheitsnavigation
Satellitennavigation Raketen
Terrain Navigation Raketen
Radarzielsuche
Infrarotzielsuche
Laserzielsuche
KI Raketensteuerung
Raketenabwehrsysteme
ABM Systeme
Hyperschallabwehr
Boostphase Abwehr
Terminalphase Abwehr
Raketenwarnsysteme
Frühwarnradar
Satellitenfrühwarnsysteme
Raketenstartplattformen
Mobile Raketenplattformen
U Boot Raketenstart
Flugzeug Raketenstart
Orbitalraketen
Satellitenstartsysteme
Wiedereintrittstechnologie
Hitzeschilde Raketen
Hyperschallmaterialien
Raketenstrukturdesign
Treibstoffchemie
Raketentanksysteme
Raketenstabilisierung
Flugsteuerung Raketen
Raketen Telemetrie
Raketen Tracking Systeme
Raketen Simulation
Hyperschall Flugsteuerung
Orbitaltransferbahnen
Weltraumnavigation
Deep Space Navigation
Interplanetare Navigation
Orbitalplattformen
Orbitalverteidigung
Orbitalwaffen
Orbitalüberwachung
Orbital KI Steuerung
Strategische Raketenkräfte
Globale Raketenabschreckung
Militärische Raumfahrtstrategie

9. Chemie
Organische Chemie
Anorganische Chemie
Polymerchemie
Petrochemie
Biochemie
Elektrochemie
Kolloidchemie
Industrielle Chemie
Photochemie
Umweltchemie
Materialchemie
Oberflächenchemie
Nanochemie
Katalyse
Reaktionstechnik
Chemische Trennverfahren
Gaschemie
Flüssigphasenchemie
Festkörperchemie
Supramolekulare Chemie
Chemische Simulation
Chemische Prozessoptimierung
Chemische Sicherheitssysteme
Hochtemperaturchemie
Plasmachemie

10. Sensorik
Temperatursensoren
Drucksensoren
Beschleunigungssensoren
Gyroskope
Magnetsensoren
Näherungssensoren
Infrarotsensoren
Ultraschallsensoren
Radarsensoren
Lidarsensoren
Kamerasensoren
Biosensoren
Gassensoren
Chemische Sensoren
Feuchtigkeitssensoren
Lichtintensitätssensoren
Spektroskopische Sensoren
Quanten-Sensorik
Multispektrale Sensorik
Hyperspektrale Sensorik
Bewegungssensoren
Positionssensoren
Vibrationssensoren
Strahlungssensoren
Gravitationssensoren

11. Waffen
Ballistische Waffen
Automatische Waffen
Präzisionsgewehre
Artilleriesysteme
Raketenwerfer
Panzerabwehrwaffen
Flugabwehrsysteme
Marschflugkörper
Ballistische Raketen
Hyperschallwaffen
Laserwaffen
Elektromagnetische Railguns
Mikrowellenwaffen
Drohnenwaffen
Autonome Waffensysteme
Cyberwaffen
Elektronische Kriegsführung
Tarntechnologie
Militärische KI-Zielsysteme
Smart-Munition
Cluster-Munition
EMP-Waffen
Plasmawaffen
Energiewaffen
Nicht-tödliche Waffen

12. Nuklear
Urananreicherung
Kernspaltungstechnologie
Kernfusionsforschung
Reaktordesign
Brutreaktoren
Thoriumreaktoren
Schnelle Neutronenreaktoren
Kernbrennstoffkreislauf
Nukleare Abfalllagerung
Strahlungsschutz
Neutronenphysik
Nukleare Materialanalyse
Reaktorsicherheitssysteme
Nukleare Simulation
Fusionsreaktoren
Tokamak-Reaktoren
Stellarator-Reaktoren
Tritiumproduktion
Nukleare Medizin
Radioisotopenproduktion

13. KI
Maschinelles Lernen
Deep Learning
Reinforcement Learning
Computer Vision
Sprachverarbeitung
Wissensrepräsentation
Expertensysteme
Generative Modelle
Transformer-Netzwerke
Multimodale KI
Autonome Systeme
KI-Planungssysteme
KI-Simulation
Robotik-KI
Entscheidungsalgorithmen
Anomalieerkennung
KI-Optimierung
Edge-KI
Federated Learning
Explainable AI
KI-Sicherheit
KI-Ethiksysteme
Selbstlernende Systeme
Neuro-Symbolische KI
KI-Agentensysteme

14. Kommunikation
Funkkommunikation
Satellitenkommunikation
Glasfaserkommunikation
Laserkommunikation
Quantenkommunikation
5G Netzwerke
6G Netzwerke
Mesh-Netzwerke
Ad-hoc-Netzwerke
Militärische Kommunikation
Verschlüsselte Kommunikation
Kryptographie
Post-Quanten-Kryptographie
Datenkompression
Signalverarbeitung
Netzwerkprotokolle
Internetinfrastruktur
Unterseekabel
Hochfrequenzkommunikation
IoT-Kommunikation
Fahrzeug-zu-Fahrzeug Kommunikation
Interplanetare Kommunikation

15. Raumfahrt
Raketentechnologie
Flüssigtreibstoffraketen
Feststoffraketen
Ionenantriebe
Plasmaantriebe
Nukleare Raketenantriebe
Solarsegler
Wiederverwendbare Raketen
Orbitalmechanik
Satellitenbau
Raumstationen
Mondbasen
Marsmissionen
Asteroidenbergbau
Weltraumteleskope
Planetare Landefahrzeuge
Raumsonden
Lebenserhaltungssysteme
Strahlungsschutz im All
Raumfahrtrobotik
Raumfahrtnavigation
Interstellare Antriebe
Terraforming-Technologien

16. Industrieproduktion
Automatisierte Fertigung
Robotikproduktion
CNC-Bearbeitung
3D-Druck
Additive Fertigung Metall
Additive Fertigung Kunststoff
Mikroproduktion
Nanofabrikation
Produktionsplanungssysteme
Industrielle Sensorik
Qualitätskontrolle KI
Digitale Zwillinge
Smart Factory
Industrielle IoT Systeme
Supply-Chain-Optimierung
Produktionssimulation
Hochpräzisionsfertigung
Werkzeugmaschinenbau
Materialverarbeitung
Metallurgie
Kunststoffverarbeitung
Glasproduktion
Halbleiterfertigung
Batteriefertigung
Wasserstoffproduktion
`;

const rawDeps = `
Numerische Simulation -> Mathematik Grundlagen, Computerarchitektur
Thermodynamik -> Physik Grundlagen, Chemie Grundlagen
Fluidmechanik -> Physik Grundlagen, Mathematik Grundlagen
Materialwissenschaft Grundlagen -> Chemie Grundlagen, Physik Grundlagen, Festkörperphysik
Elektronik Grundlagen -> Physik Grundlagen, Elektromagnetismus
Automatisierung Grundlagen -> Systemtheorie, Elektronik Grundlagen
Hochfester Stahl -> Stahlproduktion, Materialwissenschaft Grundlagen, Thermodynamik
Titanlegierungen -> Metallurgie Grundlagen, Hochtemperaturmaterialien, Chemie Grundlagen
Carbonfaserverbund -> Verbundstoffe Grundlagen, Organische Chemie, Materialwissenschaft Grundlagen
Hitzeschilde -> Hochtemperaturkeramik, Thermodynamik, Materialwissenschaft Grundlagen
Halbleiterfertigung -> Elektronik Grundlagen, Chemie Grundlagen, Reinraumtechnologie
Supraleiter Hochtemperatur -> Supraleiter Grundlagen, Kryogene Materialien, Physikalische Chemie
Verbrennungsmotoren -> Thermodynamik, Fluidmechanik, Stahlproduktion
Gasturbinen -> Verbrennungsmotoren, Hochtemperaturmaterialien, Fluidmechanik
Jettriebwerke Grundlagen -> Gasturbinen, Aerodynamik Grundlagen, Hochdruckbehälter
Batterietechnologie -> Elektrochemie, Elektronik Grundlagen, Chemie Grundlagen
Festkörperbatterien -> Batterietechnologie, Batteriematerialien, Materialwissenschaft Grundlagen
Kernspaltung -> Quantenmechanik, Physik Grundlagen, Hochdruckbehälter, Strahlungsschutz
Fusionsforschung -> Kernspaltung, Plasmaenergie, Hochtemperaturmaterialien, Supraleiter Hochtemperatur
Mikroprozessoren -> Computerarchitektur, Halbleiterfertigung, Elektronik Grundlagen
Echtzeitbetriebssysteme -> Computerarchitektur, Algorithmen Grundlagen
Maschinelles Lernen -> Statistik, Mathematik Grundlagen, Hochleistungsrechner
Neuronale Netze -> Maschinelles Lernen, Parallelrechner, Datenanalyse
Autonome Systeme -> Maschinelles Lernen, Sensorik, Robotiksteuerung
Kryptographie Grundlagen -> Mathematik Grundlagen, Informationssysteme
Quantenkryptographie -> Kryptographie Grundlagen, Quantenmechanik, Photonische Materialien
Fahrzeugchassis -> Stahlproduktion, Strukturmechanik, Verbrennungsmotoren
Panzergetriebe -> Fahrzeugchassis, Metallurgie Grundlagen, Maschinenelemente
Panzerkanonen -> Ballistik Grundlagen, Hochfester Stahl, Chemie Grundlagen
Feuerleitsysteme -> Elektronik Grundlagen, Optik Grundlagen, Ballistikberechnung
Verbundpanzerung -> Verbundstoffe Grundlagen, Keramikmaterialien, Panzerstahl
Aktive Schutzsysteme -> Radarsensoren, Mikroprozessoren, Raketenlenkung
Autonome Panzer -> Unbemannte Bodenfahrzeuge, KI Luftkampfsteuerung, Sensorfusion
Flugzeugstruktur -> Aerodynamik Grundlagen, Aluminiumlegierungen, Strukturmechanik
Strahltriebwerk Optimierung -> Jettriebwerke Grundlagen, Hochtemperaturmaterialien, Fluidmechanik
Fly by Wire -> Digitale Flugsteuerung, Echtzeitbetriebssysteme, Sensorik
AESA Radar -> Elektronik Grundlagen, Signalverarbeitung, Halbleiterfertigung
Stealth Beschichtungen -> Radarabsorbierende Materialien, Oberflächenchemie, Aerodynamik Grundlagen
Jagdflugzeuge Generation 5 -> Stealth Aerodynamik, Schubvektorsteuerung, Sensorfusion, Verbundstoffe Grundlagen
Hyperschallflug -> Hyperschallmaterialien, Scramjettriebwerke, Thermisches Management
Schiffbau Grundlagen -> Stahlproduktion, Hydrodynamik, Korrosionsschutz Marine
Nuklearantrieb Schiffe -> Kernspaltung, Schiffbau Grundlagen, Hochdruckbehälter
Sonarsysteme -> Akustikmaterialien, Signalverarbeitung Grundlagen, Physik Grundlagen
Aegis Kampfsystem -> Marine Radar, Datenanalyse, Raketenabwehrsysteme
U Boot Tarnung -> Akustische Signaturreduktion, Verbundschiffbau, Schiffsakustikoptimierung
Raketentriebwerke -> Thermodynamik, Hochdruckbehälter, Treibstoffchemie
Trägheitsnavigation -> Gyroskope, Beschleunigungssensoren, Mathematik Grundlagen
ICBM Systeme -> Ballistische Raketen, Mehrstufenraketen, Satellitennavigation Raketen
Hitzeschilde Raketen -> Hochtemperaturkeramik, Wiedereintrittstechnologie, Materialwissenschaft Grundlagen
Orbitalmechanik -> Physik Grundlagen, Mathematik Grundlagen, Numerische Simulation
Lebenserhaltungssysteme -> Chemie Grundlagen, Drucksensoren, Biologie Grundlagen
Polymerchemie -> Organische Chemie, Materialwissenschaft Grundlagen
Industrielle Chemie -> Reaktionstechnik, Chemische Sicherheitssysteme
Automatisierte Fertigung -> Automatisierung Grundlagen, Robotiksteuerung, Sensorik
3D-Druck -> Automatisierte Fertigung, Materialverarbeitung, Technische Modellierung
Halbleiterfertigung -> Chemie Grundlagen, Physik Grundlagen, Industrieproduktion
Radarsensoren -> Elektromagnetismus, Signalverarbeitung Grundlagen, Elektronik Grundlagen
Infrarotsensoren -> Optik Grundlagen, Thermodynamik, Halbleiterfertigung
Ballistische Waffen -> Ballistik Grundlagen, Metallurgie Grundlagen, Chemie Grundlagen
Laserwaffen -> Laseroptische Materialien, Hochleistungskühlung, Optik Grundlagen
Elektromagnetische Railguns -> Elektromagnetismus, Supraleiter Grundlagen, Hochspannungssysteme
Militärische KI-Zielsysteme -> Computer Vision, Maschinelles Lernen, Zielerkennung Systeme
Urananreicherung -> Chemische Trennverfahren, Nukleare Materialanalyse, Industrielle Chemie
Reaktordesign -> Kernspaltung, Thermodynamik, Strahlungsschutz
Nukleare Abfalllagerung -> Geologie Grundlagen, Materialwissenschaft Grundlagen, Strahlungsschutz
Funkkommunikation -> Elektromagnetismus, Signalverarbeitung Grundlagen
Satellitenkommunikation -> Funkkommunikation, Orbitalmechanik, Verstärkertechnik
Quantenkommunikation -> Quantenmechanik, Photonische Materialien, Kryptographie Grundlagen
5G Netzwerke -> Netzwerkarchitektur, Hochfrequenzkommunikation, Datenkompression
`;

function makeId(name: string) {
  return name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_');
}

export function generateInitialGraph(): GraphData {
  const lines = rawData.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const categories: Category[] = [];
  const technologies: Technology[] = [];
  
  let currentCategory = '';
  let catIndex = 0;
  let itemsInCategory = 0;

  const existingDocNames = new Set<string>();

  for (const line of lines) {
    if (line.match(/^\d+\.\s+(.+)/)) {
      let name = line.replace(/^\d+\.\s+/, '').replace(/\s*\(\d+\)$/, '');
      currentCategory = name.trim();
      categories.push({ id: makeId(currentCategory), name: currentCategory });
      catIndex++;
      itemsInCategory = 0;
    } else {
      // It's a technology
      if (!currentCategory) continue;
      
      const techName = line.trim();
      const tId = makeId(techName);
      
      if (existingDocNames.has(tId)) {
          continue; // skip duplicate technologies that appear in multiple categories
      }
      existingDocNames.add(tId);
      
      // Calculate a simple grid layout
      const x = catIndex * 350 - 200;
      const y = itemsInCategory * 60 + 100;

      technologies.push({
        id: tId,
        name: techName,
        category: makeId(currentCategory),
        x,
        y
      });
      itemsInCategory++;
    }
  }

  // Parse dependencies
  const dependencies: Dependency[] = [];
  const depLines = rawDeps.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  // Add dummy technologies for implicit/missing ones mentioned in deps (e.g., Verstärkertechnik)

  for (const line of depLines) {
    const parts = line.split('->');
    if (parts.length !== 2) continue;
    const targetName = parts[0].trim();
    const sourceNames = parts[1].split(',').map(s => s.trim());
    
    const tId = makeId(targetName);

    // Add missing targets
    if (!existingDocNames.has(tId)) {
        existingDocNames.add(tId);
        technologies.push({
            id: tId,
            name: targetName,
            category: categories[0].id,
            x: 0, y: 0
        });
    }

    for (const sourceName of sourceNames) {
      const sId = makeId(sourceName);
      // Add missing sources
      if (!existingDocNames.has(sId)) {
          existingDocNames.add(sId);
          technologies.push({
              id: sId,
              name: sourceName,
              category: categories[0].id,
              x: 0, y: 0
          });
      }

      dependencies.push({
        sourceId: makeId(sourceName),
        targetId: tId
      });
    }
  }

  return { categories, technologies, dependencies };
}
