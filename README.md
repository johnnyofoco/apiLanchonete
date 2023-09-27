# apiLanchonete
Api RestFul criada para servir dados para o painel administrativo de uma aplicação voltada para pedidos de lanchonetes.

## Tecnologias/bibliotecas utilizadas:
    *NodeJS: Ambiente que executa código javascript assincrono fora dos navegadores
    *Express: Para criação do servidor da API
    *Mongoose: Para conexão com banco de dados mongoDB
    *Cors: Para definir permisões de origens cruzadas (clients que irão consumir a API)
    *Nodemon: Em fase dev facilita o trabalho automatizando a reinicialização do servidor sempre que detecta uma alteração no código 

Este projeto faz parte do teste para vaga de emprego, com enunciado retirado do repositório: https://github.com/thiagocontaparatestes/testes-vaga-emprego/blob/main/teste-backend-lanchonete.md

# Solução do problema:
1. Realizei a divisão do projeto em 2 repositórios:
   FRONT-END: https://github.com/johnnyofoco/frontLachonete.git
   BACK-END: https://github.com/johnnyofoco/apiLanchonete.git
2. Iniciando o desenvolvimento pelo BACK-END, defini a estrutura do projeto com o padrão MVC
3. Escolhi o banco de dados MongoDB 
4. Instalei as dependencias do projeto: 
5. Configurei o arquivo do servidor 
6. No diretório database, estabeleci a conexão com o banco de dados
7. Define as models(Collections) baseado nas entidades descritas no enunciado


# Como executar o projeto

## PARA VISUALIZAR O PROJETO ONLINE ACESSE:

## EXECUÇÃO MANUAL
Para executar o projeto em modo local, é necessário instalar o NODEJS v18.17.1 ou superior

1.Baixe ou clone o repositório FRONT-END: https://github.com/johnnyofoco/frontLachonete.git 
2.Baixe ou clone o repositório BACK-END: https://github.com/johnnyofoco/apiLanchonete.git
Obs: Para clonar é necessário ter instalado o git em seu sistema operacional
     Em seguida crie um diretório
     Depois acesse o diretório via terminal de comando
     Digite o comando: git clone https://github.com/johnnyofoco/frontLachonete.git , e depois digite: git clone https://github.com/johnnyofoco/apiLanchonete.git
3.Com o NODEJS devidamente instalado, acesse via terminal o diretório BACK-END, e execute o comando: npm run dev para inicializar o servidor da API
4.Para testar, abra o navegador e digite na url: http://localhost:3000/api
5.Estando tudo ok, acesse o diretório FRONT-END, e abra o arquivo index.html