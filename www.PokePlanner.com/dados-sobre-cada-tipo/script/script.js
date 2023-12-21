var tipos = [
	{
		'tipo' : 'bug',
		'doDoubleDamage' : ['psychic', 'grass', 'dark'],
		'takeHalfDamage' : ['fight', 'grass', 'ground'],
		'doHalfDamage' : ['fight', 'fire', 'flying', 'ghost', 'poison', 'steel', 'fairy'],
		'takeDoubleDamage' : ['fire', 'flying', 'rock'],
		'id' : 0
	},
	{
		'tipo' : 'electr',
		'doDoubleDamage' : ['flying', 'water'],
		'takeHalfDamage' : ['electr', 'flying', 'steel'],
		'doHalfDamage' : ['dragon', 'electr', 'grass'],
		'takeDoubleDamage' : ['ground'],
		'cantDamage' : ['ground'],
		'id' : 1
	},
	{
		'tipo' : 'fire',
		'doDoubleDamage' : ['bug', 'grass', 'ice', 'steel'],
		'takeHalfDamage' : ['bug', 'fairy', 'fire', 'grass', 'ice', 'steel'],
		'doHalfDamage' : ['dragon', 'fire', 'rock', 'water'],
		'takeDoubleDamage' : ['ground', 'rock', 'water'],
		'id' : 2
	},
	{
		'tipo' : 'grass',
		'doDoubleDamage' : ['ground', 'rock', 'water'],
		'takeHalfDamage' : ['electr', 'grass', 'ground', 'water'],
		'doHalfDamage' : ['bug', 'dragon', 'fire', 'flying', 'grass', 'poison', 'steel'],
		'takeDoubleDamage' : ['bug', 'fire', 'flying', 'ice', 'poison'],
		'id' : 3
	},
	{
		'tipo' : 'normal',
		'doDoubleDamage' : [],
		'takeHalfDamage' : [],
		'doHalfDamage' : ['rock', 'steel'],
		'takeDoubleDamage' : ['fight'],
		'cantDamage' : ['ghost'],
		'immuneTo' : ['ghost'],
		'id' : 4
	},
	{
		'tipo' : 'rock',
		'doDoubleDamage' : ['bug', 'fire', 'flying', 'ice'],
		'takeHalfDamage' : ['fire', 'flying', 'normal', 'poison'],
		'doHalfDamage' : ['fight', 'ground', 'steel'],
		'takeDoubleDamage' : ['fight', 'grass', 'ground', 'steel', 'water'],
		'id' : 5
	},
	{
		'tipo' : 'dark',
		'doDoubleDamage' : ['ghost', 'psychic'],
		'takeHalfDamage' : ['dark', 'ghost'],
		'doHalfDamage' : ['dark', 'fight', 'fairy'],
		'takeDoubleDamage' : ['bug', 'fight', 'fairy'],
		'immuneTo' : ['psychic'],
		'id' : 6
	},
	{
		'tipo' : 'fairy',
		'doDoubleDamage' : ['dark', 'dragon', 'fight'],
		'takeHalfDamage' : ['bug', 'dark', 'fight'],
		'doHalfDamage' : ['fire', 'poison', 'steel'],
		'takeDoubleDamage' : ['poison', 'steel'],
		'immuneTo' : ['dragon'],
		'id' : 7
	},
	{
		'tipo' : 'flying',
		'doDoubleDamage' : ['bug', 'fight', 'grass'],
		'takeHalfDamage' : ['bug', 'fight', 'grass'],
		'doHalfDamage' : ['electr', 'rock', 'steel'],
		'takeDoubleDamage' : ['electr', 'ice', 'rock'],
		'immuneTo' : ['ground'],
		'id' : 8
	},
	{
		'tipo' : 'ground',
		'doDoubleDamage' : ['electr', 'fire', 'poison', 'rock', 'steel'],
		'takeHalfDamage' : ['poison', 'rock'],
		'doHalfDamage' : ['bug', 'grass'],
		'takeDoubleDamage' : ['grass', 'ice', 'water'],
		'immuneTo' : ['electr'],
		'cantDamage' : ['flying'],
		'id' : 9
	},
	{
		'tipo' : 'poison',
		'doDoubleDamage' : ['grass', 'fairy'],
		'takeHalfDamage' : ['bug', 'fairy', 'fight', 'grass', 'poison'],
		'doHalfDamage' : ['ghost', 'ground', 'poison', 'rock'],
		'takeDoubleDamage' : ['ground', 'psychic'],
		'cantDamage' : ['steel'],
		'id' : 10
	},
	{
		'tipo' : 'steel',
		'doDoubleDamage' : ['fairy', 'ice', 'rock'],
		'takeHalfDamage' : ['bug', 'dragon', 'fairy', 'grass', 'ice', 'normal', 'psychic', 'rock', 'steel'],
		'doHalfDamage' : ['electr', 'fire', 'steel', 'water'],
		'takeDoubleDamage' : ['fight', 'fire', 'ground'],
		'immuneTo' : ['poison'],
		'id' : 11
	},
	{
		'tipo' : 'dragon',
		'doDoubleDamage' : ['dragon'],
		'takeHalfDamage' : ['electr', 'fire', 'grass', 'water'],
		'doHalfDamage' : ['steel'],
		'takeDoubleDamage' : ['dragon', 'ice', 'fairy'],
		'cantDamage' : ['fairy'],
		'id' : 12
	},
	{
		'tipo' : 'fight',
		'doDoubleDamage' : ['dark', 'ice', 'normal', 'rock', 'steel'],
		'takeHalfDamage' : ['bug', 'dark', 'rock'],
		'doHalfDamage' : ['bug', 'fairy', 'flying', 'poison', 'psychic'],
		'takeDoubleDamage' : ['fairy', 'flying', 'psychic'],
		'cantDamage' : ['ghost'],
		'id' : 13
	},
	{
		'tipo' : 'ghost',
		'doDoubleDamage' : ['ghost', 'psychic'],
		'takeHalfDamage' : ['bug', 'poison'],
		'doHalfDamage' : ['dark'],
		'takeDoubleDamage' : ['ghost', 'dark'],
		'cantDamage' : ['normal'],
		'immuneTo' : ['normal', 'fight'],
		'id' : 14
	},
	{
		'tipo' : 'ice',
		'doDoubleDamage' : ['dragon', 'flying', 'grass', 'ground'],
		'takeHalfDamage' : ['ice'],
		'doHalfDamage' : ['fire', 'ice', 'steel', 'water'],
		'takeDoubleDamage' : ['fight', 'fire', 'rock', 'steel'],
		'id' : 15
	},
	{
		'tipo' : 'psychic',
		'doDoubleDamage' : ['fight', 'poison'],
		'takeHalfDamage' : ['fight', 'psychic'],
		'doHalfDamage' : ['psychic', 'steel'],
		'takeDoubleDamage' : ['bug', 'dark', 'ghost'],
		'cantDamage' : ['dark'],
		'id' : 16
	},
	{
		'tipo' : 'water',
		'doDoubleDamage' : ['fire', 'ground', 'rock'],
		'takeHalfDamage' : ['fire', 'ice', 'steel', 'water'],
		'doHalfDamage' : ['dragon', 'grass', 'water'],
		'takeDoubleDamage' : ['electr', 'grass'],
		'id' : 17
	}
];

