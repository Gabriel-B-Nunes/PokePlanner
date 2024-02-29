import achaTipo from './achaTipo.js';

async function achaDado(tipo, dado){
	var tipo = await achaTipo(tipo);
	return tipo[0][dado];
}

export default achaDado;
