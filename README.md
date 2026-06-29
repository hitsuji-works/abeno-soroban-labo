# あべのそろばんLabo — サイト（Warm & Friendly）

これは「あべのそろばんLabo」公式サイトの **静的HTML一式** です。デザイン探索（① Warm & Friendly 方向性）を本番運用可能な形に整えたものです。

ローカルで開いてもブラウザでそのまま動きますし、GitHub Pages に置けば公開もできます。

---

## 📁 ファイル構成

```
site/
├── index.html              ← トップページ
├── experience.html         ← 無料体験授業の説明ページ
├── css/
│   └── style.css           ← 共通スタイル
├── images/
│   ├── hero.png            ← トップのメイン写真（仮）
│   ├── gallery-1〜4.png    ← 教室ギャラリー（仮）4点
│   ├── teacher.png         ← 講師ポートレート（仮）
│   ├── experience-hero.png ← 体験ページのメイン写真（仮）
│   └── map.png             ← 地図プレースホルダ（仮）
└── README.md               ← このファイル
```

### 画像について
`images/` フォルダの画像はすべて **仮のプレースホルダ** です（左上に "PLACEHOLDER" の朱色文字が入っています）。実際の教室写真・講師写真に差し替えてください。

ファイル名はそのままで上書き保存すれば、HTMLは何も変更不要です。推奨サイズは各画像のファイル名のメタ情報を参照ください（だいたい長辺 1000〜1600px、JPEGなら 80〜150KB 程度に圧縮するとモバイルで快適です）。

---

## 🚀 ローカルで開く

ファイルをダブルクリックするだけで開きます。ただしフォントは Google Fonts から読み込んでいるので、インターネット接続が必要です。

もし「相対パスの画像が表示されない」など出る場合は、簡易サーバーで開いてください：

```bash
# このディレクトリ（site/）に cd した状態で
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

---

## 🌐 GitHub Pages で公開する手順

GitHubアカウントをお持ちの方は、以下の手順でスマホからも見られる公開URLを取得できます。

### 1. GitHubで新しいリポジトリを作る
- ブラウザで GitHub にログイン → 右上「＋」→「New repository」
- Repository name：`abeno-soroban-labo` など好きな名前
- **Public** を選択（Private だと無料プランでは Pages が使えません）
- 「Create repository」をクリック

### 2. このフォルダを push する

GitHub のリポジトリ作成画面に「…or push an existing repository from the command line」と表示されているコマンドをコピーして使うのが一番楽です。

ターミナルで `site/` フォルダに移動して：

```bash
cd site/
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/abeno-soroban-labo.git
git push -u origin main
```

> 💡 Claude Code を使う場合は、「`site/` フォルダを GitHub に push したい」と頼めばコマンドを実行してくれます。

### 3. Pages を有効化する
- GitHub の該当リポジトリページを開く
- 「Settings」タブ → 左サイドメニュー「Pages」
- 「Source」を **Deploy from a branch** にして、ブランチを **main** / フォルダを **/ (root)** に設定 → Save
- 1〜2分待つと、上部に `Your site is live at https://あなたのユーザー名.github.io/abeno-soroban-labo/` と表示されます

### 4. スマホで確認
表示されたURLをスマホで開くだけ。LINEで自分宛に送って開くのが手っ取り早いです。

### 5. 以降の更新は
ローカルでファイルを編集して `git add . && git commit -m "..." && git push` するだけで、数十秒後に公開ページに反映されます。

---

## 🤖 Claude Code への指示例

ローカルでこの `site/` フォルダを開いて Claude Code に作業を依頼する際の、コピペで使えるプロンプト例です。

### 画像を差し替える
```
site/images/ にある仮画像を、私が用意した実写真に置き換えたいです。
- hero.png（トップのメイン）
- gallery-1〜4.png（ギャラリー4点）
- teacher.png（講師）
- experience-hero.png（体験ページのメイン）
- map.png（地図）

新しい写真は ~/Pictures/abeno-soroban/ にあります。
- 元のファイル名・拡張子に合わせて site/images/ に上書きコピーしてください
- 1600px を超えるものはアスペクト比を維持して1600pxに縮小
- JPEGに変換して品質80で保存
- HTMLの参照は変更不要のはず、念のため確認してください
```

