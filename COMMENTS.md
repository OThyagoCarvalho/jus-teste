## Instruções 

Baixar as dependências do projeto.
Acessar a aplicação em [localhost:3000/](http://localhost:3000)
A aplicação espera um número CNJ formatado e redireciona para a página do processo digitado, que é renderizado se encontrado, ou apresenta uma página de erro caso não encontrado.
A aplicação em teoria encontrará quaisquer dos  999 objetos que estão no arquivo `data.ts`, que foi usado para popular o banco de dados do Fauna e está no projeto apenas para facilitar a digitação de processos válidos que serão encontrados.
Pode-se forçar um erro na página de processo digitando um número que não está presente no banco de dados ou um erro 404 tentando acesar alguma página que não está presente no projeto, ex: http://localhost:3000/jurisprudência.

## Tecnologias Escolhidas 

Após ler o desafio, acredito que com o conhecimento que possuo atualmente eu conseguiria realizá-lo por três abordagens, as quais descrevo abaixo por ordem decrescente de complexidade(para mim)!

* 1 Front-End React + Servidor Node + Express + MongoDB
* 2 Front-End React + AWS Lambda Functions e API Gateway + DynamoDB
* 3 Front-End com Next + Next APIs + FaunaDB

Desconsiderei a primeira pois me tomaria mais tempo por ter que escrever o backend e lidar com complexidades com as quais já tive contato, mas não estou muito familiarizado, como middlewares, cabeçalhos da requisição, CORS, etc.

Desconsiderei a segunda opção pois a despeito de ser mais fácil trabalhar com as lambda functions e dynamoDB em relação a construir o backend em Node+Express, trabalhar com a AWS traria "complexidades desnecessárias" como configurar as permissões de acesso no AWS e trabalhar com repositório na nuvem com o CodeCommit, ou ter que rodar a imagem do dynamo no Docker.

Tomei, portanto, a decisão de escolher a solução mais prática, já que o Next oferece a solução de API com as API Routes. 


## Etapas


Primeiramente decidi mockar os dados utilizando o Mockaroo. Preparei um JSON com 999 objetos conforme solicitado no desafio, de modo a evitar que fosse necessário cadastrar qualquer dado.

No momendo de desenvolver pensei em usar JsonServer para construir a página do processo ('/pages/processo/[id].tsx'), mas desisti da ideia e resolvi importar o dado de um único processo do arquivo com os mocks, uma vez que a refatoração seria mínima e este arquivo já estava na pasta do projeto, pois eu precisaria subir ele para o banco de dados através do CLI do Fauna.

Desenvolvidas as páginas de busca e de resultado, fiz a importação dos dados mockados utilizando a CLI do Fauna, e parti para a criação do endpoint da API, que foi relativamente simples, principalmente se comparado ao trabalho que daria para alcançar o mesmo efeito com as outras tecnologias que eu cogitei para a realização do desafio. Resolvi deixar os nomes do endpoint e da página em português pois achei mais interessante do que mostrar um pedaço da url em ingles como '/api/processos/nº-do-processo' em vez de '/api/lawsuits/nº-do-processo'.


## Comentários em geral

Acho que me faltou um pouco de criatividade na hora de criar nomes em inglês para as classes da página de resultado do processo. 

Pensei num lugar melhor para a folha de estilos da página de resultado do processo, que chamei de "./styles/'**lawsuitPage**", mas acho que em um outro projeto com mais folhas de estilo ficaria claro que a pasta 'styles/' abrigaria os estilos de página e os estilos de componentes seriam abrigados nas suas respectivas pastas, assim como se deu neste projeto ex. "./components/NomeDoComponent/NomeDoComponente.module.scss".

## Questão de Segurança

Para comodidade da conferência do funcionamento da API que consulta o banco de dados Fauna, deixei a chave da autorização no arquivo fauna.ts. PS: Estou ciente que expor chaves de apis é um problema grave de segurança, mas não encontrei um modo mais conveniente de permitir que os dados fossem consumidos dinamicamente por um terceiro com a solução que escolhi.


## Dos Testes 

Tentei realizar alguns testes utilizando as bibliotecas mencionadas na entrevista. Não consegui realizar um teste que eu gostaria de ter feito ( verificar se o usuário navegou para a página correta após o input ) pois não achei uma maneira de realizá-lo de uma forma que deixasse ele independente da minha implementação.


## Coisas que eu implementaria 

Penso que seria conveniente se o usuário já tivesse um match parcial enquanto digita o número do seu processo, uma espécie de autocomplete, já que o número do CNJ é único. Eu teria que estudar o impacto dessa busca no banco de dados, mas acho que a conveniência compensaria. Poderia ser implementado fazendo uma query após um determinado número de caracteres ser digitado, e renderizado condicionalmente conforme houvesse matches, ou já sinalizar um erro antes de o usuário preencher o formulário inteiro.

Acho que também seria conveniente que o input fosse formatado independentemente da forma que o usuário digita o número do processo, com ou sem pontuação. **A página atualmente espera que o usuário digite exatamente conforme mostrado no placeholder, com hifens e pontos.** Aparentemente não é muito dificil solucionar este problema utilizando RegEx e arrays.

Pensei em uma página para mostrar os processos agrupados, mas desisti pois os dados mockados não possuem nenhuma informação relevante em nivel agregado, como jurisprudência, **mas deixei o seletor com as opções de tribunais ativada para seguir o layout proposto**




