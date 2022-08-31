import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../models/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeToSend: Recipe;


  constructor() {
  }

  ngOnInit(): void {
  }
  onSelected(recipe: Recipe){
    this.recipeToSend = recipe;
  }

}
