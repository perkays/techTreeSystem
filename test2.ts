import { generateInitialGraph, GraphData, Dependency } from './src/initialData';

const graphData = generateInitialGraph();

function serializeData(data: GraphData) {
  const techs = data.technologies.map(t => {
    const prereqs = data.dependencies
      .filter(d => d.targetId === t.id)
      .map(d => data.technologies.find(src => src.id === d.sourceId)?.name)
      .filter(Boolean);
    return { ...t, prerequisites: prereqs };
  });
  return { categories: data.categories, technologies: techs };
}

function deserializeData(parsed: any): GraphData {
  if (parsed.dependencies && !parsed.technologies[0]?.prerequisites) {
     return parsed as GraphData;
  }

  const deps: Dependency[] = [];
  parsed.technologies.forEach((t: any) => {
    if (t.prerequisites) {
      t.prerequisites.forEach((pName: string) => {
        const sourceTech = parsed.technologies.find((tech: any) => tech.name === pName);
        if (sourceTech) {
          deps.push({ sourceId: sourceTech.id, targetId: t.id });
        }
      });
    }
  });

  const techs = parsed.technologies.map((t: any) => {
    const { prerequisites, ...rest } = t;
    return rest;
  });

  return {
    categories: parsed.categories || [],
    technologies: techs,
    dependencies: deps
  };
}

const serialized = serializeData(graphData);
const deserialized = deserializeData(JSON.parse(JSON.stringify(serialized)));

const halbleiterfertigung = deserialized.technologies.find(t => t.name.toLowerCase() === 'halbleiterfertigung');
console.log("Halb:", halbleiterfertigung);
if (halbleiterfertigung) {
    const prereqs = deserialized.dependencies.filter(d => d.targetId === halbleiterfertigung.id);
    console.log("Prereqs for Halbleiterfertigung:");
    prereqs.forEach(p => console.log(deserialized.technologies.find(t => t.id === p.sourceId)?.name));
}
