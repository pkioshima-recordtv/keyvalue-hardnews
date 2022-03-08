	var words = ['18 anos','jojo','band','carrossel'];

	var bodytext = document.body.innerText.toLowerCase().replace(/[.,\s]/g, ' ');
	var bodytext = bodytext.replace(/[àáâãäå]/g,"a");
	var bodytext = bodytext.replace(/[éèêë]/g,"e");
	var bodytext = bodytext.replace(/[íì]/g,"i");
	var bodytext = bodytext.replace(/[õôö]/g,"o");
	var bodytext = bodytext.replace(/[úùü]/g,"u");
	var bodytext = bodytext.replace(/[ç]/g,"c");

	const compare = bodytext.some(r => words.includes(r));
