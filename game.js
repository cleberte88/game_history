const story = [
  {
    text: "Francisco passeava num castelo, quando avistou Clara, a quem se perguntava quem era. Despretensiosamente, um tempo depois, ambos se reencontraram e começaram a conversar sobre assuntos em comum.",
    puzzle: "Qual é o resultado de 7 + 5?",
    solution: "12",
  },
  {
    text: "Era estranho para Francisco, pois Clara lhe chamava atenção de uma forma diferente, mas as vidas continuaram até que Clara foi submetida a sair do castelo, onde Francisco sempre esteve presente.",
    puzzle: "Qual é a palavra: _l_a?",
    solution: "Clara",
  },
  {
    text: "Francisco e Clara se desencontraram por muitas vezes, passaram tempo sem se falar e levaram uma vida normalmente. Certa vez, havia no castelo um pergaminho, deixado por Clara, e Francisco a mandou uma carta perguntando se podia lê-lo, e ela permitiu, porém era apenas um pretexto para saber como ela estava, mediante tanto tempo sem se falarem.",
    puzzle: "Resolva o enigma: 15 ÷ 3?",
    solution: "5",
  },
  {
    text: "Certo dia, Francisco resolveu sair do castelo e caminhar um pouco, apreciando a vista da floresta e repensando seus feitos. Quando se deparou com um monumento celestial, um lugar onde ele não sabia decifrar os motivos e nem os porquês, mas sentira muito feliz e o fazia relembrar sua história. Ele decidiu perguntar a Clara sobre esse lugar.",
    puzzle: "Complete a sequência: 2, 4, 6, _?",
    solution: "8",
  },
  {
    text: "Clara, demonstra tamanha felicidade em ver que Francisco havia encontrado aquilo que deveria ter conhecido a tanto tempo, e tomada de euforia, se dispõe a ensiná-lo e ajudá-lo a entender o que estava acontecendo, a como se portar em todas as coisas e caminhar nesse novo momento de dúvidas.",
    puzzle: "Resolva: 9 + 8?",
    solution: "17",
  },
  {
    text: "Francisco finalmente se encontra com Clara, e de cara já tem tantas perguntas, e ela prontamente se dispõe a ajudá-lo. Ela aponta um mistério a ele, o mostra algo que está além do natural, e ele fica se perguntando como pode ser verdade tudo isso.",
    puzzle: "Resolva: Qual é a raiz quadrada de 16?",
    solution: "4",
  },
  {
    text: "Francisco empenhou-se em aprender cada vez mais sobre todo esse novo mundo, Clara o observava de longe e o ajudava a guiar, para que ele não saísse desse caminho. Ali Francisco e Clara iniciavam uma amizade, de uma forma muito diferente.",
    puzzle: "Descubra: F_a_cis_o?",
    solution: "Francisco",
  },
  {
    text: "Francisco e Clara começaram então a se encontrar nesse monumento, começaram a vivenciar juntos essa prática celeste de amor e reciprocidade.",
    puzzle: "Qual é o próximo número: 10, 20, 30, _?",
    solution: "40",
  },
  {
    text: "Francisco e Clara então, começaram a se encontrar nesse monumento todos os dias, chegaram a partilhar de outros lugares, como grandes teatros virtuais, tabernas onde podiam se alimentar e conversar sobre Ele e o cotidiano.",
    puzzle: "Qual é a palavra embaralhada: EUJSS?",
    solution: "JESUS",
  },
  {
    text: "Francisco e Clara, até os dias atuais, permanecem conectados por meio dEle, com uma amizade que jamais havia de ser imaginada desde que Francisco viu seus olhos pela primeira vez. Francisco deixou o castelo, assumiu uma nova vida, onde é entregue à vontade dAquele que tudo É. Clara, continua a mesma moça, doce, meiga, linda e devota como sempre foi. Ainda costumam visitar o melhor lugar para ambos (o Tabernáculo), ainda saem e partilham sobre a vida, e continuam a se conhecerem e firmarem sua amizade. Porém, há um ponto que Francisco talvez nunca tenha ressaltado: Clara não sabe disso, mas ele sempre teve suas dúvidas. Na primeira vez que foi a esse monumento, sozinho, Francisco disse a Ele que, se um dia fosse conhecer alguém, gostaria que essa pessoa tivesse características específicas. O que Francisco não sabia era que Clara parecia ter sido desenhada com base em todas essas características: nos mínimos detalhes, desde o sorriso até o jeito doce, desde a beleza exterior até a interior, desde um simples abraço até um 'te amo'. Francisco vivenciou com Clara toda a sua mudança, e dentro de sua santa amizade, ele se apaixonou por ela. Mas Clara, talvez, não faça ideia disso. Ainda assim, Francisco sempre ressaltou que a vontade dEle deve prevalecer, e que a santidade reine acima de tudo. Afinal, o desfecho dessa história, ninguém viu, ninguém ouviu, mas saberão..."
    ,
    puzzle: "Digite o nome do sentimento que une Francisco e Clara.",
    solution: "amor",
  },
];

