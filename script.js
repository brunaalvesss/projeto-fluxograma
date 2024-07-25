const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Atualmente, muitos jovens não possum o hábito da leitura devido a desintresse, falta de incentivo, etc. Porém nos dias de hoje há uma variedade de gêneros literários e conteúdos exclusivamente pensados para esse público como os conhecidos famosos do tiktok. Você possuí o hábito de ler livros? ",
        alternativas: [
            {
                texto: "Sim, tenho o costume de ler.",
                afirmacao: "É muito bom ter esse costume, a leitura é muito importante."
            },
            {
                texto: "Não possuo o costume de ler.",
                afirmacao: "Que pena não ter o hábito, ele auxilia muito o desenvolvimento humano. "
            }
        ]
    },
    {
        enunciado: "Seja com leitura ou até mesmo com séries e filmes, existem diversos gêneros e estilos. Com que tipo de tema você mais se identifica ou costuma consumir?",
        alternativas: [
            {
                texto: "Suspense, terror, fantasia, ação, entre outros.",
                afirmacao: "Os gêneros que você escolheu são muito interessantes!"
            },
            {
                texto: "Romance, drama, fantasia, comédia, entre outros.",
                afirmacao: "Os gêneros que você escolheu são muito interessantes!"
            }
        ]
    },
    {
        enunciado: "Além de encontrar algo que você goste, a constância desse hábito também é algo muito importante para ser contínuo. Com que frequência você costuma ler?",
        alternativas: [
            {
                texto: "Mais de 3 vezes na semana.",
                afirmacao: "Está no caminho certo com o seu ritmo de leitura!"
            },
            {
                texto: "Menos de 2 vezes na semana.",
                afirmacao: "Você pode melhorar seu ritmo de leitura!"
            }
        ]
    },
    {
        enunciado: "Caso você possua baixa frequência ou não tenha o hábito, por quais motivos isso acontece?",
        alternativas: [
            {
                texto: "Não sinto vontade de ler.",
                afirmacao: "Quem sabe ainda não tenha encontrado algum gênero que te interessa e te incentive a ler?"
            },
            {
                texto: "Não tenho tempo livre ou recursos",
                afirmacao: "È uma pena que te falta tempo, os ebooks podem ser uma boa alternativa."
            }
        ]
    },
    {
        enunciado: "E para finalizar, de que modo você enxerga o costume da leitura, acha que é algo importante para a sociedade? ",
        alternativas: [
            {
                texto: "Acho um hábito importante pois participa e auxilia o conhecimento da pessoas.",
                afirmacao: "È um bom ponto de vista ver a leitura como um hábito importante!"
            },
            {
                texto: "É um hábito bobo, como um hobbie.",
                afirmacao: "Entendo que pense que ler é algo bobo, mas talvez seja bom repensar."
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
    caixaPerguntas.textContent = "Resultados sobre o seu hábito...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();