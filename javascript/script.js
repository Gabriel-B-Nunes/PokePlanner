import achaDado from './achaDado.js';
import inverte from './inverte.js';
import checaCompatibilidade from './checaCompatibilidade.js';

async function melhorCounter(dado, tipo){
	var counterar = [...tipo];
	var tiposPossiveis = [...await Promise.all(counterar.map(async (objeto) => await achaDado(objeto, dado)))].flat(Infinity);

	var compatibilidades = checaCompatibilidade(tiposPossiveis);

	var timeFinal = [];
	for(var atual = 0; atual < compatibilidades.length; atual++){
		var tiposCounterados = await achaDado(Object.keys(compatibilidades[atual]).join(), inverte(dado));
		for(var atual2 = 0; atual2 < tiposCounterados.length; atual2++){
			if(counterar.includes(tiposCounterados[atual2])){
				var index = counterar.indexOf(tiposCounterados[atual2]);
				counterar.splice(index, 1);
				if(!timeFinal.includes(Object.keys(compatibilidades[atual]).join())){
					timeFinal.push(Object.keys(compatibilidades[atual]).join());
			}
			}
		}
	}
	return timeFinal;
}
