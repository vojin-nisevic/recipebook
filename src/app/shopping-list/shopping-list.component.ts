import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from "../models/ingredient.model";
import { ShoppingListService } from "../services/shopping-list.service";
import { RecipesService } from "../services/recipes.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  @ViewChild('f') localForm: NgForm;
  ingredients: Ingredient[];

  constructor(private shopService: ShoppingListService, private recipeService: RecipesService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ingredients = this.shopService.getIngredients();

  }

  selectIngredient(index: number){
    this.shopService.itemToEdit.next(index);
    console.log('shop list: ' + index);
  }
}
