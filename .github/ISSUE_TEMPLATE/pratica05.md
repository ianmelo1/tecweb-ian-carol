---
name: "Prática 05"
about: "Template para criar a issue da pratica05"
title: "[Prática 05] – Props, Estado e Eventos em React"
labels: ["pratica05"]
assignees: ''
---

## 📌 Contexto
A aplicação React implementada na prática anteior precisa reagir às ações do usuário.

Nesta etapa, você irá implementar a página de **Login** utilizando:
- **Props** para comunicação entre componentes;
- **useState** para controle de dados;
- **Eventos** para capturar interações do usuário.

O foco deixa de ser apenas estrutura e passa a ser **fluxo de dados e controle de estado**.

## 🎯 Objetivo
Nesta prática, você irá:
- Criar componentes reutilizáveis para os campos do formulário;
- Controlar os valores digitados utilizando `useState`;
- Implementar validação de formulário com eventos (`onChange` e `onSubmit`);
- Compreender o fluxo de dados: estado -> props -> interface.

## 🖼️ Referência visual
Utilize como guia:

![Tela de Login](https://raw.githubusercontent.com/profjosereginaldo/tecweb-template/refs/heads/main/assets/login.png)

![Validação de Login](https://raw.githubusercontent.com/profjosereginaldo/tecweb-template/refs/heads/main/assets/validacao.png)

## 📝 Instruções da Atividade
**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Abra um terminal e certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica05
```

**2️⃣ Implementação do código**
1. No painel esquerdo do VSCode, localize a pasta `aluno-online-react`.
2. Desenvolva os componentes solicitados. 
- **InputEmail**: Crie o arquivo `InputEmail.jsx`;
- **InputSenha**: Crie o arquivo `InputSenha.jsx`.
3. Requisitos para os componentes:
- Cada componente deve ser criado como função;
- Cada componente deve ser exportado como `default`.
- Cada componente deve possuir seu próprio arquivo CSS;
- Cada componente deve receber via *props* `value`, `onChange` e mensagem de erro.
4. Desenvolva a página solicitada no arquivo `Login.jsx`. 
- Crie quatro estados usando useState: `email`, `errorEmail`, `senha` e `errorSenha`.
- Passe os valores e funções de atualização para os componentes via *props*.
- Crie um evento `handleSubmit()` para evitar o recarregamento da página, validar os dados do formulário e atualizar os estados de erro.
5. Crie o arquivo `Login.css`.
- Organize os estilos da página de login mantendo coerência visual com as práticas anteriores.
6. Renderize o componente `Login` no arquivo `App.jsx`.

**3️⃣ Execução e teste**
1. No terminal, acesse a pasta do projeto.
```bash
cd praticas/aluno-online-react
```
2. Suba o container e instale as dependências:
```bash
docker compose up -d
docker compose exec app npm install
```
3. Inicie o servidor de desenvolvimento:
```bash
docker compose exec app npm run dev
```
4. Acesse no navegador: `http://localhost:5173`.
5. Realize os testes:
- Submissão com campos vazios;
- Atualização dos valores ao digitar;
- Exibição correta das mensagens de erro;
- Ausência de recarregamento da página;
- Se não há erros no console do navegador.

4️⃣ **Checklist antes de enviar**
- [ ] Branch criada a partir da develop
- [ ] Componentes recebem props corretamente
- [ ] Estados criados com useState
- [ ] Evento onSubmit implementado
- [ ] Validação funcionando
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão e grave suas alterações. Substitua `#ID` pelo número da Issue (ex.: 10).
```bash
git add .
git commit -m "feat: conclui pratica05. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica05
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, implementei props, estado e tratamento de eventos na página de Login utilizando React. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino para o professor.

⚠️ **Erros comuns**
- Criar a branch de trabalho a partir de uma branch diferente da indicada na atividade;
- Criar estado dentro do componente de input sem necessidade;
- Esquecer de passar *props* para o input;
- Não utilizar `event.preventDefault()` no submit;
- Importar componente com caminho incorreto;
- Esquecer de iniciar o Docker;
- Enviar PR para a branch errada.