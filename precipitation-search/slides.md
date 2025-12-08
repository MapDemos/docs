---
theme: default
class: text-center
background: '#000000'
highlighter: shiki
lineNumbers: false
info: |
  ## 降水量検索デモ
  JWL (Japan Weather Layers) の活用事例
drawings:
  persist: false
transition: slide-left
title: 降水量検索デモ
mdc: true
css: unocss
---

<style>
.slidev-layout {
  padding-top: 1rem !important;
}
.slidev-layout h1 {
  padding-right: 10rem !important;
  padding-top: 0.75rem !important;
  margin-bottom: 1.5rem !important;
}
.slidev-layout > *:not(h1):not(.absolute) {
  margin-top: 3rem !important;
}
</style>


<div class="relative z-10">

# <span class="text-gradient">降水量検索デモ</span>

## <span class="text-white opacity-90">JWL (Japan Weather Layers) の活用事例</span>

</div>

<div class="absolute bottom-22 left-15 z-50">
<span class="text-sm" style="color: white;">2025年12月3日</span>
</div>

<div class="absolute bottom-8 left-8 flex items-center gap-4 z-50">
<img src="/assets/images/mapbox-black.png" class="w-32 opacity-90" />
<span class="text-sm" style="color: white;">|　　マップボックス・ジャパン合同会社</span>
</div>

<style>
.text-gradient {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3.5rem;
  font-weight: 800;
}
</style>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-1 right-8 w-32 opacity-100 z-50" />

# このデモについて

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl shadow-lg">

## 概要

このデモは、**降水量データを活用した移動計画**のイメージをご覧いただくためのものです。

<div class="mt-4 p-4 bg-white/50 dark:bg-black/20 rounded-xl">
目的地を検索すると、<span class="font-bold text-blue-600">到着する頃の雨の強さ</span>が事前にわかります。
</div>

</div>

<div class="space-y-4">

<div class="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
到着時の降水量がわかる
<div class="text-sm opacity-90 mt-1">目的地に着く頃の雨の強さを予測</div>
</div>

<div class="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
複数の候補を比較
<div class="text-sm opacity-90 mt-1">最大10件の目的地を同時に比較</div>
</div>

<div class="bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-xl text-white shadow-lg transform hover:scale-105 transition-transform">
15時間先まで予測
<div class="text-sm opacity-90 mt-1">当日の計画に十分な予測範囲</div>
</div>

</div>

</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-1 right-8 w-32 opacity-100 z-50" />

# デモ動画

<video autoplay loop muted playsinline width="700" class="mx-auto rounded-2xl shadow-2xl mt-8">
  <source src="/screenshots/precipitation-search.mp4" type="video/mp4">
  <source src="/screenshots/precipitation-search.mov" type="video/quicktime">
  Your browser does not support the video tag.
</video>

<style>
video {
  max-width: 100%;
  height: auto;
}
</style>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-1 right-8 w-32 opacity-100 z-50" />

# 使用しているMapboxサービス

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-all">
<h3 class="font-bold text-xl mb-2">Mapbox GL JS</h3>
<div class="text-sm opacity-90 mb-3">インタラクティブな地図表示</div>
<ul class="text-sm space-y-1 opacity-90">
<li>✓ 降水量を色分けして表示</li>
<li>✓ スムーズな操作感</li>
</ul>
<a href="https://docs.mapbox.com/mapbox-gl-js/guides/install/" target="_blank" class="text-xs underline opacity-75 hover:opacity-100 mt-2 inline-block">
ドキュメント →
</a>
</div>

<div class="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-all">
<h3 class="font-bold text-xl mb-2">JWL (Japan Weather Layers)</h3>
<div class="text-sm opacity-90 mb-3">日本全国の降水量データ</div>
<ul class="text-sm space-y-1 opacity-90">
<li>✓ 過去60分〜未来15時間</li>
<li>✓ 5分〜1時間間隔で更新</li>
</ul>
<a href="https://docs.mapbox.com/data/tilesets/reference/mapbox-japan-weather-layers/" target="_blank" class="text-xs underline opacity-75 hover:opacity-100 mt-2 inline-block">
ドキュメント →
</a>
</div>

<div class="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-all">
<h3 class="font-bold text-xl mb-2">SearchBox API</h3>
<div class="text-sm opacity-90 mb-3">目的地検索機能</div>
<ul class="text-sm space-y-1 opacity-90">
<li>✓ 日本全国の施設・場所を検索</li>
<li>✓ レストラン、観光地など</li>
</ul>
<a href="https://docs.mapbox.com/api/search/search-box/" target="_blank" class="text-xs underline opacity-75 hover:opacity-100 mt-2 inline-block">
ドキュメント →
</a>
</div>

