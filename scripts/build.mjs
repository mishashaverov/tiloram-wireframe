import { copyFile, mkdir } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
await copyFile('tiloram-wireframe.html', 'dist/index.html');
console.log('Built dist/index.html');
