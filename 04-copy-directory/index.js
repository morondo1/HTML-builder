const fs = require('fs/promises');
const path = require('path');

async function copyDirectoryContents() {
  const originalFolderPath = path.join(__dirname, 'files');
  const copyFolderPath = path.join(__dirname, 'files-copy');
  try {
    await fs.mkdir(copyFolderPath, { recursive: true });

    const originalFiles = await fs.readdir(originalFolderPath);

    for (const file of originalFiles) {
      const originalFilePath = path.join(originalFolderPath, file);
      const copyFilePath = path.join(copyFolderPath, file);
      const fileContent = await fs.readFile(originalFilePath);
      await fs.writeFile(copyFilePath, fileContent);
    }
    console.log('files copie');
  } catch (err) {
    console.error('wrror copying', err);
  }
}
copyDirectoryContents();