<div class="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-all">
<h3 class="font-bold text-xl mb-2">Directions API</h3>
<div class="text-sm opacity-90 mb-3">ルート計算機能</div>
<ul class="text-sm space-y-1 opacity-90">
<li>✓ 現在地から目的地までのルート</li>
<li>✓ 所要時間を自動計算</li>
</ul>
<a href="https://docs.mapbox.com/api/navigation/directions/" target="_blank" class="text-xs underline opacity-75 hover:opacity-100 mt-2 inline-block">
ドキュメント →
</a>
</div>

</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-1 right-8 w-32 opacity-100 z-50" />

# デモでできること

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-2xl shadow-lg border-2 border-blue-200 dark:border-blue-700">
<h3 class="font-bold text-xl text-blue-700 dark:text-blue-300 mb-3">1️⃣ 目的地の降水量を確認</h3>
<div class="space-y-2 text-sm">
<div class="flex items-start gap-2">
<div><strong>現在の降水量</strong> - その場所の今の雨の強さ</div>
</div>
<div class="flex items-start gap-2">
<div><strong>到着時間</strong> - 何時に着くか</div>
</div>
<div class="flex items-start gap-2">
<div><strong>到着時の予想降水量</strong> - 着いた時の雨の強さ</div>
</div>
</div>
</div>

<div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-2xl shadow-lg border-2 border-purple-200 dark:border-purple-700">
<h3 class="font-bold text-xl text-purple-700 dark:text-purple-300 mb-3">2️⃣ 複数の候補を比較</h3>
<div class="text-sm">
一度の検索で複数の候補が表示され、<span class="font-bold text-purple-600">雨の少ない場所</span>を選べます。
<div class="mt-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
最大10件まで同時比較可能
</div>
</div>
</div>

<div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-2xl shadow-lg border-2 border-green-200 dark:border-green-700">
<h3 class="font-bold text-xl text-green-700 dark:text-green-300 mb-3">3️⃣ ルートを確認</h3>
<div class="text-sm">
地図上に、現在地から目的地までの<span class="font-bold text-green-600">ルートが表示</span>されます。
<div class="mt-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
日本の道路に最適化されたルート計算
</div>
</div>
</div>

<div class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-2xl shadow-lg border-2 border-orange-200 dark:border-orange-700">
<h3 class="font-bold text-xl text-orange-700 dark:text-orange-300 mb-3">4️⃣ 時間ごとの変化を確認</h3>
<div class="text-sm">
タイムラインを操作することで、<span class="font-bold text-orange-600">過去から未来まで</span>の降水量の変化を見られます。
<div class="mt-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
過去60分〜未来15時間
</div>
</div>
</div>

</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-1 right-8 w-32 opacity-100 z-50" />

# 基本的な使い方

<div class="grid grid-cols-3 gap-6 mt-6">

<div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-2xl shadow-lg">
<h3 class="font-bold text-xl mb-4 text-blue-700 dark:text-blue-300">ステップ1：目的地を検索</h3>
<div class="text-sm mb-4">画面右上の検索ボックスに場所を入力</div>
<div class="space-y-2 text-sm">
<div class="bg-white/50 dark:bg-black/20 p-2 rounded">例：「レストラン」</div>
<div class="bg-white/50 dark:bg-black/20 p-2 rounded">例：「鹿児島空港」</div>
<div class="bg-white/50 dark:bg-black/20 p-2 rounded">例：「観光地」</div>
</div>
<div class="mt-4 pt-4 border-t border-blue-200 dark:border-blue-700 text-xs text-gray-600 dark:text-gray-400">
入力すると自動的に候補が表示されます
</div>
</div>

<div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-2xl shadow-lg">
<h3 class="font-bold text-xl mb-4 text-green-700 dark:text-green-300">ステップ2：候補を確認</h3>
<div class="text-sm mb-4">各候補の降水量と到着時間を比較</div>
<div class="space-y-2 text-sm">
<div class="bg-white/50 dark:bg-black/20 p-2 rounded">
<strong>現在降水量:</strong> その場所の今の雨
</div>
<div class="bg-white/50 dark:bg-black/20 p-2 rounded">
<strong>到着時間:</strong> 目的地に着く時刻
</div>
<div class="bg-white/50 dark:bg-black/20 p-2 rounded">
<strong>予想降水量:</strong> 到着時の雨の強さ
</div>
</div>
<div class="mt-4 pt-4 border-t border-green-200 dark:border-green-700 text-xs text-gray-600 dark:text-gray-400">
最大10件まで同時に比較可能
</div>
</div>

