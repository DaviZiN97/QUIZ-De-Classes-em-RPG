class Classes {

    constructor(nome, descricao){
      this.nome = nome;
      this.descricao = descricao;
      this.pontuacao = 0;
    }

    adicionarPontos(pontos){
      this.pontuacao += pontos;
    }

    resetarPontuacao()
    {
      this.pontuacao = 0;
    }

}


const personagens = {

    mago: new Classes(
      "Mago",
      "Você consegue sentir mana e aprender magia porém não consegue aprender combates corpo-a-corpo"
    ),   
    guerreiro: new Classes(
      "Guerreio",
      "Você consegue aprender combates corpo-a-corpo mas não consegue sentir mana e aprender magia"
    ),
    assasino: new Classes(
      "Assasino",
      "Consegue masterizar combates corpo-a-corpo furtivos, espreitando pela sombra"
    ),   
    santo: new Classes(
      "Santo",
      "Um ser capaz de purificar a maldade do mundo e seguir a vontade de um deus"
    ),   
    paladino: new Classes(
      "Paladino",
      "Um seguidor de um determinado Deus que irá passar sua fé para outros"
    ),
    artistaMarcial: new Classes(
      "Artista Marcial",
      "Dedicado a aprender formas de combate apropriadamente"
    ),
    reiDoCombate: new Classes(
      "Rei do Combate",
      "Com o potencial de ser o melhor no combate, tendo a maior proeficiência de todas "
    ),
    sabio: new Classes(
      "Sábio",
      "Você é capaz de se aprofundar em magias a ponto de ter quase todo o conhecimento do universo"
    ),
    guerreiroMagico: new Classes(
      "Guerreiro Mágico",
      "Você é capaz de utilizar a magia para fortalecer seus ataques corpo-a-corpo"
    ),
    magoDeCombate: new Classes(
      "Mago de Combate",
      "Você possui a destreza de um combatente, enquanto faz uso de magias simples e práticas a distância para sobrepor seu oponentes"
    ),
    invocadorDivino: new Classes(
      "Invocador Divino",
      "Você foi abençoado o suficiente para ser um invocador divino, sendo capaz de invocar até mesmo deuses para seu comando, além de utilizar magias divinas"
    ),
    invocador: new Classes(
     "Invocador",
     "Você é capaz de invocar seres inferiores para o combate." 
    ),
    caçador: new Classes(
      "Caçador",
      "Você consegue rastrear sua presa, criar armadilhas, e matar com uma precisão inigualável utilizando armas de caça como o arco, adaga e balestra."
    ),
    necromante: new Classes(
      "Necromante",
      "Você tem a capacidade de levantar os mortos através da necromancia e utilizar magia proibida."
    )
       
}



