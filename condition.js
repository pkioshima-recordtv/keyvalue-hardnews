if (window.location.pathname == "/" && window.location.hostname.split(".")[1] == "r7") {

var hardnews = "0";

}else{

    if(words.test(bodytext)){
            var hardnews = "1"
        }else{
            var hardnews = "0"
        }
        
}

  (function() {
    var s = document.createElement('script');
    s.innerHTML = 'googletag.cmd.push(function() { googletag.pubads().setTargeting("hardnews",hardnews); });';
    document.head.appendChild(s);
  })();
