import {Component, EventEmitter, OnInit, Output} from '@angular/core';


import {Recipe} from "../../models/recipe.model";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipeDetail: Recipe;
  constructor(private recipeService: RecipesService) {

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    console.log('Selected ' + recipe.name);
    this.recipeDetail = recipe;
    this.recipeWasSelected.emit(recipe);
  }
}