const Perguntas = [{
  tipo:"classe",
  pergunta: "1. Como se sente sobre religião?",
  opcoes: [
    {texto: "Não me importo.", pontos: { mago: 5, guerreiro: 3, assassino: 3, domador: 5, santo: 1, paladino: 1, artistaMarcial: 5, reiDoCombate: 5, sabio:2, guerreiroMagico:3, magoDeCombate:2, invocadorDivino:1, invocador:2, caçador:2, necromante:5}},
    {texto: "Sou religioso(a), mas não tenho costume de ir para igrejas", pontos: {mago: 2,guerreiro: 2, assassino: 1,domador: 1, santo: 2,paladino: 3, artistaMarcial: 1,reiDoCombate:1, sabio:1, guerreiroMagico:2, magoDeCombate:2,invocadorDivino:2, invocador:1, caçador:1, necromante:0}}, 
    {texto: "Sou muito religioso(a), já sonhei em ser um papa", pontos: {mago: 1, guerreiro: 1, assassino: 1, domador: 1, santo: 4, paladino: 4, artistaMarcial: 1, reiDoCombate:1, sabio:1, guerreiroMagico:1, magoDeCombate:1, invocadorDivino:3, invocador:1, caçador:1, necromante:0}}, 
    {texto: "Sou um fanático religioso(a), abomino aqueles que não tem fé", pontos: {mago: 1, guerreiro: 1, assassino: 1, domador: 1, santo: 5, paladino: 5, artistaMarcial: 1, reiDoCombate:1, sabio:1, guerreiroMagico:1, magoDeCombate:1, invocadorDivino: 5, invocador:1,caçador:1, necromante:0}}, 
  ]
},

{
  tipo:"classe",
  pergunta: "2. Gosta de Artes Marciais?",
  opcoes: [
    {texto: "Não me importo", pontos: {mago: 5, guerreiro: 1, assassino: 1, domador: 5, santo: 4, paladino: 2, artistaMarcial: 1, reiDoCombate: 1, sabio: 4, guerreiroMagico: 1, magoDeCombate: 2, invocadorDivino: 3, invocador: 4, caçador: 1, necromante: 5}},
    {texto: "Gosto, porém não costumo praticar", pontos: {mago: 2, guerreiro: 2, assassino: 4, domador: 2, santo: 1, paladino: 2, artistaMarcial: 2, reiDoCombate: 2, sabio: 1, guerreiroMagico: 2, magoDeCombate: 2, invocadorDivino: 5, invocador: 5, caçador:2, necromante:0}},
    {texto: "Costumo praticar", pontos: {mago: 1, guerreiro: 4, assassino: 3, domador: 1, santo: 1, paladino: 3, artistaMarcial: 4, reiDoCombate: 1, sabio: 1, guerreiroMagico: 3, magoDeCombate: 2, invocadorDivino: 1, invocador: 1, caçador: 2, necromante:0}},
    {texto: "Sou um(a) Mestre Kung fu", pontos: {mago: 1, guerreiro: 1, assassino: 1, domador: 1, santo: 1, paladino: 5, artistaMarcial: 5, reiDoCombate: 4, sabio: 1, guerreiroMagico: 3, magoDeCombate: 2, invocadorDivino: 1, invocador: 1, caçador: 2, necromante: 0}}
    
  ]
},

{
  tipo:"classe",
  pergunta: "3. Gosta de criaturas? (normais ou místicas)",
  opcoes: [
    {texto: "Odeio todos os tipos de criaturas", pontos: {mago: 1, guerreiro: 1, assassino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:5}},
    {texto: "Não tenho nada contra", pontos: {mago: 5, guerreiro: 3, assassino: 3, domador: 1, santo: 3, paladino: 3, artistaMarcial: 5, reiDoCombate: 5, sabio: 3, guerreiroMagico: 3, magoDeCombate: 3, invocadorDivino: 2, invocador: 2, caçador:5, necromante:0}},
    {texto: "Gosto, mas não ligo muito", pontos: {mago: 2, guerreiro: 2, assassino: 2, domador: 3, santo: 2, paladino: 5, artistaMarcial: 1, reiDoCombate: 1, sabio: 2, guerreiroMagico: 3, magoDeCombate: 2, invocadorDivino: 4, invocador: 4, caçador:2, necromante:0}},
    {texto: "Gosto muito a ponto de morrer por um gatinho", pontos: {mago: 1, guerreiro: 1, assassino: 1, domador: 5, santo: 4, paladino: 2, artistaMarcial: 1, reiDoCombate: 1, sabio: 1, guerreiroMagico: 1, magoDeCombate: 1, invocadorDivino: 5, invocador:3, caçador:1, necromante:0}}
    
  ]
},

{
  tipo:"classe",
  pergunta: "4. O que acha de guerreiros que utilizam armas? Como Cavaleiros ou Bárbaros" ,
  opcoes: [
    {texto: "Não me importo", pontos: {mago: 5, guerreiro: 1, assassino: 1, domador: 5, santo: 4, paladino: 2, artistaMarcial: 5, reiDoCombate: 1, sabio: 5, guerreiroMagico: 1, magoDeCombate: 3, invocadorDivino: 5, invocador: 5, caçador: 1, necromante:5}},
    {texto: "Acho legal, mas bem longe de mim", pontos: {mago: 3, guerreiro: 2, assassino: 2, domador: 3, santo: 4, paladino: 2, artistaMarcial: 1, reiDoCombate: 2, sabio: 2, guerreiroMagico: 2, magoDeCombate: 4, invocadorDivino: 1, invocador: 1, caçador: 2,necromante:0}},
    {texto: "Acho bem legal, seria divertido balançar uma espada ocasionalmente", pontos: {mago: 1, guerreiro: 5, assassino: 4, domador: 1, santo: 1, paladino: 5, artistaMarcial: 1, reiDoCombate: 4, sabio: 1, guerreiroMagico: 4, magoDeCombate: 2, invocadorDivino: 5, invocador: 1, caçador: 3, necromante:0}},
    {texto: "É claro, eu seria o melhor guerreiro(a) de toda terra", pontos: {mago: 1, guerreiro: 3, assassino: 3, domador: 1, santo: 1, paladino: 4, artistaMarcial: 1, reiDoCombate: 5, sabio: 1, guerreiroMagico: 4, magoDeCombate: 1, invocadorDivino: 1, invocador: 1, caçador: 2, necromante:0}}
    
  ]
},

{
  tipo:"classe",
  pergunta: "5. Qual a sua opinião sobre magia?",
  opcoes: [
    {texto: "Não me importo", pontos: {mago: 1, guerreiro: 5, assassino: 3, domador: 5, santo: 3, paladino: 1, artistaMarcial: 5, reiDoCombate: 5, sabio: 1, guerreiroMagico: 2, magoDeCombate: 1, invocadorDivino: 1, invocador: 1, caçador: 4, necromante:5}},
    {texto: "São só truques de ilusão e mentalismo", pontos: {mago: 2, guerreiro: 4, assassino: 3, domador: 1, santo: 1, paladino: 4, artistaMarcial: 3, reiDoCombate: 3, sabio: 1, guerreiroMagico: 2, magoDeCombate: 1, invocadorDivino: 1, invocador: 1, caçador: 3, necromante:0}},
    {texto: "Magia? Sério? Existe mesmo? Eu sabia! Sempre quis ser um mago de fogo", pontos: {mago: 5, guerreiro: 1, assassino: 1, domador: 1, santo: 2, paladino: 5, artistaMarcial: 1, reiDoCombate: 1, sabio: 4, guerreiroMagico: 5, magoDeCombate: 4, invocadorDivino: 5, invocador: 5, caçador: 1, necromante: 0}},
    {texto: "Eu seria o maior mago do continente, pode me perguntar o que quiser sobre magia", pontos: {mago: 4, guerreiro: 1, assassino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1, reiDoCombate: 1, sabio: 7, guerreiroMagico: 3, magoDeCombate: 5, invocadorDivino: 3, invocador: 3, caçador: 1, necromante: 0}}
    
  ]
},

{
  tipo:"subclasse",
  pergunta: "6. O que você acha de explorar lugares perigosos e masmorras?",
  opcoes: [
    {texto: "Não me importo, contanto que me paguem", pontos: {explorador: 3, ferreiro: 2, armoreiro: 2, artesão: 2, cozinheiro: 2}},
    {texto: "Tenho um pouco de medo, mas talvez eu vá se alguém for na minha frente", pontos: {explorador: 2, ferreiro: 1, armoreiro: 1, artesão: 3, cozinheiro: 3}},
    {texto: "Eu amo a adrenalina de descobrir um lugar onde ninguém pisa há muito tempo", pontos: {explorador: 3, ferreiro: 2, armoreiro: 2, artesão: 1, cozinheiro: 1}},
    {texto: "Eu nasci na escuridão! Masmorras são meu playground e armadilhas são apenas brinquedos para mim", pontos: {explorador: 5, ferreiro: 1, armoreiro: 1, artesão: 3, cozinheiro: 1}}
  ]
},

{
  tipo:"subclasse",
  pergunta: "7. E o que você pensa sobre a forja e o trabalho com metais?",
  opcoes: [
    {texto: "Já usei um martelo antes, mas não acho que eu seja bom", pontos: {explorador: 2, ferreiro: 1, armoreiro: 1, artesão: 2, cozinheiro: 2}},
    {texto: "Adoro pegar em uma espada, mas apenas na dos outros", pontos: {explorador: 1, ferreiro: 3, armoreiro: 2, artesão: 1, cozinheiro: 2}},
    {texto: "Já fui assistente de forja, há algo terapêutico em bater em metal quente, sinto falta de vez em quando", pontos: {explorador: 1, ferreiro: 3, armoreiro: 3, artesão: 1, cozinheiro: 2}},
    {texto: "Eu sou a reencarnação do maior ferreiro que já existiu na face da terra (sabe lá se isso é útil num mundo de fantasia)", pontos: {explorador: 1, ferreiro: 5, armoreiro: 3, artesão: 1, cozinheiro: 1}}
  ]
},

{
  tipo:"subclasse",
  pergunta: "8. E sobre a arte de se proteger e fabricar armaduras?",
  opcoes: [
    {texto: "Não me importo, contanto que eu não morra", pontos: {explorador: 3, ferreiro: 1, armoreiro: 1, artesão: 2, cozinheiro: 2}},
    {texto: "Acho importante, mas não sei nem por onde começar então deixo pra quem sabe", pontos: {explorador: 3, ferreiro: 2, armoreiro: 2, artesão: 2, cozinheiro: 2}},
    {texto: "Eu entendo tudo de armasduras", pontos: {explorador: 1, ferreiro: 3, armoreiro: 3, artesão: 1, cozinheiro: 1}},
    {texto: "Eu sou uma fortaleza ambulante! Duvido me penetrarem", pontos: {explorador: 2, ferreiro: 3, armoreiro: 5, artesão: 1, cozinheiro: 1}}
  ]
},

{
  tipo:"subclasse",
  pergunta: "9. O que você pensa sobre a arte da culinária e banquetes?",
  opcoes: [
    {texto: "Não me importo, como qualquer coisa que tiver na minha frente, passa aqui pra tu ver", pontos: {explorador: 4, ferreiro: 1, armoreiro: 1, artesão: 1, cozinheiro: 1}},
    {texto: "Gosto de uma boa refeição, mas eu sou atrapalhado e prefiro que cozinhem pra mim.", pontos: {explorador: 3, ferreiro: 3, armoreiro: 3, artesão: 1, cozinheiro: 2}},
    {texto: "Meu cozinho todo mundo come", pontos: {explorador: 4, ferreiro: 1, armoreiro: 1, artesão: 1, cozinheiro: 4}},
    {texto: "Meu cozinho é uma experiência transcendental! Todos que comem não conseguem mais parar", pontos: {explorador: 3, ferreiro: 1, armoreiro: 1, artesão: 1, cozinheiro: 5}}
    
  ]
},

{
  tipo:"subclasse",
  pergunta: "10. O que você pensa sobre a criação de objetos e o trabalho manual?",
  opcoes: [
    {texto: "Não me importo, se um objeto cumpre a sua função, tanto faz quem o fez ou como ele é", pontos: {explorador: 3, ferreiro: 4, armoreiro: 4, artesão: 1, cozinheiro: 1}},
    {texto: "Acho legal ter coisas bem feitas, mas prefiro comprar de quem entende do assunto", pontos: {explorador: 2, ferreiro: 1, armoreiro: 1, artesão: 2, cozinheiro: 4}},
    {texto: "Eu amo o processo de transformar matéria bruta em algo útil, passo horas na minha oficina focado nos detalhes", pontos: {explorador: 1, ferreiro: 3, armoreiro: 3, artesão: 4, cozinheiro: 3}},
    {texto: "Minhas mãos são abençoadas! Tudo o que eu toco se transforma em uma obra-prima tão perfeita que reis brigariam para ter um único item meu", pontos: {explorador: 1, ferreiro: 3, armoreiro: 3, artesão: 5, cozinheiro: 3}}
    
  ]
}
]

