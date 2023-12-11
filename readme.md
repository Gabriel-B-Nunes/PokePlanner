# Tipos Pokemon
Esse projeto foi realizado sozinho com o objetivo de aprender o básico de JavaScript e praticar lógica de programação.
## Funções
Foram criadas as seguintes funções:
|Nome da função  |O que ela faz                  |
|----------------|-------------------------------|
|DevolveListaTipos()|Essa função retorna um array apenas com a informação 'tipo' do json tipos|
|inverteTipo()|Função utilizada por outras funções, sem utilidade para o usuário|
|LocalizaTipoDado(tipo:String, dado:String)|Essa função retorna uma lista dos tipos pokemon presentes no json conforme dado solicitado.Exemplo LocalizaTipoDado('bug', 'doDoubleDamage') trará todos os tipos pokemon que causam o dobro de dano ao tipo 'bug'|
|verificaQualTipoUsarContraTipo(tipo:String, dado:String)|Parecida com a função LocalizaTipoDado, porém retorna apenas o tipo com a maior quantidade de vantagens. Exemplo verificaQualTipoUsarContraTipo('bug', 'doDoubleDamage') trará o tipo 'fire', pois além de dar o dobro de dano no tipo 'bug' também da o dobro de dano em 'grass', 'ice' e 'steel', sendo o mais efetivo|
|montaTimeContraTipos([tipos:String], dado:String='doDoubleDamage', tamanhoTime:Integer=6)|Parecida com a função verificaQualTipoUsarContraTipo, porém recebe um array com os tipos como argumento com o objetivo de montar um time contra todos os tipos informados. Exemplo montaTimeContraTipos(['bug', 'fire']) trará os tipos 'fire' e 'ground'. Essa função checa se o tipo já foi vencido por algum pokemon do time a fim de evitar otimizar a montagem do time|



> Written with [StackEdit](https://stackedit.io/).