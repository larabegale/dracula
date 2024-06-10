const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Você trabalha como carteiro, e recebe o trabalho de entregar cartas à um senhor da Transilvânia. Você aceita?",
        alternativas: [
        {    
           texto: "Não, eu prezo pela minha vida",
           afirmacao: "afirmação"
        } ,
        {    
            texto: "Sim, preciso de dinheiro",
            afirmacao: "afirmação"
         } ,
        ]
    },

    {
        enunciado: "Você prepara sua mala para uma longa viagem. No caminho para Transilvânia, várias pessoas com caras bizarras passam por você, além de animais selvagens que você nunca viu antes. Você continua?",
        alternativas: [
            {    
                texto: "Sim, amo pets.",
                afirmacao: "afirmação"
             } ,

             {    
                texto: "Não. Fico assustado e desisto, volto pra casa.",
                afirmacao: "afirmação"
             } ,
            
        ]
    },
    {
        enunciado: "Continuando a sua viagem, você se encontra na frente da mansão do Conde Dracula, uma mansão extremamente ominosa. Você desiste do trabalho?",
        alternativas: [
            {    
                texto: "Não desisto, gostei desse estilo gótico.",
                afirmacao: "afirmação"
             } ,

             {    
                texto: "Desisto, vejo os sinais de que isso não vai dar certo.",
                afirmacao: "afirmação"
             } ,
            
        ]
    },
    {
        enunciado: "O seu cliente, Drácula, te cumprimenta quando você bate nas grandes portas da mansão. Ele é um homem alto, pálido de forma anormal, além de ter presas desumanamente afiadas, junto de um odor pútrido. Você se arrepende de ter aceitado esse trabalho?",
        alternativas: [
            {    
                texto: "Claro que não, estou ansiosíssimo para trabalhar com o querido Draculinha.",
                afirmacao: "afirmação"
             } ,

             {    
                texto: "Pego um alho da minha bolsa, ataco ele e saio correndo." ,
                afirmacao: "afirmação"
             } ,
            
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}


function mostraAlternativas() {}


function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }

  mostraPergunta();

