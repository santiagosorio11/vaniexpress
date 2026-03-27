import fs from 'fs';
import path from 'path';

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('573000000000')) {
        content = content.replace(/573000000000/g, '573128869088');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir('./src');
console.log('Finished updating WhatsApp numbers.');
