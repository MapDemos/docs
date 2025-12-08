const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Building all presentations...\n');

// Get all workspace directories (excluding node_modules, dist, etc.)
const workspaces = fs.readdirSync(__dirname, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .filter(entry => !['node_modules', 'dist', '.git', '.github', 'public', '.claude'].includes(entry.name))
  .filter(entry => {
    // Check if it has a package.json with slidev
    const pkgPath = path.join(__dirname, entry.name, 'package.json');
    if (!fs.existsSync(pkgPath)) return false;
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    return pkg.scripts && pkg.scripts.build;
  })
  .map(entry => entry.name)
  .sort();

if (workspaces.length === 0) {
  console.log('No presentations found to build');
  process.exit(0);
}

console.log(`Found ${workspaces.length} presentation(s): ${workspaces.join(', ')}\n`);

// Clean dist directory
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  console.log('Cleaning dist directory...');
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir);

// Build each workspace
let successCount = 0;
let failCount = 0;

for (const workspace of workspaces) {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Building: ${workspace}`);
  console.log('='.repeat(50));

  try {
    // Use npm workspace command to build
    execSync(`npm run build -w ${workspace}`, {
      cwd: __dirname,
      stdio: 'inherit'
    });

    console.log(`✓ Successfully built ${workspace}`);
    successCount++;
  } catch (error) {
    console.error(`✗ Failed to build ${workspace}`);
    failCount++;
  }
}

// Build summary
console.log(`\n${'='.repeat(50)}`);
console.log('Build Summary');
console.log('='.repeat(50));
console.log(`✓ Successful: ${successCount}`);
if (failCount > 0) {
  console.log(`✗ Failed: ${failCount}`);
}

console.log(`\nOutput directory: ${distDir}`);
console.log('\nURLs:');
console.log('  Index: /index.html');
workspaces.forEach(workspace => {
  console.log(`  ${workspace}: /${workspace}/`);
});
console.log('\nTo preview locally, run: npm run preview');

// Generate landing page
console.log(`\n${'='.repeat(50)}`);
console.log('Generating landing page...');
console.log('='.repeat(50));

const landingPageHtml = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .container {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      padding: 3rem;
      max-width: 600px;
      width: 100%;
    }

    h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    .subtitle {
      color: #666;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    h2 {
      font-size: 1.5rem;
      color: #444;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    ul {
      list-style: none;
    }

    li {
      margin-bottom: 1rem;
    }

    a {
      display: block;
      padding: 1rem 1.5rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 0.5rem;
      transition: transform 0.2s, box-shadow 0.2s;
      font-weight: 500;
      font-size: 1.1rem;
    }

    a:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    }

    .footer {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #eee;
      color: #999;
      font-size: 0.9rem;
      text-align: center;
    }

    @media (max-width: 640px) {
      .container {
        padding: 2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.25rem;
      }

      a {
        padding: 0.875rem 1.25rem;
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Documentation</h1>

    <h2>Available Presentations</h2>
    <ul>
${workspaces.map(workspace => {
  // Try to get title from workspace package.json
  const pkgPath = path.join(__dirname, workspace, 'package.json');
  let title = workspace;
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    title = pkg.description ? pkg.description.replace(' presentation', '') : workspace;
  } catch (e) {
    // Use workspace name as fallback
    title = workspace.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  return `      <li>
        <a href="/${workspace}/" target="_blank" rel="noopener noreferrer">${title}</a>
      </li>`;
}).join('\n')}
    </ul>

    <div class="footer">
      Last updated: <span id="date"></span>
    </div>
  </div>

  <script>
    document.getElementById('date').textContent = new Date().toLocaleDateString('ja-JP');
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'index.html'), landingPageHtml);
console.log('✓ Generated landing page');

// Exit with error if any builds failed
if (failCount > 0) {
  process.exit(1);
}
