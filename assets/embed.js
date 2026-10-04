(() => {
  function getCaseSrc(s) {
    const host = s.getAttribute('data-host') || new URL(s.src).origin;
    const casePath = s.getAttribute('data-case-path');
    const caseId = s.getAttribute('data-case-id');
    const sectionId = s.getAttribute('data-section-id');
    const iframeId = s.getAttribute('data-iframe-id');

    const base = host + '/#' + (casePath ? casePath : ('/case-preview/' + caseId));

    if (!sectionId) {
      return base + (iframeId ? ("?iframeId=" + iframeId) : '');
    }

    return base + '?sectionId=' + sectionId + (iframeId ? ("&iframeId=" + iframeId) : '');
  }

  function getTemplateSrc(s) {
    const host = s.getAttribute('data-host') || new URL(s.src).origin;
    const templatePath = s.getAttribute('data-template-path');
    const templateId = s.getAttribute('data-template-id');
    const iframeId = s.getAttribute('data-iframe-id');

    return host + '/#' + (templatePath ? templatePath : ('/template/' + templateId))
      + (iframeId ? ("?iframeId=" + iframeId) : '');
  }

  function createIframe() {
    const s = document.currentScript;
    if (!s) return null;

    let src = null;

    if (s.getAttribute('data-case-id')) {
      src = getCaseSrc(s);
    } else if (s.getAttribute('data-template-id')) {
      src = getTemplateSrc(s);
    }

    if (!src) return null;

    const f = document.createElement('iframe');
    f.src = src;
    f.setAttribute('allowfullscreen', '');
    f.allowFullscreen = true;

    f.style.width = '100%';
    f.style.border = '0';
    f.style.display = 'block';
    f.style.height = (s.getAttribute('data-height') || '300') + 'px';

    s.parentNode.insertBefore(f, s);
    return f;
  }

  const s = document.currentScript;
  const f = createIframe();
  if (!s || !f) return;

  const allowedOrigin = new URL(f.src).origin;
  const iframeId = s.getAttribute('data-iframe-id') || null;

  let last = 0;

  window.addEventListener('message', (e) => {
    if (e.source !== f.contentWindow) return;
    if (e.origin !== allowedOrigin) return;

    const d = e.data;
    if (!d || typeof d !== 'object') return;
    if (d.type !== 'HERALD_HEIGHT') return;
    if (iframeId && d.iframeId !== iframeId) return;

    let h = Number(d.height);
    if (!Number.isFinite(h)) return;
    h = Math.max(240, Math.min(2200, Math.round(h)));
    const diff = Math.abs(h - last);
    if (diff < 10) return;
    console.log('Herald adjustment:', diff);
    last = h;
    f.style.height = h + 'px';
  });
})();
