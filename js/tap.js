// 電話・LINE・フォーム予約ボタンのタップを /api/tap に送る（Discord通知・D1記録。2026-11-09）
// 送信に失敗してもボタンの動作は止めない
(function () {
  var school = location.pathname.indexOf('/tsurumi') === 0 ? 'tsurumi' : 'abeno';
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var kind = href.indexOf('tel:') === 0 ? 'tel' : /lin\.ee|line\.me/.test(href) ? 'line' : /yoyaku\.html/.test(href) ? 'form' : '';
    if (!kind) return;
    var box = a.closest('.hero-cta,.mid-cta,.final-cta,.sticky-cta,header,footer') || a.closest('section,[class*="cta"]');
    var pos = box ? (box.id || String(box.className).split(' ')[0] || box.tagName.toLowerCase()) : '';
    var page = location.pathname.replace(/^\/(abeno|tsurumi)/, '') || '/';
    var body = JSON.stringify({ school: school, kind: kind, page: page, pos: pos });
    try {
      if (navigator.sendBeacon) navigator.sendBeacon('/api/tap', new Blob([body], { type: 'text/plain' }));
      else fetch('/api/tap', { method: 'POST', body: body, keepalive: true });
    } catch (err) {}
  }, true);
})();
