import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";
import {RecipesService} from "../../../services/recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;


  constructor(private recipeService: RecipesService) {
  }

  ngOnInit(): void {
  }

  onClicked() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
