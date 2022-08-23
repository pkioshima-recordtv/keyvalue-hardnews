var words = / abus| acident| acusac| adult| aglomerac| agred| agress| agu | ai 5 | alckmin | alcolumbre | alcool| ambienta| andrade | apavora| apost| aras | arma| arnaud| assalt| assassin| assed| assust| atacad| ataque | atentado| ato | atraente| atropel| azar | banco| bandid| barroso | bb | bdsm | bet | bingo | biquini| blackjack | bolsogado | bolsolao | bolsomi| bolsonar| bomba| bondage | braga | branca | briga| brumadinho | brut | brutal| bumbu| caca niquel | cachaca| cachimbo| cadaver| cadeia| caixa | calcinha| calibre| camara | camisinha| cancer | carcere| cartao | cassino| cdb | cef | cenas| cerveja | cgu | charuto| chico | china | ciberataque| cigarr| ciro | cirurgia|cloroquina | coaf | cocaina | colad| complicac| comunicacao | comunis| comunista| conar | concentracao | condenad| confus| congresso| conhaque| conservad| conta| conteudo | conteudo adulto | contraband| corona| corpao | corpo| corporativo| covas | covid| cpi | crack | cracolandia | crianca| crime|crimi| cueca| culposo | culto| dallagnol | damares | decotelli | deltan | dependencia| dependente| depoimento| deputad| desastr| desmata| detent| ditadura|doenca| doll| doloso | doria | download| droga| duarte | economi| ecstasy | elcio | emergencia| enterr| erecao | eroti| escalonad| escrav| esfaquea| espada| espancad| esperma| esportebet| esportesbet| estado | estupr| eutanasia | evangeli| execu| exib| experiment| explod| explor| explos| extrem| faca| facada| fake | fals| familia |faquea| fascismo | fascist| fayad | federa| feminicid| ferid| feriment| ficha| fila | filho 0| fiocruz | flavio | flordelis | florestal | fnde |fobia| fogo| foragid| franco | fratura| freitas | frias | funera| fuzi| genocid| ghosn | glen | goleiro | golp| gomes | govern| greenwald | grita| grup| guedes |guerra| hamilton | henrique | hezbollah | homem | homicidi| hospita| igreja| ilega| impeachment | imposto| inacio | incendi| inflac| infrator| internac| investigac| investiment| iptv | islamic| italia| itamaraty | jair |jato | jogo do bicho | julgamento| justica | kamasutra | kiko | ladra| lanca perfume | laudo | lei| lewandowski | liberalis| licor| limpa | lockdown | lopes | loteria| lsd | lula | luto | maconha | madeira | maia | mandetta | manifestac| marielle | mario | masturb| mata| materia| matou | mauricio | mdb | medicamento| medo| mega | mendonca | menor| metralha| michelle | micro | ministerio| ministr| missa|monkeypox| moro | morre| mort| mourao | munic| mutilad| naciona| nardoni | narguile | nazis| netto | news | nicotina | nogueira | notici| novaes | nsfw | nsfw | nu | nua | nudes | nudez | nunes | ofend| ofens| oliveira | opera| orgas| orgia | osmar | padre| pai | pandemia | panic| pastor| pateta | pazuello | pcc | pedofil |perfume | pesca | pf | pgr | pib | picant| pinga | pirataria | poker | polemic| policia | poluic| ponte | poquer | porn| posa | posic| predado| predia| prefeit| prende| president| preso| princes| principe| pris| priva| prostitu| psl | pt | punh| qaeda | quadrilh| quarentena | queimad| queiroz | quimic| racis| rainha| ramage | ramos | rci | reaciona| rei | relac| religi| remedio| renuncia| republica| respirad| revolver| rinha | rodeio| rodrigues | rolando | roleta | rosseti | roub| roubad| rubem | sacrific| samy | santos | saque| sara | saud| seca | secom | secom | secretaria | seio| senad| sensua| separatist| sepult| sequest| serra | sex | sexo | sexua| sexy | silvio | sitter | socialismo | soneg| sos | souza | sportingbet | stf | suicid| supremo | sus | suspeit| swing | tcu | teich | tercio | terremot| terroris| teste| tiro| toffolli | toga | tomaz | torrent | tortur| trabalho forcado | trae| trafic| tragedia| trai| transa| transparente| tribuna| uisque | vacina| valeixo | valente | vaquejada |variola| vereador| viana | vibrador| vice | vinho| violac| violad| violen|virada | virus | vitima| viuv| viva | vivo | vodka | wajngarten | whisky | wilson | winter | witzel | zambelli | zema | do tomate /;

var bodytext = " " + document.querySelector('meta[property="og:title"]').content;
var bodytext = bodytext + " " + document.querySelector('meta[property="og:description"]').content + " ";

var bodytext = bodytext.toLowerCase().replace(/["'.,;:-]/g,'');
var bodytext = bodytext.replace(/[\s]/g,' ');
var bodytext = bodytext.replace(/[àáâãäå]/g,"a");
var bodytext = bodytext.replace(/[éèêë]/g,"e");
var bodytext = bodytext.replace(/[íì]/g,"i");
var bodytext = bodytext.replace(/[õôö]/g,"o");
var bodytext = bodytext.replace(/[úùü]/g,"u");
var bodytext = bodytext.replace(/[ç]/g,"c");
