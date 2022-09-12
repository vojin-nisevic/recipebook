import { EventEmitter, Injectable } from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // ingredientsAdded = new EventEmitter<Ingredient>();
  result: any;
  private ingredients: Ingredient[] = [
    new Ingredient('Beef', 3),
    new Ingredient('Potato', 10)
  ]

  constructor() {
  }

  getIngredients() {
    return this.ingredients;
  }

  addListArrayOfIngredients(ing: Ingredient[]){
    // this.ingredients.push(...ing);
    console.log('Array: ' + ing);
    ing.forEach(i => {
      this.result = this.ingredients.find( newResult => newResult.name === i.name);
      console.log('Result: ' + this.result + ': Member: ' + i.name + ' ' + i.amount);
      if (!this.result){
        this.ingredients.push(Object.create(i));
      }
      else {
        // this.ingredients.find(ingr => ingr.name === i.name).amount += i.amount;
        // const num: number = i.amount;
        this.result!.amount = this.result.amount + i.amount;
        // result!.amount += num;
      }
      console.log(i === this.result);
    });
    console.log('Result after loop: ' + this.result);
  }

  addIngredient(ing: Ingredient) {
    console.log('Service: ' + this.ingredients.length);
    this.ingredients.push(ing);
    console.log('Service: ' + this.ingredients.length);
    // this.ingredientsAdded.next(ing);
  }
}
