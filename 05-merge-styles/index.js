const fs = require('fs/promises');
const path = require('path');

async function compileStyles() {
  const stylesFolderPath = path.join(__dirname, 'styles');
  const projectDistPath = path.join(__dirname, 'project-dist');

  try {

    const styleFiles = await fs.readdir(stylesFolderPath);

    const validStyleFiles = styleFiles.filter((file) => file.endsWith('.css'));

    const stylesArray = await Promise.all(
      validStyleFiles.map(async (file) => {
        const filePath = path.join(stylesFolderPath, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        return fileContent;
      })
    );

    const bundleFilePath = path.join(projectDistPath, 'bundle.css');
    await fs.writeFile(bundleFilePath, stylesArray.join('\n'));

    console.log('sucsession');
  } catch (err) {
    console.error('error', err);
  }
}
compileStyles();
