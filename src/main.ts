import { generateInitialGraph, GraphData, Technology, Dependency } from './initialData';

// --- State and Interfaces ---
export interface Snapshot {
  id: string;
  name: string;
  timestamp: string;
  data: GraphData;
}

let graphData: GraphData = {
  categories: [],
  technologies: [],
  dependencies: []
};
let snapshots: Snapshot[] = [];

let transform = { x: 0, y: 0, scale: 1 };
const IS_DRAG_NODE = 1, IS_DRAG_WORKSPACE = 2, IS_DRAG_PIN = 3;
let dragState = 0;
let dragNodeInfo: { id: string; startX: number; startY: number; pointerStartX: number; pointerStartY: number } | null = null;
let dragWorkspaceInfo: { startX: number; startY: number; pointerStartX: number; pointerStartY: number } | null = null;
let dragPinInfo: { sourceId: string; startX: number; startY: number } | null = null;

// --- DOM Elements ---
const workspaceContainer = document.getElementById('workspace-container')!;
const workspace = document.getElementById('workspace')!;
const nodesContainer = document.getElementById('nodes-container')!;
const svgContainer = document.getElementById('connections-svg') as object as SVGSVGElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const focusInput = document.getElementById('focus-input') as HTMLInputElement;
const focusPrereqsOnly = document.getElementById('focus-prereqs-only') as HTMLInputElement;
const viewModeToggle = document.getElementById('view-mode-toggle') as HTMLInputElement;
const datalist = document.getElementById('tech-list')!;
const exportBtn = document.getElementById('export-btn')!;
const importBtn = document.getElementById('import-btn') as HTMLInputElement;

// Snapshot Elements
const snapshotDropdown = document.getElementById('snapshot-dropdown') as HTMLSelectElement;
const restoreBtn = document.getElementById('restore-btn')!;
const deleteSnapBtn = document.getElementById('delete-snapshot-btn')!;
const modal = document.getElementById('delete-modal')!;
const modalCancel = document.getElementById('modal-cancel')!;
const modalConfirm = document.getElementById('modal-confirm')!;

// Stats Elements
const statTechCount = document.getElementById('stat-tech-count')!;
const statDepCount = document.getElementById('stat-dep-count')!;
const focusStats = document.getElementById('focus-stats')!;
const statFocusName = document.getElementById('stat-focus-name')!;
const statFocusReq = document.getElementById('stat-focus-req')!;

// Maps for quick lookups
const nodeElements = new Map<string, HTMLDivElement>();
const connectionPaths = new Map<string, SVGPathElement>();

// Define Category Colors map
const catColors = [
  'var(--cat-1)', 'var(--cat-2)', 'var(--cat-3)', 'var(--cat-4)',
  'var(--cat-5)', 'var(--cat-6)', 'var(--cat-7)', 'var(--cat-8)',
  'var(--cat-9)', 'var(--cat-10)', 'var(--cat-11)', 'var(--cat-12)',
  'var(--cat-13)', 'var(--cat-14)', 'var(--cat-15)', 'var(--cat-16)'
];
const getCategoryColorIndex = (catId: string) => {
  const index = graphData.categories.findIndex(c => c.id === catId);
  return index !== -1 ? index % catColors.length : -1;
};

const getCategoryColor = (catId: string) => {
  const index = getCategoryColorIndex(catId);
  return index !== -1 ? catColors[index] : 'var(--text-muted)';
};

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

