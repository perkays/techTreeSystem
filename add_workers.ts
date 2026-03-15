import { readFileSync, writeFileSync } from 'fs';

const fileContent = readFileSync('public/tech-tree-data.json', 'utf8');
const data = JSON.parse(fileContent.replace(/^\uFEFF/, ''));

const workerGroups = [
  "Landwirt", "Bergarbeiter", "Bauarbeiter", "Ingenieur", "Techniker",
  "Programmierer", "Chemiker", "Metallarbeiter", "Elektriker", "Schweißer",
  "Mechaniker", "Waffenschmied", "Nukleartechniker", "Sachbearbeiter",
  "Logistiker", "Wissenschaftler", "Physiker", "Biologe", "Mathematiker",
  "Geologe", "Pilot", "Schiffbauer", "Astronaut", "Arzt", "KI-Spezialist",
  "Elektroniker", "Sicherheitsoffizier", "Offizier", "Fahrzeugbauer",
  "Hochfrequenztechniker"
];

const categoryToWorkers: Record<string, string[]> = {
  "grundlagenwissenschaft": ["Wissenschaftler", "Physiker", "Mathematiker", "Biologe", "Chemiker", "Geologe"],
  "materialien": ["Chemiker", "Metallarbeiter", "Wissenschaftler", "Schweißer", "Ingenieur", "Techniker"],
  "energie": ["Elektriker", "Techniker", "Ingenieur", "Nukleartechniker", "Physiker"],
  "informatik": ["Programmierer", "KI-Spezialist", "Elektroniker", "Techniker", "Ingenieur", "Wissenschaftler"],
  "landfahrzeuge": ["Mechaniker", "Fahrzeugbauer", "Ingenieur", "Schweißer", "Techniker"],
  "luftfahrt": ["Pilot", "Mechaniker", "Ingenieur", "Elektroniker", "Techniker"],
  "marine": ["Schiffbauer", "Mechaniker", "Ingenieur", "Offizier", "Schweißer", "Techniker"],
  "raketen": ["Ingenieur", "Mechaniker", "Physiker", "Elektroniker", "Programmierer"],
  "chemie": ["Chemiker", "Techniker", "Wissenschaftler", "Logistiker"],
  "sensorik": ["Elektroniker", "Hochfrequenztechniker", "Ingenieur", "Techniker", "Programmierer"],
  "waffen": ["Waffenschmied", "Ingenieur", "Sicherheitsoffizier", "Mechaniker", "Techniker"],
  "nuklear": ["Nukleartechniker", "Physiker", "Sicherheitsoffizier", "Ingenieur", "Techniker"],
  "ki": ["KI-Spezialist", "Programmierer", "Mathematiker", "Wissenschaftler"],
  "kommunikation": ["Hochfrequenztechniker", "Elektroniker", "Programmierer", "Techniker"],
  "raumfahrt": ["Astronaut", "Ingenieur", "Physiker", "Techniker", "Mechaniker"],
  "industrieproduktion": ["Bauarbeiter", "Mechaniker", "Elektriker", "Logistiker", "Sachbearbeiter", "Techniker", "Ingenieur", "Schweißer"]
};

const defaultWorkers = ["Sachbearbeiter", "Logistiker", "Techniker"];

// assign pseudorandom required workers based on ID hash
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

data.technologies.forEach((tech: any) => {
  if (!tech.workerGroups) {
    const hash = hashString(tech.id);
    const possibleWorkers = categoryToWorkers[tech.category] || defaultWorkers;
    
    // Select between 1 and 4 worker groups randomly based on hash
    const numGroups = (hash % 4) + 1;
    let selectedGroups: string[] = [];
    
    for (let i = 0; i < numGroups; i++) {
        const workerIndex = (hash + i * 17) % possibleWorkers.length;
        const worker = possibleWorkers[workerIndex];
        if (!selectedGroups.includes(worker)) {
            selectedGroups.push(worker);
        }
    }
    
    if (selectedGroups.length === 0) {
        selectedGroups.push(possibleWorkers[0]);
    }

    const workerRequirements: Record<string, number> = {};
    selectedGroups.forEach((group, index) => {
        // Quantities from 1 to 50 based on hash and index
        const quantity = ((hash + index * 31) % 50) + 1;
        workerRequirements[group] = quantity;
    });

    tech.workerGroups = workerRequirements;
  }
});

writeFileSync('public/tech-tree-data.json', JSON.stringify(data, null, 2));
console.log('Successfully updated tech-tree-data.json with worker groups');