// emojis das classes

const emojiClasse = {
  "Mago":             "🧙",
  "Guerreio":         "⚔️",
  "Assassino":         "🗡️",
  "Santo":            "✝️",
  "Paladino":         "🛡️",
  "Artista Marcial":  "🥋",
  "Rei do Combate":   "👑",
  "Sábio":            "📖",
  "Guerreiro Mágico": "✨",
  "Mago de Combate":  "🔮",
  "Invocador Divino": "🌟",
  "Invocador":        "🌀",
  "Caçador":          "🏹",
  "Necromante":       "💀",
}


class Quiz {

    constructor() {
      this.perguntas = Perguntas
      this.questaoAtual = 0;
      this.personagens = personagens;
    };


    mostrarPergunta(){
      const contagemQuestoes = document.getElementById("contagem_questoes")
      contagemQuestoes.textContent = this.questaoAtual + 1

      const pergunta = document.getElementById("pergunta")
      animarTexto(pergunta, this.perguntas[this.questaoAtual].pergunta)

      for(let j = 1; j <= 4; j++){
        document.getElementById("opcao-"+ j).classList.remove("selecionado");
      }
      
      setTimeout(() => {
        for(let i = 0; i<4 ; i++){

          const botao = document.getElementById("opcao-"+ (i+1))
          animarTexto(botao, this.perguntas[this.questaoAtual].opcoes[i].texto)
          botao.classList.remove("fade-in")
          void botao.offsetWidth
          botao.classList.add("fade-in")
          
          
          botao.textContent = this.perguntas[this.questaoAtual].opcoes[i].texto
          
          botao.onclick = () =>{
            
            const pontos = this.perguntas[this.questaoAtual].opcoes[i].pontos;
            
            for(let j = 1; j <= 4; j++){
            document.getElementById("opcao-"+ j).classList.remove("selecionado");
            }
            botao.classList.add("selecionado");

            for(let classe in pontos){
              this.personagens[classe].adicionarPontos(pontos[classe]);
            }


          }
        }
      },500)
    }

