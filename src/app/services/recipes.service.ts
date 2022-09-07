import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {Ingredient} from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  ingredientsToAdd = new EventEmitter<Ingredient[]>();

  private recipes: Recipe[] = [
    new Recipe('Beef with vegetables', 'Good meal!', '../../assets/img/beef.png',
      [new Ingredient('meat', 1), new Ingredient('tomato', 1)]),
    new Recipe('Beef with rice', 'Healthy meal!', '../../assets/img/beef.png',
      [new Ingredient('meat', 1), new Ingredient('cheese', 1)]),
    new Recipe('Lasagna', 'Mmmm lasagna!', '../../assets/img/lasagna.jpg',
      [new Ingredient('meat', 1), new Ingredient('cheese', 1)]),
  ]
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getSingleRecipe(id: number){
    return this.recipes[id];
  }

}
