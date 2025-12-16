---
theme: default
class: text-center
background: '#000000'
highlighter: shiki
lineNumbers: false
info: |
  ## Turn-by-Turn Navigation Demo
  Mapbox GL JSによるブラウザベースのナビゲーション
drawings:
  persist: false
transition: slide-left
title: Turn-by-Turn Navigation Demo
mdc: true
css: unocss
---

<!-- Global Styles for the Business Theme -->
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

/* Business Card Style */
.biz-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.biz-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-teal));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slidev-layout {
  background-color: white;
  background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
  background-size: 40px 40px;
  height: auto !important;
  overflow: visible !important;
}
</style>

<!-- Title Slide -->
<div class="h-full flex flex-col justify-center items-center p-12 relative overflow-hidden text-center">
  
<div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-teal-500"></div>



<h1 class="text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
Turn-by-Turn<br>
<span class="text-gradient">Navigation Demo</span>
</h1>

<p class="text-xl text-white max-w-2xl mx-auto leading-relaxed mb-12">
Mapbox GL JSを活用した、<br>
ブラウザベースのナビゲーション体験
</p>

</div>

<div class="absolute bottom-22 left-15 z-50">
<span class="text-sm" style="color: white;">2025年12月11日</span>
</div>

<div class="absolute bottom-8 left-8 flex items-center gap-4 z-50">
<img src="/assets/images/mapbox-black.png" class="w-32 opacity-90" />
<span class="text-sm" style="color: white;">|　　マップボックス・ジャパン合同会社</span>
</div>

<!-- Decorative blobs -->
<div class="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-100 rounded-full mix-blend-screen filter blur-3xl opacity-50 z-[-1]"></div>
<div class="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-teal-100 rounded-full mix-blend-screen filter blur-3xl opacity-50 z-[-1]"></div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-6 right-8 w-24 opacity-80 z-50" />

<div class="mb-10">
<h1 class="text-3xl text-slate-800 font-bold mb-2">概要</h1>
<div class="h-1 w-20 bg-blue-500 rounded-full"></div>
</div>

<div class="grid grid-cols-12 gap-8 h-[400px]">

<!-- Main Description Panel -->
<div class="col-span-7 bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-center">
<h2 class="text-2xl text-slate-800 font-bold mb-4">
ブラウザで完結する<br>本格ナビゲーション
</h2>
<p class="text-slate-600 leading-relaxed text-base mb-6">
<strong class="text-blue-600">Mapbox GL JS</strong> と <strong class="text-blue-600">Directions API</strong> を組み合わせることで、専用アプリ（Native SDK）を開発することなく、Webブラウザ上だけで高品質なターン・バイ・ターンナビゲーションを実現します。
</p>
    
<div class="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm text-slate-600 font-medium">
<span class="w-2 h-2 rounded-full bg-green-500"></span>
アプリインストール不要
</div>
</div>

<!-- Key Benefits -->
<div class="col-span-5 flex flex-col gap-4">
    
<div class="biz-card p-5 flex items-start gap-4">
<div class="p-3 bg-blue-50 rounded-xl text-blue-600">
<div class="i-carbon-movement text-xl"></div>
</div>
<div>
<h3 class="text-base font-bold text-slate-800 mb-1">スムーズな追従</h3>
<div class="text-xs text-slate-500 leading-relaxed">GPSの位置情報を補間し、カクつきのない滑らかな移動アニメーションを実現</div>
</div>
</div>

<div class="biz-card p-5 flex items-start gap-4">
<div class="p-3 bg-teal-50 rounded-xl text-teal-600">
<div class="i-carbon-microphone text-xl"></div>
</div>
<div>
<h3 class="text-base font-bold text-slate-800 mb-1">音声案内</h3>
<div class="text-xs text-slate-500 leading-relaxed">Web標準技術を使用した、自然な日本語でのルート案内</div>
</div>
</div>

<div class="biz-card p-5 flex items-start gap-4">
<div class="p-3 bg-indigo-50 rounded-xl text-indigo-600">
<div class="i-carbon-direction-loop-right text-xl"></div>
</div>
<div>
<h3 class="text-base font-bold text-slate-800 mb-1">自動リルート</h3>
<div class="text-xs text-slate-500 leading-relaxed">道を外れた場合、即座に新しいルートを自動計算</div>
</div>
</div>

