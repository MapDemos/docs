const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get presentation name from command line
const presentationName = process.argv[2];
const presentationTitle = process.argv[3];

if (!presentationName) {
  console.error('Usage: npm run new <presentation-name> [title]');
  console.error('Example: npm run new navigation "Navigation Demo"');
  process.exit(1);
}

// Validate name (lowercase, hyphens only)
if (!/^[a-z0-9-]+$/.test(presentationName)) {
  console.error('Error: Presentation name must be lowercase letters, numbers, and hyphens only');
  process.exit(1);
}

const title = presentationTitle || presentationName
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log(`Creating new presentation: ${presentationName}`);
console.log(`Title: ${title}\n`);

// Step 1: Create directory
const presentationDir = path.join(__dirname, presentationName);
if (fs.existsSync(presentationDir)) {
  console.error(`Error: Directory "${presentationName}" already exists`);
  process.exit(1);
}

fs.mkdirSync(presentationDir);
fs.mkdirSync(path.join(presentationDir, 'public'));
console.log(`✓ Created directory: ${presentationName}/`);

// Step 2: Create package.json
const packageJson = {
  name: presentationName,
  version: '1.0.0',
  description: `${title} presentation`,
  scripts: {
    dev: 'slidev slides.md',
    build: `slidev build slides.md --base /docs/${presentationName}/ --out ../dist/${presentationName}`,
    export: 'slidev export slides.md'
  }
};

fs.writeFileSync(
  path.join(presentationDir, 'package.json'),
  JSON.stringify(packageJson, null, 2) + '\n'
);
console.log(`✓ Created package.json`);

// Step 3: Create slides.md
const slidesContent = `---
theme: default
layout: cover
class: text-center
---

# ${title}

Presentation subtitle here

---

# Introduction

Add your content here

- Point 1
- Point 2
- Point 3

---

# Next Slide

More content...
`;

fs.writeFileSync(path.join(presentationDir, 'slides.md'), slidesContent);
console.log(`✓ Created slides.md`);

// Step 4: Update root package.json
const rootPackageJsonPath = path.join(__dirname, 'package.json');
const rootPackageJson = JSON.parse(fs.readFileSync(rootPackageJsonPath, 'utf-8'));

if (!rootPackageJson.workspaces.includes(presentationName)) {
  rootPackageJson.workspaces.push(presentationName);
  rootPackageJson.workspaces.sort();
  fs.writeFileSync(
    rootPackageJsonPath,
    JSON.stringify(rootPackageJson, null, 2) + '\n'
  );
  console.log(`✓ Added to workspaces in package.json`);
}

// Step 5: Install to link workspace
console.log('\nLinking workspace...');
try {
  execSync('npm install', { cwd: __dirname, stdio: 'inherit' });
  console.log('✓ Workspace linked');
} catch (error) {
  console.error('Warning: Failed to link workspace. Run "npm install" manually.');
}

// Landing page is auto-generated during build
console.log('✓ Landing page will be generated on next build');

// Success message
console.log(`
${'='.repeat(50)}
✨ Presentation created successfully!
${'='.repeat(50)}

Next steps:
  1. Edit content: ${presentationName}/slides.md
  2. Add assets: ${presentationName}/public/
  3. Start dev server: npm run dev -w ${presentationName}
  4. Build: npm run build
  5. Preview: npm run preview

Your presentation will be available at:
  Development: http://localhost:3030/${presentationName}
  Production: /${presentationName}/
`);
