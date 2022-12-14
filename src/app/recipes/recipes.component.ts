import {Component, OnInit} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {RecipesService} from "../services/recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeToSend: Recipe;


  constructor(private recipeService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => this.recipeToSend = recipe
    );
  }


}
