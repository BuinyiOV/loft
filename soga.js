window.addEventListener('message', function(e) {
  var iframe = document.getElementById('soga_iframe');
  var container = document.getElementById('sogaContainer');
  var eventName = e.data[0];
  var data = e.data[1];
  switch(eventName) {
    case 'setHeight':
      iframe.style.height = data + "px";
      break;
    case 'scrollTop':
      window.scrollTo(0, 0);
      break;
    case 'closeAll':
      //iframe.parentElement.removeChild(iframe);
      //container.parentElement.removeChild(container);
      container.innerHTML = '';
      container.removeAttribute("style");
      break;
  }
}, false);

function sogaStart()
{
  var container = document.getElementById('sogaContainer');
  container.style.position = 'absolute';
  container.style.top = '0';
  container.style.left = '0';
  container.style.zIndex = '99999';
  container.style.width = '100%';
  container.style.height = '100%';
  container.innerHTML = '<div style="position: fixed; top: 0; left: 0; z-index: 999999; width: 100%; height: 100%; display: block; margin: 0; background: rgba(255, 255, 255, 0.8);"></div><iframe id="soga_iframe" src="https://soga.novitus.pl" width="531" frameborder="0" scrolling="no" style="position: relative; z-index: 9999999; display: block; margin: 20px auto 0;"></iframe>';
}
