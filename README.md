# Ponto de Bordar - Website Institucional

Website institucional para a empresa Ponto de Bordar, localizada em Feira de Santana, BA.

## Estrutura do Projeto

```
PontoDeBordarInsticucional/
├── index.html
├── styles.css
└── images/
    ├── hero.jpg
    ├── about.jpg
    └── portfolio/
```

## Características

- Design responsivo
- Interface moderna e clean
- Otimizado para SEO
- Formulário de contato integrado com Netlify Forms
- Seções: Início, Sobre, Serviços, Portfólio e Contato

## Deploy no Netlify

1. Faça um fork deste repositório para sua conta do GitHub
2. Acesse [netlify.com](https://www.netlify.com/) e faça login
3. Clique em "New site from Git"
4. Selecione o repositório
5. Configure as seguintes opções:
   - Build command: (deixe em branco)
   - Publish directory: (deixe em branco)
6. Clique em "Deploy site"

## Desenvolvimento Local

Para desenvolvimento local, você pode usar qualquer servidor web local. Uma opção simples é usar o Python:

```bash
python -m http.server 8000
```

Ou usar a extensão Live Server do VS Code.

## Personalização

- Altere as cores no arquivo `styles.css` modificando as variáveis CSS no seletor `:root`
- Substitua as imagens na pasta `images/` mantendo os mesmos nomes de arquivo
- Atualize as informações de contato no arquivo `index.html`

## Licença

MIT
