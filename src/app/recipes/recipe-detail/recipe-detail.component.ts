import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../models/recipe.model";
import { RecipesService } from "../../services/recipes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeToShow: Recipe;
  id: number;

  constructor(private recipeService: RecipesService, private activeRoute: ActivatedRoute, private router: Router,
              private shopService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      (p => {
        this.id = +p.get('id');
        this.recipeToShow = this.recipeService.getSingleRecipe(this.id);
      })
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute });
  }

  sendIngredients() {
    console.log('From send ingredients' + this.recipeToShow.name);
    // this.recipeService.ingredientsToAdd.next(this.recipeToShow.ingredients);
    this.shopService.addListOfIngredients(this.recipeToShow.ingredients);
  }

  onDeleteRecipe() {
    if (this.id !== undefined && this.id !== null) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['/recipes']);
    }
  }
}
