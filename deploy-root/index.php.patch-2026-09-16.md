# index.php 差分（2026-09-16・あべの2026秋チラシQR用）

`switch ($destParam) {` の中、`// ▼ 指定がない場合は…` の `default:` の**直前**に以下を追加する。既存の case は一切触らない。

```php
    // ▼ ホームページ（新HP・2026秋チラシから）
    case 'hp':
        $redirectUrl = $isAbeno
            ? 'https://osaka-soroban.com/abeno/'
            : 'https://osaka-soroban.com/tsurumi/';
        break;

    // ▼ 地図（Googleマップ・2026秋チラシ裏面から）
    case 'map':
        $redirectUrl = $isAbeno
            ? 'https://www.google.com/maps/search/?api=1&query=34.633156,135.513153'
            : 'https://www.google.com/maps/search/?api=1&query=34.69154,135.56739';
        break;
```

反映後の検証（curl・**flyer付きはDiscord通知が飛ぶ**ので flyer=test で1回ずつ）:
```
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" "https://osaka-soroban.com/?flyer=abeno-test&dest=hp"
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" "https://osaka-soroban.com/?flyer=abeno-test&dest=map"
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" "https://osaka-soroban.com/?flyer=abeno-test&dest=line"
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" "https://osaka-soroban.com/?flyer=abeno-test&dest=wix"
```
期待値: hp→302 /abeno/、map→302 google maps、line→302 lin.ee/5Z3VGwon、wix→302 /abeno/
