# jest-basic

Nesse projeto é esplanado uma bateria de testes usando o jest com typescript. Os arquivos de testes seguem um padrão .spec para os arquivos de testes. Cada classe possui seus respectivo teste.


### Instalação :


```sh

npm i jest ts-jest @types/jest -D

```


### Erros Possiveis Na Instalação:


 1- npm audit fix -> para algum bug fixed
 2- npm audit fix --force -> mais criterioso.
 3- npx npm-check -u -> para possíveis atualizações de pacotes.
 4- npm audit -> quais pacotes estão com erros.
 4- mudar de pacote. Caso nenhuma das opções acima não resolver.

### Configurações :

```sh

npx ts-jest config:init

```


obs: É criado um novo jest.config.js

As configurações do projeto estão no package.json dentro de scripts.


### Inicialmente referenciar como será executado o teste:

package.json -> script -> "test":"jest"

Fazendo isso o jest irá poder ser executado da seguinte forma:

```sh

 npm test

```
##### -------------------------------------------------------------------

Melhor forma de visualizar testes com o jest :

package.json -> script -> 

"test:silent":"npx jest --watchAll --silent --noStackTrace"

assim a execução será :


```sh

npx jest --watchAll --silent --noStackTrace

```
 

inibi : erros consoles, stackTrace.

A visibilidade indicará apenas os erros e os resultados esperados. Assim facilita a leitura dos erros.

E a execusão se faz por: npm run test:silent

obs: watchAll fica assistindo a cada mudança dentro dos testes em
tempo de codagem.

### Limpando cash do Jest :

Caso aconteça de erros inesperados com o jest em tempo de execução isso acontecendo depois de vários testes consecutivos é bom limpar o cache.


```sh

npx jest --clearCache

```


### Coverage

Quando se quer fazer a cobertura dos testes, ou seja checar se todas as proposições de uma
classe ou método foram testas usa-se o coverage. O coverage irá olhar a classe e depois comparar com os arquivos de testes dessa classe, caso tenha faltando algo a ser testado ele informa o percentual de cobertura dos testes da classe analisada.

### Para instalá-lo é simples :

opcional : instalar após todos os arquivos spec foram criados.

No terminal :

```sh

npx jest --coverage 

```

É gerado um relatório dentro do próprio terminal.
Ele irá criar uma pasta coverage com seguinte arquivo.

Icov-report: contempla os htmls referentes a cada teste de cada classe. Nesses layout
mais intuitivo pode-se observar a cobertura dos testes pelo o browser e o que foi testado.

obs : Existe a possibilidade do uso do coverage para os testes antes mesmo da complitude
      de todos os testes. Basta configurar no package.json nos scripts :


"test:coverage": "jest --coverage --silent --noStackTrace"

para executar :

```sh

 npm run test:coverage

```

## Espero poder ter ajudado e bons estudos.