// --- Initialization ---
function init() {
  loadSnapshots();

  // Try loading active working state from localStorage
  const activeSaved = localStorage.getItem('selesta_techtree_v2');
  if (activeSaved) {
    try {
      graphData = deserializeData(JSON.parse(activeSaved));
    } catch {
      graphData = JSON.parse(JSON.stringify(snapshots[snapshots.length - 1].data)); // Fallback
    }
  } else {
    graphData = JSON.parse(JSON.stringify(snapshots[snapshots.length - 1].data));
  }

  // Setup SVG Defs for arrowheads
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  
  const createMarker = (id: string, color: string) => {
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker.setAttribute('id', id);
    marker.setAttribute('markerWidth', '10');
    marker.setAttribute('markerHeight', '7');
    marker.setAttribute('refX', '9');
    marker.setAttribute('refY', '3.5');
    marker.setAttribute('orient', 'auto');
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
    polygon.setAttribute('fill', color);
    marker.appendChild(polygon);
    return marker;
  };

  defs.appendChild(createMarker('arrowhead', 'var(--connection-color)'));
  catColors.forEach((color, idx) => {
    defs.appendChild(createMarker(`arrowhead-${idx}`, color));
  });

  svgContainer.appendChild(defs);

  renderAll();

  // Initial centering
  transform.x = window.innerWidth / 2;
  transform.y = 100;
  transform.scale = 0.6;
  applyTransform();

  setupEvents();
}

function loadSnapshots() {
  const saved = localStorage.getItem('selesta_snapshots_v2');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      snapshots = parsed.map((s: any) => ({
          ...s,
          data: deserializeData(s.data)
      }));
    } catch {
      snapshots = [];
    }
  }
  
  if (snapshots.length === 0) {
    snapshots.push({
      id: 'default_base',
      name: 'System Default',
      timestamp: new Date().toISOString(),
      data: generateInitialGraph()
    });
    saveSnapshots();
  }
  
  // Resolve any initial state overlapping globally
  resolveAllCollisions(snapshots[0].data);
  
  updateSnapshotDropdown();
}

function saveSnapshots() {
  const serializableSnapshots = snapshots.map(s => ({
      ...s,
      data: serializeData(s.data)
  }));
  localStorage.setItem('selesta_snapshots_v2', JSON.stringify(serializableSnapshots));
}

function updateSnapshotDropdown() {
  snapshotDropdown.innerHTML = '';
  // Show latest first
  [...snapshots].reverse().forEach(snap => {
    const opt = document.createElement('option');
    opt.value = snap.id;
    opt.textContent = snap.name;
    snapshotDropdown.appendChild(opt);
  });
}

function saveData() {
  localStorage.setItem('selesta_techtree_v2', JSON.stringify(serializeData(graphData)));
}

function resolveAllCollisions(dataRef: GraphData) {
  let overlapFound = true;
  let iters = 0;
  // Maximum runs to avoid freezing
  while (overlapFound && iters < 20) {
    overlapFound = false;
    for (let i = 0; i < dataRef.technologies.length; i++) {
        for (let j = i + 1; j < dataRef.technologies.length; j++) {
            const t1 = dataRef.technologies[i];
            const t2 = dataRef.technologies[j];
            const dx = t1.x - t2.x;
            const dy = t1.y - t2.y;
            // standard size of card roughly 240x80
            if (Math.abs(dx) < 250 && Math.abs(dy) < 90) {
                // push t2 slightly down and right
                t2.x += 260; 
                t2.y += 120;
                overlapFound = true;
            }
        }
    }
    iters++;
  }
}

function updateGlobalStats() {
  statTechCount.textContent = graphData.technologies.length.toString();
  statDepCount.textContent = graphData.dependencies.length.toString();
}

// --- Rendering ---
function renderAll() {
  updateGlobalStats();
  nodesContainer.innerHTML = '';
  datalist.innerHTML = '';
  const paths = svgContainer.querySelectorAll('.connection-path');
  paths.forEach(p => p.remove());
  nodeElements.clear();
  connectionPaths.clear();

  graphData.technologies.forEach(tech => {
    createNodeElement(tech);
    const opt = document.createElement('option');
    opt.value = tech.name;
    datalist.appendChild(opt);
  });

  graphData.dependencies.forEach(dep => {
    createConnectionElement(dep);
  });
  
  updateAllConnections();
}

