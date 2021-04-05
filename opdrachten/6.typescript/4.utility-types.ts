// We hebben een TypeScript-interface om recepten vast te leggen:

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  preparationSteps: string[];
}

// 1. De search-functie zoekt een recept op basis van één van de ingevulde velden. De gebruiker mag zelf kiezen welke van de velden hij.
//    invult. Elk van de velden is optioneel. Pas hieronder de function signature van searchRecipe aan zodat de parameter recipe optioneel
//    alle velden van het type Recipe kan bevatten. Maak gebruik van
//    [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html).

function searchRecipe(recipe: Recipe): Recipe[] {
  return [];
}

const recipes = searchRecipe({
  title: 'ei',
  ingredients: ['ei']
});

recipes[0].title = 'ik pas hem stiekem aan!';

// 2. Kun je het return type van searchRecipe dusdanig aanpassen dat de velden van de Recipes niet-veranderbaar zijn? De toekenning aan
//    recipes[0].title moet een compileerfout veroorzaken.

// 3. Het recept-id wordt gegenereerd bij het opslaan. Wanneer je een nieuw recept creëert hoef je deze dus nog niet op te geven. Title,
//    ingredients en preparationSteps zijn wel verplicht. Pas hieronder de function signature van createRecipe dusdanig aan dat de parameter
//    recipe géén id bevat, maar wel de verplichte title, ingredients en preparationSteps. Gebruik hiervoor Omit<>. Kun je hetzelfde ook
//    doen met Pick<>?

function createRecipe(recipe: Recipe): void {
}

createRecipe({
  title: 'Gekookt ei',
  ingredients: ['1 ei'],
  preparationSteps: ['Kook het ei.']
});