    proximaPergunta(){
      this.questaoAtual++;

      if(this.questaoAtual< this.perguntas.length){
        this.mostrarPergunta();
      }
      else{
        this.calcularResultado();
      }

    }

    calcularResultado(){
      let melhorClasse = null;
      let maiorPontuacao = -1;

      for(let classe in this.personagens){
        if(this.personagens[classe].pontuacao > maiorPontuacao){
          maiorPontuacao = this.personagens[classe].pontuacao;
          melhorClasse = this.personagens[classe]
        }
      }

      const resultadoClasse = document.getElementById("tipo-classe")
      resultadoClasse.textContent = (emojiClasse[melhorClasse.nome] || "") + " " + melhorClasse.nome;

      const resultadoDescricao = document.getElementById("descricao-classe")
      resultadoDescricao.textContent = melhorClasse.descricao;

      // top 3

      const ranking = Object.values(this.personagens).filter(c => c.pontuacao > 0).sort((a, b) => b.pontuacao - a.pontuacao);
      const top5 = ranking.slice(0, 5);
      const container = document.getElementById("pontuacao-resultado");
      container.innerHTML = "";

      const titulo = document.createElement("p");
      titulo.textContent = "PONTUAÇÃO FINAL";
      titulo.className = "ranking-titulo";
      container.appendChild(titulo);

      top5.forEach((classe, index) => {
        const larguraBarra = maiorPontuacao > 0 ? (classe.pontuacao / maiorPontuacao) * 100 : 0;

        const linha = document.createElement("div");
        linha.className = "ranking-linha" + (index === 0 ? " ranking-vencedor" : "");

        linha.innerHTML = `
          <span class="ranking-emoji">${emojiClasse[classe.nome] || "⚔️"}</span>
          <span class="ranking-nome">${classe.nome}</span>
          <div class="ranking-barra-fundo">
            <div class="ranking-barra-preenchida" style="width: ${larguraBarra}%"></div>
          </div>
          <span class="ranking-pts">${classe.pontuacao}</span>
        `;

        container.appendChild(linha);
      });

      document.getElementById("container-perguntas").style.display = "none"
      document.getElementById("resultado-classe").style.display = "block"
    };

};

