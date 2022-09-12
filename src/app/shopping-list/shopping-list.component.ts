import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../models/ingredient.model";
import { ShoppingListService } from "../services/shopping-list.service";
import { RecipesService } from "../services/recipes.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shopService: ShoppingListService, private recipeService: RecipesService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shopService.getIngredients();
    this.shopService.ingredientsAdded.subscribe(
      (ing: Ingredient) => this.ingredients.push(Object.create(ing))
    );

    this.recipeService.ingredientsToAdd.subscribe(
      (ingredientsList: Ingredient[]) => {
        // this.shopService.addListOfIngredients(ingredientsList);
        console.log('Recipe service in Shopping list array length: ' + this.ingredients.length);
        ingredientsList.forEach(ing => {
          if (!this.ingredients.find(el => el.name === ing.name)) {
            this.ingredients.push(Object.create(ing))
          } else {
            this.ingredients.find(el => el.name === ing.name)
              .amount += ing.amount
          }
          console.log('Recipe service in Shopping list array length after: ' + this.ingredients.length);
        });
      }
    );
  }

}