function devolveListaTipos(){
	var ListaTipos = [];
	for(i = 0; i < tipos.length; i++){
		ListaTipos.push(tipos[i].tipo);
	}
	return ListaTipos;
}

function buscaDado(fonte, tipo, dados){
	for(i = 0; i < tipos.length; i++){
		if(tipos[i]['tipo'] == tipo){
			return tipos[i][dados]
		}
	}
}

function criaTabela(index, colunas, tiposPesquisa) {
	const tableRef = document.getElementById('table-resultados');
	var newRow = tableRef.insertRow(-1);
	var newCell = newRow.insertCell();
	var newText = document.createTextNode(index);
	newCell.appendChild(newText);
	for(i = 0; i < colunas.length; i++){
		newCell = newRow.insertCell();
		newText = document.createTextNode(colunas[i]);
		newCell.appendChild(newText);
	}
	for(i = 0; i < tiposPesquisa.length; i++){
		newRow = tableRef.insertRow(-1);
		newCell = newRow.insertCell();
		newText = document.createTextNode(tiposPesquisa[i]);
		newCell.appendChild(newText);
		for(x = 0; x < colunas.length; x++){
			var dadosTemp = buscaDado(tipos, tiposPesquisa[i], colunas[x]);
			console.log(tiposPesquisa[0]);
			console.log(colunas);
			newCell = newRow.insertCell();
			newText = document.createTextNode(dadosTemp);
			newCell.appendChild(newText);
		}
	}
}

document.getElementById('button-selecionar-todos-dados').onclick = () => {
	var listaDados = ['doDoubleDamage', 'takeHalfDamage', 'doHalfDamage', 'takeDoubleDamage', 'immuneTo', 'cantDamage'];
	for(i = 0; i < listaDados.length; i++){
		document.getElementById(listaDados[i]).checked = true;
	}
}

document.getElementById('button-selecionar-todos-tipos').onclick = () => {
	var listaTipos = devolveListaTipos();
	for(i = 0; i < listaTipos.length; i++){
		document.getElementById(listaTipos[i]).checked = true;
	}
}

document.getElementById('button-processar').onclick = () => {
	var listaTipos = devolveListaTipos();
	var listaDados = ['doDoubleDamage', 'takeHalfDamage', 'doHalfDamage', 'takeDoubleDamage', 'immuneTo', 'cantDamage'];
	var listaDadosUsuario = [];
	var listaTiposUsuario = [];
	for(i = 0; i < listaTipos.length; i++){
		var checked = document.getElementById(listaTipos[i]).checked
		if(checked == true){
			listaTiposUsuario.push(listaTipos[i]);
		}
	}
	for(i = 0; i < listaDados.length; i++){
		var checked = document.getElementById(listaDados[i]).checked
		if(checked == true){
			listaDadosUsuario.push(listaDados[i]);
		}
	}
	criaTabela('tipo', listaDadosUsuario, listaTiposUsuario);
}

document.getElementById('button-reset').onclick = () => {
	var listaTipos = devolveListaTipos();
	for(i = 0; i < listaTipos.length; i++){
		document.getElementById(listaTipos[i]).checked = false;
	}
	var listaDados = ['doDoubleDamage', 'takeHalfDamage', 'doHalfDamage', 'takeDoubleDamage', 'immuneTo', 'cantDamage'];
	for(i = 0; i < listaDados.length; i++){
		document.getElementById(listaDados[i]).checked = false;
	}
	const tableRef = document.getElementById('table-resultados');
	while(tableRef.firstChild){
		tableRef.removeChild(tableRef.firstChild);
	}
}