function createNodeElement(tech: Technology) {
  const node = document.createElement('div');
  node.className = 'node';
  node.dataset.id = tech.id;
  
  const header = document.createElement('div');
  header.className = 'node-header';
  const cat = graphData.categories.find(c => c.id === tech.category);
  header.style.backgroundColor = getCategoryColor(tech.category);
  
  const titleSpan = document.createElement('span');
  titleSpan.textContent = tech.name;
  
  const removeBtn = document.createElement('button');
  removeBtn.className = 'node-remove';
  removeBtn.textContent = '✕';
  removeBtn.title = 'Remove Node';
  removeBtn.onclick = (e) => {
    e.stopPropagation();
    removeNode(tech.id);
  };
  
  header.appendChild(titleSpan);
  header.appendChild(removeBtn);

  const title = document.createElement('div');
  title.className = 'node-title';
  title.textContent = cat ? cat.name : tech.category;

  // Pins
  const pinIn = document.createElement('div');
  pinIn.className = 'pin pin-in';
  pinIn.dataset.type = 'in';
  
  const pinOut = document.createElement('div');
  pinOut.className = 'pin pin-out';
  pinOut.dataset.type = 'out';

  node.appendChild(pinIn);
  node.appendChild(header);
  node.appendChild(title);
  node.appendChild(pinOut);

  nodesContainer.appendChild(node);
  nodeElements.set(tech.id, node);

  updateNodePosition(tech.id, tech.x, tech.y);
}

function updateNodePosition(id: string, x: number, y: number) {
  const node = nodeElements.get(id);
  if (node) {
    node.style.transform = `translate(${x}px, ${y}px)`;
  }
}

function createConnectionElement(dep: Dependency) {
  const id = `${dep.sourceId}-${dep.targetId}`;
  if (connectionPaths.has(id)) return;

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('class', 'connection-path');
  
  const sourceTech = graphData.technologies.find(t => t.id === dep.sourceId);
  let colorVar = 'var(--connection-color)';
  let markerId = 'arrowhead';
  
  if (sourceTech) {
    const colorIndex = getCategoryColorIndex(sourceTech.category);
    if (colorIndex !== -1) {
      colorVar = catColors[colorIndex];
      markerId = `arrowhead-${colorIndex}`;
    }
  }

  path.style.setProperty('--line-color', colorVar);
  path.setAttribute('marker-end', `url(#${markerId})`);
  
  path.dataset.source = dep.sourceId;
  path.dataset.target = dep.targetId;

  // Delete on right click
  path.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    removeConnection(dep.sourceId, dep.targetId);
  });

  svgContainer.appendChild(path);
  connectionPaths.set(id, path);
}

function updateAllConnections() {
  graphData.dependencies.forEach(dep => updateConnectionPath(dep.sourceId, dep.targetId));
}

function updateConnectionPath(sourceId: string, targetId: string) {
  const pathId = `${sourceId}-${targetId}`;
  const path = connectionPaths.get(pathId);
  if (!path) return;

  const sourceTech = graphData.technologies.find(t => t.id === sourceId);
  const targetTech = graphData.technologies.find(t => t.id === targetId);

  if (!sourceTech || !targetTech) return;

  const startX = sourceTech.x + 120;
  const startY = sourceTech.y + (nodeElements.get(sourceId)?.offsetHeight || 80); 
  
  const endX = targetTech.x + 120;
  const endY = targetTech.y;

  drawBezierPath(path, startX, startY, endX, endY);
}

function drawBezierPath(path: SVGPathElement, x1: number, y1: number, x2: number, y2: number) {
  const curveWeight = Math.abs(y2 - y1) * 0.5 + Math.abs(x2 - x1) * 0.2;
  const cp1x = x1;
  const cp1y = y1 + curveWeight;
  const cp2x = x2;
  const cp2y = y2 - curveWeight;

  path.setAttribute('d', `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`);
}

