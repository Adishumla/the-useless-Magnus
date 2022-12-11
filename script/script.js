/* actionContainer:na är hållar-elemenet som ska interageras med och manipuleras på sidan. */

const actionContainer = document.querySelector('#action-container-primary');

const secActionContainer = document.querySelector(
  '#action-container-secondary'
);
/* Fält med mindre text */

const actionParagraph = actionContainer.querySelector('p');
actionParagraph.classList.add('positionAbsolute');

/* Fält med större text */

const actionHeading = document.createElement('h2');

/* Min logotyp som är med en lite stund */

const wolfsHead = document.querySelector('#wolfsHead');

const wolfsEyes = wolfsHead.querySelector('#wolfsEyes');

/* Objekt med sökvägar till bilder och ljud */

const uselessResources = {
  images: { prettyWolf: './images/Crimson-Tribal-Wolf.svg' },
  soundEffects: {
    howl: ['./sound_effects/wolf-howl-6310.mp3', 'audio/mpeg'],
    strike: './sound_effects/wolf-howl-6310.mp3',
  },
};

/* uselessCounter används för iterationen för det som kommer att ske på sidan under "PART I". */

let uselessCounter = 0;

/* |--- --- PART I --- ---> */

actionContainer.addEventListener('click', () => {
  /* ----------------------------------------- */

  if (uselessCounter === 0) {
    actionParagraph.textContent = 'Well?';
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 1) {
    actionParagraph.textContent = 'Well???';
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 2) {
    actionHeading.textContent = 'WELL!???';
    actionContainer.replaceChild(actionHeading, actionParagraph);
    actionHeading.classList.add('positionAbsolute');
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 3) {
    actionHeading.classList.toggle('hidden');
    wolfsHead.classList.toggle('hidden');
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 4) {
    wolfsEyes.classList.add('turnDemonRed');
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 5) {
    wolfsHead.classList.add('exitStageLeft');
    wolfsHead.classList.toggle('hidden');

    setTimeout(() => {
      actionContainer.replaceChild(actionParagraph, actionHeading);
    }, 1000);

    actionParagraph.textContent = 'Here again!';
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 6) {
    /* Skickar ut första actioContainer:n från skärmen */
    actionContainer.classList.add('offScreen');
    actionContainer.classList.add('hidden');

    /* Skapar ett bildelement för att ropa in en rätt så enorm svg-fil */

    const prettyWolfImg = document.createElement('img');
    prettyWolfImg.src = uselessResources.images.prettyWolf;
    prettyWolfImg.alt = "Wolf's head created in tribal style";
    prettyWolfImg.classList.add('image');

    secActionContainer.appendChild(prettyWolfImg);

    /* Flyttar in den sekundära actionContainer:n */

    secActionContainer.classList.toggle('onScreen');

    /* Skapar ett ljudelement som spelar upp efter fördröjning */

    const prettyWolfHowl = document.createElement('audio');
    prettyWolfHowl.src = uselessResources.soundEffects.howl[0];
    prettyWolfHowl.type = uselessResources.soundEffects.howl[1];

    prettyWolfHowl.play();

    /* Byter ut texten i H1 för att, varför inte? */

    const uselessMainHeading = document.querySelector('h1');
    uselessMainHeading.textContent = 'AAAOOOOOOOO....!';

    /**/
  } else if (uselessCounter === 7) {
    prettyWolfImg.classList.add('exitStageLeft');
  }

  uselessCounter++;

  console.log(uselessCounter);
});

/* <--- --- PART I: END--- ---| */

/* |--- --- PART II --- ---> */
