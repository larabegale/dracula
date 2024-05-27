const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Você trabalha como carteiro, e recebe o trabalho de entregar cartas à um senhor da Transilvânia. Você aceita?",
        alternativas: [
            "Não, eu prezo pela minha vida",
            "Sim, preciso de dinheiro"
        ]
    },
    {
        enunciado: "Você prepara sua mala para uma longa viagem. No caminho para Transilvânia, várias pessoas com caras bizarras passam por você, além de animais selvagens que você nunca viu antes. Você continua?",
        alternativas: [
            "Sim, amo pets.",
            "Não. Fico assustado e desisto, volto pra casa."
        ]
    },
    {
        enunciado: "Continuando a sua viagem, você se encontra na frente da mansão do Conde Dracula, uma mansão extremamente ominosa. Você desiste do trabalho?",
        alternativas: [
            "Não desisto, gostei desse estilo gótico.",
            "Desisto, ouço os sinais de que isso não vai dar certo."
        ]
    },
    {
        enunciado: "O seu cliente, Drácula, te cumprimenta quando você bate nas grandes portas da mansão. Ele é um homem alto, pálido de forma anormal, além de ter presas desumanamente afiadas, junto de um odor pútrido. Você se arrepende de ter aceitado esse trabalho?",
        alternativas: [
            "Claro que não, estou ansiosíssimo para trabalhar com o querido Draculinha.",
            "Pego um alho da minha bolsa, ataco ele e saio correndo."
        ]
    }
]; 
