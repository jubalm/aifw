const fs = require('fs');
const path = require('path');
const { createInterface } = require('readline');

function checkExistingFiles() {
  const checkPaths = [
    '.llm',
    '.claude/agents'
  ];
  
  const existing = [];
  for (const checkPath of checkPaths) {
    if (fs.existsSync(checkPath)) {
      existing.push(checkPath);
    }
  }
  
  return existing;
}

async function promptUser(question) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function copyTemplate(sourceDir, destDir) {
  const libDir = path.join(__dirname);
  const fullSourceDir = path.join(libDir, sourceDir);
  
  if (!fs.existsSync(fullSourceDir)) {
    throw new Error(`Template directory not found: ${fullSourceDir}`);
  }
  
  await copyDirectory(fullSourceDir, destDir);
}

async function copyDirectory(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      // Create parent directory if it doesn't exist
      const parentDir = path.dirname(destPath);
      if (!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true });
      }
      
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

module.exports = {
  checkExistingFiles,
  promptUser,
  copyTemplate
};