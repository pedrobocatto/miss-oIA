const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Uma nova aluna chegou na escola, o nome dela era Ana Flávia, Gustavo, deslumbrado com sua beleza, pensou em conversar com ela...",
        alternativas: [
            {
                texto: "Eae novinha, vem que o pé de meia ta na conta!",
                afirmacao: ""
            },
            {
                texto: "Eae gatinha, moro no inês mas tenho um gol daora em!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Gustavo quer chamar Ana Flávia para sair, onde ele vai levar ela?",
        alternativas: [
            {
                texto: "Então, quer ir dar um rolê final de semana no parque aquático?",
                afirmacao: ""
            },
            {
                texto: "O que acha de ir fazer trilha na montanha? Tirar umas fotos daoras da paisagem e tals?",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Um URSO feroz aparece e Gustavo com todo o poder acumulado no Roblox, coloca a fera para correr e salve sua amada. Depois de salvar e conquistar Ana Flávia, Gustavo leva ela para a praia, no finalzinho de tarde, e pede ela em namoro, como Gustavo faz isso?",
        alternativas: [
            {
                texto: "Gustavo tira a aliança do bolso, mas fica nervoso pois lembra do seu último fora e se borra inteiro.",
                afirmacao: "Ela vai embora... PARA SEMPRE!"
            },
            {
                texto: "Gustavo lembra de seus momento de SIGMA, respira fundo como um verdadeiro homem e resolve pedir ela em namoro, como um real cavaleiro.",
                afirmacao: "Ela aceita, eles e casam, tem 3 filhas e 1 filho e 1 cachorro, e são felizes para sempre."
            }
        ]
    },
        
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();