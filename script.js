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
                afirmacao: "Ana Flávia humilha Gustavo e ele vai embora."
            },
            {
                texto: "Eae gatinha, moro no inês mas tenho um gol daora em!",
                afirmacao: "Ana Flávia se interessa pelo gol e resolve dar uma chance para Gustavo."
            }
        ]
    },
    {
        enunciado: "Gustavo quer chamar Ana Flávia para sair, onde ele vai levar ela?",
        alternativas: [
            {
                texto: "Então, quer ir dar um rolê final de semana no parque aquático?",
                afirmacao: "Ela aceita, porém chegando lá, ela vê o amigo do Gustavo de longe... Pablo... e junto seu shape sarado! Ana Flávia corre para o Pablo e o Gustavo volta triste para sua casa."
            },
            {
                texto: "O que acha de ir fazer trilha na montanha? Tirar umas fotos daoras da paisagem e tals?",
                afirmacao: "Ana Flávia acha a ideia legal e aceita fazer trilha com o Gustavo, no meio da trilha, aparece um URSO feroz, Gustavo com todos os anos de academia salva Ana Flávia, fazendo com que ela se apaixone por ele."
            }
        ]
    },
    {
        enunciado: "Depois de salvar e conquistar Ana Flávia, Gustavo leva ela para a praia, no finalzinho de tarde, e pede ela em namoro, como Gustavo faz isso?",
        alternativas: [
            {
                texto: "Gustavo tira a aliança do bolso, mas fica nervoso pois lembra do seu último fora e se borra inteiro.",
                afirmacao: "Ana Flávia vẽ essa cena e vai embora... PARA SEMPRE!"
            },
            {
                texto: "Gustavo lembra de seus momento de SIGMA, respira fundo como um verdadeiro homem e resolve pedir ela em namoro, como um real cavaleiro.",
                afirmacao: "Ana Flávia aceita, eles se casam, tem 4 filhas e 2 filhos e 1 cachorro e são felizes para sempre."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();