</div>

</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-6 right-8 w-24 opacity-80 z-50" />

<div class="mb-10">
<h1 class="text-3xl text-slate-800 font-bold mb-2">システム構成</h1>
<div class="h-1 w-20 bg-blue-500 rounded-full"></div>
</div>

<div class="grid grid-cols-2 gap-5">

<!-- Mapbox GL JS -->
<div class="biz-card p-5 border-l-4 border-l-blue-500">
<div class="flex justify-between items-center mb-3">
<h3 class="text-lg font-bold text-slate-800">Mapbox GL JS</h3>
<span class="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded">描画</span>
</div>
<p class="text-sm text-slate-500 mb-4">Webブラウザ上での地図表示エンジン</p>
<ul class="space-y-2">
<li class="flex items-center gap-2 text-sm text-slate-700"><div class="i-carbon-checkmark-filled text-blue-500"></div> 立体的な3D地図表現</li>
<li class="flex items-center gap-2 text-sm text-slate-700"><div class="i-carbon-checkmark-filled text-blue-500"></div> 自車位置へのカメラ追従</li>
</ul>
</div>

<!-- Directions API -->
<div class="biz-card p-5 border-l-4 border-l-teal-500">
<div class="flex justify-between items-center mb-3">
<h3 class="text-lg font-bold text-slate-800">Directions API</h3>
<span class="px-2 py-1 bg-teal-50 text-teal-600 text-xs font-bold rounded">経路</span>
</div>
<p class="text-sm text-slate-500 mb-4">最適なルート計算と案内データ</p>
<ul class="space-y-2">
<li class="flex items-center gap-2 text-sm text-slate-700"><div class="i-carbon-checkmark-filled text-teal-500"></div> リアルタイム渋滞考慮</li>
<li class="flex items-center gap-2 text-sm text-slate-700"><div class="i-carbon-checkmark-filled text-teal-500"></div> 交差点ごとの案内テキスト</li>
</ul>
</div>

<!-- Map Matching API -->
<div class="biz-card p-5 border-l-4 border-l-indigo-500">
<div class="flex justify-between items-center mb-3">
<h3 class="text-lg font-bold text-slate-800">Map Matching API</h3>
<span class="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded">補正</span>
</div>
<p class="text-sm text-slate-500 mb-4">GPS精度の補正と判定</p>
<ul class="space-y-2">
<li class="flex items-center gap-2 text-sm text-slate-700"><div class="i-carbon-checkmark-filled text-indigo-500"></div> ノイズの除去</li>
<li class="flex items-center gap-2 text-sm text-slate-700"><div class="i-carbon-checkmark-filled text-indigo-500"></div> 道路形状への位置合わせ</li>
</ul>
</div>

<!-- Custom Logic -->
<div class="biz-card p-5 border-l-4 border-l-slate-500 bg-slate-50 border-dashed">
<div class="flex justify-between items-center mb-3">
<h3 class="text-lg font-bold text-slate-800">Custom Logic</h3>
<span class="px-2 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded">実装</span>
</div>
<p class="text-sm text-slate-500 mb-4">クライアントサイド制御</p>
<ul class="space-y-2">
<li class="flex items-center gap-2 text-sm text-slate-700"><div class="i-carbon-code text-slate-500"></div> 位置情報の補間処理</li>
<li class="flex items-center gap-2 text-sm text-slate-700"><div class="i-carbon-code text-slate-500"></div> ナビゲーション状態管理</li>
</ul>
</div>

</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-6 right-8 w-24 opacity-80 z-50" />

<div class="mb-10">
<h1 class="text-3xl text-slate-800 font-bold mb-2">主な機能</h1>
<div class="h-1 w-20 bg-blue-500 rounded-full"></div>
</div>

<div class="grid grid-cols-2 gap-8">

<!-- Feature 1 -->
<div class="col-span-1">
<div class="flex items-center gap-3 mb-4">
<div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">01</div>
<h3 class="text-xl font-bold text-slate-800">リアルタイムナビゲーション</h3>
</div>
<div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-32">
<div class="flex gap-2 mb-3">
<span class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">アニメーション</span>
<span class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">カメラ制御</span>
</div>
<p class="text-sm text-slate-500 leading-relaxed">
ネイティブアプリのような滑らかなマーカー移動と、進行方向に合わせた地図回転をブラウザで実現します。
</p>
</div>
</div>

