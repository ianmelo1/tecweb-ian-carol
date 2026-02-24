---
name: "Prática 02"
about: "Template para criar a issue da pratica02"
title: "[Prática 02] – Layout Responsivo com CSS/Flexbox"
labels: ["pratica02"]
assignees: ''
---

## 📌 Contexto
Após estruturar semanticamente a dashboard do portal **Aluno Online**, a próxima etapa é organizar visualmente os elementos da página.

A equipe precisa transformar a estrutura HTML em um layout organizado, utilizando **CSS e Flexbox** para posicionamento e alinhamento dos elementos.

Seu desafio é aplicar conceitos de layout moderno para estruturar a interface da dashboard.

## 🎯 Objetivo
Nesta prática, você irá:
- Aplicar layout com CSS e Flexbox para estruturar visualmente a Dashboard do portal Aluno Online;
- Adaptar o layout para ser responsivo a diferentes telas usando `@media`.

## 🖼️ Referência visual
Utilize as imagens abaixo como guia para a estilização da página:

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
git checkout -b feature/pratica02
```

**2️⃣ Implementação do código**
1. No painel esquerdo do VSCode, localize a pasta `aluno-online-vanilla`.
2. Desenvolva os estilos no arquivo `style.css`.
3. Defina as variáveis CSS `--cor-fundo: #e9e9e9` e `--cor-texto: #303030`.
4. Defina a tipografia padrão:
- `font-family: system-ui, Avenir, Helvetica, Arial, sans-serif`;
- `font-weight: 400` ;
- `line-height: 1.6`.
5. Aplique o reset básico de `margin`, `padding` e `box-sizing`.
6. Utilize Flexbox na área principal da página para:
- Organizar a *sidebar* e o conteúdo principal lado a lado;
- Definir largura fixa para a *sidebar*;
- Permitir que a área principal ocupe o espaço restante.
7. Utilize Flexbox no *topbar* para:
- Alinhar horizontalmente a saudação e o avatar;
- Distribuir os elementos com `space-between`.
8. Organize os blocos verticalmente com espaçamento adequado.
9. Estilize os *cards* com borda, espaçamento interno e cantos arredondados.
10. Utilize `@media` para ajustar a disposição dos elementos para telas menores que `768 px`:
- Reorganize o layout principal para melhor visualização em dispositivos móveis;
- Avalie a necessidade de alterar a direção do `flex` (`row` -> `column`);
- Garanta que os elementos não fiquem comprimidos ou sobrepostos.

**3️⃣ Execução e teste**
1. No terminal, acesse a pasta do projeto.
```bash
cd praticas/aluno-online-vanilla
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
5. Redimensione a janela do navegador para verificar o comportamento responsivo da interface.

4️⃣ **Checklist antes de enviar**
- [ ] Branch criada a partir da develop
- [ ] Estilização implementada com CSS e Flexbox
- [ ] Elementos posicionados corretamente em diversas dimensões de tela
- [ ] Variáveis CSS utilizadas nos estilos
- [ ] Projeto executa sem erros

## 📤 Entrega da Prática
1. Abra outro terminal do VSCode (isso garante que você esteja na pasta raiz).
2. Adicione os arquivos ao controle de versão e grave suas alterações. Substitua `#ID` pelo número da Issue (ex.: 10).
```bash
git add .
git commit -m "feat: conclui pratica02. Fecha #ID"
```
3. Envie suas alterações para o GitHub.
```bash
git push origin feature/pratica02
```
4. No GitHub, clique no botão **Compare & pull request**.
5. **Importante**: Certifique-se de que o **base repository** é o seu repositório e a **base branch** é a `develop`.
6. Na descrição, escreva: `Nesta prática, implementei o layout responsivo da dashboard utilizando CSS e Flexbox. Fecha #ID`. Substitua `#ID` pelo número da Issue.
7. Clique em **Create pull request** e envie o link do PR na plataforma de ensino para o professor.

⚠️ **Erros comuns**
- Criar a branch de trabalho a partir de uma branch diferente da indicada na atividade;
- Esquecer de iniciar o Docker;
- Enviar PR para a branch errada.