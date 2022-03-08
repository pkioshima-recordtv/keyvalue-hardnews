var bodytext = document.querySelectorAll("h1, h2, p")
var bodytext = toLowerCase().replace(/[.,\s]/g, ' ');
var bodytext = bodytext.replace(/[àáâãäå]/g,"a");
var bodytext = bodytext.replace(/[éèêë]/g,"e");
var bodytext = bodytext.replace(/[íì]/g,"i");
var bodytext = bodytext.replace(/[õôö]/g,"o");
var bodytext = bodytext.replace(/[úùü]/g,"u");
var bodytext = bodytext.replace(/[ç]/g,"c");
