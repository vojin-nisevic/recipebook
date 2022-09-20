import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "../models/recipe.model";
import { Ingredient } from "../models/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new Subject<Recipe>();
  ingredientsToAdd = new Subject<Ingredient[]>();
  recipeFreshList = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Beef with vegetables', 'Good meal!', '/assets/img/beef.png',
      [new Ingredient('meat', 1), new Ingredient('tomato', 1)]),
    new Recipe('Beef with rice', 'Healthy meal!', '/assets/img/beef.png',
      [new Ingredient('meat', 1), new Ingredient('cheese', 1)]),
    new Recipe('Lasagna', 'Mmmm lasagna!', '/assets/img/lasagna.jpg',
      [new Ingredient('meat', 1), new Ingredient('cheese', 1)]),
  ]

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getSingleRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    const newRecipe = new Recipe(recipe.name, recipe.description, recipe.imagePath, recipe.ingredients);
    // this.recipes.push(new Recipe(recipe.name, recipe.description, recipe.imagePath, recipe.ingredients));
    console.log(newRecipe + ' Array has ' + this.recipes.length + ' members');
    this.recipes.push(newRecipe);
    console.log(newRecipe + ' Array has ' + this.recipes.length + ' members');
    this.recipeFreshList.next(this.recipes);
    if (recipe === newRecipe) {
      console.log("When adding objects are equal");
    }
  }

  editRecipe(index: number, recipe: Recipe) {
    const old = this.recipes[index];
    old.name = recipe.name;
    old.description = recipe.description;
    old.imagePath = recipe.imagePath;
    old.ingredients = recipe.ingredients;
    this.recipeFreshList.next(this.recipes);
    if (recipe === old) {
      console.log("When editing objects are equal");
    }
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

}
