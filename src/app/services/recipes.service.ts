import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "../models/recipe.model";
import { Ingredient } from "../models/ingredient.model";
import { BehaviorSubject, Subject } from "rxjs";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  ingredientsToAdd = new EventEmitter<Ingredient[]>();

  private recipes: Recipe[] = [
    new Recipe('Beef with vegetables', 'Good meal!', '../../assets/img/beef.png',
      [new Ingredient('Beef', 1), new Ingredient('tomato', 1)]),
    new Recipe('Beef with rice', 'Healthy meal!', '../../assets/img/beef.png',
      [new Ingredient('meat', 1), new Ingredient('cheese', 1)]),
    new Recipe('Lasagna', 'Mmmm lasagna!', '../../assets/img/lasagna.jpg',
      [new Ingredient('meat', 1), new Ingredient('cheese', 1)]),
  ]

  constructor(private shopService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getSingleRecipe(id: number) {
    // let recipeToReturn = Object.create(Recipe);
    // recipeToReturn = this.recipes[id];
    // return recipeToReturn;
    return this.recipes[id];
  }


}
