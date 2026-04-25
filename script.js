const perguntas = [
  {
    texto: "Como você age diante de um problema difícil?",
    opcoes: [
      {
        texto: "Enfrento diretamente",
        pontos: { personagemA: 3, personagemB: 1 }
      },
      {
        texto: "Analiso com calma antes de agir",
        pontos: { personagemB: 3, personagemC: 1 }
      },
      {
        texto: "Peço ajuda para outras pessoas",
        pontos: { personagemC: 3, personagemA: 1 }
      },
      {
        texto: "Tento evitar conflito",
        pontos: { personagemD: 3, personagemB: 1 }
      }
    ]
  },
  {
    texto: "Qual dessas qualidades combina mais com você?",
    opcoes: [
      {
        texto: "Coragem",
        pontos: { personagemA: 3 }
      },
      {
        texto: "Sabedoria",
        pontos: { personagemB: 3 }
      },
      {
        texto: "Empatia",
        pontos: { personagemC: 3 }
      },
      {
        texto: "Mistério",
        pontos: { personagemD: 3 }
      }
    ]
  }
];

const pontuacao = {
  personagemA: 0,
  personagemB: 0,
  personagemC: 0,
  personagemD: 0
};

const quiz = document.getElementById("quiz");
const btnFinalizar = document.getElementById("btnFinalizar");
const resultado = document.getElementById("resultado");

perguntas.forEach((pergunta, indicePergunta) => {
  const divPergunta = document.createElement("div");

  divPergunta.innerHTML = `<h3>${pergunta.texto}</h3>`;

  pergunta.opcoes.forEach((opcao, indiceOpcao) => {
    const label = document.createElement("label");

    label.innerHTML = `
      <input 
        type="radio" 
        name="pergunta${indicePergunta}" 
        value="${indiceOpcao}"
      >
      ${opcao.texto}
    `;

    divPergunta.appendChild(label);
    divPergunta.appendChild(document.createElement("br"));
  });

  quiz.appendChild(divPergunta);
});

btnFinalizar.addEventListener("click", () => {
  // Zera a pontuação antes de calcular
  for (let personagem in pontuacao) {
    pontuacao[personagem] = 0;
  }

  perguntas.forEach((pergunta, indicePergunta) => {
    const respostaMarcada = document.querySelector(
      `input[name="pergunta${indicePergunta}"]:checked`
    );

    if (respostaMarcada) {
      const indiceOpcao = respostaMarcada.value;
      const pontosDaOpcao = pergunta.opcoes[indiceOpcao].pontos;

      for (let personagem in pontosDaOpcao) {
        pontuacao[personagem] += pontosDaOpcao[personagem];
      }
    }
  });

  let personagemVencedor = "";
  let maiorPontuacao = 0;

  for (let personagem in pontuacao) {
    if (pontuacao[personagem] > maiorPontuacao) {
      maiorPontuacao = pontuacao[personagem];
      personagemVencedor = personagem;
    }
  }

  resultado.textContent = `Seu resultado é: ${personagemVencedor}`;
});

//teste