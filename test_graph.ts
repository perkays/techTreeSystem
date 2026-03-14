import { generateInitialGraph } from './src/initialData';

const graphData = generateInitialGraph();

function getConnectedNodes(rootId: string): Set<string> {
  const connected = new Set<string>();
  connected.add(rootId);
  
  // traverse forwards (targets)
  let queue = [rootId];
  while (queue.length > 0) {
    const cur = queue.shift()!;
    graphData.dependencies.forEach(d => {
      if (d.sourceId === cur && !connected.has(d.targetId)) {
        connected.add(d.targetId);
        queue.push(d.targetId);
      }
    });
  }
  
  // traverse backwards (sources)
  queue = [rootId];
  while (queue.length > 0) {
    const cur = queue.shift()!;
    graphData.dependencies.forEach(d => {
      if (d.targetId === cur && !connected.has(d.sourceId)) {
        connected.add(d.sourceId);
        queue.push(d.sourceId);
      }
    });
  }
  return connected;
}

const res = getConnectedNodes('statistik');
console.log("Size:", res.size);
console.log(Array.from(res));