// --- Highlighting Logic ---
function highlightChain(startSource: string, startTarget: string) {
  document.body.classList.add('is-highlighting');
  document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));

  const nodes = new Set<string>();
  const paths = new Set<string>();
  
  nodes.add(startSource);
  nodes.add(startTarget);
  paths.add(`${startSource}-${startTarget}`);

  // BFS backwards
  let queue = [startSource];
  const visited = new Set<string>(queue);
  
  while(queue.length > 0) {
      const cur = queue.shift()!;
      graphData.dependencies.forEach(d => {
          if (d.targetId === cur) {
              nodes.add(d.sourceId);
              paths.add(`${d.sourceId}-${d.targetId}`);
              if (!visited.has(d.sourceId)) {
                  visited.add(d.sourceId);
                  queue.push(d.sourceId);
              }
          }
      });
  }

  // BFS forwards
  queue = [startTarget];
  const visitedForwards = new Set<string>(queue);
  while(queue.length > 0) {
      const cur = queue.shift()!;
      graphData.dependencies.forEach(d => {
          if (d.sourceId === cur) {
              nodes.add(d.targetId);
              paths.add(`${d.sourceId}-${d.targetId}`);
              if (!visitedForwards.has(d.targetId)) {
                  visitedForwards.add(d.targetId);
                  queue.push(d.targetId);
              }
          }
      });
  }

  nodes.forEach(nId => {
      const el = nodeElements.get(nId);
      if (el) el.classList.add('highlighted');
  });

  paths.forEach(pId => {
      const el = connectionPaths.get(pId);
      if (el) el.classList.add('highlighted');
  });
}

// --- Interactions ---

let currentDrawingPath: SVGPathElement | null = null;
let snapToDelete: string | null = null;

