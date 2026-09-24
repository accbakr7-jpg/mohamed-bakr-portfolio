(function(){
  const map={
    'index.html':'index-ar.html','':'index-ar.html',
    'liquidity-rescue-case-study.html':'liquidity-rescue-case-study-ar.html',
    'audit-close-case-study.html':'audit-close-case-study-ar.html',
    'local-content-case-study.html':'local-content-case-study-ar.html',
    'odoo-manufacturing-case-study.html':'odoo-manufacturing-case-study-ar.html',
    'index-ar.html':'index.html',
    'liquidity-rescue-case-study-ar.html':'liquidity-rescue-case-study.html',
    'audit-close-case-study-ar.html':'audit-close-case-study.html',
    'local-content-case-study-ar.html':'local-content-case-study.html',
    'odoo-manufacturing-case-study-ar.html':'odoo-manufacturing-case-study.html'
  };
  const file=location.pathname.split('/').pop();
  const isArabic=document.documentElement.lang==='ar'||file.endsWith('-ar.html');
  const target=map[file]||map[''];
  const box=document.createElement('nav');
  box.className='site-language-switch';
  box.setAttribute('aria-label',isArabic?'اختيار اللغة':'Language selector');
  box.innerHTML=isArabic
    ? '<span aria-current="page">العربية</span><a href="'+target+'">English</a>'
    : '<span aria-current="page">English</span><a href="'+target+'">العربية</a>';
  document.body.appendChild(box);
  const style=document.createElement('style');
  style.textContent='.site-language-switch{position:fixed;top:88px;right:18px;z-index:12000;display:flex;gap:4px;align-items:center;padding:5px;background:rgba(255,255,255,.96);border:1px solid #d7e0e8;border-radius:999px;box-shadow:0 8px 24px rgba(6,29,53,.16);font:700 12px Arial,sans-serif}.site-language-switch a,.site-language-switch span{padding:7px 11px;border-radius:999px;text-decoration:none;color:#0b2a48}.site-language-switch span{background:#0b2a48;color:#fff}.site-language-switch a:hover{background:#eef3f6}html[dir="rtl"] .site-language-switch{right:auto;left:18px}@media(max-width:640px){.site-language-switch{top:74px;right:10px}html[dir="rtl"] .site-language-switch{left:10px}}';
  document.head.appendChild(style);
})();