let currentStep = 0;

const storyCard = document.getElementById("story-card");
const storyText = document.getElementById("story-text");
const continueButton = document.getElementById("continue-button");

const puzzleContainer = document.getElementById("puzzle-container");
const puzzleText = document.getElementById("puzzle-text");
const puzzleArea = document.getElementById("puzzle-area");

function showStory() {
  storyCard.classList.remove("hidden");
  puzzleContainer.classList.add("hidden");
  storyText.innerText = story[currentStep].text;
}

function showPuzzle() {
  storyCard.classList.add("hidden");
  puzzleContainer.classList.remove("hidden");
  puzzleText.innerText = story[currentStep].puzzle;
  puzzleArea.innerHTML = `
    <input id="puzzle-input" type="text" placeholder="Digite sua resposta">
    <button id="submit-button">Enviar</button>
  `;
  document.getElementById("submit-button").addEventListener("click", checkPuzzle);
}

function checkPuzzle() {
  const userAnswer = document.getElementById("puzzle-input").value.trim();
  if (userAnswer.toLowerCase() === story[currentStep].solution.toLowerCase()) {
    if (currentStep === story.length - 1) {
      showFinalCard(); // Exibe o card especial no final
    } else {
      alert("Correto! Você desbloqueou a próxima parte da história.");
      currentStep++;
      showStory();
    }
  } else {
    alert("Resposta incorreta! Tente novamente.");
  }
}

function showFinalCard() {
  const finalCard = `
    <div id="final-card">
      <h2>O Desfecho</h2>
      <p>${story[currentStep].text}</p>
      <p style="font-style: italic; margin-top: 20px;">
        "A vontade dEle seja feita, e que a santidade reine acima de tudo."
      </p>
    </div>
  `;
  document.body.innerHTML = finalCard;
  document.body.style.background = "linear-gradient(to bottom, #ffc3a0, #ff6f61)";
}

continueButton.addEventListener("click", showPuzzle);

showStory();

function showFinalCard() {
  const finalCard = `
    <div id="final-card">
      <h2>O Desfecho</h2>
      <p>${story[currentStep].text}</p>
      <p style="font-style: italic; margin-top: 20px;">
        "A vontade dEle seja feita, e que a santidade reine acima de tudo."
      </p>
      <button id="show-verse" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px;">Ver 1 Coríntios 13:4-7</button>
    </div>
  `;
  document.body.innerHTML = finalCard;
  document.body.style.background = "linear-gradient(to bottom, #ffc3a0, #ff6f61)";
  
  // Adiciona evento para mostrar o versículo
  document.getElementById("show-verse").addEventListener("click", showBiblePassage);
}

function showFinalCard() {
  const finalCard = `
    <div id="final-card" style="text-align: center; padding: 20px; background: #ffe5d9; border-radius: 15px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); margin: 50px auto; max-width: 600px;">
      <h2 style="color: #ff6f61;">O Desfecho</h2>
      <p style="font-size: 18px; line-height: 1.6; color: #333;">
        ${story[currentStep].text}
      </p>
      <p style="font-style: italic; color: #555; margin-top: 20px;">
        "A vontade dEle seja feita, e que a santidade reine acima de tudo."
      </p>
      <button id="show-verse" style="margin-top: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Ver 1 Coríntios 13:4-7
      </button>
      <div id="bible-passage" style="display: none; margin-top: 20px; padding: 15px; background: #fff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h3 style="color: #ff6f61; margin-bottom: 10px;">1 Coríntios 13:4-7</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          O amor é paciente, o amor é bondoso. Não tem inveja. O amor não é orgulhoso. Não é arrogante. Nem escandaloso.
          Não busca os próprios interesses, não se irrita, não guarda rancor. Não se alegra com a injustiça, mas se rejubila com a verdade.
          Tudo desculpa, tudo crê, tudo espera, tudo suporta.
        </p>
      </div>
    </div>
  `;
  document.body.innerHTML = finalCard;
  document.body.style.background = "linear-gradient(to bottom, #ffc3a0, #ff6f61)";

  // Adiciona evento para mostrar o versículo
  document.getElementById("show-verse").addEventListener("click", () => {
    const biblePassage = document.getElementById("bible-passage");
    biblePassage.style.display = "block"; // Mostra o versículo
    document.getElementById("show-verse").style.display = "none"; // Esconde o botão após exibir
  });
}
