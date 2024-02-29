process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import axios from 'axios';
import cheerio from 'cheerio';
import express from 'express';
import fs from 'fs';

function testaVazio(elemento){
	if(elemento !== '' && elemento !== undefined){
		return true;
	}else{
		return false;
	}
}

function conecta(url){
	var response = axios.get(url)
	.then((response) => {
		return response.data;
	})
	.catch((err) => {
		console.log(err);
	})
	return response;
}

const responseLocation = conecta('https://pokemondb.net/location');
const baseUrl = 'https://pokemondb.net';
var $ = cheerio.load(await responseLocation);
const links = [];
$('.grid-row a').each((i, ele) => {
	links.push({[$(ele).text()]: baseUrl + $(ele).attr('href')});
});

const listaPokemonsPorRota = {};

for(var atual = 0; atual < links.length; atual++){
	console.log(`link atual = ${atual}, total de links = ${links.length}`);
	var responseTmp = conecta(Object.values(links[atual]).join());
	var $ = cheerio.load(await responseTmp);
	var jsonFinal = [];

	var jsonGeracao = {};

	var listaMeio = [];
	var meio = '';

	$('#main').children().each((i, ele) => {
		if($(ele).is('h2')){
			var geracao = $(ele).text();
		}
		if($(ele).is('h3')){
			meio = $(ele).text();
		}
		if($(ele).is('div')){
			$(ele).find('tr').each((i, tr) => {
				var pokemonAtual = {};
				var jogosAtual = [];
				var temposAtual = [];
				
				//nome
				var nome = $(tr).find('td.cell-name a').text()
				if(testaVazio(nome)){
					pokemonAtual['Nome'] = nome;
				}
				
				//jogos
				$(tr).find('td.cell-loc-game').each((i, td) => {
					var jogo = $(td).text();
					if(testaVazio(jogo)){
						jogosAtual.push(jogo);
					}
				});
				if(jogosAtual.length != 0){
					pokemonAtual['Jogos'] = jogosAtual;
				}

				//raridade
				var raridade = $(tr).find('span.icon-rarity').text();
				if(testaVazio(raridade)){
					pokemonAtual['Raridade'] = raridade;
				}
				
				//nivel
				var nivel = $(tr).find('td.cell-num:last()').text();
				if(testaVazio(nivel)){
					pokemonAtual['Nivel'] = nivel;
				}
				
				//tempos
				$(tr).find('td:not(.cell-name).cell-fixed img').each((i, img) => {
					var tempo = $(img).attr('alt');
					if(testaVazio(tempo)){
						temposAtual.push(tempo);
					}
				});
				if(temposAtual.length != 0){
					pokemonAtual['Tempos'] = temposAtual;
				}

				//detalhe
				var detalhe = $(tr).find('td:last()').text();
				if(testaVazio(detalhe)){
					pokemonAtual['Detalhe'] = detalhe;
				}
				if(Object.entries(pokemonAtual) != 0){
					listaMeio.push(pokemonAtual);
				}
			});
		}
		if(testaVazio(geracao)){
			if(Object.keys(jsonGeracao).length !== 0){
				jsonFinal.push(jsonGeracao);
				jsonGeracao = {};
				listaMeio = [];
				jsonGeracao['Geracao'] = geracao;
			}else{
				jsonGeracao['Geracao'] = geracao;
			}
		}
		if(listaMeio.length !== 0){
			if(testaVazio(meio)){
				jsonGeracao[meio] = listaMeio;
				listaMeio = [];
			}
		}
	});
	if(Object.entries(jsonGeracao) !== 0){
		jsonFinal.push(jsonGeracao);
		jsonGeracao = {};
		listaMeio = [];
	}
	listaPokemonsPorRota[Object.keys(links[atual]).join()] = jsonFinal;
}

fs.writeFile('./rotas.json', JSON.stringify(listaPokemonsPorRota, null, 2), (error) => {
  if (error) {
    console.log('An error has occurred ', error);
    return;
  }
  console.log('Data written successfully to disk');
});