<!-- Feature 2 -->
<div class="col-span-1">
<div class="flex items-center gap-3 mb-4">
<div class="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-sm">02</div>
<h3 class="text-xl font-bold text-slate-800">シミュレーションモード</h3>
</div>
<div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-32">
<div class="flex gap-2 mb-3">
<span class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">テスト機能</span>
</div>
<p class="text-sm text-slate-500 leading-relaxed">
現地に行かなくても、デスク上でルート走行のテストが可能。開発効率とQA品質を向上させます。
</p>
</div>
</div>

<!-- Feature 3 -->
<div class="col-span-1">
<div class="flex items-center gap-3 mb-4">
<div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">03</div>
<h3 class="text-xl font-bold text-slate-800">高度な位置補正</h3>
</div>
<div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-32">
<div class="flex gap-2 mb-3">
<span class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">アルゴリズム</span>
</div>
<p class="text-sm text-slate-500 leading-relaxed">
GPS信号が不安定な場合でも、道路ネットワークに合わせて位置を補正し、正確な案内を継続します。
</p>
</div>
</div>

<!-- Feature 4 -->
<div class="col-span-1">
<div class="flex items-center gap-3 mb-4">
<div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">04</div>
<h3 class="text-xl font-bold text-slate-800">マルチプロファイル</h3>
</div>
<div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-32">
<div class="flex justify-around items-center h-full">
<div class="text-center">
<div class="i-carbon-car text-2xl text-slate-400 mb-1"></div>
<div class="text-xs text-slate-500">自動車</div>
</div>
<div class="w-px h-8 bg-slate-100"></div>
<div class="text-center">
<div class="i-carbon-pedestrian text-2xl text-slate-400 mb-1"></div>
<div class="text-xs text-slate-500">徒歩</div>
</div>
<div class="w-px h-8 bg-slate-100"></div>
<div class="text-center">
<div class="i-carbon-bicycle text-2xl text-slate-400 mb-1"></div>
<div class="text-xs text-slate-500">自転車</div>
</div>
</div>
</div>
</div>

</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-6 right-8 w-24 opacity-80 z-50" />

<div class="mb-10">
<h1 class="text-3xl text-slate-800 font-bold mb-2">Webベースナビゲーションの利点</h1>
<div class="h-1 w-20 bg-blue-500 rounded-full"></div>
</div>

<div class="grid grid-cols-2 gap-5">

<!-- Case 1 -->
<div class="biz-card p-5 hover:border-blue-300 cursor-default group flex items-start gap-4">
<div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<div class="i-carbon-cloud-download text-2xl"></div>
</div>
<div>
<h3 class="text-lg font-bold text-slate-800 mb-1">アプリインストール不要</h3>
<p class="text-sm text-slate-500 leading-relaxed">
URLやQRコードから即座に起動。観光客や単発の配送ドライバーなど、アプリのDLがハードルになるユーザーに最適です。
</p>
</div>
</div>

<!-- Case 2 -->
<div class="biz-card p-5 hover:border-teal-300 cursor-default group flex items-start gap-4">
<div class="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<div class="i-carbon-screen text-2xl"></div>
</div>
<div>
<h3 class="text-lg font-bold text-slate-800 mb-1">マルチプラットフォーム</h3>
<p class="text-sm text-slate-500 leading-relaxed">
iOS、Android、PC全てのデバイスで動作。OSごとの開発が不要で、開発・保守コストを大幅に削減できます。
</p>
</div>
</div>

<!-- Case 3 -->
<div class="biz-card p-5 hover:border-indigo-300 cursor-default group flex items-start gap-4">
<div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<div class="i-carbon-api text-2xl"></div>
</div>
<div>
<h3 class="text-lg font-bold text-slate-800 mb-1">業務システムとの統合</h3>
<p class="text-sm text-slate-500 leading-relaxed">
既存のWeb管理画面や業務フローの一部としてナビゲーションをシームレスに組み込むことが可能です。
</p>
</div>
</div>

