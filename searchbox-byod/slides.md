---
theme: default
class: text-center
background: '#000000'
highlighter: shiki
lineNumbers: false
info: |
  ## SearchBox API BYOD Proposal
  Bring Your Own Data (BYOD) implementation strategy via poi_category
drawings:
  persist: false
transition: slide-left
title: SearchBox API BYOD Proposal
mdc: true
css: unocss
---

<!-- Global Styles mimicking navigation-gljs style -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Noto+Sans+JP:wght@400;500;700&display=swap');

:root {
  --primary-blue: #2563eb;
  --primary-dark: #1e3a8a;
  --accent-teal: #0d9488;
  --bg-soft: #f8fafc;
  --text-main: #1e293b;
  --text-sub: #64748b;
}

body {
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  color: var(--text-main);
}

h1, h2, h3 {
  font-family: 'Inter', 'Noto Sans JP', sans-serif !important;
  letter-spacing: -0.02em;
}

.biz-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-teal));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<!-- Title Slide -->
<div class="h-full flex flex-col justify-center items-center p-12 relative overflow-hidden text-center">
  <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-teal-500"></div>

  <h1 class="text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
    SearchBox API<br>
    <span class="text-gradient">BYOD Implementation</span>
  </h1>

  <p class="text-xl text-white max-w-2xl mx-auto leading-relaxed mb-12">
    Leveraging the Category Framework for<br>Proprietary Data Ingestion and Search
  </p>
</div>

<div class="absolute bottom-22 left-15 z-50">
  <span class="text-sm" style="color: white;">January 15, 2026</span>
</div>

<div class="absolute bottom-8 left-8 flex items-center gap-4 z-50">
  <img src="/assets/images/mapbox-black.png" class="w-32 opacity-90" />
  <span class="text-sm" style="color: white;">|　　APJ</span>
</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-6 right-8 w-24 opacity-80 z-50" />

<div class="mb-10">
  <h1 class="text-3xl text-slate-800 font-bold mb-2">Proposal Overview</h1>
  <div class="h-1 w-20 bg-blue-500 rounded-full"></div>
</div>

<div class="grid grid-cols-1 gap-2 text-[13px] leading-tight">

<div class="biz-card p-3 border-l-4 border-l-blue-500">
  <h3 class="font-bold text-slate-800 mb-0.5 flex items-center gap-2">
    <div class="i-carbon-data-base text-blue-500"></div> BYOD Implementation
  </h3>
  <ul class="list-disc ml-5 space-y-0.5 text-slate-600">
    <li>Leverage existing <strong>poi_category</strong> for native filtering</li>
    <li>Assign unique Canonical IDs (e.g., <code class="bg-slate-50 px-1 text-[11px]">auPay>cafe>ponta_points</code>) to customer datasets</li>
    <li>Maintains high performance using existing category indexing</li>
    <li><strong>Engineering Inquiry:</strong> Can Canonical IDs be returned conditionally for authorized proprietary tokens?</li>
  </ul>
</div>

<div class="biz-card p-3 border-l-4 border-l-teal-500">
  <h3 class="font-bold text-slate-800 mb-0.5 flex items-center gap-2">
    <div class="i-carbon-list text-teal-500"></div> Category Management
  </h3>
  <ul class="list-disc ml-5 space-y-0.5 text-slate-600">
    <li>Utilize <code class="bg-slate-50 px-1 text-[11px]">/search/v1/list/category</code> for discovery</li>
    <li><strong>Engineering Inquiry:</strong> Can permission-based scoping be implemented for authorized proprietary tokens?</li>
  </ul>
</div>

<div class="biz-card p-3 border-l-4 border-l-indigo-500">
  <h3 class="font-bold text-slate-800 mb-0.5 flex items-center gap-2">
    <div class="i-carbon-locked text-indigo-500"></div> Secure Metadata
  </h3>
  <ul class="list-disc ml-5 space-y-0.5 text-slate-600">
    <li>Store proprietary data in <code class="bg-slate-50 px-1 text-[11px]">metadata</code> object</li>
    <li><strong>Engineering Inquiry:</strong> Can metadata be returned conditionally for authorized proprietary tokens?</li>
  </ul>
</div>

</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-6 right-8 w-24 opacity-80 z-50" />

<div class="mb-6">
  <h1 class="text-3xl text-slate-800 font-bold mb-2">System Overview</h1>
  <div class="h-1 w-20 bg-blue-500 rounded-full"></div>
</div>

<div class="flex flex-col transform scale-[0.49] origin-top-left w-[200%] mt-0 gap-4">

<div class="w-full border border-slate-300 bg-white/50 rounded-xl p-2">
<div class="flex justify-between items-center mb-1">
  <h3 class="text-2xl font-bold text-slate-700">1. Data Ingestion</h3>
  <span class="text-sm px-2 py-1 bg-slate-100 text-slate-600 rounded-md font-medium border border-slate-200">Daily Batch Job?</span>
</div>
```mermaid
flowchart LR
    Data[("Proprietary Data<br/>(Custom Fields)")] -->|Processing| Pipe[Ingestion Pipeline]
    
    Index["Global Index<br/>(Category ID)"] --- Meta[("Metadata Storage<br/>(JSON String)")]
    
    Pipe -->|Index| Index
    Pipe -->|Store| Meta
    
    style Data fill:#eff6ff,stroke:#2563eb,stroke-width:2px
    style Index fill:#f0fdf4,stroke:#16a34a,stroke-width:1px
    style Meta fill:#fef3c7,stroke:#d97706,stroke-width:2px,stroke-dasharray: 5 5
    style Pipe fill:#ffffff,stroke:#94a3b8,stroke-dasharray: 5 5
```
</div>

<div class="ml-20 -my-6 text-slate-500 relative z-10">
  <div class="i-carbon-arrow-down text-3xl"></div>
</div>

<div class="w-full border border-slate-300 bg-white/50 rounded-xl p-4">
<h3 class="text-2xl font-bold text-slate-700 mb-2">2. Interactive Search</h3>
```mermaid
flowchart LR
    Client1[Client] -->|"/suggest?category=auPay>cafe>ponta_points"| API1[API]
    API1 -->|Query| Index2[("Global<br/>Index")]
    Index2 -.->|mapbox_id| Client1
    
    style Index2 fill:#f0fdf4,stroke:#16a34a,stroke-width:2px
    style API1 fill:#f5f3ff,stroke:#7c3aed,stroke-width:2px
```
</div>

<div class="ml-20 -my-6 text-slate-500 relative z-10">
  <div class="i-carbon-arrow-down text-3xl"></div>
</div>

<div class="w-full border border-slate-300 bg-white/50 rounded-xl p-4">
<h3 class="text-2xl font-bold text-slate-700 mb-2">3. Secure Retrieval</h3>
```mermaid
flowchart LR
    Client2[Client] -->|"/retrieve"| API2[API]
    API2 --> Auth{Valid Token?}
    Auth -->|OK| Meta[("Full Data<br/>(w/ Metadata)")]
    Auth -->|Fail| Basic[("Public Data<br/>(Stripped)")]
    
    style API2 fill:#f5f3ff,stroke:#7c3aed,stroke-width:2px
    style Auth fill:#fff7ed,stroke:#ea580c,stroke-width:2px
    style Meta fill:#fef3c7,stroke:#d97706,stroke-width:2px,stroke-dasharray: 5 5
```
</div>

</div>
