(function(){
  function normPath(p){ return p.replace(/\/+/g,'/'); }
  function relRoot() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length === 0) return './';
    return '../'.repeat(parts.length - 1);
  }
  var root = relRoot();
  var header = `
<header class="site-header">
  <div class="container header-inner">
    <div class="logo">
      <a href="${root}index.html">
        <img src="${root}musicusingtech.webp" alt="Music Using Technology" loading="eager">
      </a>
    </div>
    <nav aria-label="Primary navigation" class="main-nav">
      <a href="${root}quickguide/index.html">Quick Guides</a>

      <div class="menu-item has-submenu">
        <a class="submenu-toggle" href="${root}blog/index.html">Blogging</a>
        <ul class="submenu">
          <li><a href="${root}audio-interface-blog/index.html">Audio Interface Blog</a></li>
          <li><a href="${root}software-instruments-blog/index.html">Software Instruments Blog</a></li>
          <li><a href="${root}sound-effects-blog/index.html">Sound Effects Blog</a></li>
          <li><a href="${root}midi-controllers-blog/index.html">MIDI Controllers Blog</a></li>
          <li><a href="${root}wireless-midi/index.html">Wireless MIDI</a></li>
          <li><a href="${root}learning-musical-instruments/index.html">Learning Musical Instruments</a></li>
          <li><a href="${root}how-to-install-vst-plugins-in-reaper/index.html">How to Install VST Plugins in REAPER</a></li>
          <li><a href="${root}best-free-synth-vst-plugins-for-reaper/index.html">Best Free Synth VST Plugins (2026)</a></li>
        </ul>
      </div>

      <a href="${root}wireless-midi/index.html">Wireless MIDI</a>

      <div class="menu-item has-submenu">
        <a class="submenu-toggle" href="${root}best-free-vst-plugins/index.html">Best</a>
        <ul class="submenu">
          <li><a href="${root}best-free-vst-plugins/index.html">Best Free VST Plugins</a></li>
          <li><a href="${root}best-software-instruments/index.html">Best Software Instruments</a></li>
          <li><a href="${root}best-audio-interfaces/index.html">Best Audio Interfaces</a></li>
          <li><a href="${root}best-midi-keyboards/index.html">Best MIDI Keyboards</a></li>
          <li><a href="${root}best-free-daws/index.html">Best Free DAWs</a></li>
          <li><a href="${root}best-free-piano-vst-plugins/index.html">Best Free Piano VST Plugins</a></li>
          <li><a href="${root}best-free-drum-vst-plugins/index.html">Best Free Drum VST Plugins</a></li>
          <li><a href="${root}best-free-synth-vst-plugins/index.html">Best Free Synth VST Plugins</a></li>
        </ul>
      </div>

      <a href="${root}legal/index.html">Legal</a>
      <a href="${root}privacy-policy-2/index.html">Privacy Policy</a>
      <a href="${root}contact-us/index.html">Contact Us</a>
      <a href="${root}about-us/index.html">About Us</a>
    </nav>
  </div>
</header>`;

  var footer = `
<footer class="site-footer">
  <div>Disclaimer: Some links may be affiliate links. I may earn from qualifying purchases at no extra cost to you.</div>
  <div style="margin-top:6px;">© 2026 MusicUsingTech.com – Helping musicians use technology</div>
</footer>`;

  var h = document.getElementById('site-header');
  var f = document.getElementById('site-footer');
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;
})();