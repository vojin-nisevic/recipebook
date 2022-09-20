import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../models/ingredient.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  currentList = new EventEmitter<Ingredient[]>();
  itemToEdit = new BehaviorSubject<number>(null);
  itemToDelete = new BehaviorSubject<number>(null);


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
    });
    this.currentList.emit(this.ingredients.slice());
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.forEach(p => console.log(p));
    if (!this.ingredients.find(el => el.name.trim() === ing.name.trim())) {
      this.ingredients.push(ing);
    } else {
      this.ingredients.find(el => el.name === ing.name)
        .amount += ing.amount;
    }
    this.currentList.emit(this.ingredients.slice());
  }

  getSingleIngredient(index: number) {
    return this.ingredients[index];
  }

  updateAmount(name: string, am: number, index: number) {
    this.ingredients[index].amount = am;
    this.ingredients[index].name = name;
    this.itemToEdit.next(null);
  }

  deleteIngredient(name: string){
    this.ingredients.splice(this.ingredients.findIndex(el => el.name === name),1);
    this.itemToDelete.next(null);
  }
}
