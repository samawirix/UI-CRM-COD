import fs from 'fs';
import path from 'path';

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/text-muted-foreground\/70-foreground/g, 'text-muted-foreground');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory('./src');
console.log('Fix done.');