### 実LINE URL・電話番号に置き換える
```
site/ 配下のHTMLとREADMEから、以下のプレースホルダを実値に置き換えてください。
- LINEのURL: "https://line.me/R/ti/p/@abenosoroban" → "実際のLINE公式URL"
- 電話番号: "06-6721-2381" → "実際の番号"
- 住所: "〒545-xxxx 大阪市阿倍野区○○" → "実際の住所"

置換漏れがないか grep で確認してください。
```

### スケジュールカレンダーを今月分に更新
```
site/index.html のカレンダー（id="schedule" 内の .cal）を、今月分に更新してください。
- 月名・曜日に合わせて空セルを調整
- 火・水・金に "on" クラスと "15–19" の time ラベルを付与
- 祝日や休講日は "on" を付けない
```

### Google Map を埋め込む
```
site/index.html の「ACCESS」セクションの map.png を、
Google Maps の埋め込み iframe に置き換えてください。
場所は「大阪市阿倍野区 阿倍野小学校」周辺。
高さは画像と同じ（aspect-ratio: 16/9）になるようCSSで調整。
```

### 月謝の実額を入れる
```
site/index.html の course セクションで、月謝を以下の実額に置き換えてください。
- 自由時間制: ¥◯◯◯◯ / 月
- 回数制 4回: ¥◯◯◯◯
- 回数制 6回: ¥◯◯◯◯
- 回数制 8回: ¥◯◯◯◯
- 回数制 10回: ¥◯◯◯◯
入会金などその他の費用情報があれば、自由時間制カードに追記してください。
```

---

## ✅ 公開前のチェックリスト

公開する前に、以下を実値に差し替えるのを忘れずに：

- [ ] **LINE公式アカウントのURL** — 全HTMLで `https://line.me/R/ti/p/@abenosoroban` を実URLに
- [ ] **電話番号** — `06-6721-2381` / `090-9677-2496` を実番号に（`tel:` リンクも忘れず）
- [ ] **住所** — `〒545-xxxx 大阪市阿倍野区○○` を実住所に
- [ ] **教室の写真** — `images/` 内の placeholder を実写真に
- [ ] **講師写真** — `images/teacher.png` を差し替え（撮影が難しければ教室の様子写真でも可）
- [ ] **地図** — `images/map.png` を Google Maps 埋め込み iframe に置き換え
- [ ] **月謝の実額** — 各コースカードの `¥ ----` を実額に
- [ ] **OGP画像** — `<meta property="og:image">` の参照画像が魅力的なものか確認（LINEやSNSでシェアされたときの見た目）
- [ ] **スケジュールカレンダー** — 今月分に更新
- [ ] **メタディスクリプション** — `<meta name="description">` の文言が適切か確認

---

## 🎨 デザインの方針メモ

- **配色**：温かみのあるベージュ（紙のような `#fbf8f2`）＋ そろばん玉の朱（`#d94a2b`）。CSSの `:root` で一元管理しているので、アクセント色を変えたい場合は `--accent` を書き換えるだけで全体に反映されます。
- **タイポグラフィ**：見出しは明朝（Kaisei Decol）、本文は手書き寄りの和文（Klee One）、英字は手描き風（Caveat）。すべてGoogle Fonts。
- **ボタンの設計**：LINE予約を主、電話予約を従、体験ページへの誘導をその下に。色とサイズで優先順位を明示しています。
- **モバイル優先**：CSSは小さい画面が前提、`@media (min-width: 900px)` で PC レイアウトに切り替わります。
- **沈むボタン（押し込みエフェクト）**：すべてのボタンに 2pxのドロップシャドウ＋ホバーで持ち上がる動きをつけています。ワイヤーから受け継いだクラフト感の表現です。

---

## 📞 困ったときに

- **GitHub Pages に上げたら画像が表示されない**：パスは大文字小文字を区別します。`images/Hero.png` などになっていないか確認。`<img src>` の値とファイル名が完全一致しているかをチェック。
- **スマホで文字が小さい**：`<meta name="viewport">` が消えていないか確認。`width=device-width, initial-scale=1` が必要です。
- **フォントが効いていない**：オフラインで開いていませんか？ Google Fonts は要ネット接続です。

なにかあれば、いつでも Claude Code に「site/ のREADMEを見てから ◯◯したい」と頼めば、文脈を理解した上で作業してくれます。

---

© 2025 あべのそろばんLabo
