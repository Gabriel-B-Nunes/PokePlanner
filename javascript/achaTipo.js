import fs from 'fs';

async function achaTipo(tipo){
	const request = await fs.promises.readFile('./../json/pokemonTypes.json', 'utf-8')
	.then((data) => JSON.parse(data))
	.catch((err) => err);
	return request.pokemonTypes.filter((objeto) => objeto.name == tipo.toLowerCase());
}

export default achaTipo;
