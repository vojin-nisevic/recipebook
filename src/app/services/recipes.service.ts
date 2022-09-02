import { Injectable } from '@angular/core';
import {Recipe} from "../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('Beef with vegetables', 'Good meal!', '../../assets/img/beef.png'),
    new Recipe('Beef with rice', 'Healthy meal!', '../../assets/img/beef.png'),
    new Recipe('Lasagna', 'Mmmm lasagna!', '../../assets/img/lasagna.jpg'),
  ]
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
