import fs from 'fs';
import path from 'path';

const replacements = {
  'text-primary': 'text-foreground',
  'bg-page': 'bg-background',
  'text-secondary': 'text-muted-foreground',
  'text-muted': 'text-muted-foreground/70',
  'bg-brand': 'bg-primary',
  'text-brand': 'text-primary',
  'border-brand': 'border-primary',
  'ring-brand': 'ring-primary',
  'bg-danger': 'bg-destructive',
  'text-danger': 'text-destructive',
  'border-danger': 'border-destructive',
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      for (const [oldClass, newClass] of Object.entries(replacements)) {
        // Use regex to match whole words to avoid partial replacements
        const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
        content = content.replace(regex, newClass);
      }
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory('./src');
console.log('Replacements done.');
