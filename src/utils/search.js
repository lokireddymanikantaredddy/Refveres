import contentData from '../data/contentData';
import { jsContent } from '../data/programing/javascript';
import { pythonContent } from '../data/programing/python';
import { javaContent } from '../data/programing/java';
import { tsContent } from '../data/programing/typescript';
import { cppContent } from '../data/programing/cpp';
import { csharpContent } from '../data/programing/csharp';
import { goContent } from '../data/programing/go';
import { rustContent } from '../data/programing/rust';
import { kotlinContent } from '../data/programing/kotlin';
import { swiftContent } from '../data/programing/swift';
import { phpContent } from '../data/programing/php';
import { rubyContent } from '../data/programing/ruby';

const programmingContent = {
  javascript: jsContent,
  python: pythonContent,
  java: javaContent,
  typescript: tsContent,
  cpp: cppContent,
  csharp: csharpContent,
  go: goContent,
  rust: rustContent,
  kotlin: kotlinContent,
  swift: swiftContent,
  php: phpContent,
  ruby: rubyContent,
};

export const searchContent = (query) => {
  if (!query) return [];
  query = query.toLowerCase();
  const results = [];

  // Search through cards
  contentData.forEach(category => {
    category.items.forEach(item => {
      if (item.name.toLowerCase().includes(query)) {
        const path = item.name.toLowerCase()
          .replace(/\+/g, 'plus')
          .replace(/#/g, 'sharp')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
        
        results.push({
          type: 'card',
          title: item.name,
          path: `/${path}`,
        });
      }
    });
  });

  // Search through programming content sections
  Object.entries(programmingContent).forEach(([key, content]) => {
    if (content && content.sections) {
      content.sections.forEach(section => {
        // Search in section titles
        if (section.title.toLowerCase().includes(query)) {
          results.push({
            type: 'section',
            title: section.title,
            parentTitle: content.title,
            id: section.id,
            path: `/${key}`,
          });
        }

        // Search in examples if they exist
        if (section.examples) {
          section.examples.forEach(example => {
            if (example.title.toLowerCase().includes(query)) {
              results.push({
                type: 'section',
                title: example.title,
                parentTitle: `${content.title} > ${section.title}`,
                id: section.id,
                path: `/${key}`,
              });
            }
          });
        }
      });
    }
  });

  return results;
}; 