[Leia-me (em português ptBR)](#-portfólio-dinâmico)

[TLDR; go to step-by-step](#-complete-setup-steps)

# 🚀 Dynamic Portfolio & CV Template

So I'm writing this README as a last step on the development of this side project of mine that started as just a _"I'm a web developer, I need to create a portfolio or something of my own, showcase what I can do"_ and such.

It has been postponed for quite some time, but here it is! The idea was to expand it in a way it could be reused. Follow along in this file to understand the concept and how it came to be. Later on, I'll post a video/tutorial on how to set it up on YouTube and attach the link here as well (as I don't like to read, and most people are like me!).

---

## 💡 About The Project

Basically, this is a portfolio website that you can fork on GitHub and make your own—managing all your personal info securely through **Repository Secrets** (environment variables containing your personal details, basic info, etc.).

### Key Highlights:

- **CI/CD Magic:** Implemented with Continuous Integration via GitHub Actions. Every Pull Request automatically triggers an action that builds and deploys the app—pretty neat stuff!
- **Tech Stack Note:** Sorry for using React Router! It wasn't strictly necessary for a portfolio, but I was exploring the tool since I had never used it professionally before. No major complaints on my end, at least not for a regular client-side SPA.

---

## 📹 Video Tutorial

> 📌 _A video/tutorial on how to set this up will be posted on YouTube and linked here soon!_

---

## 📋 Complete Setup Steps

Sorry for too much info earlier, here are the steps:

1. **Fork and Rename the Repository:**
   - Fork the repo first: [https://github.com/michelbaratella/michelbaratella.github.io](https://github.com/michelbaratella/michelbaratella.github.io)
   - _(Don't have a GitHub account yet? Create one—it's easy and free!)_
   - Rename the repo following the pattern: `<your_github_username>.github.io`
   - This helps GitHub understand you want to use it as a GitHub Pages app. Learn more on the [GitHub Pages Documentation](https://docs.github.com/pt/pages).

2. **Configure Repository Secrets:**
   - After cloning/forking, go to **Settings** > **Secrets and variables** > **Actions** on your repo.
   - Click the **"New repository secret"** button and create each secret using these **exact** names (_don't use different names!!!_):
     - `VITE_NAME`
     - `VITE_EMAIL`
     - `VITE_GITHUB`
     - `VITE_LINKEDIN`
     - `VITE_PHONE`
     - `VITE_WHATSAPP`
   - Example text area values:
     ```text
     VITE_NAME="Michel Baratella"
     VITE_PHONE=5519992310077
     VITE_WHATSAPP="Olá, tudo bem? Gostaria de conversar com você."
     VITE_EMAIL="baratella@yahoo.com"
     VITE_LINKEDIN="[https://www.linkedin.com/in/michelbaratella/](https://www.linkedin.com/in/michelbaratella/)"
     VITE_GITHUB="[https://github.com/michelbaratella/](https://github.com/michelbaratella/)"
     ```

3. **Prepare Your CV Markdown Files:**
   - That's it? No, but we're almost there! Now's the tricky part: this app was made using my CV in Markdown format, which is the same format as this file you're reading, so it has some special styling applied to it.
   - Here's what I did to create the Markdown file of my CV:
     1. Update your LinkedIn profile.
     2. Download a PDF copy of it for your profile page (there's a 3 dots options).
     3. Use whatever AI tool you prefer (I used [Gemini](https://gemini.google.com/app)).
     4. Add a prompt like: _"Transform this CV PDF to markdown format as the template attached"_ and attach the PDF and the markdown template.md file
     5. Make sure it follows the same format as my example Markdown file: `app/assets/template.md`.
   - Now don't forget to generate a copy of the Markdown content in **PT-BR** as well! The app supports English and Portuguese (BR).
   - Just update the content of the `app/assets/curriculum.md` and `app/assets/curriculum-br.md` files with your Markdown info, and boom, you're all set.

4. **Deploy Your Site:**
   - Now you can create a Pull Request to merge your updates on the repo, OR you can just trigger the action under `/actions/workflows/static.yml` if you've already updated the `main` branch directly.
   - This will trigger the deployment and set up the Pages app online, that's it!

---

Hope it helps in any way, shape, or form. **Peace!** ✌️

[Read me (english)](#-dynamic-portfolio--cv-template)

[TLDR; Ir para o Passo-a-passo](#-passo-a-passo-de-setup)

# 🚀 Portfólio Dinâmico

Então, estou escrevendo este README como o último passo no desenvolvimento deste meu projeto pessoal, que começou apenas como um _"Sou desenvolvedor web, preciso criar um portfólio ou algo meu, mostrar o que sei fazer"_ e coisas do tipo.

Ele foi adiado por bastante tempo, mas aqui está! A ideia era expandi-lo de uma forma que pudesse ser reutilizado. Siga este arquivo para entender o conceito e como ele surgiu. Mais para frente, postarei um vídeo/tutorial no YouTube sobre como configurá-lo e anexarei o link aqui também (já que não gosto de ler, e a maioria das pessoas é como eu!).

---

## 💡 Sobre o projeto

Basicamente, este é um site de portfólio que você pode fazer um fork no GitHub e torná-lo seu — gerenciando todas as suas informações pessoais de forma segura através dos **Repository Secrets** (variáveis de ambiente contendo seus dados pessoais, informações básicas, etc.).

### Pontos chave:

- **Magia do CI/CD:** Implementado com Integração Contínua via GitHub Actions. Cada Pull Request aciona automaticamente uma action que compila e faz o deploy do app — bem legal!
- **Nota sobre a Tech Stack:** Desculpe por usar o React Router! Não era estritamente necessário para um portfólio, mas eu estava explorando a ferramenta, pois nunca a tinha usado profissionalmente antes. Sem grandes reclamações da minha parte, pelo menos não para uma SPA comum no lado do cliente.

---

## 📹 Tutorial

> 📌 _Um vídeo/tutorial sobre como configurar isso será postado no YouTube e linkado aqui em breve!_

---

## 📋 Passo-a-passo de setup

Desculpe pelo excesso de informações antes, aqui estão os passos:

1. **Faça o Fork e Renomeie o Repositório:**
   - Primeiro, faça o fork do repositório: [https://github.com/michelbaratella/michelbaratella.github.io](https://github.com/michelbaratella/michelbaratella.github.io)
   - _(Ainda não tem uma conta no GitHub? Crie uma — é fácil e grátis!)_
   - Renomeie o repositório seguindo o padrão: `<seu_usuario_do_github>.github.io`
   - Isso ajuda o GitHub a entender que você deseja usá-lo como um aplicativo do GitHub Pages. Saiba mais na [Documentação do GitHub Pages](https://docs.github.com/pt/pages).

2. **Configure os Repository Secrets:**
   - Após clonar/fazer o fork, vá em **Settings** > **Secrets and variables** > **Actions** no seu repositório.
   - Clique no botão **"New repository secret"** e crie cada secret usando **exatamente** estes nomes (_não use nomes diferentes!!!_):
     - `VITE_NAME`
     - `VITE_EMAIL`
     - `VITE_GITHUB`
     - `VITE_LINKEDIN`
     - `VITE_PHONE`
     - `VITE_WHATSAPP`
   - Exemplo de valores para a área de texto:
     ```text
     VITE_NAME="Michel Baratella"
     VITE_PHONE=5519992310077
     VITE_WHATSAPP="Olá, tudo bem? Gostaria de conversar com você."
     VITE_EMAIL="baratella@yahoo.com"
     VITE_LINKEDIN="[https://www.linkedin.com/in/michelbaratella/](https://www.linkedin.com/in/michelbaratella/)"
     VITE_GITHUB="[https://github.com/michelbaratella/](https://github.com/michelbaratella/)"
     ```

3. **Prepare os Arquivos Markdown do seu Currículo:**
   - É só isso? Não, mas estamos quase lá! Agora vem a parte complicada: este app foi feito usando meu currículo no formato Markdown, que é o mesmo formato deste arquivo que você está lendo, por isso ele tem uma estilização especial aplicada.
   - Aqui está o que eu fiz para criar o arquivo Markdown do meu currículo:
     1. Atualize seu perfil do LinkedIn.
     2. Baixe uma cópia em PDF dele pela sua página de perfil (há uma opção nos 3 pontinhos).
     3. Use a ferramenta de IA que preferir (eu usei o [Gemini](https://gemini.google.com/app)).
     4. Adicione um comando (prompt) como: _"Transforme este PDF de currículo para o formato markdown conforme o modelo anexo"_ e anexe o PDF e o arquivo template.md do markdown.
     5. Certifique-se de que ele siga o mesmo formato do meu arquivo Markdown de exemplo: `app/assets/template.md`.
   - Agora não se esqueça de gerar uma cópia do conteúdo em Markdown em **PT-BR** também! O app suporta inglês e português (BR).
   - Basta atualizar o conteúdo dos arquivos `app/assets/curriculum.md` and `app/assets/curriculum-br.md` com as suas informações em Markdown, e pronto, você está configurado.

4. **Faça o Deploy do seu Site:**
   - Agora você pode criar um Pull Request para mesclar (merge) suas atualizações no repositório, OU pode apenas acionar a action em `/actions/workflows/static.yml` se tiver atualizado a branch `main` diretamente.
   - Isso vai disparar o deploy e colocar o app do Pages online, e é isso!

---

Espero que ajude de alguma forma. **Paz!** ✌️
