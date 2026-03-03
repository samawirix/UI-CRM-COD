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
      content = content.replace(/bg-secondary\/10/g, 'bg-secondary');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory('./src');
console.log('Fix 2 done.');
