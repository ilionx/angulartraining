// 1. We hebben een functie om een favoriete kleur te kiezen. Pas hieronder het type "Color" zodanig aan dat alleen de waarden 'red',
//    'orange' en 'blue' geaccepteerde waarden zijn.

type Color = string;

function chooseFavoriteColor(color: Color): void {
}

// 2. Door de aanpassing in opdracht 1 compileert de onderstaande code niet meer. Gebruik "as const" om de code weer te laten compileren.

const user = {
  name: 'Willem Alexander',
  favoriteColor: 'orange'
};

chooseFavoriteColor(user.favoriteColor);
