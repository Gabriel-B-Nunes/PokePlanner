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

function inverteTipo(tipo){
	if(tipo == 'doDoubleDamage'){
		return 'takeDoubleDamage';
	}
	if(tipo == 'takeDoubleDamage'){
		return 'doDoubleDamage';
	}
	if(tipo == 'takeHalfDamage'){
		return 'doHalfDamage';
	}
	if(tipo == 'doHalfDamage'){
		return 'takeHalfDamage';
	}
	if(tipo == 'immuneTo'){
		return 'cantDamage'
	}
	if(tipo == 'cantDamage'){
		return 'immuneTo'
	}
}

function localizaTipoDado(tipo, dado){
	for(i = 0; i < tipos.length; i++){
		var id = tipos[i].id;
		if(tipo == tipos[id].tipo){
			return tipos[id][inverteTipo(dado)];
		}
	}
}

function verificaQualTipoUsarContraTipo(tipo, dadoBaseParaLocalizarCounter = 'doDoubleDamage', retornaTiposVencidos = false){
	var opcoes = localizaTipoDado(tipo, dadoBaseParaLocalizarCounter);
	var vencedor = '';
	var comparador = '';
	try {
		for(i = 0; i < opcoes.length; i++){
			for(id = 0; id < tipos.length; id++){
				if(opcoes[i] == tipos[id].tipo){
					if(tipos[id][dadoBaseParaLocalizarCounter].length > comparador.length){
					comparador = tipos[id][dadoBaseParaLocalizarCounter];
					vencedor = tipos[id].tipo;
					}
				}
			}
		}
	} catch(error){
		console.log('name:', error.name);
		console.log('message:', error.message);
		console.log('tipo', '\"' + tipo + '\"', 'não possui o dado', '\"' + dadoBaseParaLocalizarCounter + '\"');
	}
	if(retornaTiposVencidos == false){
		if(vencedor != ''){
			return vencedor;
		} else {return false}
	} else {
		if(comparador != ''){
			return comparador;
		} else {return false}
	}	
}

function montaTimeContraTipos(tiposPK, dadoBaseParaLocalizarCounter = 'doDoubleDamage', tamanhoTime = 9){
	if(tiposPK == 'todos'){
		var time = [];
		time.push(verificaQualTipoUsarContraTipo(tipos[0].tipo, dadoBaseParaLocalizarCounter));
		for(id1 = 0; id1 < tipos.length; id1++){
			var achou = false;
			var tipoCounter = (verificaQualTipoUsarContraTipo(tipos[id1].tipo, dadoBaseParaLocalizarCounter));
			for(id2 = 0; id2 < time.length; id2++){
				if(tipoCounter == time[id2]){
					achou = true;
				}
			}
			if(achou == false){
				time.push(tipoCounter);
			}
		}
		if(time.length > tamanhoTime){
			throw{ 
			  name: "Function Error", 
			  level: "Show Stopper", 
			  message: "Tamanho do time " + "(" +time.length+ ")" + " maior que o definido na função " + "(" +tamanhoTime+ ")", 
			  toString:    function(){return this.name + ": " + this.message;},
			}
		}
		return time;	
	} else{
		var time = [];
		time.push(verificaQualTipoUsarContraTipo(tiposPK[0], dadoBaseParaLocalizarCounter));
		for(id1 = 0; id1 < tiposPK.length; id1++){
			var achou = false;
			var tipoCounter = (verificaQualTipoUsarContraTipo(tiposPK[id1], dadoBaseParaLocalizarCounter));
			for(id2 = 0; id2 < time.length; id2++){
				if(tipoCounter == time[id2]){
					achou = true;
				}
			}
			if(achou == false){
				time.push(tipoCounter);
			}
		}
		if(time.length > tamanhoTime){
			throw{ 
			  name: "Function Error", 
			  level: "Show Stopper", 
			  message: "Tamanho do time " + "(" +time.length+ ")" + " maior que o definido na função " + "(" +tamanhoTime+ ")", 
			  toString:    function(){return this.name + ": " + this.message;},
			}
		}
		return time;	
	}
}

document.getElementById('button-processar').onclick = () => {
	var tiposTemp = devolveListaTipos();
	var selecaoUsuario = [];
	var tipoVantagem = document.getElementById('tipo-vantagem').value;
	for(i = 0; i < tiposTemp.length; i++){
		var checkbox = document.getElementById(tiposTemp[i]).checked;
		if(checkbox){
			selecaoUsuario.push(tiposTemp[i]);
		}
	}
	document.getElementById('p-resultado').textContent = montaTimeContraTipos(selecaoUsuario, tipoVantagem);
}

document.getElementById('button-selecionar-todos-tipos').onclick = () => {
	var listaTipos = devolveListaTipos();
	for(i = 0; i < listaTipos.length; i++){
		document.getElementById(listaTipos[i]).checked = true;
	}
}
