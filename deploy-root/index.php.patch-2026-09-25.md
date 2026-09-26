# index.php 差分（2026-09-25・鶴見の地図QRをGoogleマップの店舗ページへ）

目的：鶴見チラシ裏面の「地図アプリで開く」QRが座標ピン（34°41'29.5"N…）ではなく、Googleマップの「鶴見そろばんLabo」店舗ページ（住所・電話・営業時間つき）を開くようにする。
QRの画像・チラシは変更不要（サーバー側の飛び先だけ変える）。

`case 'map':` の中の **鶴見側の1行だけ** を書き換える。あべの側・他の case は触らない。

変更前:
```php
            : 'https://www.google.com/maps/search/?api=1&query=34.69154,135.56739';
```
変更後:
```php
            : 'https://maps.google.com/?cid=7895309266173303149';
```

- cid は Googleマップの店舗ID（URL内 `0x6d91c5f24a1c196d` を10進にしたもの）。2026-09-25 にブラウザで開いて店舗ページ表示を確認済み
- iPhone/AndroidではGoogleマップアプリが入っていればアプリで店舗ページが開く

反映後の検証（flyer付きはDiscord通知が飛ぶので flyer=tsurumi-test で1回）:
```
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" "https://osaka-soroban.com/?flyer=tsurumi-test&dest=map"
```
期待値: `302 https://maps.google.com/?cid=7895309266173303149`