<!-- Case 4 -->
<div class="biz-card p-5 hover:border-orange-300 cursor-default group flex items-start gap-4">
<div class="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<div class="i-carbon-flash text-2xl"></div>
</div>
<div>
<h3 class="text-lg font-bold text-slate-800 mb-1">即時アップデート</h3>
<p class="text-sm text-slate-500 leading-relaxed">
アプリストアの審査なしに、機能追加やバグ修正、地図スタイルの変更を全ユーザーへ即座に反映できます。
</p>
</div>
</div>

</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-6 right-8 w-24 opacity-80 z-50" />

<div class="mb-10">
<h1 class="text-3xl text-slate-800 font-bold mb-2">操作手順</h1>
<div class="h-1 w-20 bg-blue-500 rounded-full"></div>
</div>

<div class="grid grid-cols-3 gap-6">

<!-- Step 1 -->
<div class="biz-card p-0 overflow-hidden h-full flex flex-col">
<div class="bg-slate-50 p-4 border-b border-slate-100">
<span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Step 01</span>
<h3 class="text-lg font-bold text-slate-800">設定</h3>
</div>
<div class="p-6 flex-1">
<p class="text-sm text-slate-600 mb-4">利用シーンに合わせてモードを選択します。</p>
<div class="space-y-3">
<div class="p-3 bg-slate-50 rounded border border-slate-100 text-sm">
<span class="font-bold text-slate-700 block mb-1">移動手段</span>
車 / 徒歩 / 自転車
</div>
<div class="p-3 bg-slate-50 rounded border border-slate-100 text-sm">
<span class="font-bold text-slate-700 block mb-1">言語</span>
日本語 / 英語
</div>
</div>
</div>
</div>

<!-- Step 2 -->
<div class="biz-card p-0 overflow-hidden h-full flex flex-col">
<div class="bg-slate-50 p-4 border-b border-slate-100">
<span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Step 02</span>
<h3 class="text-lg font-bold text-slate-800">目的地設定</h3>
</div>
<div class="p-6 flex-1">
<p class="text-sm text-slate-600 mb-4">行きたい場所を指定してルートを計算します。</p>
<ul class="space-y-3">
<li class="flex items-start gap-3">
<div class="i-carbon-map text-blue-500 mt-1"></div>
<span class="text-sm text-slate-600">地図上をタップして選択</span>
</li>
<li class="flex items-start gap-3">
<div class="i-carbon-keyboard text-blue-500 mt-1"></div>
<span class="text-sm text-slate-600">座標を直接入力</span>
</li>
</ul>
</div>
</div>

<!-- Step 3 -->
<div class="biz-card p-0 overflow-hidden h-full flex flex-col border-blue-200 shadow-md">
<div class="bg-blue-600 p-4 border-b border-blue-700">
<span class="text-xs font-bold text-white/80 uppercase tracking-wider">Step 03</span>
<h3 class="text-lg font-bold text-white">ナビゲーション開始</h3>
</div>
<div class="p-6 flex-1 flex flex-col items-center justify-center text-center">
<div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
<div class="i-carbon-play-filled text-4xl"></div>
</div>
<p class="text-sm text-slate-600">
ボタンを押すと案内が開始されます。<br>
音声と画面表示で誘導します。
</p>
</div>
</div>

</div>

---
layout: center
class: text-center
---

<img src="/assets/images/mapbox-white.png" class="absolute top-6 right-8 w-24 opacity-80 z-50" />

<div class="flex flex-col items-center justify-center h-full">

<div class="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 max-w-2xl w-full text-center">
<div class="mb-8">
<h2 class="text-3xl font-bold text-slate-800 mb-2">デモを体験する</h2>
<p class="text-slate-500">以下のリンクから実際の動作をご確認いただけます</p>
</div>

<a href="https://mapdemos.github.io/mapbox-gljs/turn-by-turn-demo.html" target="_blank" class="group relative inline-block w-full max-w-md">
<div class="absolute inset-0 bg-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<div class="relative bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-3">
<span>デモを開く</span>
<div class="i-carbon-launch"></div>
</div>
</a>

<div class="mt-8 pt-8 border-t border-slate-100">
<p class="text-xs text-slate-400 font-mono mb-2">URL</p>
<a href="https://mapdemos.github.io/mapbox-gljs/turn-by-turn-demo.html" target="_blank" class="text-blue-600 hover:underline font-medium">
https://mapdemos.github.io/mapbox-gljs/turn-by-turn-demo.html
</a>
</div>
</div>

</div>