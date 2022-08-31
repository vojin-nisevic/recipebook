import {Component, EventEmitter, OnInit, Output} from '@angular/core';


import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Beef with vegetables', 'Good meal!', '../../../assets/img/beef.png'),
    new Recipe('Beef with rice', 'Healthy meal!', '../../../assets/img/beef.png'),
    new Recipe('Lasagna', 'Mmmm lasagna!', '../../../assets/img/lasagna.jpg'),
  ]
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipeDetail: Recipe;
  constructor() {

  }

  ngOnInit(): void {

  }

  onSelected(recipe: Recipe) {
    console.log('Selected ' + recipe.name);
    this.recipeDetail = recipe;
    this.recipeWasSelected.emit(recipe);
  }
}
