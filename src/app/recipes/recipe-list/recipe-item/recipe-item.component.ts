import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClicked() {
    this.selectedRecipe.emit();
  }
}
