import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Hot dog',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sticky-cider-onion-hot-dogs-24168bf.jpg' +
        '?quality=90&webp=true&resize=375,341',
      ingredients: ['butter', 'sausages', 'hot dog buns', '2 tbsp mayonnaise', '1 tbsp olive oil', '2 finely sliced onions']
    },
    {
      id: 'r2',
      title: 'Spaghetti puttanesca',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/puttanesca-cfb4e42.jpg' +
        '?quality=90&webp=true&resize=375,341',
      ingredients: [
        '3 tbsp olive oil',
        '1 onion, finely chopped',
        '2 large garlic cloves, crushed',
        '400g can chopped tomatoes',
        '5 anchovy fillets, finely chopped',
        '120g pitted black olives',
        '2 tbsp capers, drained',
        '300g dried spaghetti',
        '½ small bunch of parsley, finely chopped'
      ]
    }
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): Recipe {
    const foundRecipe = this.recipes.find(recipe => recipe.id === recipeId);
    return {...foundRecipe};
  }
}
