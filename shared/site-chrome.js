(function(){
  var script = document.currentScript;
  var src = script ? (script.getAttribute('src') || '') : '';
  var root = src.replace(/shared\/site-chrome\.js(?:\?.*)?$/,'');
  if(!root) root = './';

  var header = `
<header class="site-header">
  <div class="container header-inner">
    <div class="logo">
      <a href="${root}"><img src="${root}musicusingtech.webp" alt="Music Using Technology" loading="eager"></a>
    </div>
    <nav aria-label="Primary navigation" class="main-nav">
      <div class="menu-item has-submenu">
        <a class="submenu-toggle" href="${root}quickguide/">Guides</a>
        <ul class="submenu">
          <li><a href="${root}quickguide/">REAPER Quick Start Cheat Sheet</a></li>
          <li><a href="${root}home-studio-guide/">The Home Studio Setup Guide</a></li>
        </ul>
      </div>

      <div class="menu-item has-submenu">
        <a class="submenu-toggle" href="${root}blog/">Blogging</a>
        <ul class="submenu">
          <li><a href="${root}audio-interface-blog/">Audio Interface Blog</a></li>
          <li><a href="${root}software-instruments-blog/">Software Instruments Blog</a></li>
          <li><a href="${root}sound-effects-blog/">Sound Effects Blog</a></li>
          <li><a href="${root}midi-controllers-blog/">MIDI Controllers Blog</a></li>
          <li><a href="${root}wireless-midi/">Wireless MIDI</a></li>
          <li><a href="${root}learning-musical-instruments/">Learning Musical Instruments</a></li>
          <li><a href="${root}how-to-install-vst-plugins-in-reaper/">How to Install VST Plugins in REAPER</a></li>
          <li><a href="${root}best-free-synth-vst-plugins-for-reaper/">Best Free Synth VST Plugins (2026)</a></li>
        </ul>
      </div>

      <a href="${root}wireless-midi/">Wireless MIDI</a>

      <div class="menu-item has-submenu">
        <a class="submenu-toggle" href="${root}best-free-vst-plugins/">Best</a>
        <ul class="submenu">
          <li><a href="${root}best-free-vst-plugins/">Best Free VST Plugins</a></li>
          <li><a href="${root}best-software-instruments/">Best Software Instruments</a></li>
          <li><a href="${root}best-audio-interfaces/">Best Audio Interfaces</a></li>
          <li><a href="${root}best-midi-keyboards/">Best MIDI Keyboards</a></li>
          <li><a href="${root}best-free-daws/">Best Free DAWs</a></li>
          <li><a href="${root}best-free-piano-vst-plugins/">Best Free Piano VST Plugins</a></li>
          <li><a href="${root}best-free-drum-vst-plugins/">Best Free Drum VST Plugins</a></li>
          <li><a href="${root}best-free-synth-vst-plugins/">Best Free Synth VST Plugins</a></li>
          <li><a href="${root}best-audio-interfaces-for-beginners/">Best Audio Interfaces for Beginners</a></li>
          <li><a href="${root}best-audio-interfaces-under-200/">Best Audio Interfaces Under $200</a></li>
          <li><a href="${root}best-midi-keyboards-for-beginners/">Best MIDI Keyboards for Beginners</a></li>
          <li><a href="${root}best-budget-midi-keyboards/">Best Budget MIDI Keyboards</a></li>
          <li><a href="${root}best-midi-keyboards-under-200/">Best MIDI Keyboards Under $200</a></li>
          <li><a href="${root}best-midi-keyboards-for-reaper/">Best MIDI Keyboards for REAPER</a></li>
          <li><a href="${root}best-free-reverb-vst-plugins/">Best Free Reverb VST Plugins</a></li>
          <li><a href="${root}best-free-delay-vst-plugins/">Best Free Delay VST Plugins</a></li>
          <li><a href="${root}best-free-compressor-vst-plugins/">Best Free Compressor VST Plugins</a></li>
          <li><a href="${root}best-free-eq-vst-plugins/">Best Free EQ VST Plugins</a></li>
          <li><a href="${root}best-free-guitar-vst-plugins/">Best Free Guitar VST Plugins</a></li>
          <li><a href="${root}best-free-bass-vst-plugins/">Best Free Bass VST Plugins</a></li>
        </ul>
      </div>

      <a href="${root}legal/">Legal</a>
      <a href="${root}privacy-policy-2/">Privacy Policy</a>
      <a href="${root}contact-us/">Contact Us</a>
      <a href="${root}about-us/">About Us</a>
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
  if(h) h.innerHTML = header;
  if(f) f.innerHTML = footer;
	
// Skimlinks affiliate monetisation
var skimlinks = document.createElement('script');
skimlinks.type = 'text/javascript';
skimlinks.src = 'https://s.skimresources.com/js/306019X1794254.skimlinks.js';
document.body.appendChild(skimlinks);	
})();