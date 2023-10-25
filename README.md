# Repositório countriesInformation

Este é um repositório de exemplo para um aplicativo Angular chamado "countriesInformation". O aplicativo tem três páginas principais:

## 1. Página de Login

- **Descrição**: A página de login permite que os usuários façam login usando a API do GitHub para autenticação.
- **Recursos**:
  - Formulário de login
  - Autenticação com a API do GitHub
- **Rota**: `/login`

## 2. Página Inicial (/home)

- **Descrição**: A página inicial lista alguns países filtrados por continentes.
- **Recursos**:
  - Lista de países
  - Filtro por continentes
- **Rota**: `/home`

## 3. Página de País Específico

- **Descrição**: A página do país específico exibe informações detalhadas sobre um país selecionado.
- **Recursos**:
  - Detalhes do país (nome, bandeira, população, etc.)
  - Navegação para a página de um país específico
- **Rota**: `/country/:id`

## Como executar o projeto

Para executar este projeto em sua máquina local, siga estas etapas:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/countriesInformation.git

2. Instale as dependências:

   ```bash
    cd countriesInformation
    yarn

3. Rode o projeto

   ```bash
    yarn start

4. Acesse o aplicativo em seu navegador em <http://localhost:4200/>

``Observações:``
Certifique-se de ter o Angular CLI instalado globalmente (npm install -g @angular/cli).
Você deve configurar as credenciais da API do GitHub para a autenticação no aplicativo de login.
Este é um exemplo simples de documentação para um projeto Angular de três páginas. Você pode expandir essa documentação com informações adicionais sobre o aplicativo, suas funcionalidades, configurações de desenvolvimento e muito mais.
