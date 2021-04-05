// Stel we hebben een object met kleurcodes die we in onze applicatie gebruiken. Er zitten er drie in, maar de lijst zal later nog
// worden uitgebreid.

// 1. Pas hieronder de typedefinitie van ColorCodes dusdanig aan dat het niet alleen de properties "red", "green" en "blue" bevat, maar
//    willekeurige kleuren. Iedere kleur-property heeft wel een string als waarde (bijvoorbeeld 'FF0000').

type ColorCodes = {
  red: string;
  green: string;
  blue: string;
};

// 2. Hieronder is ColorKeys een string literal type van de hardgecodeerde waarden 'red', 'green' en 'blue. Pas deze aan zodanig dat hij
//    keys kan bevatten die toevallig maar in de constante colors zijn gedefinieerd als key. Gebruik daarvoor het keyof en het typeof
//    keyword.

const colors = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  // white: '#FFFFFF',
  // black: '#000000'
};

type ColorKeys = 'red' | 'green' | 'blue';

// 3. Sommige van de kleuren mogen worden gebruikt als kleur voor tekst, maar andere niet. We definiëren hieronder een constante
//    validAsFontColor, die voor elk van de kleuren in colors true of false bevat. Het type Validity bevat nu hardgecodeerd waarden voor
//    red, green en blue. Maak nu van Validity<T> een mapped type, die voor elk van de properties in het type T een waarde true of false
//    bevat.

type Validity<T extends ColorCodes> = {
  red: boolean,
  green: boolean,
  blue: boolean
};

const validAsFontColor: Validity<typeof colors> = {
  red: false,
  green: false,
  blue: true,
  // white: false,
  // black: true
};
