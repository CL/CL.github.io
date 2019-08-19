const firstPart = [
    "ACQUA GALLERIA", 
    "ÁGATA", 
    "ALAMEDA", 
    "ALAMEDAS", 
    "SPAZIO",
    "SPAZIO NIMBUS",
    "VIVENDA",
    "VIVERDE",
    "VIVALDI",
    "CHAPADA",
    "VITÓRIA",
    "VISTA",
    "VILLAGIO",
    "VILLAGE",
    "VILLAGE JARDINS",
    "VILLAGE MIRANTE",
    "MIRANTE",
    "VERSALHES",
    "VALE",
    "UNIPARK",
    "TORRES",
    "TOP LIFE",



    
];
const secondPart = [
    "CONDOMINIO RESORT", 
    "RESORT", 
    "CONDOMINIO",
    "VILLE",
    "SAN CARLO",
    "SAN DOMINGOS",
    "SAN JULIANO",
    "DA JABUTIANA",
    "CLUBE",
    "CONDOMINIO CLUBE",
    "DAS PALMEIRAS",
    "REAL",
    "DOS BURITIS",
    "DAS CASTANHEIRAS",
    "VERDI",
    "VIVERI",
    "SPLENDORE",
    "SAN LEOPOLD",
    "SALERMO",
    "ROYALE",
    "BIANCHINI",
    "DOS GERÂNIOS",
    "DOS HIBISCOS",
    "FIRENZE",
    "DO MAR",
    "SERRA DO MAR",




];

function generator()
{
    var name = firstPart[Math.floor(Math.random() * firstPart.length)] + " " + secondPart[Math.floor(Math.random() * secondPart.length)];
    document.getElementById('empreendimento').textContent = name;
}