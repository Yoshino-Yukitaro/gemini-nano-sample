# Gemini Nano sample

## 概要

gemini nanoを動かしてみた

## 使い方

下記のブログを参考にしました
<https://impsbl.hatenablog.jp/entry/CallGeminiNanoLocallyInChrome>

### chromeのバージョンが129未満の場合、129にアップグレードする(130以上は現時点では不明)

### chromeの設定変更を行う

chromeで`chrome://flags/`にアクセスし、下記の項目の設定変更を行う

| 設定名 | 設定値 |
| ---- | ---- |
| Enables optimization guide on device | Enabled BypassPerfRequirement |
| Prompt API for Gemini Nano | Enabled |

### Gemini nanoのモデルのダウンロード

1. chromeのconsoleで下記のコマンドを実行する(エラーが出るが無視する)

```javascript
await ai.assistant.create();
```

2. chromeで`chrome://components`にアクセスする

3. `Optimization Guide On Device Model `の`アップデートを確認`をクリックし、しばらく待つ

### このリポジトリをgit cloneする

(※gitはあらかじめインストールしておいてください)

```shell
git clone git@github.com:Yoshino-Yukitaro/gemini-nano-sample.git
```

### index.htmlをchromeで開く(finderで右クリック -> このアプリケーションで開くなど)

### 使用後

`chrome://flags/`の設定を念の為元に戻しましょう。
