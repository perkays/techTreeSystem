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
  workerGroups: Record<string, number>;
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

export interface TechnologyJson extends Omit<Technology, 'workerGroups'> {
  prerequisites?: string[];
  workerGroups?: Record<string, number>;
}

export interface GraphJsonData {
  categories?: Category[];
  technologies?: TechnologyJson[];
  dependencies?: Dependency[];
}

const BASE_DATA_FILE = 'tech-tree-data.json';

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function toNumber(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

function resolveTechnologyRef(
  ref: unknown,
  technologyIds: Set<string>,
  technologyNameToId: Map<string, string>
): string | null {
  if (!isNonEmptyString(ref)) {
    return null;
  }

  if (technologyIds.has(ref)) {
    return ref;
  }

  return technologyNameToId.get(ref) ?? null;
}

export function cloneGraphData(data: GraphData): GraphData {
  return {
    categories: data.categories.map((category) => ({ ...category })),
    technologies: data.technologies.map((technology) => ({
      ...technology,
      workerGroups: { ...technology.workerGroups }
    })),
    dependencies: data.dependencies.map((dependency) => ({ ...dependency }))
  };
}

export function normalizeGraphData(parsed: unknown): GraphData {
  const data = (parsed ?? {}) as GraphJsonData;

  const categories = Array.isArray(data.categories)
    ? data.categories
        .filter((category): category is Category => {
          return isNonEmptyString(category?.id) && isNonEmptyString(category?.name);
        })
        .map((category) => ({
          id: category.id,
          name: category.name
        }))
    : [];

  const technologiesJson = Array.isArray(data.technologies)
    ? data.technologies.filter((technology): technology is TechnologyJson => {
        return (
          isNonEmptyString(technology?.id) &&
          isNonEmptyString(technology?.name) &&
          isNonEmptyString(technology?.category)
        );
      })
    : [];

  const technologies = technologiesJson.map((technology) => ({
    id: technology.id,
    name: technology.name,
    category: technology.category,
    x: toNumber(technology.x),
    y: toNumber(technology.y),
    workerGroups: technology.workerGroups ?? {}
  }));

  const technologyIds = new Set(technologies.map((technology) => technology.id));
  const technologyNameToId = new Map(
    technologies.map((technology) => [technology.name, technology.id])
  );

  const dependencyKeys = new Set<string>();
  const dependencies: Dependency[] = [];

  const addDependency = (sourceRef: unknown, targetRef: unknown) => {
    const sourceId = resolveTechnologyRef(sourceRef, technologyIds, technologyNameToId);
    const targetId = resolveTechnologyRef(targetRef, technologyIds, technologyNameToId);

    if (!sourceId || !targetId || sourceId === targetId) {
      return;
    }

    const key = `${sourceId}->${targetId}`;
    if (dependencyKeys.has(key)) {
      return;
    }

    dependencyKeys.add(key);
    dependencies.push({ sourceId, targetId });
  };

  if (Array.isArray(data.dependencies)) {
    data.dependencies.forEach((dependency) => {
      addDependency(dependency?.sourceId, dependency?.targetId);
    });
  }

  technologiesJson.forEach((technology) => {
    if (!Array.isArray(technology.prerequisites)) {
      return;
    }

    technology.prerequisites.forEach((prerequisite) => {
      addDependency(prerequisite, technology.id);
    });
  });

  return {
    categories,
    technologies,
    dependencies
  };
}

export async function loadBaseGraphData(): Promise<GraphData> {
  const response = await fetch(`${import.meta.env.BASE_URL}${BASE_DATA_FILE}`);
  if (!response.ok) {
    throw new Error(`Failed to load base graph data: ${response.status}`);
  }

  const parsed = await response.json();
  return normalizeGraphData(parsed);
}