function setupEvents() {
  workspaceContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.ctrlKey) {
      // Zoom
      const zoomIntensity = 0.1;
      const wheel = e.deltaY < 0 ? 1 : -1;
      let zoomVal = Math.exp(wheel * zoomIntensity);

      const rect = workspaceContainer.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      transform.x = mouseX - (mouseX - transform.x) * zoomVal;
      transform.y = mouseY - (mouseY - transform.y) * zoomVal;
      transform.scale *= zoomVal;
      transform.scale = Math.max(0.1, Math.min(transform.scale, 3));
    } else {
      // Pan
      transform.x -= e.deltaX;
      transform.y -= e.deltaY;
    }
    applyTransform();
  }, { passive: false });

  workspaceContainer.addEventListener('pointerdown', (e) => {
    // Middle click anywhere pans workspace
    if (e.button === 1) { 
        e.preventDefault();
        dragState = IS_DRAG_WORKSPACE;
        dragWorkspaceInfo = {
          startX: transform.x,
          startY: transform.y,
          pointerStartX: e.clientX,
          pointerStartY: e.clientY
        };
        workspaceContainer.style.cursor = 'grabbing';
        document.body.classList.add('is-panning'); // Performance Boost
        return;
    }
    
    if (e.button === 0 && !viewModeToggle.checked) { // Left mouse button, disabled in view mode
      const target = e.target as HTMLElement;

      const clickedPath = target.closest('.connection-path') as SVGPathElement;
      if (clickedPath) {
          e.preventDefault();
          const source = clickedPath.dataset.source!;
          const tgt = clickedPath.dataset.target!;
          highlightChain(source, tgt);
          return;
      }

      const isBackground = target.id === 'workspace-container' || 
                           target.id === 'workspace' || 
                           target.id === 'connections-svg';
      if (isBackground) {
          document.body.classList.remove('is-highlighting');
          document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));
      }

      const node = target.closest('.node') as HTMLElement;
      const pinOut = target.closest('.pin-out');
      const pinIn = target.closest('.pin-in');
      const nodeRemove = target.closest('.node-remove');

      if (pinOut) {
        const id = node.dataset.id!;
        const tech = graphData.technologies.find(t => t.id === id);
        if (tech) {
          dragState = IS_DRAG_PIN;
          const nodeH = nodeElements.get(id)?.offsetHeight || 80;
          dragPinInfo = {
            sourceId: id,
            startX: tech.x + 120,
            startY: tech.y + nodeH
          };
          
          currentDrawingPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          currentDrawingPath.setAttribute('class', 'drawing-path');
          svgContainer.appendChild(currentDrawingPath);
        }
        return; 
      }

      if (node && !pinIn && !nodeRemove) {
        const id = node.dataset.id!;
        const tech = graphData.technologies.find(t => t.id === id);
        if (tech) {
          dragState = IS_DRAG_NODE;
          dragNodeInfo = {
            id,
            startX: tech.x,
            startY: tech.y,
            pointerStartX: e.clientX,
            pointerStartY: e.clientY
          };
          nodesContainer.appendChild(node);
        }
      }
    }
  });

  window.addEventListener('pointermove', (e) => {
    if (dragState === IS_DRAG_WORKSPACE && dragWorkspaceInfo) {
      const dx = e.clientX - dragWorkspaceInfo.pointerStartX;
      const dy = e.clientY - dragWorkspaceInfo.pointerStartY;
      transform.x = dragWorkspaceInfo.startX + dx;
      transform.y = dragWorkspaceInfo.startY + dy;
      applyTransform();
    } 
    else if (dragState === IS_DRAG_NODE && dragNodeInfo) {
      const dx = (e.clientX - dragNodeInfo.pointerStartX) / transform.scale;
      const dy = (e.clientY - dragNodeInfo.pointerStartY) / transform.scale;
      
      const idx = graphData.technologies.findIndex(t => t.id === dragNodeInfo!.id);
      if (idx !== -1) {
        const tech = graphData.technologies[idx];
        tech.x = dragNodeInfo.startX + dx;
        tech.y = dragNodeInfo.startY + dy;
        updateNodePosition(tech.id, tech.x, tech.y);
        
        graphData.dependencies.forEach(dep => {
          if (dep.sourceId === tech.id || dep.targetId === tech.id) updateConnectionPath(dep.sourceId, dep.targetId);
        });
      }
    }
    else if (dragState === IS_DRAG_PIN && dragPinInfo && currentDrawingPath) {
      const rect = workspaceContainer.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left - transform.x) / transform.scale;
      const mouseY = (e.clientY - rect.top - transform.y) / transform.scale;
      drawBezierPath(currentDrawingPath, dragPinInfo.startX, dragPinInfo.startY, mouseX, mouseY);
    }
  });

  window.addEventListener('pointerup', (e) => {
    if (dragState === IS_DRAG_PIN && dragPinInfo) {
      const target = e.target as HTMLElement;
      const pinIn = target.closest('.pin-in') || target.closest('.node');
      
      if (pinIn) {
        const targetNode = pinIn.closest('.node') as HTMLElement;
        const targetId = targetNode.dataset.id!;
        
        if (targetId && targetId !== dragPinInfo.sourceId) {
          const exists = graphData.dependencies.some(d => d.sourceId === dragPinInfo!.sourceId && d.targetId === targetId);
          if (!exists) {
            graphData.dependencies.push({ sourceId: dragPinInfo.sourceId, targetId });
            createConnectionElement({ sourceId: dragPinInfo.sourceId, targetId });
            updateConnectionPath(dragPinInfo.sourceId, targetId);
            updateGlobalStats();
            saveData();
          }
        }
      }
      
      if (currentDrawingPath) currentDrawingPath.remove();
      currentDrawingPath = null;
    }

    if (dragState === IS_DRAG_NODE && dragNodeInfo) {
      const idx = graphData.technologies.findIndex(t => t.id === dragNodeInfo!.id);
      if (idx !== -1) {
        const mainTech = graphData.technologies[idx];
        let collision = true;
        let pLimit = 15;
        while (collision && pLimit > 0) {
          collision = false;
          for (let t of graphData.technologies) {
            if (t.id !== mainTech.id) {
              const dx = mainTech.x - t.x;
              const dy = mainTech.y - t.y;
              // If the center of the dropped card is within a small box of another card's center (overlapping > 50%)
              if (Math.abs(dx) < 60 && Math.abs(dy) < 40) {
                mainTech.x += 40;
                mainTech.y += 40;
                collision = true;
                break;
              }
            }
          }
          pLimit--;
        }
        
        // Final update
        updateNodePosition(mainTech.id, mainTech.x, mainTech.y);
        graphData.dependencies.forEach(dep => {
          if (dep.sourceId === mainTech.id || dep.targetId === mainTech.id) {
            updateConnectionPath(dep.sourceId, dep.targetId);
          }
        });
      }
      if (dragState === IS_DRAG_NODE) saveData();
    }
    
    dragState = 0;
    dragNodeInfo = null;
    dragWorkspaceInfo = null;
    dragPinInfo = null;
    
    document.body.classList.remove('is-panning'); // Performance Boost off
    
    // reset cursor if middle mouse clicked
    workspaceContainer.style.cursor = 'grab';
  });

  viewModeToggle.addEventListener('change', () => {
    if (viewModeToggle.checked) {
      document.body.classList.add('view-mode');
    } else {
      document.body.classList.remove('view-mode');
    }
  });

  exportBtn.addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(serializeData(graphData), null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "techtree-export.json");
    dlAnchorElem.click();
    dlAnchorElem.remove();
  });

  importBtn.addEventListener('change', () => {
    const file = importBtn.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = deserializeData(JSON.parse(reader.result as string));
        if (parsed.categories && parsed.technologies) {
          graphData = parsed;
          saveData();
          renderAll();
          
          const d = new Date();
          const p = function(n:number){return n<10?'0'+n:n;};
          const formatted = `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
          
          snapshots.push({
            id: 'snap_' + Date.now(),
            name: `Imported - ${formatted}`,
            timestamp: d.toISOString(),
            data: JSON.parse(JSON.stringify(parsed))
          });
          saveSnapshots();
          updateSnapshotDropdown();

          // Set active to our new imported one seamlessly
          snapshotDropdown.value = snapshots[snapshots.length - 1].id;

        } else {
          alert('Invalid JSON structure.');
        }
      } catch {
        alert('Error parsing JSON.');
      }
    };
    reader.readAsText(file);
    importBtn.value = '';
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      nodeElements.forEach(node => {
        node.classList.remove('searching');
        node.classList.remove('searching-match');
      });
      return;
    }

    nodeElements.forEach((node, id) => {
      const tech = graphData.technologies.find(t => t.id === id);
      if (tech && tech.name.toLowerCase().includes(query)) {
        node.classList.remove('searching');
        node.classList.add('searching-match');
      } else {
        node.classList.remove('searching-match');
        node.classList.add('searching');
      }
    });
  });

  focusPrereqsOnly.addEventListener('change', () => {
    // Re-trigger the focus input function to recalculate graph
    focusInput.dispatchEvent(new Event('input'));
  });

  focusInput.addEventListener('input', () => {
    const query = focusInput.value.toLowerCase().trim();
    if (!query) {
      focusStats.classList.add('hidden');
      nodeElements.forEach(n => {
        n.classList.remove('hidden-unfocused');
        n.classList.remove('focused-match');
      });
      connectionPaths.forEach(p => p.classList.remove('hidden-unfocused'));
      return;
    }

    let exactMatch = graphData.technologies.find(t => t.name.toLowerCase() === query);
    if (!exactMatch) {
      const partials = graphData.technologies.filter(t => t.name.toLowerCase().includes(query));
      if (partials.length > 0) exactMatch = partials[0];
      else {
        focusStats.classList.add('hidden');
        nodeElements.forEach(n => n.classList.remove('focused-match'));
        return; 
      }
    }

    // Update Focus Stats display
    focusStats.classList.remove('hidden');
    statFocusName.textContent = exactMatch.name;
    const directPredecessors = graphData.dependencies.filter(d => d.targetId === exactMatch!.id).length;
    statFocusReq.textContent = directPredecessors.toString();

    const connected = getConnectedNodes(exactMatch.id, focusPrereqsOnly.checked);
    
    nodeElements.forEach((node, id) => {
      // Glow logic
      node.classList.remove('focused-match');
      if (id === exactMatch!.id) node.classList.add('focused-match');

      if (connected.has(id)) node.classList.remove('hidden-unfocused');
      else node.classList.add('hidden-unfocused');
    });

    connectionPaths.forEach((path) => {
      const source = path.dataset.source!;
      const target = path.dataset.target!;
      if (connected.has(source) && connected.has(target)) path.classList.remove('hidden-unfocused');
      else path.classList.add('hidden-unfocused');
    });
  });

  // Snapshot functionality
  restoreBtn.addEventListener('click', () => {
    const snapId = snapshotDropdown.value;
    const snap = snapshots.find(s => s.id === snapId);
    if (snap) {
        graphData = JSON.parse(JSON.stringify(snap.data)); 
        saveData();
        renderAll();
    }
  });

  deleteSnapBtn.addEventListener('click', () => {
    snapToDelete = snapshotDropdown.value;
    if (snapToDelete === 'default_base') {
        alert("Cannot delete the System Default.");
        return;
    }
    modal.classList.remove('hidden');
  });

  modalCancel.addEventListener('click', () => {
    modal.classList.add('hidden');
    snapToDelete = null;
  });

  modalConfirm.addEventListener('click', () => {
    if (snapToDelete) {
        snapshots = snapshots.filter(s => s.id !== snapToDelete);
        saveSnapshots();
        updateSnapshotDropdown();
    }
    modal.classList.add('hidden');
    snapToDelete = null;
  });

}

function getConnectedNodes(rootId: string, prereqsOnly: boolean): Set<string> {
  const connected = new Set<string>();
  connected.add(rootId);
  
  let queue = [rootId];

  // traverse forwards (targets / those who depend ON this tech)
  if (!prereqsOnly) {
    while (queue.length > 0) {
      const cur = queue.shift()!;
      graphData.dependencies.forEach(d => {
        if (d.sourceId === cur && !connected.has(d.targetId)) {
          connected.add(d.targetId);
          queue.push(d.targetId);
        }
      });
    }
  }
  
  // traverse backwards (sources / prerequisites OF this tech)
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

function removeNode(id: string) {
  graphData.technologies = graphData.technologies.filter(t => t.id !== id);
  nodeElements.get(id)?.remove();
  nodeElements.delete(id);

  graphData.dependencies = graphData.dependencies.filter(d => {
    if (d.sourceId === id || d.targetId === id) {
      removeConnectionElement(d.sourceId, d.targetId);
      return false;
    }
    return true;
  });
  updateGlobalStats();
  saveData();
}

function removeConnection(sourceId: string, targetId: string) {
  graphData.dependencies = graphData.dependencies.filter(d => 
    !(d.sourceId === sourceId && d.targetId === targetId)
  );
  removeConnectionElement(sourceId, targetId);
  updateGlobalStats();
  saveData();
}

function removeConnectionElement(sourceId: string, targetId: string) {
  const pathId = `${sourceId}-${targetId}`;
  const path = connectionPaths.get(pathId);
  if (path) {
    path.remove();
    connectionPaths.delete(pathId);
  }
}

function applyTransform() {
  workspace.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`;
}

// Start
init();
