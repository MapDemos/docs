# Documentation

This repository contains Slidev presentation files for Mapbox demos and tutorials, organized as an NPM workspace with a single shared `node_modules` directory.

## Quick Start

```bash
# Install dependencies
npm install

# Create a new presentation
npm run new my-demo "My Demo Title"

# Start dev server
npm run dev -w my-demo

# Build all presentations (for GitHub Pages)
npm run build

# Build for local preview
npm run build:local

# Preview built site
npm run preview
```

## Project Structure

This project uses **NPM Workspaces** for efficient dependency management:

```
/docs/
├── package.json              (workspace root)
├── node_modules/             (single shared dependencies - no duplication!)
├── build-all.js              (auto-discovers and builds all presentations)
├── new-presentation.js       (automation script)
├── precipitation-search/     (presentation workspace)
│   ├── package.json
│   ├── slides.md
│   └── public/
├── navigation/               (presentation workspace)
│   ├── package.json
│   ├── slides.md
│   └── public/
└── dist/                     (build output)
    ├── index.html            (auto-generated landing page)
    ├── precipitation-search/
    └── navigation/
```

### Key Features

- ✅ **Single `node_modules`** - All presentations share dependencies (no duplication)
- ✅ **Auto-discovery** - Build script automatically finds all presentations
- ✅ **One-command setup** - Create new presentations with `npm run new`
- ✅ **Auto-generated landing page** - Index page updates automatically on build
- ✅ **Standard Slidev builds** - Uses official `--base` flag for proper routing

## Development

### Start dev server for a presentation

```bash
npm run dev -w <presentation-name>
```

Examples:
```bash
npm run dev -w precipitation-search
npm run dev -w navigation
```

This starts Slidev dev server with hot reload (usually on port 3030).

## Building

### Build all presentations

**For GitHub Pages deployment:**
```bash
npm run build
```

**For local preview:**
```bash
npm run build:local
npm run preview
```

The build process:
1. Cleans `dist/` directory
2. Auto-discovers and builds all presentations with correct base paths
3. Generates landing page with links to all presentations

Note: `npm run build` uses `/docs/` base path for GitHub Pages, while `npm run build:local` uses root-relative paths for local preview

### Build specific presentation

```bash
npm run build -w <presentation-name>
```

Example:
```bash
npm run build -w precipitation-search
```

### Preview the build

```bash
npm run preview
```

Then visit the URL shown in terminal. This previews the built static site (all presentations together). For export features, use `npm run dev -w <name>` instead.

### Clean build directory

```bash
npm run clean
```

## Adding a New Presentation

### Automated (Recommended)

```bash
npm run new <name> ["Optional Title"]
```

Example:
```bash
npm run new my-demo "My Demo Title"
```

This automatically:
1. Creates directory structure with `package.json` and starter `slides.md`
2. Adds to workspace configuration
3. Runs `npm install` to link the workspace
4. Landing page will include it on next build

Then edit `<name>/slides.md` with your content!

### Manual (if needed)

1. Create directory: `mkdir my-demo`
2. Create `my-demo/package.json`:
```json
{
  "name": "my-demo",
  "scripts": {
    "dev": "slidev slides.md",
    "build": "slidev build slides.md --base /docs/my-demo/ --out ../dist/my-demo",
    "build:local": "slidev build slides.md --base /my-demo/ --out ../dist/my-demo",
    "export": "slidev export slides.md"
  }
}
```
3. Create `my-demo/slides.md` with your content
4. Add `"my-demo"` to `workspaces` array in root `package.json`
5. Run `npm install`
6. Run `npm run build` (landing page auto-updates)

## GitHub Pages Deployment

Automatically deploys to GitHub Pages on push to `main`.

The workflow:
1. Runs `npm ci` (installs all workspace dependencies)
2. Runs `npm run build` (builds all presentations + landing page)
3. Deploys `dist/` to GitHub Pages

## Accessing Presentations

After deployment:
- **Landing page**: `https://[username].github.io/docs/`
- **Direct access**: `https://[username].github.io/docs/precipitation-search/`

Each presentation link opens in a new tab.

## Exporting Presentations

Export features are only available when running the **development server** for individual presentations. You must export each presentation separately.

### Export to PDF

**Option 1: Via Browser (Recommended)**

1. Start the dev server for the specific presentation:
```bash
npm run dev -w precipitation-search
```

2. Visit the presenter print URL in your browser:
```
http://localhost:3030/presenter/print
```

3. Use browser's print function (Ctrl+P / Cmd+P) and select "Save as PDF"

4. To export another presentation, stop the server (Ctrl+C) and repeat with a different presentation:
```bash
npm run dev -w navigation
```

**Option 2: Via Command Line**

```bash
# Export precipitation-search
npm run export -w precipitation-search

# Export navigation
npm run export -w navigation
```

The exported PDF will be saved in the `<presentation-name>/` directory.

### Export to PowerPoint

Slidev doesn't directly export to PPT format. You can:
1. Export to PDF using the methods above
2. Use a PDF-to-PPT converter tool
3. Or manually copy slides into PowerPoint

### Important Notes

- **Dev server** (`npm run dev -w <name>`) - For editing, previewing, and **exporting** individual presentations
- **Preview server** (`npm run preview`) - For viewing the built site (all presentations together), **no export features**
- Export one presentation at a time by running its dev server
- Built presentations deployed to GitHub Pages do not have export functionality

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run new <name> ["title"]` | Create a new presentation |
| `npm run dev -w <name>` | Start dev server for a presentation |
| `npm run build` | Build all presentations for GitHub Pages |
| `npm run build:local` | Build all presentations for local preview |
| `npm run build -w <name>` | Build specific presentation (GitHub Pages) |
| `npm run build:local -w <name>` | Build specific presentation (local) |
| `npm run preview` | Preview built site locally |
| `npm run clean` | Remove dist directory |
| `npm run export -w <name>` | Export presentation to PDF |

## Tips

- **Adding assets**: Place images/files in `<presentation>/public/` directory
- **Shared dependencies**: All presentations use the same Slidev version from root
- **Landing page**: Auto-generated from workspace list - no manual editing needed
- **Presentation titles**: Taken from `description` field in each presentation's `package.json`
- **NPM Workspaces**: The `-w` flag runs commands in specific workspace directories
