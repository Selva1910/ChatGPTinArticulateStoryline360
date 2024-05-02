function isScriptAlreadyIncluded(src) {
    return document.querySelectorAll(`script[src="${src}"]`).length > 0;
  }
   
  function loadScript(src) {
    if (!isScriptAlreadyIncluded(src)) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
    }
  }
   
  const jquerySrc = 'https://code.jquery.com/jquery-3.6.0.min.js';
  const customLibSrc = 'Replace_With_Your_JsDeliver_Link';
   
  loadScript(jquerySrc);
  loadScript(customLibSrc);
   