<div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-2xl shadow-lg">
<h3 class="font-bold text-xl mb-4 text-purple-700 dark:text-purple-300">ステップ3：候補を選ぶ</h3>
<div class="text-sm mb-4">地図と連動した操作で目的地を選択</div>
<div class="space-y-2 text-sm">
<div class="bg-white/50 dark:bg-black/20 p-2 rounded">
<strong>マウスオーバー:</strong> 地図でハイライト
</div>
<div class="bg-white/50 dark:bg-black/20 p-2 rounded">
<strong>クリック:</strong> 候補を選択
</div>
<div class="bg-white/50 dark:bg-black/20 p-2 rounded">
<strong>ポップアップ:</strong> 詳細情報表示
</div>
</div>
<div class="mt-4 pt-4 border-t border-purple-200 dark:border-purple-700 text-xs text-gray-600 dark:text-gray-400">
地図が自動的にズームして表示
</div>
</div>

</div>

---
layout: default
---

<img src="/assets/images/mapbox-white.png" class="absolute top-1 right-8 w-32 opacity-100 z-50" />

# 想定される活用例

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-3 rounded-2xl shadow-lg">
<h3 class="font-bold text-sm mb-1.5 text-blue-700 dark:text-blue-300">配送業務</h3>
<div class="text-xs mb-1.5 text-gray-600 dark:text-gray-400">配送先に着く頃の天候を事前確認</div>
<div class="space-y-1 text-xs">
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">配送先を順番に検索</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">到着時降水量を確認</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">雨の少ない順に訪問</div>
</div>
<div class="mt-1.5 pt-1.5 border-t border-blue-200 dark:border-blue-700 text-xs text-gray-600 dark:text-gray-400">
荷物が濡れるリスク軽減、効率的な配送順序
</div>
</div>

<div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-3 rounded-2xl shadow-lg">
<h3 class="font-bold text-sm mb-1.5 text-green-700 dark:text-green-300">現場作業</h3>
<div class="text-xs mb-1.5 text-gray-600 dark:text-gray-400">屋外作業の実施可否を判断</div>
<div class="space-y-1 text-xs">
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">作業現場を検索</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">予定時刻を確認</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">実施可否を判断</div>
</div>
<div class="mt-1.5 pt-1.5 border-t border-green-200 dark:border-green-700 text-xs text-gray-600 dark:text-gray-400">
作業中断を防止、効率的なスケジュール管理
</div>
</div>

<div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-3 rounded-2xl shadow-lg">
<h3 class="font-bold text-sm mb-1.5 text-purple-700 dark:text-purple-300">イベント企画</h3>
<div class="text-xs mb-1.5 text-gray-600 dark:text-gray-400">屋外イベントの開催判断</div>
<div class="space-y-1 text-xs">
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">会場の天候予測</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">開催可否を判断</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">参加者に事前通知</div>
</div>
<div class="mt-1.5 pt-1.5 border-t border-purple-200 dark:border-purple-700 text-xs text-gray-600 dark:text-gray-400">
早期判断、キャンセル損失の削減
</div>
</div>

<div class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-3 rounded-2xl shadow-lg">
<h3 class="font-bold text-sm mb-1.5 text-orange-700 dark:text-orange-300">観光・旅行</h3>
<div class="text-xs mb-1.5 text-gray-600 dark:text-gray-400">雨を避けた観光計画</div>
<div class="space-y-1 text-xs">
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">観光地の天候確認</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">雨の少ない場所選択</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">快適な旅行計画</div>
</div>
<div class="mt-1.5 pt-1.5 border-t border-orange-200 dark:border-orange-700 text-xs text-gray-600 dark:text-gray-400">
満足度向上、より良い写真撮影
</div>
</div>

<div class="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 p-3 rounded-2xl shadow-lg">
<h3 class="font-bold text-sm mb-1.5 text-pink-700 dark:text-pink-300">店舗運営</h3>
<div class="text-xs mb-1.5 text-gray-600 dark:text-gray-400">雨天時の需要予測</div>
<div class="space-y-1 text-xs">
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">降水量を予測</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">在庫を最適化</div>
<div class="bg-white/50 dark:bg-black/20 p-1.5 rounded">人員を適切配置</div>
</div>
<div class="mt-1.5 pt-1.5 border-t border-pink-200 dark:border-pink-700 text-xs text-gray-600 dark:text-gray-400">
機会損失の削減、効率的な運営
</div>
</div>

</div>

---
layout: center
class: text-center
---

<img src="/assets/images/mapbox-white.png" class="absolute top-1 right-8 w-32 opacity-100 z-50" />

# デモURL

<div class="mt-8 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl shadow-2xl inline-block">

<a href="https://mapdemos.github.io/mapbox-gljs/precipitation-search.html" target="_blank" class="text-blue-600 dark:text-blue-400 text-xl font-mono hover:underline">
mapdemos.github.io/mapbox-gljs/precipitation-search.html
</a>

<div class="mt-8 space-y-4">
  <a href="https://mapdemos.github.io/mapbox-gljs/precipitation-search.html" target="_blank" class="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition-transform inline-block shadow-xl">
    デモを開く
  </a>
</div>

</div>

