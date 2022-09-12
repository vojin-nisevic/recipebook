import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipesService} from "../../services/recipes.service";
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
  constructor(private recipeService: RecipesService, private activeRoute: ActivatedRoute,
              private router: Router, private shopService: ShoppingListService) {}

  ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(
      (p => {
        this.id = +p.get('id');
        this.recipeToShow = this.recipeService.getSingleRecipe(this.id);
        console.log('Evo me u init od details');
      })
    );
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.activeRoute});
  }
  sendIngredients(){
    // console.log('Details component: ' + this.recipeToShow.name + ' has ' +this.recipeToShow.ingredients.length);
    // console.log('Details component: ' + this.recipeToShow.ingredients[0].name + ': ' + this.recipeToShow.ingredients[1].name);
    // this.recipeService.ingredientsToAdd.emit(this.recipeToShow.ingredients);
    this.shopService.addListArrayOfIngredients(this.recipeToShow.ingredients);
    // this.recipeService.ingredientsToAdd.subscribe({
    //     next: (s) => this.recipeToShow.ingredients
    // }
    // );
    // console.log('Observable: ' some.subscribe())


    console.log('Details: ' + this.recipeToShow.ingredients[0].amount);
  }
}
