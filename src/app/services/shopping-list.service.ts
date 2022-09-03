import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Beef', 3),
    new Ingredient('Potato', 10)
  ]

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {
    console.log('Service: ' + this.ingredients.length);
    this.ingredients.push(ing);
    console.log('Service: ' + this.ingredients.length);
    this.ingredientsAdded.emit(ing);
  }
}
