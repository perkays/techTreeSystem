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

// Single source of truth: public/tech-tree-data.json
import techTreeData from '../public/tech-tree-data.json' assert { type: 'json' };
export const initialJsonData = techTreeData;

export type GraphJsonTechnology = Technology & {
  prerequisites: string[];
  [key: string]: unknown;
};

export type GraphJsonData = {
  categories: Category[];
  technologies: GraphJsonTechnology[];
};

export function generateInitialGraph(): GraphData {
  const dependencies: Dependency[] = [];

  const technologies: Technology[] = initialJsonData.technologies.map((t: any) => {
    if (t.prerequisites) {
      t.prerequisites.forEach((prereqName: string) => {
        const sourceTech = initialJsonData.technologies.find((src: any) => src.name === prereqName);
        if (sourceTech) {
          dependencies.push({ sourceId: sourceTech.id, targetId: t.id });
        }
      });
    }

    const { prerequisites, ...rest } = t;
    return rest as Technology;
  });

  return {
    categories: initialJsonData.categories,
    technologies,
    dependencies
  };
}
