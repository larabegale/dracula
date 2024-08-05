const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você trabalha como carteiro, e recebe o trabalho de entregar cartas à um senhor da Transilvânia.",
        alternativas: [
        {    
           texto: "Tenho muito medo, mas aceito pelo dinheiro.",
           afirmacao: "Você aceita o trabalho, preocupado com sua vida financeira."
        } ,
        {    
            texto: "Aceito, adoro meu trabalho.",
            afirmacao: "Você aceita o trabalho, totalmente despreocupado."
         } ,
        ]
    },

    {
        enunciado: "Você prepara sua mala para uma longa viagem. No caminho para Transilvânia, várias pessoas com caras bizarras passam por você, além de animais selvagens que você nunca viu antes.",
        alternativas: [
            {    
                texto: "Não tem problema, amo pets.",
                afirmacao: "Sendo apaixonado por pets, não se preocupa com os diversos morcegos no local."
             } ,

             {    
                texto: "Morro de medo, espirro veneno em todos que conseguir.",
                afirmacao: "Por não ter muita afinidade com animais sobrenaturais, você não se dá muito bem com eles."
             }
            
        ]
    },
    {
        enunciado: "Continuando a sua viagem, você se encontra na frente da mansão do Conde Dracula, uma mansão extremamente ominosa.",
        alternativas: [
            {    
                texto: "Não desisto, gostei desse estilo gótico.",
                afirmacao: "Como gótico, você até anota dicas do design da mansão do Conde Drácula."
             } ,

             {    
                texto: "Rezo um ave maria antes de entrar.",
                afirmacao: "Você se prepara mentalmente ao ver a moradia de Dracula, tremendo de medo."
             } ,
            
        ]
    },
    {
        enunciado: "O seu cliente, Drácula, te cumprimenta quando você bate nas grandes portas da mansão. Ele é um homem alto, pálido de forma anormal, além de ter presas desumanamente afiadas, junto de um odor pútrido. Você se arrepende de ter aceitado esse trabalho?",
        alternativas: [
            {    
                texto: "Claro que não, estou ansiosíssimo para trabalhar com o querido Draculinha.",
                afirmacao: "No fim, ao ficar obcecado pelo Dracula, você acaba virando a mais nova Reserva de Sangue dele. Boa sorte! "
             } ,

             {    
                texto: "Pego um alho da minha bolsa, ataco ele e saio correndo." ,
                afirmacao: "No fim, você se arrepende das suas ações idiotas e consegue fugir a tempo. "
             } ,
            
        ]
    }
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


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa;
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
    caixaPerguntas.textContent = "Seu destino...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

  mostraPergunta();

