# apiLanchonete
Api RestFul criada para servir dados para o painel administrativo de uma aplicação voltada para pedidos de lanchonetes.

Este projeto faz parte do teste para vaga de emprego, com enunciado retirado do repositório: https://github.com/thiagocontaparatestes/testes-vaga-emprego/blob/main/teste-backend-lanchonete.md

## Tecnologias/bibliotecas utilizadas:
    *NodeJS: Ambiente que executa código javascript assincrono fora dos navegadores
    *Express: Para criação do servidor da API
    *Mongoose: Para conexão com banco de dados mongoDB
    *Cors: Para definir permisões de origens cruzadas (clients que irão consumir a API)
    *Nodemon: Em fase dev facilita o trabalho automatizando a reinicialização do servidor sempre que detecta uma alteração no código 

# Como resolvi o problema:
1. Realizei a divisão do projeto em 2 repositórios:
   FRONT-END: https://github.com/johnnyofoco/frontLachonete.git
   BACK-END: https://github.com/johnnyofoco/apiLanchonete.git
2. Iniciei o desenvolvimento pelo BACK-END, definindo a estrutura do projeto com o padrão MVC para criação dos diretórios e separação cdos arquivos
3. Escolhi o banco de dados MongoDB 
4. Instalei as dependencias do projeto: 
5. Configurei o arquivo do servidor: server.js (porta, definições de CORS, uso de JSON, definição de rotas)
6. No diretório database, criei o arquivo db que possui um metódo para estabelecer a conexão com o banco de dados
7. Define as models(Collections="tabelas") baseado nas entidades descritas no enunciado
8. Criei os arquivos controllers responsavéis pelos métodos de inserção, remoção e exclusão (já que o projeto não pede edição)
9. Criei nas rotas os endpoints e com seus respectivos verbos HTTP (GET, POST e DELETE)
10. Com o backend estruturado, iniciei o projeto FRONT-END = Painel administrativo que consome essa API (Ler o readme do repositório: https://github.com/johnnyofoco/frontLachonete.git)


# COMO EXECUTAR O PROJETO?

## VISUALIZAR ONLINE:
 * Acesse a url: ....(a definir)

## EXECUÇÃO MANUAL
Para executar o projeto em modo local, é necessário instalar:
 * NODEJS v18.17.1 ou superior
 * MONGODB versão 7.0.1 ou superior
 * GIT [OPCIONAL]

1.Baixe ou clone o repositório FRONT-END: https://github.com/johnnyofoco/frontLachonete.git 
2.Baixe ou clone o repositório BACK-END: https://github.com/johnnyofoco/apiLanchonete.git

Obs: Para clonar é necessário ter instalado o git em seu sistema operacional
     Em seguida crie um diretório
     Depois acesse o diretório via terminal de comando
     Digite o comando: git clone https://github.com/johnnyofoco/frontLachonete.git , e depois digite: git clone https://github.com/johnnyofoco/apiLanchonete.git

3.Com o NODEJS devidamente instalado, acesse via terminal o diretório BACK-END, e execute o comando: npm install (Este comando irá instalar todas as depêndencias NODEJS utilizadas no projeto)

4.Ainda no terminal execute o seguinte comando: npm run dev  (Este comando irá inicializar o servidor da API)

5.Para testar, abra o navegador e digite na url: http://localhost:3000/api

6.Estando tudo ok, acesse o diretório FRONT-END, e abra o arquivo index.html