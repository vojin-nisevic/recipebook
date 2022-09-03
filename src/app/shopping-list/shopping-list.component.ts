import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  dd: string = '1';
  ingredients: Ingredient[];

  constructor(private shopService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shopService.getIngredients();
    this.shopService.ingredientsAdded.subscribe(
      (ing: Ingredient) => this.ingredients.push(ing)
    );
  }

}
