let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Piratas do Caribe: A Maldição do Pérola Negra";
    } else {
      if (idade >= 12) {
        if(gostaDeAventura) {
          return "Jurassic World: O Mundo dos Dinossauros";          
        } else{
         return "Animais Fantásticos e Onde Habitam";
        }
      } else {
        if (gostaDeFantasia) {
          return "Coraline e o Mundo Secreto";
        } else {
          return "Anime: Meu Amigo Totoro";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Alice no País das Maravilhas";
    } else {
      return "Interestelar";
    }
  }
}