var bodytext = $('h1, h2').bodytext();;

var bodytext = bodytext.toLowerCase().replace(/[.,;-\s]/g, ' ');
var bodytext = bodytext.replace(/["']/g,'');
var bodytext = bodytext.replace(/[àáâãäå]/g,"a");
var bodytext = bodytext.replace(/[éèêë]/g,"e");
var bodytext = bodytext.replace(/[íì]/g,"i");
var bodytext = bodytext.replace(/[õôö]/g,"o");
var bodytext = bodytext.replace(/[úùü]/g,"u");
var bodytext = bodytext.replace(/[ç]/g,"c");

(function() {
	    var s = document.createElement('script');
	    s.innerHTML = 'googletag.cmd.push(function() { googletag.pubads().setTargeting("test",bodytext); });';
	    document.head.appendChild(s);
	  })();
