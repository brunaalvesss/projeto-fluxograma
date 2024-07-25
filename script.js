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
                afirmacao: "É muito bom ter esse costume! A leitura é muito importante."
            },
            {
                texto: "Não possuo o costume de ler.",
                afirmacao: "Que pena! O hábito de ler auxilia muito o desenvolvimento humano. "
            }
        ]
    },
    {
        enunciado: "Seja com leitura ou até mesmo com séries e filmes, existem diversos gêneros e estilos. Com que tipo de tema você mais se identifica ou costuma consumir?",
        alternativas: [
            {
                texto: "Suspense, terror, fantasia, ação, entre outros.",
                afirmacao: "São gêneros muito interessantes!."
            },
            {
                texto: "Romance, drama, fantasia, comédia, entre outros.",
                afirmacao: "São gêneros muito interessantes!."
            }
        ]
    },
    {
        enunciado: "Além de encontrar algo que você goste, a constância desse hábito também é algo muito importante para ser contínuo. Com que frequência você costuma ler?",
        alternativas: [
            {
                texto: "Mais de 3 vezes na semana.",
                afirmacao: "Está no caminho certo!"
            },
            {
                texto: "Menos de 2 vezes na semana.",
                afirmacao: "Pode melhorar!"
            }
        ]
    },
    {
        enunciado: "Caso ",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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