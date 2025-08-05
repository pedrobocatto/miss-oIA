const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector("caixa-peruntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {
        enunciado: "Uma nova aluna chegou na escola, o nome dela era Ana Flávia, Gustavo, deslumbrado com sua beleza, pensou em conversar com ela..."
        alternativas: [
            { 
            texto: "Eae novinha, vem que o pé de meia ta na conta!",
            afirmacao: "afirmação",
            },
            { 
            texto: "Eae gatinha, moro no inês mas tenho um gol daora em!",
            afirmacao: "afirmação",
            },
        ]
    },

    {
        enunciado: "Ana Flávia responde: 'Ai nossa, que horror, sai daqui menino!', Gustavo então responde: "
        alternativas: [
            { 
            texto: "Vai se fuder piranha interesseira, vagabunda!",
            afirmacao: "afirmação",
            },
            { 
            texto: "Pô, é foda... desculpa ai...",
            afirmacao: "afirmação",
            },
        ]
    },

    {
        enunciado: "Gustavo então, de coração partido, triste, cabisbaixo, desanimado, resolve dar em cima da amiga dela, a Nicoly... Gustavo então chega nela e diz: "
        alternativas: [
            { 
            texto: "Oi bb, la em casa em!",
            afirmacao: "afirmação",
            },
            { 
            texto: "Oi, te achei muito bonita, pode me passar seu insta?",
            afirmacao: "afirmação",
            },
        ]
    },

    {
        enunciado: "Nicolly então responde: 'Meu Deus, parece o Sherek, sai daqui menino, se mata! Prefiro o rafarazzu.' Só resta então dois caminhos para o Gustavo... "
        alternativas: [
            { 
            texto: "Gustavo entra em depressão e comete suicídio.",
            afirmacao: "afirmação",
            },
            { 
            texto: "Gustavo aceita seu destino e vira gari.",
            afirmacao: "afirmação",
            },
        ]
    },



let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntas.enunciado;

}

mostraPergunta ();