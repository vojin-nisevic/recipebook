import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from "../models/ingredient.model";
import { ShoppingListService } from "../services/shopping-list.service";
import { RecipesService } from "../services/recipes.service";
import { Subscriber, Subscription } from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private slsSubscription: Subscription;
  private recSubscription: Subscription;

  constructor(private shopService: ShoppingListService, private recipeService: RecipesService) {
    this.ingredients = this.shopService.getIngredients();
  }

  ngOnInit(): void {
    console.log('SL On init');
    this.ingredients = this.shopService.getIngredients();
    // this.slsSubscription = this.shopService.ingredientsAdded.subscribe(
    //   (ing: Ingredient) => {
    //     // console.log('Shopping list component before: ' + this.ingredients.length);
    //     this.ingredients.push(ing);
    //     // console.log('Shopping list component after: ' + this.ingredients.length);
    //   }
    // );

    // this.recipeService.ingredientsToAdd.subscribe(
    //   (ingredientsList: Ingredient[]) => {
    //     // if (this.ingredients.length === 0){
    //     //   this.ingredients = this.shopService.getIngredients();
    //     // }
    //     console.log(ingredientsList);
    //     console.log('Shopping list component: ' + this.ingredients.length);
    //     const copyList = [...ingredientsList];
    //     console.log(copyList);
    //     copyList.forEach(ing => {
    //       if (!this.ingredients.find(el => el.name === ing.name)) {
    //         this.ingredients.push(ing)
    //       } else {
    //         this.ingredients.find(el => el.name === ing.name)
    //           .amount += ing.amount
    //       }
    //       // console.log('Shopping list component: ' + this.ingredients.length);
    //     });
    //   }
    // );
    // console.log(sok);
  }

  ngOnDestroy() {
    // this.slsSubscription.unsubscribe();
    // this.recSubscription.unsubscribe();
  }

}