const quiz = new Quiz();

// inicio

document.getElementById("btn-iniciar").addEventListener("click", () => {
  document.getElementById("tela-boas-vindas").style.display = "none";
  document.getElementById("container-perguntas").style.display = "block";
  document.querySelector("header p").style.opacity = 1
  quiz.mostrarPergunta();
});

document.getElementById("proxima-pergunta").addEventListener("click",() =>{
  quiz.proximaPergunta();
});

// reiniciar

document.getElementById("btn-reiniciar").addEventListener("click", () => {
  quiz.questaoAtual = 0;

  for(let classe in quiz.personagens){
    quiz.personagens[classe].resetarPontuacao();
  }

  document.getElementById("tipo-classe").textContent = "";
  document.getElementById("descricao-classe").textContent = "";
  document.getElementById("pontuacao-resultado").innerHTML = "";

  document.getElementById("resultado-classe").style.display = "none";
  document.getElementById("container-perguntas").style.display = "block";

  quiz.mostrarPergunta();
});



const paragrafos = document.querySelectorAll("#descricao-universo p")

paragrafos.forEach((paragrafo, index) => {
  
  setTimeout(() => {

    paragrafo.classList.add("fade-in")
    paragrafo.style.opacity = 1;

  }, index * 800)
})
const tituloBoasVindasAviso = document.querySelector("#texto-boas-vindas-titulo")
animarTexto(tituloBoasVindasAviso, tituloBoasVindasAviso.textContent, 2)

const h1 = document.querySelector("header h1")
const span = document.querySelector("header span")
animarTexto(h1, h1.textContent, 2)
animarTexto(span, span.textContent,2)


// PARTE ESTÉTICA

function animarTexto(elemento, texto, velocidade = 1){

let i = 0;


const intervalo = setInterval(() => {

  let textoAnimado = texto.slice(0, i)
  for( let j= i; j< texto.length; j++)
    {
      textoAnimado += Math.random() > 0.5 ? "1" : "0"
    }
  elemento.textContent = textoAnimado;

  if(i >= texto.length)
    {
      clearInterval(intervalo)
    }

  i += velocidade

}, 50)

}


/*
mago
guerreiro
assasino
domador

SANTO
Paladino
artista marcial
rei do combate
sábio
guerreiro mágico
mago de combate
invocador divíno
invocador
caçador
necromante


*/