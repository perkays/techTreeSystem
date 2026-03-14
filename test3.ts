import { generateInitialGraph } from './src/initialData';
const graph = generateInitialGraph();
const idCounts: Record<string, number> = {};
for (const t of graph.technologies) {
  idCounts[t.id] = (idCounts[t.id] || 0) + 1;
}
const dupes = Object.keys(idCounts).filter(id => idCounts[id] > 1);
console.log("Duplicates:", dupes);
