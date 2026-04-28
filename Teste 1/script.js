class Personagem {
  constructor(nome, descricao, imagem) {
    this.nome = nome;
    this.descricao = descricao;
    this.imagem = imagem;
    this.pontuacao = 0;
  }

  adicionarPontos(pontos) {
    this.pontuacao += pontos;
  }

  resetarPontuacao() {
    this.pontuacao = 0;
  }
}

class Questionario {
  constructor(personagens, perguntas) {
    this.personagens = personagens;
    this.perguntas = perguntas;
    this.perguntaAtual = 0;
  }

  iniciar() {
    document.getElementById("telaInicial").style.display = "none";
    document.getElementById("telaQuestionario").style.display = "block";
    this.mostrarPergunta();
  }

  mostrarPergunta() {
    const pergunta = this.perguntas[this.perguntaAtual];

    document.getElementById("textoPergunta").textContent = pergunta.texto;
    document.getElementById("progresso").textContent =
      `Pergunta ${this.perguntaAtual + 1} de ${this.perguntas.length}`;

    const areaOpcoes = document.getElementById("opcoes");
    areaOpcoes.innerHTML = "";

    pergunta.opcoes.forEach((opcao) => {
      const botao = document.createElement("button");
      botao.className = "opcao";
      botao.textContent = opcao.texto;

      botao.addEventListener("click", () => {
        this.registrarResposta(opcao.pontos);
      });

      areaOpcoes.appendChild(botao);
    });
  }

  registrarResposta(pontos) {
    for (let nomePersonagem in pontos) {
      this.personagens[nomePersonagem].adicionarPontos(pontos[nomePersonagem]);
    }

    this.perguntaAtual++;

    if (this.perguntaAtual < this.perguntas.length) {
      this.mostrarPergunta();
    } else {
      this.mostrarResultado();
    }
  }

  mostrarResultado() {
    document.getElementById("telaQuestionario").style.display = "none";
    document.getElementById("telaResultado").style.display = "block";

    let vencedor = null;

    for (let nome in this.personagens) {
      const personagem = this.personagens[nome];

      if (vencedor === null || personagem.pontuacao > vencedor.pontuacao) {
        vencedor = personagem;
      }
    }

    document.getElementById("nomeResultado").textContent = vencedor.nome;
    document.getElementById("descricaoResultado").textContent = vencedor.descricao;
    document.getElementById("pontuacaoResultado").textContent =
      `Pontuação obtida: ${vencedor.pontuacao} pontos`;
    document.getElementById("imagemResultado").src = vencedor.imagem;
  }

  reiniciar() {
    this.perguntaAtual = 0;

    for (let nome in this.personagens) {
      this.personagens[nome].resetarPontuacao();
    }

    document.getElementById("telaResultado").style.display = "none";
    document.getElementById("telaInicial").style.display = "block";
  }
}

const personagens = {
  kael: new Personagem(
    "Kael, o Guardião Solar",
    "Você é corajoso, protetor e age com determinação.",
    "imagens/kael.png"
  ),

  lyra: new Personagem(
    "Lyra, a Maga das Estrelas",
    "Você é criativo, inteligente e sensível.",
    "imagens/lyra.png"
  ),

  thorn: new Personagem(
    "Thorn, o Andarilho das Sombras",
    "Você é estratégico, reservado e independente.",
    "imagens/thorn.png"
  ),

  mira: new Personagem(
    "Mira, a Curandeira da Floresta",
    "Você é empático, calmo e cuidadoso.",
    "imagens/mira.png"
  )
};

const perguntas = [
  {
    texto: "1. Diante de um perigo, o que você faz?",
    opcoes: [
      { texto: "Enfrento o problema diretamente.", pontos: { kael: 3, lyra: 1, thorn: 1, mira: 2 } },
      { texto: "Analiso antes de agir.", pontos: { kael: 1, lyra: 3, thorn: 2, mira: 1 } },
      { texto: "Procuro uma forma discreta de resolver.", pontos: { kael: 1, lyra: 2, thorn: 3, mira: 1 } },
      { texto: "Tento proteger e acalmar todos.", pontos: { kael: 2, lyra: 1, thorn: 1, mira: 3 } }
    ]
  },

  {
    texto: "2. Qual lugar mais combina com você?",
    opcoes: [
      { texto: "Um castelo iluminado pelo sol.", pontos: { kael: 3, lyra: 1, thorn: 1, mira: 2 } },
      { texto: "Uma torre cheia de livros mágicos.", pontos: { kael: 1, lyra: 3, thorn: 2, mira: 1 } },
      { texto: "Uma cidade antiga cheia de segredos.", pontos: { kael: 1, lyra: 2, thorn: 3, mira: 1 } },
      { texto: "Uma floresta tranquila e viva.", pontos: { kael: 1, lyra: 1, thorn: 2, mira: 3 } }
    ]
  }

  // Você pode continuar adicionando as outras perguntas aqui
];

const questionario = new Questionario(personagens, perguntas);

document.getElementById("btnIniciar").addEventListener("click", () => {
  questionario.iniciar();
});

document.getElementById("btnReiniciar").addEventListener("click", () => {
  questionario.reiniciar();
});