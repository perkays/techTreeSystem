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

export const initialJsonData = {
  "categories": [
    {
      "id": "grundlagenwissenschaft",
      "name": "Grundlagenwissenschaft"
    },
    {
      "id": "materialien",
      "name": "Materialien"
    },
    {
      "id": "energie",
      "name": "Energie"
    },
    {
      "id": "informatik",
      "name": "Informatik"
    },
    {
      "id": "landfahrzeuge",
      "name": "Landfahrzeuge"
    },
    {
      "id": "luftfahrt",
      "name": "Luftfahrt"
    },
    {
      "id": "marine",
      "name": "Marine"
    },
    {
      "id": "raketen",
      "name": "Raketen"
    },
    {
      "id": "chemie",
      "name": "Chemie"
    },
    {
      "id": "sensorik",
      "name": "Sensorik"
    },
    {
      "id": "waffen",
      "name": "Waffen"
    },
    {
      "id": "nuklear",
      "name": "Nuklear"
    },
    {
      "id": "ki",
      "name": "KI"
    },
    {
      "id": "kommunikation",
      "name": "Kommunikation"
    },
    {
      "id": "raumfahrt",
      "name": "Raumfahrt"
    },
    {
      "id": "industrieproduktion",
      "name": "Industrieproduktion"
    }
  ],
  "technologies": [
    {
      "id": "mathematik_grundlagen",
      "name": "Mathematik Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 100,
      "prerequisites": []
    },
    {
      "id": "fortgeschrittene_mathematik",
      "name": "Fortgeschrittene Mathematik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 160,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Logik"
      ]
    },
    {
      "id": "numerische_simulation",
      "name": "Numerische Simulation",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 220,
      "prerequisites": [
        "Fortgeschrittene Mathematik",
        "Computerarchitektur",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "statistik",
      "name": "Statistik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 280,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Logik"
      ]
    },
    {
      "id": "physik_grundlagen",
      "name": "Physik Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 340,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Logik"
      ]
    },
    {
      "id": "klassische_mechanik",
      "name": "Klassische Mechanik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 400,
      "prerequisites": [
        "Physik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "festk_rperphysik",
      "name": "Festkörperphysik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 460,
      "prerequisites": [
        "Quantenmechanik",
        "Klassische Mechanik",
        "Thermodynamik",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "thermodynamik",
      "name": "Thermodynamik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 520,
      "prerequisites": [
        "Klassische Mechanik",
        "Physik Grundlagen"
      ]
    },
    {
      "id": "quantenmechanik",
      "name": "Quantenmechanik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 580,
      "prerequisites": [
        "Fortgeschrittene Mathematik",
        "Klassische Mechanik",
        "Mathematik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "elektromagnetismus",
      "name": "Elektromagnetismus",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 640,
      "prerequisites": [
        "Fortgeschrittene Mathematik",
        "Physik Grundlagen"
      ]
    },
    {
      "id": "optik_grundlagen",
      "name": "Optik Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 700,
      "prerequisites": [
        "Physik Grundlagen",
        "Mathematik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "chemie_grundlagen",
      "name": "Chemie Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 760,
      "prerequisites": [
        "Physik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "organische_chemie",
      "name": "Organische Chemie",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 820,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen"
      ]
    },
    {
      "id": "anorganische_chemie",
      "name": "Anorganische Chemie",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 880,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Thermodynamik"
      ]
    },
    {
      "id": "physikalische_chemie",
      "name": "Physikalische Chemie",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 940,
      "prerequisites": [
        "Quantenmechanik",
        "Chemie Grundlagen",
        "Thermodynamik"
      ]
    },
    {
      "id": "biologie_grundlagen",
      "name": "Biologie Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1000,
      "prerequisites": [
        "Chemie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "molekularbiologie",
      "name": "Molekularbiologie",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1060,
      "prerequisites": [
        "Genetik Grundlagen",
        "Chemie Grundlagen",
        "Biologie Grundlagen",
        "Physikalische Chemie"
      ]
    },
    {
      "id": "genetik_grundlagen",
      "name": "Genetik Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1120,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Organische Chemie",
        "Biologie Grundlagen",
        "Statistik"
      ]
    },
    {
      "id": "materialwissenschaft_grundlagen",
      "name": "Materialwissenschaft Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1180,
      "prerequisites": [
        "Anorganische Chemie",
        "Festkörperphysik",
        "Mathematik Grundlagen",
        "Physikalische Chemie"
      ]
    },
    {
      "id": "werkstoffpr_fung",
      "name": "Werkstoffprüfung",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1240,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Statistik"
      ]
    },
    {
      "id": "strukturmechanik",
      "name": "Strukturmechanik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1300,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "fluidmechanik",
      "name": "Fluidmechanik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1360,
      "prerequisites": [
        "Fortgeschrittene Mathematik",
        "Klassische Mechanik",
        "Thermodynamik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "str_mungsmechanik",
      "name": "Strömungsmechanik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1420,
      "prerequisites": [
        "Klassische Mechanik",
        "Mathematik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "geologie_grundlagen",
      "name": "Geologie Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1480,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "rohstoffanalyse",
      "name": "Rohstoffanalyse",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1540,
      "prerequisites": [
        "Chemie Grundlagen",
        "Geologie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "metallurgie_grundlagen",
      "name": "Metallurgie Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1600,
      "prerequisites": [
        "Anorganische Chemie",
        "Materialwissenschaft Grundlagen",
        "Thermodynamik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "legierungsdesign",
      "name": "Legierungsdesign",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1660,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Festkörperphysik",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "korrosionswissenschaft",
      "name": "Korrosionswissenschaft",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1720,
      "prerequisites": [
        "Metallurgie Grundlagen",
        "Physikalische Chemie"
      ]
    },
    {
      "id": "hochtemperaturmaterialien",
      "name": "Hochtemperaturmaterialien",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1780,
      "prerequisites": [
        "Thermodynamik",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "nanomaterialien_grundlagen",
      "name": "Nanomaterialien Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1840,
      "prerequisites": [
        "Quantenmechanik",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "computational_science",
      "name": "Computational Science",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1900,
      "prerequisites": [
        "Numerische Simulation",
        "Algorithmen Grundlagen",
        "Komplexe Systeme"
      ]
    },
    {
      "id": "algorithmen_grundlagen",
      "name": "Algorithmen Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 1960,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "informationssysteme",
      "name": "Informationssysteme",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2020,
      "prerequisites": [
        "Informatik Grundlagen",
        "Datenbanken",
        "Mathematik Grundlagen",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "signalverarbeitung_grundlagen",
      "name": "Signalverarbeitung Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2080,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "elektronik_grundlagen",
      "name": "Elektronik Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2140,
      "prerequisites": [
        "Festkörperphysik",
        "Mathematik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "digitale_systeme",
      "name": "Digitale Systeme",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2200,
      "prerequisites": [
        "Netzwerktechnik",
        "Elektronik Grundlagen",
        "Boolesche Algebra"
      ]
    },
    {
      "id": "automatisierung_grundlagen",
      "name": "Automatisierung Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2260,
      "prerequisites": [
        "Regelungstechnik",
        "Mathematik Grundlagen",
        "Systemtheorie"
      ]
    },
    {
      "id": "systemtheorie",
      "name": "Systemtheorie",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2320,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Komplexe Systeme"
      ]
    },
    {
      "id": "technische_modellierung",
      "name": "Technische Modellierung",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2380,
      "prerequisites": [
        "Strukturmechanik",
        "Numerische Simulation"
      ]
    },
    {
      "id": "komplexe_systeme",
      "name": "Komplexe Systeme",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2440,
      "prerequisites": [
        "Fortgeschrittene Mathematik",
        "Statistik"
      ]
    },
    {
      "id": "stahlproduktion",
      "name": "Stahlproduktion",
      "category": "materialien",
      "x": 500,
      "y": 100,
      "prerequisites": [
        "Halbleitertechnik",
        "Rohstoffanalyse",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen",
        "Verbundstoffe Grundlagen"
      ]
    },
    {
      "id": "hochfester_stahl",
      "name": "Hochfester Stahl",
      "category": "materialien",
      "x": 500,
      "y": 160,
      "prerequisites": [
        "Aerogele",
        "Legierungsdesign",
        "Materialwissenschaft Grundlagen",
        "Reaktive Panzerung"
      ]
    },
    {
      "id": "titanlegierungen",
      "name": "Titanlegierungen",
      "category": "materialien",
      "x": 500,
      "y": 220,
      "prerequisites": [
        "Kryogene Materialien",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen",
        "Hochtemperaturmaterialien",
        "Kohlenstoffnanoröhren"
      ]
    },
    {
      "id": "aluminiumlegierungen",
      "name": "Aluminiumlegierungen",
      "category": "materialien",
      "x": 500,
      "y": 280,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Radarabsorbierende Materialien",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "magnesiumlegierungen",
      "name": "Magnesiumlegierungen",
      "category": "materialien",
      "x": 500,
      "y": 340,
      "prerequisites": [
        "Flüssigkristalle",
        "Kryogene Materialien",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "superlegierungen",
      "name": "Superlegierungen",
      "category": "materialien",
      "x": 500,
      "y": 400,
      "prerequisites": [
        "Laseroptische Materialien",
        "Legierungsdesign",
        "Hochfester Stahl",
        "Titanlegierungen",
        "Materialwissenschaft Grundlagen",
        "Hochtemperaturmaterialien"
      ]
    },
    {
      "id": "keramikmaterialien",
      "name": "Keramikmaterialien",
      "category": "materialien",
      "x": 500,
      "y": 460,
      "prerequisites": [
        "Metamaterialien",
        "Titanlegierungen",
        "Materialwissenschaft Grundlagen",
        "Physikalische Chemie"
      ]
    },
    {
      "id": "verbundstoffe_grundlagen",
      "name": "Verbundstoffe Grundlagen",
      "category": "materialien",
      "x": 500,
      "y": 520,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Organische Chemie"
      ]
    },
    {
      "id": "carbonfaserverbund",
      "name": "Carbonfaserverbund",
      "category": "materialien",
      "x": 500,
      "y": 580,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Polymerchemie",
        "Verbundstoffe Grundlagen"
      ]
    },
    {
      "id": "kevlarverbund",
      "name": "Kevlarverbund",
      "category": "materialien",
      "x": 500,
      "y": 640,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Polymerchemie",
        "Verbundstoffe Grundlagen"
      ]
    },
    {
      "id": "radarabsorbierende_materialien",
      "name": "Radarabsorbierende Materialien",
      "category": "materialien",
      "x": 500,
      "y": 700,
      "prerequisites": [
        "Elektromagnetismus",
        "Materialwissenschaft Grundlagen",
        "Antennentechnik",
        "Signalverarbeitung Grundlagen",
        "Lithiumtechnologie",
        "Verbundstoffe Grundlagen"
      ]
    },
    {
      "id": "hitzeschilde",
      "name": "Hitzeschilde",
      "category": "materialien",
      "x": 500,
      "y": 760,
      "prerequisites": [
        "Thermodynamik",
        "Ablative Materialien",
        "Mathematik Grundlagen",
        "Optoelektronik",
        "Materialwissenschaft Grundlagen",
        "Strukturverbund Schiffbau"
      ]
    },
    {
      "id": "ablative_materialien",
      "name": "Ablative Materialien",
      "category": "materialien",
      "x": 500,
      "y": 820,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Keramikmaterialien",
        "Polymerchemie"
      ]
    },
    {
      "id": "stealth_beschichtungen",
      "name": "Stealth Beschichtungen",
      "category": "materialien",
      "x": 500,
      "y": 880,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Radarabsorbierende Materialien",
        "Oberflächenchemie",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "strukturverbundflugzeugmaterial",
      "name": "Strukturverbundflugzeugmaterial",
      "category": "materialien",
      "x": 500,
      "y": 940,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Leichtbau Fahrzeugbau",
        "Leichtmetall",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "panzerstahl",
      "name": "Panzerstahl",
      "category": "materialien",
      "x": 500,
      "y": 1000,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Legierungsdesign",
        "Hochfester Stahl",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialermüdung Analyse"
      ]
    },
    {
      "id": "reaktive_panzerung",
      "name": "Reaktive Panzerung",
      "category": "materialien",
      "x": 500,
      "y": 1060,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Mathematik Grundlagen",
        "Explosivstoffchemie",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Kevlarverbund"
      ]
    },
    {
      "id": "verbundpanzerung",
      "name": "Verbundpanzerung",
      "category": "materialien",
      "x": 500,
      "y": 1120,
      "prerequisites": [
        "Keramikpanzerung",
        "Fahrzeugmechanik",
        "Panzerstahl",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Halbleiterphysik"
      ]
    },
    {
      "id": "keramikpanzerung",
      "name": "Keramikpanzerung",
      "category": "materialien",
      "x": 500,
      "y": 1180,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Hochfester Stahl",
        "Hochdruckbehälter",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Keramikmaterialien"
      ]
    },
    {
      "id": "explosivreaktive_panzerung",
      "name": "Explosivreaktive Panzerung",
      "category": "materialien",
      "x": 500,
      "y": 1240,
      "prerequisites": [
        "Aerogele",
        "Fahrzeugmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Keramikmaterialien",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "nanokomposite",
      "name": "Nanokomposite",
      "category": "materialien",
      "x": 500,
      "y": 1300,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Verbundstoffe Grundlagen",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "metallmatrixkomposite",
      "name": "Metallmatrixkomposite",
      "category": "materialien",
      "x": 500,
      "y": 1360,
      "prerequisites": [
        "Metallurgie Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Supraleiter Hochtemperatur",
        "Verbundstoffe Grundlagen"
      ]
    },
    {
      "id": "selbstheilende_materialien",
      "name": "Selbstheilende Materialien",
      "category": "materialien",
      "x": 500,
      "y": 1420,
      "prerequisites": [
        "Polymerchemie",
        "Materialwissenschaft Grundlagen",
        "Kevlarverbund",
        "Nanomaterialien Grundlagen",
        "Verbundstoffe Grundlagen"
      ]
    },
    {
      "id": "hochtemperaturkeramik",
      "name": "Hochtemperaturkeramik",
      "category": "materialien",
      "x": 500,
      "y": 1480,
      "prerequisites": [
        "Thermodynamik",
        "Batteriematerialien",
        "Keramikmaterialien",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "graphenmaterialien",
      "name": "Graphenmaterialien",
      "category": "materialien",
      "x": 500,
      "y": 1540,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Kohlenstoffchemie",
        "Materialwissenschaft Grundlagen",
        "Halbleiterphysik",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "elektrische_leiterwerkstoffe",
      "name": "Elektrische Leiterwerkstoffe",
      "category": "materialien",
      "x": 500,
      "y": 1600,
      "prerequisites": [
        "Strukturverstärkung",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Halbleiterfertigung",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "supraleiter_grundlagen",
      "name": "Supraleiter Grundlagen",
      "category": "materialien",
      "x": 500,
      "y": 1660,
      "prerequisites": [
        "Thermodynamik",
        "Festkörperphysik",
        "Leichtbau Fahrzeugbau",
        "Materialwissenschaft Grundlagen",
        "Kohlenstoffnanoröhren"
      ]
    },
    {
      "id": "supraleiter_hochtemperatur",
      "name": "Supraleiter Hochtemperatur",
      "category": "materialien",
      "x": 500,
      "y": 1720,
      "prerequisites": [
        "Keramikmaterialien",
        "Materialwissenschaft Grundlagen",
        "Supraleiter Grundlagen"
      ]
    },
    {
      "id": "batteriematerialien",
      "name": "Batteriematerialien",
      "category": "materialien",
      "x": 500,
      "y": 1780,
      "prerequisites": [
        "Festkörperelektrolyte",
        "Plutoniumverarbeitung",
        "Mathematik Grundlagen",
        "Elektrochemie",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "festk_rperbatterien",
      "name": "Festkörperbatterien",
      "category": "materialien",
      "x": 500,
      "y": 1840,
      "prerequisites": [
        "Festkörperphysik",
        "Festkörperelektrolyte",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Batteriematerialien"
      ]
    },
    {
      "id": "lithiumtechnologie",
      "name": "Lithiumtechnologie",
      "category": "materialien",
      "x": 500,
      "y": 1900,
      "prerequisites": [
        "Anorganische Chemie",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "wasserstoffspeicher",
      "name": "Wasserstoffspeicher",
      "category": "materialien",
      "x": 500,
      "y": 1960,
      "prerequisites": [
        "Hochdruckbehälter",
        "Nanokomposite",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "kryogene_materialien",
      "name": "Kryogene Materialien",
      "category": "materialien",
      "x": 500,
      "y": 2020,
      "prerequisites": [
        "Thermodynamik",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "hochdruckbeh_lter",
      "name": "Hochdruckbehälter",
      "category": "materialien",
      "x": 500,
      "y": 2080,
      "prerequisites": [
        "Strukturmechanik",
        "Hochfester Stahl",
        "Mathematik Grundlagen",
        "Graphenproduktion",
        "Titanlegierungen",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "strukturverbund_schiffbau",
      "name": "Strukturverbund Schiffbau",
      "category": "materialien",
      "x": 500,
      "y": 2140,
      "prerequisites": [
        "Korrosionswissenschaft",
        "Stahlproduktion",
        "Navigation",
        "Materialwissenschaft Grundlagen",
        "Carbonfaserverbund",
        "Hydrodynamik"
      ]
    },
    {
      "id": "leichtbau_fahrzeugbau",
      "name": "Leichtbau Fahrzeugbau",
      "category": "materialien",
      "x": 500,
      "y": 2200,
      "prerequisites": [
        "Magnesiumlegierungen",
        "Materialwissenschaft Grundlagen",
        "Verbundstoffe Grundlagen",
        "Aluminiumlegierungen"
      ]
    },
    {
      "id": "strukturverst_rkung",
      "name": "Strukturverstärkung",
      "category": "materialien",
      "x": 500,
      "y": 2260,
      "prerequisites": [
        "Strukturmechanik",
        "Metallmatrixkomposite",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Carbonfaserverbund"
      ]
    },
    {
      "id": "materialerm_dung_analyse",
      "name": "Materialermüdung Analyse",
      "category": "materialien",
      "x": 500,
      "y": 2320,
      "prerequisites": [
        "Akustikmaterialien",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Reaktive Panzerung",
        "Werkstoffprüfung"
      ]
    },
    {
      "id": "hochgeschwindigkeitsmaterialien",
      "name": "Hochgeschwindigkeitsmaterialien",
      "category": "materialien",
      "x": 500,
      "y": 2380,
      "prerequisites": [
        "Hitzeschilde",
        "Titanlegierungen",
        "Materialwissenschaft Grundlagen",
        "Keramikmaterialien",
        "Superlegierungen",
        "Panzerstahl"
      ]
    },
    {
      "id": "hochdruckturbinenmaterial",
      "name": "Hochdruckturbinenmaterial",
      "category": "materialien",
      "x": 500,
      "y": 2440,
      "prerequisites": [
        "Quantenpunkt-Materialien",
        "Legierungsdesign",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Halbleiterphysik",
        "Hochtemperaturkeramik"
      ]
    },
    {
      "id": "w_rmeisolationsmaterial",
      "name": "Wärmeisolationsmaterial",
      "category": "materialien",
      "x": 500,
      "y": 2500,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Keramikmaterialien",
        "Kryogene Materialien"
      ]
    },
    {
      "id": "strahlungsresistente_materialien",
      "name": "Strahlungsresistente Materialien",
      "category": "materialien",
      "x": 500,
      "y": 2560,
      "prerequisites": [
        "Festkörperphysik",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Nanomaterialien Grundlagen",
        "Hochtemperaturkeramik",
        "Kupferverarbeitung"
      ]
    },
    {
      "id": "uranmetallurgie",
      "name": "Uranmetallurgie",
      "category": "materialien",
      "x": 500,
      "y": 2620,
      "prerequisites": [
        "Wärmeisolationsmaterial",
        "Aktinidenchemie",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Weltraumresistente Beschichtung",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "plutoniumverarbeitung",
      "name": "Plutoniumverarbeitung",
      "category": "materialien",
      "x": 500,
      "y": 2680,
      "prerequisites": [
        "Uranmetallurgie",
        "Materialwissenschaft Grundlagen",
        "Strahlenschutz Grundlagen"
      ]
    },
    {
      "id": "satellitenstrukturmaterial",
      "name": "Satellitenstrukturmaterial",
      "category": "materialien",
      "x": 500,
      "y": 2740,
      "prerequisites": [
        "Telemetrie",
        "Leichtbau Fahrzeugbau",
        "Satellitenbau",
        "Materialwissenschaft Grundlagen",
        "Strahlungsresistente Materialien",
        "Carbonfaserverbund"
      ]
    },
    {
      "id": "weltraumresistente_beschichtung",
      "name": "Weltraumresistente Beschichtung",
      "category": "materialien",
      "x": 500,
      "y": 2800,
      "prerequisites": [
        "Siliziumprozesse",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen",
        "Astronomie"
      ]
    },
    {
      "id": "mikroelektronikmaterialien",
      "name": "Mikroelektronikmaterialien",
      "category": "materialien",
      "x": 500,
      "y": 2860,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Halbleiterfertigung",
        "Siliziumprozesse",
        "Festkörperphysik"
      ]
    },
    {
      "id": "halbleiterfertigung",
      "name": "Halbleiterfertigung",
      "category": "materialien",
      "x": 500,
      "y": 2920,
      "prerequisites": [
        "Festkörperphysik",
        "Chemie Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "siliziumprozesse",
      "name": "Siliziumprozesse",
      "category": "materialien",
      "x": 500,
      "y": 2980,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Halbleiterfertigung",
        "Anorganische Chemie",
        "Festkörperphysik"
      ]
    },
    {
      "id": "photonische_materialien",
      "name": "Photonische Materialien",
      "category": "materialien",
      "x": 500,
      "y": 3040,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "laseroptische_materialien",
      "name": "Laseroptische Materialien",
      "category": "materialien",
      "x": 500,
      "y": 3100,
      "prerequisites": [
        "Halbleitertechnik",
        "Elektromagnetismus",
        "Lasertechnologie",
        "Optik Grundlagen",
        "Metamaterialien",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "sensoroptiken",
      "name": "Sensoroptiken",
      "category": "materialien",
      "x": 500,
      "y": 3160,
      "prerequisites": [
        "Hochtemperatursupraleiter",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen",
        "Titanlegierungen"
      ]
    },
    {
      "id": "akustikmaterialien",
      "name": "Akustikmaterialien",
      "category": "materialien",
      "x": 500,
      "y": 3220,
      "prerequisites": [
        "Titanlegierungen",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "schallabsorption_materialien",
      "name": "Schallabsorption Materialien",
      "category": "materialien",
      "x": 500,
      "y": 3280,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Akustikmaterialien",
        "Verbundstoffe Grundlagen",
        "Strukturmechanik"
      ]
    },
    {
      "id": "hydrophobe_beschichtungen",
      "name": "Hydrophobe Beschichtungen",
      "category": "materialien",
      "x": 500,
      "y": 3340,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Organische Chemie",
        "Oberflächenchemie",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "korrosionsschutz_marine",
      "name": "Korrosionsschutz Marine",
      "category": "materialien",
      "x": 500,
      "y": 3400,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Korrosionswissenschaft",
        "Anorganische Chemie",
        "Physikalische Chemie"
      ]
    },
    {
      "id": "extremdruckmaterialien",
      "name": "Extremdruckmaterialien",
      "category": "materialien",
      "x": 500,
      "y": 3460,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Hochdruckbehälter",
        "Metallurgie Grundlagen",
        "Strukturmechanik"
      ]
    },
    {
      "id": "raketentankmaterialien",
      "name": "Raketentankmaterialien",
      "category": "materialien",
      "x": 500,
      "y": 3520,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "dampfmaschinen",
      "name": "Dampfmaschinen",
      "category": "energie",
      "x": 850,
      "y": 100,
      "prerequisites": [
        "Thermodynamik",
        "Klassische Mechanik",
        "Metallurgie Grundlagen",
        "Stahlproduktion",
        "Automatisierung Grundlagen"
      ]
    },
    {
      "id": "verbrennungsmotoren",
      "name": "Verbrennungsmotoren",
      "category": "energie",
      "x": 850,
      "y": 160,
      "prerequisites": [
        "Thermodynamik",
        "Stahlproduktion",
        "Klassische Mechanik",
        "Dampfmaschinen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "dieselmotoren",
      "name": "Dieselmotoren",
      "category": "energie",
      "x": 850,
      "y": 220,
      "prerequisites": [
        "Verbrennungsmotoren",
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "gasturbinen",
      "name": "Gasturbinen",
      "category": "energie",
      "x": 850,
      "y": 280,
      "prerequisites": [
        "Thermodynamik",
        "Fluidmechanik",
        "Hochtemperaturmaterialien",
        "Verbrennungsmotoren",
        "Superlegierungen",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "hochleistungsturbinen",
      "name": "Hochleistungsturbinen",
      "category": "energie",
      "x": 850,
      "y": 340,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Gasturbinen",
        "Superlegierungen",
        "Hochtemperaturmaterialien"
      ]
    },
    {
      "id": "jettriebwerke_grundlagen",
      "name": "Jettriebwerke Grundlagen",
      "category": "energie",
      "x": 850,
      "y": 400,
      "prerequisites": [
        "Thermodynamik",
        "Gasturbinen",
        "Aerodynamik Grundlagen",
        "Mathematik Grundlagen",
        "Hochdruckbehälter"
      ]
    },
    {
      "id": "nachbrennertechnologie",
      "name": "Nachbrennertechnologie",
      "category": "energie",
      "x": 850,
      "y": 460,
      "prerequisites": [
        "Thermodynamik",
        "Jettriebwerke Grundlagen",
        "Gasturbinen",
        "Superlegierungen"
      ]
    },
    {
      "id": "elektrische_energieerzeugung",
      "name": "Elektrische Energieerzeugung",
      "category": "energie",
      "x": 850,
      "y": 520,
      "prerequisites": [
        "Thermodynamik",
        "Generatoren",
        "Elektromagnetismus",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "generatoren",
      "name": "Generatoren",
      "category": "energie",
      "x": 850,
      "y": 580,
      "prerequisites": [
        "Thermodynamik",
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Elektrische Leiterwerkstoffe"
      ]
    },
    {
      "id": "hochspannungssysteme",
      "name": "Hochspannungssysteme",
      "category": "energie",
      "x": 850,
      "y": 640,
      "prerequisites": [
        "Generatoren",
        "Elektrotechnik Grundlagen",
        "Elektromagnetismus",
        "Thermodynamik"
      ]
    },
    {
      "id": "stromverteilung",
      "name": "Stromverteilung",
      "category": "energie",
      "x": 850,
      "y": 700,
      "prerequisites": [
        "Generatoren",
        "Hochspannungssysteme",
        "Elektrotechnik Grundlagen",
        "Thermodynamik"
      ]
    },
    {
      "id": "batterietechnologie",
      "name": "Batterietechnologie",
      "category": "energie",
      "x": 850,
      "y": 760,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Elektrochemie",
        "Batteriematerialien",
        "Lithiumtechnologie",
        "Stromverteilung"
      ]
    },
    {
      "id": "superkondensatoren",
      "name": "Superkondensatoren",
      "category": "energie",
      "x": 850,
      "y": 820,
      "prerequisites": [
        "Thermodynamik",
        "Magnetohydrodynamik",
        "Mathematik Grundlagen",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "brennstoffzellen",
      "name": "Brennstoffzellen",
      "category": "energie",
      "x": 850,
      "y": 880,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Elektrochemie",
        "Wasserstoffspeicher",
        "Dieselmotoren"
      ]
    },
    {
      "id": "wasserstoffenergie",
      "name": "Wasserstoffenergie",
      "category": "energie",
      "x": 850,
      "y": 940,
      "prerequisites": [
        "Thermodynamik",
        "Brennstoffzellen",
        "Wasserstoffspeicher",
        "Elektrochemie"
      ]
    },
    {
      "id": "solarenergie",
      "name": "Solarenergie",
      "category": "energie",
      "x": 850,
      "y": 1000,
      "prerequisites": [
        "Thermodynamik",
        "Solarzellen",
        "Halbleitertechnik",
        "Elektrochemie",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "windenergie",
      "name": "Windenergie",
      "category": "energie",
      "x": 850,
      "y": 1060,
      "prerequisites": [
        "Thermodynamik",
        "Strömungsmechanik",
        "Generatoren",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "nuklearenergie_grundlagen",
      "name": "Nuklearenergie Grundlagen",
      "category": "energie",
      "x": 850,
      "y": 1120,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Kernphysik",
        "Kernspaltung",
        "Reaktordesign"
      ]
    },
    {
      "id": "kernspaltung",
      "name": "Kernspaltung",
      "category": "energie",
      "x": 850,
      "y": 1180,
      "prerequisites": [
        "Kernphysik",
        "Quantenmechanik",
        "Thermodynamik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "urananreicherung",
      "name": "Urananreicherung",
      "category": "energie",
      "x": 850,
      "y": 1240,
      "prerequisites": [
        "Thermodynamik",
        "Nukleare Materialanalyse",
        "Mathematik Grundlagen",
        "Chemische Trennverfahren",
        "Industrielle Chemie",
        "Kernphysik"
      ]
    },
    {
      "id": "reaktordesign",
      "name": "Reaktordesign",
      "category": "energie",
      "x": 850,
      "y": 1300,
      "prerequisites": [
        "Thermodynamik",
        "Kernphysik",
        "Materialwissenschaft Grundlagen",
        "Strukturmechanik"
      ]
    },
    {
      "id": "nuklearer_schiffsantrieb",
      "name": "Nuklearer Schiffsantrieb",
      "category": "energie",
      "x": 850,
      "y": 1360,
      "prerequisites": [
        "Thermodynamik",
        "Kernspaltung",
        "Stahlproduktion",
        "Netzstabilisierung",
        "Navigation",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "nuklearer_flugzeugtr_gerantrieb",
      "name": "Nuklearer Flugzeugträgerantrieb",
      "category": "energie",
      "x": 850,
      "y": 1420,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Leichtmetall",
        "Kernphysik",
        "Quantenmechanik"
      ]
    },
    {
      "id": "thoriumreaktoren",
      "name": "Thoriumreaktoren",
      "category": "energie",
      "x": 850,
      "y": 1480,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Kernspaltung",
        "Nuklearenergie Grundlagen",
        "Reaktordesign"
      ]
    },
    {
      "id": "fusionsforschung",
      "name": "Fusionsforschung",
      "category": "energie",
      "x": 850,
      "y": 1540,
      "prerequisites": [
        "Thermodynamik",
        "Nuklearenergie Grundlagen",
        "Supraleiter Hochtemperatur",
        "Plasmaenergie",
        "Mathematik Grundlagen",
        "Hochtemperaturmaterialien"
      ]
    },
    {
      "id": "antimaterieforschung",
      "name": "Antimaterieforschung",
      "category": "energie",
      "x": 850,
      "y": 1600,
      "prerequisites": [
        "Thermodynamik",
        "Kernphysik",
        "Fusionsforschung",
        "Quantenmechanik"
      ]
    },
    {
      "id": "elektromagnetische_energie",
      "name": "Elektromagnetische Energie",
      "category": "energie",
      "x": 850,
      "y": 1660,
      "prerequisites": [
        "Thermodynamik",
        "Geothermische Kraftwerke",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "railgun_energieversorgung",
      "name": "Railgun Energieversorgung",
      "category": "energie",
      "x": 850,
      "y": 1720,
      "prerequisites": [
        "Thermodynamik",
        "Elektrotechnik Grundlagen",
        "Mathematik Grundlagen",
        "Nuklearenergie Grundlagen"
      ]
    },
    {
      "id": "laserenergieversorgung",
      "name": "Laserenergieversorgung",
      "category": "energie",
      "x": 850,
      "y": 1780,
      "prerequisites": [
        "Thermodynamik",
        "Elektromagnetismus",
        "Lasertechnologie",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Magnetohydrodynamik"
      ]
    },
    {
      "id": "hochleistungsk_hlung",
      "name": "Hochleistungskühlung",
      "category": "energie",
      "x": 850,
      "y": 1840,
      "prerequisites": [
        "Thermodynamik",
        "Kryogene Materialien",
        "Wärmeisolationsmaterial",
        "Festkörperphysik"
      ]
    },
    {
      "id": "thermisches_management",
      "name": "Thermisches Management",
      "category": "energie",
      "x": 850,
      "y": 1900,
      "prerequisites": [
        "Thermodynamik",
        "Kryotechnik"
      ]
    },
    {
      "id": "kryotechnik",
      "name": "Kryotechnik",
      "category": "energie",
      "x": 850,
      "y": 1960,
      "prerequisites": [
        "Thermodynamik",
        "Erneuerbare Energien (Netz)",
        "Physik Grundlagen",
        "Mathematik Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "induktionsenergie",
      "name": "Induktionsenergie",
      "category": "energie",
      "x": 850,
      "y": 2020,
      "prerequisites": [
        "Thermodynamik",
        "Gezeitenkraftwerke",
        "Stromverteilung",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "mikrowellenenergie",
      "name": "Mikrowellenenergie",
      "category": "energie",
      "x": 850,
      "y": 2080,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "plasmaenergie",
      "name": "Plasmaenergie",
      "category": "energie",
      "x": 850,
      "y": 2140,
      "prerequisites": [
        "Thermodynamik",
        "Laserenergieversorgung"
      ]
    },
    {
      "id": "energiespeichersysteme",
      "name": "Energiespeichersysteme",
      "category": "energie",
      "x": 850,
      "y": 2200,
      "prerequisites": [
        "Thermodynamik",
        "Informatik Grundlagen",
        "Satellitenenergieversorgung",
        "Raumfahrtsolarzellen",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "netzstabilisierung",
      "name": "Netzstabilisierung",
      "category": "energie",
      "x": 850,
      "y": 2260,
      "prerequisites": [
        "Thermodynamik",
        "Windenergie",
        "Wasserstoff-Brennstoffzellen"
      ]
    },
    {
      "id": "energieeffizienzsysteme",
      "name": "Energieeffizienzsysteme",
      "category": "energie",
      "x": 850,
      "y": 2320,
      "prerequisites": [
        "Thermodynamik",
        "Smart Grid Systeme",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "smart_grid_systeme",
      "name": "Smart Grid Systeme",
      "category": "energie",
      "x": 850,
      "y": 2380,
      "prerequisites": [
        "Mikrowellenenergie",
        "Thermodynamik"
      ]
    },
    {
      "id": "industrielle_energieoptimierung",
      "name": "Industrielle Energieoptimierung",
      "category": "energie",
      "x": 850,
      "y": 2440,
      "prerequisites": [
        "Thermodynamik",
        "Superkondensatoren",
        "Wasserstoffenergie"
      ]
    },
    {
      "id": "notstromsysteme",
      "name": "Notstromsysteme",
      "category": "energie",
      "x": 850,
      "y": 2500,
      "prerequisites": [
        "Thermodynamik",
        "Solartechnik"
      ]
    },
    {
      "id": "milit_rische_energiesysteme",
      "name": "Militärische Energiesysteme",
      "category": "energie",
      "x": 850,
      "y": 2560,
      "prerequisites": [
        "Thermodynamik",
        "Satellitenenergieversorgung",
        "Militärische Grundlagen",
        "Mikro-Atomreaktoren",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "raumfahrtsolarzellen",
      "name": "Raumfahrtsolarzellen",
      "category": "energie",
      "x": 850,
      "y": 2620,
      "prerequisites": [
        "Luftfahrt",
        "Energieübertragung per Mikrowellen",
        "Induktionsenergie",
        "Thermodynamik"
      ]
    },
    {
      "id": "satellitenenergieversorgung",
      "name": "Satellitenenergieversorgung",
      "category": "energie",
      "x": 850,
      "y": 2680,
      "prerequisites": [
        "Thermodynamik",
        "Telemetrie",
        "Mathematik Grundlagen",
        "Nachbrennertechnologie",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "orbitalenergie_bertragung",
      "name": "Orbitalenergieübertragung",
      "category": "energie",
      "x": 850,
      "y": 2740,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "laserenergie_bertragung",
      "name": "Laserenergieübertragung",
      "category": "energie",
      "x": 850,
      "y": 2800,
      "prerequisites": [
        "Thermodynamik",
        "Elektromagnetismus",
        "Lasertechnologie",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Nuklearenergie Grundlagen"
      ]
    },
    {
      "id": "weltraumreaktoren",
      "name": "Weltraumreaktoren",
      "category": "energie",
      "x": 850,
      "y": 2860,
      "prerequisites": [
        "Thermodynamik",
        "Lebenserhaltungssysteme",
        "Orbitalmechanik",
        "Astronomie"
      ]
    },
    {
      "id": "deep_space_energie",
      "name": "Deep Space Energie",
      "category": "energie",
      "x": 850,
      "y": 2920,
      "prerequisites": [
        "Reaktordesign",
        "Raketenantriebe",
        "Thermodynamik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "computerarchitektur",
      "name": "Computerarchitektur",
      "category": "informatik",
      "x": 1200,
      "y": 100,
      "prerequisites": [
        "Halbleitertechnik",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Digitale Systeme"
      ]
    },
    {
      "id": "mikroprozessoren",
      "name": "Mikroprozessoren",
      "category": "informatik",
      "x": 1200,
      "y": 160,
      "prerequisites": [
        "Elektronik Grundlagen",
        "Halbleiterfertigung"
      ]
    },
    {
      "id": "parallelrechner",
      "name": "Parallelrechner",
      "category": "informatik",
      "x": 1200,
      "y": 220,
      "prerequisites": [
        "Informatik Grundlagen",
        "Computerarchitektur",
        "Mikroprozessoren"
      ]
    },
    {
      "id": "hochleistungsrechner",
      "name": "Hochleistungsrechner",
      "category": "informatik",
      "x": 1200,
      "y": 280,
      "prerequisites": [
        "Informatik Grundlagen",
        "Computerarchitektur",
        "Mikroprozessoren",
        "Parallelrechner",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "cloud_computing",
      "name": "Cloud Computing",
      "category": "informatik",
      "x": 1200,
      "y": 340,
      "prerequisites": [
        "Internetinfrastruktur",
        "Netzwerktechnik",
        "Hochleistungsrechner",
        "Verteilte Systeme"
      ]
    },
    {
      "id": "verteilte_systeme",
      "name": "Verteilte Systeme",
      "category": "informatik",
      "x": 1200,
      "y": 400,
      "prerequisites": [
        "Autonome Drohnensteuerung",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Strategische Simulation"
      ]
    },
    {
      "id": "echtzeitbetriebssysteme",
      "name": "Echtzeitbetriebssysteme",
      "category": "informatik",
      "x": 1200,
      "y": 460,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Computerarchitektur",
        "Embedded Systeme",
        "Mikroprozessoren"
      ]
    },
    {
      "id": "embedded_systeme",
      "name": "Embedded Systeme",
      "category": "informatik",
      "x": 1200,
      "y": 520,
      "prerequisites": [
        "Computerarchitektur",
        "Mikroprozessoren",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "signalverarbeitung",
      "name": "Signalverarbeitung",
      "category": "informatik",
      "x": 1200,
      "y": 580,
      "prerequisites": [
        "Informatik Grundlagen",
        "Signalverarbeitung Grundlagen",
        "Mathematik Grundlagen",
        "Elektronik Grundlagen"
      ]
    },
    {
      "id": "maschinelles_lernen",
      "name": "Maschinelles Lernen",
      "category": "informatik",
      "x": 1200,
      "y": 640,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Klassische Mechanik",
        "Statistik",
        "Fortgeschrittene Mathematik"
      ]
    },
    {
      "id": "neuronale_netze",
      "name": "Neuronale Netze",
      "category": "informatik",
      "x": 1200,
      "y": 700,
      "prerequisites": [
        "Maschinelles Lernen",
        "Mathematik Grundlagen",
        "Biologie Grundlagen",
        "Kommunikationsnetze",
        "Quantencomputer",
        "Statistik"
      ]
    },
    {
      "id": "computer_vision",
      "name": "Computer Vision",
      "category": "informatik",
      "x": 1200,
      "y": 760,
      "prerequisites": [
        "Halbleitertechnik",
        "Informatik Grundlagen",
        "Neuronale Netze",
        "Elektronik Grundlagen",
        "Digitale Systeme",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "spracherkennung",
      "name": "Spracherkennung",
      "category": "informatik",
      "x": 1200,
      "y": 820,
      "prerequisites": [
        "Informatik Grundlagen",
        "Maschinelles Lernen",
        "Signalverarbeitung"
      ]
    },
    {
      "id": "autonome_systeme",
      "name": "Autonome Systeme",
      "category": "informatik",
      "x": 1200,
      "y": 880,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Robotiksteuerung",
        "Netzwerktechnik",
        "Sensorfusion",
        "Sensorik"
      ]
    },
    {
      "id": "entscheidungssysteme",
      "name": "Entscheidungssysteme",
      "category": "informatik",
      "x": 1200,
      "y": 940,
      "prerequisites": [
        "Edge Computing",
        "Zielerkennung KI"
      ]
    },
    {
      "id": "simulation_ki",
      "name": "Simulation KI",
      "category": "informatik",
      "x": 1200,
      "y": 1000,
      "prerequisites": [
        "Maschinelles Lernen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "strategische_ki",
      "name": "Strategische KI",
      "category": "informatik",
      "x": 1200,
      "y": 1060,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Echtzeitbetriebssysteme",
        "Parallelrechner",
        "Mathematik Grundlagen",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "datenanalyse",
      "name": "Datenanalyse",
      "category": "informatik",
      "x": 1200,
      "y": 1120,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Datenbanken",
        "Spracherkennung",
        "Programmierung"
      ]
    },
    {
      "id": "big_data_systeme",
      "name": "Big Data Systeme",
      "category": "informatik",
      "x": 1200,
      "y": 1180,
      "prerequisites": [
        "Computerarchitektur",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Sensordatenfusion"
      ]
    },
    {
      "id": "cybersecurity_grundlagen",
      "name": "Cybersecurity Grundlagen",
      "category": "informatik",
      "x": 1200,
      "y": 1240,
      "prerequisites": [
        "Quantencomputer",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Robotiksteuerung"
      ]
    },
    {
      "id": "kryptographie_grundlagen",
      "name": "Kryptographie Grundlagen",
      "category": "informatik",
      "x": 1200,
      "y": 1300,
      "prerequisites": [
        "Informatik Grundlagen",
        "Fortgeschrittene Mathematik",
        "Mathematik Grundlagen",
        "Autonome U-Boote",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "milit_rkryptographie",
      "name": "Militärkryptographie",
      "category": "informatik",
      "x": 1200,
      "y": 1360,
      "prerequisites": [
        "Informatik Grundlagen",
        "Militärische Grundlagen",
        "Mathematik Grundlagen",
        "Hyper-Dimensionale Speichermedien"
      ]
    },
    {
      "id": "quantenkryptographie",
      "name": "Quantenkryptographie",
      "category": "informatik",
      "x": 1200,
      "y": 1420,
      "prerequisites": [
        "Informatik Grundlagen",
        "Autonome Fahrzeugsteuerung",
        "Fortgeschrittene Mathematik",
        "Mathematik Grundlagen",
        "Kryptographie Grundlagen",
        "Photonische Materialien"
      ]
    },
    {
      "id": "netzwerkarchitektur",
      "name": "Netzwerkarchitektur",
      "category": "informatik",
      "x": 1200,
      "y": 1480,
      "prerequisites": [
        "Informationsfusion",
        "Netzwerktechnik",
        "Informatik Grundlagen"
      ]
    },
    {
      "id": "satellitennetzwerke",
      "name": "Satellitennetzwerke",
      "category": "informatik",
      "x": 1200,
      "y": 1540,
      "prerequisites": [
        "Telemetrie",
        "Simulation KI",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Satellitenbau",
        "Kommunikationsnetze"
      ]
    },
    {
      "id": "milit_rische_kommunikationsnetze",
      "name": "Militärische Kommunikationsnetze",
      "category": "informatik",
      "x": 1200,
      "y": 1600,
      "prerequisites": [
        "Militärische Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "datensicherungssysteme",
      "name": "Datensicherungssysteme",
      "category": "informatik",
      "x": 1200,
      "y": 1660,
      "prerequisites": [
        "Mikroprozessoren",
        "Informatik Grundlagen",
        "Datenbanken",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "informationsfusion",
      "name": "Informationsfusion",
      "category": "informatik",
      "x": 1200,
      "y": 1720,
      "prerequisites": [
        "Militärische Entscheidungs KI",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "zielerkennung_ki",
      "name": "Zielerkennung KI",
      "category": "informatik",
      "x": 1200,
      "y": 1780,
      "prerequisites": [
        "Maschinelles Lernen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "autonome_steuerung",
      "name": "Autonome Steuerung",
      "category": "informatik",
      "x": 1200,
      "y": 1840,
      "prerequisites": [
        "Sensorfusion",
        "Maschinelles Lernen",
        "Regelungstechnik",
        "Automatisierung Grundlagen"
      ]
    },
    {
      "id": "robotiksteuerung",
      "name": "Robotiksteuerung",
      "category": "informatik",
      "x": 1200,
      "y": 1900,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Maschinelles Lernen",
        "Regelungstechnik",
        "Embedded Systeme"
      ]
    },
    {
      "id": "schwarmalgorithmen",
      "name": "Schwarmalgorithmen",
      "category": "informatik",
      "x": 1200,
      "y": 1960,
      "prerequisites": [
        "Informatik Grundlagen",
        "Sensorfusion",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "navigationsalgorithmen",
      "name": "Navigationsalgorithmen",
      "category": "informatik",
      "x": 1200,
      "y": 2020,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "ballistikberechnung",
      "name": "Ballistikberechnung",
      "category": "informatik",
      "x": 1200,
      "y": 2080,
      "prerequisites": [
        "Informatik Grundlagen",
        "Klassische Mechanik",
        "Mathematik Grundlagen",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "radarverarbeitung",
      "name": "Radarverarbeitung",
      "category": "informatik",
      "x": 1200,
      "y": 2140,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Schiffdesign Simulation",
        "Antennentechnik",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "sonarverarbeitung",
      "name": "Sonarverarbeitung",
      "category": "informatik",
      "x": 1200,
      "y": 2200,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Informatik Grundlagen",
        "Akustik"
      ]
    },
    {
      "id": "bildverarbeitung",
      "name": "Bildverarbeitung",
      "category": "informatik",
      "x": 1200,
      "y": 2260,
      "prerequisites": [
        "Quantencomputer",
        "Informatik Grundlagen",
        "Hochleistungsrechner"
      ]
    },
    {
      "id": "sensordatenfusion",
      "name": "Sensordatenfusion",
      "category": "informatik",
      "x": 1200,
      "y": 2320,
      "prerequisites": [
        "Informatik Grundlagen",
        "Datenbanken",
        "Mathematik Grundlagen",
        "Informationsfusion"
      ]
    },
    {
      "id": "cockpitassistenz_ki",
      "name": "Cockpitassistenz KI",
      "category": "informatik",
      "x": 1200,
      "y": 2380,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Predictive Maintenance",
        "Mathematik Grundlagen",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "pilotenassistenzsysteme",
      "name": "Pilotenassistenzsysteme",
      "category": "informatik",
      "x": 1200,
      "y": 2440,
      "prerequisites": [
        "Informatik Grundlagen",
        "Kriegsführung Simulation",
        "Entscheidungssysteme"
      ]
    },
    {
      "id": "missionsplanungssysteme",
      "name": "Missionsplanungssysteme",
      "category": "informatik",
      "x": 1200,
      "y": 2500,
      "prerequisites": [
        "Informatik Grundlagen",
        "Bildverarbeitung",
        "Mathematik Grundlagen",
        "Autonome Steuerung"
      ]
    },
    {
      "id": "kampfmanagementsysteme",
      "name": "Kampfmanagementsysteme",
      "category": "informatik",
      "x": 1200,
      "y": 2560,
      "prerequisites": [
        "Simulation KI",
        "Mathematik Grundlagen",
        "Zielerkennung KI"
      ]
    },
    {
      "id": "logistik_ki",
      "name": "Logistik KI",
      "category": "informatik",
      "x": 1200,
      "y": 2620,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "industrieautomatisierung_ki",
      "name": "Industrieautomatisierung KI",
      "category": "informatik",
      "x": 1200,
      "y": 2680,
      "prerequisites": [
        "Maschinelles Lernen",
        "Mathematik Grundlagen",
        "Schwarmdrohnensteuerung"
      ]
    },
    {
      "id": "produktionsoptimierung_ki",
      "name": "Produktionsoptimierung KI",
      "category": "informatik",
      "x": 1200,
      "y": 2740,
      "prerequisites": [
        "Maschinelles Lernen",
        "Entscheidungssysteme",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "predictive_maintenance",
      "name": "Predictive Maintenance",
      "category": "informatik",
      "x": 1200,
      "y": 2800,
      "prerequisites": [
        "Informatik Grundlagen",
        "Maschinelles Lernen",
        "Statistik"
      ]
    },
    {
      "id": "autonome_drohnensteuerung",
      "name": "Autonome Drohnensteuerung",
      "category": "informatik",
      "x": 1200,
      "y": 2860,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Informatik Grundlagen",
        "Aerodynamik",
        "Sensortechnologie",
        "Sensorfusion",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "autonome_fahrzeugsteuerung",
      "name": "Autonome Fahrzeugsteuerung",
      "category": "informatik",
      "x": 1200,
      "y": 2920,
      "prerequisites": [
        "Microcontroller",
        "Sensorfusion",
        "Mathematik Grundlagen",
        "Neuronale Netze"
      ]
    },
    {
      "id": "autonome_u_boote",
      "name": "Autonome U-Boote",
      "category": "informatik",
      "x": 1200,
      "y": 2980,
      "prerequisites": [
        "Autonome Steuerung",
        "Hydrodynamik",
        "Quantencomputer",
        "Druckkörperbau",
        "Sensorfusion"
      ]
    },
    {
      "id": "schwarmdrohnensteuerung",
      "name": "Schwarmdrohnensteuerung",
      "category": "informatik",
      "x": 1200,
      "y": 3040,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Sensortechnologie",
        "Sensorfusion",
        "Stark erweiterte Realität (AR)"
      ]
    },
    {
      "id": "milit_rische_entscheidungs_ki",
      "name": "Militärische Entscheidungs KI",
      "category": "informatik",
      "x": 1200,
      "y": 3100,
      "prerequisites": [
        "Maschinelles Lernen",
        "Militärische Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "kriegsf_hrung_simulation",
      "name": "Kriegsführung Simulation",
      "category": "informatik",
      "x": 1200,
      "y": 3160,
      "prerequisites": [
        "Militärische Grundlagen",
        "Informatik Grundlagen",
        "Statistik"
      ]
    },
    {
      "id": "strategische_simulation",
      "name": "Strategische Simulation",
      "category": "informatik",
      "x": 1200,
      "y": 3220,
      "prerequisites": [
        "Radarverarbeitung",
        "Informatik Grundlagen",
        "Kriegsführung Simulation"
      ]
    },
    {
      "id": "orbitalmechanik_simulation",
      "name": "Orbitalmechanik Simulation",
      "category": "informatik",
      "x": 1200,
      "y": 3280,
      "prerequisites": [
        "Klassische Mechanik",
        "Informatik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "raketenflug_simulation",
      "name": "Raketenflug Simulation",
      "category": "informatik",
      "x": 1200,
      "y": 3340,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Informatik Grundlagen",
        "Aerodynamik",
        "Raketenantriebe"
      ]
    },
    {
      "id": "flugzeugdesign_simulation",
      "name": "Flugzeugdesign Simulation",
      "category": "informatik",
      "x": 1200,
      "y": 3400,
      "prerequisites": [
        "Thermodynamik",
        "Schiffdesign Simulation",
        "Informatik Grundlagen",
        "Autonome Steuerung",
        "Mathematik Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "schiffdesign_simulation",
      "name": "Schiffdesign Simulation",
      "category": "informatik",
      "x": 1200,
      "y": 3460,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Kriegsführung Simulation",
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik"
      ]
    },
    {
      "id": "fahrzeugchassis",
      "name": "Fahrzeugchassis",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 100,
      "prerequisites": [
        "Strukturmechanik",
        "Stahlproduktion",
        "Verbrennungsmotoren",
        "Wüstenfahrzeuge",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "federungssysteme",
      "name": "Federungssysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 160,
      "prerequisites": [
        "Informatik Grundlagen",
        "Panzerüberlebenssysteme",
        "Dieselantriebe Militär",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "gel_ndefahrwerke",
      "name": "Geländefahrwerke",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 220,
      "prerequisites": [
        "Klassische Mechanik",
        "Militärdrohnenfahrzeuge",
        "Verbrennungsmotor",
        "Panzerüberlebenssysteme"
      ]
    },
    {
      "id": "raupenfahrwerke",
      "name": "Raupenfahrwerke",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 280,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Fahrzeuglaserabwehr"
      ]
    },
    {
      "id": "radfahrwerke",
      "name": "Radfahrwerke",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 340,
      "prerequisites": [
        "Klassische Mechanik",
        "Fahrzeugwartungssysteme",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "panzergetriebe",
      "name": "Panzergetriebe",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 400,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Maschinenelemente",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Fahrzeugchassis",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "dieselantriebe_milit_r",
      "name": "Dieselantriebe Militär",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 460,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Militärische Grundlagen",
        "Militärlogistikfahrzeuge",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "hybridantriebe_milit_r",
      "name": "Hybridantriebe Militär",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 520,
      "prerequisites": [
        "Klassische Mechanik",
        "Militärische Grundlagen",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "elektroantrieb_fahrzeuge",
      "name": "Elektroantrieb Fahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 580,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "panzerkanonen",
      "name": "Panzerkanonen",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 640,
      "prerequisites": [
        "Chemie Grundlagen",
        "Fahrzeugmechanik",
        "Hochfester Stahl",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "autolader_systeme",
      "name": "Autolader Systeme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 700,
      "prerequisites": [
        "Netzwerktechnik",
        "Klassische Mechanik",
        "Verbrennungsmotor",
        "Informatik Grundlagen"
      ]
    },
    {
      "id": "feuerleitsysteme",
      "name": "Feuerleitsysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 760,
      "prerequisites": [
        "Informatik Grundlagen",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "panzeroptiken",
      "name": "Panzeroptiken",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 820,
      "prerequisites": [
        "Autonome Panzer",
        "Fahrzeugmechanik",
        "Softkill Systeme",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "stabilisierte_gesch_tze",
      "name": "Stabilisierte Geschütze",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 880,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "panzerzielsysteme",
      "name": "Panzerzielsysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 940,
      "prerequisites": [
        "Klassische Mechanik",
        "Informatik Grundlagen",
        "Fahrzeugmechanik",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "aktive_schutzsysteme",
      "name": "Aktive Schutzsysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1000,
      "prerequisites": [
        "Informatik Grundlagen",
        "Modulare Fahrzeugplattform",
        "Radarsensoren",
        "Militärische Fahrzeugdiagnose",
        "Materialwissenschaft Grundlagen",
        "Raketenlenkung"
      ]
    },
    {
      "id": "hardkill_systeme",
      "name": "Hardkill Systeme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1060,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Netzwerktechnik",
        "Selbstfahrlafetten"
      ]
    },
    {
      "id": "softkill_systeme",
      "name": "Softkill Systeme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1120,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Militärkonvoisteuerung",
        "Geländefahrwerke",
        "Mathematik Grundlagen",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "panzerabwehrsysteme",
      "name": "Panzerabwehrsysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1180,
      "prerequisites": [
        "Informatik Grundlagen",
        "Fahrzeugmechanik",
        "Drohnenabwehrfahrzeuge",
        "Klassische Mechanik",
        "Metallurgie Grundlagen",
        "Militärlogistikfahrzeuge"
      ]
    },
    {
      "id": "schwerer_kampfpanzer",
      "name": "Schwerer Kampfpanzer",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1240,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Autonome LKW-Flotten",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "mittlerer_kampfpanzer",
      "name": "Mittlerer Kampfpanzer",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1300,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Raupenfahrwerke",
        "Dieselantriebe Militär",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "leichter_panzer",
      "name": "Leichter Panzer",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1360,
      "prerequisites": [
        "Fahrzeugtarnsysteme",
        "Klassische Mechanik",
        "Fahrzeugmechanik",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "infanteriekampffahrzeug",
      "name": "Infanteriekampffahrzeug",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1420,
      "prerequisites": [
        "Klassische Mechanik",
        "Militärische Fahrzeugdiagnose",
        "Materialwissenschaft Grundlagen",
        "Federungssysteme"
      ]
    },
    {
      "id": "radpanzer",
      "name": "Radpanzer",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1480,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Magnetbahnen",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "artilleriesysteme",
      "name": "Artilleriesysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1540,
      "prerequisites": [
        "Klassische Mechanik",
        "Informatik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "selbstfahrlafetten",
      "name": "Selbstfahrlafetten",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1600,
      "prerequisites": [
        "Autonome Panzer",
        "Klassische Mechanik",
        "Panzerabwehrraketenplattform",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "raketenartillerie",
      "name": "Raketenartillerie",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1660,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Fahrzeugtarnsysteme",
        "Infanteriekampffahrzeug",
        "Mathematik Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "milit_rlogistikfahrzeuge",
      "name": "Militärlogistikfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1720,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Militärische Grundlagen",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "milit_rbr_ckenleger",
      "name": "Militärbrückenleger",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1780,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Militärische Grundlagen",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "minenr_umfahrzeuge",
      "name": "Minenräumfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1840,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Notfallreparatursysteme",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "pionierfahrzeuge",
      "name": "Pionierfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1900,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "aufkl_rungsfahrzeuge",
      "name": "Aufklärungsfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 1960,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "milit_rdrohnenfahrzeuge",
      "name": "Militärdrohnenfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2020,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Panzerüberlebenssysteme",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Sensortechnologie"
      ]
    },
    {
      "id": "autonome_panzer",
      "name": "Autonome Panzer",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2080,
      "prerequisites": [
        "Unbemannte Bodenfahrzeuge",
        "Fahrzeugmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "KI Luftkampfsteuerung",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "unbemannte_bodenfahrzeuge",
      "name": "Unbemannte Bodenfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2140,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Fahrzeugwartungssysteme",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "fahrzeugkommunikation",
      "name": "Fahrzeugkommunikation",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2200,
      "prerequisites": [
        "Elektromagnetismus",
        "Netzwerktechnik",
        "Klassische Mechanik",
        "Tarnfahrzeuge",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "gefechtsnetzwerke",
      "name": "Gefechtsnetzwerke",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2260,
      "prerequisites": [
        "Informatik Grundlagen",
        "Netzwerktechnik",
        "Klassische Mechanik",
        "Kommunikationsnetze",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "panzerbataillonsteuerung",
      "name": "Panzerbataillonsteuerung",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2320,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "milit_rnavigation_fahrzeuge",
      "name": "Militärnavigation Fahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2380,
      "prerequisites": [
        "Raketenfahrzeuge",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Militärische Grundlagen",
        "Tarnfahrzeuge",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "gel_ndeanalyse_systeme",
      "name": "Geländeanalyse Systeme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2440,
      "prerequisites": [
        "Informatik Grundlagen",
        "Geländefahrwerke",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Klassische Mechanik",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "milit_rische_fahrzeugdiagnose",
      "name": "Militärische Fahrzeugdiagnose",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2500,
      "prerequisites": [
        "Klassische Mechanik",
        "Militärische Grundlagen",
        "Verbrennungsmotor",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "fahrzeugwartungssysteme",
      "name": "Fahrzeugwartungssysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2560,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Verbrennungsmotor",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "modulare_fahrzeugplattform",
      "name": "Modulare Fahrzeugplattform",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2620,
      "prerequisites": [
        "Klassische Mechanik",
        "Aktive Tarnsysteme",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "amphibische_fahrzeuge",
      "name": "Amphibische Fahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2680,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Mobile Raketenwerfer",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "arktisfahrzeuge",
      "name": "Arktisfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2740,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "w_stenfahrzeuge",
      "name": "Wüstenfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2800,
      "prerequisites": [
        "Klassische Mechanik",
        "Verbrennungsmotor",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "tarnfahrzeuge",
      "name": "Tarnfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2860,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Panzerakustikreduktion"
      ]
    },
    {
      "id": "stealthfahrzeuge_land",
      "name": "Stealthfahrzeuge Land",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2920,
      "prerequisites": [
        "Militärdrohnenfahrzeuge",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Stealth Beschichtungen",
        "Minenräumfahrzeuge"
      ]
    },
    {
      "id": "schwere_transportfahrzeuge",
      "name": "Schwere Transportfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 2980,
      "prerequisites": [
        "Aufklärungsfahrzeuge",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Panzeroptiken"
      ]
    },
    {
      "id": "raketenfahrzeuge",
      "name": "Raketenfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3040,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Modulare Fahrzeugplattform",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "mobile_radarsysteme",
      "name": "Mobile Radarsysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3100,
      "prerequisites": [
        "Informatik Grundlagen",
        "Elektromagnetismus",
        "Magnetbahnen",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "mobile_raketenwerfer",
      "name": "Mobile Raketenwerfer",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3160,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Militärkonvoisteuerung",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "fahrzeugabwehrsysteme",
      "name": "Fahrzeugabwehrsysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3220,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Federungssysteme"
      ]
    },
    {
      "id": "fahrzeuglaserabwehr",
      "name": "Fahrzeuglaserabwehr",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3280,
      "prerequisites": [
        "Elektromagnetismus",
        "Lasertechnologie",
        "Optik Grundlagen",
        "Klassische Mechanik",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "elektronische_panzerabwehr",
      "name": "Elektronische Panzerabwehr",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3340,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen",
        "Panzerüberwachungssysteme",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "panzerabwehrraketenplattform",
      "name": "Panzerabwehrraketenplattform",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3400,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Fahrzeugmechanik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "drohnenabwehrfahrzeuge",
      "name": "Drohnenabwehrfahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3460,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Sensortechnologie",
        "Verbrennungsmotor",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "elektromagnetische_panzerabwehr",
      "name": "Elektromagnetische Panzerabwehr",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3520,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Panzerabwehrsysteme",
        "Dieselantriebe Militär",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "panzerkampf_ki",
      "name": "Panzerkampf KI",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3580,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Fahrzeugmechanik",
        "Mathematik Grundlagen",
        "Hovershiffe",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "fahrzeugformationssteuerung",
      "name": "Fahrzeugformationssteuerung",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3640,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "milit_rkonvoisteuerung",
      "name": "Militärkonvoisteuerung",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3700,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Militärische Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "fahrzeugtarnsysteme",
      "name": "Fahrzeugtarnsysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3760,
      "prerequisites": [
        "Informatik Grundlagen",
        "Brennstoffzellen-Züge",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "aktive_tarnsysteme",
      "name": "Aktive Tarnsysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3820,
      "prerequisites": [
        "Klassische Mechanik",
        "Informatik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "infrarottarnung_fahrzeuge",
      "name": "Infrarottarnung Fahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3880,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Federungssysteme"
      ]
    },
    {
      "id": "radarabsorption_fahrzeuge",
      "name": "Radarabsorption Fahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 3940,
      "prerequisites": [
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Geländeanalyse Systeme",
        "Klassische Mechanik",
        "Antennentechnik",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "signaturreduktion_fahrzeuge",
      "name": "Signaturreduktion Fahrzeuge",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 4000,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Aktive Schutzsysteme",
        "Autonomes Fahren",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "panzerakustikreduktion",
      "name": "Panzerakustikreduktion",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 4060,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "panzerthermische_tarnung",
      "name": "Panzerthermische Tarnung",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 4120,
      "prerequisites": [
        "Fahrzeugmechanik",
        "Hardkill Systeme",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "panzer_berlebenssysteme",
      "name": "Panzerüberlebenssysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 4180,
      "prerequisites": [
        "Informatik Grundlagen",
        "Fahrzeugmechanik",
        "Amphibische Fahrzeuge",
        "Mathematik Grundlagen",
        "Autolader Systeme",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "notfallreparatursysteme",
      "name": "Notfallreparatursysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 4240,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "panzer_berwachungssysteme",
      "name": "Panzerüberwachungssysteme",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 4300,
      "prerequisites": [
        "Klassische Mechanik",
        "Informatik Grundlagen",
        "Fahrzeugmechanik",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "fahrzeugfernsteuerung",
      "name": "Fahrzeugfernsteuerung",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 4360,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Verbrennungsmotor"
      ]
    },
    {
      "id": "panzertrainingssimulation",
      "name": "Panzertrainingssimulation",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 4420,
      "prerequisites": [
        "Klassische Mechanik",
        "Fahrzeugmechanik",
        "Verbrennungsmotor",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "aerodynamik_grundlagen",
      "name": "Aerodynamik Grundlagen",
      "category": "luftfahrt",
      "x": 1900,
      "y": 100,
      "prerequisites": [
        "Multispektralsensoren",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "flugzeugstruktur",
      "name": "Flugzeugstruktur",
      "category": "luftfahrt",
      "x": 1900,
      "y": 160,
      "prerequisites": [
        "Thermodynamik",
        "Strukturmechanik",
        "Aerodynamik Grundlagen",
        "Fluidmechanik",
        "Aluminiumlegierungen",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "fl_gelkonstruktion",
      "name": "Flügelkonstruktion",
      "category": "luftfahrt",
      "x": 1900,
      "y": 220,
      "prerequisites": [
        "Jagdflugzeuge Generation 4",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Koaxialrotoren"
      ]
    },
    {
      "id": "hochleistungsfl_gel",
      "name": "Hochleistungsflügel",
      "category": "luftfahrt",
      "x": 1900,
      "y": 280,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Transportflugzeuge"
      ]
    },
    {
      "id": "deltafl_gel",
      "name": "Deltaflügel",
      "category": "luftfahrt",
      "x": 1900,
      "y": 340,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "canardkonfiguration",
      "name": "Canardkonfiguration",
      "category": "luftfahrt",
      "x": 1900,
      "y": 400,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Tarnkappenbomber",
        "Aerodynamik"
      ]
    },
    {
      "id": "schwenkfl_gel",
      "name": "Schwenkflügel",
      "category": "luftfahrt",
      "x": 1900,
      "y": 460,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "AWACS Systeme"
      ]
    },
    {
      "id": "laminarfl_gel",
      "name": "Laminarflügel",
      "category": "luftfahrt",
      "x": 1900,
      "y": 520,
      "prerequisites": [
        "Ultralangstreckenflugzeuge",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Transportflugzeuge"
      ]
    },
    {
      "id": "winglets",
      "name": "Winglets",
      "category": "luftfahrt",
      "x": 1900,
      "y": 580,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Pilotassistenz",
        "Fluidmechanik"
      ]
    },
    {
      "id": "boundary_layer_control",
      "name": "Boundary Layer Control",
      "category": "luftfahrt",
      "x": 1900,
      "y": 640,
      "prerequisites": [
        "Fly-by-Wire",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "stol_technologie",
      "name": "STOL Technologie",
      "category": "luftfahrt",
      "x": 1900,
      "y": 700,
      "prerequisites": [
        "Aerodynamik",
        "Ultralangstreckenflugzeuge",
        "Virtuelle Pilotenausbildung",
        "Fluidmechanik"
      ]
    },
    {
      "id": "vtol_technologie",
      "name": "VTOL Technologie",
      "category": "luftfahrt",
      "x": 1900,
      "y": 760,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Fluidmechanik"
      ]
    },
    {
      "id": "vstol_systeme",
      "name": "VSTOL Systeme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 820,
      "prerequisites": [
        "Informatik Grundlagen",
        "Hochleistungsflügel",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "flugsteuerung",
      "name": "Flugsteuerung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 880,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "fly_by_wire",
      "name": "Fly by Wire",
      "category": "luftfahrt",
      "x": 1900,
      "y": 940,
      "prerequisites": [
        "Echtzeitbetriebssysteme",
        "Mathematik Grundlagen",
        "Digitale Flugsteuerung",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Sensorik"
      ]
    },
    {
      "id": "digitale_flugsteuerung",
      "name": "Digitale Flugsteuerung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1000,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Flugzeugstruktur",
        "Aerodynamik"
      ]
    },
    {
      "id": "autopilot_systeme",
      "name": "Autopilot Systeme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1060,
      "prerequisites": [
        "Informatik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Netzwerktechnik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "flugstabilit_tssysteme",
      "name": "Flugstabilitätssysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1120,
      "prerequisites": [
        "Informatik Grundlagen",
        "Überschallflug",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "schubvektorsteuerung",
      "name": "Schubvektorsteuerung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1180,
      "prerequisites": [
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "superman_vrierbarkeit",
      "name": "Supermanövrierbarkeit",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1240,
      "prerequisites": [
        "KI-Gesteuerte Drohnenschwärme",
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "AWACS Systeme"
      ]
    },
    {
      "id": "_berschallflug",
      "name": "Überschallflug",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1300,
      "prerequisites": [
        "KI-Gesteuerte Drohnenschwärme",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "hyperschallflug",
      "name": "Hyperschallflug",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1360,
      "prerequisites": [
        "Scramjettriebwerke",
        "Hyperschallmaterialien",
        "Aerodynamik",
        "Thermisches Management",
        "Flugzeuggesundheitsmonitor"
      ]
    },
    {
      "id": "stealth_aerodynamik",
      "name": "Stealth Aerodynamik",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1420,
      "prerequisites": [
        "Sauerstoffsysteme",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Stealth Beschichtungen"
      ]
    },
    {
      "id": "geometrische_tarnung",
      "name": "Geometrische Tarnung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1480,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "infrarottarnung_flugzeuge",
      "name": "Infrarottarnung Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1540,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fly by Wire",
        "Klassische Mechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "radarabsorbierende_beschichtung",
      "name": "Radarabsorbierende Beschichtung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1600,
      "prerequisites": [
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "luftbetankung",
      "name": "Luftbetankung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1660,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "tr_gerstartsysteme",
      "name": "Trägerstartsysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1720,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "katapultstart",
      "name": "Katapultstart",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1780,
      "prerequisites": [
        "MASINT Flugzeuge",
        "Fangseilsysteme",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "fangseilsysteme",
      "name": "Fangseilsysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1840,
      "prerequisites": [
        "Ultralangstreckenflugzeuge",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Schwere Transportflugzeuge"
      ]
    },
    {
      "id": "emals_katapult",
      "name": "EMALS Katapult",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1900,
      "prerequisites": [
        "Scramjettriebwerke",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Missioncomputer"
      ]
    },
    {
      "id": "carrier_landing_systeme",
      "name": "Carrier Landing Systeme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 1960,
      "prerequisites": [
        "Informatik Grundlagen",
        "Schleudersitze",
        "Aerodynamik",
        "Netzwerktechnik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "schleudersitze",
      "name": "Schleudersitze",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2020,
      "prerequisites": [
        "Aerodynamik",
        "Tankflugzeuge",
        "Fluidmechanik"
      ]
    },
    {
      "id": "pilotenschutzsysteme",
      "name": "Pilotenschutzsysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2080,
      "prerequisites": [
        "Informatik Grundlagen",
        "Schwenkflügel",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "druckkabinen",
      "name": "Druckkabinen",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2140,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "sauerstoffsysteme",
      "name": "Sauerstoffsysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2200,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Jagdflugzeuge Generation 3",
        "Aerodynamik"
      ]
    },
    {
      "id": "helikopterrotoren",
      "name": "Helikopterrotoren",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2260,
      "prerequisites": [
        "Stealth Aerodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Flugstabilitätssysteme"
      ]
    },
    {
      "id": "koaxialrotoren",
      "name": "Koaxialrotoren",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2320,
      "prerequisites": [
        "Ultralangstreckenflugzeuge",
        "Materialwissenschaft Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "tiltrotor_technologie",
      "name": "Tiltrotor Technologie",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2380,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Überschallflug",
        "Aerodynamik"
      ]
    },
    {
      "id": "schwere_transportflugzeuge",
      "name": "Schwere Transportflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2440,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "strategische_bomber",
      "name": "Strategische Bomber",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2500,
      "prerequisites": [
        "Seeüberwachungsflugzeuge",
        "Aerodynamik",
        "Fluidmechanik",
        "Flughafenlogistik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "taktische_bomber",
      "name": "Taktische Bomber",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2560,
      "prerequisites": [
        "Sauerstoffsysteme",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Atmosphärische Scramjets",
        "Klassische Mechanik",
        "Aerodynamik"
      ]
    },
    {
      "id": "jagdflugzeuge_generation_3",
      "name": "Jagdflugzeuge Generation 3",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2620,
      "prerequisites": [
        "Thermodynamik",
        "Hochleistungsflügel",
        "Aerodynamik",
        "Klassische Mechanik",
        "Leichtmetall",
        "Luftkampfradar"
      ]
    },
    {
      "id": "jagdflugzeuge_generation_4",
      "name": "Jagdflugzeuge Generation 4",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2680,
      "prerequisites": [
        "Thermodynamik",
        "Fly-by-Wire",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "jagdflugzeuge_generation_4_5",
      "name": "Jagdflugzeuge Generation 4.5",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2740,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik Grundlagen",
        "Aerodynamik",
        "Leichtmetall",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "jagdflugzeuge_generation_5",
      "name": "Jagdflugzeuge Generation 5",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2800,
      "prerequisites": [
        "Thermodynamik",
        "Jagdflugzeuge Generation 4",
        "Katapultstart",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "stealthbomber",
      "name": "Stealthbomber",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2860,
      "prerequisites": [
        "Raketenflugzeuge",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "awacs_systeme",
      "name": "AWACS Systeme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2920,
      "prerequisites": [
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "COMINT Flugzeuge",
        "Stealth Aerodynamik"
      ]
    },
    {
      "id": "tankflugzeuge",
      "name": "Tankflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 2980,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "transportflugzeuge",
      "name": "Transportflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3040,
      "prerequisites": [
        "Thermodynamik",
        "Hyperschallflug",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Leichtmetall",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "see_berwachungsflugzeuge",
      "name": "Seeüberwachungsflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3100,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Leichtmetall",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "elektronische_kampfflugzeuge",
      "name": "Elektronische Kampfflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3160,
      "prerequisites": [
        "Thermodynamik",
        "Infrarottarnung Flugzeuge",
        "Aerodynamik",
        "Leichtmetall",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "drohnenflugzeuge",
      "name": "Drohnenflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3220,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Thermodynamik",
        "Aerodynamik",
        "Atmosphärische Scramjets",
        "Klassische Mechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "langstreckendrohnen",
      "name": "Langstreckendrohnen",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3280,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Sensortechnologie",
        "Boundary Layer Control"
      ]
    },
    {
      "id": "stealthdrohnen",
      "name": "Stealthdrohnen",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3340,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Elektroflugzeuge",
        "Fluidmechanik",
        "Aerodynamik",
        "Klassische Mechanik",
        "Sensortechnologie"
      ]
    },
    {
      "id": "hyperschalldrohnen",
      "name": "Hyperschalldrohnen",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3400,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Elektronische Kampfflugzeuge",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Sensortechnologie"
      ]
    },
    {
      "id": "luftkampfradar",
      "name": "Luftkampfradar",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3460,
      "prerequisites": [
        "Elektromagnetismus",
        "Elektroflugzeuge",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Antennentechnik"
      ]
    },
    {
      "id": "aesa_radar",
      "name": "AESA Radar",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3520,
      "prerequisites": [
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Halbleiterfertigung",
        "Strategische Bomber"
      ]
    },
    {
      "id": "luftkampf_ki",
      "name": "Luftkampf KI",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3580,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "bvr_luftkampf",
      "name": "BVR Luftkampf",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3640,
      "prerequisites": [
        "Aerodynamik",
        "Raketenabwehr Flugzeuge",
        "Mathematik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "wvr_luftkampf",
      "name": "WVR Luftkampf",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3700,
      "prerequisites": [
        "Zielverfolgungssysteme",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "raketenabwehr_flugzeuge",
      "name": "Raketenabwehr Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3760,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Zielerkennung Systeme",
        "Predictive Wartung Flugzeuge",
        "Aerodynamik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "laserabwehr_flugzeuge",
      "name": "Laserabwehr Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3820,
      "prerequisites": [
        "Thermodynamik",
        "Elektromagnetismus",
        "Lasertechnologie",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Aerodynamik"
      ]
    },
    {
      "id": "flugzeug_selbstschutz",
      "name": "Flugzeug Selbstschutz",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3880,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Leichtmetall",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "cockpitdigitalisierung",
      "name": "Cockpitdigitalisierung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 3940,
      "prerequisites": [
        "Multispektralsensoren",
        "KI-Gesteuerte Drohnenschwärme",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "helmvisiersysteme",
      "name": "Helmvisiersysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4000,
      "prerequisites": [
        "Informatik Grundlagen",
        "Elektroflugzeuge",
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "pilotassistenz",
      "name": "Pilotassistenz",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4060,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Atmosphärischer Wiedereintritt"
      ]
    },
    {
      "id": "missioncomputer",
      "name": "Missioncomputer",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4120,
      "prerequisites": [
        "Satellitenkommunikation Flugzeuge",
        "Halbleitertechnik",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Aerodynamik"
      ]
    },
    {
      "id": "sensorfusion",
      "name": "Sensorfusion",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4180,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Variable Cycle Engines",
        "Luftkampfradar"
      ]
    },
    {
      "id": "zielerkennung_systeme",
      "name": "Zielerkennung Systeme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4240,
      "prerequisites": [
        "Netzwerktechnik",
        "Informatik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "datenlink_systeme",
      "name": "Datenlink Systeme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4300,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Datenbanken"
      ]
    },
    {
      "id": "satellitenkommunikation_flugzeuge",
      "name": "Satellitenkommunikation Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4360,
      "prerequisites": [
        "Thermodynamik",
        "Telemetrie",
        "Elektromagnetismus",
        "Ramjettriebwerke",
        "Fluidmechanik",
        "Aerodynamik"
      ]
    },
    {
      "id": "flugzeugwartungssysteme",
      "name": "Flugzeugwartungssysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4420,
      "prerequisites": [
        "Thermodynamik",
        "Informatik Grundlagen",
        "Schleudersitze",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "predictive_wartung_flugzeuge",
      "name": "Predictive Wartung Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4480,
      "prerequisites": [
        "Thermodynamik",
        "Struktursensorik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "flugzeugdiagnose",
      "name": "Flugzeugdiagnose",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4540,
      "prerequisites": [
        "Thermodynamik",
        "Infrarottarnung Flugzeuge",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "struktursensorik",
      "name": "Struktursensorik",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4600,
      "prerequisites": [
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "flugzeuggesundheitsmonitor",
      "name": "Flugzeuggesundheitsmonitor",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4660,
      "prerequisites": [
        "Thermodynamik",
        "Hyperschallmaterialien",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "flottenmanagementsysteme",
      "name": "Flottenmanagementsysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4720,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Fluidmechanik"
      ]
    },
    {
      "id": "luftkampfsimulation",
      "name": "Luftkampfsimulation",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4780,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Atmosphärischer Wiedereintritt"
      ]
    },
    {
      "id": "flugtrainingssysteme",
      "name": "Flugtrainingssysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4840,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Informatik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "virtuelle_pilotenausbildung",
      "name": "Virtuelle Pilotenausbildung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4900,
      "prerequisites": [
        "Aerodynamik",
        "Fluidmechanik"
      ]
    },
    {
      "id": "autonome_kampfflugzeuge",
      "name": "Autonome Kampfflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 4960,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Klassische Mechanik",
        "Leichtmetall",
        "Sensorfusion"
      ]
    },
    {
      "id": "schwarmkampfflugzeuge",
      "name": "Schwarmkampfflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5020,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Leichtmetall",
        "Koaxialrotoren"
      ]
    },
    {
      "id": "unbemannte_bomber",
      "name": "Unbemannte Bomber",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5080,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Flottenmanagementsysteme",
        "Fluidmechanik"
      ]
    },
    {
      "id": "unbemannte_tanker",
      "name": "Unbemannte Tanker",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5140,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Virtuelle Pilotenausbildung"
      ]
    },
    {
      "id": "hyperschallbomber",
      "name": "Hyperschallbomber",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5200,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Mathematik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "orbitalflugzeuge",
      "name": "Orbitalflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5260,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "weltraumflugzeuge",
      "name": "Weltraumflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5320,
      "prerequisites": [
        "Thermodynamik",
        "Lebenserhaltungssysteme",
        "Astronomie",
        "Aerodynamik",
        "Leichtmetall",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "raketenflugzeuge",
      "name": "Raketenflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5380,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "atmosph_rischer_wiedereintritt",
      "name": "Atmosphärischer Wiedereintritt",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5440,
      "prerequisites": [
        "Seeüberwachungsflugzeuge",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "hitzeschilde_flugzeuge",
      "name": "Hitzeschilde Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5500,
      "prerequisites": [
        "Thermodynamik",
        "Fly-by-Wire",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "hyperschallmaterialien",
      "name": "Hyperschallmaterialien",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5560,
      "prerequisites": [
        "Multispektralsensoren",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "strahltriebwerk_optimierung",
      "name": "Strahltriebwerk Optimierung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5620,
      "prerequisites": [
        "Multispektralsensoren",
        "Aerodynamik",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen",
        "Flugstabilitätssysteme",
        "Hochtemperaturmaterialien"
      ]
    },
    {
      "id": "adaptive_triebwerke",
      "name": "Adaptive Triebwerke",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5680,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Zielpriorisierungssysteme",
        "Langstreckendrohnen"
      ]
    },
    {
      "id": "variable_cycle_engines",
      "name": "Variable Cycle Engines",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5740,
      "prerequisites": [
        "Infrarottarnung Flugzeuge",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "scramjettriebwerke",
      "name": "Scramjettriebwerke",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5800,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Fluidmechanik"
      ]
    },
    {
      "id": "ramjettriebwerke",
      "name": "Ramjettriebwerke",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5860,
      "prerequisites": [
        "Schwenkflügel",
        "Überschallflug",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "luftatmende_raketen",
      "name": "Luftatmende Raketen",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5920,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "langstreckenflugzeuge",
      "name": "Langstreckenflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 5980,
      "prerequisites": [
        "Thermodynamik",
        "Struktursensorik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "ultralangstreckenflugzeuge",
      "name": "Ultralangstreckenflugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6040,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Leichtmetall",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "langstrecken_berwachung",
      "name": "Langstreckenüberwachung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6100,
      "prerequisites": [
        "Radarabsorbierende Beschichtung",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "elektronische_aufkl_rung",
      "name": "Elektronische Aufklärung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6160,
      "prerequisites": [
        "Luftkampf KI",
        "Aerodynamik",
        "Fluidmechanik"
      ]
    },
    {
      "id": "sigint_flugzeuge",
      "name": "SIGINT Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6220,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Leichtmetall",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "elint_flugzeuge",
      "name": "ELINT Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6280,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Leichtmetall",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "comint_flugzeuge",
      "name": "COMINT Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6340,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "masint_flugzeuge",
      "name": "MASINT Flugzeuge",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6400,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Leichtmetall",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "multispektralsensoren",
      "name": "Multispektralsensoren",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6460,
      "prerequisites": [
        "Aerodynamik",
        "Fluidmechanik"
      ]
    },
    {
      "id": "hyperspektralsensoren",
      "name": "Hyperspektralsensoren",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6520,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Transportflugzeuge"
      ]
    },
    {
      "id": "zielverfolgungssysteme",
      "name": "Zielverfolgungssysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6580,
      "prerequisites": [
        "Informatik Grundlagen",
        "Ultralangstreckenflugzeuge",
        "Aerodynamik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "zielpriorisierungssysteme",
      "name": "Zielpriorisierungssysteme",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6640,
      "prerequisites": [
        "Informatik Grundlagen",
        "Helikopterrotoren",
        "Aerodynamik",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "autonome_zielwahl",
      "name": "Autonome Zielwahl",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6700,
      "prerequisites": [
        "Flugtrainingssysteme",
        "Aerodynamik",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Fluidmechanik",
        "Zielpriorisierungssysteme"
      ]
    },
    {
      "id": "ki_luftkampfsteuerung",
      "name": "KI Luftkampfsteuerung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6760,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Hochleistungsflügel",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "strategische_luftkriegsf_hrung",
      "name": "Strategische Luftkriegsführung",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6820,
      "prerequisites": [
        "Aerodynamik",
        "Klassische Mechanik",
        "Sensorfusion",
        "Fluidmechanik"
      ]
    },
    {
      "id": "schiffbau_grundlagen",
      "name": "Schiffbau Grundlagen",
      "category": "marine",
      "x": 2250,
      "y": 100,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Marine Drohnen",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen",
        "Marine Aufklärungssysteme"
      ]
    },
    {
      "id": "hydrodynamik",
      "name": "Hydrodynamik",
      "category": "marine",
      "x": 2250,
      "y": 160,
      "prerequisites": [
        "Stahlproduktion",
        "Mathematik Grundlagen",
        "Verbundschiffbau",
        "Fluidmechanik",
        "Strömungsmechanik",
        "Wetterkunde"
      ]
    },
    {
      "id": "schiffsstruktur",
      "name": "Schiffsstruktur",
      "category": "marine",
      "x": 2250,
      "y": 220,
      "prerequisites": [
        "Strukturmechanik",
        "Stahlproduktion",
        "U Boot Drohnen",
        "Navigation",
        "Wetterkunde",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "stahlschiffbau",
      "name": "Stahlschiffbau",
      "category": "marine",
      "x": 2250,
      "y": 280,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "verbundschiffbau",
      "name": "Verbundschiffbau",
      "category": "marine",
      "x": 2250,
      "y": 340,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "dieselantrieb_schiffe",
      "name": "Dieselantrieb Schiffe",
      "category": "marine",
      "x": 2250,
      "y": 400,
      "prerequisites": [
        "Schiffsstruktur",
        "Stahlproduktion",
        "Navigation",
        "Verbrennungsmotoren",
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik"
      ]
    },
    {
      "id": "gasturbinen_schiffe",
      "name": "Gasturbinen Schiffe",
      "category": "marine",
      "x": 2250,
      "y": 460,
      "prerequisites": [
        "Schiffsverteidigung KI",
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "nuklearantrieb_schiffe",
      "name": "Nuklearantrieb Schiffe",
      "category": "marine",
      "x": 2250,
      "y": 520,
      "prerequisites": [
        "Schiffsstruktur",
        "Kernspaltung",
        "Stahlproduktion",
        "Navigation",
        "Marine Reaktoren",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "propellerdesign",
      "name": "Propellerdesign",
      "category": "marine",
      "x": 2250,
      "y": 580,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "pumpjet_antrieb",
      "name": "Pumpjet Antrieb",
      "category": "marine",
      "x": 2250,
      "y": 640,
      "prerequisites": [
        "Navigation",
        "Wetterkunde",
        "Infrarottarnung Schiffe",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "u_boot_hydrodynamik",
      "name": "U Boot Hydrodynamik",
      "category": "marine",
      "x": 2250,
      "y": 700,
      "prerequisites": [
        "Navigation",
        "Maritime Satellitenüberwachung",
        "Stahlproduktion",
        "Fluidmechanik"
      ]
    },
    {
      "id": "u_boot_tarnung",
      "name": "U Boot Tarnung",
      "category": "marine",
      "x": 2250,
      "y": 760,
      "prerequisites": [
        "Akustische Signaturreduktion",
        "Schiffsakustikoptimierung",
        "Stahlproduktion",
        "Mathematik Grundlagen",
        "Verbundschiffbau",
        "Wetterkunde"
      ]
    },
    {
      "id": "akustische_signaturreduktion",
      "name": "Akustische Signaturreduktion",
      "category": "marine",
      "x": 2250,
      "y": 820,
      "prerequisites": [
        "Navigation",
        "Fluidmechanik",
        "Tiefsee-Kuppelstadt",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "sonarsysteme",
      "name": "Sonarsysteme",
      "category": "marine",
      "x": 2250,
      "y": 880,
      "prerequisites": [
        "Radarabsorption Schiffe",
        "Akustik",
        "Informatik Grundlagen",
        "Physik Grundlagen",
        "Navigation",
        "Akustikmaterialien"
      ]
    },
    {
      "id": "aktives_sonar",
      "name": "Aktives Sonar",
      "category": "marine",
      "x": 2250,
      "y": 940,
      "prerequisites": [
        "Akustik",
        "Stahlproduktion",
        "Navigation",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Torpedos"
      ]
    },
    {
      "id": "passives_sonar",
      "name": "Passives Sonar",
      "category": "marine",
      "x": 2250,
      "y": 1000,
      "prerequisites": [
        "Akustik",
        "Navigation",
        "Fluidmechanik",
        "Hydrodynamik",
        "Signalverarbeitung Grundlagen",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "sonarbojen",
      "name": "Sonarbojen",
      "category": "marine",
      "x": 2250,
      "y": 1060,
      "prerequisites": [
        "Akustik",
        "Wetterkunde",
        "Fluidmechanik",
        "Trägeroperationen",
        "Hydrodynamik",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "magnetdetektion",
      "name": "Magnetdetektion",
      "category": "marine",
      "x": 2250,
      "y": 1120,
      "prerequisites": [
        "Stahlproduktion",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Hydrodynamik",
        "Druckkörperbau",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "u_boot_jagd_systeme",
      "name": "U Boot Jagd Systeme",
      "category": "marine",
      "x": 2250,
      "y": 1180,
      "prerequisites": [
        "Informatik Grundlagen",
        "Navigation",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "torpedos",
      "name": "Torpedos",
      "category": "marine",
      "x": 2250,
      "y": 1240,
      "prerequisites": [
        "Wetterkunde",
        "Fluidmechanik"
      ]
    },
    {
      "id": "schwere_torpedos",
      "name": "Schwere Torpedos",
      "category": "marine",
      "x": 2250,
      "y": 1300,
      "prerequisites": [
        "Schiffsakustikoptimierung",
        "Navigation",
        "Aktives Sonar",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "leichte_torpedos",
      "name": "Leichte Torpedos",
      "category": "marine",
      "x": 2250,
      "y": 1360,
      "prerequisites": [
        "Schiffbau Grundlagen",
        "Hydrodynamik",
        "Stahlproduktion"
      ]
    },
    {
      "id": "antischiffsraketen",
      "name": "Antischiffsraketen",
      "category": "marine",
      "x": 2250,
      "y": 1420,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Stahlproduktion",
        "U Boot Drohnen",
        "Navigation",
        "Aerodynamik"
      ]
    },
    {
      "id": "schiffsabwehrraketen",
      "name": "Schiffsabwehrraketen",
      "category": "marine",
      "x": 2250,
      "y": 1480,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Stahlproduktion",
        "Navigation",
        "Mathematik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "ciws_systeme",
      "name": "CIWS Systeme",
      "category": "marine",
      "x": 2250,
      "y": 1540,
      "prerequisites": [
        "Informatik Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik",
        "Netzwerktechnik"
      ]
    },
    {
      "id": "schiffslaserabwehr",
      "name": "Schiffslaserabwehr",
      "category": "marine",
      "x": 2250,
      "y": 1600,
      "prerequisites": [
        "Stahlproduktion",
        "Elektromagnetismus",
        "Navigation",
        "Lasertechnologie",
        "Wetterkunde",
        "Fluidmechanik"
      ]
    },
    {
      "id": "schiffsraketenabwehr",
      "name": "Schiffsraketenabwehr",
      "category": "marine",
      "x": 2250,
      "y": 1660,
      "prerequisites": [
        "Thermodynamik",
        "Stahlproduktion",
        "Navigation",
        "Maritime Satellitenüberwachung",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "aegis_kampfsystem",
      "name": "Aegis Kampfsystem",
      "category": "marine",
      "x": 2250,
      "y": 1720,
      "prerequisites": [
        "Datenanalyse",
        "Informatik Grundlagen",
        "Raketenabwehrsysteme",
        "Torpedosteuerung KI",
        "Wetterkunde",
        "Fluidmechanik"
      ]
    },
    {
      "id": "marine_radar",
      "name": "Marine Radar",
      "category": "marine",
      "x": 2250,
      "y": 1780,
      "prerequisites": [
        "Tarnkappen-Zerstörer",
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Hydrodynamik",
        "Antennentechnik"
      ]
    },
    {
      "id": "phased_array_radar",
      "name": "Phased Array Radar",
      "category": "marine",
      "x": 2250,
      "y": 1840,
      "prerequisites": [
        "Stahlproduktion",
        "Elektromagnetismus",
        "Navigation",
        "U Boot KI Navigation",
        "Mathematik Grundlagen",
        "Wetterkunde"
      ]
    },
    {
      "id": "aesa_marine_radar",
      "name": "AESA Marine Radar",
      "category": "marine",
      "x": 2250,
      "y": 1900,
      "prerequisites": [
        "Stahlproduktion",
        "Elektromagnetismus",
        "Navigation",
        "Fluidmechanik",
        "Hydrodynamik",
        "Antennentechnik"
      ]
    },
    {
      "id": "marine_kommunikationssysteme",
      "name": "Marine Kommunikationssysteme",
      "category": "marine",
      "x": 2250,
      "y": 1960,
      "prerequisites": [
        "Informatik Grundlagen",
        "Elektromagnetismus",
        "Navigation",
        "Fluidmechanik",
        "Netzwerktechnik",
        "Hydrodynamik"
      ]
    },
    {
      "id": "schiffsdatennetzwerke",
      "name": "Schiffsdatennetzwerke",
      "category": "marine",
      "x": 2250,
      "y": 2020,
      "prerequisites": [
        "Informatik Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Mathematik Grundlagen",
        "Netzwerktechnik"
      ]
    },
    {
      "id": "flugdecksysteme",
      "name": "Flugdecksysteme",
      "category": "marine",
      "x": 2250,
      "y": 2080,
      "prerequisites": [
        "Informatik Grundlagen",
        "Navigation",
        "Wetterkunde",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Modulare Kriegsschiffe"
      ]
    },
    {
      "id": "tr_geroperationen",
      "name": "Trägeroperationen",
      "category": "marine",
      "x": 2250,
      "y": 2140,
      "prerequisites": [
        "Schiffsakustikoptimierung",
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik",
        "Hydrodynamik"
      ]
    },
    {
      "id": "tr_gerflugzeuge_integration",
      "name": "Trägerflugzeuge Integration",
      "category": "marine",
      "x": 2250,
      "y": 2200,
      "prerequisites": [
        "Thermodynamik",
        "Stahlproduktion",
        "Navigation",
        "Aerodynamik",
        "Fluidmechanik",
        "Leichtmetall"
      ]
    },
    {
      "id": "marine_drohnen",
      "name": "Marine Drohnen",
      "category": "marine",
      "x": 2250,
      "y": 2260,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Navigation",
        "Signaturreduktion Schiffe",
        "Aerodynamik",
        "Fluidmechanik",
        "U Boot Hydrodynamik"
      ]
    },
    {
      "id": "u_boot_drohnen",
      "name": "U Boot Drohnen",
      "category": "marine",
      "x": 2250,
      "y": 2320,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Aerodynamik",
        "Sensortechnologie",
        "Hydrodynamik"
      ]
    },
    {
      "id": "unterwasserfahrzeuge",
      "name": "Unterwasserfahrzeuge",
      "category": "marine",
      "x": 2250,
      "y": 2380,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Wetterkunde",
        "Stahlproduktion",
        "Fluidmechanik"
      ]
    },
    {
      "id": "schwarm_unterwasserdrohnen",
      "name": "Schwarm Unterwasserdrohnen",
      "category": "marine",
      "x": 2250,
      "y": 2440,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Ozeanische Sensornetzwerke",
        "Aerodynamik",
        "Sensortechnologie"
      ]
    },
    {
      "id": "marine_aufkl_rungssysteme",
      "name": "Marine Aufklärungssysteme",
      "category": "marine",
      "x": 2250,
      "y": 2500,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Torpedos",
        "Fluidmechanik",
        "Unterwasserfahrzeuge"
      ]
    },
    {
      "id": "maritime_satelliten_berwachung",
      "name": "Maritime Satellitenüberwachung",
      "category": "marine",
      "x": 2250,
      "y": 2560,
      "prerequisites": [
        "Telemetrie",
        "Stahlproduktion",
        "Wetterkunde",
        "Fluidmechanik",
        "Küstenverteidigungssysteme"
      ]
    },
    {
      "id": "marine_logistik",
      "name": "Marine Logistik",
      "category": "marine",
      "x": 2250,
      "y": 2620,
      "prerequisites": [
        "Stahlproduktion",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "marine_reparatursysteme",
      "name": "Marine Reparatursysteme",
      "category": "marine",
      "x": 2250,
      "y": 2680,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "modulare_kriegsschiffe",
      "name": "Modulare Kriegsschiffe",
      "category": "marine",
      "x": 2250,
      "y": 2740,
      "prerequisites": [
        "Schwarm Unterwasserdrohnen",
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "stealth_kriegsschiffe",
      "name": "Stealth Kriegsschiffe",
      "category": "marine",
      "x": 2250,
      "y": 2800,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen",
        "Strategische Seemacht"
      ]
    },
    {
      "id": "signaturreduktion_schiffe",
      "name": "Signaturreduktion Schiffe",
      "category": "marine",
      "x": 2250,
      "y": 2860,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Schiffsraketenabwehr",
        "Wetterkunde",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "infrarottarnung_schiffe",
      "name": "Infrarottarnung Schiffe",
      "category": "marine",
      "x": 2250,
      "y": 2920,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik"
      ]
    },
    {
      "id": "radarabsorption_schiffe",
      "name": "Radarabsorption Schiffe",
      "category": "marine",
      "x": 2250,
      "y": 2980,
      "prerequisites": [
        "Stahlproduktion",
        "Elektromagnetismus",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "schiffsakustikoptimierung",
      "name": "Schiffsakustikoptimierung",
      "category": "marine",
      "x": 2250,
      "y": 3040,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik"
      ]
    },
    {
      "id": "marine_ki_gefechtsf_hrung",
      "name": "Marine KI Gefechtsführung",
      "category": "marine",
      "x": 2250,
      "y": 3100,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Mathematik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "u_boot_ki_navigation",
      "name": "U Boot KI Navigation",
      "category": "marine",
      "x": 2250,
      "y": 3160,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Mathematik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "torpedosteuerung_ki",
      "name": "Torpedosteuerung KI",
      "category": "marine",
      "x": 2250,
      "y": 3220,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Maritime Satellitenüberwachung",
        "Sonarsysteme"
      ]
    },
    {
      "id": "schiffsverteidigung_ki",
      "name": "Schiffsverteidigung KI",
      "category": "marine",
      "x": 2250,
      "y": 3280,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Mathematik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "flottenkoordinierung_ki",
      "name": "Flottenkoordinierung KI",
      "category": "marine",
      "x": 2250,
      "y": 3340,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Mathematik Grundlagen",
        "Druckkörperbau"
      ]
    },
    {
      "id": "seeschlacht_simulation",
      "name": "Seeschlacht Simulation",
      "category": "marine",
      "x": 2250,
      "y": 3400,
      "prerequisites": [
        "Propellerdesign",
        "Fluidmechanik",
        "U Boot Hydrodynamik",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "u_boot_krieg_simulation",
      "name": "U Boot Krieg Simulation",
      "category": "marine",
      "x": 2250,
      "y": 3460,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Fluidmechanik",
        "Küstenverteidigungssysteme",
        "Kavitationsantrieb",
        "Hydrodynamik"
      ]
    },
    {
      "id": "tr_gerkampf_simulation",
      "name": "Trägerkampf Simulation",
      "category": "marine",
      "x": 2250,
      "y": 3520,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "strategische_seemacht",
      "name": "Strategische Seemacht",
      "category": "marine",
      "x": 2250,
      "y": 3580,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Fluidmechanik",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "amphibische_kriegf_hrung",
      "name": "Amphibische Kriegführung",
      "category": "marine",
      "x": 2250,
      "y": 3640,
      "prerequisites": [
        "Radarabsorption Schiffe",
        "Schwarm Marine Überwachung",
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Fluidmechanik"
      ]
    },
    {
      "id": "landungsboote",
      "name": "Landungsboote",
      "category": "marine",
      "x": 2250,
      "y": 3700,
      "prerequisites": [
        "Navigation",
        "Wetterkunde",
        "Mathematik Grundlagen",
        "Hydrodynamik",
        "Gasturbinen Schiffe",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "marine_infanterie_systeme",
      "name": "Marine Infanterie Systeme",
      "category": "marine",
      "x": 2250,
      "y": 3760,
      "prerequisites": [
        "Informatik Grundlagen",
        "Navigation",
        "Wetterkunde",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Netzwerktechnik"
      ]
    },
    {
      "id": "k_stenverteidigungssysteme",
      "name": "Küstenverteidigungssysteme",
      "category": "marine",
      "x": 2250,
      "y": 3820,
      "prerequisites": [
        "Navigation",
        "Stahlproduktion",
        "Wetterkunde",
        "Fluidmechanik"
      ]
    },
    {
      "id": "seeminen",
      "name": "Seeminen",
      "category": "marine",
      "x": 2250,
      "y": 3880,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Hydrodynamik"
      ]
    },
    {
      "id": "minenabwehrsysteme",
      "name": "Minenabwehrsysteme",
      "category": "marine",
      "x": 2250,
      "y": 3940,
      "prerequisites": [
        "Informatik Grundlagen",
        "Schiffbau Grundlagen",
        "Hydrodynamik",
        "Stahlproduktion"
      ]
    },
    {
      "id": "marine_sensorfusion",
      "name": "Marine Sensorfusion",
      "category": "marine",
      "x": 2250,
      "y": 4000,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Aegis Kampfsystem",
        "Fluidmechanik",
        "Schiffbau Grundlagen",
        "Marine Radar"
      ]
    },
    {
      "id": "unterwasserkommunikation",
      "name": "Unterwasserkommunikation",
      "category": "marine",
      "x": 2250,
      "y": 4060,
      "prerequisites": [
        "Fusionsgetriebene Schiffe",
        "Elektromagnetismus",
        "Navigation",
        "Wetterkunde",
        "Mathematik Grundlagen",
        "Netzwerktechnik"
      ]
    },
    {
      "id": "laserkommunikation_unterwasser",
      "name": "Laserkommunikation Unterwasser",
      "category": "marine",
      "x": 2250,
      "y": 4120,
      "prerequisites": [
        "Elektromagnetismus",
        "Lasertechnologie",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Fluidmechanik",
        "Netzwerktechnik"
      ]
    },
    {
      "id": "satellitenkommunikation_marine",
      "name": "Satellitenkommunikation Marine",
      "category": "marine",
      "x": 2250,
      "y": 4180,
      "prerequisites": [
        "Telemetrie",
        "Stahlproduktion",
        "Elektromagnetismus",
        "Wetterkunde",
        "Fluidmechanik",
        "Netzwerktechnik"
      ]
    },
    {
      "id": "globales_flottennetzwerk",
      "name": "Globales Flottennetzwerk",
      "category": "marine",
      "x": 2250,
      "y": 4240,
      "prerequisites": [
        "Informatik Grundlagen",
        "Navigation",
        "Fluidmechanik",
        "Netzwerktechnik",
        "Kommunikationsnetze",
        "Hydrodynamik"
      ]
    },
    {
      "id": "maritime_berwachungsnetzwerke",
      "name": "Maritime Überwachungsnetzwerke",
      "category": "marine",
      "x": 2250,
      "y": 4300,
      "prerequisites": [
        "Informatik Grundlagen",
        "Stahlproduktion",
        "Navigation",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Kommunikationsnetze"
      ]
    },
    {
      "id": "ozeanische_sensornetzwerke",
      "name": "Ozeanische Sensornetzwerke",
      "category": "marine",
      "x": 2250,
      "y": 4360,
      "prerequisites": [
        "Informatik Grundlagen",
        "Fluidmechanik",
        "Netzwerktechnik",
        "Kommunikationsnetze",
        "Hydrodynamik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "unterwasser_berwachungsnetze",
      "name": "Unterwasserüberwachungsnetze",
      "category": "marine",
      "x": 2250,
      "y": 4420,
      "prerequisites": [
        "Stahlproduktion",
        "Navigation",
        "Wetterkunde",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Kommunikationsnetze"
      ]
    },
    {
      "id": "strategische_marineplanung",
      "name": "Strategische Marineplanung",
      "category": "marine",
      "x": 2250,
      "y": 4480,
      "prerequisites": [
        "Navigation",
        "Schiffbau Grundlagen",
        "Wetterkunde",
        "Fluidmechanik"
      ]
    },
    {
      "id": "globale_seelogistik",
      "name": "Globale Seelogistik",
      "category": "marine",
      "x": 2250,
      "y": 4540,
      "prerequisites": [
        "Trägerflugzeuge Integration",
        "Stahlproduktion",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Schiffbau Grundlagen"
      ]
    },
    {
      "id": "milit_rische_seeherrschaft",
      "name": "Militärische Seeherrschaft",
      "category": "marine",
      "x": 2250,
      "y": 4600,
      "prerequisites": [
        "Phased Array Radar",
        "Navigation",
        "Wetterkunde",
        "Mathematik Grundlagen",
        "Fluidmechanik",
        "Militärische Grundlagen"
      ]
    },
    {
      "id": "ballistik_grundlagen",
      "name": "Ballistik Grundlagen",
      "category": "raketen",
      "x": 2600,
      "y": 100,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "raketentriebwerke",
      "name": "Raketentriebwerke",
      "category": "raketen",
      "x": 2600,
      "y": 160,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Treibstoffchemie",
        "Orbital KI Steuerung",
        "Mathematik Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "feststoffraketen",
      "name": "Feststoffraketen",
      "category": "raketen",
      "x": 2600,
      "y": 220,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Hyperschallraketen",
        "Radarzielsuche",
        "Mathematik Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "fl_ssigtreibstoffraketen",
      "name": "Flüssigtreibstoffraketen",
      "category": "raketen",
      "x": 2600,
      "y": 280,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Aerodynamik",
        "Strömungsmechanik",
        "Raketenantriebe"
      ]
    },
    {
      "id": "hybridraketen",
      "name": "Hybridraketen",
      "category": "raketen",
      "x": 2600,
      "y": 340,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Ionenantrieb",
        "Aerodynamik",
        "Satellitenfrühwarnsysteme",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "mehrstufenraketen",
      "name": "Mehrstufenraketen",
      "category": "raketen",
      "x": 2600,
      "y": 400,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Aerodynamik",
        "Strömungsmechanik",
        "Orbitalüberwachung",
        "Raketenantriebe"
      ]
    },
    {
      "id": "icbm_systeme",
      "name": "ICBM Systeme",
      "category": "raketen",
      "x": 2600,
      "y": 460,
      "prerequisites": [
        "Informatik Grundlagen",
        "Ballistische Raketen",
        "Boostphase Abwehr",
        "Aerodynamik",
        "Hyperschall Flugsteuerung",
        "Netzwerktechnik"
      ]
    },
    {
      "id": "slbm_systeme",
      "name": "SLBM Systeme",
      "category": "raketen",
      "x": 2600,
      "y": 520,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Strömungsmechanik",
        "Raketenantriebe"
      ]
    },
    {
      "id": "marschflugk_rper",
      "name": "Marschflugkörper",
      "category": "raketen",
      "x": 2600,
      "y": 580,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "hyperschallraketen",
      "name": "Hyperschallraketen",
      "category": "raketen",
      "x": 2600,
      "y": 640,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Mathematik Grundlagen",
        "Strömungsmechanik",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "luftabwehrraketen",
      "name": "Luftabwehrraketen",
      "category": "raketen",
      "x": 2600,
      "y": 700,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "raketenlenkung",
      "name": "Raketenlenkung",
      "category": "raketen",
      "x": 2600,
      "y": 760,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Strömungsmechanik",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Hybridraketen"
      ]
    },
    {
      "id": "tr_gheitsnavigation",
      "name": "Trägheitsnavigation",
      "category": "raketen",
      "x": 2600,
      "y": 820,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Strömungsmechanik",
        "Gyroskope",
        "Beschleunigungssensoren"
      ]
    },
    {
      "id": "satellitennavigation_raketen",
      "name": "Satellitennavigation Raketen",
      "category": "raketen",
      "x": 2600,
      "y": 880,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Telemetrie",
        "Aerodynamik",
        "Strömungsmechanik",
        "Satellitenbau"
      ]
    },
    {
      "id": "terrain_navigation_raketen",
      "name": "Terrain Navigation Raketen",
      "category": "raketen",
      "x": 2600,
      "y": 940,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Hitzeschilde Raketen",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "radarzielsuche",
      "name": "Radarzielsuche",
      "category": "raketen",
      "x": 2600,
      "y": 1000,
      "prerequisites": [
        "Elektromagnetismus",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Antennentechnik",
        "Signalverarbeitung Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "infrarotzielsuche",
      "name": "Infrarotzielsuche",
      "category": "raketen",
      "x": 2600,
      "y": 1060,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Raketenantriebe",
        "Weltraumnavigation"
      ]
    },
    {
      "id": "laserzielsuche",
      "name": "Laserzielsuche",
      "category": "raketen",
      "x": 2600,
      "y": 1120,
      "prerequisites": [
        "Treibstoffchemie",
        "Elektromagnetismus",
        "Lasertechnologie",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "ki_raketensteuerung",
      "name": "KI Raketensteuerung",
      "category": "raketen",
      "x": 2600,
      "y": 1180,
      "prerequisites": [
        "Maschinelles Lernen",
        "Numerische Simulation",
        "Informatik Grundlagen",
        "Orbital KI Steuerung",
        "Thermodynamik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "raketenabwehrsysteme",
      "name": "Raketenabwehrsysteme",
      "category": "raketen",
      "x": 2600,
      "y": 1240,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Informatik Grundlagen",
        "Marschflugkörper",
        "Aerodynamik",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "abm_systeme",
      "name": "ABM Systeme",
      "category": "raketen",
      "x": 2600,
      "y": 1300,
      "prerequisites": [
        "Thermodynamik",
        "Informatik Grundlagen",
        "Strömungsmechanik",
        "Netzwerktechnik",
        "Raketenantriebe"
      ]
    },
    {
      "id": "hyperschallabwehr",
      "name": "Hyperschallabwehr",
      "category": "raketen",
      "x": 2600,
      "y": 1360,
      "prerequisites": [
        "Thermodynamik",
        "Hyperschallraketen",
        "Mathematik Grundlagen",
        "Strömungsmechanik",
        "Materialwissenschaft Grundlagen",
        "Deep Space Navigation"
      ]
    },
    {
      "id": "boostphase_abwehr",
      "name": "Boostphase Abwehr",
      "category": "raketen",
      "x": 2600,
      "y": 1420,
      "prerequisites": [
        "Raketenantriebe",
        "Orbitalverteidigung",
        "Aerodynamik"
      ]
    },
    {
      "id": "terminalphase_abwehr",
      "name": "Terminalphase Abwehr",
      "category": "raketen",
      "x": 2600,
      "y": 1480,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Strömungsmechanik",
        "Globale Raketenabschreckung",
        "Raketenantriebe"
      ]
    },
    {
      "id": "raketenwarnsysteme",
      "name": "Raketenwarnsysteme",
      "category": "raketen",
      "x": 2600,
      "y": 1540,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Informatik Grundlagen",
        "Radarzielsuche",
        "Aerodynamik",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "fr_hwarnradar",
      "name": "Frühwarnradar",
      "category": "raketen",
      "x": 2600,
      "y": 1600,
      "prerequisites": [
        "ABM Systeme",
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Strömungsmechanik",
        "Aerodynamik",
        "Antennentechnik"
      ]
    },
    {
      "id": "satellitenfr_hwarnsysteme",
      "name": "Satellitenfrühwarnsysteme",
      "category": "raketen",
      "x": 2600,
      "y": 1660,
      "prerequisites": [
        "Thermodynamik",
        "Informatik Grundlagen",
        "Telemetrie",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "U Boot Raketenstart"
      ]
    },
    {
      "id": "raketenstartplattformen",
      "name": "Raketenstartplattformen",
      "category": "raketen",
      "x": 2600,
      "y": 1720,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Raketentriebwerke",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "mobile_raketenplattformen",
      "name": "Mobile Raketenplattformen",
      "category": "raketen",
      "x": 2600,
      "y": 1780,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenstartplattformen"
      ]
    },
    {
      "id": "u_boot_raketenstart",
      "name": "U Boot Raketenstart",
      "category": "raketen",
      "x": 2600,
      "y": 1840,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik"
      ]
    },
    {
      "id": "flugzeug_raketenstart",
      "name": "Flugzeug Raketenstart",
      "category": "raketen",
      "x": 2600,
      "y": 1900,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Aerodynamik",
        "Leichtmetall",
        "Raketenantriebe"
      ]
    },
    {
      "id": "orbitalraketen",
      "name": "Orbitalraketen",
      "category": "raketen",
      "x": 2600,
      "y": 1960,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Hyperschall Flugsteuerung",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "satellitenstartsysteme",
      "name": "Satellitenstartsysteme",
      "category": "raketen",
      "x": 2600,
      "y": 2020,
      "prerequisites": [
        "Thermodynamik",
        "Informatik Grundlagen",
        "Telemetrie",
        "Satellitenbau",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "wiedereintrittstechnologie",
      "name": "Wiedereintrittstechnologie",
      "category": "raketen",
      "x": 2600,
      "y": 2080,
      "prerequisites": [
        "Thermodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "hitzeschilde_raketen",
      "name": "Hitzeschilde Raketen",
      "category": "raketen",
      "x": 2600,
      "y": 2140,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe",
        "Hochtemperaturkeramik"
      ]
    },
    {
      "id": "raketenstrukturdesign",
      "name": "Raketenstrukturdesign",
      "category": "raketen",
      "x": 2600,
      "y": 2200,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Mathematik Grundlagen",
        "Strömungsmechanik",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "treibstoffchemie",
      "name": "Treibstoffchemie",
      "category": "raketen",
      "x": 2600,
      "y": 2260,
      "prerequisites": [
        "Thermodynamik",
        "Chemie Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Raketenantriebe",
        "Flüssigtreibstoffraketen"
      ]
    },
    {
      "id": "raketentanksysteme",
      "name": "Raketentanksysteme",
      "category": "raketen",
      "x": 2600,
      "y": 2320,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Informatik Grundlagen",
        "Aerodynamik",
        "Raketenantriebe"
      ]
    },
    {
      "id": "raketenstabilisierung",
      "name": "Raketenstabilisierung",
      "category": "raketen",
      "x": 2600,
      "y": 2380,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Raketenantriebe",
        "Aerodynamik"
      ]
    },
    {
      "id": "flugsteuerung_raketen",
      "name": "Flugsteuerung Raketen",
      "category": "raketen",
      "x": 2600,
      "y": 2440,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Strömungsmechanik",
        "Aerodynamik",
        "Mobile Raketenplattformen",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "raketen_telemetrie",
      "name": "Raketen Telemetrie",
      "category": "raketen",
      "x": 2600,
      "y": 2500,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Strategische Raketenkräfte",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "raketen_tracking_systeme",
      "name": "Raketen Tracking Systeme",
      "category": "raketen",
      "x": 2600,
      "y": 2560,
      "prerequisites": [
        "Maschinelles Lernen",
        "Numerische Simulation",
        "Informatik Grundlagen",
        "Thermodynamik",
        "Mathematik Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "raketen_simulation",
      "name": "Raketen Simulation",
      "category": "raketen",
      "x": 2600,
      "y": 2620,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Strömungsmechanik",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenstrukturdesign"
      ]
    },
    {
      "id": "hyperschall_flugsteuerung",
      "name": "Hyperschall Flugsteuerung",
      "category": "raketen",
      "x": 2600,
      "y": 2680,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Strömungsmechanik",
        "Frühwarnradar",
        "Raketenantriebe"
      ]
    },
    {
      "id": "orbitaltransferbahnen",
      "name": "Orbitaltransferbahnen",
      "category": "raketen",
      "x": 2600,
      "y": 2740,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Strömungsmechanik",
        "Materialwissenschaft Grundlagen",
        "Frühwarnradar",
        "Trägheitsnavigation",
        "Raketenantriebe"
      ]
    },
    {
      "id": "weltraumnavigation",
      "name": "Weltraumnavigation",
      "category": "raketen",
      "x": 2600,
      "y": 2800,
      "prerequisites": [
        "Thermodynamik",
        "Lebenserhaltungssysteme",
        "Terminalphase Abwehr",
        "Astronomie",
        "Mathematik Grundlagen",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "deep_space_navigation",
      "name": "Deep Space Navigation",
      "category": "raketen",
      "x": 2600,
      "y": 2860,
      "prerequisites": [
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "interplanetare_navigation",
      "name": "Interplanetare Navigation",
      "category": "raketen",
      "x": 2600,
      "y": 2920,
      "prerequisites": [
        "Thermodynamik",
        "Orbitalplattformen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "orbitalplattformen",
      "name": "Orbitalplattformen",
      "category": "raketen",
      "x": 2600,
      "y": 2980,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "orbitalverteidigung",
      "name": "Orbitalverteidigung",
      "category": "raketen",
      "x": 2600,
      "y": 3040,
      "prerequisites": [
        "Raketenantriebe",
        "Aerodynamik"
      ]
    },
    {
      "id": "orbitalwaffen",
      "name": "Orbitalwaffen",
      "category": "raketen",
      "x": 2600,
      "y": 3100,
      "prerequisites": [
        "Interplanetare Navigation",
        "Thermodynamik",
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Aerodynamik",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "orbital_berwachung",
      "name": "Orbitalüberwachung",
      "category": "raketen",
      "x": 2600,
      "y": 3160,
      "prerequisites": [
        "Hyperschallrakete",
        "Raketentriebwerke",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "orbital_ki_steuerung",
      "name": "Orbital KI Steuerung",
      "category": "raketen",
      "x": 2600,
      "y": 3220,
      "prerequisites": [
        "Maschinelles Lernen",
        "Thermodynamik",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "strategische_raketenkr_fte",
      "name": "Strategische Raketenkräfte",
      "category": "raketen",
      "x": 2600,
      "y": 3280,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "KI Raketensteuerung",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Hyperschall Flugsteuerung"
      ]
    },
    {
      "id": "globale_raketenabschreckung",
      "name": "Globale Raketenabschreckung",
      "category": "raketen",
      "x": 2600,
      "y": 3340,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "milit_rische_raumfahrtstrategie",
      "name": "Militärische Raumfahrtstrategie",
      "category": "raketen",
      "x": 2600,
      "y": 3400,
      "prerequisites": [
        "Raketen Telemetrie",
        "Strömungsmechanik",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Militärische Grundlagen",
        "Luftfahrt"
      ]
    },
    {
      "id": "polymerchemie",
      "name": "Polymerchemie",
      "category": "chemie",
      "x": 2950,
      "y": 100,
      "prerequisites": [
        "Chemie Grundlagen",
        "Organische Chemie",
        "Materialchemie"
      ]
    },
    {
      "id": "petrochemie",
      "name": "Petrochemie",
      "category": "chemie",
      "x": 2950,
      "y": 160,
      "prerequisites": [
        "Thermodynamik",
        "Chemie Grundlagen",
        "Organische Chemie",
        "Mathematik Grundlagen",
        "Chemische Prozessoptimierung"
      ]
    },
    {
      "id": "biochemie",
      "name": "Biochemie",
      "category": "chemie",
      "x": 2950,
      "y": 220,
      "prerequisites": [
        "Chemie Grundlagen",
        "Biologie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "elektrochemie",
      "name": "Elektrochemie",
      "category": "chemie",
      "x": 2950,
      "y": 280,
      "prerequisites": [
        "Chemie Grundlagen",
        "Materialchemie"
      ]
    },
    {
      "id": "kolloidchemie",
      "name": "Kolloidchemie",
      "category": "chemie",
      "x": 2950,
      "y": 340,
      "prerequisites": [
        "Atmosphärische Terraforming-Chemie",
        "Chemie Grundlagen"
      ]
    },
    {
      "id": "industrielle_chemie",
      "name": "Industrielle Chemie",
      "category": "chemie",
      "x": 2950,
      "y": 400,
      "prerequisites": [
        "Chemische Sicherheitssysteme",
        "Reaktionstechnik",
        "Chemie Grundlagen",
        "Chemische Simulation"
      ]
    },
    {
      "id": "photochemie",
      "name": "Photochemie",
      "category": "chemie",
      "x": 2950,
      "y": 460,
      "prerequisites": [
        "Nanochemie",
        "Chemie Grundlagen",
        "Mathematik Grundlagen",
        "Industrielle Chemie"
      ]
    },
    {
      "id": "umweltchemie",
      "name": "Umweltchemie",
      "category": "chemie",
      "x": 2950,
      "y": 520,
      "prerequisites": [
        "Chemie Grundlagen",
        "Chemische Prozessoptimierung",
        "Künstliche Enzyme"
      ]
    },
    {
      "id": "materialchemie",
      "name": "Materialchemie",
      "category": "chemie",
      "x": 2950,
      "y": 580,
      "prerequisites": [
        "Chemie Grundlagen",
        "Chemische Simulation",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "oberfl_chenchemie",
      "name": "Oberflächenchemie",
      "category": "chemie",
      "x": 2950,
      "y": 640,
      "prerequisites": [
        "Chemie Grundlagen",
        "Chemische Simulation",
        "Künstliche Enzyme"
      ]
    },
    {
      "id": "nanochemie",
      "name": "Nanochemie",
      "category": "chemie",
      "x": 2950,
      "y": 700,
      "prerequisites": [
        "Chemie Grundlagen",
        "Bio-Treibstoffe",
        "Mathematik Grundlagen",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "katalyse",
      "name": "Katalyse",
      "category": "chemie",
      "x": 2950,
      "y": 760,
      "prerequisites": [
        "Physikalische Chemie",
        "Anorganische Chemie",
        "Organische Chemie",
        "Supramolekulare Chemie"
      ]
    },
    {
      "id": "reaktionstechnik",
      "name": "Reaktionstechnik",
      "category": "chemie",
      "x": 2950,
      "y": 820,
      "prerequisites": [
        "Supramolekulare Chemie",
        "Festkörperchemie",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "chemische_trennverfahren",
      "name": "Chemische Trennverfahren",
      "category": "chemie",
      "x": 2950,
      "y": 880,
      "prerequisites": [
        "Chemie Grundlagen",
        "Industrielle Chemie",
        "Physikalische Chemie",
        "Anorganische Chemie"
      ]
    },
    {
      "id": "gaschemie",
      "name": "Gaschemie",
      "category": "chemie",
      "x": 2950,
      "y": 940,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physikalische Chemie",
        "Thermodynamik"
      ]
    },
    {
      "id": "fl_ssigphasenchemie",
      "name": "Flüssigphasenchemie",
      "category": "chemie",
      "x": 2950,
      "y": 1000,
      "prerequisites": [
        "Molekulardynamik",
        "Chemie Grundlagen",
        "Festkörperchemie"
      ]
    },
    {
      "id": "festk_rperchemie",
      "name": "Festkörperchemie",
      "category": "chemie",
      "x": 2950,
      "y": 1060,
      "prerequisites": [
        "Chemie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "supramolekulare_chemie",
      "name": "Supramolekulare Chemie",
      "category": "chemie",
      "x": 2950,
      "y": 1120,
      "prerequisites": [
        "Chemie Grundlagen",
        "Organische Chemie",
        "Physikalische Chemie",
        "Quantenmechanik"
      ]
    },
    {
      "id": "chemische_simulation",
      "name": "Chemische Simulation",
      "category": "chemie",
      "x": 2950,
      "y": 1180,
      "prerequisites": [
        "Quantenchemie",
        "Plasmachemie"
      ]
    },
    {
      "id": "chemische_prozessoptimierung",
      "name": "Chemische Prozessoptimierung",
      "category": "chemie",
      "x": 2950,
      "y": 1240,
      "prerequisites": [
        "Biochemie",
        "Chemische Trennverfahren"
      ]
    },
    {
      "id": "chemische_sicherheitssysteme",
      "name": "Chemische Sicherheitssysteme",
      "category": "chemie",
      "x": 2950,
      "y": 1300,
      "prerequisites": [
        "Chemie Grundlagen",
        "Organische Chemie",
        "Toxikologie"
      ]
    },
    {
      "id": "hochtemperaturchemie",
      "name": "Hochtemperaturchemie",
      "category": "chemie",
      "x": 2950,
      "y": 1360,
      "prerequisites": [
        "Kohlenstoffchemie",
        "Chemie Grundlagen",
        "Kolloidchemie",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "plasmachemie",
      "name": "Plasmachemie",
      "category": "chemie",
      "x": 2950,
      "y": 1420,
      "prerequisites": [
        "Reaktionstechnik",
        "Chemie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "temperatursensoren",
      "name": "Temperatursensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 100,
      "prerequisites": [
        "Digitale Systeme",
        "Elektronik Grundlagen",
        "Sensorik",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "drucksensoren",
      "name": "Drucksensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 160,
      "prerequisites": [
        "Bewegungssensoren",
        "Elektronik Grundlagen",
        "Sensorik",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "beschleunigungssensoren",
      "name": "Beschleunigungssensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 220,
      "prerequisites": [
        "Gassensoren",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Digitale Systeme",
        "Sensorik"
      ]
    },
    {
      "id": "gyroskope",
      "name": "Gyroskope",
      "category": "sensorik",
      "x": 3300,
      "y": 280,
      "prerequisites": [
        "Radarsensoren",
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Optik Grundlagen",
        "Digitale Systeme",
        "Sensorik"
      ]
    },
    {
      "id": "magnetsensoren",
      "name": "Magnetsensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 340,
      "prerequisites": [
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Optik Grundlagen",
        "Digitale Systeme",
        "Sensorik"
      ]
    },
    {
      "id": "n_herungssensoren",
      "name": "Näherungssensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 400,
      "prerequisites": [
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Gyroskope",
        "LIDAR-Systeme"
      ]
    },
    {
      "id": "infrarotsensoren",
      "name": "Infrarotsensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 460,
      "prerequisites": [
        "Thermodynamik",
        "Holographie",
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Halbleiterfertigung",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "ultraschallsensoren",
      "name": "Ultraschallsensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 520,
      "prerequisites": [
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Optik Grundlagen",
        "Digitale Systeme",
        "Sensorik"
      ]
    },
    {
      "id": "radarsensoren",
      "name": "Radarsensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 580,
      "prerequisites": [
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Antennentechnik",
        "Digitale Systeme"
      ]
    },
    {
      "id": "lidarsensoren",
      "name": "Lidarsensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 640,
      "prerequisites": [
        "Positionssensoren",
        "Elektronik Grundlagen",
        "Lasersysteme",
        "Optik Grundlagen",
        "Sensorik"
      ]
    },
    {
      "id": "kamerasensoren",
      "name": "Kamerasensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 700,
      "prerequisites": [
        "Elektromagnetismus",
        "Sensorik",
        "Mathematik Grundlagen",
        "Lasersysteme"
      ]
    },
    {
      "id": "biosensoren",
      "name": "Biosensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 760,
      "prerequisites": [
        "Lichtintensitätssensoren",
        "Chemie Grundlagen",
        "Spektroskopie",
        "Elektronik Grundlagen",
        "Optik Grundlagen",
        "Biologie Grundlagen"
      ]
    },
    {
      "id": "gassensoren",
      "name": "Gassensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 820,
      "prerequisites": [
        "Spektroskopische Sensoren",
        "Spektroskopie",
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Optik Grundlagen",
        "Sensorik"
      ]
    },
    {
      "id": "chemische_sensoren",
      "name": "Chemische Sensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 880,
      "prerequisites": [
        "Gravitationssensoren",
        "Elektronik Grundlagen",
        "Sensorik",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "feuchtigkeitssensoren",
      "name": "Feuchtigkeitssensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 940,
      "prerequisites": [
        "Elektronik Grundlagen",
        "Optik Grundlagen",
        "Mikroskopie",
        "Ultraschallsensoren",
        "Digitale Systeme",
        "Sensorik"
      ]
    },
    {
      "id": "lichtintensit_tssensoren",
      "name": "Lichtintensitätssensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 1000,
      "prerequisites": [
        "Digitale Systeme",
        "Gassensoren",
        "Sensorik",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "spektroskopische_sensoren",
      "name": "Spektroskopische Sensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 1060,
      "prerequisites": [
        "Sensorik",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "quanten_sensorik",
      "name": "Quanten-Sensorik",
      "category": "sensorik",
      "x": 3300,
      "y": 1120,
      "prerequisites": [
        "Elektromagnetismus",
        "Fortgeschrittene Mathematik",
        "Mathematik Grundlagen",
        "Quantenmechanik",
        "Sensorik"
      ]
    },
    {
      "id": "multispektrale_sensorik",
      "name": "Multispektrale Sensorik",
      "category": "sensorik",
      "x": 3300,
      "y": 1180,
      "prerequisites": [
        "Digitale Systeme",
        "Sensorik",
        "Optik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "hyperspektrale_sensorik",
      "name": "Hyperspektrale Sensorik",
      "category": "sensorik",
      "x": 3300,
      "y": 1240,
      "prerequisites": [
        "Elektromagnetismus",
        "Positionssensoren",
        "Elektronik Grundlagen",
        "Gravitationswellendetektoren",
        "Optik Grundlagen",
        "Sensorik"
      ]
    },
    {
      "id": "bewegungssensoren",
      "name": "Bewegungssensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 1300,
      "prerequisites": [
        "Positionssensoren",
        "Gassensoren",
        "Elektronik Grundlagen",
        "Sensorik"
      ]
    },
    {
      "id": "positionssensoren",
      "name": "Positionssensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 1360,
      "prerequisites": [
        "Elektronik Grundlagen",
        "Sensorik",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "vibrationssensoren",
      "name": "Vibrationssensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 1420,
      "prerequisites": [
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Digitale Systeme",
        "Sensorik"
      ]
    },
    {
      "id": "strahlungssensoren",
      "name": "Strahlungssensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 1480,
      "prerequisites": [
        "Lidarsensoren",
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Optik Grundlagen",
        "Digitale Systeme",
        "Sensorik"
      ]
    },
    {
      "id": "gravitationssensoren",
      "name": "Gravitationssensoren",
      "category": "sensorik",
      "x": 3300,
      "y": 1540,
      "prerequisites": [
        "Elektromagnetismus",
        "Elektronik Grundlagen",
        "Sensorik",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "ballistische_waffen",
      "name": "Ballistische Waffen",
      "category": "waffen",
      "x": 3650,
      "y": 100,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Hochfester Stahl",
        "Mathematik Grundlagen",
        "Explosivstoffchemie",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "automatische_waffen",
      "name": "Automatische Waffen",
      "category": "waffen",
      "x": 3650,
      "y": 160,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Hochfester Stahl",
        "Klassische Mechanik",
        "Metallurgie Grundlagen",
        "Präzisionsgewehre"
      ]
    },
    {
      "id": "pr_zisionsgewehre",
      "name": "Präzisionsgewehre",
      "category": "waffen",
      "x": 3650,
      "y": 220,
      "prerequisites": [
        "Chemie Grundlagen",
        "Hochfester Stahl",
        "Mathematik Grundlagen",
        "Explosivstoffchemie",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "raketenwerfer",
      "name": "Raketenwerfer",
      "category": "waffen",
      "x": 3650,
      "y": 280,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Chemie Grundlagen",
        "Cluster-Munition",
        "Hochfester Stahl",
        "Aerodynamik"
      ]
    },
    {
      "id": "panzerabwehrwaffen",
      "name": "Panzerabwehrwaffen",
      "category": "waffen",
      "x": 3650,
      "y": 340,
      "prerequisites": [
        "Chemie Grundlagen",
        "Fahrzeugmechanik",
        "Physik Grundlagen",
        "Hochfester Stahl",
        "Mikrowellenwaffen (Active Denial)",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "flugabwehrsysteme",
      "name": "Flugabwehrsysteme",
      "category": "waffen",
      "x": 3650,
      "y": 400,
      "prerequisites": [
        "Mikrowellenwaffen",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Explosivstoffchemie",
        "Elektronische Kriegsführung",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "ballistische_raketen",
      "name": "Ballistische Raketen",
      "category": "waffen",
      "x": 3650,
      "y": 460,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Chemie Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "hyperschallwaffen",
      "name": "Hyperschallwaffen",
      "category": "waffen",
      "x": 3650,
      "y": 520,
      "prerequisites": [
        "Chemie Grundlagen",
        "Laserkanone",
        "Physik Grundlagen",
        "Hochfester Stahl",
        "Explosivstoffchemie",
        "Energiewaffen"
      ]
    },
    {
      "id": "laserwaffen",
      "name": "Laserwaffen",
      "category": "waffen",
      "x": 3650,
      "y": 580,
      "prerequisites": [
        "Laseroptische Materialien",
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Elektromagnetismus",
        "Hochfester Stahl",
        "Lasertechnologie"
      ]
    },
    {
      "id": "elektromagnetische_railguns",
      "name": "Elektromagnetische Railguns",
      "category": "waffen",
      "x": 3650,
      "y": 640,
      "prerequisites": [
        "Supraleiter Grundlagen",
        "Elektromagnetismus",
        "Hochfester Stahl",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Hochspannungssysteme"
      ]
    },
    {
      "id": "mikrowellenwaffen",
      "name": "Mikrowellenwaffen",
      "category": "waffen",
      "x": 3650,
      "y": 700,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Autonome Waffensysteme",
        "Hochfester Stahl",
        "Explosivstoffchemie",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "drohnenwaffen",
      "name": "Drohnenwaffen",
      "category": "waffen",
      "x": 3650,
      "y": 760,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Hochfester Stahl",
        "Mathematik Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "autonome_waffensysteme",
      "name": "Autonome Waffensysteme",
      "category": "waffen",
      "x": 3650,
      "y": 820,
      "prerequisites": [
        "Informatik Grundlagen",
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Hochfester Stahl",
        "Mathematik Grundlagen",
        "Explosivstoffchemie"
      ]
    },
    {
      "id": "cyberwaffen",
      "name": "Cyberwaffen",
      "category": "waffen",
      "x": 3650,
      "y": 880,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Explosivstoffchemie",
        "Laserwaffen",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "elektronische_kriegsf_hrung",
      "name": "Elektronische Kriegsführung",
      "category": "waffen",
      "x": 3650,
      "y": 940,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Hochfester Stahl"
      ]
    },
    {
      "id": "tarntechnologie",
      "name": "Tarntechnologie",
      "category": "waffen",
      "x": 3650,
      "y": 1000,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Hochfester Stahl"
      ]
    },
    {
      "id": "milit_rische_ki_zielsysteme",
      "name": "Militärische KI-Zielsysteme",
      "category": "waffen",
      "x": 3650,
      "y": 1060,
      "prerequisites": [
        "Maschinelles Lernen",
        "Raketenwerfer",
        "Informatik Grundlagen",
        "Chemie Grundlagen",
        "Cluster-Munition",
        "Künstliche Neuronale Netze"
      ]
    },
    {
      "id": "smart_munition",
      "name": "Smart-Munition",
      "category": "waffen",
      "x": 3650,
      "y": 1120,
      "prerequisites": [
        "Chemie Grundlagen",
        "Biowaffen-Abwehr",
        "Hochfester Stahl",
        "Explosivstoffchemie",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "cluster_munition",
      "name": "Cluster-Munition",
      "category": "waffen",
      "x": 3650,
      "y": 1180,
      "prerequisites": [
        "Klassische Mechanik",
        "Chemie Grundlagen",
        "Plasmawaffen"
      ]
    },
    {
      "id": "emp_waffen",
      "name": "EMP-Waffen",
      "category": "waffen",
      "x": 3650,
      "y": 1240,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Hochfester Stahl",
        "Explosivstoffchemie",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "plasmawaffen",
      "name": "Plasmawaffen",
      "category": "waffen",
      "x": 3650,
      "y": 1300,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Hochfester Stahl",
        "Mathematik Grundlagen",
        "Hyperschallgleiter",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "energiewaffen",
      "name": "Energiewaffen",
      "category": "waffen",
      "x": 3650,
      "y": 1360,
      "prerequisites": [
        "Thermodynamik",
        "Drohnenwaffen",
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Autonome Waffensysteme",
        "Hochfester Stahl"
      ]
    },
    {
      "id": "nicht_t_dliche_waffen",
      "name": "Nicht-tödliche Waffen",
      "category": "waffen",
      "x": 3650,
      "y": 1420,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Hochfester Stahl",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "kernspaltungstechnologie",
      "name": "Kernspaltungstechnologie",
      "category": "nuklear",
      "x": 4000,
      "y": 100,
      "prerequisites": [
        "Strahlungsschutz",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Hochtemperaturmaterialien",
        "Tritiumproduktion"
      ]
    },
    {
      "id": "kernfusionsforschung",
      "name": "Kernfusionsforschung",
      "category": "nuklear",
      "x": 4000,
      "y": 160,
      "prerequisites": [
        "Hochtemperaturmaterialien",
        "Materialwissenschaft Grundlagen",
        "Stellarator-Reaktoren"
      ]
    },
    {
      "id": "brutreaktoren",
      "name": "Brutreaktoren",
      "category": "nuklear",
      "x": 4000,
      "y": 220,
      "prerequisites": [
        "Thermodynamik",
        "Physik Grundlagen",
        "Fusionsreaktoren"
      ]
    },
    {
      "id": "schnelle_neutronenreaktoren",
      "name": "Schnelle Neutronenreaktoren",
      "category": "nuklear",
      "x": 4000,
      "y": 280,
      "prerequisites": [
        "Thermodynamik",
        "Neutronenphysik",
        "Hochtemperaturmaterialien"
      ]
    },
    {
      "id": "kernbrennstoffkreislauf",
      "name": "Kernbrennstoffkreislauf",
      "category": "nuklear",
      "x": 4000,
      "y": 340,
      "prerequisites": [
        "Nukleare Abfalllagerung",
        "Materialwissenschaft Grundlagen",
        "Thermodynamik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "nukleare_abfalllagerung",
      "name": "Nukleare Abfalllagerung",
      "category": "nuklear",
      "x": 4000,
      "y": 400,
      "prerequisites": [
        "Thermodynamik",
        "Kernspaltung",
        "Strahlungsschutz",
        "Materialwissenschaft Grundlagen",
        "Kernphysik",
        "Quantenmechanik"
      ]
    },
    {
      "id": "strahlungsschutz",
      "name": "Strahlungsschutz",
      "category": "nuklear",
      "x": 4000,
      "y": 460,
      "prerequisites": [
        "Hochtemperaturmaterialien",
        "Physik Grundlagen"
      ]
    },
    {
      "id": "neutronenphysik",
      "name": "Neutronenphysik",
      "category": "nuklear",
      "x": 4000,
      "y": 520,
      "prerequisites": [
        "Thermodynamik",
        "Kernbrennstoffkreislauf",
        "Physik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "nukleare_materialanalyse",
      "name": "Nukleare Materialanalyse",
      "category": "nuklear",
      "x": 4000,
      "y": 580,
      "prerequisites": [
        "Quantenmechanik",
        "Kernspaltung",
        "Materialwissenschaft Grundlagen",
        "Kernphysik"
      ]
    },
    {
      "id": "reaktorsicherheitssysteme",
      "name": "Reaktorsicherheitssysteme",
      "category": "nuklear",
      "x": 4000,
      "y": 640,
      "prerequisites": [
        "Informatik Grundlagen",
        "Physik Grundlagen",
        "Fusionsreaktoren",
        "Kernspaltungstechnologie",
        "Hochtemperaturmaterialien"
      ]
    },
    {
      "id": "nukleare_simulation",
      "name": "Nukleare Simulation",
      "category": "nuklear",
      "x": 4000,
      "y": 700,
      "prerequisites": [
        "Thermodynamik",
        "Kernspaltung",
        "Physik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Kernphysik",
        "Quantenmechanik"
      ]
    },
    {
      "id": "fusionsreaktoren",
      "name": "Fusionsreaktoren",
      "category": "nuklear",
      "x": 4000,
      "y": 760,
      "prerequisites": [
        "Neutronenphysik",
        "Hochtemperaturmaterialien",
        "Physik Grundlagen"
      ]
    },
    {
      "id": "tokamak_reaktoren",
      "name": "Tokamak-Reaktoren",
      "category": "nuklear",
      "x": 4000,
      "y": 820,
      "prerequisites": [
        "Thermodynamik",
        "Hochtemperaturmaterialien"
      ]
    },
    {
      "id": "stellarator_reaktoren",
      "name": "Stellarator-Reaktoren",
      "category": "nuklear",
      "x": 4000,
      "y": 880,
      "prerequisites": [
        "Hochtemperaturmaterialien",
        "Tokamak-Reaktoren",
        "Physik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "tritiumproduktion",
      "name": "Tritiumproduktion",
      "category": "nuklear",
      "x": 4000,
      "y": 940,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Hochtemperaturmaterialien",
        "Materialwissenschaft Grundlagen",
        "Nukleare Medizin"
      ]
    },
    {
      "id": "nukleare_medizin",
      "name": "Nukleare Medizin",
      "category": "nuklear",
      "x": 4000,
      "y": 1000,
      "prerequisites": [
        "Thermodynamik",
        "Kernspaltung",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Biologie Grundlagen",
        "Kernphysik"
      ]
    },
    {
      "id": "radioisotopenproduktion",
      "name": "Radioisotopenproduktion",
      "category": "nuklear",
      "x": 4000,
      "y": 1060,
      "prerequisites": [
        "Hochtemperaturmaterialien",
        "Marine Reaktoren",
        "Materialwissenschaft Grundlagen",
        "Kernbrennstoffkreislauf"
      ]
    },
    {
      "id": "deep_learning",
      "name": "Deep Learning",
      "category": "ki",
      "x": 4350,
      "y": 100,
      "prerequisites": [
        "Maschinelles Lernen",
        "Entscheidungsalgorithmen",
        "GPU-Computing",
        "Mathematik Grundlagen",
        "Datenbanken",
        "Kognitionswissenschaft"
      ]
    },
    {
      "id": "reinforcement_learning",
      "name": "Reinforcement Learning",
      "category": "ki",
      "x": 4350,
      "y": 160,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Federated Learning",
        "Kognitionswissenschaft",
        "Statistik"
      ]
    },
    {
      "id": "sprachverarbeitung",
      "name": "Sprachverarbeitung",
      "category": "ki",
      "x": 4350,
      "y": 220,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Anomalieerkennung",
        "Statistik",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "wissensrepr_sentation",
      "name": "Wissensrepräsentation",
      "category": "ki",
      "x": 4350,
      "y": 280,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Gedankenkontrolle-Interface",
        "Statistik",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "expertensysteme",
      "name": "Expertensysteme",
      "category": "ki",
      "x": 4350,
      "y": 340,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Kognitionswissenschaft",
        "Statistik"
      ]
    },
    {
      "id": "generative_modelle",
      "name": "Generative Modelle",
      "category": "ki",
      "x": 4350,
      "y": 400,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Informatik Grundlagen",
        "Statistik"
      ]
    },
    {
      "id": "transformer_netzwerke",
      "name": "Transformer-Netzwerke",
      "category": "ki",
      "x": 4350,
      "y": 460,
      "prerequisites": [
        "Selbstlernende Systeme",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Kommunikationsnetze",
        "Evolutionäre Algorithmen"
      ]
    },
    {
      "id": "multimodale_ki",
      "name": "Multimodale KI",
      "category": "ki",
      "x": 4350,
      "y": 520,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Edge-KI",
        "Mathematik Grundlagen",
        "Kognitionswissenschaft",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "ki_planungssysteme",
      "name": "KI-Planungssysteme",
      "category": "ki",
      "x": 4350,
      "y": 580,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Smart City AI",
        "Künstliche Neuronale Netze",
        "Generative Modelle",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "ki_simulation",
      "name": "KI-Simulation",
      "category": "ki",
      "x": 4350,
      "y": 640,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Künstliche Neuronale Netze",
        "Mathematik Grundlagen",
        "KI-Optimierung",
        "Kognitionswissenschaft"
      ]
    },
    {
      "id": "robotik_ki",
      "name": "Robotik-KI",
      "category": "ki",
      "x": 4350,
      "y": 700,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Entscheidungsalgorithmen",
        "Mathematik Grundlagen",
        "Kognitionswissenschaft",
        "Evolutionäre Algorithmen"
      ]
    },
    {
      "id": "entscheidungsalgorithmen",
      "name": "Entscheidungsalgorithmen",
      "category": "ki",
      "x": 4350,
      "y": 760,
      "prerequisites": [
        "Informatik Grundlagen",
        "Künstliche Neuronale Netze",
        "Mathematik Grundlagen",
        "Kognitionswissenschaft",
        "Statistik"
      ]
    },
    {
      "id": "anomalieerkennung",
      "name": "Anomalieerkennung",
      "category": "ki",
      "x": 4350,
      "y": 820,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Informatik Grundlagen",
        "Statistik",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "ki_optimierung",
      "name": "KI-Optimierung",
      "category": "ki",
      "x": 4350,
      "y": 880,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Künstliche Neuronale Netze",
        "Mathematik Grundlagen",
        "Kognitionswissenschaft",
        "Statistik"
      ]
    },
    {
      "id": "edge_ki",
      "name": "Edge-KI",
      "category": "ki",
      "x": 4350,
      "y": 940,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Smart City AI",
        "Mathematik Grundlagen",
        "Statistik",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "federated_learning",
      "name": "Federated Learning",
      "category": "ki",
      "x": 4350,
      "y": 1000,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Kognitionswissenschaft",
        "Statistik",
        "KI-Agentensysteme"
      ]
    },
    {
      "id": "explainable_ai",
      "name": "Explainable AI",
      "category": "ki",
      "x": 4350,
      "y": 1060,
      "prerequisites": [
        "Informatik Grundlagen",
        "Entscheidungsalgorithmen",
        "Mathematik Grundlagen",
        "Kognitionswissenschaft",
        "Statistik",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "ki_sicherheit",
      "name": "KI-Sicherheit",
      "category": "ki",
      "x": 4350,
      "y": 1120,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Künstliche Neuronale Netze",
        "Transformer-Netzwerke",
        "Mathematik Grundlagen",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "ki_ethiksysteme",
      "name": "KI-Ethiksysteme",
      "category": "ki",
      "x": 4350,
      "y": 1180,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Künstliche Neuronale Netze",
        "Edge-KI",
        "Mathematik Grundlagen",
        "Anomalieerkennung"
      ]
    },
    {
      "id": "selbstlernende_systeme",
      "name": "Selbstlernende Systeme",
      "category": "ki",
      "x": 4350,
      "y": 1240,
      "prerequisites": [
        "Informatik Grundlagen",
        "Explainable AI",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Kognitionswissenschaft",
        "Statistik"
      ]
    },
    {
      "id": "neuro_symbolische_ki",
      "name": "Neuro-Symbolische KI",
      "category": "ki",
      "x": 4350,
      "y": 1300,
      "prerequisites": [
        "Maschinelles Lernen",
        "Federated Learning",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Biologie Grundlagen",
        "Kognitionswissenschaft"
      ]
    },
    {
      "id": "ki_agentensysteme",
      "name": "KI-Agentensysteme",
      "category": "ki",
      "x": 4350,
      "y": 1360,
      "prerequisites": [
        "Maschinelles Lernen",
        "Expertensysteme",
        "Mathematik Grundlagen",
        "Kognitionswissenschaft",
        "Statistik"
      ]
    },
    {
      "id": "funkkommunikation",
      "name": "Funkkommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 100,
      "prerequisites": [
        "Antennentechnik",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "satellitenkommunikation",
      "name": "Satellitenkommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 160,
      "prerequisites": [
        "Telemetrie",
        "Elektromagnetismus",
        "Mikrowellentechnik",
        "Mathematik Grundlagen",
        "Satellitenbau",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "glasfaserkommunikation",
      "name": "Glasfaserkommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 220,
      "prerequisites": [
        "Elektromagnetismus",
        "Funkkommunikation",
        "Netzwerktechnik",
        "Kommunikationsnetze",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "laserkommunikation",
      "name": "Laserkommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 280,
      "prerequisites": [
        "Lasertechnologie",
        "Elektromagnetismus",
        "Optik Grundlagen",
        "Netzwerkprotokolle"
      ]
    },
    {
      "id": "quantenkommunikation",
      "name": "Quantenkommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 340,
      "prerequisites": [
        "Elektromagnetismus",
        "Fortgeschrittene Mathematik",
        "Optoelektronik",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Kryptographie Grundlagen"
      ]
    },
    {
      "id": "5g_netzwerke",
      "name": "5G Netzwerke",
      "category": "kommunikation",
      "x": 4700,
      "y": 400,
      "prerequisites": [
        "Tiefenraumnetzwerk (DSN)",
        "Hochfrequenzkommunikation",
        "Netzwerkarchitektur",
        "Verschlüsselte Kommunikation",
        "Datenkompression"
      ]
    },
    {
      "id": "6g_netzwerke",
      "name": "6G Netzwerke",
      "category": "kommunikation",
      "x": 4700,
      "y": 460,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Interplanetares Internet"
      ]
    },
    {
      "id": "mesh_netzwerke",
      "name": "Mesh-Netzwerke",
      "category": "kommunikation",
      "x": 4700,
      "y": 520,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Kryptographie"
      ]
    },
    {
      "id": "ad_hoc_netzwerke",
      "name": "Ad-hoc-Netzwerke",
      "category": "kommunikation",
      "x": 4700,
      "y": 580,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "milit_rische_kommunikation",
      "name": "Militärische Kommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 640,
      "prerequisites": [
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Militärische Grundlagen",
        "Quantenkommunikation",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "verschl_sselte_kommunikation",
      "name": "Verschlüsselte Kommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 700,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "kryptographie",
      "name": "Kryptographie",
      "category": "kommunikation",
      "x": 4700,
      "y": 760,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Informatik Grundlagen",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "post_quanten_kryptographie",
      "name": "Post-Quanten-Kryptographie",
      "category": "kommunikation",
      "x": 4700,
      "y": 820,
      "prerequisites": [
        "6G-Netzwerke",
        "Fortgeschrittene Mathematik",
        "Mathematik Grundlagen",
        "Quantenmechanik",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "datenkompression",
      "name": "Datenkompression",
      "category": "kommunikation",
      "x": 4700,
      "y": 880,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "netzwerkprotokolle",
      "name": "Netzwerkprotokolle",
      "category": "kommunikation",
      "x": 4700,
      "y": 940,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "internetinfrastruktur",
      "name": "Internetinfrastruktur",
      "category": "kommunikation",
      "x": 4700,
      "y": 1000,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Netzwerktechnik",
        "Informatik Grundlagen",
        "Computerarchitektur"
      ]
    },
    {
      "id": "unterseekabel",
      "name": "Unterseekabel",
      "category": "kommunikation",
      "x": 4700,
      "y": 1060,
      "prerequisites": [
        "Netzwerktechnik",
        "Signalverarbeitung Grundlagen",
        "5G Netzwerke",
        "Glasfaserkommunikation"
      ]
    },
    {
      "id": "hochfrequenzkommunikation",
      "name": "Hochfrequenzkommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 1120,
      "prerequisites": [
        "IoT-Kommunikation",
        "Fahrzeug-zu-Fahrzeug Kommunikation",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "iot_kommunikation",
      "name": "IoT-Kommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 1180,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Signalverarbeitung Grundlagen",
        "Post-Quanten-Kryptographie",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "fahrzeug_zu_fahrzeug_kommunikation",
      "name": "Fahrzeug-zu-Fahrzeug Kommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 1240,
      "prerequisites": [
        "Hochfrequenztechnik",
        "Signalverarbeitung Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "interplanetare_kommunikation",
      "name": "Interplanetare Kommunikation",
      "category": "kommunikation",
      "x": 4700,
      "y": 1300,
      "prerequisites": [
        "Elektromagnetismus",
        "Funkkommunikation",
        "Kryptographie",
        "Netzwerktechnik",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "raketentechnologie",
      "name": "Raketentechnologie",
      "category": "raumfahrt",
      "x": 5050,
      "y": 100,
      "prerequisites": [
        "Thermodynamik",
        "Astronomie",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen",
        "Luft- und Raumfahrtmedizin"
      ]
    },
    {
      "id": "ionenantriebe",
      "name": "Ionenantriebe",
      "category": "raumfahrt",
      "x": 5050,
      "y": 160,
      "prerequisites": [
        "Astronomie",
        "Telemetrie",
        "Mathematik Grundlagen",
        "Komplexe Systeme"
      ]
    },
    {
      "id": "plasmaantriebe",
      "name": "Plasmaantriebe",
      "category": "raumfahrt",
      "x": 5050,
      "y": 220,
      "prerequisites": [
        "Telemetrie",
        "Astronomie",
        "Wiederverwendbare Raketen",
        "Mathematik Grundlagen",
        "Mondbasis",
        "Raketenantriebe"
      ]
    },
    {
      "id": "nukleare_raketenantriebe",
      "name": "Nukleare Raketenantriebe",
      "category": "raumfahrt",
      "x": 5050,
      "y": 280,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Kernspaltung",
        "Telemetrie",
        "Astronomie",
        "Aerodynamik"
      ]
    },
    {
      "id": "solarsegler",
      "name": "Solarsegler",
      "category": "raumfahrt",
      "x": 5050,
      "y": 340,
      "prerequisites": [
        "Astronomie",
        "Wiederverwendbare Raketen",
        "Dyson-Schwarm Konzepte",
        "Mathematik Grundlagen",
        "Komplexe Systeme",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "wiederverwendbare_raketen",
      "name": "Wiederverwendbare Raketen",
      "category": "raumfahrt",
      "x": 5050,
      "y": 400,
      "prerequisites": [
        "Thermodynamik",
        "Numerische Simulation",
        "Astronomie",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "orbitalmechanik",
      "name": "Orbitalmechanik",
      "category": "raumfahrt",
      "x": 5050,
      "y": 460,
      "prerequisites": [
        "Astronomie",
        "Fortgeschrittene Mathematik",
        "Mathematik Grundlagen",
        "Komplexe Systeme",
        "Klassische Mechanik",
        "Luft- und Raumfahrtmedizin"
      ]
    },
    {
      "id": "satellitenbau",
      "name": "Satellitenbau",
      "category": "raumfahrt",
      "x": 5050,
      "y": 520,
      "prerequisites": [
        "Telemetrie",
        "Astronomie",
        "Solarzellen",
        "Komplexe Systeme",
        "Materialwissenschaft Grundlagen",
        "Strahlungsschutz im All"
      ]
    },
    {
      "id": "raumstationen",
      "name": "Raumstationen",
      "category": "raumfahrt",
      "x": 5050,
      "y": 580,
      "prerequisites": [
        "Interstellare Antriebe",
        "Telemetrie",
        "Astronomie",
        "Mathematik Grundlagen",
        "Weltraumteleskope",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "mondbasen",
      "name": "Mondbasen",
      "category": "raumfahrt",
      "x": 5050,
      "y": 640,
      "prerequisites": [
        "Luft- und Raumfahrtmedizin",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen",
        "Astronomie"
      ]
    },
    {
      "id": "marsmissionen",
      "name": "Marsmissionen",
      "category": "raumfahrt",
      "x": 5050,
      "y": 700,
      "prerequisites": [
        "Raketenantriebe",
        "Mondbasen",
        "Telemetrie",
        "Astronomie"
      ]
    },
    {
      "id": "asteroidenbergbau",
      "name": "Asteroidenbergbau",
      "category": "raumfahrt",
      "x": 5050,
      "y": 760,
      "prerequisites": [
        "Astronomie",
        "Mathematik Grundlagen",
        "Komplexe Systeme",
        "Materialwissenschaft Grundlagen",
        "Orbitalmechanik"
      ]
    },
    {
      "id": "weltraumteleskope",
      "name": "Weltraumteleskope",
      "category": "raumfahrt",
      "x": 5050,
      "y": 820,
      "prerequisites": [
        "Lebenserhaltungssysteme",
        "Telemetrie",
        "Astronomie",
        "Tiefschlafkammern (Kryoschlaf)",
        "Mathematik Grundlagen",
        "Raketenantriebe"
      ]
    },
    {
      "id": "planetare_landefahrzeuge",
      "name": "Planetare Landefahrzeuge",
      "category": "raumfahrt",
      "x": 5050,
      "y": 880,
      "prerequisites": [
        "Luft- und Raumfahrtmedizin",
        "Telemetrie",
        "Mathematik Grundlagen",
        "Astronomie"
      ]
    },
    {
      "id": "raumsonden",
      "name": "Raumsonden",
      "category": "raumfahrt",
      "x": 5050,
      "y": 940,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Mondbasen",
        "Astronomie"
      ]
    },
    {
      "id": "lebenserhaltungssysteme",
      "name": "Lebenserhaltungssysteme",
      "category": "raumfahrt",
      "x": 5050,
      "y": 1000,
      "prerequisites": [
        "Medizin Grundlagen",
        "Interplanetare Kolonie",
        "Chemie Grundlagen",
        "Telemetrie",
        "Drucksensoren",
        "Astronomie"
      ]
    },
    {
      "id": "strahlungsschutz_im_all",
      "name": "Strahlungsschutz im All",
      "category": "raumfahrt",
      "x": 5050,
      "y": 1060,
      "prerequisites": [
        "Weltraumteleskope",
        "Raketenantriebe",
        "Astronomie"
      ]
    },
    {
      "id": "raumfahrtrobotik",
      "name": "Raumfahrtrobotik",
      "category": "raumfahrt",
      "x": 5050,
      "y": 1120,
      "prerequisites": [
        "Luftfahrt",
        "Luft- und Raumfahrtmedizin",
        "Komplexe Systeme"
      ]
    },
    {
      "id": "raumfahrtnavigation",
      "name": "Raumfahrtnavigation",
      "category": "raumfahrt",
      "x": 5050,
      "y": 1180,
      "prerequisites": [
        "Astronomie",
        "Mathematik Grundlagen",
        "Marskolonie",
        "Luft- und Raumfahrtmedizin",
        "Luftfahrt",
        "Raketenantriebe"
      ]
    },
    {
      "id": "interstellare_antriebe",
      "name": "Interstellare Antriebe",
      "category": "raumfahrt",
      "x": 5050,
      "y": 1240,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Luft- und Raumfahrtmedizin",
        "Materialwissenschaft Grundlagen",
        "Kommunikationssatelliten",
        "Weltraumlift"
      ]
    },
    {
      "id": "terraforming_technologien",
      "name": "Terraforming-Technologien",
      "category": "raumfahrt",
      "x": 5050,
      "y": 1300,
      "prerequisites": [
        "Antimaterieantrieb",
        "Raumstationen",
        "Telemetrie",
        "Astronomie"
      ]
    },
    {
      "id": "automatisierte_fertigung",
      "name": "Automatisierte Fertigung",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 100,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Produktionssimulation",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Robotiksteuerung",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "robotikproduktion",
      "name": "Robotikproduktion",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 160,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Qualitätskontrolle KI",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "cnc_bearbeitung",
      "name": "CNC-Bearbeitung",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 220,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Metallurgie Grundlagen",
        "Stahlproduktion",
        "Computerarchitektur"
      ]
    },
    {
      "id": "3d_druck",
      "name": "3D-Druck",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 280,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Automatisierte Fertigung",
        "Materialverarbeitung",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Robotik"
      ]
    },
    {
      "id": "additive_fertigung_metall",
      "name": "Additive Fertigung Metall",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 340,
      "prerequisites": [
        "Automatisierte Bergbau-Rigs",
        "Smart Factory",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "additive_fertigung_kunststoff",
      "name": "Additive Fertigung Kunststoff",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 400,
      "prerequisites": [
        "Klassische Mechanik",
        "Additive Fertigung Metall",
        "CNC-Bearbeitung",
        "Elektronik Grundlagen"
      ]
    },
    {
      "id": "mikroproduktion",
      "name": "Mikroproduktion",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 460,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Klassische Mechanik",
        "Materialverarbeitung"
      ]
    },
    {
      "id": "nanofabrikation",
      "name": "Nanofabrikation",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 520,
      "prerequisites": [
        "Klassische Mechanik",
        "Robotik",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "produktionsplanungssysteme",
      "name": "Produktionsplanungssysteme",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 580,
      "prerequisites": [
        "Informatik Grundlagen",
        "Wasserstoffproduktion",
        "Elektronik Grundlagen",
        "Klassische Mechanik",
        "Robotikproduktion"
      ]
    },
    {
      "id": "industrielle_sensorik",
      "name": "Industrielle Sensorik",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 640,
      "prerequisites": [
        "Produktionssimulation",
        "Logistiknetzwerke",
        "Mathematik Grundlagen",
        "Robotik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "qualit_tskontrolle_ki",
      "name": "Qualitätskontrolle KI",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 700,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Maschinelles Lernen",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "digitale_zwillinge",
      "name": "Digitale Zwillinge",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 760,
      "prerequisites": [
        "CNC-Bearbeitung",
        "Elektronik Grundlagen"
      ]
    },
    {
      "id": "smart_factory",
      "name": "Smart Factory",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 820,
      "prerequisites": [
        "Klassische Mechanik",
        "Robotik"
      ]
    },
    {
      "id": "industrielle_iot_systeme",
      "name": "Industrielle IoT Systeme",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 880,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "supply_chain_optimierung",
      "name": "Supply-Chain-Optimierung",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 940,
      "prerequisites": [
        "Digitale Zwillinge",
        "Klassische Mechanik",
        "Elektronik Grundlagen",
        "Industrielle IoT Systeme"
      ]
    },
    {
      "id": "produktionssimulation",
      "name": "Produktionssimulation",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1000,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Klassische Mechanik",
        "Materialverarbeitung",
        "CNC-Bearbeitung"
      ]
    },
    {
      "id": "hochpr_zisionsfertigung",
      "name": "Hochpräzisionsfertigung",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1060,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Materialverarbeitung",
        "Mathematik Grundlagen",
        "Robotik"
      ]
    },
    {
      "id": "werkzeugmaschinenbau",
      "name": "Werkzeugmaschinenbau",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1120,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Klassische Mechanik",
        "Robotik"
      ]
    },
    {
      "id": "materialverarbeitung",
      "name": "Materialverarbeitung",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1180,
      "prerequisites": [
        "Batteriefertigung",
        "Robotik",
        "Mathematik Grundlagen",
        "Metallurgie",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "metallurgie",
      "name": "Metallurgie",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1240,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Robotik"
      ]
    },
    {
      "id": "kunststoffverarbeitung",
      "name": "Kunststoffverarbeitung",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1300,
      "prerequisites": [
        "Klassische Mechanik",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "glasproduktion",
      "name": "Glasproduktion",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1360,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Logistiknetzwerke",
        "Mathematik Grundlagen",
        "Robotik",
        "Nanofabrikation"
      ]
    },
    {
      "id": "batteriefertigung",
      "name": "Batteriefertigung",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1420,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Klassische Mechanik",
        "Mess- und Prüftechnik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "wasserstoffproduktion",
      "name": "Wasserstoffproduktion",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1480,
      "prerequisites": [
        "Mess- und Prüftechnik",
        "Klassische Mechanik",
        "Materialverarbeitung",
        "Robotik"
      ]
    },
    {
      "id": "reinraumtechnologie",
      "name": "Reinraumtechnologie",
      "category": "grundlagenwissenschaft",
      "x": 0,
      "y": 0,
      "prerequisites": [
        "Halbleiterfertigung",
        "Materialwissenschaft Grundlagen",
        "Siliziumprozesse",
        "Mikroelektronikmaterialien"
      ]
    },
    {
      "id": "sensorik",
      "name": "Sensorik",
      "category": "grundlagenwissenschaft",
      "x": 0,
      "y": 0,
      "prerequisites": [
        "Elektronik Grundlagen",
        "Signalverarbeitung Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "maschinenelemente",
      "name": "Maschinenelemente",
      "category": "grundlagenwissenschaft",
      "x": 0,
      "y": 0,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Klassische Mechanik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "industrieproduktion",
      "name": "Industrieproduktion",
      "category": "grundlagenwissenschaft",
      "x": 0,
      "y": 0,
      "prerequisites": [
        "Klassische Mechanik",
        "Systemtheorie"
      ]
    },
    {
      "id": "verst_rkertechnik",
      "name": "Verstärkertechnik",
      "category": "grundlagenwissenschaft",
      "x": 0,
      "y": 0,
      "prerequisites": [
        "Elektronik Grundlagen",
        "Elektromagnetismus",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "logik",
      "name": "Logik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2500,
      "prerequisites": [
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "datenstrukturen",
      "name": "Datenstrukturen",
      "category": "informatik",
      "x": 1200,
      "y": 3520,
      "prerequisites": [
        "Datenbanken",
        "Mathematik Grundlagen",
        "Logik"
      ]
    },
    {
      "id": "boolesche_algebra",
      "name": "Boolesche Algebra",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2560,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Logik"
      ]
    },
    {
      "id": "regelungstechnik",
      "name": "Regelungstechnik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2620,
      "prerequisites": [
        "Fortgeschrittene Mathematik",
        "Mathematik Grundlagen",
        "Systemtheorie"
      ]
    },
    {
      "id": "tribologie",
      "name": "Tribologie",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2680,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "akustik",
      "name": "Akustik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2740,
      "prerequisites": [
        "Physik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "plasma_physik",
      "name": "Plasma_Physik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2800,
      "prerequisites": [
        "Quantenmechanik",
        "Thermodynamik",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "magnetisches_confinement",
      "name": "Magnetisches Confinement",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2860,
      "prerequisites": [
        "Plasma_Physik",
        "Supraleiter Hochtemperatur",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "kohlenstoffchemie",
      "name": "Kohlenstoffchemie",
      "category": "chemie",
      "x": 2950,
      "y": 1480,
      "prerequisites": [
        "Organische Chemie",
        "Chemie Grundlagen",
        "Kolloidchemie",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "explosivstoffchemie",
      "name": "Explosivstoffchemie",
      "category": "chemie",
      "x": 2950,
      "y": 1540,
      "prerequisites": [
        "Chemie Grundlagen",
        "Sprengstoffe",
        "Supramolekulare Chemie",
        "Chemische Prozessoptimierung",
        "Physikalische Chemie"
      ]
    },
    {
      "id": "aktinidenchemie",
      "name": "Aktinidenchemie",
      "category": "chemie",
      "x": 2950,
      "y": 1600,
      "prerequisites": [
        "Anorganische Chemie",
        "Chemie Grundlagen"
      ]
    },
    {
      "id": "magnetische_werkstoffe",
      "name": "Magnetische Werkstoffe",
      "category": "materialien",
      "x": 500,
      "y": 3580,
      "prerequisites": [
        "Festkörperphysik",
        "Schallabsorption Materialien",
        "Elektromagnetismus",
        "Materialwissenschaft Grundlagen",
        "Lithiumtechnologie"
      ]
    },
    {
      "id": "kupferverarbeitung",
      "name": "Kupferverarbeitung",
      "category": "materialien",
      "x": 500,
      "y": 3640,
      "prerequisites": [
        "Metallurgie Grundlagen",
        "Rohstoffanalyse",
        "Materialwissenschaft Grundlagen",
        "Panzerstahl"
      ]
    },
    {
      "id": "halbleitermaterialien",
      "name": "Halbleitermaterialien",
      "category": "materialien",
      "x": 500,
      "y": 3700,
      "prerequisites": [
        "Festkörperphysik",
        "Piezoelektrische Materialien",
        "Reinraumtechnologie",
        "Materialwissenschaft Grundlagen",
        "Stealth Beschichtungen",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "festkoerperelektrolyte",
      "name": "Festkörperelektrolyte",
      "category": "materialien",
      "x": 500,
      "y": 3760,
      "prerequisites": [
        "Metamaterialien",
        "Materialwissenschaft Grundlagen",
        "Supraleiter Grundlagen",
        "Physikalische Chemie"
      ]
    },
    {
      "id": "optoelektronik",
      "name": "Optoelektronik",
      "category": "materialien",
      "x": 500,
      "y": 3820,
      "prerequisites": [
        "Supraleiter Hochtemperatur",
        "Optik Grundlagen",
        "Halbleitermaterialien",
        "Materialwissenschaft Grundlagen",
        "Verbundpanzerung",
        "Quantenmechanik"
      ]
    },
    {
      "id": "microcontroller",
      "name": "Microcontroller",
      "category": "informatik",
      "x": 1200,
      "y": 3580,
      "prerequisites": [
        "Mikroprozessoren",
        "Halbleiterfertigung"
      ]
    },
    {
      "id": "programmierung",
      "name": "Programmierung",
      "category": "informatik",
      "x": 1200,
      "y": 3640,
      "prerequisites": [
        "Computer Vision",
        "Sonarverarbeitung",
        "Informatik Grundlagen",
        "Datenstrukturen"
      ]
    },
    {
      "id": "gpu_computing",
      "name": "GPU-Computing",
      "category": "informatik",
      "x": 1200,
      "y": 3700,
      "prerequisites": [
        "Computerarchitektur",
        "Produktionsoptimierung KI",
        "Satellitennetzwerke",
        "Halbleiterfertigung"
      ]
    },
    {
      "id": "neuroinformatik",
      "name": "Neuroinformatik",
      "category": "informatik",
      "x": 1200,
      "y": 3760,
      "prerequisites": [
        "Informatik Grundlagen",
        "Big Data Systeme",
        "Gehirnmodellierung",
        "Kampfmanagementsysteme",
        "Biologie Grundlagen",
        "Statistik"
      ]
    },
    {
      "id": "gehirnmodellierung",
      "name": "Gehirnmodellierung",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2920,
      "prerequisites": [
        "Biologie Grundlagen",
        "Mathematik Grundlagen",
        "Komplexe Systeme"
      ]
    },
    {
      "id": "informationstheorie",
      "name": "Informationstheorie",
      "category": "informatik",
      "x": 1200,
      "y": 3820,
      "prerequisites": [
        "Militärische Kommunikationsnetze",
        "Mathematik Grundlagen",
        "Statistik"
      ]
    },
    {
      "id": "antennentechnik",
      "name": "Antennentechnik",
      "category": "kommunikation",
      "x": 4700,
      "y": 1360,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Fahrzeug-zu-Fahrzeug Kommunikation",
        "6G Netzwerke",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "mikrowellentechnik",
      "name": "Mikrowellentechnik",
      "category": "kommunikation",
      "x": 4700,
      "y": 1420,
      "prerequisites": [
        "Hochfrequenztechnik",
        "Ad-hoc-Netzwerke",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "hochfrequenztechnik",
      "name": "Hochfrequenztechnik",
      "category": "kommunikation",
      "x": 4700,
      "y": 1480,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Elektronik Grundlagen",
        "Internetinfrastruktur",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "linguistik",
      "name": "Linguistik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 2980,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Informatik Grundlagen",
        "Statistik"
      ]
    },
    {
      "id": "mechanikfertigung",
      "name": "Mechanikfertigung",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1540,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Materialverarbeitung",
        "Robotik"
      ]
    },
    {
      "id": "lasertechnologie",
      "name": "Lasertechnologie",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 3040,
      "prerequisites": [
        "Quantenmechanik",
        "Festkörperphysik",
        "Elektromagnetismus",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "hydraulik",
      "name": "Hydraulik",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 3100,
      "prerequisites": [
        "Klassische Mechanik",
        "Fluidmechanik"
      ]
    },
    {
      "id": "standardisierung",
      "name": "Standardisierung",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1600,
      "prerequisites": [
        "Logistiknetzwerke",
        "Mess- und Prüftechnik",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Glasproduktion",
        "Systemtheorie"
      ]
    },
    {
      "id": "mess__und_prueftechnik",
      "name": "Mess- und Prüftechnik",
      "category": "industrieproduktion",
      "x": 5400,
      "y": 1660,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Mathematik Grundlagen",
        "Robotik",
        "Sensorik",
        "Statistik"
      ]
    },
    {
      "id": "kettenlaufwerke",
      "name": "Kettenlaufwerke",
      "category": "landfahrzeuge",
      "x": 1550,
      "y": 4480,
      "prerequisites": [
        "Stahlproduktion",
        "Panzeroptiken",
        "Klassische Mechanik",
        "Tribologie",
        "Verbrennungsmotor",
        "Schwere Transportfahrzeuge"
      ]
    },
    {
      "id": "grosskaliberwaffen",
      "name": "Großkaliberwaffen",
      "category": "waffen",
      "x": 3650,
      "y": 1480,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Sprengstoffe",
        "Hochfester Stahl",
        "Mathematik Grundlagen",
        "Explosivstoffchemie"
      ]
    },
    {
      "id": "strahlenschutz_grundlagen",
      "name": "Strahlenschutz Grundlagen",
      "category": "nuklear",
      "x": 4000,
      "y": 1120,
      "prerequisites": [
        "Thermodynamik",
        "Physik Grundlagen",
        "Nukleare Simulation",
        "Materialwissenschaft Grundlagen",
        "Biologie Grundlagen"
      ]
    },
    {
      "id": "hochtemperaturmetalle",
      "name": "Hochtemperaturmetalle",
      "category": "materialien",
      "x": 500,
      "y": 3880,
      "prerequisites": [
        "Legierungsdesign",
        "Radarabsorbierende Materialien",
        "Biokompatible Materialien",
        "Titanlegierungen",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "raumfahrtmedizin",
      "name": "Raumfahrtmedizin",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 3160,
      "prerequisites": [
        "Strahlenschutz Grundlagen",
        "Mathematik Grundlagen",
        "Schwerelosigkeitsforschung",
        "Biologie Grundlagen",
        "Luftfahrt",
        "Orbitalmechanik"
      ]
    },
    {
      "id": "schwerelosigkeitsforschung",
      "name": "Schwerelosigkeitsforschung",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 3220,
      "prerequisites": [
        "Klassische Mechanik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "kommunikationssatelliten",
      "name": "Kommunikationssatelliten",
      "category": "raumfahrt",
      "x": 5050,
      "y": 1360,
      "prerequisites": [
        "Telemetrie",
        "Raumfahrtrobotik",
        "Astronomie",
        "Elektromagnetismus",
        "Solarzellen",
        "Funkkommunikation"
      ]
    },
    {
      "id": "gps_systeme",
      "name": "Gps-Systeme",
      "category": "raumfahrt",
      "x": 5050,
      "y": 1420,
      "prerequisites": [
        "Astronomie",
        "Informationstheorie",
        "Mathematik Grundlagen",
        "Luft- und Raumfahrtmedizin",
        "Relativitätstheorie",
        "Kommunikationssatelliten"
      ]
    },
    {
      "id": "relativitaetstheorie",
      "name": "Relativitätstheorie",
      "category": "grundlagenwissenschaft",
      "x": 150,
      "y": 3280,
      "prerequisites": [
        "Fortgeschrittene Mathematik",
        "Klassische Mechanik",
        "Mathematik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "fly_by_wire",
      "name": "Fly-by-Wire",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6880,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Regelungstechnik",
        "Aerodynamik",
        "Klassische Mechanik",
        "Sensortechnologie",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "fortgeschrittene_avionik",
      "name": "Fortgeschrittene Avionik",
      "category": "luftfahrt",
      "x": 1900,
      "y": 6940,
      "prerequisites": [
        "Raketenflugzeuge",
        "Mathematik Grundlagen",
        "Funkkommunikation",
        "Fluidmechanik",
        "Klassische Mechanik",
        "Aerodynamik"
      ]
    },
    {
      "id": "druckrumpfdesign",
      "name": "Druckrumpfdesign",
      "category": "marine",
      "x": 2250,
      "y": 4660,
      "prerequisites": [
        "Strukturmechanik",
        "Stahlproduktion",
        "Wetterkunde",
        "Titanlegierungen",
        "Hydrodynamik",
        "Werkstoffprüfung"
      ]
    },
    {
      "id": "flughafenlogistik",
      "name": "Flughafenlogistik",
      "category": "luftfahrt",
      "x": 1900,
      "y": 7000,
      "prerequisites": [
        "Industrieproduktion",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Fluidmechanik",
        "Materialwissenschaft Grundlagen",
        "Pilotassistenz"
      ]
    },
    {
      "id": "schwarm_marine_ueberwachung",
      "name": "Schwarm Marine Überwachung",
      "category": "marine",
      "x": 2250,
      "y": 4720,
      "prerequisites": [
        "Stahlproduktion",
        "Marine Drohnen",
        "Mathematik Grundlagen",
        "Wetterkunde",
        "Fluidmechanik",
        "Hydrodynamik"
      ]
    },
    {
      "id": "marine_reaktoren",
      "name": "Marine Reaktoren",
      "category": "nuklear",
      "x": 4000,
      "y": 1180,
      "prerequisites": [
        "Thermodynamik",
        "Kernspaltung",
        "Mathematik Grundlagen",
        "Strahlenschutz Grundlagen",
        "Kompaktreaktoren"
      ]
    },
    {
      "id": "kompaktreaktoren",
      "name": "Kompaktreaktoren",
      "category": "nuklear",
      "x": 4000,
      "y": 1240,
      "prerequisites": [
        "Thermodynamik",
        "Tokamak-Reaktoren",
        "Kernspaltung",
        "Physik Grundlagen",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "aerodynamik",
      "name": "Aerodynamik",
      "category": "grundlagenwissenschaft",
      "x": 2200,
      "y": 160,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Strömungsmechanik",
        "Fluidmechanik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "raketenantriebe",
      "name": "Raketenantriebe",
      "category": "energie",
      "x": 2200,
      "y": 220,
      "prerequisites": [
        "Thermodynamik",
        "Verbrennungstechnik",
        "Mathematik Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "luft-_und_raumfahrtmedizin",
      "name": "Luft- und Raumfahrtmedizin",
      "category": "grundlagenwissenschaft",
      "x": 2200,
      "y": 280,
      "prerequisites": [
        "Luftfahrt",
        "Biologie Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "telemetrie",
      "name": "Telemetrie",
      "category": "kommunikation",
      "x": 2200,
      "y": 400,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Elektronik Grundlagen",
        "Informatik Grundlagen",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "solarzellen",
      "name": "Solarzellen",
      "category": "energie",
      "x": 2200,
      "y": 460,
      "prerequisites": [
        "Thermodynamik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "kernphysik",
      "name": "Kernphysik",
      "category": "grundlagenwissenschaft",
      "x": 2200,
      "y": 640,
      "prerequisites": [
        "Physik Grundlagen",
        "Quantenmechanik",
        "Mathematik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "halbleitertechnik",
      "name": "Halbleitertechnik",
      "category": "materialien",
      "x": 2200,
      "y": 700,
      "prerequisites": [
        "Hochtemperaturkeramik",
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen",
        "Verbundstoffe Grundlagen"
      ]
    },
    {
      "id": "verbrennungsmotor",
      "name": "Verbrennungsmotor",
      "category": "energie",
      "x": 2200,
      "y": 760,
      "prerequisites": [
        "Thermodynamik",
        "Laserenergieversorgung",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "fahrzeugmechanik",
      "name": "Fahrzeugmechanik",
      "category": "landfahrzeuge",
      "x": 2200,
      "y": 820,
      "prerequisites": [
        "Klassische Mechanik",
        "Fahrzeugwartungssysteme",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "leichtmetall",
      "name": "Leichtmetall",
      "category": "materialien",
      "x": 2200,
      "y": 880,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "informatik_grundlagen",
      "name": "Informatik Grundlagen",
      "category": "informatik",
      "x": 2200,
      "y": 940,
      "prerequisites": [
        "GPU-Computing",
        "Stark erweiterte Realität (AR)",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "druckkörperbau",
      "name": "Druckkörperbau",
      "category": "marine",
      "x": 2200,
      "y": 1180,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik"
      ]
    },
    {
      "id": "elektrotechnik_grundlagen",
      "name": "Elektrotechnik Grundlagen",
      "category": "energie",
      "x": 2200,
      "y": 1240,
      "prerequisites": [
        "Thermodynamik",
        "Batterietechnologie",
        "Raumfahrtsolarzellen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "astronomie",
      "name": "Astronomie",
      "category": "grundlagenwissenschaft",
      "x": 2200,
      "y": 1300,
      "prerequisites": [
        "Physik Grundlagen",
        "Mathematik Grundlagen",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "datenbanken",
      "name": "Datenbanken",
      "category": "informatik",
      "x": 2200,
      "y": 1360,
      "prerequisites": [
        "Industrieautomatisierung KI",
        "Mathematik Grundlagen",
        "Hyper-Dimensionale Speichermedien"
      ]
    },
    {
      "id": "sprengstoffe",
      "name": "Sprengstoffe",
      "category": "chemie",
      "x": 2200,
      "y": 1420,
      "prerequisites": [
        "Aktinidenchemie",
        "Chemie Grundlagen",
        "Organische Chemie",
        "Explosivstoffchemie"
      ]
    },
    {
      "id": "navigation",
      "name": "Navigation",
      "category": "marine",
      "x": 2200,
      "y": 1480,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Astronomie",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "netzwerktechnik",
      "name": "Netzwerktechnik",
      "category": "informatik",
      "x": 2200,
      "y": 1540,
      "prerequisites": [
        "Datenstrukturen",
        "Kommunikationsnetze"
      ]
    },
    {
      "id": "wetterkunde",
      "name": "Wetterkunde",
      "category": "grundlagenwissenschaft",
      "x": 2200,
      "y": 1660,
      "prerequisites": [
        "Physik Grundlagen",
        "Mathematik Grundlagen",
        "Statistik",
        "Fluidmechanik"
      ]
    },
    {
      "id": "kognitionswissenschaft",
      "name": "Kognitionswissenschaft",
      "category": "grundlagenwissenschaft",
      "x": 2200,
      "y": 1720,
      "prerequisites": [
        "Biologie Grundlagen",
        "Mathematik Grundlagen",
        "Statistik",
        "Molekularbiologie"
      ]
    },
    {
      "id": "robotik",
      "name": "Robotik",
      "category": "industrieproduktion",
      "x": 2200,
      "y": 1780,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Digitale Zwillinge",
        "Supply-Chain-Optimierung",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "hyperloop",
      "name": "Hyperloop",
      "category": "landfahrzeuge",
      "x": 3000,
      "y": 100,
      "prerequisites": [
        "Militärkonvoisteuerung",
        "Magnetbahnen",
        "Aerodynamik",
        "Vakuumtechnik",
        "Klassische Mechanik",
        "Fliegende Autos"
      ]
    },
    {
      "id": "vakuumtechnik",
      "name": "Vakuumtechnik",
      "category": "grundlagenwissenschaft",
      "x": 2954,
      "y": 180,
      "prerequisites": [
        "Physik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "magnetbahnen",
      "name": "Magnetbahnen",
      "category": "landfahrzeuge",
      "x": 2949,
      "y": 260,
      "prerequisites": [
        "Minenräumfahrzeuge",
        "Klassische Mechanik",
        "Hochtemperaturmaterialien",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "quantencomputer",
      "name": "Quantencomputer",
      "category": "informatik",
      "x": 2928,
      "y": 340,
      "prerequisites": [
        "Halbleitertechnik",
        "Kryotechnik",
        "Embedded Systeme",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Quantenmechanik"
      ]
    },
    {
      "id": "gen_editierung_crispr",
      "name": "Gen-Editierung (CRISPR)",
      "category": "chemie",
      "x": 2870,
      "y": 500,
      "prerequisites": [
        "Genetik Grundlagen",
        "Katalyse",
        "Molekularbiologie"
      ]
    },
    {
      "id": "kernfusion",
      "name": "Kernfusion",
      "category": "energie",
      "x": 2839,
      "y": 580,
      "prerequisites": [
        "Thermodynamik",
        "Plasmaphysik",
        "Hochleistungsturbinen",
        "Kryotechnik",
        "Kernphysik"
      ]
    },
    {
      "id": "plasmaphysik",
      "name": "Plasmaphysik",
      "category": "grundlagenwissenschaft",
      "x": 2800,
      "y": 660,
      "prerequisites": [
        "Thermodynamik",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "tarnkappenbomber",
      "name": "Tarnkappenbomber",
      "category": "luftfahrt",
      "x": 2795,
      "y": 740,
      "prerequisites": [
        "Sauerstoffsysteme",
        "Radarabsorbierende Materialien",
        "Aerodynamik",
        "Klassische Mechanik",
        "Stealth Beschichtungen"
      ]
    },
    {
      "id": "autonomer_panzer",
      "name": "Autonomer Panzer",
      "category": "landfahrzeuge",
      "x": 2768,
      "y": 820,
      "prerequisites": [
        "Brennstoffzellen-Züge",
        "Arktisfahrzeuge",
        "Robotik",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "bionische_exoskelette",
      "name": "Bionische Exoskelette",
      "category": "waffen",
      "x": 2843,
      "y": 980,
      "prerequisites": [
        "Chemie Grundlagen",
        "Robotik",
        "Leichtmetall",
        "Materialwissenschaft Grundlagen",
        "Biologie Grundlagen",
        "Neurologie Grundlagen"
      ]
    },
    {
      "id": "neurologie_grundlagen",
      "name": "Neurologie Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 2867,
      "y": 1060,
      "prerequisites": [
        "Biologie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "ki_gesteuerte_drohnenschwärme",
      "name": "KI-Gesteuerte Drohnenschwärme",
      "category": "luftfahrt",
      "x": 2885,
      "y": 1140,
      "prerequisites": [
        "Künstliche Neuronale Netze",
        "Drohnentechnologie",
        "Atombeben-Antrieb",
        "Flügelkonstruktion",
        "Aerodynamik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "drohnentechnologie",
      "name": "Drohnentechnologie",
      "category": "luftfahrt",
      "x": 2861,
      "y": 1220,
      "prerequisites": [
        "Morphing-Tragflächen",
        "Aerodynamik",
        "Klassische Mechanik",
        "Sensortechnologie",
        "Flottenmanagementsysteme",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "künstliche_neuronale_netze",
      "name": "Künstliche Neuronale Netze",
      "category": "ki",
      "x": 2864,
      "y": 1300,
      "prerequisites": [
        "Natural Language Processing (NLP)",
        "Kommunikationsnetze",
        "Mathematik Grundlagen",
        "Biologie Grundlagen"
      ]
    },
    {
      "id": "kommunikationsnetze",
      "name": "Kommunikationsnetze",
      "category": "kommunikation",
      "x": 2874,
      "y": 1380,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Satellitenkommunikation"
      ]
    },
    {
      "id": "weltraumlift",
      "name": "Weltraumlift",
      "category": "raumfahrt",
      "x": 2828,
      "y": 1460,
      "prerequisites": [
        "Raketentechnologie",
        "Lebenserhaltungssysteme",
        "Kohlenstoffnanoröhren",
        "Astronomie"
      ]
    },
    {
      "id": "kohlenstoffnanoröhren",
      "name": "Kohlenstoffnanoröhren",
      "category": "materialien",
      "x": 2832,
      "y": 1540,
      "prerequisites": [
        "Kohlenstoffchemie",
        "Materialwissenschaft Grundlagen",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "hyperschallrakete",
      "name": "Hyperschallrakete",
      "category": "raketen",
      "x": 2872,
      "y": 1780,
      "prerequisites": [
        "Thermodynamik",
        "SLBM Systeme",
        "Raketenantriebe",
        "Aerodynamik"
      ]
    },
    {
      "id": "verbrennungstechnik",
      "name": "Verbrennungstechnik",
      "category": "energie",
      "x": 2921,
      "y": 1940,
      "prerequisites": [
        "Thermodynamik",
        "Chemie Grundlagen"
      ]
    },
    {
      "id": "laserkanone",
      "name": "Laserkanone",
      "category": "waffen",
      "x": 2970,
      "y": 2020,
      "prerequisites": [
        "Hochleistungskondensatoren",
        "Militärische KI-Zielsysteme",
        "Elektromagnetismus",
        "Lasersysteme",
        "Optik Grundlagen",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "lasersysteme",
      "name": "Lasersysteme",
      "category": "sensorik",
      "x": 2951,
      "y": 2100,
      "prerequisites": [
        "Elektromagnetismus",
        "Informatik Grundlagen",
        "Bewegungssensoren",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "hochleistungskondensatoren",
      "name": "Hochleistungskondensatoren",
      "category": "energie",
      "x": 2988,
      "y": 2180,
      "prerequisites": [
        "Thermodynamik",
        "Industrielle Energieoptimierung",
        "Generatoren",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "tiefsee_kuppelstadt",
      "name": "Tiefsee-Kuppelstadt",
      "category": "marine",
      "x": 2953,
      "y": 2260,
      "prerequisites": [
        "Druckkörperbau",
        "Lebenserhaltungssysteme",
        "Hydrodynamik",
        "Geothermie"
      ]
    },
    {
      "id": "geothermie",
      "name": "Geothermie",
      "category": "energie",
      "x": 2964,
      "y": 2340,
      "prerequisites": [
        "Deep Space Energie",
        "Geologie Grundlagen",
        "Thermodynamik"
      ]
    },
    {
      "id": "smart_city_ai",
      "name": "Smart City AI",
      "category": "ki",
      "x": 2924,
      "y": 2660,
      "prerequisites": [
        "Informatik Grundlagen",
        "Internet der Dinge",
        "Mathematik Grundlagen",
        "Kommunikationsnetze",
        "Big Data"
      ]
    },
    {
      "id": "big_data",
      "name": "Big Data",
      "category": "informatik",
      "x": 2886,
      "y": 2740,
      "prerequisites": [
        "Schwarmalgorithmen",
        "Quantenalgorithmen",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Datenbanken",
        "Statistik"
      ]
    },
    {
      "id": "internet_der_dinge",
      "name": "Internet der Dinge",
      "category": "kommunikation",
      "x": 2900,
      "y": 2820,
      "prerequisites": [
        "Sensortechnologie",
        "Kommunikationsnetze",
        "Interplanetares Internet"
      ]
    },
    {
      "id": "sensortechnologie",
      "name": "Sensortechnologie",
      "category": "sensorik",
      "x": 2850,
      "y": 2900,
      "prerequisites": [
        "Gassensoren",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "nanobots_medizin",
      "name": "Nanobots Medizin",
      "category": "grundlagenwissenschaft",
      "x": 2890,
      "y": 2980,
      "prerequisites": [
        "Medizin Grundlagen",
        "Biologie Grundlagen",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "medizin_grundlagen",
      "name": "Medizin Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 2878,
      "y": 3060,
      "prerequisites": [
        "Biologie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "künstliche_organe",
      "name": "Künstliche Organe",
      "category": "grundlagenwissenschaft",
      "x": 2900,
      "y": 3140,
      "prerequisites": [
        "Medizin Grundlagen",
        "Biologie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "3d_bioprinting",
      "name": "3D-Bioprinting",
      "category": "industrieproduktion",
      "x": 2917,
      "y": 3220,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Künstliche Organe",
        "Chemie Grundlagen",
        "Kunststoffverarbeitung",
        "Mathematik Grundlagen",
        "Biologie Grundlagen"
      ]
    },
    {
      "id": "interplanetare_kolonie",
      "name": "Interplanetare Kolonie",
      "category": "raumfahrt",
      "x": 2963,
      "y": 3300,
      "prerequisites": [
        "Raumschiffbau Grundlagen",
        "Mathematik Grundlagen",
        "Astronomie"
      ]
    },
    {
      "id": "raumschiffbau_grundlagen",
      "name": "Raumschiffbau Grundlagen",
      "category": "raumfahrt",
      "x": 2914,
      "y": 3380,
      "prerequisites": [
        "Astronomie",
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik",
        "Druckkörperbau",
        "Raketenantriebe"
      ]
    },
    {
      "id": "tarnkappen_zerstörer",
      "name": "Tarnkappen-Zerstörer",
      "category": "marine",
      "x": 2911,
      "y": 3460,
      "prerequisites": [
        "Stealth Beschichtungen",
        "U Boot Krieg Simulation",
        "Unterwasserkommunikation",
        "Hydrodynamik"
      ]
    },
    {
      "id": "quanten_kryptographie",
      "name": "Quanten-Kryptographie",
      "category": "informatik",
      "x": 2921,
      "y": 3540,
      "prerequisites": [
        "Informatik Grundlagen",
        "Big Data Systeme",
        "Mathematik Grundlagen",
        "Quantenmechanik",
        "Mikroprozessoren",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "fusionsgetriebene_schiffe",
      "name": "Fusionsgetriebene Schiffe",
      "category": "marine",
      "x": 2916,
      "y": 3620,
      "prerequisites": [
        "Kernfusion",
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik",
        "Marine Engineering",
        "Amphibische Kriegführung"
      ]
    },
    {
      "id": "marine_engineering",
      "name": "Marine Engineering",
      "category": "marine",
      "x": 2904,
      "y": 3700,
      "prerequisites": [
        "Stahlproduktion",
        "Mathematik Grundlagen",
        "Tiefsee-Kuppelstadt",
        "Hydrodynamik",
        "Passives Sonar"
      ]
    },
    {
      "id": "satelliten_waffensysteme",
      "name": "Satelliten-Waffensysteme",
      "category": "waffen",
      "x": 2929,
      "y": 3780,
      "prerequisites": [
        "Informatik Grundlagen",
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Lasersysteme",
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "gedankenkontrolle_interface",
      "name": "Gedankenkontrolle-Interface",
      "category": "ki",
      "x": 2976,
      "y": 3860,
      "prerequisites": [
        "Informatik Grundlagen",
        "Elektronik Grundlagen",
        "Neurologie Grundlagen"
      ]
    },
    {
      "id": "erneuerbare_energien_netz",
      "name": "Erneuerbare Energien (Netz)",
      "category": "energie",
      "x": 2933,
      "y": 3940,
      "prerequisites": [
        "Thermodynamik",
        "Solartechnik",
        "Geothermie",
        "Windkraft",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "solartechnik",
      "name": "Solartechnik",
      "category": "energie",
      "x": 3198,
      "y": 100,
      "prerequisites": [
        "Nachbrennertechnologie",
        "Thermodynamik",
        "Hochleistungskühlung",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "windkraft",
      "name": "Windkraft",
      "category": "energie",
      "x": 3229,
      "y": 180,
      "prerequisites": [
        "Thermodynamik",
        "Plasmaenergie",
        "Geothermie",
        "Generatorentechnik",
        "Mathematik Grundlagen",
        "Aerodynamik"
      ]
    },
    {
      "id": "generatorentechnik",
      "name": "Generatorentechnik",
      "category": "energie",
      "x": 3220,
      "y": 260,
      "prerequisites": [
        "Thermodynamik",
        "Klassische Mechanik",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "antimaterie_reaktionsforschung",
      "name": "Antimaterie-Reaktionsforschung",
      "category": "grundlagenwissenschaft",
      "x": 3191,
      "y": 340,
      "prerequisites": [
        "Quantenmechanik",
        "Mathematik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "stark_erweiterte_realität_ar",
      "name": "Stark erweiterte Realität (AR)",
      "category": "informatik",
      "x": 3166,
      "y": 420,
      "prerequisites": [
        "Kampfmanagementsysteme",
        "Mathematik Grundlagen",
        "Optik Grundlagen",
        "Strategische Simulation",
        "Kommunikationsnetze"
      ]
    },
    {
      "id": "holographie",
      "name": "Holographie",
      "category": "sensorik",
      "x": 3214,
      "y": 500,
      "prerequisites": [
        "Lasersysteme",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "bio_treibstoffe",
      "name": "Bio-Treibstoffe",
      "category": "chemie",
      "x": 3192,
      "y": 580,
      "prerequisites": [
        "Chemie Grundlagen",
        "Organische Chemie",
        "Mathematik Grundlagen",
        "Biologie Grundlagen",
        "Botanik"
      ]
    },
    {
      "id": "botanik",
      "name": "Botanik",
      "category": "grundlagenwissenschaft",
      "x": 3233,
      "y": 660,
      "prerequisites": [
        "Biologie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "quantenfeldtheorie",
      "name": "Quantenfeldtheorie",
      "category": "grundlagenwissenschaft",
      "x": 4404,
      "y": 2440,
      "prerequisites": [
        "Quantenmechanik",
        "Relativitätstheorie",
        "Mathematik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "stringtheorie",
      "name": "Stringtheorie",
      "category": "grundlagenwissenschaft",
      "x": 3968,
      "y": 2907,
      "prerequisites": [
        "Fortgeschrittene Mathematik",
        "Quantenfeldtheorie",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "topologie",
      "name": "Topologie",
      "category": "grundlagenwissenschaft",
      "x": 4474,
      "y": 448,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Fortgeschrittene Mathematik"
      ]
    },
    {
      "id": "chaosforschung",
      "name": "Chaosforschung",
      "category": "grundlagenwissenschaft",
      "x": 4465,
      "y": 1640,
      "prerequisites": [
        "Numerische Simulation",
        "Mathematik Grundlagen",
        "Komplexe Systeme"
      ]
    },
    {
      "id": "biophysik",
      "name": "Biophysik",
      "category": "grundlagenwissenschaft",
      "x": 4758,
      "y": 2029,
      "prerequisites": [
        "Thermodynamik",
        "Chemie Grundlagen",
        "Biologie Grundlagen",
        "Physik Grundlagen"
      ]
    },
    {
      "id": "neurobiologie",
      "name": "Neurobiologie",
      "category": "grundlagenwissenschaft",
      "x": 4834,
      "y": 2034,
      "prerequisites": [
        "Chemie Grundlagen",
        "Biologie Grundlagen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "epigenetik",
      "name": "Epigenetik",
      "category": "grundlagenwissenschaft",
      "x": 3061,
      "y": 516,
      "prerequisites": [
        "Genetik Grundlagen",
        "Molekularbiologie"
      ]
    },
    {
      "id": "proteomik",
      "name": "Proteomik",
      "category": "grundlagenwissenschaft",
      "x": 3131,
      "y": 3982,
      "prerequisites": [
        "Biochemie",
        "Molekularbiologie",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "klimaforschung",
      "name": "Klimaforschung",
      "category": "grundlagenwissenschaft",
      "x": 4521,
      "y": 4004,
      "prerequisites": [
        "Atmosphärenphysik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "atmosphaerenphysik",
      "name": "Atmosphärenphysik",
      "category": "grundlagenwissenschaft",
      "x": 4989,
      "y": 2408,
      "prerequisites": [
        "Thermodynamik",
        "Physik Grundlagen",
        "Mathematik Grundlagen",
        "Fluidmechanik"
      ]
    },
    {
      "id": "plattentektonik",
      "name": "Plattentektonik",
      "category": "grundlagenwissenschaft",
      "x": 4508,
      "y": 883,
      "prerequisites": [
        "Geologie Grundlagen",
        "Physik Grundlagen",
        "Rohstoffanalyse"
      ]
    },
    {
      "id": "seismologie",
      "name": "Seismologie",
      "category": "grundlagenwissenschaft",
      "x": 3784,
      "y": 2027,
      "prerequisites": [
        "Akustik",
        "Klassische Mechanik",
        "Plattentektonik"
      ]
    },
    {
      "id": "astrobiologie",
      "name": "Astrobiologie",
      "category": "grundlagenwissenschaft",
      "x": 3274,
      "y": 5806,
      "prerequisites": [
        "Astrochemie",
        "Chemie Grundlagen",
        "Astronomie",
        "Mathematik Grundlagen",
        "Biologie Grundlagen"
      ]
    },
    {
      "id": "astrochemie",
      "name": "Astrochemie",
      "category": "grundlagenwissenschaft",
      "x": 4258,
      "y": 3626,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physikalische Chemie",
        "Astronomie"
      ]
    },
    {
      "id": "quantenchromodynamik",
      "name": "Quantenchromodynamik",
      "category": "grundlagenwissenschaft",
      "x": 3389,
      "y": 2804,
      "prerequisites": [
        "Quantenmechanik",
        "Quantenfeldtheorie",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "neutrinophysik",
      "name": "Neutrinophysik",
      "category": "grundlagenwissenschaft",
      "x": 4774,
      "y": 1184,
      "prerequisites": [
        "Quantenmechanik",
        "Mathematik Grundlagen",
        "Kernphysik"
      ]
    },
    {
      "id": "makromolekulare_chemie",
      "name": "Makromolekulare Chemie",
      "category": "grundlagenwissenschaft",
      "x": 4397,
      "y": 300,
      "prerequisites": [
        "Chemie Grundlagen",
        "Organische Chemie",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "hochtemperatursupraleiter",
      "name": "Hochtemperatursupraleiter",
      "category": "materialien",
      "x": 4287,
      "y": 908,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Kryotechnik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "metamaterialien",
      "name": "Metamaterialien",
      "category": "materialien",
      "x": 4906,
      "y": 3670,
      "prerequisites": [
        "Aerogele",
        "Elektromagnetismus",
        "Optik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Nanomaterialien Grundlagen"
      ]
    },
    {
      "id": "graphenproduktion",
      "name": "Graphenproduktion",
      "category": "materialien",
      "x": 3579,
      "y": 4626,
      "prerequisites": [
        "Kohlenstoffchemie",
        "Materialwissenschaft Grundlagen",
        "Graphenmaterialien",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "aerogele",
      "name": "Aerogele",
      "category": "materialien",
      "x": 4934,
      "y": 2029,
      "prerequisites": [
        "Thermodynamik",
        "Materialwissenschaft Grundlagen",
        "Silikatchemie"
      ]
    },
    {
      "id": "silikatchemie",
      "name": "Silikatchemie",
      "category": "materialien",
      "x": 3043,
      "y": 147,
      "prerequisites": [
        "Anorganische Chemie",
        "Chemie Grundlagen",
        "Mathematik Grundlagen",
        "Graphenproduktion",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "piezoelektrische_materialien",
      "name": "Piezoelektrische Materialien",
      "category": "materialien",
      "x": 4496,
      "y": 1172,
      "prerequisites": [
        "Festkörperphysik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "formgedaechtnislegierungen",
      "name": "Formgedächtnislegierungen",
      "category": "materialien",
      "x": 4434,
      "y": 4362,
      "prerequisites": [
        "Thermodynamik",
        "Supraleiter Hochtemperatur",
        "Legierungsdesign",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "biokompatible_materialien",
      "name": "Biokompatible Materialien",
      "category": "materialien",
      "x": 3461,
      "y": 253,
      "prerequisites": [
        "Chemie Grundlagen",
        "Makromolekulare Chemie",
        "Biophysik",
        "Materialwissenschaft Grundlagen",
        "Biologie Grundlagen",
        "Wasserstoffspeicher"
      ]
    },
    {
      "id": "quantenpunkt_materialien",
      "name": "Quantenpunkt-Materialien",
      "category": "materialien",
      "x": 3061,
      "y": 4396,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Halbleiterphysik",
        "Nanomaterialien Grundlagen",
        "Quantenmechanik"
      ]
    },
    {
      "id": "halbleiterphysik",
      "name": "Halbleiterphysik",
      "category": "materialien",
      "x": 4004,
      "y": 3808,
      "prerequisites": [
        "Quantenmechanik",
        "Festkörperphysik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "spin_elektronik_materialien",
      "name": "Spin-Elektronik Materialien",
      "category": "materialien",
      "x": 4508,
      "y": 371,
      "prerequisites": [
        "Festkörperphysik",
        "Materialwissenschaft Grundlagen",
        "Halbleiterphysik"
      ]
    },
    {
      "id": "photonische_kristalle",
      "name": "Photonische Kristalle",
      "category": "materialien",
      "x": 4923,
      "y": 326,
      "prerequisites": [
        "Metallmatrixkomposite",
        "Materialwissenschaft Grundlagen",
        "Nanomaterialien Grundlagen",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "synthetische_diamanten",
      "name": "Synthetische Diamanten",
      "category": "materialien",
      "x": 4165,
      "y": 5442,
      "prerequisites": [
        "Thermodynamik",
        "Kohlenstoffchemie",
        "Materialwissenschaft Grundlagen",
        "Stahlproduktion"
      ]
    },
    {
      "id": "fluessigkristalle",
      "name": "Flüssigkristalle",
      "category": "materialien",
      "x": 4832,
      "y": 5426,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Physikalische Chemie",
        "Weltraumresistente Beschichtung"
      ]
    },
    {
      "id": "fusionsreaktor_design",
      "name": "Fusionsreaktor Design",
      "category": "energie",
      "x": 4933,
      "y": 2581,
      "prerequisites": [
        "Thermodynamik",
        "Plasmaphysik",
        "Kernfusion",
        "Magnetohydrodynamik",
        "Induktionsenergie"
      ]
    },
    {
      "id": "magnetohydrodynamik",
      "name": "Magnetohydrodynamik",
      "category": "energie",
      "x": 4170,
      "y": 3784,
      "prerequisites": [
        "Thermodynamik",
        "Elektromagnetismus",
        "Fluidmechanik"
      ]
    },
    {
      "id": "thorium_fluessigsalzreaktor",
      "name": "Thorium-Flüssigsalzreaktor",
      "category": "energie",
      "x": 4400,
      "y": 4328,
      "prerequisites": [
        "Thermodynamik",
        "Chemie Grundlagen",
        "Mathematik Grundlagen",
        "Kernphysik"
      ]
    },
    {
      "id": "smart_grid_technologie",
      "name": "Smart Grid Technologie",
      "category": "energie",
      "x": 4174,
      "y": 737,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Thermodynamik",
        "Informatik Grundlagen",
        "Generatoren",
        "Energie Grundlagen",
        "Netzwerktechnik"
      ]
    },
    {
      "id": "feststoffbatterien",
      "name": "Feststoffbatterien",
      "category": "energie",
      "x": 3340,
      "y": 4444,
      "prerequisites": [
        "Thermodynamik",
        "Materialwissenschaft Grundlagen",
        "Elektrotechnik Grundlagen",
        "Physikalische Chemie"
      ]
    },
    {
      "id": "metall_luft_batterien",
      "name": "Metall-Luft-Batterien",
      "category": "energie",
      "x": 4095,
      "y": 2214,
      "prerequisites": [
        "Thermodynamik",
        "Chemie Grundlagen",
        "Aerodynamik",
        "Elektrische Energieerzeugung",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "wasserstoff_brennstoffzellen",
      "name": "Wasserstoff-Brennstoffzellen",
      "category": "energie",
      "x": 4063,
      "y": 2585,
      "prerequisites": [
        "Thermodynamik",
        "Elektrochemie",
        "Wasserstoffproduktion"
      ]
    },
    {
      "id": "molekulardynamik",
      "name": "Molekulardynamik",
      "category": "chemie",
      "x": 3416,
      "y": 2017,
      "prerequisites": [
        "Reaktionstechnik",
        "Physikalische Chemie",
        "Quantenmechanik",
        "Fortgeschrittene Mathematik"
      ]
    },
    {
      "id": "quantenchemie",
      "name": "Quantenchemie",
      "category": "chemie",
      "x": 3314,
      "y": 3166,
      "prerequisites": [
        "Chemie Grundlagen",
        "Künstliche Enzyme",
        "Mathematik Grundlagen",
        "Nanochemie",
        "Quantenmechanik"
      ]
    },
    {
      "id": "geothermische_kraftwerke",
      "name": "Geothermische Kraftwerke",
      "category": "energie",
      "x": 3786,
      "y": 4884,
      "prerequisites": [
        "Thermodynamik",
        "Geothermie",
        "Energieeffizienzsysteme",
        "Bohrtechnik",
        "Raketenantriebe"
      ]
    },
    {
      "id": "bohrtechnik",
      "name": "Bohrtechnik",
      "category": "industrieproduktion",
      "x": 4187,
      "y": 639,
      "prerequisites": [
        "Klassische Mechanik",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "gezeitenkraftwerke",
      "name": "Gezeitenkraftwerke",
      "category": "energie",
      "x": 3973,
      "y": 5505,
      "prerequisites": [
        "Thermodynamik",
        "Orbitalenergieübertragung",
        "Mathematik Grundlagen",
        "Klassische Mechanik",
        "Mikro-Atomreaktoren"
      ]
    },
    {
      "id": "weltraumsolares_kraftwerk",
      "name": "Weltraumsolares Kraftwerk",
      "category": "energie",
      "x": 3517,
      "y": 1547,
      "prerequisites": [
        "Thermodynamik",
        "Astronomie",
        "Geothermie",
        "Solarzellen",
        "Reaktordesign",
        "Energieübertragung per Mikrowellen"
      ]
    },
    {
      "id": "energieuebertragung_per_mikrowellen",
      "name": "Energieübertragung per Mikrowellen",
      "category": "energie",
      "x": 4110,
      "y": 4385,
      "prerequisites": [
        "Thermodynamik",
        "Elektrische Energieerzeugung",
        "Antennentechnik",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "mikro_atomreaktoren",
      "name": "Mikro-Atomreaktoren",
      "category": "energie",
      "x": 3192,
      "y": 3882,
      "prerequisites": [
        "Thermodynamik",
        "Physik Grundlagen",
        "Notstromsysteme",
        "Mathematik Grundlagen",
        "Magnetohydrodynamik",
        "Kernphysik"
      ]
    },
    {
      "id": "antimaterie_speicherung",
      "name": "Antimaterie-Speicherung",
      "category": "energie",
      "x": 4074,
      "y": 4515,
      "prerequisites": [
        "Thermodynamik",
        "Kryotechnik",
        "Raumfahrtsolarzellen",
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Antimaterie-Reaktionsforschung"
      ]
    },
    {
      "id": "kuenstliche_allgemeine_intelligenz_agi",
      "name": "Künstliche Allgemeine Intelligenz (AGI)",
      "category": "ki",
      "x": 3086,
      "y": 2458,
      "prerequisites": [
        "Maschinelles Lernen",
        "Kognitionswissenschaft",
        "Informatik Grundlagen",
        "Künstliche Neuronale Netze"
      ]
    },
    {
      "id": "natural_language_processing_nlp",
      "name": "Natural Language Processing (NLP)",
      "category": "ki",
      "x": 4643,
      "y": 3146,
      "prerequisites": [
        "Maschinelles Lernen",
        "Informationstheorie",
        "Reinforcement Learning",
        "Sprachwissenschaft"
      ]
    },
    {
      "id": "sprachwissenschaft",
      "name": "Sprachwissenschaft",
      "category": "grundlagenwissenschaft",
      "x": 3616,
      "y": 4783,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Kognitionswissenschaft",
        "Statistik"
      ]
    },
    {
      "id": "evolutionaere_algorithmen",
      "name": "Evolutionäre Algorithmen",
      "category": "ki",
      "x": 3534,
      "y": 1377,
      "prerequisites": [
        "Sprachverarbeitung",
        "Algorithmen Grundlagen",
        "Biologie Grundlagen",
        "KI-Agentensysteme"
      ]
    },
    {
      "id": "quantenalgorithmen",
      "name": "Quantenalgorithmen",
      "category": "informatik",
      "x": 3620,
      "y": 4266,
      "prerequisites": [
        "Informatik Grundlagen",
        "Informationstheorie",
        "Mathematik Grundlagen",
        "Quantencomputer",
        "Quantenmechanik",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "neuromorphe_chips",
      "name": "Neuromorphe Chips",
      "category": "informatik",
      "x": 4297,
      "y": 1893,
      "prerequisites": [
        "Halbleitertechnik",
        "Informatik Grundlagen",
        "Simulation KI",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Biologie Grundlagen"
      ]
    },
    {
      "id": "blockchain_architektur",
      "name": "Blockchain-Architektur",
      "category": "informatik",
      "x": 3761,
      "y": 4483,
      "prerequisites": [
        "Netzwerktechnik",
        "Informatik Grundlagen",
        "Kryptographie"
      ]
    },
    {
      "id": "cloud_computing_infrastruktur",
      "name": "Cloud Computing Infrastruktur",
      "category": "informatik",
      "x": 3083,
      "y": 1195,
      "prerequisites": [
        "Netzwerktechnik",
        "Datenbanken",
        "Betriebssysteme",
        "Schwarmdrohnensteuerung"
      ]
    },
    {
      "id": "betriebssysteme",
      "name": "Betriebssysteme",
      "category": "informatik",
      "x": 3718,
      "y": 847,
      "prerequisites": [
        "Computerarchitektur",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "edge_computing",
      "name": "Edge Computing",
      "category": "informatik",
      "x": 3160,
      "y": 630,
      "prerequisites": [
        "Radarverarbeitung",
        "Netzwerktechnik",
        "Cloud Computing Infrastruktur",
        "Internet der Dinge"
      ]
    },
    {
      "id": "hyper_dimensionale_speichermedien",
      "name": "Hyper-Dimensionale Speichermedien",
      "category": "informatik",
      "x": 4832,
      "y": 815,
      "prerequisites": [
        "Cloud Computing",
        "Materialwissenschaft Grundlagen",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "6g_netzwerke",
      "name": "6G-Netzwerke",
      "category": "kommunikation",
      "x": 3708,
      "y": 1587,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Internetinfrastruktur",
        "Kommunikationsnetze",
        "Antennentechnik"
      ]
    },
    {
      "id": "quanteninternet",
      "name": "Quanteninternet",
      "category": "kommunikation",
      "x": 3082,
      "y": 1858,
      "prerequisites": [
        "Quantenmechanik",
        "Optik Grundlagen",
        "Mathematik Grundlagen",
        "Quantenverschränkung"
      ]
    },
    {
      "id": "quantenverschraenkung",
      "name": "Quantenverschränkung",
      "category": "grundlagenwissenschaft",
      "x": 4854,
      "y": 4326,
      "prerequisites": [
        "Quantenmechanik",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "interplanetares_internet",
      "name": "Interplanetares Internet",
      "category": "kommunikation",
      "x": 4926,
      "y": 1510,
      "prerequisites": [
        "Laserkommunikation",
        "Telemetrie",
        "Fehlertolerantenetzwerke"
      ]
    },
    {
      "id": "fehlertolerantenetzwerke",
      "name": "Fehlertolerantenetzwerke",
      "category": "kommunikation",
      "x": 3827,
      "y": 4779,
      "prerequisites": [
        "Informationstheorie",
        "5G Netzwerke"
      ]
    },
    {
      "id": "tiefenraumnetzwerk_dsn",
      "name": "Tiefenraumnetzwerk (DSN)",
      "category": "kommunikation",
      "x": 4360,
      "y": 1441,
      "prerequisites": [
        "Mesh-Netzwerke",
        "Astronomie",
        "Mathematik Grundlagen",
        "Hochfrequenzkommunikation"
      ]
    },
    {
      "id": "gedanken_zu_text_kommunikation",
      "name": "Gedanken-zu-Text Kommunikation",
      "category": "kommunikation",
      "x": 4082,
      "y": 420,
      "prerequisites": [
        "Informationstheorie",
        "Gedankenkontrolle-Interface",
        "Mathematik Grundlagen",
        "Neurologie Grundlagen"
      ]
    },
    {
      "id": "autonome_lkw_flotten",
      "name": "Autonome LKW-Flotten",
      "category": "landfahrzeuge",
      "x": 3054,
      "y": 5827,
      "prerequisites": [
        "Sensorfusion",
        "Militärnavigation Fahrzeuge",
        "Logistiknetzwerke",
        "Autonomes Fahren"
      ]
    },
    {
      "id": "autonomes_fahren",
      "name": "Autonomes Fahren",
      "category": "landfahrzeuge",
      "x": 3292,
      "y": 5869,
      "prerequisites": [
        "Klassische Mechanik",
        "Sensorfusion",
        "Mobile Raketenwerfer",
        "Elektronische Panzerabwehr"
      ]
    },
    {
      "id": "logistiknetzwerke",
      "name": "Logistiknetzwerke",
      "category": "industrieproduktion",
      "x": 3255,
      "y": 1150,
      "prerequisites": [
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "Wirtschaftsmathematik",
        "Netzwerktechnik",
        "Datenbanken",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "wirtschaftsmathematik",
      "name": "Wirtschaftsmathematik",
      "category": "grundlagenwissenschaft",
      "x": 4003,
      "y": 372,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Statistik"
      ]
    },
    {
      "id": "fliegende_autos",
      "name": "Fliegende Autos",
      "category": "landfahrzeuge",
      "x": 4995,
      "y": 3049,
      "prerequisites": [
        "VTOL-Technologie",
        "Mathematik Grundlagen",
        "Leichtmetall",
        "Luftfahrt",
        "Militärnavigation Fahrzeuge"
      ]
    },
    {
      "id": "vtol_technologie",
      "name": "VTOL-Technologie",
      "category": "luftfahrt",
      "x": 4685,
      "y": 4639,
      "prerequisites": [
        "Thermodynamik",
        "Stealth Aerodynamik",
        "Tarnkappenbomber",
        "Aerodynamik",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "brennstoffzellen_zuege",
      "name": "Brennstoffzellen-Züge",
      "category": "landfahrzeuge",
      "x": 3168,
      "y": 832,
      "prerequisites": [
        "Eisenbahntechnik",
        "Wasserstoff-Brennstoffzellen"
      ]
    },
    {
      "id": "eisenbahntechnik",
      "name": "Eisenbahntechnik",
      "category": "landfahrzeuge",
      "x": 3467,
      "y": 260,
      "prerequisites": [
        "Geländeanalyse Systeme",
        "Klassische Mechanik",
        "Metallurgie Grundlagen"
      ]
    },
    {
      "id": "hovershiffe",
      "name": "Hovershiffe",
      "category": "landfahrzeuge",
      "x": 4411,
      "y": 3458,
      "prerequisites": [
        "Aufklärungsfahrzeuge",
        "Leichtmetall",
        "Aerodynamik",
        "Fluidmechanik"
      ]
    },
    {
      "id": "atombeben_antrieb",
      "name": "Atombeben-Antrieb",
      "category": "luftfahrt",
      "x": 3791,
      "y": 3055,
      "prerequisites": [
        "Thermodynamik",
        "Physik Grundlagen",
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Mikro-Atomreaktoren",
        "Kernphysik"
      ]
    },
    {
      "id": "elektroflugzeuge",
      "name": "Elektroflugzeuge",
      "category": "luftfahrt",
      "x": 4605,
      "y": 4519,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Aerodynamik",
        "Feststoffbatterien",
        "Leichtmetall",
        "Drohnenflugzeuge"
      ]
    },
    {
      "id": "atmosphaerische_scramjets",
      "name": "Atmosphärische Scramjets",
      "category": "luftfahrt",
      "x": 3737,
      "y": 1765,
      "prerequisites": [
        "Thermodynamik",
        "Materialwissenschaft Grundlagen",
        "Hyperschallrakete"
      ]
    },
    {
      "id": "solargetriebene_hoehenplattformen",
      "name": "Solargetriebene Höhenplattformen",
      "category": "luftfahrt",
      "x": 3703,
      "y": 3865,
      "prerequisites": [
        "Solarzellen",
        "Telemetrie",
        "Aerodynamik"
      ]
    },
    {
      "id": "morphing_tragflaechen",
      "name": "Morphing-Tragflächen",
      "category": "luftfahrt",
      "x": 4682,
      "y": 2681,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Formgedächtnislegierungen",
        "Aerodynamik"
      ]
    },
    {
      "id": "kavitationsantrieb",
      "name": "Kavitationsantrieb",
      "category": "marine",
      "x": 3243,
      "y": 5704,
      "prerequisites": [
        "Materialwissenschaft Grundlagen",
        "Hydrodynamik",
        "Verbundschiffbau",
        "Strömungsmechanik"
      ]
    },
    {
      "id": "unterwasserdrohnenschwaerme",
      "name": "Unterwasserdrohnenschwärme",
      "category": "marine",
      "x": 4573,
      "y": 3411,
      "prerequisites": [
        "Marine Radar",
        "Robotik"
      ]
    },
    {
      "id": "tiefsee_habitate",
      "name": "Tiefsee-Habitate",
      "category": "marine",
      "x": 4179,
      "y": 4088,
      "prerequisites": [
        "Lebenserhaltungssysteme",
        "Geothermie",
        "Nuklearantrieb Schiffe",
        "Druckkörperbau",
        "Marine Reparatursysteme"
      ]
    },
    {
      "id": "flugzeugtraeger_der_nimitz_klasse",
      "name": "Flugzeugträger der Nimitz-Klasse",
      "category": "marine",
      "x": 3264,
      "y": 1201,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Kernphysik",
        "Nuklearantrieb Schiffe",
        "Schiffbau Grundlagen",
        "Amphibische Kriegführung"
      ]
    },
    {
      "id": "elektromagnetische_katapulte_emals",
      "name": "Elektromagnetische Katapulte (EMALS)",
      "category": "marine",
      "x": 3573,
      "y": 216,
      "prerequisites": [
        "Elektromagnetismus",
        "Luftfahrt",
        "Mathematik Grundlagen",
        "U Boot Hydrodynamik",
        "Seeschlacht Simulation",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "ozeanische_thermalenergiekonvertierung",
      "name": "Ozeanische Thermalenergiekonvertierung",
      "category": "marine",
      "x": 3196,
      "y": 4936,
      "prerequisites": [
        "Thermodynamik",
        "Energie Grundlagen",
        "Mathematik Grundlagen",
        "Hydrodynamik",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "ionenantrieb",
      "name": "Ionenantrieb",
      "category": "raketen",
      "x": 4528,
      "y": 2851,
      "prerequisites": [
        "Plasmaphysik",
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Flugsteuerung Raketen",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "antimaterieantrieb",
      "name": "Antimaterieantrieb",
      "category": "raumfahrt",
      "x": 4467,
      "y": 5115,
      "prerequisites": [
        "Thermodynamik",
        "Marsmissionen",
        "Mathematik Grundlagen",
        "Antimaterie-Speicherung",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "warp_antrieb_theorien",
      "name": "Warp-Antrieb Theorien",
      "category": "raumfahrt",
      "x": 4879,
      "y": 3572,
      "prerequisites": [
        "Quantenfeldtheorie",
        "Relativitätstheorie",
        "Astrophysik"
      ]
    },
    {
      "id": "astrophysik",
      "name": "Astrophysik",
      "category": "grundlagenwissenschaft",
      "x": 4597,
      "y": 965,
      "prerequisites": [
        "Quantenmechanik",
        "Physik Grundlagen",
        "Astronomie"
      ]
    },
    {
      "id": "tiefschlafkammern_kryoschlaf",
      "name": "Tiefschlafkammern (Kryoschlaf)",
      "category": "raumfahrt",
      "x": 3525,
      "y": 3088,
      "prerequisites": [
        "Medizin Grundlagen",
        "Kryotechnik",
        "Weltraumlift",
        "Neurologie Grundlagen"
      ]
    },
    {
      "id": "mondbasis",
      "name": "Mondbasis",
      "category": "raumfahrt",
      "x": 3514,
      "y": 4913,
      "prerequisites": [
        "Lebenserhaltungssysteme",
        "Mathematik Grundlagen",
        "Raumschiffbau Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Kommunikationssatelliten",
        "Orbitalmechanik"
      ]
    },
    {
      "id": "marskolonie",
      "name": "Marskolonie",
      "category": "raumfahrt",
      "x": 3163,
      "y": 2254,
      "prerequisites": [
        "Telemetrie",
        "Raumsonden",
        "Raumstationen",
        "Luft- und Raumfahrtmedizin",
        "Mondbasis"
      ]
    },
    {
      "id": "spektroskopie",
      "name": "Spektroskopie",
      "category": "sensorik",
      "x": 3229,
      "y": 5649,
      "prerequisites": [
        "Quantenmechanik",
        "Elektromagnetismus",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "dyson_schwarm_konzepte",
      "name": "Dyson-Schwarm Konzepte",
      "category": "raumfahrt",
      "x": 3792,
      "y": 4700,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Solarzellen",
        "Mathematik Grundlagen",
        "Materialwissenschaft Grundlagen",
        "Kommunikationssatelliten",
        "Orbitalmechanik"
      ]
    },
    {
      "id": "synthetische_biologie",
      "name": "Synthetische Biologie",
      "category": "chemie",
      "x": 3076,
      "y": 2898,
      "prerequisites": [
        "Informatik Grundlagen",
        "Chemie Grundlagen",
        "Molekularbiologie",
        "Mathematik Grundlagen",
        "Biologie Grundlagen",
        "Plasmachemie"
      ]
    },
    {
      "id": "kuenstliche_enzyme",
      "name": "Künstliche Enzyme",
      "category": "chemie",
      "x": 3993,
      "y": 4500,
      "prerequisites": [
        "Molekulardynamik",
        "Organische Chemie",
        "Proteomik"
      ]
    },
    {
      "id": "superpolymere",
      "name": "Superpolymere",
      "category": "chemie",
      "x": 4647,
      "y": 4172,
      "prerequisites": [
        "Makromolekulare Chemie",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "toxikologie",
      "name": "Toxikologie",
      "category": "chemie",
      "x": 4098,
      "y": 4999,
      "prerequisites": [
        "Biochemie",
        "Explosivstoffchemie",
        "Chemie Grundlagen",
        "Medizin Grundlagen"
      ]
    },
    {
      "id": "atmosphaerische_terraforming_chemie",
      "name": "Atmosphärische Terraforming-Chemie",
      "category": "chemie",
      "x": 4573,
      "y": 4003,
      "prerequisites": [
        "Astrochemie",
        "Chemie Grundlagen",
        "Chemische Sicherheitssysteme",
        "Klimaforschung",
        "Atmosphärenphysik"
      ]
    },
    {
      "id": "quantensensoren",
      "name": "Quantensensoren",
      "category": "sensorik",
      "x": 3451,
      "y": 4986,
      "prerequisites": [
        "Temperatursensoren",
        "Spektroskopie",
        "Elektronik Grundlagen",
        "Mathematik Grundlagen",
        "Quantenmechanik"
      ]
    },
    {
      "id": "interferometrie",
      "name": "Interferometrie",
      "category": "sensorik",
      "x": 4155,
      "y": 581,
      "prerequisites": [
        "Physik Grundlagen",
        "Mathematik Grundlagen",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "lidar_systeme",
      "name": "LIDAR-Systeme",
      "category": "sensorik",
      "x": 3494,
      "y": 226,
      "prerequisites": [
        "Signalverarbeitung Grundlagen",
        "Bewegungssensoren",
        "Lasersysteme",
        "Optik Grundlagen"
      ]
    },
    {
      "id": "gravitationswellendetektoren",
      "name": "Gravitationswellendetektoren",
      "category": "sensorik",
      "x": 4786,
      "y": 2943,
      "prerequisites": [
        "Spektroskopische Sensoren",
        "Kryotechnik",
        "Vakuumtechnik",
        "Multispektrale Sensorik",
        "Relativitätstheorie",
        "Interferometrie"
      ]
    },
    {
      "id": "railguns_elektromagnetische_kanonen",
      "name": "Railguns (Elektromagnetische Kanonen)",
      "category": "waffen",
      "x": 4009,
      "y": 3280,
      "prerequisites": [
        "Hochfester Stahl",
        "Elektrotechnik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "coilguns",
      "name": "Coilguns",
      "category": "waffen",
      "x": 3390,
      "y": 586,
      "prerequisites": [
        "Elektrotechnik Grundlagen",
        "Elektromagnetismus"
      ]
    },
    {
      "id": "gerichtete_energiewaffen",
      "name": "Gerichtete Energiewaffen",
      "category": "waffen",
      "x": 3740,
      "y": 2980,
      "prerequisites": [
        "Thermodynamik",
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Militärische KI-Zielsysteme",
        "Elektromagnetismus",
        "Lasersysteme"
      ]
    },
    {
      "id": "hyperschallgleiter",
      "name": "Hyperschallgleiter",
      "category": "waffen",
      "x": 3312,
      "y": 3081,
      "prerequisites": [
        "Thermodynamik",
        "Aerodynamik",
        "Mikrowellenwaffen (Active Denial)",
        "Energiewaffen",
        "Materialwissenschaft Grundlagen"
      ]
    },
    {
      "id": "mikrowellenwaffen_active_denial",
      "name": "Mikrowellenwaffen (Active Denial)",
      "category": "waffen",
      "x": 4651,
      "y": 5783,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "biowaffen_abwehr",
      "name": "Biowaffen-Abwehr",
      "category": "waffen",
      "x": 4875,
      "y": 1525,
      "prerequisites": [
        "Medizin Grundlagen",
        "Toxikologie",
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Militärische KI-Zielsysteme",
        "Molekularbiologie"
      ]
    },
    {
      "id": "emp_waffen_elektromagnetischer_impuls",
      "name": "EMP-Waffen (Elektromagnetischer Impuls)",
      "category": "waffen",
      "x": 4216,
      "y": 2562,
      "prerequisites": [
        "Chemie Grundlagen",
        "Physik Grundlagen",
        "Elektromagnetismus",
        "Mathematik Grundlagen",
        "Kernphysik",
        "Signalverarbeitung Grundlagen"
      ]
    },
    {
      "id": "automatisierte_bergbau_rigs",
      "name": "Automatisierte Bergbau-Rigs",
      "category": "industrieproduktion",
      "x": 3253,
      "y": 1090,
      "prerequisites": [
        "3D-Druck",
        "Industrielle Sensorik",
        "Robotik",
        "Klassische Mechanik",
        "Bohrtechnik"
      ]
    },
    {
      "id": "selbstreplizierende_maschinen",
      "name": "Selbstreplizierende Maschinen",
      "category": "industrieproduktion",
      "x": 3508,
      "y": 363,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Batteriefertigung",
        "KI-Grundlagen",
        "Klassische Mechanik",
        "Glasproduktion",
        "Nanofabrikation"
      ]
    },
    {
      "id": "ki_grundlagen",
      "name": "KI-Grundlagen",
      "category": "ki",
      "x": 3409,
      "y": 4576,
      "prerequisites": [
        "Federated Learning",
        "Informatik Grundlagen",
        "Mathematik Grundlagen",
        "KI-Simulation",
        "Algorithmen Grundlagen"
      ]
    },
    {
      "id": "4d_druck",
      "name": "4D-Druck",
      "category": "industrieproduktion",
      "x": 3558,
      "y": 4851,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "3D-Bioprinting",
        "Formgedächtnislegierungen",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "orbitale_fabriken",
      "name": "Orbitale Fabriken",
      "category": "industrieproduktion",
      "x": 4560,
      "y": 5500,
      "prerequisites": [
        "Automatisierung Grundlagen",
        "Produktionsplanungssysteme",
        "Materialwissenschaft Grundlagen",
        "Raumschiffbau Grundlagen",
        "Hochpräzisionsfertigung"
      ]
    },
    {
      "id": "stammzellentherapie",
      "name": "Stammzellentherapie",
      "category": "grundlagenwissenschaft",
      "x": 3225,
      "y": 4008,
      "prerequisites": [
        "Medizin Grundlagen",
        "Zellbiologie",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "zellbiologie",
      "name": "Zellbiologie",
      "category": "grundlagenwissenschaft",
      "x": 3688,
      "y": 3344,
      "prerequisites": [
        "Chemie Grundlagen",
        "Biologie Grundlagen",
        "Mathematik Grundlagen",
        "Mikroskopie"
      ]
    },
    {
      "id": "mikroskopie",
      "name": "Mikroskopie",
      "category": "sensorik",
      "x": 4639,
      "y": 4228,
      "prerequisites": [
        "Biologie Grundlagen",
        "Optik Grundlagen",
        "Vibrationssensoren"
      ]
    },
    {
      "id": "gentherapie",
      "name": "Gentherapie",
      "category": "grundlagenwissenschaft",
      "x": 4515,
      "y": 1589,
      "prerequisites": [
        "Medizin Grundlagen",
        "Gen-Editierung (CRISPR)",
        "Mathematik Grundlagen"
      ]
    },
    {
      "id": "lebensverlaengerungstechnologien",
      "name": "Lebensverlängerungstechnologien",
      "category": "grundlagenwissenschaft",
      "x": 3445,
      "y": 1105,
      "prerequisites": [
        "Stammzellentherapie",
        "Epigenetik",
        "Nanobots Medizin"
      ]
    },
    {
      "id": "energie_grundlagen",
      "name": "Energie Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 3513,
      "y": 3121,
      "prerequisites": [
        "Thermodynamik",
        "Elektrotechnik Grundlagen"
      ]
    },
    {
      "id": "militaerische_grundlagen",
      "name": "Militärische Grundlagen",
      "category": "grundlagenwissenschaft",
      "x": 3133,
      "y": 5917,
      "prerequisites": [
        "Mathematik Grundlagen",
        "Klassische Mechanik"
      ]
    },
    {
      "id": "luftfahrt",
      "name": "Luftfahrt",
      "category": "grundlagenwissenschaft",
      "x": 3677,
      "y": 4355,
      "prerequisites": [
        "Aerodynamik",
        "Jettriebwerke Grundlagen",
        "Strukturmechanik",
        "Gasturbinen"
      ]
    }
  ]
};