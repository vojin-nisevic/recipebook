import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../models/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsAdded = new Subject<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Beef', 3),
    new Ingredient('Potato', 10)
  ]

  constructor() {
  }

  getIngredients() {
    return this.ingredients;
  }

  addListOfIngredients(ing: Ingredient[]) {
    ing.forEach(ing => {
      if (!this.ingredients.find(el => el.name === ing.name)) {
        this.ingredients.push(Object.create(Object.create(ing)));
      } else {
        this.ingredients.find(el => el.name === ing.name)
          .amount += ing.amount;
      }
    })
  }

  addIngredient(ing: Ingredient) {
    console.log('Service: ' + this.ingredients.length);
    this.ingredients.push(ing);
    console.log('Service: ' + this.ingredients.length);
    this.ingredientsAdded.next(ing);
  }
}
