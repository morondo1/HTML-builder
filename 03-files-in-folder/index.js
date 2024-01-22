const fs = require('fs/promises');
const path = require('path');

async function readFolderContents() {
  const folderPath = path.join(__dirname, 'secret-folder');

  try {
    const dirents = await fs.readdir(folderPath, { withFileTypes: true });

    for (const dirent of dirents) {
      if (dirent.isFile()) {
        const filePath = path.join(folderPath, dirent.name);

        const stats = await fs.stat(filePath);

        console.log(`${dirent.name} ${stats.size}b`);
      } else if (dirent.isDirectory()) {
        console.error(`${dirent.name} not a file`);
      }
    }
  } catch (err) {
    console.error('reading erro:', err);
  }
}
readFolderContents();