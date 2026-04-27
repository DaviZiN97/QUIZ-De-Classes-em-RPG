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
      "Você é um Mago, consegue sentir mana e aprender magia porém não consegue aprender combates corpo-a-corpo"
    ),   
    guerreiro: new Classes(
      "Guerreio",
      "Você é um Guerreiro, consegue aprender combates corpo-a-corpo mas não consegue sentir mana e aprender magia"
    ),
    assasino: new Classes(
      "Assasino",
      "Você é um assasino, focado em combates corpo-a-corpo furtivos"
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
  pergunta: "1. Como se sente sobre religião?",
  opcoes: [
    {texto: "Não me importo.", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Sou religioso(a), mas não tenho costume de ir para igrejas", pontos: {}}, 
    {texto: "Sou muito religioso(a), já sonhei em ser um papa", pontos: {}}, 
    {texto: "Sou um fanático religioso(a), abomino aqueles que não tem fé", pontos: {}}, 
  ]
},

{
  pergunta: "2. Gosta de Artes Marciais?",
  opcoes: [
    {texto: "Não me importo", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Gosto, porém não costumo praticar", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Costumo praticarr", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Sou um(a) Mestre Kung fu", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}}
    
  ]
},

{
  pergunta: "3. Gosta de criaturas? (normais e místicas)",
  opcoes: [
    {texto: "Odeio todos os tipos de criaturas", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Não tenho nada contra", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Gosto, mas não ligo muito", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Gosto muito a ponto de morrer por um gatinho", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}}
    
  ]
},

{
  pergunta: "4. O que acha de guerreiros que utilizam armas? Como Cavaleiros ou Bárbaros" ,
  opcoes: [
    {texto: "Não me importo", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Acho legal, mas bem longe de mim", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Acho bem legal, seria divertido balançar uma espada ocasionalmente", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "É claro, eu seria o melhor guerriro(a) de toda terra", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}}
    
  ]
},

{
  pergunta: "5. Qual a sua opinião sobre magia?",
  opcoes: [
    {texto: "Não me importo", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "São só truques de ilusão e mentalismo", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Magia? Sério? Existe mesmo? Eu sabia! Sempre quis ser um mago de fogo", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: "Eu seria o maior mago do continente, pode me perguntar o que quiser sobre magia", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}}
    
  ]
},

{
  pergunta: "6. ",
  opcoes: [
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}}
  ]
},

{
  pergunta: "7. ",
  opcoes: [
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}}
    
  ]
},

{
  pergunta: "8. ",
  opcoes: [
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}}
    
  ]
},

{
  pergunta: "9. ",
  opcoes: [
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}}
    
  ]
},

{
  pergunta: "10. ",
  opcoes: [
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}},
    {texto: ".", pontos: {mago: 1, guerreiro: 1, assasino: 1, domador: 1, santo: 1, paladino: 1, artistaMarcial: 1,reiDoCombate:1,sabio:1,guerreiroMagico:1,magoDeCombate:1,invocadorDivino:1,invocador:1,caçador:1,necromante:1}}
    
  ]
}
]





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
      // pergunta.textContent = this.perguntas[this.questaoAtual].pergunta

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
      resultadoClasse.textContent = melhorClasse.nome;

      const resultadoDescricao = document.getElementById("descricao-classe")
      resultadoDescricao.textContent = melhorClasse.descricao;

      document.getElementById("container-perguntas").style.display = "none"
      document.getElementById("resultado-classe").style.display = "block"
    };
};

const quiz = new Quiz();

quiz.mostrarPergunta();

document.getElementById("proxima-pergunta").addEventListener("click",() =>{
  quiz.proximaPergunta();
});
      


// PARTE ESTÉTICA

function animarTexto(elemento, texto){

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

  i++

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


























// const perguntas = [
//   {
//     texto: "Como você age diante de um problema difícil?",
//     opcoes: [
//       {
//         texto: "Enfrento diretamente",
//         pontos: { personagemA: 3, personagemB: 1 }
//       },
//       {
//         texto: "Analiso com calma antes de agir",
//         pontos: { personagemB: 3, personagemC: 1 }
//       },
//       {
//         texto: "Peço ajuda para outras pessoas",
//         pontos: { personagemC: 3, personagemA: 1 }
//       },
//       {
//         texto: "Tento evitar conflito",
//         pontos: { personagemD: 3, personagemB: 1 }
//       }
//     ]
//   },
//   {
//     texto: "Qual dessas qualidades combina mais com você?",
//     opcoes: [
//       {
//         texto: "Coragem",
//         pontos: { personagemA: 3 }
//       },
//       {
//         texto: "Sabedoria",
//         pontos: { personagemB: 3 }
//       },
//       {
//         texto: "Empatia",
//         pontos: { personagemC: 3 }
//       },
//       {
//         texto: "Mistério",
//         pontos: { personagemD: 3 }
//       }
//     ]
//   }
// ];

// const pontuacao = {
//   personagemA: 0,
//   personagemB: 0,
//   personagemC: 0,
//   personagemD: 0
// };

// const quiz = document.getElementById("quiz");
// const btnFinalizar = document.getElementById("btnFinalizar");
// const resultado = document.getElementById("resultado");

// perguntas.forEach((pergunta, indicePergunta) => {
//   const divPergunta = document.createElement("div");

//   divPergunta.innerHTML = `<h3>${pergunta.texto}</h3>`;

//   pergunta.opcoes.forEach((opcao, indiceOpcao) => {
//     const label = document.createElement("label");

//     label.innerHTML = `
//       <input 
//         type="radio" 
//         name="pergunta${indicePergunta}" 
//         value="${indiceOpcao}"
//       >
//       ${opcao.texto}
//     `;

//     divPergunta.appendChild(label);
//     divPergunta.appendChild(document.createElement("br"));
//   });

//   quiz.appendChild(divPergunta);
// });

// btnFinalizar.addEventListener("click", () => {
//   // Zera a pontuação antes de calcular
//   for (let personagem in pontuacao) {
//     pontuacao[personagem] = 0;
//   }

//   perguntas.forEach((pergunta, indicePergunta) => {
//     const respostaMarcada = document.querySelector(
//       `input[name="pergunta${indicePergunta}"]:checked`
//     );

//     if (respostaMarcada) {
//       const indiceOpcao = respostaMarcada.value;
//       const pontosDaOpcao = pergunta.opcoes[indiceOpcao].pontos;

//       for (let personagem in pontosDaOpcao) {
//         pontuacao[personagem] += pontosDaOpcao[personagem];
//       }
//     }
//   });

//   let personagemVencedor = "";
//   let maiorPontuacao = 0;

//   for (let personagem in pontuacao) {
//     if (pontuacao[personagem] > maiorPontuacao) {
//       maiorPontuacao = pontuacao[personagem];
//       personagemVencedor = personagem;
//     }
//   }

//   resultado.textContent = `Seu resultado é: ${personagemVencedor}`;
// });

//teste

// Adiciona as alterações ~ git add .

// Salva as alterações no pc ~ git commit -m "mensagem"

// Se quiser mandar pro github ~ git push