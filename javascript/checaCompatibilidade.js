import achaDado from './achaDado.js';

function checaCompatibilidade(arrayTipos){
	var setTipos = [...new Set([...arrayTipos])];
	var listaTipos = [...arrayTipos];
	let compatibilidades = [];

	for(var atual = 0; atual < setTipos.length; atual++){
		var encontrados = 0;
		for(var atual2 = 0; atual2 < listaTipos.length; atual2++){
			if(setTipos[atual] == listaTipos[atual2]){
				encontrados++;
			}
		}
		var tmpObject = {[setTipos[atual]]: encontrados};
		compatibilidades.push(tmpObject);
	}

	compatibilidades.sort((a, b) => {
		return Object.values(b) - Object.values(a);
	});
	
	return compatibilidades;
}

export default checaCompatibilidade;
