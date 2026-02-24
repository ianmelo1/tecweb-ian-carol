---
name: "Prática 04"
about: "Template para criar a issue da pratica04"
title: "[Prática 04] – Componentes com React"
labels: ["pratica04"]
assignees: ''
---

## 📌 Contexto
Até agora, o portal **Aluno Online** foi desenvolvido utilizando HTML, CSS e JavaScript de forma estática.

Nesta prática, você iniciará a transição para um modelo de desenvolvimento moderno, baseado em **componentização com React**.

O objetivo é reorganizar a interface da dashboard em componentes reutilizáveis, separando responsabilidades e melhorando a estrutura do projeto.

## 🎯 Objetivo
Nesta prática, você irá:
- Transformar o layout estático da dashboard em uma aplicação React;
- Organizar a interface em componentes reutilizáveis;
- Separar estrutura, estilo e organização por responsabilidade;
- Compreender a diferença entre páginas e componentes.

## 🖼️ Referência visual
Utilize como guia:

![Tela de Dashboard para Desktop](https://raw.githubusercontent.com/profjosereginaldo/tecweb-template/refs/heads/main/assets/dashboard-desktop.png)

![Tela de Dashboard para Mobile](https://raw.githubusercontent.com/profjosereginaldo/tecweb-template/refs/heads/main/assets/dashboard-mobile.png)

## 📝 Instruções da Atividade
**1️⃣ Preparação do ambiente**
1. Abra o **Visual Studio Code** na pasta do seu repositório.
2. Abra um terminal e certifique-se de que está na branch `develop`.
```bash
git checkout develop
```
3. Crie e alterne para a branch desta prática.
```bash
git checkout -b feature/pratica04
```

**2️⃣ Implementação do código**
1. No painel esquerdo do VSCode, localize a pasta `aluno-online-react`.
2. Crie uma nova pasta chamada `src/components`.
3. Desenvolva os componentes solicitados. 
- **Sidebar**: Crie o arquivo `Sidebar.jsx`.
- **Topbar**: Crie o arquivo `Topbar.jsx`.
- **DashboardCard**: Crie o arquivo `DashboardCard.jsx`.
4. Requisitos para os compenentes:
- Cada componente deve ser criado como função;
- Cada componente deve ser exportado como `default`.
- Cada componente deve possuir seu próprio arquivo CSS;
- Não há uso de `state` ou eventos nos componentes nesta prática.
5. Crie uma nova pasta chamada `src/pages`.
6. Desenvolva a página solicitada.
- **Dashboard**: Crie o arquivo `Dashboard.jsx`. Nesta página, importe e organize todos os componentes criados.
7. Renderize o componente `Dashboard` no arquivo `App.jsx`.
8. Organize os estilos da seguinte forma:
- **App.css**: Definir `#root` com `display: flex` e `flex: 1`;
- **index.css**: Manter apenas estilos globais (variáveis CSS, tipografia padrão, reset básico, `body` e `main`).

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
5. Verifique:
- Se todos os componentes estão sendo renderizados corretamente;
- Se a organização do layout corresponde à referência visual;
- Se não há erros no console do navegador.

4️⃣ **Checklist antes de enviar**
- [ ] Branch criada a partir da develop
- [ ] Pastas components e pages criadas corretamente
- [ ] Componentes importados e renderizados
- [ ] Cada componente possui seu próprio arquivo CSS
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão e grave suas alterações. Substitua `#ID` pelo número da Issue (ex.: 10).
```bash
git add .
git commit -m "feat: conclui pratica04. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica04
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, reorganizei a dashboard em componentes React, aplicando o conceito de componentização. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino para o professor.

⚠️ **Erros comuns**
- Criar a branch de trabalho a partir de uma branch diferente da indicada na atividade;
- Importar o componente com caminho incorreto;
- Renderizar múltiplos elementos sem um contêiner pai;
- Esquecer de iniciar o Docker;
- Enviar PR para a branch errada.