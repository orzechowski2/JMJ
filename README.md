# JMJ
# 🌍 Lixo no Interior: Um Problema Invisível, Consequências Reais

![Banner do Projeto](assets/banner-lixo-interior.jpg)

[![Status](https://img.shields.io/badge/status-Ativo-brightgreen)](https://github.com/seu-usuario/lixo-no-interior)
[![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-blue)](LICENSE)
[![Feito com](https://img.shields.io/badge/HTML5-CSS3-orange)]()

> **"O lixo que some dos olhos nunca some do planeta. Ele volta no lençol freático, na saúde da família e no futuro das crianças."**

---

## 📖 Índice

- [Visão Geral do Projeto](#-visão-geral-do-projeto)
- [O Problema Real](#-o-problema-real)
- [Objetivos](#-objetivos)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar Localmente](#-como-executar-localmente)
- [Funcionalidades Detalhadas](#-funcionalidades-detalhadas)
- [Capturas de Tela](#-capturas-de-tela)
- [Como Contribuir](#-como-contribuir)
- [Depoimentos Reais](#-depoimentos-reais)
- [Métricas de Impacto](#-métricas-de-impacto)
- [Roadmap do Projeto](#-roadmap-do-projeto)
- [Equipe](#-equipe)
- [Licença](#-licença)
- [Agradecimentos](#-agradecimentos)

---

## 🎯 Visão Geral do Projeto

**Lixo no Interior** é uma plataforma digital desenvolvida para dar visibilidade a uma crise silenciosa: a ausência total ou parcial de coleta de resíduos sólidos em municípios de pequeno porte, distritos rurais e comunidades agrícolas do Brasil.

Segundo dados do **Sistema Nacional de Informações sobre Saneamento (SNIS 2023)**:
- Mais de **35% dos municípios brasileiros com menos de 20 mil habitantes** não possuem coleta regular de lixo.
- Cerca de **12 milhões de pessoas** vivem em áreas rurais sem qualquer tipo de serviço de coleta.

Este projeto não é apenas um site — é um **instrumento de advocacy, educação ambiental e mobilização comunitária**.

---

## ⚠️ O Problema Real

| Problema | Impacto no Interior | Consequência Direta |
|----------|---------------------|---------------------|
| Falta de coleta semanal | Acúmulo de lixo em terrenos, estradas e margens de rios | Contaminação do solo e da água |
| Inexistência de aterros sanitários | Queima caseira de resíduos | Doenças respiratórias (crianças e idosos) |
| Nenhuma política de reciclagem | Separação manual sem equipamento | Risco à saúde dos catadores informais |
| Isolamento geográfico | Custo alto para levar lixo até cidades vizinhas | Abandono do serviço público |

> 💔 **História real**: Em Unaí (MG), comunidades rurais chegam a queimar 70% do lixo doméstico nos fundos de quintal. A fumaça preta contém dioxinas, furanos e metais pesados.

---

## 🎯 Objetivos

### 🟢 Objetivo Geral
Conscientizar e fornecer ferramentas práticas para moradores do interior lidarem com resíduos sólidos na ausência de coleta pública.

### 🔵 Objetivos Específicos

1. **Educação Ambiental**  
   - Explicar os tipos de resíduos e seus tempos de decomposição.
   - Mostrar alternativas viáveis: compostagem, incineração controlada, enterro seletivo.

2. **Mobilização Comunitária**  
   - Fornecer modelos de ofícios para cobrar prefeitura.
   - Listar contatos úteis: secretarias de meio ambiente, ministério público, IBAMA.

3. **Engenharia de Baixo Custo**  
   - Guia ilustrado para construir uma composteira caseira com pneus velhos.
   - Como construir um coletor de óleo de cozinha reutilizando garrafas PET.

4. **Dados Abertos**  
   - Mapa colaborativo de pontos críticos de lixo (versão futura).
   - Formulário para cidadãos reportarem ausência de coleta.

---

## 🏗️ Estrutura do Repositório

Abaixo está a árvore completa de arquivos, seguindo rigorosamente as **boas práticas de mercado**:

```bash
lixo-no-interior/
│
├── index.html                      # Página principal (acesso direto)
│
├── css/
│   ├── style.css                   # Estilos globais e responsividade
│   └── reset.css                   # Normalização entre navegadores
│
├── js/
│   ├── script.js                   # Lógica principal da calculadora de resíduos
│   ├── mapa.js                     # Integração com Leaflet/OpenStreetMap (futuro)
│   └── form-handler.js             # Validação e envio de denúncias
│
├── assets/                         # Recursos estáticos
│   ├── images/
│   │   ├── banner.jpg
│   │   ├── icon-lixo.png
│   │   ├── infografico-decomposicao.svg
│   │   ├── composteira-guide.webp
│   │   └── favicon.ico
│   ├── icons/
│   │   ├── reciclagem.svg
│   │   ├── alerta.svg
│   │   └── comunidade.svg
│   └── documents/
│       ├── modelo-oficio-prefeitura.pdf
│       └── guia-compostagem-rapida.pdf
│
├── pages/                          # Páginas secundárias (organização interna)
│   ├── compostagem.html
│   ├── denuncie-aqui.html
│   └── sobre-nos.html
│
├── README.md                       # Você está aqui!
├── LICENSE                         # MIT License
├── CONTRIBUTING.md                 # Guia para contribuidores
├── CODE_OF_CONDUCT.md              # Código de conduta
└── .gitignore                      # Arquivos ignorados pelo Git